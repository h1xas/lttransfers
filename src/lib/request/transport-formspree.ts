/*
  Production transport: one JSON POST to Formspree, straight from the browser. There is no site backend.

  The request goes to the form endpoint in PUBLIC_FORMSPREE_ENDPOINT (https://formspree.io/f/<id>). That value is
  public by design: it identifies the form and carries no secret. Restrict the form to lttransfers.lt in the
  Formspree dashboard (docs/formspree-integration.md).

  `Accept: application/json` makes Formspree answer with JSON instead of redirecting to its hosted thank-you page,
  so the visitor never leaves /request/. Success is reported only for an HTTP 2xx whose body says `ok: true`.
  Every other outcome (network error, timeout, rejection, an unexpected body) is one generic `delivery_error`;
  nothing the provider says reaches the visitor. The request body is never placed in a URL, and nothing is stored.

  This file is the only place that knows Formspree's field conventions (`_subject`, `_replyto`). To change
  provider, replace this file and the one line in send.ts.
*/
import { cleanLine } from './normalize';
import { isValidEmail } from './validation';
import type { RequestPayload, RequestResult } from './types';
import { vehicleName } from './vehicles';

const TIMEOUT_MS = 10_000;
const SUBJECT_PLACE_MAX = 40;

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const METHOD_LABEL = { whatsapp: 'WhatsApp', phone: 'Phone', email: 'Email' } as const;

/** "2026-11-14" → "14 November 2026". English and fixed, so the notification never depends on a locale. */
function formatDate(date: string): string {
  const [y, m, d] = date.split('-').map(Number);
  return MONTHS[m - 1] && d && y ? `${d} ${MONTHS[m - 1]} ${y}` : date;
}

const shorten = (value: string, max: number) => (value.length > max ? `${value.slice(0, max - 1).trimEnd()}…` : value);

/**
  The canonical request as readable Formspree fields. Keys are the labels that appear in the notification email,
  in the order they are listed there. Empty optional fields are left out. Formspree's `_subject` sets the email
  subject (places only, never contact details or notes) and `_replyto` sets Reply-To; the latter is sent only for
  the Email contact method with a valid address, never invented for phone or WhatsApp.
*/
export function toFormspreeFields(request: RequestPayload): Record<string, string> {
  const from = cleanLine(request.from);
  const to = cleanLine(request.to);
  const contact = cleanLine(request.contact);

  const fields: Record<string, string> = {
    _subject: `New transfer request — ${shorten(from, SUBJECT_PLACE_MAX)} → ${shorten(to, SUBJECT_PLACE_MAX)}`,
    From: from,
    To: to,
    Date: formatDate(request.date),
    Passengers: request.passengers,
    'Vehicle preference': vehicleName(request.vehicle),
  };
  if (request.flight) fields['Flight number'] = cleanLine(request.flight);
  fields['Preferred contact'] = METHOD_LABEL[request.method];
  fields.Contact = contact;
  if (request.notes?.trim()) fields.Notes = request.notes.trim();
  fields['Website language'] = request.lang.toUpperCase();
  if (request.method === 'email' && isValidEmail(contact)) fields._replyto = contact;
  return fields;
}

export async function sendRequestFormspree(request: RequestPayload, endpoint: string): Promise<RequestResult> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(toFormspreeFields(request)),
      credentials: 'omit',
      referrerPolicy: 'no-referrer',
      signal: controller.signal,
    });
    if (!response.ok) return { status: 'delivery_error' };
    const body: unknown = await response.json().catch(() => null);
    const accepted = typeof body === 'object' && body !== null && (body as { ok?: unknown }).ok === true;
    return accepted ? { status: 'success' } : { status: 'delivery_error' };
  } catch {
    return { status: 'delivery_error' }; // offline, blocked, timed out
  } finally {
    clearTimeout(timer);
  }
}
