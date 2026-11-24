/*
  Places offered by the booking starter's suggestion list, and referenced by the
  route board. Airports come first (in this order), then common cities.
  Users can always type any other address: suggestions never restrict input.

  The English `name` and the `id` are the stable identity of a place. Other languages add display names in
  `names`; a missing entry falls back to English. Display names never change an id or a route.
*/
import { defaultLang, type Lang } from './ui';

export type CountryCode = 'LT' | 'LV' | 'EE' | 'PL';

type OtherLang = Exclude<Lang, 'en'>;

/** A display name in a non-default language. */
export interface LocalName {
  name: string;
  boardName?: string;
}

export interface Location {
  id: string;
  /** Full name, as offered in suggestions: "Warsaw Chopin Airport". */
  name: string;
  /** Shorter name used on the route board when it differs: "Warsaw Chopin". */
  boardName?: string;
  /** IATA code, airports only. */
  code?: string;
  kind: 'airport' | 'city';
  country: CountryCode;
  /** Extra search terms (other spellings, nearby names). */
  aliases?: string[];
  /** Display names in languages other than English. */
  names?: Partial<Record<OtherLang, LocalName>>;
}

const lt = (name: string, boardName?: string): { lt: LocalName } => ({ lt: boardName ? { name, boardName } : { name } });

export const locations: Location[] = [
  // Airports, in priority order
  { id: 'vno', name: 'Vilnius Airport', code: 'VNO', kind: 'airport', country: 'LT', names: { ...lt('Vilniaus oro uostas'), ru: { name: 'Аэропорт Вильнюса' } } },
  { id: 'kun', name: 'Kaunas Airport', code: 'KUN', kind: 'airport', country: 'LT', names: { ...lt('Kauno oro uostas'), ru: { name: 'Аэропорт Каунаса' } } },
  { id: 'plq', name: 'Palanga Airport', code: 'PLQ', kind: 'airport', country: 'LT', names: { ...lt('Palangos oro uostas'), ru: { name: 'Аэропорт Паланги' } } },
  { id: 'rix', name: 'Riga Airport', code: 'RIX', kind: 'airport', country: 'LV', names: { ...lt('Rygos oro uostas'), ru: { name: 'Аэропорт Риги' } } },
  { id: 'tll', name: 'Tallinn Airport', code: 'TLL', kind: 'airport', country: 'EE', aliases: ['Lennart Meri'], names: { ...lt('Talino oro uostas'), ru: { name: 'Аэропорт Таллина' } } },
  {
    id: 'waw',
    name: 'Warsaw Chopin Airport',
    boardName: 'Warsaw Chopin',
    code: 'WAW',
    kind: 'airport',
    country: 'PL',
    aliases: ['Okecie'],
    names: { ...lt('Varšuvos Šopeno oro uostas', 'Varšuvos Šopeno'), ru: { name: 'Аэропорт имени Шопена, Варшава', boardName: 'Варшава, Шопен' } },
  },
  { id: 'wmi', name: 'Warsaw Modlin Airport', code: 'WMI', kind: 'airport', country: 'PL', names: { ...lt('Varšuvos Modlino oro uostas'), ru: { name: 'Аэропорт Модлин, Варшава', boardName: 'Варшава, Модлин' } } },

  // Cities
  { id: 'vilnius', name: 'Vilnius', kind: 'city', country: 'LT', names: { ru: { name: 'Вильнюс' } } },
  { id: 'kaunas', name: 'Kaunas', kind: 'city', country: 'LT', names: { ru: { name: 'Каунас' } } },
  { id: 'klaipeda', name: 'Klaipėda', kind: 'city', country: 'LT', names: { ru: { name: 'Клайпеда' } } },
  { id: 'siauliai', name: 'Šiauliai', kind: 'city', country: 'LT', names: { ru: { name: 'Шяуляй' } } },
  { id: 'panevezys', name: 'Panevėžys', kind: 'city', country: 'LT', names: { ru: { name: 'Паневежис' } } },
  { id: 'palanga', name: 'Palanga', kind: 'city', country: 'LT', names: { ru: { name: 'Паланга' } } },
  { id: 'nida', name: 'Nida', kind: 'city', country: 'LT', aliases: ['Curonian Spit', 'Neringa'], names: { ru: { name: 'Нида' } } },
  { id: 'alytus', name: 'Alytus', kind: 'city', country: 'LT', names: { ru: { name: 'Алитус' } } },
  { id: 'marijampole', name: 'Marijampolė', kind: 'city', country: 'LT', names: { ru: { name: 'Мариямполе' } } },
  { id: 'druskininkai', name: 'Druskininkai', kind: 'city', country: 'LT', names: { ru: { name: 'Друскининкай' } } },
  { id: 'trakai', name: 'Trakai', kind: 'city', country: 'LT', names: { ru: { name: 'Тракай' } } },
  { id: 'utena', name: 'Utena', kind: 'city', country: 'LT', names: { ru: { name: 'Утена' } } },
  { id: 'riga', name: 'Riga', kind: 'city', country: 'LV', aliases: ['Ryga'], names: { ...lt('Ryga'), ru: { name: 'Рига' } } },
  { id: 'jurmala', name: 'Jūrmala', kind: 'city', country: 'LV', names: { ru: { name: 'Юрмала' } } },
  { id: 'liepaja', name: 'Liepāja', kind: 'city', country: 'LV', aliases: ['Liepoja'], names: { ...lt('Liepoja'), ru: { name: 'Лиепая' } } },
  { id: 'daugavpils', name: 'Daugavpils', kind: 'city', country: 'LV', aliases: ['Daugpilis'], names: { ...lt('Daugpilis'), ru: { name: 'Даугавпилс' } } },
  { id: 'tallinn', name: 'Tallinn', kind: 'city', country: 'EE', aliases: ['Talinas'], names: { ...lt('Talinas'), ru: { name: 'Таллин' } } },
  { id: 'tartu', name: 'Tartu', kind: 'city', country: 'EE', names: { ru: { name: 'Тарту' } } },
  { id: 'parnu', name: 'Pärnu', kind: 'city', country: 'EE', aliases: ['Piarnu'], names: { ...lt('Piarnu'), ru: { name: 'Пярну' } } },
  { id: 'warsaw', name: 'Warsaw', kind: 'city', country: 'PL', aliases: ['Warszawa', 'Varšuva'], names: { ...lt('Varšuva'), ru: { name: 'Варшава' } } },
  { id: 'gdansk', name: 'Gdańsk', kind: 'city', country: 'PL', aliases: ['Gdanskas'], names: { ...lt('Gdanskas'), ru: { name: 'Гданьск' } } },
  { id: 'krakow', name: 'Kraków', kind: 'city', country: 'PL', aliases: ['Krakow', 'Krokuva'], names: { ...lt('Krokuva'), ru: { name: 'Краков' } } },
  { id: 'bialystok', name: 'Białystok', kind: 'city', country: 'PL', aliases: ['Balstogė'], names: { ...lt('Balstogė'), ru: { name: 'Белосток' } } },
  { id: 'suwalki', name: 'Suwałki', kind: 'city', country: 'PL', aliases: ['Suvalkai'], names: { ...lt('Suvalkai'), ru: { name: 'Сувалки' } } },
];

const byId = new Map(locations.map((l) => [l.id, l]));

export function getLocation(id: string): Location {
  const found = byId.get(id);
  if (!found) throw new Error(`Unknown location id: ${id}`);
  return found;
}

const local = (loc: Location, lang: Lang): LocalName | undefined =>
  lang === defaultLang ? undefined : loc.names?.[lang as OtherLang];

/** Full display name in a language: "Warsaw Chopin Airport" / "Varšuvos Šopeno oro uostas". */
export function locationName(loc: Location, lang: Lang = defaultLang): string {
  return local(loc, lang)?.name ?? loc.name;
}

/** The text placed in an input, and sent in the request URL: "Riga Airport RIX" / "Rygos oro uostas RIX". */
export function locationValue(loc: Location, lang: Lang = defaultLang): string {
  const name = locationName(loc, lang);
  return loc.code ? `${name} ${loc.code}` : name;
}

/** Name as printed on the route board (without the code, which is set separately). */
export function boardName(loc: Location, lang: Lang = defaultLang): string {
  const l = local(loc, lang);
  return l ? (l.boardName ?? l.name) : (loc.boardName ?? loc.name);
}

/**
  The spellings that identify a place: its input value and its name in every language. The client matches a stored
  From / To against these to carry it over a language switch (the typed text is all that is stored). Aliases are
  deliberately not here: a typed alias ("Neringa") is the visitor's own words and is left as typed.
*/
export function locationSpellings(loc: Location): string[] {
  const langs = ['en', ...Object.keys(loc.names ?? {})] as Lang[];
  return [...langs.map((l) => locationValue(loc, l)), ...langs.map((l) => locationName(loc, l))];
}
