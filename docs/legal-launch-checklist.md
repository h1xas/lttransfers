# Legal and business launch checklist

Internal. This is not a public page and nothing in it is shown to visitors.

The Privacy Policy (`/privacy/`, `/lt/privacy/`) and the Terms & Conditions (`/terms/`, `/lt/terms/`) are written only from
what the website does and what the business has confirmed. They need a **final legal and business review before launch**,
and again once the open items below are settled. Content lives in `src/data/legal.ts` (English) and
`src/data/legal.lt.ts` (Lithuanian); the "Last updated" date is `legalUpdated` in `src/data/legal.ts`.

## What is confirmed and published

| Item | Value | Where |
| --- | --- | --- |
| Public brand | `LTTransfers` | `src/data/site.ts` (`name`) |
| Operator / data controller | MKT PASLAUGOS | `src/data/site.ts` (`operator`) |
| Domain | `lttransfers.lt` | `astro.config.mjs` (`site`) |
| Email | info@lttransfers.lt | `src/data/site.ts` |
| Phone | +370 656 33777 (`tel:+37065633777`) | `src/data/site.ts` |
| WhatsApp | `https://wa.me/37065633777` (same number as the phone) | `src/data/site.ts` |
| Payment | Cash, card, bank transfer; invoices available | Terms |
| VAT | Operator is not VAT-registered | Terms (no VAT field is shown anywhere) |
| Animals | Not transported | Terms only (removed from the FAQ) |

## 1. Operator legal identity (not published, not invented)

None of these are on the website. Each footer / "Operator" row appears automatically once a value is set in
`src/data/site.ts` (`register`). Decide which are shown publicly, and whether the Privacy Policy and Terms must state them.

- [ ] Legal form (for example UAB, MB, IĮ, or other). Confirm what MKT PASLAUGOS is.
- [ ] Company registration code
- [ ] Registered address (needed in the Privacy Policy as the controller's address if the business wants it stated)
- [ ] Passenger transport licence / permit number, if one is required and will be shown
- [ ] Insurance details, only if they will be shown
- [ ] Confirm the exact registered spelling of the name (MKT PASLAUGOS) and the form it should appear in.

## 2. Data protection

- [ ] **Retention.** The Privacy Policy uses criteria only ("as long as necessary…"). Confirm the business's operational
      policy for how long enquiry emails, WhatsApp threads and booking records are kept, and any statutory accounting
      retention that applies. Then decide whether to state concrete periods in the policy.
- [ ] **Hosting provider (Cloudflare).** Named in the policy as website hosting and infrastructure only. Confirm where it
      processes data (inside or outside the EEA) and that a data processing agreement is in place.
- [ ] **Form provider (Formspree).** Named in the policy as the form-submission service that delivers requests to
      info@lttransfers.lt (`docs/formspree-integration.md`). Confirm where it processes data, that a data processing
      agreement is in place, and the account's submission retention/archive setting. The policy deliberately states no
      retention period for Formspree; if a period is configured, decide whether to state it.
- [ ] **International transfers.** The policy says transfers outside the EEA are subject to the safeguards the law requires.
      Confirm that matches Cloudflare and Formspree.
- [ ] **Technical logs.** The policy says hosting providers may process IP addresses and basic request logs. Confirm
      against the final hosting setup.
- [ ] **Analytics and cookies.** None exist today and the policy says so. If analytics, advertising or any non-essential
      cookies are added later, update the policy and add a consent mechanism first.
- [ ] **Records of processing / DPO.** Confirm whether the business needs a record of processing activities, and that no
      DPO is required.
- [ ] **Supervisory authority.** VDAI is named. Confirm this is right for the controller's establishment.
- [ ] **Privacy contact.** info@lttransfers.lt is the only contact for rights requests. Confirm the mailbox is monitored.

## 3. Terms: policies deliberately NOT written

The Terms contain **no** public policy on any of the following, because none has been confirmed. Decide each one; if a
policy is adopted, add it to the Terms (and to the booking confirmation) in both languages.

- [ ] Cancellation (by the customer, by LTTransfers)
- [ ] Refunds
- [ ] Deposits / prepayment
- [ ] Waiting time: free and paid; pickup grace periods; driver waiting duration
- [ ] Flight delays and flight tracking
- [ ] No-shows
- [ ] Luggage limits (exact)
- [ ] Child seats: whether offered, how to request, any charge. If offered, add the FAQ item (it is staged as `tbc` in
      the content plan, not shown)
- [ ] Compensation, and the operator's liability wording (kept minimal: Terms only say mandatory consumer rights are
      not limited)
- [ ] Vehicle substitution if the requested vehicle is not available (the Terms only say a vehicle is a preference)
- [ ] Governing law / dispute resolution and the consumer dispute body, if the business wants them stated
- [ ] Any fees beyond the agreed price (none are mentioned anywhere)

## 4. Content to confirm with the business

- [ ] **VAT invoices.** The FAQ and Terms say a VAT invoice "can be arranged separately" for customers who specifically
      need one, while the operator is not VAT-registered. Confirm with the accountant exactly how that works, and whether
      the wording is correct, before launch.
- [ ] **WhatsApp.** The site now links `wa.me/37065633777`, assuming WhatsApp uses the same number as the phone. Confirm
      the number is active on WhatsApp.
- [ ] **Popular Routes prices.** Seven routes with indicative "from" prices are published (Kaunas–Vilnius €100,
      Vilnius–Klaipėda €250, Kaunas–Riga €250, Vilnius–Riga €300, Kaunas–Nida €200, Kaunas–Warsaw €200,
      Vilnius–Warsaw €270). Confirm whether each is the same in both directions (the board says every route runs in
      both directions). No travel durations are published because none were confirmed.
- [ ] **Example confirmation** (homepage "How booking works") shows an illustrative Kaunas → Riga Airport example,
      captioned as an example. Confirm the business is happy to keep it.
- [ ] **Open Graph image** is the approved hero photograph, cropped to 1200 × 630 at build time (`BaseLayout.astro`). It has no text on it. Replace it with a dedicated share image if the business wants one. SEO items are in `docs/launch-seo-checklist.md`.
- [ ] The "Last updated" date is the implementation date. Update `legalUpdated` whenever the text changes.

## 5. Before go-live (technical, outside this task)

- [ ] Complete the Formspree setup (`docs/formspree-integration.md`, `docs/launch-checklist.md`), then re-read the Privacy Policy against the real account settings.
- [ ] Set `Referrer-Policy: same-origin` (or stricter) on `/request`, and keep query strings out of any future analytics.
- [ ] Final legal review of both legal pages in both languages.
