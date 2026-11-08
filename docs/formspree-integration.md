# Transfer requests: Formspree integration

Source of truth for how a request leaves the website. The page behaviour is specified in `LT Transfers — Request Flow Wireframe.md`.

## Architecture

```
Browser (static Astro site, hosted on Cloudflare)
   │  request form → validation → sendRequest()
   │  AJAX POST (JSON, Accept: application/json)
   ▼
Formspree
   ▼
info@lttransfers.lt
```

| Concern | Decision |
| --- | --- |
| Hosting | Cloudflare (static hosting, domain, DNS, HTTPS, redirects) |
| Application | Static Astro (`output: 'static'`) |
| Transfer request provider | Formspree |
| Destination | info@lttransfers.lt |
| Custom API backend | None |
| Database | None |
| Customer account system | None |

Cloudflare only hosts the site. It does not process, store or send transfer requests. There is no Worker, no
`/api/request` and no email sending in this project.

## Code

```
src/lib/request/
  types.ts               canonical RequestPayload, error codes, RequestResult
  normalize.ts           cleaning (control characters, CR/LF, whitespace, flight, unknown vehicle → recommend)
  validation.ts          the approved rules; the page maps error codes to EN/LT messages
  send.ts                sendRequest(): the one seam the page calls, and where the transport is chosen
  transport-formspree.ts the only file that knows Formspree (field mapping + fetch)
  transport-mock.ts      development only; delivers nothing
```

The page (`src/scripts/request-form.ts`) validates, then calls `sendRequest()`. It contains no provider code. To move to
another provider later, replace `transport-formspree.ts` and the one line in `send.ts`.

### Which transport runs

| Situation | Result |
| --- | --- |
| `PUBLIC_FORMSPREE_ENDPOINT` set | Formspree |
| Not set, `npm run dev` | Development mock: waits 250 ms and "succeeds". Delivers nothing. |
| Not set, any production build | The failure state. It never pretends to succeed. |
| `npm run build:release` without the endpoint | Build fails (`src/data/launch.ts`) |

Mock flags (dev only, no endpoint set): `?mockFailure=1` fails every attempt; `?mockFailure=once` fails the first attempt
so "Try again" can be exercised.

### What is submitted

A JSON object with readable keys, so the notification email reads as a form. Empty optional fields are left out.

| Key | Value |
| --- | --- |
| `_subject` | `New transfer request — Kaunas → Vilnius` (places only, each shortened to 40 characters) |
| `From`, `To` | as entered |
| `Date` | `20 November 2026` |
| `Passengers` | `1`–`8` or `8+` |
| `Vehicle preference` | `Mercedes-Benz E-Class`, or `Recommend a vehicle` |
| `Flight number` | only for an airport journey, and only if given |
| `Preferred contact` | `WhatsApp`, `Phone` or `Email` |
| `Contact` | the phone number or email address |
| `Notes` | only if given |
| `Website language` | `EN` or `LT` |
| `_replyto` | only when the contact method is Email and the address is valid; never set for phone or WhatsApp |

No fields beyond these are sent: no IP address, user agent, timestamp or analytics id from the site. The body is never
placed in a URL and nothing is written to localStorage or cookies. `_subject` never contains a phone number, email address
or notes.

### Success and failure

Success is shown only when Formspree answers with an HTTP 2xx **and** a JSON body with `ok: true`. Anything else
(network error, 10 s timeout, a 4xx/5xx, an unexpected body) shows the existing friendly EN/LT failure panel with the
entered values kept and "Try again" available. Formspree's response text is never displayed. The visitor is never
redirected to a Formspree page.

## Formspree setup

1. Create a Formspree account and a project.
2. Create a form for LTTransfers requests.
3. Set the destination (notification) email to `info@lttransfers.lt`. Confirm it if Formspree sends a verification email.
4. Copy the form endpoint (`https://formspree.io/f/<id>`).
5. Set `PUBLIC_FORMSPREE_ENDPOINT` to it (see Configuration). The endpoint is a public identifier, not a secret; do not
   commit a real one to the repository.
6. Restrict the form to the production domain in the Formspree form settings (allowed domains): `lttransfers.lt`. Add
   `www.lttransfers.lt` only if it ever serves the form, and a staging domain only while testing. Do not leave submission
   open to every origin if the plan allows restricting it.
7. Spam protection: keep Formspree's built-in spam filtering enabled. No CAPTCHA and no Turnstile are used. If spam
   becomes a real problem, enable the protection Formspree offers rather than building a backend.
8. Do **not** enable an autoresponder / customer confirmation. A submission means "transfer request sent", never
   "booking confirmed", and no automatic email may say or imply a confirmation. Disable any autoresponse left over from
   earlier experiments.
9. Check the notification subject. The site sends `_subject`. If the plan does not honour it, set a stable subject in the
   form settings instead: `New lttransfers request`.
10. Review submission retention and archive settings in the Formspree account, and record the result in
    `docs/legal-launch-checklist.md` (the Privacy Policy deliberately states no retention period).
11. Send **one** controlled production test (see `docs/launch-checklist.md`).

## Configuration

The only form-related setting is:

```
PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/<id>
```

`.env.example` lists it empty. Astro inlines `PUBLIC_*` values into the client bundle **at build time**, so set it in
the build environment (the Cloudflare project's build variables, or a local `.env`, which is git-ignored) before
building. Changing it requires a rebuild.

## Development

- `npm run dev` with no endpoint uses the mock, so the form can be worked on without sending anything.
- To exercise the real transport without touching the production form, create a separate Formspree test form and put its
  endpoint in your local `.env` (never commit it), or point the variable at a local stub. Allow `localhost` in that test
  form's domain settings.
- `npm run build` without the endpoint is a valid static build whose request form shows the failure state when sent.
  Only `npm run build:release` insists on the endpoint.

## Not part of this architecture

Cloudflare Email Service, email bindings, a request-processing Worker, `/api/request`, server-side Turnstile
verification, Resend, SendGrid, Mailgun, EmailJS, any database, CRM, D1, KV, Supabase or Firebase. If one of these is
proposed again, it replaces this document first.

## Known limits

- The form needs JavaScript; there is no no-JS submission path (a plain POST would reach the static host, not Formspree,
  and sending visitors to Formspree's hosted page is deliberately avoided). The page's "Prefer to talk?" WhatsApp and
  phone links work without JavaScript.
- Formspree's own spam filtering and retention behave according to the account plan; neither is controlled from this
  repository.
