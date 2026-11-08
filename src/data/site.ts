/*
  Brand and contact details.

  `name` is the public brand, written exactly "LTTransfers". `operator` is the legal service provider
  (MKT PASLAUGOS): the brand is never used where legal identification is required.

  The operator register below holds only what is confirmed. Every other field stays null and its row is
  simply not rendered: nothing is printed as a blank or "to be confirmed". The company is not VAT-registered,
  so there is deliberately no VAT field. Open items are tracked in docs/legal-launch-checklist.md.
*/

export const site = {
  name: 'LTTransfers',
  domain: 'lttransfers.lt',
  operator: 'MKT PASLAUGOS',
  contact: {
    phone: {
      tel: '+37065633777' as string | null,
      display: '+370 656 33777',
    },
    whatsapp: {
      // Same number as the phone. Digits only after wa.me, no plus sign.
      url: 'https://wa.me/37065633777' as string | null,
    },
    email: 'info@lttransfers.lt' as string | null,
  },
  register: {
    legalForm: null as string | null,
    companyCode: null as string | null,
    address: null as string | null,
    permit: null as string | null,
    insurance: null as string | null,
  },
};

export const hasPhone = site.contact.phone.tel !== null;
export const hasWhatsApp = site.contact.whatsapp.url !== null;
export const hasEmail = site.contact.email !== null;
