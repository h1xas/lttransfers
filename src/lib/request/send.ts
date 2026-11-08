/*
  The one seam between the request page and delivery. The page calls `sendRequest(request)` and reacts to the
  `RequestResult`; it neither knows nor cares what is behind it.

    request UI → validation → sendRequest() → Formspree → info@lttransfers.lt

  Which transport runs is decided here and nowhere else:

    PUBLIC_FORMSPREE_ENDPOINT set        → Formspree (production, and development when you want a real send)
    not set, `npm run dev`               → the development mock (transport-mock.ts); delivers nothing
    not set, any production build        → a plain failure. It never pretends to succeed, so a build without an
                                           endpoint shows the failure panel instead of silently losing requests.
                                           `npm run build:release` refuses to build without the endpoint (data/launch.ts).

  Setup: docs/formspree-integration.md.
*/
import { sendRequestFormspree } from './transport-formspree';
import type { RequestPayload, RequestResult } from './types';

const endpoint = (import.meta.env.PUBLIC_FORMSPREE_ENDPOINT ?? '').trim();

export async function sendRequest(request: RequestPayload): Promise<RequestResult> {
  if (endpoint) return sendRequestFormspree(request, endpoint);
  if (import.meta.env.DEV) {
    const { sendRequestMock } = await import('./transport-mock');
    return sendRequestMock(request);
  }
  return { status: 'delivery_error' };
}
