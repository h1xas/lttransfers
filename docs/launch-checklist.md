# Launch checklist

Internal. Two separate concerns: **Cloudflare hosts the static website; Formspree handles transfer-request submissions.**
Transfer request submissions are handled by Formspree, not Cloudflare Email Service. Related lists:
`docs/launch-seo-checklist.md` (live SEO checks), `docs/legal-launch-checklist.md` (legal and business items).

## Cloudflare: static hosting

- [ ] Project deploys the static build (`npm run build:release`, output `dist/`) from the repository.
- [ ] `PUBLIC_FORMSPREE_ENDPOINT` is set in the build environment (build-time variable; changing it needs a rebuild).
- [ ] Custom domain `lttransfers.lt` attached; DNS records correct.
- [ ] HTTPS active; `http://` and `www.` redirect to `https://lttransfers.lt` (single hop, 301).
- [ ] Every page loads on the live domain: `/`, `/lt/`, the four service pages and their `/lt/` twins, `/request/`,
      `/lt/request/`, `/privacy/`, `/terms/` and their `/lt/` twins.
- [ ] `https://lttransfers.lt/sitemap-index.xml`, `/robots.txt` and `/favicon.svg` are live and correct.
- [ ] A missing URL returns HTTP 404 with the custom page (see `docs/launch-seo-checklist.md`).

## Formspree: transfer requests (`docs/formspree-integration.md`)

- [ ] Formspree account/project configured
- [ ] Form created
- [ ] destination set to info@lttransfers.lt (verified if Formspree asked)
- [ ] Formspree endpoint configured (`PUBLIC_FORMSPREE_ENDPOINT`)
- [ ] production domain restriction configured (`lttransfers.lt`)
- [ ] spam protection verified (built-in filtering on)
- [ ] no autoresponder enabled (a request is never "confirmed" automatically)
- [ ] EN form tested (`/request/`)
- [ ] LT form tested (`/lt/request/`)
- [ ] mobile form tested
- [ ] success state verified (only after Formspree accepted the submission; stays on the request page)
- [ ] failure state verified (values kept, "Try again" works, no raw provider error shown)
- [ ] notification arrives at info@lttransfers.lt (readable fields, correct subject, Reply-To only for an Email contact)
- [ ] Privacy Policy reflects Formspree (EN and LT)
- [ ] Formspree retention/archive settings reviewed and recorded in `docs/legal-launch-checklist.md`

### The one production test

Send one controlled request from the live site, for example From Kaunas, To Vilnius, Passengers 2, Notes
"Production Formspree test — please ignore". Check: exactly one submission is created; the email reaches
info@lttransfers.lt; fields are readable and the contact value is correct; the success screen appears; the browser stays
on the request page; nothing says the booking is confirmed. Do not repeat it to spam-test production.
