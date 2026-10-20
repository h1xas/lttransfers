# Request page: email integration notes

Source of truth: `LT Transfers — Request Flow Wireframe.md` (sections 6, 9, 12 and 13).

## Current state

| Piece | Status | Where |
| --- | --- | --- |
| Request UI (`/request/`) | Complete | `src/components/RequestPage.astro`, `src/styles/request.css`, `src/scripts/request-form.ts` |
| Canonical request type | Complete | `src/lib/request/types.ts` (`RequestPayload`) |
| Normalisation | Complete | `src/lib/request/normalize.ts` |
| Validation (shared, no browser APIs) | Complete | `src/lib/request/validation.ts` |
| Email content builder | Complete | `src/lib/request/email.ts` (`buildRequestEmail`) |
| Delivery | **Mocked** | `src/lib/request/send.ts` → `transport-mock.ts` |
| Endpoint, provider, secrets | **Not started** | – |

There is no database, no real email provider and no server runtime. The site is still `output: 'static'`. The mock
keeps nothing: no storage, no file, no console output.

## Data flow

```
page  →  validateRequest()  →  sendRequest(request)  →  [mock now | POST /api/request at launch]
                                                              │
                          server: validateRequest() → buildRequestEmail() → provider → inbox
```

- `RequestPayload` is only: `from, to, date, passengers, vehicle, flight?, method, contact, notes?, lang`.
- `validateRequest(raw, dateBounds?)` normalises, then returns `{ ok: true, request }` or `{ ok: false, errors }`.
  Errors are codes (`required | invalid | past | too_far | too_long`) per field, not sentences. The page maps codes
  to its translated copy; a server can return them unchanged.
- The browser passes its own date window (`dateBounds(today)`); a server uses the default `serverDateBounds()`, which
  accepts anything from *yesterday in Europe/Vilnius* (wireframe 9.4).
- `buildRequestEmail(request)` returns `{ subject, text, replyTo? }`. Plain text, empty optionals omitted, `replyTo`
  only for a valid Email contact. It contains no provider, SMTP or HTTP code.
- `sendRequest(request)` resolves to `{ status: 'success' } | { status: 'validation_error', errors } | { status: 'delivery_error' }`.
  The page handles those three results and nothing else.

## Development-only mock flags

Add to `/request/` while running `npm run dev` (production builds ignore them):

- `?mockFailure=1` every attempt fails (failure panel, values kept)
- `?mockFailure=once` first attempt fails, "Try again" succeeds
- `?mockFailure=validation` a server-style field error on the contact value

## Launch steps

1. **Choose the deployment runtime.** Cloudflare is the expected host. Nothing is configured yet: no adapter, no
   Wrangler config, no bindings. The site stays static until this step.
2. **Choose the email transport** (Cloudflare Email Service, Resend or another transactional provider).
3. **Create `POST /api/request`** on that runtime (an on-demand Astro route or a small function beside the static site).
   JSON or form body, at most 4 KB, `Cache-Control: no-store`, reject a cross-origin `Origin`.
4. **Call the existing validation.** `validateRequest(body)`; on failure respond `400 { ok: false, errors }`.
5. **Call the existing email builder.** `buildRequestEmail(result.request)`.
6. **Send the email.** The recipient comes from `REQUEST_TO_EMAIL`, the sender from `REQUEST_FROM_EMAIL` (an address
   on an LT Transfers domain with SPF, DKIM and DMARC). Use `replyTo` only when the builder returns one. On provider
   failure or timeout (about 8 s) respond `502`. Do not log the request body; log an error class and a request id only.
   Add a honeypot field and a small per-IP rate limit (wireframe 13.5) here, not in the page.
7. **Replace the mock transport.** In `src/lib/request/send.ts` swap the body for one `fetch('/api/request', …)`
   (the replacement is sketched in that file's header). Map `200` to `success`, `400` to `validation_error`, anything
   else or a network error to `delivery_error`. Delete `transport-mock.ts`. The UI needs no other change.
8. **Configure secrets** in the host, never in the repo. Provider-specific secrets (for example an API key) are
   introduced only once the provider is chosen. Future non-secret names: `REQUEST_TO_EMAIL`, `REQUEST_FROM_EMAIL`.
9. **Run a real end-to-end test**: valid send, failure path, an Email contact (check Reply-To), a WhatsApp contact
   (no Reply-To), an `8+` request, an airport request with a flight number.

Also before launch (wireframe 12.3): the Privacy page must exist, and the "Privacy →" link under the button appears
automatically once `/privacy/` is removed from `unbuiltPaths` in `src/data/launch.ts`. Set `Referrer-Policy:
same-origin` or stricter on `/request` at the host, and exclude query strings from analytics.
