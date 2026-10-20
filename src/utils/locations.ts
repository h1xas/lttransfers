import { locationName, locationSpellings, locationValue, locations } from '../data/locations';
import type { Lang, Ui } from '../data/ui';
import { fold } from './text';

/**
  Compact payload for the client combobox: value, display name, IATA code, kind, country, search key.
  Shared by every form that renders LocationField (the homepage starters and the request page).

  `v` / `l` are in the page language. `f` is the search key and matches the name in every language, so a visitor
  can type "Ryga" on the English page or "Riga" on the Lithuanian one. `x` lists every folded spelling that
  identifies the place; the client uses it to turn a stored From / To into the page language after a language switch.
*/
export function locationPayload(countries: Ui['starter']['countries'], lang: Lang) {
  return locations.map((loc) => ({
    v: locationValue(loc, lang),
    l: locationName(loc, lang),
    c: loc.code ?? '',
    k: loc.kind === 'airport' ? 'a' : 'c',
    y: countries[loc.country],
    f: fold([locationName(loc, lang), loc.code ?? '', ...locationSpellings(loc), ...(loc.aliases ?? [])].join(' ')),
    x: [...new Set(locationSpellings(loc).map(fold))],
  }));
}
