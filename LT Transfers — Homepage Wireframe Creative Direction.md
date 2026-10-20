# LT Transfers — Homepage Wireframe & Creative Direction

Oct 12, 2026 · updated Oct 14, Oct 16 and Oct 18, 2026 (pricing consistency pass) · @Rokas

The homepage reads as one journey. A hero split at a horizon line hands the visitor a ticket-strip starter. The strip continues straight into a printed-timetable route board, then shows proof (process, inclusions, the five vehicles, certainty facts), and ends on a dark, purely typographic closing band that returns the same strip. The homepage carries two photographs only: the hero and one business-transfer image. No section sits in a rounded card: hairlines, a 12-column grid and tabular figures carry the structure. Source of truth: *LT Transfers — Website Strategy*, as amended by the confirmed decisions below. Nothing here is implemented yet.

## What changed in this update (confirmed business decisions)

This is a targeted update. The concept, the Nordic Stone + Wayfinding system, the ticket-strip / timetable identity, the route board, the confirmation concept and the page rhythm are unchanged. Only content that contradicted the real business was rewritten.

| # | Confirmed decision | What changed in the wireframe |
| --- | --- | --- |
| 1 | **Five vehicles:** Toyota RAV4, Mercedes-Benz C-Class, E-Class, Audi A8, Mercedes-Benz V-Class. No model years, generations, trims, equipment lists or capacity tables. | "The cars" is redrawn as a five-column fleet sheet: drawings on one road line, name and a quiet body descriptor under each. Seat and suitcase rows, pictograms and per-car character lines tied to capacity are removed. |
| 2 | **Pricing is agreed individually based on route, vehicle and journey details.** The board still shows a simple indicative "from €X" entry price. | The homepage no longer implies an instant or automatic quote. Route-board prices are indicative; the customer sends journey details, LT Transfers reviews them, a price is agreed with the customer, and only then is the booking confirmed. Development prices remain placeholders until supplied. |
| 3 | **Vehicle preference in the request.** A preference, not an availability guarantee. | Request step 2 gets a vehicle preference field (six options). Fleet-sheet columns deep-link to it. One consistent sentence is used everywhere: "We'll confirm the available vehicle and agree the price with you before your booking is confirmed." |
| 4 | **Multiple drivers. No personal-driver positioning.** | Removed: "Who's driving", the named driver, portrait, first-person note, "the same person answers, drives and invoices", "one driver" and "Ask [Name]". The brand voice is LT Transfers as a service. The personality line becomes "Your journey. Your vehicle. Price agreed in advance." |
| 5 | **Trust section redesigned around service facts.** | "Who you're dealing with" is replaced by "Made for journeys that need certainty": 24/7, price agreed before booking confirmation, four countries, payment options, invoices, set as a transport-document sheet. |
| 6 | **Operating area:** Lithuania, Latvia, Estonia, Poland. Cross-border is normal service. | Hero, board, service index, FAQ and footer all use these four countries. Nothing says "Europe" or "beyond". |
| 7 | **24/7 by advance booking.** No reply-time promise, no response hours. | No reply-time promise or response-hours line appears anywhere on the site. Availability is one fact only: "24/7 by advance booking". |

### Launch dependencies (final list)

**Hard launch dependency**
- Final "from €" prices for the eight Popular Routes (to be benchmarked against transfers.lt and kaunastransfers.lt, then set by the business). Development placeholders carry a visible `DEV` marker, and a production build fails if any remain.

**Legal / company details still needed**
- Exact legal form of MKT PASLAUGOS
- Company code
- Registered address, if shown publicly
- Passenger transport permit wording / reference, if it will be shown
- Insurance wording, if it will be shown

**Operational content still to confirm**
- Child-seat availability

Anything else that is not confirmed is omitted from launch or exists only as an internal optional content item. It is not a launch blocker. TBC items never render in production: a line that is not confirmed is not printed.

### Not part of the website at launch

There is no public waiting or flight-delay policy, no public cancellation policy, no flight-tracking feature and no day-before reminder. These are not shown, promised or linked anywhere on the site, and they are not open questions. Special situations are handled individually. The booking request may ask for a flight number as useful journey information only. Payment methods (cash, card, bank transfer) are confirmed. No deposit or prepayment rule exists, and none is implied.

## Update 2 (Oct 16): service clarity first, premium polish second

A targeted revision of photography and emphasis. The design system, route board, ticket strip, confirmation, fleet sheet, grid, typography and page order are unchanged. The first update fixed what the site said; this one fixes what the pictures say. (Update 3 below then reduces the number of pictures.)

### Confirmed business context

- **Focus:** airport transfers, business transfers, VIP / premium private transfers, long-distance transfers, cross-border transfers. Not budget-focused, and not an exaggerated limousine brand: **professional, premium, comfortable, discreet, service-oriented.**
- **Operator:** MKT PASLAUGOS. Not VAT-registered.
- **Payment:** bank transfer, cash, card. **Invoices available** is the homepage statement. Normal invoices can be issued. If a customer specifically requires a VAT invoice, it can be arranged through the VAT-registered company Mariaus ir Kajaus transportas. Primary sections say only "Invoices available"; the FAQ carries the VAT-invoice sentence without naming the partner company, and a later legal / business page can hold more detail.
- **Animals are not transported.** Nothing on the site promotes pet-friendly transport. A short FAQ entry answers plainly if a visitor asks.

### What changed

| # | Area | Change |
| --- | --- | --- |
| 1 | Photography philosophy | From "editorial travel-atmosphere" to **premium commercial transfer-service photography with restrained editorial polish**. Hierarchy: service → vehicle and journey context → trust → atmosphere. Section D is rewritten. |
| 2 | H1 hero | A readable executive saloon at a generic modern airport kerb, with a traveller and luggage. Replaces the cropped boot and tail light. The hero layout is unchanged. |
| 3 | I1 | From a passenger looking through a window to a business traveller at a hotel or office entrance, with a vehicle. |
| 4 | S1 | Superseded in Update 3: the road photograph is removed. |
| 5 | C1 | Superseded in Update 3: the closing photograph is removed. |
| 6 | Business transfers | **Business & VIP transfers** is a real service: a top-level nav link, the second row of the service index, and an FAQ entry. It is no longer a footer item. |
| 7 | Copy | The hero subline now names airport, business and long-distance transfers. The luggage line no longer mentions skis, prams or bikes. The register names MKT PASLAUGOS with no VAT code line. |
| 8 | Risks | New image and anti-slop rules for a design where vehicles are prominent (section E). |

### Copy emphasis

Lead with: private transfers, airport transfers, business transfers, long-distance travel, cross-border transportation, comfort, individually agreed pricing, vehicle choice, 24/7 by advance booking. "VIP" appears only as a service phrase ("Business & VIP transfers") and in SEO and content, never as identity, never as "VIP experience", "ultimate luxury", "elite chauffeur", gold, crowns or limousines. Premium comes from the service: confirmed vehicle, agreed price, certainty.

## Update 3 (Oct 18): two photographs, not four

Four large photographs still made the homepage read as a campaign, even once each one showed the service. The homepage now carries **two photographs total: H1 (hero) and I1 (business / premium transfer).** S1 (the long-distance road break) and C1 (the closing night airport) are removed outright and not replaced. The service-first positioning, layout system, route board, ticket strip, confirmation, fleet sheet, typography, palette and page order are unchanged.

### Anti-editorial guardrail

**If an image can be removed without reducing the visitor's understanding of the service, remove it.** Photography is never used to create rhythm. Rhythm comes from light vs dark, dense vs spacious, route data vs descriptive text, UI vs typography, the fleet drawings, and rules and alignment.

| Photograph | What it proves | Kept? |
| --- | --- | --- |
| H1 airport transfer | This is a private airport transfer service: vehicle, kerb, traveller, luggage. | Yes. Sets the quality bar for the whole site. |
| I1 business / premium transfer | A second real use case: business and premium travel to a hotel, office or conference entrance. | Yes. Sits beside "Included in every transfer". |
| S1 long-distance road | A car on a road. Long-distance and cross-border service is already shown by Popular Routes, durations, prices, the four countries, the service index and the booking UI. | No. Removed. |
| C1 closing airport | Mood. Adds no information beyond H1 and pulls the close back toward storytelling. | No. Removed. |

### What changed

| # | Area | Change |
| --- | --- | --- |
| 1 | Photograph count | Four to two. The page opens with one strong photograph and closes with none. That contrast is intended. |
| 2 | Service index | The cinematic landscape break is gone. The section opens directly on its 2 px rule and label and is carried by type, hairline rows and wayfinding arrows. |
| 3 | Closing band | A pure graphite typography-and-UI section: headline, supporting line, the same strip, promise line, Call and WhatsApp, then the footer on the same graphite. No overlay, contrast testing, image crop or photo-safe headline placement. |
| 4 | Section D | Rewritten to specify H1 and I1 only. S1 and C1 generation requirements are deleted. |
| 5 | Section G (shot list) | Two-image shot list (plus an H1 fallback). |
| 6 | Design system | "Image framing" no longer allows overlays; ratios reduced to the hero and inclusions. "Dark sections" no longer mentions a night photograph. |
| 7 | Risks | Image rows now refer to two photographs. New rows guard against photography creeping back and against the lower page going flat. |

### Page order (unchanged)

1 Navigation · 2 Hero + **H1 photograph** + booking strip · 3 Popular routes / timetable · 4 How booking works / confirmation (dark) · 5 Included in every transfer + **I1 photograph** · 6 The cars / fleet sheet · 7 Certainty facts / operator information · 8 Service types / Where we go (typography only) · 9 FAQ · 10 Closing CTA + booking strip (dark, typography and UI only) · 11 Footer.

### Where the page became weaker, and the fixes (no extra photography)

| Area | Weakness | Fix applied in this document |
| --- | --- | --- |
| Service index | Loses the breath the landscape gave before the FAQ; could read as a plain link list. | Scale and space instead of an image: 160 px section padding, 2 px rule with the label on it, names at display-l 48 px (up from 40), rows 128 px, places with mono IATA codes, pine arrows, the board's hover route-line draw. |
| Closing band | Could read as "a footer with a form". | It is treated as the page's second poster: headline at display-xl 88 px mirroring the hero masthead, the identical strip component at full width, 160 px of graphite field and a 2 px bone rule on top. The scale and the empty graphite carry the drama. |
| Sections 6 to 9 | Four typographic bands in a row with no photograph or dark band between I1 and the close. | Each band already uses a different structure and scale: drawn fleet sheet on stone-2, then 96 px figures, then 48 px index names, then the small dense FAQ. Spacious, big, big, dense. If the build still reads flat, the next lever is background alternation between stone and stone-2, not imagery. |
| Hero | One photograph is now a single point of failure for the site's quality. | Spend the generation and retouch effort on H1 and approve it before anything else is built. H1-alt stays as a fallback and never ships beside H1. |
| I1 | The only photograph below the hero, so it must not feel like a leftover. | Keep it paired with the inclusions list and sticky beside it. It must show a different use case from H1 (a hotel, office or conference entrance, not an airport). It may drop on mobile if the page feels long. |

## Strategy check

The strategy holds up. Eight UX problems needed fixing in the layout, and none of them changes the positioning. Rows 1, 4 and 6 are updated for the confirmed decisions.

The ui-ux-pro-max generator proposed a "Flat Design" system with SaaS blue #2563EB, an amber CTA, Inter and a "Product Demo + Features" page pattern. That is exactly the booking-platform look the strategy rules out, so it is rejected. What survives from the skill are its rules: no shadows, 150–200 ms state changes, small scroll reveals that respect reduced motion, tabular figures, 4.5:1 text contrast, 44 px touch targets, visible field labels, one primary action per screen, and a progress indicator on multi-step forms. Its "Editorial Grid" style match is used for the asymmetric grid and large imagery, but not for drop caps, pull quotes or serif body text.

| # | Problem in the strategy | Why it matters | Change in this wireframe |
| --- | --- | --- | --- |
| 1 | **Pricing must not read as an instant-quote widget.** LT Transfers does not calculate an automatic price from From / To / Date. | "Get a fixed price" suggests an instant quote and creates the wrong expectation. | Use **"Request a price"**. Under the button print: **"Price agreed before your booking is confirmed · Available 24/7 by advance booking."** Popular Routes may show indicative "from €" prices, with a clarification that the exact price is agreed individually. |
| 2 | **Two route forms in the first two screens.** Concept C ends the board with a form row, and the hero already has the starter. | Two forms for one action split attention and weaken the primary-action rule. | The hero starter is the only form above the FAQ. The board's last row is a link: "Any other route →". The starter returns once, at the close. |
| 3 | **The nav headlines service types the strategy puts low on purpose.** | Navigation and homepage tell two different stories; 8+ nav elements in Lithuanian won't fit at 1280 px. | Five links (Business & VIP added in Update 2): Airport transfers · Business & VIP · Intercity & abroad (2-item menu) · Cars · How it works. |
| 4 | **"One car. One driver. One fixed price." contradicts a five-vehicle, multi-driver service and the agreed-pricing flow.** Read literally it describes a one-man, one-car business and suggests the wrong pricing model. | It is untrue and ties the brand to a person. | Retired. Replaced by **"Your journey. Your vehicle. Price agreed in advance."**, used in the booking-process section. Not in the hero. |
| 5 | **The board collapses without real prices.** | "from €X" is the signature section's whole point; "price on request" turns it into a list of city names. | Real entry prices for the 8 launch routes remain a hard launch dependency. Development placeholders are allowed in the build, clearly marked, and blocked from production. |
| 6 | **Operating hours and enquiry hours can be confused.** | Early-flight and business travellers are core customers; any hours string near a 4 a.m. departure reads as a limit. | Resolved by removal: the site states one availability fact, "24/7 by advance booking", and makes no reply-time or response-hours promise. |
| 7 | **The sticky mobile bar competes with the hero starter.** | Two primary buttons on the first mobile screen. | The bar appears only once the hero starter has scrolled away, and hides again at the closing starter and while the keyboard is open. |
| 8 | **Lithuanian is longer and has diacritics.** | LT strings run 20–30% longer ("Gauti fiksuotą kainą"), and ą č ę ė į š ų ū ž must render in every weight. | Every layout below is sized for LT first; font candidates are tested for Latin Extended-A and tabular figures before choosing. |

## Page composition

The page alternates functional and editorial bands, never two of the same kind in a row. It goes dense after spacious, type after photography, and has a dark band only twice.

&#91;embedded content: homepage bands, desktop · tone, density and medium\]

The rhythm rules behind the strip:

- **Light vs dark.** Stone is the default. Graphite appears at "How booking works" (the shift from choosing to trusting) and at the close (typography and UI only, continuing into the footer). No two dark bands touch, and no dark band opens the page.
- **Dense vs spacious.** Each dense section (board, certainty facts, FAQ) sits next to a spacious one. Density lives *inside* sections, in 64–72 px rows; the gaps between sections stay generous.
- **Photography vs typography.** Two photographs only, far apart: the hero at the top and I1 beside the inclusions in the middle. Both show the service (a vehicle, a traveller, a kerb or an entrance) before they set mood. The sections that must prove something (board, process, vehicles, certainty facts), the service index and the close carry no photography, so no photograph is ever mistaken for proof of the fleet. Guardrail: if an image can be removed without reducing the visitor's understanding of the service, remove it.
- **Functional UI vs editorial.** UI appears at the top (strip), in the middle (confirmation) and at the bottom (strip again). The editorial bands between them do the persuading.
- **No card pattern.** Each section uses a different structure: masthead, timetable, line, list, fleet sheet, document sheet, index, two-column. None of them is "centred heading + three cards", and the five vehicles and five facts are not five cards.

## A. Desktop homepage wireframe

The reference frame is 1440 × 900, with a 12-column grid, 80 px outer margins and 24 px gutters. Content is capped at 1280 px; the hero photograph breaks out to full bleed. Column spans are written c1–c12. Each section lists purpose, placement, content, layout, mobile, interaction, treatment and medium, followed by a wireframe.

### Navigation

Five links, a phone number, a language switch and one button that only appears once the hero starter has scrolled away.

|  |  |
| --- | --- |
| Purpose | Orientation and an always-reachable phone line, without competing with the hero. |
| Why here | Global. On the homepage it is deliberately quiet so the hero starter is the only primary action in the first screen. |
| Content | Wordmark · Airport transfers · Business & VIP · Intercity & abroad ▾ (Long distance in Lithuania / Cross-border: Latvia, Estonia, Poland) · Cars · How it works · phone number · LT · EN · [Request a price] |
| Hierarchy | Wordmark → phone number (tabular, the most useful thing in the bar) → links → language. The button only joins after the hero. |
| Layout | 64 px bar on stone, the same tone as the hero top, so there is no transparent-over-photo state. Wordmark c1–c2; links c4–c8, left-aligned; phone, LT · EN and the button right-aligned in c9–c12. A 1 px hairline under the bar appears on scroll. |
| Dropped from top level | Routes hub (footer and the board's "All routes"); FAQ (inside How it works). WhatsApp stays out of the bar and lives in the hero and the mobile bar. |
| Mobile | 56 px bar: wordmark, LT · EN, "Menu". The menu is a full-height stone sheet: the four links in 28 px type, then phone, WhatsApp and email as large rows, then company name and code at the foot. No hamburger-only icon: the word "Menu" is visible. |
| Interaction | The bar is sticky; it shrinks 64 → 56 px after 80 px of scroll. "Request a price" fades in (200 ms) when the hero starter leaves the viewport. The current page is shown by a 2 px underline in the accent. The dropdown opens on click and on keyboard, never on hover alone. |
| Treatment | Links in 15 px medium graphite; phone in tabular figures with a small handset pictogram; LT · EN as text with the active one in graphite and the other in graphite-2. No icons for the links. |
| Medium | Typography and UI. |

```
┌─ 1440 ───────────────────────────────────────────────────────────────────────────────────┐
│ LT Transfers     Airport transfers  Business & VIP  Intercity & abroad ▾  Cars  How it works      │
│                                       ☎ +370 6__ _____   LT · EN   [Request a price →]* │
└─ * appears after the hero starter scrolls away ───────────────────────────────────────────┘
(single 64 px row on screen; split here only for width)
```

Lithuanian check: "Transferai į oro uostus · Verslo ir VIP transferai · Tarpmiestiniai ir užsienis · Automobiliai · Kaip tai veikia" plus phone and button must fit in one row at 1280 px. If they don't, the phone collapses to "☎ Skambinti" between 1024 and 1280 px.

### Hero: "the horizon"

The hero is a stone band carrying the headline, then a full-bleed 21:9 photograph. The ticket-strip starter sits across the photograph's bottom edge and turns into the route board's first row. Text never sits on the photo.

This replaces the left-text / right-car / glass-card pattern for three reasons:

- Contrast is guaranteed: the headline sits on stone.
- The image can be composed freely, because nothing has to be legible on it.
- The strip physically connects the hero to the board: one continuous "timetable".

|  |  |
| --- | --- |
| Purpose | Answer "can you take me there?" and start the request in under five seconds. Show at once that this is a professional private transfer service. |
| Why here | First screen. The certainty-seeker arrives with a route in mind; the strip lets them act on it immediately. |
| Content | Headline (working: **"Private transfers, priced before you go."**) · subline: **"Airport, business and long-distance transfers across Lithuania, Latvia, Estonia and Poland."** · secondary contact ("Prefer to talk? ☎ +370 … · WhatsApp") · starter strip: From · To · Date · [Request a price →] · promise line under the strip. |
| Hierarchy | Headline → strip → photo (mood) → promise line → secondary contacts. |
| Layout | **Headline band** (≈220 px, stone): headline c1–c8, display size, 2 lines max, bottom-aligned to a baseline 40 px above the photo. Subline and secondary contacts in c9–c12, bottom-aligned to the same baseline: a 2-column "masthead". **Photo** (full bleed, 21:9, height clamp 360–620 px): executive saloon at an airport kerb with a traveller and luggage, readable at a glance (slot H1, section D); calm ground in the bottom 20%. **Strip** (88 px, paper white, 1 px graphite border, 2 px radius) spans c1–c12 and overlaps the photo's bottom edge by half its height. Under it, a 13 px promise line sits on stone. |
| Promise line | **"Price agreed before your booking is confirmed · Available 24/7 by advance booking."** Two availability-and-price facts, no response-time claim. |
| Height | About 92svh at 1440 × 900: nav 64 + headline 220 + photo ≈480 + strip half 44 + promise 40. The board's header rule and "Popular routes" label peek above the fold as a scroll cue. Below 760 px of viewport height the photo shrinks before the headline does. |
| Starter fields | **From** "City, address or airport" · **To** · **Date** (native picker on touch, calendar popover on desktop) · the button attached to the strip's right end. Labels sit inside each field, top-left, in small caps: always visible, never placeholder-only. A ⇄ swap control between From and To. Suggestions list airports first, each with its IATA code (VNO, KUN, PLQ, RIX, TLL, WAW, WMI), then cities. Any text is accepted. |
| Interaction | Submit opens /request with From, To and Date prefilled at step 1, so nothing is re-entered. An empty submit is allowed and simply opens step 1. Values are kept for the session and pre-fill the closing starter. On focus, a field's bottom edge turns to a 2 px accent line. The button shows a short loading state if routing takes more than 100 ms. |
| Treatment | Stone above, photograph below, paper strip bridging them. The headline is graphite at display size with tight leading; no accent colour in the hero except the focus line. The promise line is graphite-2 with "24/7" in tabular medium. |
| Medium | Photography + typography + UI. |

```
┌─ nav ─────────────────────────────────────────────────────────────────────────────────┐  64
│                                                                                 │
│  PRIVATE TRANSFERS,                              Airport, business and          │
│  PRICED BEFORE YOU GO.                           long-distance transfers across │ 220
│  c1 ──────────────────────────── c8                 Lithuania, Latvia, Estonia      │ stone
│                                                  and Poland.                      │
│                                                  ☎ +370 …  ·  WhatsApp →          │
├─────────────────────────────────────────────────────────────────────────────────┤  ← horizon
│░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│
│░░  PHOTO 21:9, full bleed ░░░░░░░░░░░░░░░    [ executive saloon at ░░░░│ ≈480
│░░  airport kerb, pre-dawn  ░░░░░░░░░░░░░░░      traveller + luggage ] ░░░│
│░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│
│░░░ calm ground ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│
│ ┌─ STRIP 88 px, c1–c12 ───────────────────────────────────────────────────────┐ │
└─│ FROM            ⇄ │ TO                 │ DATE        │  REQUEST A PRICE →  │─┘
  │ Kaunas            │ Riga Airport  RIX  │ 14 Nov      │                       │
  └───────────────────────────────────────────────────────────────────────┘
    Price agreed before your booking is confirmed · Available 24/7 by advance booking.
  ── POPULAR ROUTES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━   ← fold at 900
```

The strip's column dividers (From | To | Date | button) line up with the board's columns (From | To | By road | Price) directly below. This alignment is what makes the two read as one object, and it must survive implementation.

### Popular routes: "the timetable"

The board borrows from a printed railway timetable rather than a lit airport display: graphite type on stone, hairline rows, tabular figures, uppercase place names and IATA codes as the only "airport" signal. A lit board is the obvious move and tips into theme-park; a printed one reads as precise and calm.

The board communicates an **entry price**, not a pricing matrix. Vehicle-dependent pricing lives in the request and the written confirmation, never in the board.

|  |  |
| --- | --- |
| Purpose | Prove coverage, anchor price and pre-qualify, in one glance. Every row is a shortcut into a prefilled request. |
| Why here | Directly under the strip, as its continuation. It answers "roughly what will it cost?" before the visitor has to ask, and it catches visitors who didn't type into the strip. |
| Content | Header row: FROM · TO · BY ROAD · FROM, PER JOURNEY. Eight launch routes in demand order, Riga Airport first: Kaunas → Riga Airport RIX · Vilnius → Riga Airport RIX · Šiauliai → Riga Airport RIX · Panevėžys → Riga Airport RIX · Vilnius Airport VNO → Kaunas · Kaunas Airport KUN → Vilnius · Vilnius → Warsaw Chopin WAW · Palanga Airport PLQ → Nida. Last row: ANY OTHER ROUTE · "Lithuania, Latvia, Estonia and Poland" · "Request a price →". |
| Row format | **KAUNAS → RIGA AIRPORT RIX** · **~3 h 20 min** · **from €200** (development placeholder, see below). |
| Clarification (under the board) | **"Prices shown are indicative. Your exact price is agreed individually based on the route, vehicle and journey details."** Then: "One way. Every route runs in both directions." and "All routes →". The old "per car, up to [3] passengers" footnote is gone: no capacity claims. |
| Price status | All prices are **development placeholders** until supplied. Approximate market levels will be benchmarked against transfers.lt and kaunastransfers.lt, then set by the business. The Kaunas → Riga Airport row uses €200 as the working example. Every placeholder renders with a visible `DEV` marker in non-production builds, and a production build fails if any row still carries one. Nothing is hard-coded as final. |
| Hierarchy | Place names (largest) → price → duration → IATA code → clarification. |
| Layout | Full content width under a 2 px graphite top rule. Section label "Popular routes" sits in the left rail on the rule, like a timetable title. Columns align with the strip above: FROM c1–c3 · arrow c4 · TO c4–c7 · BY ROAD c8–c9 · PRICE c10–c11, right-aligned · action c12. Rows are 72 px with 1 px hairlines. The last row is set in graphite-2 with the same rhythm, so it reads as part of the board and not as a banner. |
| Mobile | No table, no horizontal scroll. Each row becomes a two-line block of at least 72 px: line 1 "KAUNAS → RIGA AIRPORT RIX" (wrapping at the arrow if needed); line 2 "~3 h 20 min · from €200 ›". The column header row is dropped; labels are folded into line 2. The clarification sits once under the last row. |
| Interaction | Each row is one link (one tab stop, one focus ring around the whole row) to /request?from=…&to=… with those two fields filled. On hover, the row tint moves to stone-2, the arrow travels 4 px, and a 1 px accent route line draws from the arrow toward TO (250 ms). On touch there is a pressed state only, with no hover dependency. No filters, tabs or vehicle selector: eight rows don't need them, and a vehicle selector here would turn the board into the matrix we are avoiding. |
| Airports | IATA code in mono, 13 px, graphite-2, after the airport name: "RIGA AIRPORT RIX". No plane icons. |
| Treatment | Place names uppercase, 22 px, medium, +3% tracking. Durations as "~3 h 20 min" and prices as "from €200", both tabular so columns align digit for digit. Arrow is a custom 1.5 px line arrow in the accent, the only colour on the board. No boxes, no zebra stripes, no cards. |
| Medium | Route data + typography. |

```
━━ POPULAR ROUTES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 2 px rule
 FROM                │ TO                         │ BY ROAD    │ FROM          │
─────────────────────────────────────────────────────────────────────────────────
 KAUNAS            →   RIGA AIRPORT          RIX     ~3 h 20 min    from €200 DEV  →
──────────────────────────────────────────────────────────────────────────────────
 VILNIUS           →   RIGA AIRPORT          RIX     ~x h xx min    from €___ DEV  →
──────────────────────────────────────────────────────────────────────────────────
 ŠIAULIAI          →   RIGA AIRPORT          RIX     ~x h xx min    from €___ DEV  →
── … PANEVĖŽYS → RIX · VNO → KAUNAS · KUN → VILNIUS · VILNIUS → WAW · PLQ → NIDA … ───────
 ANY OTHER ROUTE       Lithuania, Latvia, Estonia and Poland          Request a price  →
───────────────────────────────────────────────────────────────────────────────────
 Prices shown are indicative. Your exact price is agreed individually based on the route,
 vehicle and journey details.                                      All routes →
 One way. Every route runs in both directions.        (DEV = placeholder, never shipped)
```

### How booking works: "the line and the confirmation"

This is the first dark section. On the left, a vertical route line with four stations. On the right, an example booking confirmation, the one framed object on the page. Each station lights up the fields of the confirmation it produces, so the process and its proof are read together.

|  |  |
| --- | --- |
| Purpose | Answer "how does this work with a company I don't know?" and "what happens after I send it?" by showing the deliverable, not describing it. |
| Why here | The board has just invited a click; this is the visitor's next doubt. Dark graphite after two light screens resets attention and signals a change from "choose" to "trust". |
| Content | Heading: "How booking works" · personality line: **"Your journey. Your vehicle. Price agreed in advance."** · four stations (below) · confirmation example · caption "Example confirmation. Yours shows your confirmed vehicle and journey details." · text link "Pricing & payment →" (How it works). |
| Stations | **1 Request**: "Send your route, date and flight number. Choose a vehicle if you have a preference." · **2 Vehicle & price**: "We review your journey and confirm the available vehicle with a price." · **3 Booking confirmed**: "Once the price and journey details are agreed, your booking is confirmed in writing." · **4 Travel**: "Your confirmed vehicle picks you up at the agreed time and takes you door to door." |
| Confirmation fields | Booking reference LT-____ · Route Kaunas → Riga Airport RIX · Pickup date · Pickup time 03:15 · Pickup location (your address) · Flight number, if supplied · Confirmed vehicle Toyota RAV4 · Vehicle colour, if known · Plate, if known · Contact +370 … · **Agreed price €___** · Payment method (cash / card / bank transfer). No driver name: the service has multiple drivers and the confirmation does not depend on knowing who is assigned. The example uses the RAV4, the most neutral of the five, so the site never implies a premium vehicle is standard. |
| Hierarchy | Heading → confirmation → stations → caption. |
| Layout | Section padding 160 px. Heading and personality line in c1–c5. The line with its four stations runs down c1–c5 below the heading: a 1.5 px accent line with 12 px station rings and 120 px between stations. The confirmation sits in c7–c11: 440 px wide, paper on graphite, 4 px radius, typeset as a message rather than a phone mock-up, with label/value rows on hairlines and the price row last and largest. |
| Mobile | The line stays vertical, full width. The confirmation moves to sit between stations 2 and 3, where the price and vehicle arrive, at full width minus 20 px margins. The field highlighting is static: the related fields carry a small station number (①–④) instead. |
| Interaction | Desktop: as each station crosses the middle of the viewport, its ring fills and the confirmation fields it produces lift to full opacity (others at 55%). Stations are also focusable and hoverable, which does the same. Reduced motion: everything is at full opacity with numbered markers, as on mobile. No auto-play, no typing animation. |
| Treatment | Graphite background, bone text, stone hairlines at 16%. The station numbers are tabular display figures in graphite-2. The confirmation uses mono only for the reference and plate, and tabular figures for times and price. No WhatsApp or Viber UI imitation: it reads as "a message from us", channel-neutral. |
| Medium | UI + diagram + typography. No photography. |

```
███████████████████████████████████████████████ graphite ███████████████████████████████
  HOW BOOKING WORKS                         ┌─ EXAMPLE CONFIRMATION ─────────┐
  Your journey. Your vehicle.                │ Ref          LT-____             │
  Price agreed in advance.               │ Route        KAUNAS → RIGA RIX   │ ①
                                            │ Pickup       Thu 14 Nov, 03:15  │ ④
  ● 1  REQUEST                              │ Flight no.   [BT ___] (if given)│ ①
  │    Route, date, flight. Vehicle         │─────────────────────────────────┤
  │    preference if you have one.          │ Vehicle      Toyota RAV4, [grey]│ ③
  │                                         │ Plate        ●●● ●●● (if known) │ ③
  ● 2  VEHICLE & PRICE          │ Contact      +370 …             │ ③
  │    Available vehicle + proposed price   │ Payment      Cash / card / bank │ ②
  │    reviewed with you before booking.    │─────────────────────────────────┤
  │                                         │ AGREED PRICE          € ___     │ ②
  │                                         └─────────────────────────────────┘
  ● 3  BOOKING CONFIRMED                     Example. Yours names your vehicle.
  │    Vehicle, pickup time, contact, in writing.
  │
  ● 4  TRAVEL
       Picked up at the agreed time,                    Pricing & payment →
       door to door.
████████████████████████████████████████████████████████████████████████████████
```

The 03:15 pickup in the example quietly shows that early hours are normal. Check the example times against the real Kaunas–Riga duration before launch. The flight number is journey information only; the site does not promise flight tracking.

### Included in every transfer: "the conditions of carriage"

The inclusions are set as a list of terms, like the conditions on the back of a ticket: label on the left, one specific sentence on the right, a hairline between each. A tall photograph (I1) holds the other half of the screen. It is the only photograph below the hero and exists to show a second real use case, business and premium travel, not to add atmosphere.

A list rather than a grid is deliberate. When an unconfirmed claim is removed from a card grid, it leaves a hole. Removed from a list, nothing breaks: the rows close up. Each row is a content item with a `status: confirmed | tbc` flag, and only confirmed rows render in production. At launch every row is confirmed except child seats, which stays hidden.

|  |  |
| --- | --- |
| Purpose | Answer "what about my situation?": vehicle, payment, luggage, invoices. Do it with specifics that a taxi or shuttle can't match. |
| Why here | After the process has explained *how*, this explains *what you get*. It is also the last objection-handling section before the vehicles. |
| Content (confirmed only) | **Agreed price**: The price is agreed with you before the booking is confirmed. · **Door to door**: Pickup and drop-off at the agreed addresses or terminal. · **Vehicle preference**: You may state a preferred vehicle; we confirm what is available and agree the price with you before booking. · **Payment**: Cash, card or bank transfer. · **Invoice**: Invoices are available. · **Luggage**: Tell us what you're travelling with and we'll recommend a suitable vehicle. (No luggage capacities are stated.) · **Child seats** *(genuine TBC; internal optional item, hidden until the client confirms availability)*. |
| Hierarchy | Label (small caps) and its sentence are read as a pair. |
| Layout | Photo slot I1 (4:5 portrait, business traveller and premium vehicle at a hotel or office entrance) in c1–c5, top-aligned with the heading. Heading "Included in every transfer" + one-line lead in c7–c12, list below in c7–c12: label column 3 cols, sentence 3 cols, rows about 64 px with 1 px hairlines. |
| Mobile | Photo becomes a 3:2 band at the top, full bleed. The list stacks label above sentence in each row. |
| Interaction | Desktop: the photo is sticky (top 96 px) while the list scrolls, ending together at the list's last row. Rows are static text, not accordions; there is nothing to click in the list. |
| Treatment | Stone background. Labels uppercase 13 px, +8% tracking, graphite-2; sentences 18 px graphite. No icons: a pictogram per row would turn it straight back into a feature grid. |
| Medium | Typography + one photograph. |

```
  ┌─ I1 photo 4:5 ─────────┐     INCLUDED IN EVERY TRANSFER
  │░░░░░░░░░░░░░░░░░░░░░░│     The things that make a long journey predictable.
  │░ traveller + car  ░░░░│
  │░ at hotel/office  ░░░░│     AGREED PRICE     The price is agreed with you before
  │░ entrance, dusk   ░░░░│                      the booking is confirmed.
  │░░░░░░░░░░░░░░░░░░░░░░│     ────────────────────────────────────────────────
  │░░░░░░░░░░░░░░░░░░░░░░│     DOOR TO DOOR     From your address to the kerb…
  │░░░░░░░░░░░░░░░░░░░░░░│     ────────────────────────────────────────────────
  │░░░░░░░░░░░░░░░░░░░░░░│     YOUR VEHICLE     Tell us your preference; we confirm
  │░░░░░░░░░░░░░░░░░░░░░░│                      what's available with your price.
  └──────────────────────┘     ────────────────────────────────────────────────
   (sticky while the list scrolls)  PAYMENT · INVOICE · LUGGAGE …
```

### The cars: "the fleet sheet"

Five vehicles are drawn as side-profile line drawings standing on one shared road line, each with its real name and one understated body descriptor beneath. There are no tiers, classes, packages or capacity tables. The idea is that a customer can prefer a vehicle, while availability is confirmed and the price is agreed individually before booking.

Desire still comes from craft rather than gloss: precise drawings in one line weight, standing on one road at proportional scale, and the actual names. Proportional scale is by body type and approximate, not a measured claim; no dimensions are printed.

|  |  |
| --- | --- |
| Purpose | Answer "what might arrive?" honestly: these are the vehicles we use, you may state a preference, and we confirm the available vehicle and agree the price with the customer. |
| Why here | After inclusions (which already say "your choice of vehicle"), the visitor's next question is the vehicle itself. Placed after the confirmation mock, "confirmed in writing" is already familiar. |
| Content | Heading: **"The cars"** · lead: **"Choose a vehicle if you have a preference. We'll confirm the available vehicle and agree the price with you before your booking is confirmed."** · five vehicles, in this order: **Toyota RAV4**, SUV · **Mercedes-Benz C-Class**, Saloon · **Mercedes-Benz E-Class**, Executive saloon · **Audi A8**, Executive saloon · **Mercedes-Benz V-Class**, MPV / group travel. Optional one short line under each (draft, TBC with the business, no numbers, no equipment): RAV4 "Practical, with room for luggage." · C-Class "A comfortable saloon." · E-Class "A refined saloon for longer journeys." · A8 "A spacious saloon for longer journeys." · V-Class "Room for groups and luggage." Footnote: "Not sure which to choose? Select 'Recommend a vehicle' in your request." |
| Not shown | Model years, generations, trim levels, equipment lists, passenger counts, suitcase counts, capacity pictograms, manufacturer logos, comparison scores. The spec rows and pictograms of the previous version are removed. |
| Hierarchy | The five drawings (as a group) → vehicle names → body descriptors → one-line character → footnote. |
| Layout | Heading and lead span c1–c6 in a masthead row above the sheet (the left rail is too narrow for five columns). The sheet spans c1–c12 as **five equal columns**, about 240 px each at 1280, separated by 1 px vertical hairlines at 14%. One 1 px road line runs under all five drawings; each drawing sits on it, scaled by body type (RAV4 and C-Class shortest, E-Class and A8 longer, V-Class tallest and long). Below each drawing, in this order and on shared baselines: name (title size, medium) · body descriptor (label style, uppercase 13 px, graphite-2) · optional character line (15 px). One 2 px rule closes the sheet. The Executive saloon descriptor is repeated for E-Class and A8 deliberately: it stays honest rather than inventing a distinction. |
| Optional real photos | A small "The actual vehicle" 3:2 thumbnail row appears under the sheet only if the business's own phone photos pass the quality bar. Absent by default, and the layout closes up without it. |
| Mobile (and tablet below 1024 px) | A vertical list, one vehicle per row, 88 px minimum: the drawing on the left (about 40% width) on its own road line, name and descriptor on the right, character line below on its own line. All five drawings share one scale. No swiper and no horizontal scroll: hidden vehicles are vehicles nobody sees. Rows are links to the request, see below. |
| Interaction | Hovering or focusing a column darkens its drawing's stroke and fades the others to 40%. Each column is one link: it opens /request at step 2 with that vehicle preselected as a preference, and the page keeps the wording "preference, not a guarantee". "Recommend a vehicle" in the footnote opens the same step with "No preference / Recommend a vehicle". Nothing is selectable on the homepage itself, so there is no configurator state to manage. |
| Treatment | Stone-2 background, the only stone-2 band, so the sheet feels like a separate page of the brochure. Drawings in a single graphite line weight, no fills, no wheel animation. Brand names in text only; never manufacturer logos or badges. No "Popular" or "Best for" labels, which would create a ladder. |
| Medium | Line drawings + typography (+ real photos only if good). |

```
  THE CARS    Choose a vehicle if you have a preference. We'll confirm the available
              vehicle and agree the price with you before the booking is confirmed.
  ─────────────────────────────────────────────────────────────────────────────────
    ___           ____             ______            ______            ________
  _/|  |\__    __/|   |\__      __/|    |\___     __/|    |\___     __/|   |    \__
 (_o_|__|_o_)  (_o_|___|__o_)  (_o_|____|___o_)  (_o_|____|___o_)  (_o_|___|_____o_)
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ one road line
  Toyota RAV4   Mercedes-Benz    Mercedes-Benz    Audi A8          Mercedes-Benz
                C-Class          E-Class                           V-Class
  SUV           SALOON           EXECUTIVE SALOON EXECUTIVE SALOON MPV / GROUP TRAVEL
  Practical,    A comfortable    A refined saloon A spacious       Room for groups
  room for      saloon.          for longer       saloon for       and luggage.
  luggage.                       journeys.        longer journeys.
  ─────────────────────────────────────────────────────────────────────────────────
  Not sure which to choose? Select "Recommend a vehicle" in your request.
```

Drawings (not traced from photos, not AI-rendered) are needed for three body types: SUV, saloon (one proportion each for C, E and A8, drawn generically and de-badged) and MPV. They read as design, not as a claim about a specific unit.

### Made for journeys that need certainty: "the transport document"

This replaces the former personal-driver trust section. Nothing here names a person. It is set like a ticket's conditions of carriage: three large facts, then two ruled facts, then the operator's register. It is not five cards and carries no icons.

|  |  |
| --- | --- |
| Purpose | Make a first-time booker comfortable with an unknown company through concrete operational facts: when you can travel, what the price rule is, where we go, how you can pay, whether you can get an invoice, and who the operator is. |
| Why here | After the vehicles and before the service index: the last "is this real?" check before the visitor commits. |
| Content: lead | Heading **"Made for journeys that need certainty"** with a short lead: "Pre-booked private transfers across Lithuania, Latvia, Estonia and Poland." |
| Content: three display facts | **24/7** · Transfers by advance booking · **Agreed price** · Agreed before booking confirmation · **4 countries** · Lithuania · Latvia · Estonia · Poland |
| Content: two ruled facts | **Payment options**: Cash · card · bank transfer · **Invoices**: Available |
| Content: operator register | MKT PASLAUGOS (legal form to be added) · company code · registered address, if shown publicly · passenger-transport permit, if it will be shown · insurance, if it will be shown, set as a plain two-column register in small type, the way a ticket prints its operator. A line that isn't confirmed isn't printed. No VAT code line (the company is not VAT-registered). |
| Content: reach us | Phone · WhatsApp · email, each with the actual number or address (Viber only if the business uses it). No claim about who answers, and no reply-time claim. |
| Removed | Named driver, portrait, first-person note, signature, "the same person answers, drives and invoices", and any policy-figure row (waiting, cancellation, reply time). None of these exist on the site. |
| Reviews slot | Hidden at launch. When real Google reviews exist, a single row appears here: "Google · [rating] from [n] reviews · Read them on Google →", linking out. No testimonial cards, no drawn stars, no AI faces. |
| Layout | Left rail c1–c4: heading and lead, sticky while the facts scroll on tall screens. Right, c5–c12: **row 1** three display facts in three columns (c5–c6, c7–c9, c10–c12 balanced by content), separated by 1 px vertical hairlines; **row 2**, below a 2 px rule, the two ruled facts as full-width hairline rows (label left, value right, 64 px rows); **row 3**, below another 2 px rule, the operator register (two columns) and the contact rows. |
| Display figures | "24/7" at figure-xl (96 px), tabular, graphite. "4" at figure-xl with "countries" as a 24 px unit and the four countries in 15 px graphite-2 beneath. "Agreed price" is set as a phrase at the same cap height (not a number, so it uses display-l, 48 px), with "Agreed before booking confirmation" beneath. The three descriptors are 17 px, aligned on one baseline. |
| Mobile | Heading, lead, then the three facts stacked as rows (figure left at 56 px, descriptor right), then Payment and Invoices rows, then the register, then contact rows as full-width 56 px tap targets. |
| Interaction | Contact rows are real links (tel:, wa.me, mailto:). The facts are static, with no count-up animation. The company code is selectable text, never an image. |
| Treatment | Stone. Figures in graphite; units and descriptors in graphite-2. Register 14 px graphite-2. Rules, not boxes: the structure is the 2 px rules and the vertical hairlines. |
| Medium | Typography only (no photography). |

```
  MADE FOR JOURNEYS               24/7              Agreed price      4
  THAT NEED CERTAINTY             Transfers by      Before booking    countries
  Pre-booked private              advance booking   confirmation     Lithuania · Latvia ·
  transfers across Lithuania,                                         Estonia · Poland
  Latvia, Estonia and Poland.     ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                                  PAYMENT OPTIONS    Cash · card · bank transfer
                                  ─────────────────────────────────────────────────────
                                  INVOICES           Available
                                  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                                  Operator   MKT PASLAUGOS      Code  _________
                                  Permit     (if shown)       Insurance (if shown)
                                  Address    ______________, Lithuania
                                  ─────────────────────────────────────────────────────
                                  ☎ +370 …   WhatsApp   Viber   Email
```

### Service types: "the index"

A typography-led section with no image: the services as an editorial index, one row each with a large name, the concrete places it covers, and a link to the deeper page. It reads like a timetable's contents page or a book's table of contents, not a set of icon cards.

|  |  |
| --- | --- |
| Purpose | Route visitors with a specific journey type to the right deeper page, and give search engines a clean internal link to each hub. |
| Why here | Low on purpose: most visitors already know their journey type, so this is navigation for the ones who scrolled this far. It follows the dense certainty facts and the 96 px figures with a second, differently structured typographic band, and sets up the small dense FAQ. |
| Content | **Airport transfers**: Vilnius VNO · Kaunas KUN · Palanga PLQ · Riga RIX · Warsaw WAW / WMI → · **Business & VIP transfers**: Guests, staff and partners between airports, hotels and offices; invoices available → · **Long distance**: Between any two places in Lithuania, door to door → · **Cross-border**: Latvia, Estonia and Poland, as a normal part of the service → |
| Hierarchy | Service name → places → arrow. |
| Layout | No image above or beside it. The section opens on a full-width 2 px graphite rule with the label "Where we go" on the rule in the left rail, like every other major section. Section padding 160 px. Index spans c1–c12: name c1–c5 at display-l 48 px, places c6–c11 at 18 px, arrow c12. Rows 128 px with 1 px hairlines. |
| Mobile | Index rows stack name (30 px) over places, with the arrow at the right of the name. Rows stay as full-width links of at least 88 px. No photograph. |
| Interaction | Each row is one link. On hover, the name shifts 8 px right and the arrow becomes the accent colour; on touch, a pressed tint. All four rows render. Business & VIP transfers is the second row, reflecting its weight in the service. |
| Treatment | Stone. Names in display weight; places in graphite-2 with IATA codes in mono, repeating the board's language; arrows in pine. Wayfinding language only: no cards, gradients, illustrations or coverage map to compensate for the removed photograph. |
| Medium | Typography only. |

```
━━ WHERE WE GO ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  Airport transfers          Vilnius VNO · Kaunas KUN · Palanga PLQ ·             →
                             Riga RIX · Warsaw WAW / WMI
──────────────────────────────────────────────────────────────────────────────
  Business & VIP transfers   Guests, staff and partners; invoices available    →
──────────────────────────────────────────────────────────────────────────────
  Long distance              Between any two places in Lithuania               →
──────────────────────────────────────────────────────────────────────────────
  Cross-border               Latvia, Estonia and Poland                        →
```

The line-drawn coverage map (strategy concept E) stays off the homepage, and is not introduced to fill the space the photograph left: next to a timetable board it adds a second, competing information graphic. It fits better as the header of the Cross-border hub, now showing four countries rather than "beyond".

### FAQ and the closing sequence: "the arrival"

The end of the page is one continuous sequence. A two-column FAQ runs into a dark graphite closing band that is pure typography and UI. The same ticket strip returns inside it, and the footer continues in the same graphite underneath. The page begins with one strong photograph and ends with none. There is no giant CTA box and no gap between "last question" and "let's go".

**FAQ**

|  |  |
| --- | --- |
| Purpose | Clear the last doubts in the visitor's own words, with a clear way to reach the service for anything else. |
| Content | Heading "Questions travellers ask" · left rail: "Still unsure? Ask us directly." with phone and WhatsApp (no name, no person) · questions: Can I choose a vehicle? (Yes, as a preference; we confirm the available vehicle and agree the price with you before the booking is confirmed.) · Do you drive at night? (Yes: transfers run 24/7 by advance booking.) · How early will you pick me up for my flight? (Give us your flight number and we'll agree the pickup time with you.) · How do I pay? (Cash, card or bank transfer.) · Can I get an invoice? (Yes. Invoices are available. If you specifically require a VAT invoice, this can also be arranged.) · Do you cross borders? (Yes, to Latvia, Estonia and Poland, as a normal part of the service.) · Do you do business transfers? (Yes: airport, hotel and office transfers for guests and staff; invoices available.) · Can I book for someone else arriving? (the diaspora-parent case) · Can I travel with a pet? (No, LT Transfers does not currently transport animals.) · Do you have child seats? *(hidden until the client confirms)* |
| Layout | Left rail c1–c4: heading and the contact block, sticky while the questions scroll. Questions in c6–c12 as a hairline list; each question is a disclosure button, and its answer opens inline below it. The first question is open by default. Answers are 2–4 sentences and may link to How it works. |
| Mobile | Heading, then questions, then the contact block after the list (not sticky). |
| Interaction | Native disclosure semantics (button + aria-expanded), 200 ms height-free reveal (opacity + translate), several answers can be open at once. A "+" rotates to "–"; no chevrons. Answers are in the HTML for search and FAQPage schema. |
| Treatment | Stone. Questions 20 px medium, answers 17 px. |

**Closing band and footer**

|  |  |
| --- | --- |
| Purpose | Return the visitor to their journey: the same strip they saw first, now with their earlier input still in it. |
| Content | Headline **"Where are you going?"** · supporting line **"Private transfers across Lithuania, Latvia, Estonia and Poland."** · the starter strip (same component and information architecture as the hero: From · To · Date · Request a price →, prefilled from the hero if used) · promise line ("Price agreed before your booking is confirmed · 24/7 by advance booking") · "Call · WhatsApp" with the actual number in bone text. |
| Layout | Graphite band, 160 px padding top and bottom, opening on a 2 px bone rule. Headline in c1–c8 at display-xl 88 px, bottom-aligned; supporting line in c9–c12 at body-l in ash, aligned to the same baseline, mirroring the hero masthead. 64 px below, the strip spans c1–c12 at 88 px: paper fill with a graphite button fused to its right end, so contrast comes from the strip itself and nothing is tested against an image. Below it the promise line, then the contact row. After 120 px and a 1 px stone hairline at 16%, the footer continues on the same graphite: company record, nav columns, legal links, LT · EN, and the disclosure line "Photography on this site is illustrative. Your booking confirmation shows the actual vehicle." |
| Mobile | Headline at 36 px and the supporting line stacked; the strip stacks as in the hero; promise line; Call and WhatsApp as 48 px rows; footer as a single column. The sticky action bar hides once this strip enters the viewport. No photograph, crop or overlay. |
| Interaction | Same as the hero strip. If the visitor already submitted a request this session, the strip is replaced by "Your request [LT-____] is with us. Continue on WhatsApp →". |
| Treatment | The second and last dark section. Bone headline on graphite (13.3:1), ash supporting text (6.7:1), pine-light only for the swap control and focus line. No photograph, overlay, gradient or illustration. The footer wordmark stays its normal small size. Decisive and conversion-focused, not cinematic. |
| Medium | UI + typography. |

```
  QUESTIONS TRAVELLERS ASK          + Can I choose a vehicle?
                                      Yes, as a preference. We'll confirm the available
  Still unsure?                       vehicle and agree the price with you before the booking is confirmed.
  Ask us directly.                 ──────────────────────────────────────────────────
  ☎ +370 …  ·  WhatsApp →         + Do you drive at night?  (24/7 by advance booking)
  (sticky)                         ──────────────────────────────────────────────────
                                   + How early will you pick me up…?  + How do I pay? …
████████████████████████████████ graphite ████████████████████████████████████████████
██  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  ██  2 px bone rule
██                                                                                ██
██  WHERE ARE YOU GOING?                         Private transfers across          ██
██  c1 ──────────────────────── c8               Lithuania, Latvia, Estonia        ██
██                                               and Poland.                       ██
██                                                                                ██
██ ┌ FROM  Kaunas  ⇄ │ TO  Riga Airport RIX │ DATE  14 Nov │ REQUEST A PRICE → ┐ ██
██ └──────────────────────────────────────────────────────────────────────────┘ ██
██  Price agreed before your booking is confirmed · 24/7 by advance booking.            ██
██  Call +370 … · WhatsApp →                                                      ██
██  ────────────────────────────────────────────────────────────────────────  ██
██  LT Transfers   Airport · Business & VIP · Intercity & abroad · Cars · How     ██
██  MKT PASLAUGOS · code ____ · address · Privacy · Terms                         ██
██  Photography is illustrative. Your confirmation shows the actual vehicle. LT·EN ██
```

### Request flow handoff: vehicle preference

The homepage does not contain the booking form, but it hands off into it, so the vehicle field is specified here. The booking flow stays the strategy's three steps; this adds one field at step 2 and changes no others.

| Item | Specification |
| --- | --- |
| Where | Step 2 (Passengers and luggage), replacing the old "Car preference: Any / Saloon / SUV / Van?" field. |
| Field | **Vehicle preference** (single choice, optional): Toyota RAV4 · Mercedes-Benz C-Class · Mercedes-Benz E-Class · Audi A8 · Mercedes-Benz V-Class · **No preference / Recommend a vehicle** (default). |
| Message, shown directly under the field | **"We'll confirm the available vehicle and agree the price with you before the booking is confirmed."** One sentence, no asterisk, no extra legal text. |
| Style | A compact list of six rows in the same hairline-row language as the board: name left, body descriptor right in graphite-2, one selected state (pine 2 px left edge plus filled radio). No photos, no prices per vehicle, no availability states, no comparison. It must not feel like a car-rental configurator. |
| Prefill | Arrives from a fleet-sheet column or from "Recommend a vehicle". The visitor can change it. |
| Output | The chosen preference travels with the request into the internal booking record and the confirmation template. The confirmation states the vehicle actually assigned, which may differ from the preference. |
| Price | No automatic or per-vehicle price is shown on the request page. LT Transfers reviews the journey and the price is agreed with the customer before the booking is confirmed. |

## B. Mobile homepage wireframe

Mobile keeps the desktop order but changes four things: it puts the starter above the fold, turns every table into tappable two-line rows, adds one sticky action bar, and moves the confirmation to where it is earned.

The reference frame is 390 × 844, with a 4-column grid, 20 px margins and 16 px gutters. The minimum tap target is 48 px; inputs are 56 px with 16 px+ text, so iOS doesn't zoom.

| Section | What changes on mobile, and why |
| --- | --- |
| Navigation | 56 px bar: wordmark, LT · EN, "Menu". A full-screen menu sheet with contact rows. The phone moves out of the bar into the sticky bar, where the thumb is. |
| Hero | Headline (36 px, 2–3 lines) and a one-line subline ("Across Lithuania, Latvia, Estonia and Poland."); the photo crops to 16:9 (≈220 px). The starter stacks as a joined block: From / To (with ⇄) / Date / full-width button, overlapping the photo's bottom by 24 px. The button lands at about 640 px, above the fold. "Prefer to talk? Call · WhatsApp" sits as a text row under the button. |
| Starter on tap | Tapping From or To opens a full-screen picker: a search field, then airports with their IATA codes, then recent and popular cities. That is one question per screen, with no tiny dropdowns. Date uses the native picker. |
| Sticky action bar | Appears once the hero starter has scrolled out. It holds **[Request a price]** (wide, filled) + **WhatsApp** + **Call** (icon + label, 48 px each). It hides at the closing strip, on /request, and while the keyboard is open. Content gets matching bottom padding and the bar respects the safe area. |
| Routes board | Two-line rows of at least 72 px: route on line 1, "~3 h 20 min · from €200 ›" on line 2. No header row, no horizontal scroll. The clarification line ("Final price depends on the selected vehicle and journey details.") and "All routes" sit once below the rows. |
| How booking works | The line is vertical and full width. The confirmation is inserted between stations 2 and 3. Fields carry ①–④ markers instead of scroll-linked highlighting. |
| Included | Photo becomes a 3:2 band on top (or is dropped if the page feels long in testing). Rows stack label over sentence. |
| Cars | Five rows in a vertical list: drawing left (≈40% width, own road line, one shared scale), name and descriptor right, character line below. Rows are links to the request's vehicle step. No carousel, no swiper. |
| Certainty facts | Heading and lead, then the three display facts as rows (figure left at 56 px, descriptor right), then Payment and Invoices rows, then the register, then contact rows as 56 px tap targets. |
| Service index | Name (30 px) over places, arrow beside the name, rows of at least 88 px. Typography only. |
| FAQ | Contact block moves below the questions. |
| Closing | Typography and UI on graphite: headline (36 px), supporting line, stacked strip, promise line, Call and WhatsApp as 48 px rows; footer as a single column with company details first. No photograph. |

```
┌── 390 ────────────────────────┐
│ LT Transfers   LT·EN   Menu │  56
│                              │
│ PRIVATE TRANSFERS,           │
│ PRICED BEFORE YOU GO.        │
│ Across Lithuania, Latvia,    │
│ Estonia and Poland.          │  ~200
│░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│
│░ H1 photo 16:9 ░░░░░░░░░░░░░│  ~220
│░┌──────────────────────────┐░│
└─│ FROM  Kaunas            ⇅ │─┘
  │ TO    Riga Airport  RIX  │
  │ DATE  14 Nov            │
  │ [  REQUEST A PRICE →  ]│  button ≈ 640
  └──────────────────────────┘
   24/7 by advance booking · Call · WhatsApp
 ━━ POPULAR ROUTES ━━━━━━━━━━━━━━  ← fold 844
  KAUNAS → RIGA AIRPORT RIX
  ~3 h 20 min · from €200    ›
 ──────────────────────────────
  …

 ┌─ sticky bar (after hero) ────┐
 │[REQUEST A PRICE] ☏ WA  ☎ Call│  64 + safe area
 └──────────────────────────────┘
```

## C. Design system direction

One grotesk, tabular figures, hairlines instead of boxes, near-square corners, one accent used only for wayfinding, and darkness in exactly two places. Everything below is a starting point to test in the first build, not a final spec. Nothing in the system changed in this update, except that the certainty facts reuse figure-xl and the fleet sheet reuses the road-line and hairline devices.

### Typography roles

| Role | Use | Setting |
| --- | --- | --- |
| Display | Hero headline, section headlines, certainty figures | The grotesk, medium (500), tight leading 1.0–1.05, –2% tracking at display size |
| Route | Place names on the board, strip values, vehicle names in the fleet sheet | The grotesk, medium, UPPERCASE for route and strip, sentence case for vehicle names, +3% tracking on uppercase |
| Body | Sentences, answers, character lines | The grotesk, regular (400), 1.55 leading, 60–72 characters per line |
| Label | Field labels, column headers, body descriptors, section rail labels | The grotesk, medium, UPPERCASE 12–13 px, +8% tracking |
| Code | IATA codes, booking reference, plate placeholder | A mono, 13–14 px, graphite-2. Nowhere else. |
| Figures | Prices, times, durations, certainty facts | The grotesk's tabular figures (`font-variant-numeric: tabular-nums`) everywhere a number appears |

Font candidates to test: Söhne or Neue Haas Unica (paid); Instrument Sans or Hanken Grotesk (free). Mono: IBM Plex Mono or JetBrains Mono. Pass criteria are true tabular figures, all Lithuanian diacritics in every weight used, and a good uppercase at 12 px. There is no serif: distinctiveness comes from scale, uppercase route type and alignment.

### Type scale (desktop / mobile, px)

| Token | Desktop | Mobile |
| --- | --- | --- |
| display-xl (hero) | 88 | 36 |
| figure-xl (certainty figures: 24/7, 4) | 96 | 56 |
| display-l (section; "Agreed price" fact) | 48 | 30 |
| display-m (index names) | 40 | 26 |
| title (FAQ questions, vehicle names) | 24 | 20 |
| route (board) | 22 | 18 |
| body-l (lead) | 20 | 18 |
| body | 17 | 16 |
| small (register, footnotes) | 14 | 14 |
| label | 13 | 12 |

### Grid, spacing and lines

- **Grid.** 12 columns at 1440 (80 px margins, 24 px gutters, 1280 px max content), 8 columns at tablet, 4 at mobile (20 px margins). Photographs go full bleed or align to a grid edge; never a floating size. The fleet sheet uses five equal columns across all 12 (at desktop only).
- **Left rail.** Many sections put a small uppercase label on the section's top rule at c1, with content starting at c4–c7. This asymmetric rail is what stops the page from becoming "centred heading + content" over and over. The fleet sheet is the one section that moves its heading above the content to give five columns the full width.
- **Spacing.** An 8 px base. Section padding 160 px desktop / 96 px mobile; 96 / 64 inside light-to-light transitions. Dense inside, spacious between: board and list rows are 64–72 px, while the gaps between sections are large.
- **Lines.** 1 px hairlines in graphite at 14% for rows and fleet-sheet column dividers. A 2 px solid graphite rule opens each major section, like a timetable's title rule. Boxes (1 px graphite borders) are used only for interactive objects: the strip, inputs and the confirmation. Content never sits in a card.

### Colour

| Token | Hex (proposal) | Use | Contrast checked |
| --- | --- | --- | --- |
| stone | #F1EFEA | Main background | graphite on it: 13.9:1 |
| stone-2 | #E6E3DC | Cars band, hover tint | graphite-2 on it: 5.9:1 |
| paper | #FAF9F6 | Strip and input fields, confirmation | — |
| graphite | #1E2226 | Text, primary button, dark sections | bone on it: 13.3:1 |
| graphite-2 | #4F555B | Secondary text, labels | on stone: 6.6:1 |
| bone | #EDEAE3 | Text on dark | — |
| pine (accent) | #2F4A42 | Route arrows, process line, focus line, active nav, selected vehicle preference | on stone: 8.4:1 |
| pine-light | #8FB3A6 | Accent on dark sections | on graphite: 7.0:1 |
| ash | #A3A9AE | Secondary text on dark | on graphite: 6.7:1 |

The accent marks direction and state, never decoration and never a button fill. That keeps it meaningful: where there is pine, there is a route, a focus or a selection. Baltic blue-grey (#3E5566) is the fallback if pine reads too "outdoor brand" next to the photography.

### Controls

- **Primary button.** Solid graphite on light (bone on dark); 56 px tall; 2 px radius; label in medium sentence case + →. On hover, the arrow moves 4 px and the background lightens one step; on press, a darker step. One primary per screen.
- **Secondary.** A text link with a 1 px underline at 3 px offset, or a 1 px outline button where a button shape is needed (WhatsApp in the hero).
- **Inputs.** Paper fill, 1 px graphite-2 border, 56 px tall, label always visible inside at top-left in label style, value at 18 px. Focus: a 2 px pine bottom edge plus a 2 px outline offset for keyboard. Errors go below the field in text, never colour alone.
- **The strip.** Fields joined by 1 px vertical dividers, the button fused to the right end, one outer border. On mobile it becomes a vertical stack with horizontal dividers.
- **Vehicle preference list (request page).** Six hairline rows, one selected at a time, pine left edge for the selected row; never photos or prices.

### Images, radius, icons

- **Image framing.** There are two photographs: the hero (21:9, full bleed; 16:9 mobile crop) and I1 (4:5, sticky beside the inclusions; 3:2 mobile crop). Square corners, no shadows, no overlays, and text never sits on a photograph. Each image is art-directed for its slot with a stated safe crop for mobile.
- **Radius.** 0 for images and sections; 2 px for buttons, inputs and the strip; 4 px for the confirmation object only. No pills.
- **Icons.** A small custom pictogram set (person, suitcase, child seat, plane-arrival, plane-departure, clock, handset), 24 px grid, 1.5 px stroke, square caps. Phosphor Light is a reasonable base to redraw from. On the homepage, pictograms now appear only next to the phone number and in the request flow's steppers; the fleet sheet and certainty facts carry none.

### Motion

Motion is subtle and always shows cause and effect: hover and focus 150–200 ms; route-line draw 250 ms; scroll reveals limited to an 8–12 px rise plus fade, 300–350 ms, applied to section heads only, not every element. The process stations highlight on scroll. There is no parallax, auto-play, count-up numbers or typing effects. With `prefers-reduced-motion`, everything renders in its final state.

### Dark sections

There are exactly two: "How booking works" (the shift from choosing to trusting) and the closing band + footer (decisive, typography and UI only). Each is graphite with bone text, ash secondary text, stone hairlines at 16% and pine-light for the route line. The page opens with its only full-bleed photograph and closes with none, so the dark bands, not imagery, mark the two moments of commitment, and no two dark bands ever touch.

### Wordmark behaviour (not a logo yet)

"LT Transfers" is set in the grotesk at medium weight and kept small and constant: nav, footer, confirmation header. It never appears as a giant footer word. The brand's recurring graphic is the **route line**: a short 1.5 px line between two terminal dots, origin to destination. It drives the board arrows, the process line, the strip's swap control and later the favicon. If anything becomes the logo, it should grow out of that line.

## D. Photography direction and AI image requirements

**Premium commercial transfer-service photography with restrained editorial polish.** The homepage carries **two photographs only**. Each exists to show a use case of the service and not to create atmosphere, and the page is built so the rest works without them. The polish of a corporate-travel or executive-transport brand, none of the mood-first ambiguity of a travel magazine.

Hierarchy for every image: **1 service → 2 vehicle and journey context → 3 trust → 4 atmosphere.** Atmosphere (overcast light, wet asphalt) is added last and never replaces the subject.

**Guardrail: if an image can be removed without reducing the visitor's understanding of the service, remove it.** Photography is not used for rhythm. Long-distance and cross-border service is communicated by the routes, durations, prices, the four countries and the booking UI, and the closing is communicated by the headline and the strip.

Both images share one light world (overcast daylight or blue hour), one cool-neutral grade with fine grain, and a commercial eye-level camera (35–70 mm equivalent, moderate depth of field). No golden hour, no dramatic flare, no HDR.

| Slot | Subject and composition | Format and negative space | Light | Vehicle | People | Must not appear |
| --- | --- | --- | --- | --- | --- | --- |
| **H1** Hero: airport transfer | A dark neutral executive saloon stopped at the pickup / drop-off kerb of a generic modern terminal. Glass-and-steel canopy, wet or damp ground. The vehicle takes about 35–45% of the frame width, in three-quarter rear or side view, parallel to the kerb. A traveller with a suitcase approaches or stands beside it. | 21:9 desktop, 16:9 mobile crop that keeps car and traveller. Vehicle in the right two-thirds; bottom 20% calm ground, because the strip overlaps it. No text over the image. | Overcast morning or pre-dawn blue hour with soft terminal glow. Cool. | Executive saloon visually comparable to E-Class / A8 class. Whole car visible, realistic proportions, de-badged, no plate. | One adult traveller, seen from behind or in profile, face turned away, natural movement, not posing. | Limousine, Maybach or Rolls cues; chauffeur, uniform, gloves; readable airport signage; airline logos; real terminal architecture; gold light; fake VIP staging; plates; badges. |
| **I1** Included: business / premium transfer | A business traveller in natural business-casual clothing steps out of, or toward, a dark premium vehicle outside a modern hotel, office or conference entrance (deliberately not an airport kerb, since H1 already is). A slim suitcase or business bag is visible. Natural arrival or departure moment. | 4:5 portrait (sticky beside the list), with a 3:2 mobile crop. Quiet upper third. | Overcast late afternoon or dusk, soft and diffuse. | An executive saloon or a V-Class-type people carrier, clearly visible (about 40–50% of the frame), de-badged. | One adult traveller, face turned or partly cropped. No visible driver or chauffeur, no handshake, no posing. | Visible chauffeur; stock-photo handshake; branded building signage; luxury lobby cliché; champagne, tablets, Wi-Fi signs. |

**H1 fallback (not a third image).** If H1 fails the checks below, an alternate hero may be generated: the same executive saloon at a departures kerb with a suitcase beside the open boot and nobody in frame (21:9 / 16:9, vehicle in one third, calm lower band, overcast day). Only one hero ever ships.

### Removed in Update 3

S1 (long-distance road) and C1 (closing night airport) are deleted from the requirements. Nothing replaces them: the service index begins as a typographic section and the closing band is typography and UI on graphite. No responsive crops, overlays, contrast tests or photo-safe headline placement are required for either.

### Vehicle visual hierarchy

The actual fleet is the Toyota RAV4, Mercedes-Benz C-Class, E-Class, Audi A8 and Mercedes-Benz V-Class. Because the service is comfort, business and VIP, the photography leans on **executive saloons**, with a **V-Class-type people carrier** allowed in I1 for group and business transport. The RAV4 is represented honestly in the fleet sheet drawings and the confirmation example, and does not appear in the photographs. There are no fake classes (Economy, Comfort, Business, VIP) anywhere.

### Rules for every image

- **Illustrative, never proof.** No image is presented as the real fleet. Keep the footer line: "Photography on this site is illustrative. Your booking confirmation shows the actual vehicle." No caption or alt text names a make or says "our".
- **Vehicles:** match the general class of the real fleet; realistic proportions; dark neutral colours; no readable plates; no visible badges; no distinctive model-specific details where avoidable; no stretch limousine, Maybach or Rolls cues.
- **Two different cars.** H1 and I1 show different vehicles in different views, so neither reads as "the" car.
- **People:** travellers or business guests only. Never LT Transfers staff, never a driver in uniform, cap or gloves. Faces turned or obscured, natural behaviour, not posing for advertising.
- **Environments:** generic airports, hotels and offices. No readable signage, no airline logos, no fake company names, no real landmarks, so wrong AI architecture can't damage credibility.
- **Tone:** a European executive-transport service. Not a travel magazine, not a limousine company.
- **Each image is generated for its slot and crop**, never picked from a batch afterwards.
- **Vehicle-anatomy check before use:** wheel and tyre contact, panel gaps, headlight and tail-light symmetry, reflections, door handles, luggage handles, hands, text artefacts, plastic paint.

## E. Risks

The biggest single risk is the route board launching without real prices. After that, most risks come from small additions in implementation (an icon here, a card there, a gradient) that slowly pull the page back to a template, or from copy that promises more than the business can guarantee.

| Drift | Where in this wireframe | Warning sign | Guardrail |
| --- | --- | --- | --- |
| **AI slop** | Hero and I1 photos; the scroll reveals | Warped wheels or door gaps; asymmetric headlights; vehicles that merge into the kerb; glossy plastic paint; warped hands; the same car in both images; everything fading in on scroll | Two images only, each generated for its slot; a vehicle-anatomy check (wheels, panel gaps, lights, tyre contact, reflections) before use; reveals on section heads only; the illustrative-photography disclosure in the footer. |
| **AI slop** | Section scaffolding | Numbered "01 / 02 / 03" labels, eyebrow + heading + paragraph repeated identically, giant footer wordmark | The left rail carries plain labels without numbers; section structures differ on purpose (board, line, list, fleet sheet, document sheet, index, two-column); the wordmark stays small. |
| **Chauffeur theatre / limousine cliché** | Hero, I1, any "VIP" copy | A uniformed or gloved figure holding a door; stretch, Maybach or Rolls cues; gold or dramatic light; hotel-lobby luxury; "VIP experience", "ultimate luxury", "elite chauffeur" | No driver or staff figures in AI images; vehicles de-badged and plateless; "VIP" appears only as the service phrase "Business & VIP transfers"; copy promises price, availability and certainty; no gold token in the palette. |
| **Editorial drift** | Both photographs | A moody, empty, cinematic frame where the viewer cannot tell what is sold; vehicle under about 10% of the frame; fog or flare doing the work | Every photograph passes a one-line test: "a stranger can say it is a private transfer service in two seconds". The vehicle is clearly visible in both. Atmosphere is the last thing added. |
| **Photography read as the real fleet** | Hero, I1, footer | A visitor expects the car in the picture; a caption or alt text names a make | No captions naming makes or "our"; alt text says "executive saloon at an airport kerb" at most; badges and plates absent; footer disclosure kept; proof of the actual vehicle stays in the confirmation. |
| **Pet or family-shuttle signals** | Copy, FAQ, imagery | Pet-friendly wording; children or prams in photographs; "family trip" tone | Animals are not promoted anywhere; people in images are adult travellers or business guests; family wording only appears where a child seat is actually confirmed. |
| **Photography creeping back** | Service index, closing band, any new section | A "just one more" landscape, mood image or full-bleed band added to fix a flat-looking section; images used for rhythm | The guardrail: if an image can be removed without reducing the visitor's understanding of the service, remove it. The page has exactly two photographs, and a third needs a named job that no route data, type or UI already does. |
| **Lower page goes flat without photographs** | Sections 6 to 9 and the close | Four typographic bands that all look alike; the close reading as a footer with a form | Different structure and scale per band (drawn sheet, 96 px figures, 48 px index names, dense FAQ); display-xl closing headline; 160 px graphite field. If still flat, alternate stone and stone-2 backgrounds. Never fill the gap with illustrations, gradients, icons, cards or maps. |
| **Taxi aesthetic** | Strip, sticky bar, phone number | Yellow or black-and-yellow; per-km tariffs; "cheapest"; app-store badges; a big "CALL NOW" | The phone is a calm tabular number; prices are indicative per route, never per km; the primary CTA is "Request a price", never "Book now" or "Call now". |
| **Logistics-company aesthetic** | Route board, service index, any map | A lit departure board, a coverage map with dots and lines, "fleet management" language, truck-like pictograms | The board is a printed timetable on stone, not an LED panel; the map is off the homepage; no capacity pictograms; place names, not "network" or "coverage". |
| **Fake luxury / artificial tiers** | Fleet sheet, request vehicle field, confirmation | "Comfort / Business / Executive" packages; taxi-style vehicle classes; "Popular" or "Premium" badges; prices attached to each vehicle; amenities not offered | The five vehicles are named plainly with one understated descriptor each; E-Class and A8 share "Executive saloon" on purpose; the confirmation example uses the RAV4; no per-vehicle prices appear on the homepage; the inclusions list renders confirmed rows only. |
| **Preference read as a guarantee** | Fleet sheet lead, request field, FAQ | A visitor expects the exact vehicle they clicked; support has to explain a swap | One sentence everywhere: "We'll confirm the available vehicle and agree the price with you before the booking is confirmed." The request page says "preference", the confirmation states the vehicle assigned, and the footer says photography is illustrative. |
| **Five vehicles overcrowd the sheet** | Fleet sheet at 1024–1280 px and on mobile | Names wrapping badly ("Mercedes-Benz E-Class" over three lines); drawings shrinking to nothing; a carousel creeping in | Five columns only at ≥1280 px with a shortened second line for the brand name; from 1024 px down the sheet becomes vertical rows; no swiper. Test with Lithuanian descriptors. |
| **Personal-brand remnants** | Trust section, FAQ rail, confirmation, copy deck | "I", "my", "your driver [Name]", a portrait, "one driver", "same person", "ask [Name]", a signature, a driver-name field in the confirmation | Search the copy deck for these before build. The service is "we" and "LT Transfers". The confirmation shows contact, vehicle and price and does not depend on a driver name. |
| **Promises the business can't guarantee** | Promise lines, stations, FAQ, inclusions, footer, board | Any promise about reply time, response hours, waiting time, flight delays, flight tracking, reminders, cancellation, deposits or prepayment; a board price shown as final | None of these appear and none are linked. The site states only confirmed facts: 24/7 by advance booking, price agreed before booking confirmation, vehicle preference, payment methods and invoices. Board prices are labelled "from" and explicitly described as indicative. Special situations are handled individually. |
| **Over-designed interface** | Process scroll-linking, board hover line, sticky photo, strip alignment | Interactions that fight scrolling; motion that needs explaining; layout that breaks in Lithuanian | Every interaction has a static, reduced-motion equivalent that works just as well; LT strings are tested first; if an interaction can't be explained in one sentence it is cut. |
| **Collapse without content** | Board prices, register, reviews | Placeholders shipped; "price on request" rows; unconfirmed register lines; a reviews row with no reviews | Hard launch gate: route entry prices set by the business; production build fails on any `DEV` price. Unconfirmed register lines and TBC items do not render. The reviews slot stays hidden until reviews are real. |

## F. Recommendation

Three moments should become the identity of LT Transfers. Build them first and protect them through implementation. Everything else on the page can be ordinary and still feel deliberate if these three are right.

1. **The ticket strip that becomes the timetable.** The hero starter overlaps the horizon of the photograph, and its columns run straight down into the printed-timetable route board: uppercase place names, IATA codes, tabular durations and "from €" entry prices on hairlines. It is the most useful thing on the page and the most recognisable. It also returns at the close, so the page begins and ends on the visitor's own journey.
2. **The line and the confirmation.** In the first dark section, a single pine route line with four stations sits beside an example confirmation that names the vehicle, plate, pickup and agreed price. It turns the biggest weakness, no real fleet photography, into the strongest trust device: "this is exactly what you'll get, in writing, once the vehicle and price have been agreed".
3. **The five vehicles on one road.** Toyota RAV4, C-Class, E-Class, A8 and V-Class are drawn as line profiles standing on one shared road line, each with its real name and one quiet descriptor. It is desirable through craft rather than gloss, impossible to mistake for a stock fleet, and it makes "choose a preference, we confirm availability" a design fact instead of a disclaimer.

A fourth discipline now sits beside the three: **fewer photographs, and each one shows the service first.** There are two. They are premium and restrained, a stranger should recognise a private transfer from the picture alone, and the page opens with one and closes with none. If an image can be removed without reducing the visitor's understanding of the service, it is removed. The site is a premium service website with editorial quality, not an editorial website that happens to sell transfers.

The route line (two terminal dots joined by a line) ties all three together and is the natural seed for the logo later. Service-fact certainty ("24/7, agreed price before booking confirmation, four countries, cash, card or bank transfer, invoices available") carries the trust load that a named driver would have carried, so the service stays the brand and no individual has to.

Before production launch, only these are needed: the eight route entry prices (the hard launch dependency); the legal and company details listed under Launch dependencies; and child-seat availability, which stays hidden until confirmed. Nothing else blocks implementation.

## G. AI image shot list (for generation prompts)

Two images. Nothing else on the homepage is photographic.

Shared style line for every prompt: *premium commercial photograph, restrained editorial polish, overcast or blue-hour light, cool-neutral colour grade, fine film grain, eye-level, 35–70 mm, realistic proportions, generic modern Northern European setting, no text, no logos.*

Shared negative line: *limousine, stretch, Rolls-Royce, Maybach, license plate, number plate, brand badge, manufacturer logo, chauffeur, uniform, gloves, cap, readable signage, airline logo, gold light, golden hour, lens flare, HDR, oversaturated, plastic paint, distorted wheels, warped hands, extra fingers, text, watermark, posed model smile, face close-up.*

| ID | Use | Ratio (and mobile crop) | Scene | Vehicle | People | Light and mood | Prompt must also say |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **H1** | Hero | 21:9 (16:9) | Executive saloon stopped at a modern terminal pickup kerb, glass canopy behind, damp ground; traveller with a suitcase approaching or beside the car | Dark neutral executive saloon, whole car, rear three-quarter, 35–45% of frame width, right two-thirds | One adult traveller from behind or in profile, face away, natural | Overcast pre-dawn blue hour, soft terminal glow, cool | Bottom 20% calm ground; no signage; vehicle fully readable |
| **I1** | Included (business / premium) | 4:5 (3:2) | Business traveller in business-casual steps out of, or toward, a dark premium vehicle outside a modern hotel, office or conference entrance; slim suitcase or business bag; not an airport | Executive saloon or V-Class-type people carrier, 40–50% of frame, de-badged, a different car and view from H1 | One adult, face turned, no handshake, no chauffeur, not posing | Overcast late afternoon or dusk, soft | Quiet upper third; no building signage |
| *H1 fallback* | Only if H1 fails the checks | 21:9 (16:9) | Executive saloon at a departures kerb, suitcase beside the open boot, nobody visible | Dark saloon, rear three-quarter, whole car, one third of the frame | None | Overcast day, cool-neutral | Calm lower band; no signage |

Selection test for each result: *can a stranger say "private transfer service" in two seconds, is the vehicle clearly visible, and does it pass the vehicle-anatomy check?* If the answer to any is no, regenerate rather than crop.
