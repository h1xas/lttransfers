import { defaultLang, languages, ui, type Lang, type Ui } from '../data/ui';

export function isLang(value: string | undefined): value is Lang {
  return value !== undefined && value in languages;
}

/** `/lt/...` → 'lt', everything else → the default language. */
export function getLangFromUrl(url: URL): Lang {
  const first = url.pathname.split('/')[1];
  return isLang(first) ? first : defaultLang;
}

/** Build a URL for a language-relative path: ('lt', '/request/') → '/lt/request/'. */
export function localePath(lang: Lang, path = '/'): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return lang === defaultLang ? clean : `/${lang}${clean}`;
}

/** Strip a language prefix: '/lt/request/' → '/request/'. */
export function stripLocale(pathname: string): string {
  const first = pathname.split('/')[1];
  if (isLang(first) && first !== defaultLang) {
    return pathname.slice(first.length + 1) || '/';
  }
  return pathname;
}

/** Strings for a language. Both languages are complete (Lithuanian is type-checked against English). */
export function getUi(lang: Lang): Ui {
  return ui[lang];
}

/** Replace {tokens} in a string. */
export function format(template: string, values: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (_, key: string) => String(values[key] ?? ''));
}
