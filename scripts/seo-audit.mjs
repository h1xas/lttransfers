/*
  Static SEO / link audit of the built site. Run after a build:

    npm run build && npm run audit:seo

  Reads `dist/` only (no network). Exits 1 on any failure, so it can gate a deploy.
  Checks: head tags per page (title, description, one canonical, hreflang reciprocity, x-default, og:url,
  og:image file), duplicate titles / descriptions / canonicals, noindex only on 404 screens, heading order,
  image attributes, every internal link and #anchor, /lt/ links staying Lithuanian, external links, JSON-LD,
  sitemap contents and robots.txt.
*/
import fs from 'node:fs';
import path from 'node:path';

const ORIGIN = 'https://lttransfers.lt';
const dist = path.resolve(process.argv[2] ?? 'dist');

const failures = [];
const notes = [];
const fail = (page, msg) => failures.push(`${page}: ${msg}`);

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? walk(path.join(dir, e.name)) : [path.join(dir, e.name)]));
}
const rel = (f) => path.relative(dist, f).split(path.sep).join('/');
const urlOf = (f) => '/' + rel(f).replace(/index\.html$/, '');

const files = walk(dist);
const pageFiles = files.filter((f) => f.endsWith('.html'));
const isError = (url) => /\/404(\.html|\/)?$/.test(url);

const pages = pageFiles.map((file) => {
  const html = fs.readFileSync(file, 'utf8');
  const head = html.slice(0, html.indexOf('</head>'));
  return { file, url: urlOf(file), html, head };
});
const byUrl = new Map(pages.map((p) => [p.url, p]));

const attr = (tag, name) => tag.match(new RegExp(`\\s${name}="([^"]*)"`))?.[1] ?? null;
const tags = (html, name) => [...html.matchAll(new RegExp(`<${name}\\b[^>]*>`, 'g'))].map((m) => m[0]);
const decode = (s) => s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'");

const matrix = [];
const seen = { title: new Map(), description: new Map(), canonical: new Map() };
const dup = (kind, value, url) => {
  if (!seen[kind].has(value)) seen[kind].set(value, []);
  seen[kind].get(value).push(url);
};

for (const p of pages) {
  const { url, html, head } = p;
  const error = isError(url);
  const expectLang = url.startsWith('/lt/') ? 'lt' : 'en';

  // ---- <html lang>
  const lang = html.match(/<html lang="([^"]+)"/)?.[1];
  if (lang !== expectLang) fail(url, `html lang is "${lang}", expected "${expectLang}"`);

  // ---- title / description
  const titles = [...head.matchAll(/<title>([^<]*)<\/title>/g)];
  if (titles.length !== 1) fail(url, `${titles.length} <title> tags`);
  const title = decode(titles[0]?.[1] ?? '');
  const descTags = tags(head, 'meta').filter((t) => attr(t, 'name') === 'description');
  if (descTags.length !== 1) fail(url, `${descTags.length} meta descriptions`);
  const description = decode(attr(descTags[0] ?? '', 'content') ?? '');
  if (!error) {
    if (!title.endsWith(' | LTTransfers')) fail(url, `title lacks brand suffix: "${title}"`);
    if (description.length < 100 || description.length > 175) fail(url, `description length ${description.length}`);
    dup('title', title, url);
    dup('description', description, url);
  }

  // ---- robots meta: only error screens may be noindex
  const robots = tags(head, 'meta').filter((t) => attr(t, 'name') === 'robots').map((t) => attr(t, 'content'));
  if (error) {
    if (!(robots.length === 1 && /noindex/.test(robots[0]))) fail(url, 'error page must be noindex');
  } else if (robots.length) fail(url, `unexpected robots meta: ${robots.join(',')}`);

  // ---- canonical + hreflang + og
  const links = tags(head, 'link');
  const canonicals = links.filter((t) => attr(t, 'rel') === 'canonical').map((t) => attr(t, 'href'));
  const alternates = links.filter((t) => attr(t, 'rel') === 'alternate' && attr(t, 'hreflang')).map((t) => ({ hreflang: attr(t, 'hreflang'), href: attr(t, 'href') }));
  const ogUrl = tags(head, 'meta').find((t) => attr(t, 'property') === 'og:url');

  if (error) {
    if (canonicals.length || alternates.length || ogUrl) fail(url, 'error page must not carry canonical / hreflang / og:url');
  } else {
    if (canonicals.length !== 1) fail(url, `${canonicals.length} canonicals`);
    const expected = ORIGIN + url;
    if (canonicals[0] !== expected) fail(url, `canonical "${canonicals[0]}" is not self "${expected}"`);
    if (/[?#]/.test(canonicals[0] ?? '')) fail(url, 'canonical has query or fragment');
    dup('canonical', canonicals[0], url);
    if (attr(ogUrl ?? '', 'content') !== expected) fail(url, 'og:url is not the canonical');

    const twin = (l) => (l === 'lt' ? '/lt' + (url.startsWith('/lt/') ? url.slice(3) : url) : url.startsWith('/lt/') ? url.slice(3) : url);
    const want = { en: ORIGIN + twin('en'), lt: ORIGIN + twin('lt'), 'x-default': ORIGIN + twin('en') };
    for (const [k, v] of Object.entries(want)) {
      const got = alternates.filter((a) => a.hreflang === k);
      if (got.length !== 1 || got[0].href !== v) fail(url, `hreflang ${k} is ${JSON.stringify(got.map((g) => g.href))}, expected ${v}`);
    }
    if (alternates.length !== 3) fail(url, `${alternates.length} hreflang links, expected 3`);
    // reciprocity: the other language page must list this URL back
    for (const a of alternates.filter((x) => x.hreflang !== 'x-default')) {
      const other = byUrl.get(a.href.replace(ORIGIN, ''));
      if (!other) {
        fail(url, `hreflang target missing from build: ${a.href}`);
        continue;
      }
      const back = tags(other.head, 'link').some((t) => attr(t, 'rel') === 'alternate' && attr(t, 'hreflang') === expectLang && attr(t, 'href') === ORIGIN + url);
      if (!back) fail(url, `hreflang not reciprocated by ${a.href}`);
    }
  }

  // ---- og / twitter basics
  const metas = tags(head, 'meta');
  const og = (k) => attr(metas.find((t) => attr(t, 'property') === k) ?? '', 'content');
  const tw = (k) => attr(metas.find((t) => attr(t, 'name') === k) ?? '', 'content');
  if (og('og:title') !== title && decode(og('og:title') ?? '') !== title) fail(url, 'og:title differs from title');
  if (decode(og('og:description') ?? '') !== description) fail(url, 'og:description differs from description');
  if (og('og:site_name') !== 'LTTransfers') fail(url, 'og:site_name');
  if (og('og:type') !== 'website') fail(url, 'og:type');
  const ogLocale = expectLang === 'lt' ? ['lt_LT', 'en_US'] : ['en_US', 'lt_LT'];
  if (og('og:locale') !== ogLocale[0]) fail(url, `og:locale ${og('og:locale')}`);
  const altLocales = metas.filter((t) => attr(t, 'property') === 'og:locale:alternate').map((t) => attr(t, 'content'));
  if (altLocales.join() !== ogLocale[1]) fail(url, `og:locale:alternate ${altLocales}`);
  const img = og('og:image');
  if (!img?.startsWith(ORIGIN + '/')) fail(url, `og:image not absolute on production origin: ${img}`);
  else {
    const f = path.join(dist, img.replace(ORIGIN, ''));
    if (!fs.existsSync(f)) fail(url, `og:image file missing: ${img}`);
    else {
      const b = fs.readFileSync(f);
      // JPEG SOF scan for dimensions
      let w = 0,
        h = 0;
      for (let i = 2; i < b.length; ) {
        if (b[i] !== 0xff) break;
        const m = b[i + 1];
        const len = b.readUInt16BE(i + 2);
        if (m >= 0xc0 && m <= 0xc3) {
          h = b.readUInt16BE(i + 5);
          w = b.readUInt16BE(i + 7);
          break;
        }
        i += 2 + len;
      }
      if (w !== 1200 || h !== 630) fail(url, `og:image is ${w}x${h}, expected 1200x630`);
      if (og('og:image:width') !== '1200' || og('og:image:height') !== '630') fail(url, 'og:image width/height tags');
    }
  }
  if (tw('twitter:card') !== 'summary_large_image') fail(url, 'twitter:card');
  if (tw('twitter:image') !== img) fail(url, 'twitter:image differs from og:image');
  if (!og('og:image:alt')) fail(url, 'og:image:alt missing');

  // ---- stale / forbidden strings
  if (/localhost|127\.0\.0\.1|pages\.dev|workers\.dev|www\.lttransfers/i.test(html)) fail(url, 'localhost / preview / www host found in HTML');
  if (/href="#"/.test(html)) fail(url, 'href="#" found');

  // ---- JSON-LD
  for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try {
      const j = JSON.parse(m[1]);
      if (url !== '/' && url !== '/lt/') fail(url, 'JSON-LD outside homepage');
      if (j['@type'] !== 'Organization') fail(url, `unexpected JSON-LD type ${j['@type']}`);
      notes.push(`JSON-LD on ${url}: ${m[1]}`);
    } catch (e) {
      fail(url, `invalid JSON-LD: ${e.message}`);
    }
  }

  // ---- headings
  const heads = [...html.matchAll(/<h([1-6])[\s>]/g)].map((m) => +m[1]);
  if (heads.filter((n) => n === 1).length !== 1) fail(url, `${heads.filter((n) => n === 1).length} <h1>`);
  heads.reduce((prev, n) => {
    if (n > prev + 1) fail(url, `heading level jumps h${prev} → h${n}`);
    return n;
  }, 0);

  // ---- images
  for (const t of tags(html, 'img')) {
    const src = attr(t, 'src');
    if (attr(t, 'alt') === null) fail(url, `img without alt: ${src}`);
    if (!attr(t, 'width') || !attr(t, 'height')) fail(url, `img without width/height: ${src}`);
  }

  matrix.push({ page: url, lang, title, desc: description.length, canonical: canonicals[0] ?? '-', hreflang: alternates.map((a) => a.hreflang).join('/') || '-', robots: robots[0] ?? 'index' });
}

for (const [kind, map] of Object.entries(seen)) for (const [v, urls] of map) if (urls.length > 1) fail(urls.join(' & '), `duplicate ${kind}: "${v}"`);

// ---- internal links, anchors, language consistency, external links
const external = new Map();
let internalCount = 0;
for (const p of pages) {
  const isLt = p.url.startsWith('/lt/');
  for (const t of tags(p.html, 'a')) {
    const raw = attr(t, 'href');
    if (raw === null) continue;
    const href = decode(raw);
    if (/^(mailto:|tel:)/.test(href) || href.startsWith('#')) continue; // same-page fragments are checked below
    if (/^https?:\/\//.test(href) && !href.startsWith(ORIGIN)) {
      if (!external.has(href)) external.set(href, []);
      external.get(href).push(p.url);
      continue;
    }
    internalCount++;
    const u = new URL(href.startsWith(ORIGIN) ? href : href, ORIGIN + p.url);
    let pathname = u.pathname;
    const isSwitcher = attr(t, 'hreflang') !== null;
    if (/^\/_astro\/|^\/favicon/.test(pathname)) {
      if (!fs.existsSync(path.join(dist, pathname))) fail(p.url, `missing asset ${href}`);
      continue;
    }
    if (!pathname.endsWith('/')) fail(p.url, `internal link without trailing slash: ${href}`);
    const target = byUrl.get(pathname);
    if (!target) {
      fail(p.url, `dead internal link ${href}`);
      continue;
    }
    if (isError(pathname) && !isSwitcher && !isError(p.url)) fail(p.url, `link to error page ${href}`);
    if (isLt && !pathname.startsWith('/lt/') && !isSwitcher) fail(p.url, `LT page links to English page ${href}`);
    if (!isLt && pathname.startsWith('/lt/') && !isSwitcher) fail(p.url, `EN page links to Lithuanian page ${href}`);
    if (u.hash) {
      const id = decodeURIComponent(u.hash.slice(1));
      const n = (target.html.match(new RegExp(`\\sid="${id.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"`, 'g')) || []).length;
      if (n !== 1) fail(p.url, `anchor ${href} resolves to ${n} elements`);
    }
  }
  // same-page fragment links
  for (const m of p.html.matchAll(/<a\b[^>]*\shref="#([^"]+)"/g)) {
    const n = (p.html.match(new RegExp(`\\sid="${m[1]}"`, 'g')) || []).length;
    if (n !== 1) fail(p.url, `same-page anchor #${m[1]} resolves to ${n} elements`);
  }
}
for (const [href, from] of external) {
  if (!href.startsWith('https://')) fail(from[0], `non-https external link ${href}`);
  if (/example\.|placeholder|localhost|todo/i.test(href)) fail(from[0], `placeholder external link ${href}`);
}

// ---- sitemap
const sitemapIndex = path.join(dist, 'sitemap-index.xml');
const sitemapFiles = [];
if (!fs.existsSync(sitemapIndex)) fail('sitemap', 'sitemap-index.xml missing');
else {
  const idx = fs.readFileSync(sitemapIndex, 'utf8');
  for (const m of idx.matchAll(/<loc>([^<]+)<\/loc>/g)) {
    if (!m[1].startsWith(ORIGIN + '/')) fail('sitemap-index', `loc outside production origin: ${m[1]}`);
    sitemapFiles.push(path.join(dist, m[1].replace(ORIGIN, '')));
  }
}
const sitemapUrls = [];
for (const f of sitemapFiles) {
  if (!fs.existsSync(f)) {
    fail('sitemap', `listed sitemap file missing: ${rel(f)}`);
    continue;
  }
  const xml = fs.readFileSync(f, 'utf8');
  for (const m of xml.matchAll(/<url>\s*<loc>([^<]+)<\/loc>/g)) sitemapUrls.push(m[1]);
}
const indexable = pages.filter((p) => !isError(p.url)).map((p) => ORIGIN + p.url);
for (const u of sitemapUrls) {
  if (!indexable.includes(u)) fail('sitemap', `unexpected URL ${u}`);
  if (/[?#]|localhost|404/.test(u)) fail('sitemap', `bad URL ${u}`);
}
for (const u of indexable) if (!sitemapUrls.includes(u)) fail('sitemap', `missing indexable page ${u}`);
if (new Set(sitemapUrls).size !== sitemapUrls.length) fail('sitemap', 'duplicate URLs');

// ---- robots.txt
const robotsFile = path.join(dist, 'robots.txt');
if (!fs.existsSync(robotsFile)) fail('robots.txt', 'missing');
else {
  const r = fs.readFileSync(robotsFile, 'utf8');
  if (/^\s*Disallow:\s*\S/m.test(r)) fail('robots.txt', 'contains a Disallow rule');
  const sm = r.match(/^Sitemap:\s*(\S+)/m)?.[1];
  if (!sm || !fs.existsSync(path.join(dist, sm.replace(ORIGIN, '')))) fail('robots.txt', `Sitemap directive "${sm}" does not point at a built file`);
}

// ---- report
console.table(matrix);
for (const n of notes) console.log(n);
console.log(`\nPages: ${pages.length} (${indexable.length} indexable) · sitemap URLs: ${sitemapUrls.length} · internal links checked: ${internalCount} · external links: ${external.size}`);
for (const [h, from] of external) console.log(`  external ${h}  (${[...new Set(from)].length} page(s))`);
if (failures.length) {
  console.error(`\n✗ ${failures.length} problem(s):`);
  for (const f of failures) console.error('  - ' + f);
  process.exit(1);
}
console.log('\n✓ SEO audit passed');
