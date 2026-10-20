/*
  DEVELOPMENT TRANSPORT. Pretends to deliver a request and delivers nothing.

  It keeps no copy of what it is given: no storage, no file, no database, no console output. Its only job is to
  let the approved success and failure states be exercised before a real provider exists.

  Development only (production builds ignore these query flags and always succeed):
    ?mockFailure=1           every attempt fails (delivery_error)
    ?mockFailure=once        the first attempt fails, "Try again" succeeds
    ?mockFailure=validation  the server-style response: a contact-value error on the matching field
*/
import type { RequestPayload, RequestResult } from './types';

let attempts = 0;

export async function sendRequestMock(_request: RequestPayload): Promise<RequestResult> {
  attempts += 1;
  await new Promise((resolve) => setTimeout(resolve, 250)); // long enough for the "Sending…" state to be seen

  if (import.meta.env.DEV) {
    const flag = new URLSearchParams(location.search).get('mockFailure');
    if (flag === '1' || (flag === 'once' && attempts === 1)) return { status: 'delivery_error' };
    if (flag === 'validation') return { status: 'validation_error', errors: { contact: 'invalid' } };
  }
  return { status: 'success' };
}
