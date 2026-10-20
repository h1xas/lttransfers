# LT Transfers

Marketing and request site for LT Transfers. Astro + TypeScript + plain CSS; no UI framework, no Tailwind, no component library.

Design source of truth: `LT Transfers — Homepage Wireframe  Creative Direction.md`.

## Commands

```bash
npm install
npm run dev            # http://localhost:4321
npm run build          # static build into dist/
npm run build:release  # same, but fails while anything in src/data/launch.ts is outstanding
npm run check          # astro check (types)
```

## Structure

```
src/
  components/   Header, Hero, RouteStarter (+ LocationField), RouteBoard, RouteRow, ServicePage, BookingProcess, IncludedInTransfer, FleetSheet, CertaintySheet, WhereWeGo, Faq, ClosingCta, MobileActionBar, SiteFooter, ContactLink, ArrowIcon, HomePage
  layouts/      BaseLayout (SEO head, skip link, header)
  pages/        index.astro (/), [service].astro (/airport-transfers/, /business-vip-transfers/, /long-distance/, /cross-border/), request.astro, lt/ (the same six pages in Lithuanian; each just renders the shared component with lang="lt")
  data/         ui.ts + ui.lt.ts (strings per language), servicePages.ts (content of the four service pages), site.ts (contact placeholders), locations.ts, routes.ts, launch.ts (release guard)
  styles/       tokens.css (design tokens), fonts.css, global.css (reset, .page-grid), board.css (column map)
  utils/        i18n.ts, routes.ts, text.ts
  assets/       fonts (self-hosted woff2), images (optimised at build)
public/         favicon
```

## Service pages

The four English service pages are one layout (`components/ServicePage.astro`) fed by `src/data/servicePages.ts`: masthead, a few ruled sections, open FAQ, "Other transfers" links and a compact closing CTA. No photography, cards or icons. A page has only the sections it needs: add or remove blocks in the data. Journey rows link to `/request/` with From / To filled in, and show a price only for routes whose `status` is `final`. The Lithuanian pages use the same layout with `servicePages.lt.ts`.

## Conventions

- **Tokens first.** Colours, type scale, grid and motion live in `src/styles/tokens.css`. Do not hard-code them in components.
- **Grid.** `.page-grid` is the one layout grid: 4 columns (mobile), 8 (768px+), 12 (1100px+). At 1440px it resolves to 80px margins / 1280px content; above that the canvas keeps scaling up to `--content-max` (1600px, see tokens.css). Components place themselves with `grid-column`.
- **Languages.** English at `/`, Lithuanian at `/lt/`, both static and both published (`languages.<lang>.ready` in `src/data/ui.ts`). One set of components and pages; only data differs per language: `ui.ts` (English, defines the `Ui` type) + `ui.lt.ts` (Lithuanian, must satisfy `Ui`, so a missing key is a type error, not an English fallback), `servicePages.ts` + `servicePages.lt.ts`, and display names in `locations.ts` (`names.lt`). Components call `getUi(lang)` and never branch on language. Route slugs stay English (`/lt/airport-transfers/`). The language switch maps each page to its twin (`stripLocale` + `localePath`). BaseLayout emits `lang`, a self canonical, `hreflang` en / lt and an English `x-default`.
- **Lithuanian terminology.** `užklausa` = the request; `užsakymas` = the booking (confirmed only after the price is agreed); `kainos pasiūlymas` = the price we send; `suderinta kaina` = the agreed price. Never write fiksuota / momentinė / automatiškai apskaičiuota kaina. Service names: Pervežimai iš ir į oro uostus · Verslo ir VIP pervežimai · Tarpmiestiniai pervežimai · Tarptautiniai pervežimai (always with Lietuva / Latvija / Estija / Lenkija, never "Europe"). The desktop nav uses the short labels in `nav.items`; the full names are page headings.
- **Places across languages.** A place's identity is its `id` / English name; the From / To input holds display text (`Rygos oro uostas RIX`), which is also what links put in `?from=`. `localizePlace` (scripts/journey-store.ts) and the inline prefill on /request turn a stored or linked name from either language into the page language; free text (a street, a hotel) is left as typed. Only From / To / Date cross a language switch; contact, notes, flight and vehicle never do.
- **Development data.** Route prices and durations in `src/data/routes.ts` are placeholders (`status: 'dev'`). They render a visible `DEV` marker and `build:release` refuses to ship them.
- **Contact details.** `src/data/site.ts` holds `null` placeholders; no `tel:` / WhatsApp link renders until real values are set, and the mobile action bar omits its Call / WhatsApp cells.
- **Launch guard.** `src/data/launch.ts` lists every launch blocker: development route prices, missing phone / WhatsApp, and linked pages that are not built yet (`unbuiltPaths`: Privacy, Terms, Pricing & payment, Cars, How it works). `build:release` fails while any remain; the dev server and `build` never do. Privacy / Terms render as plain text, not links, until their paths leave `unbuiltPaths`.
- **Client JavaScript** is limited to: header (scroll state, mobile menu, CTA reveal), the mobile action bar (phones: shows after the hero starter, hides at the closing starter, with a field focused and while the menu is open), the FAQ accordion, and the booking starter (suggestions, swap, tidy query string, From / To / Date shared between the hero and closing starters through `sessionStorage`). Both are small inline modules. BookingProcess adds one more (scroll-driven station highlight, desktop only, off under reduced motion).
