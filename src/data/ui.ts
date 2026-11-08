/*
  Interface strings, one object per language, behind one shared type.

  English lives here and defines the shape (`Ui`). Lithuanian is data/ui.lt.ts and must match that shape, so a
  language can never ship with a missing key. Components never branch on language: they call `getUi(lang)`
  (utils/i18n.ts) and render what they get. Service-page content is data/servicePages.ts (+ .lt.ts) and place
  names are data/locations.ts, on the same pattern.
*/
import { lt } from './ui.lt';

export const languages = {
  en: { label: 'English', short: 'EN', htmlLang: 'en', ogLocale: 'en_US', ready: true },
  lt: { label: 'Lietuvių', short: 'LT', htmlLang: 'lt', ogLocale: 'lt_LT', ready: true },
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'en';
export const langs = Object.keys(languages) as Lang[];

const en = {
  siteName: 'LTTransfers',

  meta: {
    homeTitle: 'Private Transfers in Lithuania & Abroad | LTTransfers',
    homeDescription:
      'Private pre-booked transfers for airport, business, long-distance and cross-border journeys in Lithuania, Latvia, Estonia and Poland.',
    requestTitle: 'Request a Transfer Price | LTTransfers',
  },

  a11y: {
    skipToContent: 'Skip to content',
    primaryNav: 'Primary',
    languageNav: 'Language',
    // The footer's own language switch: a landmark label must be unique on the page.
    footerLanguageNav: 'Site language',
  },

  nav: {
    // `path` is language-relative; localePath() adds the /lt prefix.
    items: [
      { key: 'airport', label: 'Airport transfers', path: '/airport-transfers/' },
      { key: 'business', label: 'Business & VIP', path: '/business-vip-transfers/' },
      { key: 'long', label: 'Long distance', path: '/long-distance/' },
      { key: 'cross', label: 'Cross-border', path: '/cross-border/' },
      // Secondary items: mobile menu and footer only (the desktop bar shows the four services). They point at the homepage sections.
      { key: 'cars', label: 'Cars', path: '/#cars' },
      { key: 'how', label: 'How it works', path: '/#how-it-works' },
    ],
    menu: 'Menu',
    closeMenu: 'Close',
    menuLabel: 'Main menu',
    callShort: 'Call',
    cta: 'Request a price',
    contactHeading: 'Contact',
  },

  contact: {
    phone: 'Phone',
    whatsapp: 'WhatsApp',
    talkPrompt: 'Prefer to talk?',
  },

  hero: {
    headline: 'Private transfers, priced before you go.',
    subline: 'Airport, business and long-distance transfers across Lithuania, Latvia, Estonia and Poland.',
    // Mobile uses the shorter line from the wireframe.
    sublineShort: 'Across Lithuania, Latvia, Estonia and Poland.',
    imageAlt: 'An executive saloon waiting at an airport kerb while a traveller with a suitcase walks towards it',
  },

  starter: {
    label: 'Start your request',
    from: 'From',
    to: 'To',
    date: 'Date',
    locationHint: 'City, airport or pickup area',
    swap: 'Swap From and To',
    submit: 'Request a price',
    promiseAgreed: 'Price agreed before your booking is confirmed',
    promiseAvailability: 'Available 24/7 by advance booking.',
    suggestions: {
      airports: 'Airports',
      cities: 'Cities',
      available: 'Suggestions available: {n}',
      none: 'No suggestions. You can still type any place.',
    },
    countries: {
      LT: 'Lithuania',
      LV: 'Latvia',
      EE: 'Estonia',
      PL: 'Poland',
    },
  },

  routes: {
    title: 'Popular routes',
    columns: { from: 'From', to: 'To', price: 'From, per journey' },
    from: 'from',
    to: 'to',
    clarification:
      'Prices shown are indicative. Your exact price is agreed individually based on the route, vehicle and journey details.',
    oneWay: 'One way. Every route runs in both directions.',
  },

  booking: {
    title: 'How booking works',
    lead: 'Your journey. Your vehicle. Price agreed in advance.',
    steps: {
      request: {
        title: 'Request',
        text: 'Send your route, date and flight number. Choose a vehicle if you have a preference.',
      },
      price: {
        title: 'Vehicle & price',
        text: 'We review your journey and confirm the available vehicle with a price.',
      },
      confirmed: {
        title: 'Booking confirmed',
        text: 'Once the price and journey details are agreed, your booking is confirmed in writing.',
      },
      travel: {
        title: 'Travel',
        text: 'Your confirmed vehicle picks you up at the agreed time and takes you door to door.',
      },
    },
    doc: {
      label: 'Example confirmation',
      referenceNote: 'Booking reference',
      route: 'Route',
      pickup: 'Pickup',
      pickupLocation: 'Pickup location',
      flight: 'Flight no.',
      flightNote: 'if supplied',
      vehicle: 'Vehicle',
      colour: 'Colour',
      plate: 'Plate',
      contact: 'Contact',
      payment: 'Payment',
      price: 'Agreed price',
      placeholderAddress: 'Your address',
      placeholderColour: 'If known',
      placeholderPlate: 'If known',
      placeholderBlank: 'To be filled in',
      paymentValue: 'Cash / card / bank transfer',
      caption: 'Example confirmation. Yours shows your confirmed vehicle and journey details.',
      // Illustrative example only (the figure is captioned as an example). Not a real journey or price.
      example: {
        from: 'Kaunas',
        to: 'Riga Airport',
        toCode: 'RIX',
        date: 'Thu 14 Nov',
        time: '03:15',
        vehicle: 'Toyota RAV4',
      },
    },
    link: 'Pricing & payment',
    // Price and payment are covered in the Terms & Conditions.
    linkPath: '/terms/#pricing-and-payment',
  },

  included: {
    title: 'Included in every transfer',
    lead: 'The things that make a long journey predictable.',
    // Illustrative photograph: generic alt text, never a named fleet vehicle.
    imageAlt: 'Business traveller walking towards an executive transfer vehicle outside a modern office building',
    // Only `confirmed` items render. A `tbc` item (child seats, once the client
    // supplies wording) can be added here and stays hidden until it is confirmed.
    items: [
      { key: 'price', status: 'confirmed', label: 'Agreed price', text: 'The price is agreed with you before the booking is confirmed.' },
      { key: 'door', status: 'confirmed', label: 'Door to door', text: 'Pickup and drop-off at the agreed address or terminal.' },
      {
        key: 'vehicle',
        status: 'confirmed',
        label: 'Vehicle preference',
        text: 'Tell us which vehicle you prefer. We confirm availability when we send your price.',
      },
      { key: 'payment', status: 'confirmed', label: 'Payment', text: 'Cash, card or bank transfer.' },
      { key: 'invoice', status: 'confirmed', label: 'Invoice', text: 'Invoices are available.' },
      {
        key: 'luggage',
        status: 'confirmed',
        label: 'Luggage',
        text: "Tell us what you're travelling with and we'll recommend a suitable vehicle.",
      },
    ] as { key: string; status: 'confirmed' | 'tbc'; label: string; text: string }[],
  },

  cars: {
    title: 'The cars',
    lead: "Choose a vehicle if you have a preference. We'll confirm availability when we send your price.",
    // Vehicle names are proper nouns and live in data/fleet.ts. A link is a preference, never a reservation.
    chooseLabel: 'Choose {name} as vehicle preference',
    imageAlt: '{name} used for LTTransfers private transfers',
    // Body descriptors are shown uppercase by CSS. Plain body types: not tiers, not packages.
    vehicles: {
      rav4: { descriptor: 'SUV', note: 'Practical, with room for luggage.' },
      'c-class': { descriptor: 'Saloon', note: 'A comfortable saloon.' },
      'e-class': { descriptor: 'Executive saloon', note: 'A refined saloon for longer journeys.' },
      a8: { descriptor: 'Executive saloon', note: 'A spacious saloon for longer journeys.' },
      berlingo: { descriptor: 'MPV', note: 'A practical, spacious option.' },
    } as Record<string, { descriptor: string; note: string }>,
    footnote: {
      before: 'Not sure which to choose? Select “',
      link: 'Recommend a vehicle',
      after: '” in your request.',
    },
  },

  certainty: {
    title: 'Made for journeys that need certainty',
    lead: 'Pre-booked private transfers across Lithuania, Latvia, Estonia and Poland.',
    facts: {
      hours: { figure: '24/7', text: 'Transfers by advance booking' },
      price: { figure: 'Agreed price', text: 'Agreed before your booking is confirmed' },
      countries: {
        figure: '4',
        unit: 'countries',
        // Rendered as unbreakable names so a line never starts with a separator.
        places: ['Lithuania', 'Latvia', 'Estonia', 'Poland'],
      },
    },
    payment: { label: 'Payment options', value: 'Cash · card · bank transfer' },
    invoices: { label: 'Invoices', value: 'Available' },
    register: {
      operator: 'Operator',
      legalForm: 'Legal form',
      companyCode: 'Company code',
      address: 'Registered address',
      permit: 'Transport permit',
      insurance: 'Insurance',
    },
    contactLabel: 'Contact LTTransfers',
    whatsappValue: 'Message on WhatsApp',
    email: 'Email',
  },

  // "Where we go": the service index. Slugs are the future hub routes (see pages/[service].astro).
  // Operating area stays Lithuania, Latvia, Estonia and Poland; nothing here widens it.
  services: {
    title: 'Where we go',
    items: [
      {
        slug: 'airport-transfers',
        name: 'Airport transfers',
        // Codes render in mono; Warsaw has two airports.
        airports: [
          { place: 'Vilnius', codes: ['VNO'] },
          { place: 'Kaunas', codes: ['KUN'] },
          { place: 'Palanga', codes: ['PLQ'] },
          { place: 'Riga', codes: ['RIX'] },
          { place: 'Warsaw', codes: ['WAW', 'WMI'] },
        ],
        description: '',
      },
      {
        slug: 'business-vip-transfers',
        name: 'Business & VIP transfers',
        airports: [] as { place: string; codes: string[] }[],
        description: 'Guests, staff and partners between airports, hotels and offices; invoices available',
      },
      {
        slug: 'long-distance',
        name: 'Long distance',
        airports: [] as { place: string; codes: string[] }[],
        description: 'Between any two places in Lithuania, door to door',
      },
      {
        slug: 'cross-border',
        name: 'Cross-border',
        airports: [] as { place: string; codes: string[] }[],
        description: 'Latvia, Estonia and Poland as a normal part of the service',
      },
    ],
  },

  /*
    FAQ. Plain-text answers (no markup) so the same items can feed FAQPage JSON-LD in the final SEO pass.
    Only `confirmed` items render. A `tbc` item stays in the data but never reaches the page. Child seats
    ("Do you have child seats?") is tbc until the business confirms it: it is deliberately NOT listed here;
    add it with status: 'tbc' to stage it, and flip to 'confirmed' once the answer is agreed.
    Nothing here promises cancellation, waiting time, delay handling, flight tracking, deposits or refunds.
  */
  faq: {
    title: 'Questions travellers ask',
    support: 'Still unsure? Ask us directly.',
    contactLabel: 'Contact LTTransfers',
    items: [
      {
        key: 'vehicle',
        status: 'confirmed',
        question: 'Can I choose a vehicle?',
        answer:
          "Yes. You can tell us which vehicle you prefer when you send your request. We'll confirm availability when we send your price.",
      },
      {
        key: 'night',
        status: 'confirmed',
        question: 'Do you drive at night?',
        answer: 'Yes. Transfers are available 24/7 by advance booking.',
      },
      {
        key: 'flight',
        status: 'confirmed',
        question: 'How early will you pick me up for my flight?',
        answer: "Send us your flight details and we'll agree the pickup time with you based on the journey.",
      },
      {
        key: 'payment',
        status: 'confirmed',
        question: 'How do I pay?',
        answer: 'You can pay by cash, card or bank transfer.',
      },
      {
        key: 'invoice',
        status: 'confirmed',
        question: 'Can I get an invoice?',
        answer: 'Yes. Invoices are available. If you specifically require a VAT invoice, this can also be arranged.',
      },
      {
        key: 'borders',
        status: 'confirmed',
        question: 'Do you cross borders?',
        answer: 'Yes. We provide pre-booked transfers in Lithuania and to Latvia, Estonia and Poland.',
      },
      {
        key: 'business',
        status: 'confirmed',
        question: 'Do you do business transfers?',
        answer:
          'Yes. We provide airport, hotel and office transfers for guests, staff and partners. Invoices are available.',
      },
      {
        key: 'someone-else',
        status: 'confirmed',
        question: 'Can I book for someone else?',
        answer:
          'Yes. You can arrange the transfer for another passenger. Send us their journey details and a contact number we can use if needed.',
      },
    ] as { key: string; status: 'confirmed' | 'tbc'; question: string; answer: string }[],
  },

  /*
    Service information pages (data/servicePages.ts holds each page's own content). Only the shared
    interface strings live here. The closing block links to /request/ and never prefills a route.
  */
  servicePage: {
    requestLink: 'Request a price',
    faqTitle: 'Questions',
    otherTitle: 'Other transfers',
    journeyHint: 'Select a journey to start a request with the route filled in.',
    closing: {
      headline: 'Planning a journey?',
      text: 'Send your route and date. We’ll check availability and send you a price.',
      cta: 'Request a price',
      call: 'Call',
      whatsapp: 'Message on WhatsApp',
    },
  },

  // Closing band: the hero masthead's counterpart. The strip and promise line reuse `starter`.
  closing: {
    headline: 'Where are you going?',
    subline: 'Private transfers across Lithuania, Latvia, Estonia and Poland.',
    callPrompt: 'Call',
    whatsapp: 'WhatsApp',
  },

  /*
    Footer. Only confirmed information: the operator's name, real contact values from data/site.ts and links to
    pages that exist (services, Privacy, Terms). No cancellation / waiting / delay policy pages exist, so none are linked.
  */
  footer: {
    label: 'Site',
    operator: 'Operator',
    servicesHeading: 'Transfers',
    moreHeading: 'Company',
    contactHeading: 'Contact',
    legalLabel: 'Legal',
    legal: [
      { key: 'privacy', label: 'Privacy', path: '/privacy/' },
      { key: 'terms', label: 'Terms', path: '/terms/' },
    ],
    disclosure: 'Photography on this site is illustrative. Your booking confirmation shows the actual vehicle.',
  },

  /*
    The request page: one enquiry, never a booking. Vocabulary is fixed by the Request Flow Wireframe, section 1:
    "Request", "Send request", "Request sent". Nothing here says book, confirm, reserve, pay or quote.
  */
  request: {
    heading: 'Request a transfer',
    lead: "Send us your journey details. We'll confirm availability and send you a price.",
    noAccount: 'No account required.',
    metaDescription:
      'Request a price for a private transfer in Lithuania, Latvia, Estonia or Poland. Send your journey details and we’ll confirm availability and send you a price.',
    optional: 'Optional',
    groups: {
      journey: 'Your journey',
      vehicle: 'Vehicle',
      contact: 'How should we contact you?',
    },
    journeyNote: 'Pickup time and exact address can be agreed later.',
    passengers: {
      label: 'Passengers',
      decrease: 'Decrease passengers',
      increase: 'Increase passengers',
      more: 'More than 8? Tell us the group size in the notes.',
    },
    flight: {
      label: 'Flight number',
      placeholder: 'BT123',
      added: 'Flight number field added.',
      removed: 'Flight number field removed.',
    },
    vehicle: {
      label: 'Vehicle preference',
      recommend: 'Recommend a vehicle',
      note: "We'll confirm availability when we send your price.",
    },
    // `fieldChanged` announces the contact input after the method changes: "{label} field."
    methods: {
      whatsapp: {
        option: 'WhatsApp',
        label: 'WhatsApp number',
        placeholder: '+370 600 00000',
        empty: 'Enter a WhatsApp number',
        invalid: 'Check the WhatsApp number, including the country code',
      },
      phone: {
        option: 'Phone',
        label: 'Phone number',
        placeholder: '+370 600 00000',
        empty: 'Enter a phone number',
        invalid: 'Check the phone number, including the country code',
      },
      email: {
        option: 'Email',
        label: 'Email',
        placeholder: 'name@example.com',
        empty: 'Enter an email address',
        invalid: 'Check the email address, for example name@example.com',
      },
      fieldChanged: '{label} field.',
    },
    notes: {
      label: 'Anything we should know?',
      placeholder: 'Luggage, an extra stop or anything else relevant to the journey',
      shortened: 'Shortened to 500 characters',
      remaining: '{n} characters left',
      limit: 'Limit reached: 500 characters',
    },
    errors: {
      from: "Enter where you're travelling from",
      to: "Enter where you're travelling to",
      date: 'Choose a date',
      datePast: 'Choose today or a later date',
      dateFar: 'Choose a date within the next two years',
      passengers: 'Enter the number of passengers',
      flight: 'Check the flight number, for example BT123',
      countOne: 'Check the 1 field marked above.',
      count: 'Check the {n} fields marked above.',
    },
    submit: 'Send request',
    sending: 'Sending…',
    retry: 'Try again',
    // The link text sits inside the sentence: before + link + after.
    privacy: {
      before: 'We use these details to respond to your transfer request. See our ',
      link: 'Privacy Policy',
      after: '.',
    },
    failure: {
      heading: "We couldn't send your request.",
      text: 'Please try again or contact us directly on WhatsApp or by phone.',
      whatsapp: 'Message us on WhatsApp',
      call: 'Call {phone}',
    },
    success: {
      title: 'Request sent',
      documentTitle: 'Request sent — LTTransfers',
      text: "We've received your journey details. We'll contact you using your selected contact method to discuss availability and price.",
      home: 'Back to homepage',
      whatsapp: 'Message us on WhatsApp',
      recap: 'What you sent',
      rows: {
        journey: 'Journey',
        date: 'Date',
        passengers: 'Passengers',
        vehicle: 'Vehicle',
        flight: 'Flight',
        contact: 'Contact',
        notes: 'Notes',
      },
      honesty:
        'This is your request, not a confirmed booking. Your booking is confirmed once the price and journey details are agreed.',
    },
  },

  /* Missing-page screen (pages/404.astro, pages/lt/404.astro). Never indexed. */
  notFound: {
    title: 'Page not found | LTTransfers',
    heading: 'Page not found',
    text: 'The page you’re looking for may have moved or no longer exists.',
    home: 'Back to homepage',
    request: 'Request a transfer',
  },
};

export type Ui = typeof en;

export const ui: Record<Lang, Ui> = { en, lt };
