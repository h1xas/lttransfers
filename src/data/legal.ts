/*
  Content of the two legal pages: Privacy Policy (/privacy/) and Terms & Conditions (/terms/).
  English is below and defines the shape; Lithuanian is data/legal.lt.ts. `getLegalPage` picks by language.

  Rules for this file (see docs/legal-launch-checklist.md for what is still open):
    - Say only what the website really does today. No invented company details, retention periods,
      statutory references, cancellation / waiting / refund / delay / child-seat policies, deposits or fees.
    - The brand is "LTTransfers"; the operator and controller is MKT PASLAUGOS.
    - Inline links use [label](href). A leading "/" is a language-relative page path (localePath adds /lt).
*/
import { lt } from './legal.lt';
import { site } from './site';
import type { Lang } from './ui';

export type LegalSlug = 'privacy' | 'terms';

export type LegalBlock =
  | { type: 'p'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] };

export interface LegalSection {
  id: string;
  heading: string;
  blocks: LegalBlock[];
}

export interface LegalPageContent {
  slug: LegalSlug;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  lead: string;
  updatedLabel: string;
  sections: LegalSection[];
}

/** Date the pages were last edited (ISO). Shown as "Last updated". */
export const legalUpdated = '2026-11-07';

const email = site.contact.email ?? '';
const tel = site.contact.phone.tel ?? '';
const phone = site.contact.phone.display;
const emailLink = `[${email}](mailto:${email})`;
const phoneLink = `[${phone}](tel:${tel})`;

const en: Record<LegalSlug, LegalPageContent> = {
  privacy: {
    slug: 'privacy',
    metaTitle: 'Privacy Policy | LTTransfers',
    metaDescription:
      'How LTTransfers uses the personal information you send through the transfer request form or when you contact us, and the rights you have.',
    h1: 'Privacy Policy',
    lead: 'This policy explains what personal information we collect through this website and when you contact us, why we use it, and what rights you have.',
    updatedLabel: 'Last updated',
    sections: [
      {
        id: 'controller',
        heading: 'Who is responsible',
        blocks: [
          {
            type: 'p',
            text: 'LTTransfers is the public brand of the service. The service is provided by MKT PASLAUGOS, which is the controller of the personal data described in this policy.',
          },
          { type: 'ul', items: [`Email: ${emailLink}`, `Phone: ${phoneLink}`] },
        ],
      },
      {
        id: 'data',
        heading: 'Information we collect',
        blocks: [
          { type: 'p', text: 'When you send a transfer request through the website, you provide:' },
          {
            type: 'ul',
            items: [
              'where the journey starts and where it ends',
              'the journey date',
              'the number of passengers',
              'how you would like to be contacted (WhatsApp, phone or email) and the matching phone number or email address',
            ],
          },
          { type: 'p', text: 'You can also add, if you wish:' },
          { type: 'ul', items: ['a vehicle preference', 'a flight number', 'notes about the journey'] },
          {
            type: 'p',
            text: 'The form does not ask for a password, payment card details, identity documents, date of birth or nationality, and no customer account is created. The notes field is free text, so what you write there is up to you. Please include only what is relevant to the journey.',
          },
          {
            type: 'p',
            text: 'If you contact us by phone, WhatsApp or email, we receive the information you share in that conversation, such as your name, number or address.',
          },
          {
            type: 'p',
            text: 'The providers that host and deliver the website, and the service that receives the request form (see “Who receives it”), may also process technical information, such as IP addresses and basic request logs, in order to run their services.',
          },
        ],
      },
      {
        id: 'purposes',
        heading: 'How we use it',
        blocks: [
          { type: 'p', text: 'We use the information you send us to:' },
          {
            type: 'ul',
            items: [
              'respond to your transfer request',
              'check whether the journey is available',
              'prepare and communicate a price',
              'agree the journey details with you',
              'confirm and provide the transfer you have requested',
              'communicate with you about that request or booking',
              'meet accounting and other legal obligations where they apply',
            ],
          },
          { type: 'p', text: 'The website has no newsletter or marketing sign-up.' },
        ],
      },
      {
        id: 'basis',
        heading: 'Legal basis',
        blocks: [
          {
            type: 'p',
            text: 'When you ask for a transfer, we process your information because it is necessary to take steps at your request before a contract is made and, once a transfer is agreed, to carry out that contract (Article 6(1)(b) GDPR).',
          },
          {
            type: 'p',
            text: 'Where we have to keep certain records to meet accounting or other legal requirements, we process them to comply with a legal obligation (Article 6(1)(c) GDPR).',
          },
        ],
      },
      {
        id: 'recipients',
        heading: 'Who receives it',
        blocks: [
          {
            type: 'p',
            text: 'We do not sell personal data. Service providers that are needed to run the website and receive your requests process information on our behalf, and only to provide those services to us. We may also disclose information where the law requires it. The providers involved are:',
          },
          {
            type: 'ul',
            items: [
              'Formspree, a form-submission service. When you send the transfer request form, the details you entered are transmitted through Formspree, which delivers them to us by email so we can respond. Formspree may also keep a copy of the submission, and technical information such as your IP address, according to how our account with it is configured.',
              'Cloudflare, which hosts and delivers the website (website hosting and infrastructure).',
            ],
          },
          {
            type: 'p',
            text: 'If you contact us by WhatsApp, phone or email, those services are provided by their own providers under their own terms. Where a provider is located outside the European Economic Area, the transfer is subject to the safeguards the law requires.',
          },
        ],
      },
      {
        id: 'retention',
        heading: 'How long we keep it',
        blocks: [
          {
            type: 'p',
            text: 'We keep personal data only for as long as necessary to handle your request, provide the service, resolve related issues and meet applicable legal or accounting obligations. Where different records are subject to different legal retention requirements, those requirements may determine how long we keep them.',
          },
          {
            type: 'p',
            text: 'A request you send through the form may exist in more than one place: in our email and in the form-submission service, where it is kept according to our account settings and that provider’s terms.',
          },
        ],
      },
      {
        id: 'rights',
        heading: 'Your rights',
        blocks: [
          { type: 'p', text: 'Where they apply, you have the right to:' },
          {
            type: 'ul',
            items: [
              'access the personal data we hold about you',
              'have inaccurate data corrected',
              'have your data erased',
              'restrict how your data is used',
              'object to the processing of your data',
              'receive your data in a portable format',
            ],
          },
          {
            type: 'p',
            text: `To use any of these rights, write to ${emailLink}. We may ask you to confirm who you are before we act on a request.`,
          },
          {
            type: 'p',
            text: 'You also have the right to lodge a complaint with the competent supervisory authority. In Lithuania this is the State Data Protection Inspectorate (Valstybinė duomenų apsaugos inspekcija, VDAI).',
          },
        ],
      },
      {
        id: 'cookies',
        heading: 'Cookies and analytics',
        blocks: [
          {
            type: 'p',
            text: 'This website does not currently use analytics or advertising cookies, or similar tracking tools.',
          },
          {
            type: 'p',
            text: 'So that the request form can open with a journey you have already entered, the site keeps your From, To and Date in your browser’s session storage. This stays in your browser, is cleared when you close the tab, and is not sent to us unless you submit a request.',
          },
        ],
      },
      {
        id: 'security',
        heading: 'Security',
        blocks: [
          {
            type: 'p',
            text: 'We use reasonable technical and organisational measures to protect personal data. No method of transmission or storage is completely secure, so we cannot guarantee absolute security.',
          },
        ],
      },
      {
        id: 'changes',
        heading: 'Changes to this policy',
        blocks: [
          {
            type: 'p',
            text: 'We may update this policy when the website or our services change. The current version is always on this page, with the date it was last updated.',
          },
        ],
      },
    ],
  },

  terms: {
    slug: 'terms',
    metaTitle: 'Terms & Conditions | LTTransfers',
    metaDescription:
      'Terms for transfers arranged with LTTransfers: what the service covers, how a request becomes a booking, prices and payment.',
    h1: 'Terms & Conditions',
    lead: 'These terms apply to transfers you arrange with LTTransfers, through this website or by contacting us directly.',
    updatedLabel: 'Last updated',
    sections: [
      {
        id: 'provider',
        heading: 'Who provides the service',
        blocks: [
          {
            type: 'p',
            text: 'LTTransfers is the public brand of the service. The service is provided by MKT PASLAUGOS.',
          },
          { type: 'ul', items: [`Email: ${emailLink}`, `Phone: ${phoneLink}`] },
        ],
      },
      {
        id: 'service',
        heading: 'The service',
        blocks: [
          {
            type: 'p',
            text: 'LTTransfers provides private, pre-booked passenger transfers:',
          },
          {
            type: 'ul',
            items: ['airport transfers', 'business & VIP transfers', 'long-distance transfers', 'cross-border transfers'],
          },
          {
            type: 'p',
            text: 'The service is currently provided in Lithuania, Latvia, Estonia and Poland.',
          },
          {
            type: 'p',
            text: 'Transfers are available 24/7 by advance booking. This is not an on-demand taxi service, and we do not offer immediate dispatch.',
          },
        ],
      },
      {
        id: 'request',
        heading: 'A request is not a booking',
        blocks: [
          {
            type: 'p',
            text: 'Sending the request form on this website does not, by itself, create a confirmed booking. This is how a request becomes a booking:',
          },
          {
            type: 'ol',
            items: [
              'You send your journey details.',
              'We check the request and availability.',
              'We tell you the price and the relevant journey details.',
              'You and LTTransfers agree the price and the journey details.',
              'Your booking is then confirmed in writing.',
            ],
          },
          {
            type: 'p',
            text: 'Details such as the exact pickup time and address can be agreed with you as part of this process.',
          },
        ],
      },
      {
        id: 'pricing-and-payment',
        heading: 'Price and payment',
        blocks: [
          {
            type: 'p',
            text: 'The prices shown for popular routes on the website are indicative starting prices, shown as “from” prices. They are not fixed prices.',
          },
          {
            type: 'p',
            text: 'The exact price is agreed with you individually. It depends on factors such as the route, the vehicle you request and the journey details. Your booking is confirmed only after the price and the journey details have been agreed.',
          },
          { type: 'p', text: 'You can pay by cash, card or bank transfer. Invoices are available.' },
          {
            type: 'p',
            text: 'MKT PASLAUGOS is currently not registered as a VAT payer, so a standard invoice does not include VAT. If you specifically require a VAT invoice, this can be arranged separately: please tell us in your request.',
          },
        ],
      },
      {
        id: 'vehicle',
        heading: 'Vehicle preference',
        blocks: [
          {
            type: 'p',
            text: 'A vehicle you select or mention in your request is a preference. It is confirmed only once its availability is confirmed, and we do not guarantee a specific model because it was chosen in the form.',
          },
        ],
      },
      {
        id: 'information',
        heading: 'Information you provide',
        blocks: [
          {
            type: 'p',
            text: 'Please give accurate journey and contact details so that we can arrange your transfer. This normally means:',
          },
          {
            type: 'ul',
            items: [
              'the route',
              'the date',
              'the number of passengers',
              'your contact details',
              'your flight number, where relevant',
              'anything else important about the journey, such as luggage or an extra stop',
            ],
          },
          { type: 'p', text: 'If something changes, please let us know.' },
        ],
      },
      {
        id: 'animals',
        heading: 'Animals',
        blocks: [{ type: 'p', text: 'LTTransfers does not currently transport animals.' }],
      },
      {
        id: 'rights',
        heading: 'Your legal rights',
        blocks: [
          {
            type: 'p',
            text: 'Nothing in these terms limits any rights you have under mandatory consumer law.',
          },
        ],
      },
      {
        id: 'privacy',
        heading: 'Personal data',
        blocks: [
          {
            type: 'p',
            text: 'How we use the personal information you send us is explained in our [Privacy Policy](/privacy/).',
          },
        ],
      },
      {
        id: 'changes',
        heading: 'Changes to these terms',
        blocks: [
          {
            type: 'p',
            text: 'We may update these terms when the service changes. The current version is always on this page, with the date it was last updated.',
          },
        ],
      },
    ],
  },
};

const pages: Record<Lang, Record<LegalSlug, LegalPageContent>> = { en, lt };

export const legalSlugs: LegalSlug[] = ['privacy', 'terms'];

export function getLegalPage(lang: Lang, slug: LegalSlug): LegalPageContent {
  return pages[lang][slug];
}
