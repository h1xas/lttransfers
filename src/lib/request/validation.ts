/*
  Request validation: the approved rules (Request Flow Wireframe 6 and 9). Pure functions with no browser APIs.
  Results are codes, not sentences: the page maps a code to its translated message (data/ui.ts).

  Not validated on purpose (9.5): From equal to To, whether a place exists, whether a number is reachable,
  whether a flight is real, the passengers / vehicle combination.
*/
import { normalizeRequest, parsePassengers, type RequestDraft } from './normalize';
import type { ErrorCode, FieldErrors, FieldKey, Method, RawRequest, RequestPayload } from './types';

export const LIMITS = { place: 120, notes: 500, email: 254 } as const;

const FLIGHT = /^[A-Za-z0-9][A-Za-z0-9 -]{1,11}$/;
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_STRIP = /[\s+\-().]/g;

export const isValidEmail = (value: string) => value.length <= LIMITS.email && EMAIL.test(value);

/** 7–15 digits once spaces, +, -, ( ), . are ignored. A missing country code is accepted. */
export const isValidPhone = (value: string) => /^\d{7,15}$/.test(value.replace(PHONE_STRIP, ''));

// ---------- Dates ----------
export interface DateBounds {
  /** Earliest accepted date, YYYY-MM-DD. */
  min: string;
  /** Latest accepted date, YYYY-MM-DD. */
  max: string;
}

const pad = (n: number) => String(n).padStart(2, '0');
const iso = (d: Date) => `${d.getUTCFullYear()}-${pad(d.getUTCMonth() + 1)}-${pad(d.getUTCDate())}`;

function isRealDate(value: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const [y, m, d] = value.split('-').map(Number);
  const date = new Date(Date.UTC(y, m - 1, d));
  return date.getUTCFullYear() === y && date.getUTCMonth() === m - 1 && date.getUTCDate() === d;
}

/** today → today + 2 years: the window the date input and the rules share. */
export function dateBounds(today: string): DateBounds {
  const [y, m, d] = today.split('-').map(Number);
  return { min: today, max: iso(new Date(Date.UTC(y + 2, m - 1, d))) };
}

// ---------- One field ----------
export interface FieldContext {
  /** Needed to judge the contact value. */
  method?: Method | '';
  dates: DateBounds;
}

/** Judges one already-normalised value. `null` means acceptable (optional fields may be empty). */
export function validateField(key: FieldKey, value: string, ctx: FieldContext): ErrorCode | null {
  switch (key) {
    case 'from':
    case 'to':
      if (!value) return 'required';
      return value.length > LIMITS.place ? 'invalid' : null;
    case 'date':
      if (!value) return 'required';
      if (!isRealDate(value)) return 'invalid';
      if (value < ctx.dates.min) return 'past';
      if (value > ctx.dates.max) return 'too_far';
      return null;
    case 'passengers':
      return parsePassengers(value) ? null : value ? 'invalid' : 'required';
    case 'flight':
      return !value || FLIGHT.test(value) ? null : 'invalid';
    case 'method':
      return value === 'whatsapp' || value === 'phone' || value === 'email' ? null : 'required';
    case 'contact':
      if (!value) return 'required';
      if (ctx.method === 'email') return isValidEmail(value) ? null : 'invalid';
      return isValidPhone(value) ? null : 'invalid';
    case 'notes':
      return value.length > LIMITS.notes ? 'too_long' : null;
  }
}

// ---------- The whole request ----------
export type ValidationResult = { ok: true; request: RequestPayload } | { ok: false; errors: FieldErrors };

/**
  Normalises, then validates every field. On success the returned `request` is the canonical payload.
  The page passes its own `dateBounds(...)`, so the window follows the visitor's local day.
*/
export function validateRequest(raw: RawRequest, dates: DateBounds): ValidationResult {
  const draft: RequestDraft = normalizeRequest(raw);
  const ctx: FieldContext = { method: draft.method, dates };
  const errors: FieldErrors = {};
  const check = (key: FieldKey, value: string) => {
    const code = validateField(key, value, ctx);
    if (code) errors[key] = code;
  };
  check('from', draft.from);
  check('to', draft.to);
  check('date', draft.date);
  check('passengers', draft.passengers);
  check('flight', draft.flight ?? '');
  check('method', draft.method);
  check('contact', draft.contact);
  check('notes', draft.notes ?? '');
  if (Object.keys(errors).length) return { ok: false, errors };
  return { ok: true, request: draft as RequestPayload };
}
