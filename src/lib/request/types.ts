/*
  The canonical transfer request. One shape, used by the page, the validation and the Formspree transport. It holds
  exactly what the Request Flow Wireframe (5.1) collects and nothing else:
  no UI state, no IP address, user agent, analytics id, timestamp or browser information.
*/
import type { Lang } from '../../data/ui';

export const METHODS = ['whatsapp', 'phone', 'email'] as const;
export type Method = (typeof METHODS)[number];

/** One number 1–8, or '8+' for "8 or more". 8+ is not a service limit; the exact size goes in the notes. */
export type Passengers = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '8+';

export interface RequestPayload {
  from: string;
  to: string;
  /** YYYY-MM-DD */
  date: string;
  passengers: Passengers;
  /** A fleet `request` slug (data/fleet.ts) or 'recommend'. */
  vehicle: string;
  /** Present only for an airport-related journey, and only when given. */
  flight?: string;
  method: Method;
  /** The one contact value that matches `method`. */
  contact: string;
  notes?: string;
  lang: Lang;
}

/** Whatever the form hands us, before it is cleaned up. */
export type RawRequest = Partial<Record<keyof RequestPayload, unknown>>;

export type FieldKey = 'from' | 'to' | 'date' | 'passengers' | 'flight' | 'method' | 'contact' | 'notes';

/** Why a field failed. The page maps a code to its translated message. */
export type ErrorCode = 'required' | 'invalid' | 'past' | 'too_far' | 'too_long';
export type FieldErrors = Partial<Record<FieldKey, ErrorCode>>;

/** What `sendRequest` resolves to. The page needs nothing else from a transport; provider detail never reaches it. */
export type RequestResult = { status: 'success' } | { status: 'delivery_error' };
