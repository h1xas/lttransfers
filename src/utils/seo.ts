/*
  The one place that maps a page to its language twins and to its public URL.

  The <head> (`rel="alternate" hreflang`, canonical, og:url) and the language switchers in the header and
  footer all call `languageAlternates()`, so SEO and navigation cannot drift apart. The mapping is derived
  from the locale architecture (`stripLocale` + `localePath`): every page exists once per language at the
  same language-relative path, with English at `/` and Lithuanian under `/lt/`.
*/
import { languages, langs, type Lang } from '../data/ui';
import { localePath, stripLocale } from './i18n';

export interface LanguageAlternate {
  lang: Lang;
  /** Language code for `lang=` / `hreflang=`: 'en', 'lt'. Language-targeted, not region-targeted. */
  htmlLang: string;
  label: string;
  short: string;
  /** Root-relative path with trailing slash, for navigation. */
  path: string;
}

/** The same page in every published language (the current one included). */
export function languageAlternates(pathname: string): LanguageAlternate[] {
  // The 404 screens have no real twin URL (`/404/` is not a route): their language switch goes to each home page.
  const base = /^(\/lt)?\/404\/?$/.test(pathname) ? '/' : stripLocale(pathname);
  return langs
    .filter((l) => languages[l].ready)
    .map((l) => ({
      lang: l,
      htmlLang: languages[l].htmlLang,
      label: languages[l].label,
      short: languages[l].short,
      path: localePath(l, base),
    }));
}

/** Absolute public URL for a path. Query strings and fragments are never part of it. */
export function absoluteUrl(pathname: string, site: URL | string): string {
  return new URL(pathname, site).href;
}
