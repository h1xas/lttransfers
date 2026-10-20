/*
  Request validation: the approved rules (Request Flow Wireframe 6 and 9), with no browser APIs, so the page and a
  future server endpoint run exactly the same code. Results are codes, not sentences: the page maps a code to its
  translated message (data/ui.ts).

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

/** Today (YYYY-MM-DD) in a given time zone. */
export function todayInTimeZone(timeZone: string, now = new Date()): string {
  return new Intl.DateTimeFormat('en-CA', { timeZone, year: 'numeric', month: '2-digit', day: '2-digit' }).format(now);
}

/** today → today + 2 years: the window the date input and the rules share. */
export function dateBounds(today: string): DateBounds {
  const [y, m, d] = today.split('-').map(Number);
  return { min: today, max: iso(new Date(Date.UTC(y + 2, m - 1, d))) };
}

/**
  Server window: from *yesterday* in Europe/Vilnius, so a traveller in another time zone is never wrongly
  rejected (9.4). The browser uses its own local `dateBounds` instead.
*/
export function serverDateBounds(now = new Date()): DateBounds {
  const today = todayInTimeZone('Europe/Vilnius', now);
  const [y, m, d] = today.split('-').map(Number);
  return { min: iso(new Date(Date.UTC(y, m - 1, d - 1))), max: dateBounds(today).max };
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
  Pass the browser's own `dateBounds(...)` from the page; a server uses the default `serverDateBounds()`.
*/
export function validateRequest(raw: RawRequest, dates: DateBounds = serverDateBounds()): ValidationResult {
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
