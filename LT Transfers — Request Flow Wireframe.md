# LT Transfers — Request Flow Wireframe

Oct 19, 2026 · first draft for review

`/request` is one calm page on which a traveller sends the details of a journey. It is the unrolled version of the homepage ticket strip: the same paper cells, hairlines, uppercase labels and pine focus line, with five more fields and one button. LT Transfers reads the enquiry, replies, agrees a price and only then confirms a booking, so the page is an **enquiry** and never an instant booking, a calculator or a checkout. Nothing here is implemented yet, and the homepage document is not modified by this one.

Visual and brand source: *LT Transfers — Homepage Wireframe Creative Direction* (Nordic Stone + Wayfinding) and the homepage as built (`src/styles/tokens.css`, `RouteStarter.astro`, `LocationField.astro`, `src/data/fleet.ts`, `src/utils/routes.ts`). Where this document goes beyond or differs from the homepage document, the differences are listed in the next section instead of being silently assumed.

## Relationship to the approved homepage document

The homepage document was written when `/request` was imagined as a three-step booking flow ending in an internal booking record. The business model has since been confirmed as enquiry-first, with no website database. This document supersedes the homepage document **for `/request` only**. The homepage itself is unchanged and stays approved.

| # | In the homepage document | In this document | Action on the homepage |
| --- | --- | --- | --- |
| 1 | "Request flow stays the strategy's three steps"; the starter "opens step 1"; the vehicle field sits "at step 2". | One page, no steps, no progress indicator. Prefilled values simply appear in the fields. | None needed. Update the sentence next time the homepage document is revised. |
| 2 | Vehicle preference as a list of six hairline rows with a pine left edge. | A single select field with the same six options and the same default. See 5.5 for why. | None. The homepage never renders this control. |
| 3 | "Output: … into the internal booking record and the confirmation template." | No booking record exists. The request becomes one email. The confirmation shown on the homepage stays an *example of the later written confirmation*, sent separately by LT Transfers. | None. |
| 4 | Closing starter: "If the visitor already submitted a request this session, the strip is replaced by 'Your request [LT-____] is with us.'" | No reference number exists, so that sentence cannot be shown. After a successful send the stored journey is cleared (10.4) and the strips simply start empty again. | **Amend when convenient:** remove the replacement behaviour from the closing strip. Not a blocker for this wireframe. |
| 5 | "Pictograms appear … in the request flow's steppers." | No steppers, no pictograms on `/request`. | None. |
| 6 | Vehicle sentence "We'll confirm the available vehicle and agree the price with you before the booking is confirmed", "used everywhere". | The shorter sentence the built FAQ already uses: "We'll confirm availability when we send your price." (It is literally true on this page.) | None. Both sentences say the same thing. |
| 7 | Sticky mobile action bar "hides … on /request". | Unchanged and relied on: there is no sticky bar here, and the header CTA is also off (the page *is* the request). | None. |
| 8 | The homepage starters use the location hint "City, address or airport" (`starter.locationHint` in `ui.ts`, shared by the hero strip, the closing strip and, once built, `/request`). | Hint changes to **"City, airport or pickup area"**, because the project is strict about data minimisation and an enquiry does not need a street address. See 2.5. | **Shared-component copy change, made at implementation time** together with `/request`. Not changed by this document. |

---

## 1. Goal and principles

### Goal

A visitor can send a useful transfer enquiry in **30–60 seconds**, and in about 20 seconds when From, To and Date arrive prefilled from the homepage. The page feels simple, calm, professional and trustworthy. It must not feel bureaucratic, airline-like or checkout-like.

### The business model the page tells the truth about

1. The traveller sends journey details.
2. LT Transfers reviews the request.
3. LT Transfers contacts the traveller.
4. Vehicle availability and price are discussed and agreed.
5. The booking is confirmed separately.

The page covers step 1 only. Every word on it must be true of an enquiry.

### Primary UX principle

> **If a field is not needed to understand the journey, choose a vehicle or contact the traveller, do not ask for it.**

Every field in section 5 carries a one-line justification. A field with no justification does not exist.

### Principles

| # | Principle | What it rules out |
| --- | --- | --- |
| 1 | **One page, one primary action.** Everything fits on a single scroll with one button at the bottom. | Steps, tabs, progress bars, modals, a sticky CTA. |
| 2 | **Ask once, never twice.** Anything the traveller already typed on the homepage is prefilled and editable. | Re-entering From / To / Date; "confirm your route" screens. |
| 3 | **Minimum data.** Six required values, three optional, nothing for the sake of convention. | Name, company, billing, pickup time, requests for an exact street address, consent boxes, marketing opt-ins. |
| 4 | **Enquiry vocabulary only.** | The words in the table below. |
| 5 | **The homepage's hand, unrolled.** Same cells, rules, type and focus as the ticket strip. | A second design system, boxed form cards, floating labels, shadows, icons on fields. |
| 6 | **Calm failure.** Errors name the exact problem next to the exact field, in plain words. Values are never cleared. | "Invalid input", red banners, apologetic copy, losing what was typed. |
| 7 | **Precise honesty about data.** Say what is true: details are used to respond; no account is created. | "We do not store your data." (an email in a mailbox *is* stored.) |

### Vocabulary

| Use | Never use |
| --- | --- |
| Request a transfer (page title) · Request a price (the route in from the homepage) · **Send request** (button) · Request sent (success) | Book now · Confirm booking · Complete booking · Reserve · Pay now · Instant quote · Calculate price · Fixed price · Booking confirmed · Checkout |

---

## 2. Page architecture

### 2.1 Route and shell

| Item | Specification |
| --- | --- |
| Routes | `/request/` (English) and `/lt/request/` (Lithuanian), as already routed. Static page shell. |
| Title / H1 | `<title>`: "Request a transfer — LT Transfers" (already in `ui.ts`). H1: **Request a transfer**. |
| Indexing | Indexable (it carries useful public information and is in the sitemap). The canonical URL is `/request/` with no query string, so prefilled links (`?from=…&to=…`) and the success / failure screens (client-side state, no URL of their own) never create duplicate pages. |
| Header | The standard header, with the "Request a price" button **off** (`headerCta="off"`); the page is the destination. No nav item is marked current. |
| Mobile action bar | Not rendered on this page. |
| Footer | The standard graphite footer, unchanged. There is no closing band and no second form. |
| Photography | None. This page is functional; the homepage already carries the pictures. |
| Language | The page language switch works as everywhere else. Switching language mid-form keeps only the journey fields, never contact details or notes (see 12.5). |

### 2.2 Page order

| # | Element | Notes |
| --- | --- | --- |
| 1 | Site header | As homepage, CTA off. |
| 2 | Masthead | H1, one supporting sentence, "No account required." Plus the quiet "Prefer to talk?" contact row. |
| 3 | **YOUR JOURNEY** | From · To · Date · Passengers · Flight number (only when the journey looks airport-related). Prefilled values are the "journey summary": the fields themselves, editable in place. There is no separate read-only summary to keep in sync. |
| 4 | **VEHICLE** | Vehicle preference. |
| 5 | **HOW SHOULD WE CONTACT YOU?** | One method (WhatsApp · Phone · Email), then the one matching input. |
| 6 | Anything we should know? | One optional textarea, 500 characters. |
| 7 | Submit area | Send request button, then privacy sentence and Privacy link. |
| 8 | Status regions | Inline field errors, the send-failure panel, or (replacing the form) the success state. |

No extra marketing sections, FAQ, trust sheet or process explainer. The masthead sentence and the success copy carry all the expectation-setting.

### 2.3 Grid

The homepage's single canvas, `.page-grid`, with its tokens: 12 columns ≥ 1100 px (80 px margins and 24 px gutters at 1440), 8 columns 768–1099 px, 4 columns below (20 px margins, 16 px gutters).

| Breakpoint | Masthead | Form |
| --- | --- | --- |
| **≥ 1100 px** | **Left rail c1–c4.** H1, supporting copy, "No account required.", hairline, "Prefer to talk?". The rail is `position: sticky; top: calc(var(--header-h) + 32px)`. | **c5–c12.** About 845 px wide at 1440; capped at 56 rem so it does not stretch on very wide screens. |
| **768–1099 px** | Above the form, c1–c6. | c1–c8, same two-up rows as desktop. |
| **< 768 px** | Above the form, full width. | Full width; From and To stack; Date and Passengers share one row; the Flight number, when shown, is a full-width row beneath them. |

The DOM order is the mobile order (masthead → form → "Prefer to talk?"). On desktop, CSS grid moves "Prefer to talk?" into the left rail beneath the masthead. No duplicate elements.

### 2.4 Form visual language: "the strip, unrolled"

The ticket strip is a row of paper cells: label top-left, value below, 1 px dividers, one outer edge. The form is that object continued downwards, three times.

| Rule | Specification |
| --- | --- |
| **Group** | A group opens with the homepage's **2 px graphite rule** with its label on the rule (`<h2>`, label style: 12/13 px, medium, uppercase, +8% tracking, graphite-2). Space above a group: 48 px desktop, 40 px mobile. No group sits in a card or has its own background. |
| **Cell** | Paper fill. Label **above** the value, inside the cell, top-left; value at `--fs-field` 18 px medium, graphite. Cells inside a group join into one block with a 1 px graphite outer edge and 1 px dividers (graphite at 28%, as in the strip). Radius `--radius-ctl` 2 px. No shadows. |
| **Cell height** | 72 px desktop and tablet, 64 px mobile (the homepage strip uses 56–72). The whole cell is the click target; the real tap target is at least `--tap` 48 px. |
| **Optional** | The word "Optional" sits right-aligned in the label row, 12/13 px, sentence case, graphite-2. Required fields carry no asterisk: the page states the exception, not the rule. |
| **Focus** | A 2 px **pine** line grows along the bottom edge of the focused cell (the starter's behaviour), plus the global `:focus-visible` outline (2 px pine, 3 px offset) for keyboard users. Never suppressed. |
| **Error** | Message text inside the cell below the value (13/14 px), `--error` colour, plus a 2 px `--error` bottom edge and `aria-invalid`. Colour is never the only signal: the words say what is wrong. |
| **Microcopy** | 14 px graphite-2, directly under the block it explains, one line where possible. Only a handful exist on the whole page: two short lines under the journey block (pickup time, exact pickup address), one under the vehicle block, the privacy sentence, and the group-size line inside the Passengers cell. |
| **Primary button** | Solid graphite, bone text, full width of the form column, 64 px desktop / 56 px mobile, label "SEND REQUEST" in the strip's button style (13/14 px, medium, uppercase, +7–8% tracking), the homepage arrow at the right end moving 4 px on hover. One primary per screen. |
| **Secondary** | Text link with 1 px underline, or a 1 px outline button (only used on the success state). |
| **Motion** | 160 ms state changes only (the homepage `--dur-fast`). No entrance animations. Reduced motion: instant. |

**One new token.** The homepage palette has no error colour and the system says errors must never rely on colour alone, so one restrained value is added, used *only* for error text, the 2 px error edge and the send-failure rule:

| Token | Value (proposal) | Contrast |
| --- | --- | --- |
| `--error` | `#8E2F2F` (a dark oxide, not a bright alert red) | ≈ 7.7:1 on paper, ≈ 7.0:1 on stone (re-measure in the build) |

No other colours are introduced. Pine remains the state colour (focus, selected). Graphite and stone do everything else.

### 2.5 What is reused from the built homepage

| Reuse | Source |
| --- | --- |
| From / To inputs with the airport-first suggestion list and IATA codes, and the swap control | `LocationField.astro` and the combobox script in `RouteStarter.astro`, used unchanged. Same labels. The hint becomes **"City, airport or pickup area"** (see the shared-component note below). |
| Cell, label, focus and button styles | `RouteStarter.astro`, which scopes them with `:global`. Implementation should **extract them into a shared stylesheet** rather than copy them. |
| Date field behaviour | `type="date"`, `min` = today (local), tabular numerals. |
| Tokens, grid, type scale, `.label`, `.sr-only`, `:focus-visible` | `tokens.css`, `global.css`. |
| Vehicle list | `data/fleet.ts` (names and `request` slugs, and the `recommend` value). |
| Contact data | `data/site.ts`: no `tel:` or WhatsApp link renders until real values exist (the "Prefer to talk?" row and the failure and success links follow the same rule). |

**Shared-component copy change (implementation note).** The location hint is one shared string: the homepage Request a price starters (hero and closing) and `/request` render the same `LocationField`, and `starter.locationHint` in `ui.ts` currently reads "City, address or airport". When `/request` is implemented, change that shared string to **"City, airport or pickup area"** so the homepage and the request page agree. The homepage is **not** modified by this documentation task. While in the same file, review the suggestion-list status text "No suggestions. You can still enter any address.", which also invites an address; reword it to say that any place can still be typed (for example "No suggestions. You can still type any place."). The control still accepts free text, so a voluntarily typed street address is never blocked; the interface just does not ask for one.

### 2.6 Height budget (desktop 1440 × 900)

Header 64 + top padding 48 + YOUR JOURNEY ≈ 216 (two rows of cells plus two short microcopy lines) + gap 40 + VEHICLE ≈ 124 + gap 40 + CONTACT block ≈ 160 + notes cell 104 + gap 32 + button 64 ≈ 890 px. The button should land at or just below the fold at 1440 × 900 with the privacy sentence beneath it, so a typical visitor needs at most one short scroll. Revealing the Flight number adds one full-width 72 px row to YOUR JOURNEY and moves everything below it down, so on an airport journey the button sits at about 960 px, roughly one short scroll below the fold. This is accepted: semantic clarity matters more than saving a row, and the Flight number is not moved beside the vehicle field to recover the height. Do not shrink cells below 72 px to chase the fold.

---

## 3. Desktop wireframe (1440 px)

Reference frame 1440 × 900. Rail c1–c4, form c5–c12. In the drawings, `‹angle brackets›` mark placeholder text, `●` / `○` the selected / unselected contact option, `!` an error message, `█` the solid graphite button, `⋮` omitted content.

### 3.1 Empty form (default state; WhatsApp is the default contact method)

```
┌─ 1440 × 900 · empty form · WhatsApp preselected ───────────────────────────────────────────────────────┐
│ LT Transfers  Airport  Business & VIP  Intercity ▾  Cars  How it works   ☎ +370 6__ _____  LT · EN     │
│────────────────────────────────────────────────────────────────────────────────────────────────────────│
│   c1 ───── c4                          c5 ──────────────────────────────────────── c12                 │
│                                                                                                        │
│  Request a                             ━━ YOUR JOURNEY ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│  transfer                              ┌──────────────────────────────┬─────────────────────────────┐  │
│                                        │ FROM                       ⇄ │ TO                          │  │
│  Send us your journey details.         │ ‹City, airport or pickup     │ ‹City, airport or pickup    │  │
│  We'll confirm availability and        │ area›                        │ area›                       │  │
│  send you a price.                     ├──────────────────────────────┼─────────────────────────────┤  │
│                                        │ DATE                         │ PASSENGERS                  │  │
│  No account required.                  │ ‹dd/mm/yyyy›                 │ 1                   [−] [+] │  │
│                                        └──────────────────────────────┴─────────────────────────────┘  │
│  ──────────────────────────────────    No need to give a pickup time. We'll agree it with you.         │
│  Prefer to talk?                       Exact pickup address can be agreed later.                       │
│  ☎ +370 6__ _____                                                                                      │
│  WhatsApp →                            ━━ VEHICLE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│                                        ┌────────────────────────────────────────────────────────────┐  │
│                                        │ VEHICLE PREFERENCE                                Optional │  │
│                                        │ Recommend a vehicle                                      ▾ │  │
│                                        └────────────────────────────────────────────────────────────┘  │
│                                        We'll confirm availability when we send your price.             │
│                                                                                                        │
│                                        ━━ HOW SHOULD WE CONTACT YOU? ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│                                        ┌───────────────────┬────────────────────┬───────────────────┐  │
│                                        │ ● WhatsApp        │ ○ Phone            │ ○ Email           │  │
│                                        ├───────────────────┴────────────────────┴───────────────────┤  │
│                                        │ WHATSAPP NUMBER                                            │  │
│                                        │ ‹+370 600 00000›                                           │  │
│                                        └────────────────────────────────────────────────────────────┘  │
│                                                                                                        │
│                                        ┌────────────────────────────────────────────────────────────┐  │
│                                        │ ANYTHING WE SHOULD KNOW?                          Optional │  │
│                                        │ ‹Luggage, an extra stop or anything else relevant to the   │  │
│                                        │ journey›                                                   │  │
│                                        └────────────────────────────────────────────────────────────┘  │
│                                                                                                        │
│                                        ██████████████████████████████████████████████████████████████  │
│                                        ██  SEND REQUEST                                         →  ██  │
│                                        ██████████████████████████████████████████████████████████████  │
│                                        We use these details only to respond to your transfer request.  │
│                                        No customer account is created. Privacy →                       │
│                                                                                                        │
│────────────────────────────────────────────────────────────────────────────────────────────────────────│
│ Footer: unchanged from the homepage (graphite). No closing band, no mobile action bar.                 │
└────────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

### 3.2 Prefilled from the homepage, airport journey, Email selected

The visitor used the homepage strip for Kaunas → Riga Airport RIX on 14 Nov and chose the E-Class in the fleet sheet. Nothing is re-entered. Because "Riga Airport RIX" looks airport-related, a full-width **Flight number** row appears as the third row of the YOUR JOURNEY block, directly under Date and Passengers. Everything below it moves down by one row. The Vehicle group holds the vehicle select alone. The visitor chose Email instead of the default.

```
┌─ 1440 × 900 · prefilled from the homepage · airport journey · Email selected ──────────────────────────┐
│ LT Transfers  Airport  Business & VIP  Intercity ▾  Cars  How it works   ☎ +370 6__ _____  LT · EN     │
│────────────────────────────────────────────────────────────────────────────────────────────────────────│
│   c1 ───── c4                          c5 ──────────────────────────────────────── c12                 │
│                                                                                                        │
│  Request a                             ━━ YOUR JOURNEY ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│  transfer                              ┌──────────────────────────────┬─────────────────────────────┐  │
│                                        │ FROM                       ⇄ │ TO                          │  │
│  Send us your journey details.         │ Kaunas                       │ Riga Airport RIX            │  │
│  We'll confirm availability and        ├──────────────────────────────┼─────────────────────────────┤  │
│  send you a price.                     │ DATE                         │ PASSENGERS                  │  │
│                                        │ 14/11/2026                   │ 2                   [−] [+] │  │
│  No account required.                  ├──────────────────────────────┴─────────────────────────────┤  │
│                                        │ FLIGHT NUMBER                                     Optional │  │
│  ──────────────────────────────────    │ ‹BT123›                                                    │  │
│  Prefer to talk?                       └────────────────────────────────────────────────────────────┘  │
│  ☎ +370 6__ _____                      No need to give a pickup time. We'll agree it with you.         │
│  WhatsApp →                            Exact pickup address can be agreed later.                       │
│                                                                                                        │
│                                        ━━ VEHICLE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│                                        ┌────────────────────────────────────────────────────────────┐  │
│                                        │ VEHICLE PREFERENCE                                Optional │  │
│                                        │ Mercedes-Benz E-Class                                    ▾ │  │
│                                        └────────────────────────────────────────────────────────────┘  │
│                                        We'll confirm availability when we send your price.             │
│                                                                                                        │
│                                        ━━ HOW SHOULD WE CONTACT YOU? ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│                                        ┌───────────────────┬────────────────────┬───────────────────┐  │
│                                        │ ○ WhatsApp        │ ○ Phone            │ ● Email           │  │
│                                        ├───────────────────┴────────────────────┴───────────────────┤  │
│                                        │ EMAIL                                                      │  │
│                                        │ ‹name@example.com›                                         │  │
│                                        └────────────────────────────────────────────────────────────┘  │
│                                                                                                        │
│                                        ┌────────────────────────────────────────────────────────────┐  │
│                                        │ ANYTHING WE SHOULD KNOW?                          Optional │  │
│                                        │ ‹Luggage, an extra stop or anything else relevant to the   │  │
│                                        │ journey›                                                   │  │
│                                        └────────────────────────────────────────────────────────────┘  │
│                                                                                                        │
│                                        ██████████████████████████████████████████████████████████████  │
│                                        ██  SEND REQUEST                                         →  ██  │
│                                        ██████████████████████████████████████████████████████████████  │
│                                        We use these details only to respond to your transfer request.  │
│                                        No customer account is created. Privacy →                       │
│                                                                                                        │
│────────────────────────────────────────────────────────────────────────────────────────────────────────│
│ Footer: unchanged from the homepage (graphite). No closing band, no mobile action bar.                 │
└────────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

Passengers shows 2 here because the visitor changed it from the default of 1.

### 3.3 The three contact variants

Only the label, input type and placeholder change. The block keeps its size, so nothing below it moves.

WhatsApp selected (default):
```
┌───────────────────┬───────────────────┬────────────────────┐
│ ● WhatsApp        │ ○ Phone           │ ○ Email            │
├───────────────────┴───────────────────┴────────────────────┤
│ WHATSAPP NUMBER                                            │
│ +370 600 12345                                             │
└────────────────────────────────────────────────────────────┘
```
Phone selected:
```
┌───────────────────┬───────────────────┬────────────────────┐
│ ○ WhatsApp        │ ● Phone           │ ○ Email            │
├───────────────────┴───────────────────┴────────────────────┤
│ PHONE NUMBER                                               │
│ +370 600 12345                                             │
└────────────────────────────────────────────────────────────┘
```
Email selected:
```
┌───────────────────┬───────────────────┬────────────────────┐
│ ○ WhatsApp        │ ○ Phone           │ ● Email            │
├───────────────────┴───────────────────┴────────────────────┤
│ EMAIL                                                      │
│ name@example.com                                           │
└────────────────────────────────────────────────────────────┘
```

### 3.4 Validation errors, after pressing Send request

See section 9 for the rules. The first invalid field (To) takes focus; no error summary box is drawn.

```
┌─ 1440 × 900 · validation errors after Send request ────────────────────────────────────────────────────┐
│ LT Transfers  Airport  Business & VIP  Intercity ▾  Cars  How it works   ☎ +370 6__ _____  LT · EN     │
│────────────────────────────────────────────────────────────────────────────────────────────────────────│
│   c1 ───── c4                          c5 ──────────────────────────────────────── c12                 │
│                                                                                                        │
│  Request a                             ━━ YOUR JOURNEY ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│  transfer                              ┌──────────────────────────────┬─────────────────────────────┐  │
│                                        │ FROM                       ⇄ │ TO                          │  │
│  Send us your journey details.         │ Kaunas                       │ ‹City, airport or pickup    │  │
│  We'll confirm availability and        │                              │ area›                       │  │
│  send you a price.                     │                              │ ! Enter where you're        │  │
│                                        │                              │   travelling to             │  │
│  No account required.                  ├──────────────────────────────┼─────────────────────────────┤  │
│                                        │ DATE                         │ PASSENGERS                  │  │
│  ──────────────────────────────────    │ 12/10/2026                   │ 2                   [−] [+] │  │
│  Prefer to talk?                       │ ! Choose today or a later    │                             │  │
│  ☎ +370 6__ _____                      │   date                       │                             │  │
│  WhatsApp →                            └──────────────────────────────┴─────────────────────────────┘  │
│                                        No need to give a pickup time. We'll agree it with you.         │
│                                        Exact pickup address can be agreed later.                       │
│                                                                                                        │
│                                        ━━ VEHICLE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│                                        ┌────────────────────────────────────────────────────────────┐  │
│                                        │ VEHICLE PREFERENCE                                Optional │  │
│                                        │ Mercedes-Benz E-Class                                    ▾ │  │
│                                        └────────────────────────────────────────────────────────────┘  │
│                                        We'll confirm availability when we send your price.             │
│                                                                                                        │
│                                        ━━ HOW SHOULD WE CONTACT YOU? ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│                                        ┌───────────────────┬────────────────────┬───────────────────┐  │
│                                        │ ○ WhatsApp        │ ○ Phone            │ ● Email           │  │
│                                        ├───────────────────┴────────────────────┴───────────────────┤  │
│                                        │ EMAIL                                                      │  │
│                                        │ name@example                                               │  │
│                                        │ ! Check the email address, for example name@example.com    │  │
│                                        └────────────────────────────────────────────────────────────┘  │
│                                                                                                        │
│                                        ┌────────────────────────────────────────────────────────────┐  │
│                                        │ ANYTHING WE SHOULD KNOW?                          Optional │  │
│                                        │ ‹Luggage, an extra stop or anything else relevant to the   │  │
│                                        │ journey›                                                   │  │
│                                        └────────────────────────────────────────────────────────────┘  │
│                                                                                                        │
│                                        ! Check the 3 fields marked above.                              │
│                                                                                                        │
│                                        ██████████████████████████████████████████████████████████████  │
│                                        ██  SEND REQUEST                                         →  ██  │
│                                        ██████████████████████████████████████████████████████████████  │
│                                        We use these details only to respond to your transfer request.  │
│                                        No customer account is created. Privacy →                       │
│                                                                                                        │
│────────────────────────────────────────────────────────────────────────────────────────────────────────│
│ Footer: unchanged from the homepage (graphite). No closing band, no mobile action bar.                 │
└────────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

### 3.5 Success and send failure

Drawn where their rules are specified: the success state in section 10 and the send-failure panel in section 11. Both keep the same page frame.

### 3.6 Desktop annotations

| Region | Specification |
| --- | --- |
| Rail H1 | `--fs-display-l` (48 px), medium, tight leading, deliberately smaller than the homepage `display-xl`: this page is functional. It sets in two lines at c1–c4 ("Request a / transfer"). Top-aligned to the first group's rule. |
| Rail copy | "Send us your journey details. We'll confirm availability and send you a price." at `body-l` (20 px), graphite. "No account required." at `body`, graphite-2. |
| Rail contact | Hairline, then "Prefer to talk?" with the phone number (tabular) and "WhatsApp →", exactly as the hero's secondary contact. Rows render only when the real values exist. |
| Journey block | Row 1: FROM (with the ⇄ swap at the right end) c5–c8 · TO c9–c12. Row 2: DATE c5–c8 · PASSENGERS c9–c12. Row 3, only for airport-related journeys: FLIGHT NUMBER, a full-width cell c5–c12. A full-width third row keeps the block a clean rectangle; a half-width cell would leave an empty half. |
| Journey microcopy | Two short lines under the journey block, 14 px graphite-2: "No need to give a pickup time. We'll agree it with you." and "Exact pickup address can be agreed later." The first answers the question the missing Time field would raise (and states the same fact as the homepage FAQ); the second tells the traveller a street address is not needed now. Both are secondary and sit below the block, after the Flight number row when it is shown. |
| Vehicle row | The select spans c5–c12 in every state. The Flight number never shares this row. |
| Contact block | Segmented method row (three equal cells), then the one input row. The notes cell is a separate block 24 px below. |
| Button | Full form-column width, 64 px, directly under the notes with 32 px between. The privacy sentence sits under it in 14 px graphite-2. |

### 3.7 Passenger control states

The quick selector runs 1 to 8, then **8+**. The message appears at 8 and at 8+ so it is clear that a larger group can still send a request. It is guidance, not an error. The same cell is used on mobile.

```
Default (1): − is disabled
┌───────────────────────────────┐
│ PASSENGERS                    │
│ 1                     [−] [+] │
└───────────────────────────────┘

8: still a number; + moves on to 8+
┌───────────────────────────────┐
│ PASSENGERS                    │
│ 8                     [−] [+] │
│ More than 8? Tell us the      │
│ group size in the notes.      │
└───────────────────────────────┘

8+: reads as "8 or more"; + is disabled
┌───────────────────────────────┐
│ PASSENGERS                    │
│ 8+                    [−] [+] │
│ More than 8? Tell us the      │
│ group size in the notes.      │
└───────────────────────────────┘
```

---

## 4. Mobile wireframe (390 px)

Reference frame 390 × 844, 20 px margins, 16 px gutters. One vertical sequence, no wizard, no sticky CTA: the button sits naturally at the bottom of the form.

### 4.1 Empty form

```
┌─ 390 · empty form ─────────────────────────┐
│ LT Transfers      LT · EN   Menu           │
│ ────────────────────────────────────────── │
│                                            │
│ Request a transfer                         │
│                                            │
│ Send us your journey details. We'll        │
│ confirm availability and send you a price. │
│ No account required.                       │
│                                            │
│ ━━ YOUR JOURNEY ━━━━━━━━━━━━━━━━━━━━━━━━━━ │
│ ┌────────────────────────────────────────┐ │
│ │ FROM                                 ⇅ │ │
│ │ ‹City, airport or pickup area›         │ │
│ ├────────────────────────────────────────┤ │
│ │ TO                                     │ │
│ │ ‹City, airport or pickup area›         │ │
│ ├────────────────────┬───────────────────┤ │
│ │ DATE               │ PASSENGERS        │ │
│ │ ‹dd/mm/yyyy›       │ 1         [−] [+] │ │
│ └────────────────────┴───────────────────┘ │
│ No need to give a pickup time. We'll agree │
│ it with you.                               │
│ Exact pickup address can be agreed later.  │
│                                            │
│ ━━ VEHICLE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ │
│ ┌────────────────────────────────────────┐ │
│ │ VEHICLE PREFERENCE            Optional │ │
│ │ Recommend a vehicle                  ▾ │ │
│ └────────────────────────────────────────┘ │
│ We'll confirm availability when we send    │
│ your price.                                │
│                                            │
│ ━━ HOW SHOULD WE CONTACT YOU? ━━━━━━━━━━━━ │
│ ┌─────────────┬─────────────┬────────────┐ │
│ │ ● WhatsApp  │ ○ Phone     │ ○ Email    │ │
│ ├─────────────┴─────────────┴────────────┤ │
│ │ WHATSAPP NUMBER                        │ │
│ │ ‹+370 600 00000›                       │ │
│ └────────────────────────────────────────┘ │
│                                            │
│ ┌────────────────────────────────────────┐ │
│ │ ANYTHING WE SHOULD KNOW?      Optional │ │
│ │ ‹Luggage, an extra stop or anything    │ │
│ │ else relevant to the journey›          │ │
│ └────────────────────────────────────────┘ │
│                                            │
│ ██████████████████████████████████████████ │
│ ██  SEND REQUEST                     →  ██ │
│ ██████████████████████████████████████████ │
│ We use these details only to respond to    │
│ your transfer request. No customer account │
│ is created. Privacy →                      │
│                                            │
│ ────────────────────────────────────────── │
│ Prefer to talk?                            │
│ ☎ +370 6__ _____ · WhatsApp →              │
└────────────────────────────────────────────┘
```

### 4.2 Prefilled, airport journey, Email selected

On mobile the Flight number inserts as a full-width cell at the end of the YOUR JOURNEY block, directly under Date and Passengers (a polite status message announces it, 7.1). The Vehicle group and everything below it move down by one cell.

```
┌─ 390 · prefilled · airport · Email ────────┐
│ ⋮                                          │
│ ━━ YOUR JOURNEY ━━━━━━━━━━━━━━━━━━━━━━━━━━ │
│ ┌────────────────────────────────────────┐ │
│ │ FROM                                 ⇅ │ │
│ │ Kaunas                                 │ │
│ ├────────────────────────────────────────┤ │
│ │ TO                                     │ │
│ │ Riga Airport RIX                       │ │
│ ├────────────────────┬───────────────────┤ │
│ │ DATE               │ PASSENGERS        │ │
│ │ 14/11/2026         │ 2         [−] [+] │ │
│ ├────────────────────┴───────────────────┤ │
│ │ FLIGHT NUMBER                 Optional │ │
│ │ ‹BT123›                                │ │
│ └────────────────────────────────────────┘ │
│ No need to give a pickup time. We'll agree │
│ it with you.                               │
│ Exact pickup address can be agreed later.  │
│                                            │
│ ━━ VEHICLE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ │
│ ┌────────────────────────────────────────┐ │
│ │ VEHICLE PREFERENCE            Optional │ │
│ │ Mercedes-Benz E-Class                ▾ │ │
│ └────────────────────────────────────────┘ │
│ We'll confirm availability when we send    │
│ your price.                                │
│                                            │
│ ━━ HOW SHOULD WE CONTACT YOU? ━━━━━━━━━━━━ │
│ ┌─────────────┬─────────────┬────────────┐ │
│ │ ○ WhatsApp  │ ○ Phone     │ ● Email    │ │
│ ├─────────────┴─────────────┴────────────┤ │
│ │ EMAIL                                  │ │
│ │ ‹name@example.com›                     │ │
│ └────────────────────────────────────────┘ │
│ ⋮                                          │
└────────────────────────────────────────────┘
```

### 4.3 Validation errors (excerpt)

```
┌─ 390 · validation errors (excerpt) ────────┐
│ ⋮                                          │
│ ┌────────────────────────────────────────┐ │
│ │ TO                                     │ │
│ │ ! Enter where you're travelling to     │ │
│ ├────────────────────┬───────────────────┤ │
│ │ DATE               │ PASSENGERS        │ │
│ │ 12/10/2026         │ 2         [−] [+] │ │
│ │ ! Choose today or  │                   │ │
│ │   a later date     │                   │ │
│ └────────────────────┴───────────────────┘ │
│ ⋮                                          │
│ ┌─────────────┬─────────────┬────────────┐ │
│ │ ○ WhatsApp  │ ○ Phone     │ ● Email    │ │
│ ├─────────────┴─────────────┴────────────┤ │
│ │ EMAIL                                  │ │
│ │ name@example                           │ │
│ │ ! Check the email address, for example │ │
│ │   name@example.com                     │ │
│ └────────────────────────────────────────┘ │
│                                            │
│ ! Check the 3 fields marked above.         │
│                                            │
│ ██████████████████████████████████████████ │
│ ██  SEND REQUEST                     →  ██ │
│ ██████████████████████████████████████████ │
└────────────────────────────────────────────┘
```

### 4.4 Success

```
┌─ 390 · success ────────────────────────────┐
│ LT Transfers      LT · EN   Menu           │
│ ────────────────────────────────────────── │
│                                            │
│ Request sent                               │
│                                            │
│ We've received your journey details. We'll │
│ contact you using your selected contact    │
│ method to discuss availability and price.  │
│                                            │
│ ┌────────────────────────────────────────┐ │
│ │ BACK TO HOMEPAGE                     → │ │
│ └────────────────────────────────────────┘ │
│ Message us on WhatsApp →                   │
│                                            │
│ ━━ WHAT YOU SENT ━━━━━━━━━━━━━━━━━━━━━━━━━ │
│                                            │
│ JOURNEY      Kaunas → Riga Airport RIX     │
│ ────────────────────────────────────────── │
│ DATE         14 November 2026              │
│ ────────────────────────────────────────── │
│ PASSENGERS   2                             │
│ ────────────────────────────────────────── │
│ VEHICLE      Mercedes-Benz E-Class         │
│ ────────────────────────────────────────── │
│ CONTACT      Email · name@example.com      │
│ ────────────────────────────────────────── │
│                                            │
│ This is your request, not a confirmed      │
│ booking.                                   │
└────────────────────────────────────────────┘
```

### 4.5 Mobile annotations

| Topic | Specification |
| --- | --- |
| Masthead | H1 at `display-l` 30 px, one line. Supporting sentence at 18 px, then "No account required." No hero, no image. |
| Journey | From and To stack (full width, 64 px each, ⇅ swap on the From cell, as on the homepage). Date and Passengers share one row at 50/50. Below 360 px the pair stacks. When the journey is airport-related, a full-width Flight number cell follows as the last row of the block. |
| Passengers cell | Value left under the label; "−" and "+" as two 48 × 48 px targets at the right, each divided by a 1 px rule. The value is a text input with the numeric keypad (`inputmode="numeric"`). Values run 1 to 8, then **8+**; at 8 and 8+ the cell shows "More than 8? Tell us the group size in the notes." |
| Vehicle | A native `<select>`, which gives the platform's own picker on phones and avoids a custom listbox. |
| Contact method | A three-cell segmented control, each cell at least 48 px tall and 33% wide (about 116 px), single-line labels. "WhatsApp · Phone · Email" must also hold in Lithuanian ("Telefonas", "El. paštas"). Not three large buttons. |
| Keyboard | The contact input uses `type="tel"` or `type="email"` so the right keyboard opens; the notes textarea's Enter key inserts a new line. Nothing is `position: fixed`, so the on-screen keyboard cannot cover the button. |
| Autofocus | None on load. Focus moves only to the first invalid field after a failed submit, or to the success heading. |
| Bottom | After the privacy sentence: hairline, "Prefer to talk?" with the phone and WhatsApp as 48 px rows (when the real values exist). |

---

## 5. Exact field inventory

Every field has a reason. If the reason is weak, the field is out.

### 5.1 Visible fields

| # | Field | Visible label | Control | `name` | Group | Required | Why it exists |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | From | FROM | Text combobox (airports with IATA codes, then cities), hint "City, airport or pickup area" | `from` | Journey | **Yes** | The journey cannot be understood without it. A precise street address is not requested. |
| 2 | To | TO | Text combobox, same hint | `to` | Journey | **Yes** | As above. |
| 3 | Date | DATE | `type="date"` | `date` | Journey | **Yes** | Availability and price depend on the day. No time field. |
| 4 | Passengers | PASSENGERS | Text input with − / +: 1 to 8, then **8+** | `passengers` | Journey | **Yes** | Drives vehicle choice. One total; no adults / children split. 8+ means "8 or more", not a service limit. |
| 5 | Flight number | FLIGHT NUMBER · Optional | Text, placeholder `BT123`. **Conditional**: a full-width row at the end of YOUR JOURNEY. | `flight` | Journey | No | Journey information for airport transfers. Not tracked. |
| 6 | Vehicle preference | VEHICLE PREFERENCE · Optional | `<select>`: Recommend a vehicle (default) · Toyota RAV4 · Mercedes-Benz C-Class · Mercedes-Benz E-Class · Audi A8 · Citroën Berlingo Multispace | `vehicle` | Vehicle | No | Lets the traveller state a preference. Never a guarantee. |
| 7 | Contact method | HOW SHOULD WE CONTACT YOU? | Three radios (WhatsApp · Phone · Email), WhatsApp preselected | `method` | Contact | **Yes** | We reply on the channel the traveller prefers. |
| 8 | Contact value | WHATSAPP NUMBER · PHONE NUMBER · EMAIL (follows 7) | One input whose type, label and autocomplete follow the chosen method | `contact` | Contact | **Yes** | The one way to reach the traveller. Exactly one. |
| 9 | Notes | ANYTHING WE SHOULD KNOW? · Optional | Textarea, 500 characters | `notes` | Contact (own block) | No | One place for luggage, a stop, a return leg, a large group. |

### 5.2 Non-visible inputs

| Input | `name` | Purpose |
| --- | --- | --- |
| Interface language | `lang` (`en` / `lt`) | Derived from the page, never typed. Tells LT Transfers which language to reply in. |

### 5.3 Non-field elements

| Element | Copy | Behaviour |
| --- | --- | --- |
| H1 | Request a transfer | One per page. Becomes "Request sent" on success. |
| Supporting copy | Send us your journey details. We'll confirm availability and send you a price. | Static. |
| Secondary line | No account required. | Static. |
| Pickup-time line | No need to give a pickup time. We'll agree it with you. | Static, under the journey block. |
| Address line | Exact pickup address can be agreed later. | Static, under the pickup-time line below the journey block. |
| Vehicle line | We'll confirm availability when we send your price. | Static, under the vehicle block. |
| Submit | SEND REQUEST → | The only primary action. States: idle, sending, retry (11). |
| Privacy sentence | We use these details only to respond to your transfer request. No customer account is created. Privacy → | Static, directly under the button. "Privacy" links to the privacy page (12.3). |
| Prefer to talk? | Prefer to talk? ☎ number · WhatsApp → | Renders only with real values. |

### 5.4 Group map

| Group (label on the 2 px rule) | Contents |
| --- | --- |
| YOUR JOURNEY | From, To, Date, Passengers, Flight number (conditional, optional), then the two microcopy lines |
| VEHICLE | Vehicle preference, vehicle line |
| HOW SHOULD WE CONTACT YOU? | Contact method, contact value, then the Notes block (its own label is its heading) |

The Flight number is information about the journey, not the vehicle, so it lives in YOUR JOURNEY as its own conditional row. VEHICLE holds a single field.

### 5.5 Why the vehicle control is a select

The homepage document specified six hairline rows with a selected left edge. Six rows add about 290 px to a page whose goal is 30–60 seconds, for a field most visitors leave on its default. A select holds the same six options in one 72 px cell, uses the platform picker on phones, and is fully accessible. The homepage's fleet sheet already shows the cars. If the ruled list is preferred for desktop only, it is a drop-in replacement that does not change names, values or defaults.

---

## 6. Field requirements

| Field | Required | Rules (browser) | Normalisation |
| --- | --- | --- | --- |
| From | Yes | 1–120 characters after trim. Free text, with the hint "City, airport or pickup area". The UI does not ask for a street address, but a voluntarily typed one is accepted and never blocked. No list restriction. | Trim, collapse inner whitespace. |
| To | Yes | As From. | As From. |
| Date | Yes | A real calendar date in `YYYY-MM-DD`. Not before today; not later than today + 2 years (catches typos like 2062). Today is allowed. | None. |
| Passengers | Yes | One of `1` to `8`, or `8+`. Default 1. Not a service limit: 8+ simply means "8 or more", with the exact size supplied in Notes. Any other integer 9 or greater is treated as `8+`. | Parse; clamp 9 or more to `8+` on blur. |
| Vehicle preference | No | One of `recommend`, `toyota-rav4`, `mercedes-benz-c-class`, `mercedes-benz-e-class`, `audi-a8`, `citroen-berlingo-multispace`. Anything else is treated as `recommend`. | Mapped to the display name in the notification (13.3). |
| Flight number | No | Only accepted when the journey looks airport-related (7.1). 2–12 characters: letters, digits, space, hyphen. | Trim; uppercase for the email. |
| Contact method | Yes | `whatsapp`, `phone` or `email`. Preselected, so a normal visitor can never leave it empty. | None. |
| Contact value | Yes | **WhatsApp and Phone:** 7–15 digits once spaces, `+`, `-`, `(`, `)` and `.` are ignored; no letters. A missing country code is *accepted* (the visitor is not blocked), and the hint is in the placeholder. **Email:** one `@`, a dot after it, no spaces, at most 254 characters. | Trim. Printed as typed. |
| Notes | No | At most 500 characters after line endings are normalised to `\n`. | Trim; strip control characters except newline. |
| `lang` | Auto | `en` or `lt`. | None. |

**Required summary:** From, To, Date, Passengers, contact method and its one contact value. **Optional:** vehicle preference, flight number, notes.

**Rule for every single-line field:** carriage returns and line feeds are stripped before submission. This prevents header injection, because some of these values end up in the notification subject (`_subject`) and Reply-To (`_replyto`).

---

## 7. Conditional behaviour

### 7.1 Flight number

The field appears only when the journey looks airport-related, and it is optional even then.

| Detection | Matches (case- and diacritic-insensitive, whole words) |
| --- | --- |
| IATA codes in From or To | VNO · KUN · PLQ · RIX · TLL · WAW · WMI |
| The word "airport" in From or To | "Riga Airport", "airport vilnius" |
| The same word in local languages | "oro uostas / oro uosto / oro uostą" (LT), "lidosta" (LV), "lennujaam" (ET), "lotnisko" (PL) |
| A suggestion of kind airport chosen from the list | Any entry the combobox marks as an airport |

| Behaviour | Specification |
| --- | --- |
| Show | As soon as either field matches, including while typing (`input`). The field fades in over 160 ms (instant under reduced motion). |
| Hide | Only when the field loses focus or a suggestion is chosen *and* neither field matches any more, so typing "Riga Airp…" never flickers. |
| Layout | All breakpoints: a full-width cell appended as the last row of the YOUR JOURNEY block, directly under Date and Passengers. Content below moves down by one row (72 px desktop, 64 px mobile). The shift happens beneath the fields the visitor is working in, and screen-reader users get the polite announcement below. The Flight number is not placed beside Vehicle preference: it is journey information. |
| Announcement | A polite status message: "Flight number field added." (and "Flight number field removed." on hide). Focus is never moved. |
| While hidden | The field is excluded from the submitted data and from the email. Whatever was typed is kept in memory in case the visitor changes the route back; it is never sent. |
| False negatives | A route typed as "T2, Vilnius" will not show it. That is acceptable: the visitor can write the flight in the notes, and this keeps the rule predictable. There is no permanent "Add a flight number" link. |
| Never | No claim that flights are tracked. No arrival or departure time, no landing time, no "flight status" lookup. |

### 7.2 Contact method

WhatsApp is the first option and preselected; the visitor can pick any of the three. Only the matching input is shown, and only one value is ever required.

| Method | Label | `type` · `inputmode` | `autocomplete` | Placeholder | Empty error | Malformed error |
| --- | --- | --- | --- | --- | --- | --- |
| WhatsApp | WHATSAPP NUMBER | `tel` · `tel` | `tel` | `+370 600 00000` | Enter a WhatsApp number | Check the WhatsApp number, including the country code |
| Phone | PHONE NUMBER | `tel` · `tel` | `tel` | `+370 600 00000` | Enter a phone number | Check the phone number, including the country code |
| Email | EMAIL | `email` · `email` | `email` | `name@example.com` | Enter an email address | Check the email address, for example name@example.com |

| Behaviour | Specification |
| --- | --- |
| One input element | A single `contact` input changes label, type, `inputmode`, `autocomplete` and placeholder when the method changes. The block's height never changes. |
| Remembered values | The input keeps **one remembered value per kind**: one for WhatsApp and Phone (both are phone numbers, so switching between them keeps the number) and one for Email. Switching back restores what was typed. Nothing is stored beyond the page's memory. |
| Announcement | Changing the method announces the new field politely ("Phone number field."). Focus stays on the radio. |
| Without JavaScript | The form needs JavaScript (13.9). The single `contact` input renders as `type="text"`, but there is no no-JS submission path; the "Prefer to talk?" WhatsApp and phone links still work. |
| Reply-To | Only the Email method can produce a Reply-To (13.4). |

### 7.3 Passengers

A text input (`type="text"`, `inputmode="numeric"`) with − and + buttons. It is not `type="number"` because the value set includes `8+`. The quick selector runs **1 to 8, then 8+**, so 8 never reads as the most LT Transfers can carry.

| Aspect | Specification |
| --- | --- |
| Default / steps | Default 1. − is disabled at 1. + steps 1 → 2 → … → 8 → **8+**. − from 8+ returns to 8. ArrowUp and ArrowDown also step. |
| At 8+ | + is disabled because the quick selector ends; the value reads "8+", meaning 8 or more. |
| Message | At 8 and at 8+ the cell shows, in 13/14 px graphite-2: **More than 8? Tell us the group size in the notes.** This is guidance, not an error, and it is not enforced: a request with 8+ and empty notes is still sent. |
| Typing | Digits are accepted. A number above 8 (for example 12) becomes 8+ on blur, and the message stays visible so the traveller knows to give the size in the notes. 0, empty or non-numeric input shows "Enter the number of passengers" on blur or submit. |
| Submitted value | The literal string `8+` for a larger group, otherwise the number `1`–`8`. This is the simpler of the two options: no second field, no group-size logic, and the exact size lives in the notes where the dispatcher reads it. Normalisation accepts `1`–`8` or `8+` and treats any other integer 9 or greater as `8+`. |
| Never | No adult / child / infant counters, no second group-size form, no minibus-selection logic, no capacity table, and no wording that suggests larger groups are refused. |

### 7.4 Vehicle preference

Defaults to "Recommend a vehicle". An incoming `vehicle` value preselects the matching option; an unknown value is ignored silently. The email says "Recommend a vehicle" when that is chosen, because a request to recommend is itself information for the dispatcher.

### 7.5 Submit state machine

| State | What the visitor sees | Notes |
| --- | --- | --- |
| Idle | SEND REQUEST → | The button is never disabled before the first attempt, so validation can explain itself. |
| Invalid | Inline errors in their cells; "Check the N fields marked above." beside the button; focus moves to the first invalid field | N counts fields, not messages. |
| Sending | Button label "SENDING…", `aria-disabled="true"`, `aria-busy="true"` on the form; width unchanged | Double submission prevented client-side. Focus stays on the button. |
| Success | The form is replaced by the success state | 10. |
| Failed | The failure panel appears above the button; the button reads "TRY AGAIN →"; all values kept | 11. |

---

## 8. Homepage → request prefilling

The traveller must never re-enter what they already supplied. Values arrive prefilled and fully editable, with no banner and no "prefilled" label.

### 8.1 Entry points

| Origin | Link built by | Parameters |
| --- | --- | --- |
| Hero / closing starter | The form's own GET submit | `from`, `to`, `date` (empty ones omitted) |
| Popular route row | `requestHref()` in `src/utils/routes.ts` | `from`, `to` |
| Fleet sheet column | `requestVehicleHref()` | `vehicle` |
| "Recommend a vehicle" | `requestVehicleHref()` | `vehicle=recommend` |
| "Any other route", header, mobile menu, footer | Plain link | none |

Example: `/request/?from=Kaunas&to=Riga%20Airport%20RIX&date=2026-11-14&vehicle=mercedes-benz-e-class`

### 8.2 Parameter contract

| Parameter | Accepted values | Handling |
| --- | --- | --- |
| `from`, `to` | Any text up to 120 characters | Trimmed; set as the field value (never as HTML). Longer values are cut at 120. A street address already in the URL is shown as given, but the UI itself asks for a city, airport or pickup area (12.4). |
| `date` | `YYYY-MM-DD` only | Ignored if malformed, in the past, or beyond the maximum. No error is shown on load. |
| `vehicle` | The slugs from `fleet.ts` (`toyota-rav4`, `mercedes-benz-c-class`, `mercedes-benz-e-class`, `audi-a8`, `citroen-berlingo-multispace`, `recommend`). The display name ("Mercedes-Benz E-Class", as in the brief's example) is also accepted, case-insensitive. | Anything else is ignored; the select stays on "Recommend a vehicle". |
| Everything else | — | Ignored. Contact details and notes are **never** read from, or written to, the URL. |

### 8.3 Precedence and storage

1. A value in the URL wins for that field.
2. Otherwise, the journey the visitor already typed on the homepage is used. The homepage starters keep From / To / Date in `sessionStorage` under `lt-starter` so the hero and closing strips share them; `/request` reads the same key. This covers the header and mobile-menu links, which carry no parameters.
3. Otherwise the field is empty.

Two details keep this consistent:

- If the visitor edits From, To or Date on `/request`, the same three values are written back to `lt-starter`, so going back to the homepage shows their latest journey.
- Only those three journey values are ever stored. Contact details, notes, flight number and vehicle are never written to any browser storage.

### 8.4 Paint and focus

- Values are applied by a tiny inline script immediately after the form, so there is no visible "empty then filled" flash.
- No autofocus. If all of From, To and Date are filled, the visitor starts at Passengers by scrolling or tabbing.
- Without JavaScript the form still works, but values are not prefilled (the page is static).

### 8.5 What the visitor sees

| Arrival | Result |
| --- | --- |
| Hero strip with all three | From, To, Date filled; Passengers 1; Vehicle default; Flight number appears if the route is airport-related. |
| Route row | From and To filled; Date empty (or restored from the strip if they used it). |
| Fleet sheet | Vehicle preselected; everything else empty. |
| Header "Request a price" | Empty, except what `lt-starter` restores. |

---

## 9. Validation states

Lightweight, calm and specific. Validation never blocks on things only LT Transfers can judge (availability, whether a place exists).

### 9.1 When

| Moment | Behaviour |
| --- | --- |
| While typing | Nothing. No errors appear mid-keystroke. |
| On leaving a field | A field that has a *format* problem shows its error (a half-typed email, a past date). A field left empty is not flagged yet. |
| On Send request | Every required field is checked at once. All errors appear. Focus moves to the first invalid field. |
| After an error | The message clears **as soon as the value becomes valid**, while typing, so the visitor is not left looking at a stale error. |

### 9.2 How errors appear

- Inside the cell, below the value, in `--error`, with a 2 px `--error` bottom edge and `aria-invalid="true"`.
- The input's `aria-describedby` points at the message.
- Beside the button: "Check the N fields marked above." as a status line, with `role="status"`.
- **No error summary box.** With six required fields on a single page, focusing the first invalid field and naming the count is enough.
- `novalidate` on the form: the browser's own bubbles are replaced by these messages, so wording and styling stay consistent.

### 9.3 Message catalogue (English; sentence case; no apology)

| Field | Condition | Message |
| --- | --- | --- |
| From | empty | Enter where you're travelling from |
| To | empty | Enter where you're travelling to |
| Date | empty or incomplete | Choose a date |
| Date | in the past | Choose today or a later date |
| Date | beyond 2 years | Choose a date within the next two years |
| Passengers | empty, 0 or not a number | Enter the number of passengers |
| Contact method | none selected (no-JS only) | Choose how we should contact you |
| WhatsApp | empty | Enter a WhatsApp number |
| WhatsApp | malformed | Check the WhatsApp number, including the country code |
| Phone | empty | Enter a phone number |
| Phone | malformed | Check the phone number, including the country code |
| Email | empty | Enter an email address |
| Email | malformed | Check the email address, for example name@example.com |
| Flight number | disallowed characters or length | Check the flight number, for example BT123 |
| Notes | over 500 | Cannot occur: the field stops at 500 and says "Shortened to 500 characters" if a paste was cut |

### 9.4 Dates

- `min` is today in the visitor's local time, `max` today + 2 years, set on the input.
- Same-day dates are allowed. The page makes no judgement about notice; LT Transfers decides when it replies.
- No availability logic runs in the browser.

### 9.5 Deliberately not validated

From equal to To; whether a place exists; whether a phone number is reachable; whether the flight number is real; the combination of passengers and vehicle. LT Transfers reads each request and asks if something looks wrong.

### 9.6 Notes counter

A quiet counter ("412 / 500") appears at the right of the notes label only from 400 characters upward, so it is not visible noise for the many short notes. It is not a live region (no per-keystroke announcement); a polite message is spoken only at 450 and at the limit.

---

## 10. Success state

The honest wording is **Request sent**, never "confirmed": nothing is booked yet.

### 10.1 What it is

The same page frame. The H1 changes and the form region is replaced. There is no modal and no redirect to a thank-you page, and the URL does not change.

Desktop:

```
┌─ 1440 × 900 · success (the form is replaced, the frame stays) ─────────────────────────────────────────┐
│ LT Transfers  Airport  Business & VIP  Intercity ▾  Cars  How it works   ☎ +370 6__ _____  LT · EN     │
│────────────────────────────────────────────────────────────────────────────────────────────────────────│
│   c1 ───── c4                          c5 ──────────────────────────────────────── c12                 │
│                                                                                                        │
│  Request sent                          ━━ WHAT YOU SENT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│                                                                                                        │
│  We've received your journey           JOURNEY      Kaunas → Riga Airport RIX                          │
│  details. We'll contact you using      ──────────────────────────────────────────────────────────────  │
│  your selected contact method to       DATE         14 November 2026                                   │
│  discuss availability and price.       ──────────────────────────────────────────────────────────────  │
│                                        PASSENGERS   2                                                  │
│  ┌────────────────────────────────┐    ──────────────────────────────────────────────────────────────  │
│  │ BACK TO HOMEPAGE             → │    VEHICLE      Mercedes-Benz E-Class                              │
│  └────────────────────────────────┘    ──────────────────────────────────────────────────────────────  │
│                                        FLIGHT       BT123                                              │
│  Message us on WhatsApp →              ──────────────────────────────────────────────────────────────  │
│                                        CONTACT      Email · name@example.com                           │
│                                        ──────────────────────────────────────────────────────────────  │
│                                        NOTES        2 large suitcases                                  │
│                                        ──────────────────────────────────────────────────────────────  │
│                                                                                                        │
│                                        This is your request, not a confirmed booking. Your booking is  │
│                                        confirmed once the price and journey details are agreed.        │
│                                                                                                        │
│────────────────────────────────────────────────────────────────────────────────────────────────────────│
│ Footer: unchanged from the homepage (graphite). No closing band, no mobile action bar.                 │
└────────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

### 10.2 Content

| Element | Content |
| --- | --- |
| H1 | **Request sent** |
| Copy | We've received your journey details. We'll contact you using your selected contact method to discuss availability and price. |
| Primary action | **Back to homepage** (a 1 px outline button, 56 px, with the arrow). |
| Secondary action | **Message us on WhatsApp →** (text link). Only when the real WhatsApp URL exists. A plain link: no pre-written text, so no journey details travel in a URL. |
| Recap | "WHAT YOU SENT": a ruled ledger of the values submitted (journey, date, passengers, vehicle preference, flight number if given, contact method and value, notes if given). Empty optional rows are omitted. For a larger group the Passengers row reads **8+** and the exact size appears in the Notes row when the traveller supplied it (drawing below). |
| Honesty line | This is your request, not a confirmed booking. Your booking is confirmed once the price and journey details are agreed. |

Larger-group recap (the rest of the ledger is unchanged):

```
PASSENGERS   8+
──────────────────────────────────────────────────────────────
NOTES        Group of 12, 6 large suitcases
──────────────────────────────────────────────────────────────
```

The recap exists for one reason: the contact value is the one thing that makes the whole flow fail if mistyped, and this lets the traveller spot it. It carries no reference number, price, "pickup" or other claim.

### 10.3 Never on this screen

Booking reference or confirmation number, payment, a summary styled as a confirmed booking, a reply-time promise ("within 15 minutes"), marketing, newsletter prompts, account creation, upsells.

### 10.4 Behaviour

| Topic | Specification |
| --- | --- |
| Trigger | Only after Formspree has returned a successful response (HTTP 2xx with `ok: true`, 13.7). Never on a network error, a rejection or an unexpected response. |
| Focus | Moves to the new H1 (`tabindex="-1"`) and the page scrolls to the top of the content. No separate live region, to avoid a double announcement. |
| Document title | Becomes "Request sent — LT Transfers". |
| Storage | The stored `lt-starter` journey is cleared, so the homepage strips start empty and nothing suggests a duplicate. |
| Reload | Returns a fresh, empty form. The sent values are held only in page memory and are not recoverable, which is the point. |
| Mobile | Same content stacked: H1, copy, button, link, recap. The recap's labels stay on one line ("PASSENGERS" is the longest). |
| Motion | 160 ms fade of the content; instant under reduced motion. |

---

## 11. Error state

A send failure is a normal event with a clear way out. It must never lose what the visitor typed.

### 11.1 Content

| Element | Content |
| --- | --- |
| Heading | **We couldn't send your request.** |
| Copy | Please try again or contact us directly on WhatsApp or by phone. |
| Alternatives | Two ruled 48 px rows: "Message us on WhatsApp →" and "Call +370 …" (each only if its real value exists; the page never shows a dead link). |
| Retry | The primary button changes to **TRY AGAIN →** in the same position and with the same function. There is only ever one primary button. |

Desktop drawing (above the button, form values untouched):

```
⋮  (all fields above are unchanged and still filled in)

┌────────────────────────────────────────────────────────────┐
│ ANYTHING WE SHOULD KNOW?                          Optional │
│ 2 large suitcases                                          │
└────────────────────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
We couldn't send your request.
Please try again or contact us directly on WhatsApp or by
phone.

──────────────────────────────────────────────────────────────
Message us on WhatsApp                                       →
──────────────────────────────────────────────────────────────
Call +370 6__ _____                                          →
──────────────────────────────────────────────────────────────

██████████████████████████████████████████████████████████████
██  TRY AGAIN                                            →  ██
██████████████████████████████████████████████████████████████
We use these details only to respond to your transfer request.
No customer account is created. Privacy →
```

### 11.2 Behaviour

| Topic | Specification |
| --- | --- |
| Where | Inserted directly above the button, inside the form. The form is **not** replaced or reset. |
| Announcement | `role="alert"`. Focus stays on the button, so retrying is one keypress. |
| Values | Every field keeps its value, including contact method, notes and the flight number. |
| Panel style | A 2 px `--error` top rule, the heading in graphite medium, copy in graphite-2, hairline rows. No coloured fill, no icon, no card. |
| Clearing | The panel disappears when the next attempt starts. |
| Causes | One message for network failure, timeout, rate limiting and provider rejection. The visitor is never told which, and the provider's own error text is never shown. |
| Retry safety | The retry sends the same data. There is no automatic retry, because a retry after an ambiguous failure could send a duplicate email. |

---

## 12. Privacy and data minimisation

### 12.1 What is collected, and what is not

| Collected (only to answer the request) | Deliberately **not** collected |
| --- | --- |
| From, To (city, airport or pickup area) | Name, surname (not needed to prepare a price) |
| Date | Account, password, profile |
| Passengers (one number) | Billing address, home address as a separate field, exact street address (not requested; accepted if volunteered) |
| Vehicle preference (optional) | Date of birth, gender, nationality, ID or passport number |
| Flight number (optional) | Company, company code, VAT code, billing details |
| One contact method and one contact value | Payment-card information |
| Notes (optional, max 500 characters) | Pickup time, landing time, flight departure time |
| Interface language (derived from the page) | Marketing consent, newsletter consent, any opt-in |
| | Return-journey section, cancellation preferences |
| | Pet information, child-seat information |
| | Free-form personal information beyond the one notes field |

Business customers give invoice details after the journey and price are agreed. A return journey can be mentioned in the notes or discussed in the reply.

### 12.2 Wording rules

| Say | Never say |
| --- | --- |
| "We use these details only to respond to your transfer request. No customer account is created." | "We do not store your data." The email sits in a business mailbox; that sentence would be false. |
| "No account required." | "Your data is deleted after sending." (true only of the website, not of the mailbox.) |
| Nothing about consent | A mandatory "I consent to the processing of my personal data" checkbox. The form is submitted for the purpose of answering the traveller; consent theatre adds friction and no protection. Privacy information is still one click away. |

### 12.3 The privacy page is a prerequisite

The sentence under the button links to a privacy page that does not exist yet. The homepage's launch guard lists privacy among `unbuiltPaths` and renders it as plain text until built. **`/request` must not go live with a dead Privacy link.** The page needs, in plain language and reviewed by someone qualified to give legal advice:

- who is responsible for the data (MKT PASLAUGOS, with the contact details the business confirms);
- what is collected, matching 12.1, and why (to respond to the enquiry);
- who receives it: Formspree (the form-submission processor) and the mailbox host;
- how long the email is kept, and who can read it (a business decision);
- that website access logs may record the page address, including the journey values in the query string, and that the form asks for a city, airport or pickup area rather than a precise address (12.4);
- the traveller's rights and how to exercise them;
- where complaints can be made.

### 12.4 URL data

- Journey values (`from`, `to`, `date`, `vehicle`) may appear in the URL, and therefore in browser history and server access logs. **From and To are not treated as non-personal data:** a precise address can identify where someone lives or works.
- For that reason the interface asks for a **city, airport or pickup area** (the location hint) and says "Exact pickup address can be agreed later." rather than requiring a precise address. Free text is still accepted, so a traveller who types a street address is not blocked; the UI just never asks for one. The same hint is used on the homepage starters (2.5), because the homepage form is what puts these values into the URL.
- **Contact details and notes must never appear in any URL.** The form uses `method="post"` with a request body, never GET. The WhatsApp link on the success state carries no text.
- Because the homepage form is a GET, the visited address (with journey values) can appear in browser history and in host access logs. State this honestly in the privacy page; do not try to hide it.
- Set a `Referrer-Policy` of `same-origin` or stricter on `/request` so the query string never leaves the site.
- Analytics must record the page path **without** the query string (12.6).

### 12.5 Browser storage

| Stored | Where | Lifetime |
| --- | --- | --- |
| From, To, Date | `sessionStorage` key `lt-starter`, shared with the homepage strips | The browser tab's session; cleared on success |
| Everything else (contact details, notes, flight number, vehicle) | Page memory only | Until the page is closed or reloaded |

Switching language mid-form therefore keeps the journey and loses contact details and notes. That is a deliberate privacy trade-off.

### 12.6 Analytics

Allowed events, with generic properties only: `request_page_view`, `request_submit`, `request_success`, `request_error` (error class: `validation` or `delivery`; and a `prefilled` boolean; and `lang`).

**Never sent to analytics:** From, To, Date, passengers, vehicle, flight number, phone, email, notes, or anything typed in the form. The page address is recorded **without** its query string. Do not run session-replay, heatmap or keystroke-capturing tools on this page. If a tag manager is ever added, `/request` is excluded from variable collection.

### 12.7 Logging and processors

- The website has no backend, so it logs nothing about requests. It does not write a submission to any database, queue, file or cache (13.6).
- Formspree (the form-submission processor) and the receiving mailbox keep data under their own terms, retention and account settings. The privacy page names Formspree; the business should know the configured retention before launch (`docs/formspree-integration.md`).
- Cloudflare only hosts the site; it does not handle submissions.

---

## 13. Architecture: static form to Formspree

Decided. Implemented in `src/lib/request/`; setup and operations are in `docs/formspree-integration.md`.

> Superseded: earlier drafts of this section planned a server endpoint (`POST /api/request`) that validated the request, built a plain-text email and sent it through a transactional email provider. That approach is withdrawn. There is no custom backend, no Worker and no email sending in this project.

### 13.1 Flow

```
Browser (static Astro site, hosted on Cloudflare)
  │  request form → validation → sendRequest()
  │  AJAX POST, JSON, Accept: application/json
  ▼
Formspree  ──▶  info@lttransfers.lt
  │
  ◀── { "ok": true }
  ▼
Success state ("Request sent"), on the same page
```

Cloudflare is the host only. Formspree handles transfer-request submissions. The visitor is never redirected to a Formspree page.

### 13.2 Request transport

| Item | Specification |
| --- | --- |
| Seam | `sendRequest(request)` in `src/lib/request/send.ts`. The page never contains provider code. |
| Provider code | `src/lib/request/transport-formspree.ts` only. Replaceable without touching the page. |
| Endpoint | `PUBLIC_FORMSPREE_ENDPOINT` (`https://formspree.io/f/<id>`). Public by design; not committed with a real value. |
| Method / body | `POST`, `Content-Type: application/json`, `Accept: application/json`. Never a GET, never the URL. |
| Success | HTTP 2xx **and** `ok: true` in the body. Nothing else counts. |
| Failure | Network error, 10 s timeout, any non-2xx, or an unexpected body → one generic `delivery_error` → the failure panel (11). |
| Development | No endpoint and `npm run dev`: a mock that delivers nothing. |
| Production without an endpoint | A visible failure, never a faked success. `build:release` refuses to build. |

### 13.3 Notification content

Fields are submitted under readable names so the Formspree notification reads as a form. Empty optional fields are omitted.

```
From: Kaunas
To: Riga Airport RIX
Date: 14 November 2026
Passengers: 2
Vehicle preference: Mercedes-Benz E-Class
Flight number: BT123
Preferred contact: WhatsApp
Contact: +370 600 00000
Notes: 2 large suitcases
Website language: LT
```

| Rule | Detail |
| --- | --- |
| Subject | `_subject`: `New transfer request — Kaunas → Riga Airport RIX` (places only, each shortened to about 40 characters, control characters removed). Never a phone number, email address or notes. If the plan ignores `_subject`, the form's stable subject is `New lttransfers request`. |
| Date | Long English format ("14 November 2026"), unambiguous for the reader. |
| Vehicle | The display name from the slug. "Recommend a vehicle" when that is chosen. |
| Flight | Sent only if provided *and* the journey was airport-related. |
| Passengers | The number, or `8+`. The exact group size is in Notes when the traveller supplied it. |
| Language | `EN` or `LT`, derived from the page, so the reply is in the right language. |
| Never included | IP address, user agent, timestamps, analytics identifiers or any UI state. |
| No autoresponder | No automatic email to the traveller, and nothing automatic may say or imply the transfer is confirmed. A submission means "request sent", not "booking confirmed". |

### 13.4 Recipient and Reply-To

- **To:** info@lttransfers.lt, set as the destination in the Formspree form.
- **Reply-To:** `_replyto`, sent only when the contact method is Email and the address is valid, so replying goes to the traveller. For WhatsApp and Phone nothing is invented: the number simply appears in the submission.

### 13.5 Spam and abuse

| Measure | Specification |
| --- | --- |
| Spam filtering | Formspree's built-in spam protection, enabled in the form settings. |
| Domain restriction | The form is restricted to `lttransfers.lt` in the Formspree dashboard (plus a test origin only while testing). |
| Validation | The browser re-checks every rule in section 6 before sending. |
| Not added | CAPTCHA, Turnstile, a honeypot field, or any custom rate limiting. There is no backend to run them on. Add one only if spam becomes a real problem, using what Formspree offers. |

### 13.6 No database

The website must **not** store submissions in: PostgreSQL, Supabase, Firebase, Airtable, Google Sheets, a local database, a CMS submission collection, a log file, a queue, a cache, localStorage or a cookie. The website keeps no copy. That is a statement about *the website*. It is **not** a claim that no data is stored anywhere: Formspree keeps submissions according to its account configuration, and the email remains in the mailbox. The Privacy Policy says so.

### 13.7 Failure semantics

If Formspree does not accept the submission, or does not answer within the timeout, the traveller sees the failure state with the WhatsApp and phone alternatives and still holds their values. There is no fallback storage, no mock fallback and no automatic retry. The request is not lost silently: the traveller is told.

### 13.8 Configuration

`PUBLIC_FORMSPREE_ENDPOINT` is the only form-related setting (`.env.example`). It is inlined into the client at build time, so it is set in the build environment and needs a rebuild to change. It carries no secret. There are no server-side secrets.

### 13.9 Hosting

The site stays `output: 'static'` on Cloudflare hosting. Nothing needs a server runtime. The form works only with JavaScript; without it the "Prefer to talk?" WhatsApp and phone links are the path.

---

## 14. Accessibility requirements

| Area | Requirement |
| --- | --- |
| Labels | Every control has a real `<label>`. No placeholder-only labels; placeholders are examples ("BT123", "+370 600 00000"). The homepage's label-inside-cell treatment is a visual layout; the DOM keeps `label for`. |
| Structure | One `<h1>`. Group labels are `<h2>`. **Only the contact method is a `<fieldset>`** with `<legend>` "How should we contact you?" (a radio group). Fieldsets for the other groups would repeat the legend before every field. |
| Contact method | Native radio inputs, visually hidden but focusable. The cell is the label. Arrow keys move the selection (native). Selected state: filled pine dot, medium weight, paper fill and a 2 px pine bottom edge, so it does not rely on colour alone. |
| Passengers | A labelled text input (`inputmode="numeric"`) with two buttons named "Decrease passengers" and "Increase passengers". The value "8+" is read as typed; the line "More than 8? Tell us the group size in the notes." is linked with `aria-describedby`. At 1 and at 8+ the relevant button is disabled, and the 8+ state is explained in text so the end of the stepper is never mistaken for a limit of the service. |
| Combobox | The From / To combobox follows the existing ARIA pattern (`role="combobox"`, `aria-expanded`, `aria-activedescendant`). Not reinvented. |
| Keyboard | The whole form works with Tab, Shift+Tab, arrows (radios, suggestions), Enter (submit; in the textarea it inserts a newline) and Escape (close suggestions). Tab order follows visual order. No keyboard traps. |
| Focus | Always visible: 2 px pine outline with offset, plus the pine bottom edge. Never `outline: none` without a replacement. |
| Errors | `aria-invalid="true"` and `aria-describedby` to the message; message text names the problem and the fix; focus moves to the first invalid field; a `role="status"` line gives the count. No error summary unless later testing shows it is needed. |
| Live regions | One polite status element (`role="status"`) for: flight number added or removed, contact field changed, "Shortened to 500 characters", sending. Failure panel: `role="alert"`. Success: focus moves to the new H1, with no extra live region. |
| Tap targets | At least 48 × 48 px for the stepper buttons, segmented cells, submit, links in the contact rows. Minimum spacing between adjacent targets 8 px. |
| Contrast | Graphite on paper / stone ≥ 13:1; graphite-2 ≥ 6:1; pine ≥ 8:1; `--error` ≈ 7:1; the white-on-graphite button ≥ 13:1. Re-measure in the build. |
| Colour | Selected, focused and error states each have a non-colour cue (dot and weight; edge and outline; words and edge). |
| Reflow / zoom | Usable at 320 px width and at 200% zoom with no horizontal scroll; at 400% the cells stack. Text-spacing overrides must not clip labels. |
| Motion | Reduced motion removes all transitions. Nothing moves on its own. |
| Forced colours | Borders, the selected dot and the focus outline are drawn with system colours so they survive high-contrast mode. |
| Language | `lang` set on `<html>` as already done; the Lithuanian page uses Lithuanian messages. |
| Autocomplete | `tel` and `email` on the contact input as in 7.2; From / To / Date / notes use `off` (the homepage's own suggestion list takes precedence); nothing asks for profile data. |

---

## 15. Responsive behaviour

| Aspect | < 768 px (4 col) | 768–1099 px (8 col) | ≥ 1100 px (12 col) |
| --- | --- | --- | --- |
| Masthead | Stacked above the form | Stacked above the form, c1–c6 | Left rail c1–c4, sticky |
| Form width | Full | c1–c8 | c5–c12 (max 56 rem) |
| From / To | Stacked, 64 px cells | Side by side | Side by side |
| Date / Passengers | One row, 50/50 (stack below 360 px) | One row | One row |
| Flight number (when shown) | Full-width last row of YOUR JOURNEY | Full-width last row of YOUR JOURNEY | Full-width last row of YOUR JOURNEY |
| Contact method | 3 equal cells, 48 px | 3 equal cells, 56 px | 3 equal cells, 56 px |
| Notes | 3 lines tall (≈ 96 px), grows to 6 lines then scrolls | Same | Same |
| Button | Full width, 56 px | Full width, 64 px | Full width of the form column, 64 px |
| "Prefer to talk?" | After the privacy sentence | After the privacy sentence | In the left rail |
| Sticky elements | None (header only) | None | The left rail |

Other notes:

- **Lithuanian.** Strings run 20–30% longer. Labels may wrap to two lines in half-width cells; cells grow rather than clip. "Optional" becomes a longer word such as "Neprivaloma" in the same slot (Lithuanian examples here are illustrative; the real strings come from the Lithuanian copy pass). "SEND REQUEST" must fit on one line at 390 px with the arrow ("SIŲSTI UŽKLAUSĄ" fits). The contact row cells hold "Telefonas" and "El. paštas".
- **Short desktop viewports.** The rail may exceed the viewport on very short windows; in that case it stops being sticky rather than clipping.
- **Large screens.** The form column is capped at 56 rem and left-aligned in c5–c12. The extra width becomes margin, as on the homepage.
- **Landscape phones.** Treated as the mobile layout; no sticky button to compete with the keyboard.

---

## 16. Implementation risks and what not to build

### 16.1 Risks

| Risk | Warning sign | Guardrail |
| --- | --- | --- |
| **Form turns into a booking app** | Steps, a progress bar, a price, vehicle photos, a confirmation number | One page, the vocabulary table in section 1, no price anywhere on the page. |
| **Field creep** | A "name" field added because every form has one; pickup time; return leg; child seat | The primary UX principle. New fields need a written reason tied to understanding the journey, choosing a vehicle or contacting the traveller. |
| **Privacy overclaim** | "We don't store your data", "secure", "GDPR compliant" badges | Use only the approved sentence (12.2). The privacy page states the real handling. |
| **Dead Privacy link** | Link goes nowhere or renders as plain text at launch | Privacy page is a launch prerequisite (12.3); the launch guard should treat `/request` as blocked until it exists. |
| **Contact details in URLs or analytics** | Phone number in a query string; GA recording the full URL; session replay | `method="post"`; analytics path without query; no replay tools (12.4, 12.6). |
| **Header injection** | Newlines in "from" or an email address end up in the subject or Reply-To | Strip CR/LF before submission; validate email strictly (6). |
| **Spam floods the inbox** | Dozens of junk requests | Formspree's built-in spam filtering (13.5). Anything more is a dashboard setting, not a backend. |
| **Silent loss** | Provider down and the visitor sees "Request sent" | Success is shown only after Formspree accepts the submission; otherwise the failure state (13.7). |
| **Duplicate emails** | A double-click or an ambiguous failure plus retry | Client-side button lock; no automatic retry; duplicates are rare and harmless to the business. |
| **Endpoint not configured** | A production build ships without `PUBLIC_FORMSPREE_ENDPOINT` and every send fails | The transport fails visibly instead of faking success, and `build:release` refuses to build without the endpoint (13.8). |
| **Wrong default contact method** | Visitors leave WhatsApp selected but type an email | The input's label and type make the expected value obvious; the error names the method. Confirm the default with the business. |
| **Flight number mis-detection** | Field appears for city names or never appears for odd airport text | The detection list is explicit and small; missing cases fall back to the notes (7.1). |
| **Address creep** | The hint or microcopy drifts back towards "address"; a street-address field or map picker appears | Hint stays "City, airport or pickup area"; the second microcopy line says the exact address can be agreed later; free text is still accepted but never solicited (2.5, 12.4). |
| **8 read as the service maximum** | A visitor with 12 people thinks the form refuses them; or the notes arrive without a group size | The selector ends in "8+", never in a blocked state; the in-cell line says to give the size in the notes; no error is raised for larger groups (7.3). |
| **Select too plain** | Stakeholders miss the ruled vehicle list | Offer the ruled list as a drop-in (5.5), not a redesign. |
| **Error colour spreads** | Red used for focus, buttons or warnings | `--error` has three uses only (2.4). |
| **Return journeys pile up in the notes** | Many notes begin "and return on…" | Reconsider a return option based on real usage, not before. |
| **Language switch loses typing** | A visitor switches EN/LT mid-form | Accepted: contact and notes are not stored (12.5). |
| **Homepage drift** | Homepage wireframe still says "three steps" and "LT-____" | Reconciliation table above; update the homepage document at the next revision. |

### 16.2 Do not build

- A multi-step wizard, progress bar, tabs or a modal flow.
- An account, login, profile, saved addresses or "remember me".
- A website submission database, admin inbox or CRM sync as part of this MVP.
- A price calculator, quote, estimate or any price text on this page.
- Vehicle cards, a carousel, car imagery, capacity tables or per-vehicle prices.
- Name, surname, company, VAT or billing fields. Pickup time, landing time. Date of birth, gender, nationality, ID.
- Adult / child / infant counters, child-seat or pet questions.
- A passenger maximum, capacity table, minibus-selection logic or any wording that implies larger groups are refused.
- A request for an exact street or home address in the hint text, in From / To, or as a separate field.
- A return-journey section, extra stops fields, luggage-count fields.
- A "consent" checkbox, marketing opt-in or newsletter box.
- A booking reference, payment, or "booking confirmed" wording.
- Floating labels, 12 px rounded inputs, big shadows, coloured form cards, icons on fields.
- Flight tracking, delay promises or "we monitor your flight" copy.
- CAPTCHA by default.
- A reply-time promise anywhere on the page.

---

## 17. Summary and decisions to confirm

| | |
| --- | --- |
| **Required** | From · To · Date · Passengers (1–8, or 8+ for a larger group) · contact method (WhatsApp preselected) · its one contact value |
| **Optional** | Vehicle preference (default "Recommend a vehicle") · Flight number (a row of YOUR JOURNEY, shown only for airport-related journeys) · Anything we should know (≤ 500 characters) |
| **Derived, not typed** | Interface language |
| **Deliberately not collected** | Name · company · VAT / billing · account / password · date of birth · gender · nationality · ID / passport · payment card · exact street or home address (not requested; accepted if volunteered) · pickup time · marketing / newsletter consent · return-journey form · cancellation preferences · pet and child-seat questions · free-form personal information beyond the notes field |

**Decisions that still need confirmation before implementation**

1. **WhatsApp as the preselected contact method.** It speeds the typical visit by one tap, but it only works if the business actually answers on WhatsApp, and it must be confirmed before implementation if the real WhatsApp number is not yet configured (it is a `null` placeholder in `site.ts` today). If not, preselect nothing and keep the field hidden until a method is chosen.
2. **The mailbox and the Formspree account.** info@lttransfers.lt receives requests through Formspree. Who can read the mailbox and the Formspree dashboard, and how long each keeps submissions, must be confirmed (`docs/legal-launch-checklist.md`). `/request` should not ship without the Privacy Policy.
3. **Formspree form endpoint.** Decided: static site plus Formspree, no server runtime (13). Open: creating the form and setting `PUBLIC_FORMSPREE_ENDPOINT` (`docs/formspree-integration.md`).
4. **The recap on the success screen.** Kept because it lets travellers catch a mistyped contact value, but it is the one part of the success state not in the brief. Say if it should go.
5. **The single new colour** (`--error`, `#8E2F2F`). Needed so errors never depend on colour alone while still being findable.
6. **Homepage clean-up** (the "three steps" wording and the closing-strip "LT-____" replacement), to be done at the next revision of the homepage document. Not blocking.

---

## Appendix A. Copy deck (English)

Strings should live under a `request` key in `ui.ts`, so Lithuanian falls back to English per key until translated, as elsewhere.

| Key | Text |
| --- | --- |
| meta.title | Request a transfer — LT Transfers |
| h1 | Request a transfer |
| lead | Send us your journey details. We'll confirm availability and send you a price. |
| note | No account required. |
| talk | Prefer to talk? |
| group.journey | YOUR JOURNEY |
| group.vehicle | VEHICLE |
| group.contact | HOW SHOULD WE CONTACT YOU? |
| from / to / date | FROM / TO / DATE |
| hint.location | City, airport or pickup area (shared with the homepage starters; see 2.5) |
| passengers | PASSENGERS |
| passengers.dec / inc | Decrease passengers / Increase passengers |
| passengers.more | More than 8? Tell us the group size in the notes. |
| passengers.8plus | 8+ |
| error.passengers | Enter the number of passengers |
| pickup | No need to give a pickup time. We'll agree it with you. |
| address | Exact pickup address can be agreed later. |
| vehicle | VEHICLE PREFERENCE |
| vehicle.default | Recommend a vehicle |
| vehicle.note | We'll confirm availability when we send your price. |
| flight | FLIGHT NUMBER |
| flight.placeholder | BT123 |
| optional | Optional |
| method.whatsapp / phone / email | WhatsApp / Phone / Email |
| contact.whatsapp | WHATSAPP NUMBER |
| contact.phone | PHONE NUMBER |
| contact.email | EMAIL |
| placeholder.phone / email | +370 600 00000 / name@example.com |
| notes | ANYTHING WE SHOULD KNOW? |
| notes.placeholder | Luggage, an extra stop or anything else relevant to the journey |
| notes.count | {n} / 500 |
| notes.cut | Shortened to 500 characters |
| submit | SEND REQUEST |
| submit.sending | SENDING… |
| submit.retry | TRY AGAIN |
| status.invalid | Check the {n} fields marked above. (singular: Check the field marked above.) |
| status.flightAdded / flightRemoved | Flight number field added. / Flight number field removed. |
| privacy | We use these details only to respond to your transfer request. No customer account is created. |
| privacy.link | Privacy |
| success.h1 | Request sent |
| success.body | We've received your journey details. We'll contact you using your selected contact method to discuss availability and price. |
| success.home | Back to homepage |
| success.whatsapp | Message us on WhatsApp |
| success.recap | WHAT YOU SENT |
| success.note | This is your request, not a confirmed booking. Your booking is confirmed once the price and journey details are agreed. |
| error.h | We couldn't send your request. |
| error.body | Please try again or contact us directly on WhatsApp or by phone. |
| error.whatsapp / call | Message us on WhatsApp / Call {number} |
| email.subject | New transfer request · {from} → {to} |

Field error strings are listed in 9.3.
