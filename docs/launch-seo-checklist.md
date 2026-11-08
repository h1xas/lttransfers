# Launch SEO checklist

Only what can be checked once the site is deployed. The static output is already verified locally
(`npm run build && npm run audit:seo`). Nothing here is configured by the repository: hosting, redirects, Search
Console and analytics are all outside it.

## Hosting and redirects

- [ ] `http://lttransfers.lt/…` redirects to `https://lttransfers.lt/…` (single hop, 301).
- [ ] `www.lttransfers.lt` redirects to `https://lttransfers.lt` (same path, 301). Canonical tags always use the non-www host.
- [ ] `/airport-transfers` (no trailing slash) ends up at `/airport-transfers/` with no redirect loop. The site uses trailing slashes everywhere.
- [ ] No automatic language redirect on `/` (English) or `/lt/` (Lithuanian).

## 404 behaviour (Cloudflare to verify)

- [ ] `https://lttransfers.lt/does-not-exist/`, `/airport-transferz/` and `/lt/neegzistuoja/` return **HTTP 404** (not 200, not a redirect to the homepage) with the custom page.
- [ ] The English `404.html` is served for the whole site. The Lithuanian page is built as `/lt/404/` (a normal page), and a static host normally serves only the root `404.html`, so a missing `/lt/…` URL will most likely show the English 404. Confirm; if Lithuanian visitors should get the Lithuanian page, that needs a host rule (not set up).
- [ ] `/404/` and `/lt/404/` are reachable as ordinary pages (HTTP 200) but carry `noindex, follow`, have no canonical and are not in the sitemap. Optionally block them at the host.

## Live files

- [ ] `https://lttransfers.lt/robots.txt` allows everything and lists `https://lttransfers.lt/sitemap-index.xml`.
- [ ] `https://lttransfers.lt/sitemap-index.xml` → `sitemap-0.xml` lists the 16 pages (8 English, 8 Lithuanian), all on `https://lttransfers.lt`.
- [ ] `https://lttransfers.lt/favicon.svg` loads. There is no `.ico`, Apple touch icon or web manifest because no brand assets exist for them (see below).

## Search Console (not connected)

- [ ] Add and verify the `https://lttransfers.lt` property (or the domain property).
- [ ] Submit `sitemap-index.xml`.
- [ ] URL Inspection: the homepage `/`, `/lt/`, and one service page in each language (for example `/airport-transfers/` and `/lt/airport-transfers/`): indexable, user-declared canonical equals Google-selected canonical, hreflang detected.

## Social and structured data

- [ ] Share the homepage and one service page in a link-preview tool (Facebook Sharing Debugger, LinkedIn Post Inspector) in both languages. The image is the hero photograph cropped to 1200 × 630.
- [ ] Run `https://lttransfers.lt/` through Google's Rich Results Test or the Schema.org validator. The only structured data is a minimal `Organization` (name, url, email, telephone) on `/` and `/lt/`.

## Open items

- [ ] Brand spelling in titles, `og:site_name` and JSON-LD is **LTTransfers** (as in `src/data/site.ts` and the visible wordmark). If the public brand should be lowercase `lttransfers` in metadata, change `siteName` in `ui.ts` / `ui.lt.ts`, the ` | LTTransfers` title suffixes and `site.name`.
- [ ] A dedicated 1200 × 630 share image and brand icons (favicon.ico, 180 × 180 Apple touch icon) would need approved brand artwork; none were invented.
- [ ] Schema `legalName` (MKT PASLAUGOS) is left out until the legal form (UAB, MB, IĮ…) is confirmed (`docs/legal-launch-checklist.md`).
