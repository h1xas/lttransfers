/*
  DEVELOPMENT TRANSPORT. Pretends to deliver a request and delivers nothing.

  Only `npm run dev` with no PUBLIC_FORMSPREE_ENDPOINT ever reaches this file (see send.ts); it is not part of a
  production build. It keeps no copy of what it is given: no storage, no file, no database, no console output. Its
  only job is to let the approved success and failure states be exercised without a real form.

  Flags, added to /request/ or /lt/request/:
    ?mockFailure=1           every attempt fails (delivery_error)
    ?mockFailure=once        the first attempt fails, "Try again" succeeds
*/
import type { RequestPayload, RequestResult } from './types';

let attempts = 0;

export async function sendRequestMock(_request: RequestPayload): Promise<RequestResult> {
  attempts += 1;
  await new Promise((resolve) => setTimeout(resolve, 250)); // long enough for the "Sending…" state to be seen

  const flag = new URLSearchParams(location.search).get('mockFailure');
  if (flag === '1' || (flag === 'once' && attempts === 1)) return { status: 'delivery_error' };
  return { status: 'success' };
}
