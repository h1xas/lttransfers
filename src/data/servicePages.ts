/*
  Content for the four service information pages (/airport-transfers/, /business-vip-transfers/,
  /long-distance/, /cross-border/). One shape, rendered by components/ServicePage.astro.

  Pages are short on purpose: every section earns its place, and a page simply has fewer sections when
  there is less to say. Only confirmed service facts appear here. Nothing promises waiting time, flight
  tracking, delay handling, cancellation terms, corporate accounts or a final price.

  English is below; Lithuanian is data/servicePages.lt.ts, same shape and the same sections. `getServicePage` picks by language.
*/
import { lt } from './servicePages.lt';
import type { Lang } from './ui';

export type ServiceSlug = 'airport-transfers' | 'business-vip-transfers' | 'long-distance' | 'cross-border';

/** A journey the page names: both ends are location ids from data/locations.ts. */
export type JourneyRef = { from: string; to: string };

export type Block =
  /** Short paragraphs, two to four sentences each. */
  | { type: 'prose'; paragraphs: string[] }
  /** One large line, used once where a page has a single defining statement. */
  | { type: 'statement'; text: string }
  /** A ruled list set in two columns. `code` renders in mono (IATA codes). */
  | { type: 'list'; items: { text: string; code?: string }[]; note?: { before: string; link: string; after: string } }
  /** Term / description rows. */
  | { type: 'rows'; rows: { term: string; text: string }[] }
  /** Ruled links into /request/ with the route filled in. No prices: those belong to the homepage Popular routes. */
  | { type: 'journeys'; items: JourneyRef[]; note?: string; more?: { label: string; path: string } };

export interface ServiceSection {
  id: string;
  heading: string;
  blocks: Block[];
}

export interface ServicePageContent {
  slug: ServiceSlug;
  /** <title> and meta description: unique per page. */
  metaTitle: string;
  metaDescription: string;
  h1: string;
  lead: string;
  /** One short supporting sentence under the lead. */
  support?: string;
  sections: ServiceSection[];
  faq: { question: string; answer: string }[];
  /** Other service pages worth a quiet text link. */
  related: ServiceSlug[];
}

const en: Record<ServiceSlug, ServicePageContent> = {
  'airport-transfers': {
    slug: 'airport-transfers',
    metaTitle: 'Airport Transfers | LTTransfers',
    metaDescription:
      'Private pre-booked airport transfers to and from Vilnius, Kaunas, Palanga, Riga and Warsaw airports. Send your route and date and we’ll send you a price.',
    h1: 'Airport transfers',
    lead: 'Private pre-booked transfers to and from airports in Lithuania, Latvia and Poland.',
    support: 'Pickup time and place are agreed with you in advance.',
    sections: [
      {
        id: 'how-it-works',
        heading: 'How it works',
        blocks: [
          {
            type: 'prose',
            paragraphs: [
              'Send us your route, the date and, if you have it, your flight number. If you prefer a particular vehicle, tell us.',
              'We check availability and send you a price. Your booking is confirmed once the journey details and the price are agreed.',
            ],
          },
        ],
      },
      {
        id: 'airports',
        heading: 'Airports',
        blocks: [
          {
            type: 'list',
            items: [
              { text: 'Vilnius Airport', code: 'VNO' },
              { text: 'Kaunas Airport', code: 'KUN' },
              { text: 'Palanga Airport', code: 'PLQ' },
              { text: 'Riga Airport', code: 'RIX' },
              { text: 'Warsaw Chopin Airport', code: 'WAW' },
              { text: 'Warsaw Modlin Airport', code: 'WMI' },
            ],
            note: { before: 'Need another airport? ', link: 'Send the route', after: ' and we’ll check it.' },
          },
        ],
      },
      {
        id: 'routes',
        heading: 'Example airport journeys',
        blocks: [
          {
            type: 'journeys',
            items: [
              { from: 'kaunas', to: 'rix' },
              { from: 'vno', to: 'kaunas' },
              { from: 'kun', to: 'vilnius' },
              { from: 'vilnius', to: 'waw' },
            ],
            more: { label: 'All popular routes', path: '/#popular-routes' },
          },
        ],
      },
    ],
    faq: [
      {
        question: 'Can I state a vehicle preference?',
        answer: 'Yes. Tell us which vehicle you prefer when you send your request. We’ll confirm availability when we send your price.',
      },
      {
        question: 'Do you provide early-morning or late-night airport transfers?',
        answer: 'Yes. Transfers are available 24/7 by advance booking.',
      },
      {
        question: 'Do I need to provide my flight number?',
        answer: 'No, it’s optional. It’s useful journey information, so add it to your request if you have it.',
      },
      {
        question: 'How is the pickup time decided?',
        answer: 'We agree the pickup time with you when we agree the journey details.',
      },
    ],
    related: ['business-vip-transfers', 'cross-border'],
  },

  'business-vip-transfers': {
    slug: 'business-vip-transfers',
    metaTitle: 'Business & VIP Transfers | LTTransfers',
    metaDescription:
      'Private pre-booked transfers for guests, staff and partners between airports, hotels, offices and cities. Invoices available; price agreed before booking.',
    h1: 'Business & VIP transfers',
    lead: 'Private pre-booked transfers for guests, staff, partners and business travellers.',
    support: 'For individual travellers and groups.',
    sections: [
      {
        id: 'journeys',
        heading: 'Common business transfers',
        blocks: [
          {
            type: 'list',
            items: [
              { text: 'Airport → hotel' },
              { text: 'Airport → office' },
              { text: 'Hotel → meeting or event venue' },
              { text: 'Business travel between cities' },
            ],
          },
        ],
      },
      {
        id: 'good-to-know',
        heading: 'Good to know',
        blocks: [
          {
            type: 'rows',
            rows: [
              { term: 'Invoices', text: 'Available.' },
              { term: 'Payment', text: 'Cash · card · bank transfer.' },
              {
                term: 'Vehicle preference',
                text: 'Tell us which vehicle you prefer. We’ll confirm availability when we send your price.',
              },
              {
                term: 'Booking',
                text: 'Pre-booked, and confirmed after the journey details and the price are agreed.',
              },
            ],
          },
        ],
      },
    ],
    faq: [
      {
        question: 'Can I book a transfer for a guest or colleague?',
        answer: 'Yes. Send us their journey details and a contact number we can use if needed.',
      },
      {
        question: 'Do you provide airport-to-office transfers?',
        answer: 'Yes. We provide transport between airports, hotels, offices and meeting venues.',
      },
      {
        question: 'Can several colleagues travel together?',
        answer: 'Yes. Tell us how many passengers and how much luggage, and we’ll recommend a suitable vehicle.',
      },
    ],
    related: ['airport-transfers', 'long-distance'],
  },

  'long-distance': {
    slug: 'long-distance',
    metaTitle: 'Long-Distance Transfers in Lithuania | LTTransfers',
    metaDescription:
      'Private pre-booked transfers between cities and other places in Lithuania. Price agreed individually before your booking is confirmed.',
    h1: 'Long-distance transfers',
    lead: 'Private pre-booked transfers between cities and other places in Lithuania.',
    support: 'Point to point, for individual travellers and groups.',
    sections: [
      {
        id: 'service',
        heading: 'The service',
        blocks: [
          {
            type: 'prose',
            paragraphs: [
              'A long-distance transfer is a private journey from your pickup address to your destination.',
            ],
          },
        ],
      },
      {
        id: 'coverage',
        heading: 'Coverage',
        blocks: [
          { type: 'statement', text: 'Between places in Lithuania.' },
          {
            type: 'journeys',
            items: [
              { from: 'vilnius', to: 'kaunas' },
              { from: 'kaunas', to: 'klaipeda' },
              { from: 'vilnius', to: 'klaipeda' },
              { from: 'kaunas', to: 'siauliai' },
            ],
            note: 'Examples only, not scheduled routes. Journeys can be requested in either direction.',
          },
        ],
      },
    ],
    faq: [
      {
        question: 'Can I request a route that isn’t listed?',
        answer: 'Yes. Send us the pickup and drop-off places and we’ll confirm availability.',
      },
      {
        question: 'Can I state a vehicle preference?',
        answer: 'Yes. Tell us which vehicle you prefer in your request. We’ll confirm availability when we send your price.',
      },
      {
        question: 'How is the price determined?',
        answer: 'The price is agreed individually after you send your request, and before your booking is confirmed.',
      },
      {
        question: 'Can several passengers travel together?',
        answer: 'Yes. Include the group size in your request and we’ll recommend a suitable vehicle.',
      },
    ],
    related: ['cross-border', 'airport-transfers'],
  },

  'cross-border': {
    slug: 'cross-border',
    metaTitle: 'Cross-Border Transfers | LTTransfers',
    metaDescription:
      'Private pre-booked transfers between Lithuania, Latvia, Estonia and Poland: city to city, or to an airport or hotel. Price agreed before booking.',
    h1: 'Cross-border transfers',
    lead: 'Private pre-booked transfers between Lithuania, Latvia, Estonia and Poland.',
    support: 'City to city, or to an airport, hotel or other address.',
    sections: [
      {
        id: 'countries',
        heading: 'Countries',
        blocks: [
          {
            type: 'list',
            items: [{ text: 'Lithuania' }, { text: 'Latvia' }, { text: 'Estonia' }, { text: 'Poland' }],
          },
        ],
      },
      {
        id: 'examples',
        heading: 'Example journeys',
        blocks: [
          {
            type: 'journeys',
            items: [
              { from: 'kaunas', to: 'riga' },
              { from: 'vilnius', to: 'rix' },
              { from: 'vilnius', to: 'warsaw' },
              { from: 'vilnius', to: 'tallinn' },
            ],
            note: 'Examples only. You can request other journeys between these countries, and we’ll confirm availability.',
          },
        ],
      },
    ],
    faq: [
      {
        question: 'Which countries do you cover?',
        answer: 'Lithuania, Latvia, Estonia and Poland. Send us your route and we’ll confirm availability.',
      },
      {
        question: 'Can I request an airport transfer across the border?',
        answer: 'Yes. For example, Vilnius to Riga Airport RIX. Send the route and date and we’ll check it.',
      },
      {
        question: 'How is the price agreed?',
        answer: 'Individually, after you send your request. Your booking is confirmed once the price and the journey details are agreed.',
      },
      {
        question: 'Can I state a vehicle preference?',
        answer: 'Yes. Tell us which vehicle you prefer in your request. We’ll confirm availability when we send your price.',
      },
    ],
    related: ['airport-transfers', 'long-distance'],
  },
};

const pages: Record<Lang, Record<ServiceSlug, ServicePageContent>> = { en, lt };

export const serviceSlugs = Object.keys(en) as ServiceSlug[];

export function isServiceSlug(value: string | undefined): value is ServiceSlug {
  return value !== undefined && value in en;
}

/** Content for a service page in a language. Both languages carry the same four pages. */
export function getServicePage(lang: Lang, slug: ServiceSlug): ServicePageContent {
  return pages[lang][slug];
}
