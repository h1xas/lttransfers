/*
  From / To / Date live in sessionStorage so the closing starter opens with what the visitor already entered in
  the hero, and /request opens with the same journey. Nothing else is ever stored: no contact details, notes,
  flight number or vehicle (Request Flow Wireframe 12.5).
*/
import { fold } from '../utils/text';

export const STORE_KEY = 'lt-starter';
export const JOURNEY_FIELDS = ['from', 'to', 'date'] as const;
export type JourneyState = Partial<Record<(typeof JOURNEY_FIELDS)[number], string>>;

export function readJourney(): JourneyState {
  try {
    return JSON.parse(sessionStorage.getItem(STORE_KEY) ?? '{}') as JourneyState;
  } catch {
    return {};
  }
}

export function writeJourney(state: JourneyState) {
  try {
    sessionStorage.setItem(STORE_KEY, JSON.stringify(state));
  } catch {
    /* storage unavailable: the pages still work, they just do not share values */
  }
}

export function clearJourney() {
  try {
    sessionStorage.removeItem(STORE_KEY);
  } catch {
    /* nothing to clear */
  }
}

/**
  The stored From / To is whatever the visitor typed or picked, in the language of the page they were on. When the
  other language's page reads it back, a place it recognises ("Riga Airport RIX", "Ryga") is shown in the page language
  ("Rygos oro uostas RIX"); anything else (a street, a hotel) is returned exactly as typed.
  `places` is the page's `locationPayload`: `v` is the value in the page language, `x` every folded spelling of the place.
*/
export function localizePlace(raw: string, places: { v: string; x: string[] }[]): string {
  const key = fold(raw.trim());
  if (!key) return raw;
  return places.find((place) => place.x.includes(key))?.v ?? raw;
}
