/*
  Business and contact details.

  Nothing here is real yet. `tel` and `whatsapp` stay null until the business
  supplies them: while null, the UI prints the placeholder `display` text and
  does NOT render a working tel: / wa.me link.
*/

export const site = {
  name: 'LT Transfers',
  operator: 'MKT PASLAUGOS',
  contact: {
    phone: {
      tel: null as string | null, // e.g. '+37060000000' once supplied
      display: '+370 6__ _____',
    },
    whatsapp: {
      url: null as string | null, // e.g. 'https://wa.me/37060000000' once supplied
    },
    // Not confirmed. The certainty section prints an email row only once this is set. Viber is not used.
    email: null as string | null,
  },
  /*
    Operator register (certainty section). Only the operator's name is confirmed.
    Every other field stays null and its row is simply not rendered: nothing is
    printed as a blank or "to be confirmed". Fill a value in and the row appears.
    The company is not VAT-registered, so there is deliberately no VAT field.
    TODO(business): legal form, company code, registered address (if shown publicly),
    passenger-transport permit and insurance (only if they will be shown).
  */
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
