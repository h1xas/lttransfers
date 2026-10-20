/** Lower-case, diacritic-free text for matching: "Šiauliai" → "siauliai". */
export function fold(text: string): string {
  return text.normalize('NFD').replace(/\p{M}/gu, '').toLowerCase();
}
