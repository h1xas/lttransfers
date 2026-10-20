/*
  Turns whatever the form (or a request body) supplies into a clean draft. Pure and provider-independent:
  no DOM, no HTTP, no storage. Validation then decides whether the draft is acceptable.

  Rules (Request Flow Wireframe 6): single-line values lose control characters and CR/LF (header-injection
  safety) and are trimmed with inner whitespace collapsed; notes keep their line breaks but lose other control
  characters; flight is uppercased and kept only for an airport-related journey; an unknown vehicle becomes
  "recommend"; an unknown language becomes English.
*/
import type { Lang } from '../../data/ui';
import { isAirportJourney } from './airport';
import { METHODS, type Method, type Passengers, type RawRequest } from './types';
import { normalizeVehicle } from './vehicles';

/** A cleaned request that may still be invalid: the fields validation can reject stay loosely typed. */
export interface RequestDraft {
  from: string;
  to: string;
  date: string;
  /** '' when the value could not be read as 1–8 or 8+. */
  passengers: Passengers | '';
  vehicle: string;
  flight?: string;
  /** '' when it is not one of the three methods. */
  method: Method | '';
  contact: string;
  notes?: string;
  lang: Lang;
}

const text = (value: unknown) => (typeof value === 'string' ? value : '');

/** Single-line text: control characters (CR and LF included) become spaces, runs of whitespace collapse. */
export function cleanLine(value: unknown): string {
  return text(value)
    .replace(/[\u0000-\u001f\u007f-\u009f]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/** Multi-line text: CRLF / CR become LF; every other control character is removed. */
export function cleanNotes(value: unknown): string {
  return text(value)
    .replace(/\r\n?/g, '\n')
    .replace(/[\u0000-\u0009\u000b-\u001f\u007f-\u009f]/g, '')
    .trim();
}

/** "8", "8+", "12" → '8', '8+', '8+'. 0, empty and non-numeric text → null. */
export function parsePassengers(raw: string): Passengers | null {
  const match = /^(\d{1,3})(\+?)$/.exec(raw.replace(/\s+/g, ''));
  if (!match) return null;
  const n = Number(match[1]);
  if (n < 1) return null;
  return (n >= 9 || (match[2] && n >= 8) ? '8+' : String(n)) as Passengers;
}

export const normalizeLang = (raw: unknown): Lang => (raw === 'lt' ? 'lt' : 'en');

export function normalizeRequest(raw: RawRequest): RequestDraft {
  const from = cleanLine(raw.from);
  const to = cleanLine(raw.to);
  const draft: RequestDraft = {
    from,
    to,
    date: cleanLine(raw.date),
    passengers: parsePassengers(cleanLine(raw.passengers)) ?? '',
    vehicle: normalizeVehicle(raw.vehicle),
    method: METHODS.find((m) => m === raw.method) ?? '',
    contact: cleanLine(raw.contact),
    lang: normalizeLang(raw.lang),
  };
  const flight = cleanLine(raw.flight).toUpperCase();
  if (flight && isAirportJourney(from, to)) draft.flight = flight;
  const notes = cleanNotes(raw.notes);
  if (notes) draft.notes = notes;
  return draft;
}
