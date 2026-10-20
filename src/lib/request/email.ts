/*
  The future notification email, as a pure function: request in, subject / plain text / proposed Reply-To out.
  It knows nothing about any provider, SMTP, HTTP headers or runtime (Request Flow Wireframe 13.3, 13.4).

  Plain text only, so there is nothing to escape or render. Empty optional fields are omitted. Every value that
  reaches the subject or Reply-To has CR/LF and other control characters removed.
*/
import { cleanLine } from './normalize';
import { isValidEmail } from './validation';
import type { RequestPayload } from './types';
import { vehicleName } from './vehicles';

export interface RequestEmail {
  subject: string;
  text: string;
  /** Only for the Email contact method with a valid address; WhatsApp and Phone never set one. */
  replyTo?: string;
}

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
const LANGUAGE_LABEL = { en: 'English', lt: 'Lithuanian' } as const;
const SUBJECT_PLACE_MAX = 40;

/** "2026-11-14" → "14 November 2026" (English, fixed, so the email never depends on a runtime's locale data). */
export function formatEmailDate(date: string): string {
  const [y, m, d] = date.split('-').map(Number);
  return MONTHS[m - 1] && d && y ? `${d} ${MONTHS[m - 1]} ${y}` : date;
}

const shorten = (value: string, max: number) => (value.length > max ? `${value.slice(0, max - 1).trimEnd()}…` : value);

export function buildRequestEmail(request: RequestPayload): RequestEmail {
  const from = cleanLine(request.from);
  const to = cleanLine(request.to);
  const contact = cleanLine(request.contact);

  const subject = `New transfer request · ${shorten(from, SUBJECT_PLACE_MAX)} → ${shorten(to, SUBJECT_PLACE_MAX)}`;

  const sections: [string, string | undefined][] = [
    ['JOURNEY', `${from} → ${to}`],
    ['DATE', formatEmailDate(request.date)],
    ['PASSENGERS', request.passengers],
    ['VEHICLE PREFERENCE', vehicleName(request.vehicle)],
    ['FLIGHT', request.flight ? cleanLine(request.flight) : undefined],
    ['CONTACT METHOD', METHOD_LABEL[request.method]],
    ['CONTACT', contact],
    ['NOTES', request.notes?.trim() || undefined],
    ['LANGUAGE', LANGUAGE_LABEL[request.lang] ?? LANGUAGE_LABEL.en],
  ];

  const body = sections
    .filter((section): section is [string, string] => Boolean(section[1]))
    .map(([label, value]) => `${label}\n${value}`);
  const text = ['NEW TRANSFER REQUEST', ...body].join('\n\n') + '\n';

  const replyTo = request.method === 'email' && isValidEmail(contact) ? contact : undefined;
  return replyTo ? { subject, text, replyTo } : { subject, text };
}
