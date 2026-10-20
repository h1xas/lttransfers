/*
  The one seam between the request page and delivery. The page calls `sendRequest(request)` and reacts to the
  `RequestResult`; it neither knows nor cares what is behind it.

  Today: the development mock (transport-mock.ts). At launch, once a runtime and an email provider are chosen,
  replace the body with one POST to the endpoint (see docs/request-email-integration.md):

    const res = await fetch('/api/request', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(request),
    });
    if (res.ok) return { status: 'success' };
    if (res.status === 400) return { status: 'validation_error', errors: (await res.json()).errors };
    return { status: 'delivery_error' };   // also: catch a network error and return the same

  Nothing else in the UI should need to change. The request body is never put in a URL.
*/
import { sendRequestMock } from './transport-mock';
import type { RequestPayload, RequestResult } from './types';

export function sendRequest(request: RequestPayload): Promise<RequestResult> {
  return sendRequestMock(request);
}
