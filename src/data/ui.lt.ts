/*
  Lithuanian interface strings. Same shape as English (`Ui`, derived from `en` in ui.ts), so a missing or
  misspelt key is a type error: there is no silent English fallback on a Lithuanian page.

  Terminology is fixed (see README, "Languages"):
    užklausa = the request the visitor sends          užsakymas = the booking, confirmed after the price is agreed
    kainos pasiūlymas = the price we send              suderinta kaina = the price agreed before confirmation
  Nothing here says fiksuota / momentinė / automatiškai apskaičiuota kaina: the price is never automatic.
*/
import type { Ui } from './ui';

export const lt: Ui = {
  siteName: 'LTTransfers',

  meta: {
    homeTitle: 'Privatūs pervežimai Lietuvoje ir užsienyje | LTTransfers',
    homeDescription:
      'Privatūs iš anksto užsakomi pervežimai į oro uostus, verslo, tarpmiestinėms ir tarptautinėms kelionėms Lietuvoje, Latvijoje, Estijoje ir Lenkijoje.',
    requestTitle: 'Pervežimo užklausa | LTTransfers',
  },

  a11y: {
    skipToContent: 'Pereiti prie turinio',
    primaryNav: 'Pagrindinė navigacija',
    languageNav: 'Kalba',
    footerLanguageNav: 'Svetainės kalba',
  },

  nav: {
    // Short labels: the desktop bar has to hold four services, the phone and the button on one line.
    // The full service names are the page headings and live in `services.items`.
    items: [
      { key: 'airport', label: 'Oro uostai', path: '/airport-transfers/' },
      { key: 'business', label: 'Verslo ir VIP', path: '/business-vip-transfers/' },
      { key: 'long', label: 'Tarpmiestiniai', path: '/long-distance/' },
      { key: 'cross', label: 'Tarptautiniai', path: '/cross-border/' },
      { key: 'cars', label: 'Automobiliai', path: '/#cars' },
      { key: 'how', label: 'Kaip tai veikia', path: '/#how-it-works' },
    ],
    menu: 'Meniu',
    closeMenu: 'Uždaryti',
    menuLabel: 'Pagrindinis meniu',
    callShort: 'Skambinti',
    // Compact button label. Running copy keeps the full "kainos pasiūlymas".
    cta: 'Gauti pasiūlymą',
    contactHeading: 'Kontaktai',
  },

  contact: {
    phone: 'Telefonas',
    whatsapp: 'WhatsApp',
    talkPrompt: 'Norite pasikalbėti?',
  },

  hero: {
    headline: 'Kelionės už iš anksto sutartą kainą.',
    subline: 'Oro uostų, verslo ir tarpmiestiniai pervežimai Lietuvoje, Latvijoje, Estijoje ir Lenkijoje.',
    sublineShort: 'Lietuvoje, Latvijoje, Estijoje ir Lenkijoje.',
    imageAlt: 'Verslo klasės sedanas laukia prie oro uosto, o link jo eina keleivis su lagaminu',
  },

  starter: {
    label: 'Pradėkite užklausą',
    from: 'Iš',
    to: 'Į',
    date: 'Data',
    locationHint: 'Miestas, oro uostas ar vieta',
    swap: 'Sukeisti „Iš“ ir „Į“ vietomis',
    submit: 'Gauti pasiūlymą',
    promiseAgreed: 'Kainą suderiname prieš patvirtindami užsakymą',
    promiseAvailability: 'Pervežimai 24/7, užsakius iš anksto.',
    suggestions: {
      airports: 'Oro uostai',
      cities: 'Miestai',
      available: 'Galimų pasiūlymų: {n}',
      none: 'Pasiūlymų nėra. Vis tiek galite įrašyti bet kurią vietą.',
    },
    countries: {
      LT: 'Lietuva',
      LV: 'Latvija',
      EE: 'Estija',
      PL: 'Lenkija',
    },
  },

  routes: {
    title: 'Populiarūs maršrutai',
    columns: { from: 'Iš', to: 'Į', price: 'Nuo, už kelionę' },
    from: 'nuo',
    to: '–', // screen-reader separator between two place names: "Kaunas – Ryga" (a bare "į" would need the next name in the accusative)
    clarification:
      'Nurodytos kainos yra orientacinės. Tiksli kaina derinama individualiai pagal maršrutą, automobilį ir kelionės informaciją.',
    oneWay: 'Kaina už kelionę į vieną pusę. Kiekvienas maršrutas galimas abiem kryptimis.',
  },

  booking: {
    title: 'Kaip vyksta užsakymas',
    lead: 'Jūsų kelionė. Jūsų automobilis. Kaina suderinta iš anksto.',
    steps: {
      request: {
        title: 'Užklausa',
        text: 'Atsiųskite maršrutą, datą ir skrydžio numerį. Jei turite pageidavimą, pasirinkite automobilį.',
      },
      price: {
        title: 'Automobilis ir kaina',
        text: 'Peržiūrime jūsų kelionę, patvirtiname galimą automobilį ir pateikiame kainos pasiūlymą.',
      },
      confirmed: {
        title: 'Užsakymas patvirtintas',
        text: 'Kai suderiname kainą ir kelionės informaciją, užsakymą patvirtiname raštu.',
      },
      travel: {
        title: 'Kelionė',
        text: 'Patvirtintas automobilis atvyksta sutartu laiku ir nuveža jus nuo durų iki durų.',
      },
    },
    doc: {
      label: 'Patvirtinimo pavyzdys',
      referenceNote: 'Užsakymo numeris',
      route: 'Maršrutas',
      pickup: 'Paėmimas',
      pickupLocation: 'Paėmimo vieta',
      flight: 'Skrydžio nr.',
      flightNote: 'jei nurodyta',
      vehicle: 'Automobilis',
      colour: 'Spalva',
      plate: 'Valst. nr.',
      contact: 'Kontaktas',
      payment: 'Apmokėjimas',
      price: 'Suderinta kaina',
      placeholderAddress: 'Jūsų adresas',
      placeholderColour: 'Jei žinoma',
      placeholderPlate: 'Jei žinoma',
      placeholderBlank: 'Bus užpildyta',
      paymentValue: 'Grynieji / kortelė / pavedimas',
      caption: 'Patvirtinimo pavyzdys. Jūsų patvirtinime bus nurodytas jūsų automobilis ir kelionės informacija.',
      example: {
        from: 'Kaunas',
        to: 'Rygos oro uostas',
        toCode: 'RIX',
        date: 'Ketv., lapkr. 14',
        time: '03:15',
        vehicle: 'Toyota RAV4',
      },
    },
    link: 'Kainos ir apmokėjimas',
    linkPath: '/terms/#pricing-and-payment',
  },

  included: {
    title: 'Kas įskaičiuota į kiekvieną pervežimą',
    lead: 'Tai, kas ilgą kelionę daro nuspėjamą.',
    imageAlt: 'Verslo keliautojas eina link verslo klasės automobilio prie modernaus biuro pastato',
    items: [
      { key: 'price', status: 'confirmed', label: 'Suderinta kaina', text: 'Kainą suderiname su jumis prieš patvirtindami užsakymą.' },
      { key: 'door', status: 'confirmed', label: 'Nuo durų iki durų', text: 'Paėmimas ir išlaipinimas sutartu adresu ar terminale.' },
      {
        key: 'vehicle',
        status: 'confirmed',
        label: 'Pageidaujamas automobilis',
        text: 'Pasakykite, kuris automobilis jums labiausiai tinka. Prieinamumą patvirtinsime pateikdami kainos pasiūlymą.',
      },
      { key: 'payment', status: 'confirmed', label: 'Apmokėjimas', text: 'Grynaisiais, kortele ar pavedimu.' },
      { key: 'invoice', status: 'confirmed', label: 'Sąskaita', text: 'Išrašome sąskaitas.' },
      {
        key: 'luggage',
        status: 'confirmed',
        label: 'Bagažas',
        text: 'Pasakykite, su kuo keliaujate, ir rekomenduosime tinkamą automobilį.',
      },
    ],
  },

  cars: {
    title: 'Automobiliai',
    lead: 'Jei turite pageidavimą, pasirinkite automobilį. Prieinamumą patvirtinsime pateikdami kainos pasiūlymą.',
    chooseLabel: 'Pasirinkti {name} kaip pageidaujamą automobilį',
    imageAlt: '{name} – LTTransfers privatiems pervežimams',
    vehicles: {
      rav4: { descriptor: 'SUV', note: 'Praktiškas, su vietos bagažui.' },
      'c-class': { descriptor: 'Sedanas', note: 'Patogus sedanas.' },
      'e-class': { descriptor: 'Verslo klasės sedanas', note: 'Rafinuotas sedanas ilgesnėms kelionėms.' },
      a8: { descriptor: 'Verslo klasės sedanas', note: 'Erdvus sedanas ilgesnėms kelionėms.' },
      berlingo: { descriptor: 'MPV', note: 'Praktiškas ir erdvus pasirinkimas.' },
    },
    footnote: {
      before: 'Nežinote, kurį pasirinkti? Užklausoje pažymėkite „',
      link: 'Parinkite automobilį',
      after: '“.',
    },
  },

  certainty: {
    title: 'Kelionėms, kuriose svarbus aiškumas',
    lead: 'Iš anksto užsakomi privatūs pervežimai Lietuvoje, Latvijoje, Estijoje ir Lenkijoje.',
    facts: {
      hours: { figure: '24/7', text: 'Pervežimai užsakius iš anksto' },
      price: { figure: 'Suderinta kaina', text: 'Suderiname prieš patvirtindami užsakymą' },
      countries: {
        figure: '4',
        unit: 'šalys',
        places: ['Lietuva', 'Latvija', 'Estija', 'Lenkija'],
      },
    },
    payment: { label: 'Apmokėjimo būdai', value: 'Grynieji · kortelė · pavedimas' },
    invoices: { label: 'Sąskaitos', value: 'Išrašomos' },
    register: {
      operator: 'Paslaugų teikėjas',
      legalForm: 'Teisinė forma',
      companyCode: 'Įmonės kodas',
      address: 'Registracijos adresas',
      permit: 'Leidimas vežti keleivius',
      insurance: 'Draudimas',
    },
    contactLabel: 'Susisiekite su LTTransfers',
    whatsappValue: 'Rašykite per WhatsApp',
    email: 'El. paštas',
  },

  services: {
    title: 'Kur vykstame',
    items: [
      {
        slug: 'airport-transfers',
        name: 'Pervežimai iš ir į oro uostus',
        airports: [
          { place: 'Vilnius', codes: ['VNO'] },
          { place: 'Kaunas', codes: ['KUN'] },
          { place: 'Palanga', codes: ['PLQ'] },
          { place: 'Ryga', codes: ['RIX'] },
          { place: 'Varšuva', codes: ['WAW', 'WMI'] },
        ],
        description: '',
      },
      {
        slug: 'business-vip-transfers',
        name: 'Verslo ir VIP pervežimai',
        airports: [],
        description: 'Svečiai, darbuotojai ir partneriai tarp oro uostų, viešbučių ir biurų; išrašome sąskaitas',
      },
      {
        slug: 'long-distance',
        name: 'Tarpmiestiniai pervežimai',
        airports: [],
        description: 'Tarp bet kurių dviejų vietų Lietuvoje, nuo durų iki durų',
      },
      {
        slug: 'cross-border',
        name: 'Tarptautiniai pervežimai',
        airports: [],
        description: 'Latvija, Estija ir Lenkija kaip įprasta mūsų paslaugos dalis',
      },
    ],
  },

  faq: {
    title: 'Dažniausi klausimai',
    support: 'Neradote atsakymo? Paklauskite tiesiogiai.',
    contactLabel: 'Susisiekite su LTTransfers',
    items: [
      {
        key: 'vehicle',
        status: 'confirmed',
        question: 'Ar galiu pasirinkti automobilį?',
        answer:
          'Taip. Pageidaujamą automobilį galite nurodyti siųsdami užklausą. Prieinamumą patvirtinsime pateikdami kainos pasiūlymą.',
      },
      {
        key: 'night',
        status: 'confirmed',
        question: 'Ar pervežimus vykdote ir naktį?',
        answer: 'Taip. Pervežimai galimi 24/7, užsakius iš anksto.',
      },
      {
        key: 'flight',
        status: 'confirmed',
        question: 'Kada atvyksite manęs paimti prieš skrydį?',
        answer: 'Atsiųskite skrydžio informaciją, o paėmimo laiką suderinsime pagal jūsų kelionę.',
      },
      {
        key: 'payment',
        status: 'confirmed',
        question: 'Kaip galiu atsiskaityti?',
        answer: 'Galite mokėti grynaisiais, kortele arba banko pavedimu.',
      },
      {
        key: 'invoice',
        status: 'confirmed',
        question: 'Ar išrašote sąskaitą?',
        answer: 'Taip, išrašome sąskaitas. Jei reikia PVM sąskaitos faktūros, ją taip pat galime paruošti.',
      },
      {
        key: 'borders',
        status: 'confirmed',
        question: 'Ar vykdote tarptautinius pervežimus?',
        answer: 'Taip. Iš anksto užsakytus pervežimus vykdome Lietuvoje ir į Latviją, Estiją bei Lenkiją.',
      },
      {
        key: 'business',
        status: 'confirmed',
        question: 'Ar vykdote verslo pervežimus?',
        answer:
          'Taip. Vežame svečius, darbuotojus ir partnerius tarp oro uostų, viešbučių ir biurų. Išrašome sąskaitas.',
      },
      {
        key: 'someone-else',
        status: 'confirmed',
        question: 'Ar galiu užsakyti pervežimą kitam žmogui?',
        answer:
          'Taip. Pervežimą galite suorganizuoti kitam keleiviui. Atsiųskite jo kelionės informaciją ir telefono numerį, kuriuo prireikus galėtume susisiekti.',
      },
    ],
  },

  servicePage: {
    requestLink: 'Gauti pasiūlymą',
    faqTitle: 'Klausimai',
    otherTitle: 'Kiti pervežimai',
    journeyHint: 'Pasirinkite kelionę, ir užklausoje jau bus įrašytas maršrutas.',
    closing: {
      headline: 'Planuojate kelionę?',
      text: 'Atsiųskite maršrutą ir datą. Patikrinsime galimybes ir pateiksime kainos pasiūlymą.',
      cta: 'Gauti pasiūlymą',
      call: 'Skambinti',
      whatsapp: 'Rašykite per WhatsApp',
    },
  },

  closing: {
    headline: 'Kur keliaujate?',
    subline: 'Privatūs pervežimai Lietuvoje, Latvijoje, Estijoje ir Lenkijoje.',
    callPrompt: 'Skambinti',
    whatsapp: 'WhatsApp',
  },

  footer: {
    label: 'Svetainė',
    operator: 'Paslaugų teikėjas',
    servicesHeading: 'Pervežimai',
    moreHeading: 'Įmonė',
    contactHeading: 'Kontaktai',
    legalLabel: 'Teisinė informacija',
    legal: [
      { key: 'privacy', label: 'Privatumas', path: '/privacy/' },
      { key: 'terms', label: 'Paslaugų teikimo sąlygos', path: '/terms/' },
    ],
    disclosure: 'Svetainės nuotraukos yra iliustracinės. Faktinis automobilis nurodomas užsakymo patvirtinime.',
  },

  request: {
    heading: 'Pervežimo užklausa',
    lead: 'Atsiųskite kelionės informaciją. Patikrinsime galimybes ir pateiksime kainos pasiūlymą.',
    noAccount: 'Registracija nereikalinga.',
    metaDescription:
      'Paprašykite privataus pervežimo kainos Lietuvoje, Latvijoje, Estijoje ar Lenkijoje. Atsiųskite kelionės informaciją – patikrinsime galimybes ir pateiksime kainą.',
    optional: 'Neprivaloma',
    groups: {
      journey: 'Jūsų kelionė',
      vehicle: 'Automobilis',
      contact: 'Kaip su jumis susisiekti?',
    },
    journeyNote: 'Tikslų paėmimo laiką ir adresą galėsime suderinti vėliau.',
    passengers: {
      label: 'Keleiviai',
      decrease: 'Sumažinti keleivių skaičių',
      increase: 'Padidinti keleivių skaičių',
      more: 'Daugiau nei 8 keleiviai? Keleivių skaičių nurodykite pastabose.',
    },
    flight: {
      label: 'Skrydžio numeris',
      placeholder: 'BT123',
      added: 'Pridėtas skrydžio numerio laukas.',
      removed: 'Skrydžio numerio laukas pašalintas.',
    },
    vehicle: {
      label: 'Pageidaujamas automobilis',
      recommend: 'Parinkite automobilį',
      note: 'Pageidaujamą automobilį patvirtinsime pateikdami kainos pasiūlymą.',
    },
    methods: {
      whatsapp: {
        option: 'WhatsApp',
        label: 'WhatsApp numeris',
        placeholder: '+370 600 00000',
        empty: 'Įveskite WhatsApp numerį',
        invalid: 'Patikrinkite WhatsApp numerį kartu su šalies kodu',
      },
      phone: {
        option: 'Telefonas',
        label: 'Telefono numeris',
        placeholder: '+370 600 00000',
        empty: 'Įveskite telefono numerį',
        invalid: 'Patikrinkite telefono numerį kartu su šalies kodu',
      },
      email: {
        option: 'El. paštas',
        label: 'El. paštas',
        placeholder: 'vardas@example.com',
        empty: 'Įveskite el. pašto adresą',
        invalid: 'Patikrinkite el. pašto adresą, pvz., vardas@example.com',
      },
      fieldChanged: 'Laukas: {label}.',
    },
    notes: {
      label: 'Ar turėtume dar ką nors žinoti?',
      placeholder: 'Bagažas, papildomas sustojimas ar kita svarbi kelionės informacija',
      shortened: 'Sutrumpinta iki 500 simbolių',
      remaining: 'Liko simbolių: {n}',
      limit: 'Pasiekta riba: 500 simbolių',
    },
    errors: {
      from: 'Nurodykite, iš kur keliaujate',
      to: 'Nurodykite, kur keliaujate',
      date: 'Pasirinkite datą',
      datePast: 'Pasirinkite šiandienos arba vėlesnę datą',
      dateFar: 'Pasirinkite datą per artimiausius dvejus metus',
      passengers: 'Nurodykite keleivių skaičių',
      flight: 'Patikrinkite skrydžio numerį, pvz., BT123',
      countOne: 'Patikrinkite 1 pažymėtą lauką.',
      count: 'Patikrinkite {n} pažymėtus laukus.',
    },
    submit: 'Siųsti užklausą',
    sending: 'Siunčiama…',
    retry: 'Bandyti dar kartą',
    privacy: {
      before: 'Šiuos duomenis naudojame jūsų pervežimo užklausai administruoti. Daugiau – ',
      link: 'Privatumo politikoje',
      after: '.',
    },
    failure: {
      heading: 'Nepavyko išsiųsti užklausos.',
      text: 'Bandykite dar kartą arba susisiekite su mumis telefonu ar per WhatsApp.',
      whatsapp: 'Rašykite per WhatsApp',
      call: 'Skambinti {phone}',
    },
    success: {
      title: 'Užklausa išsiųsta',
      documentTitle: 'Užklausa išsiųsta — LTTransfers',
      text: 'Gavome jūsų kelionės informaciją. Susisieksime pasirinktu būdu ir aptarsime automobilio prieinamumą bei kainą.',
      home: 'Grįžti į pradžią',
      whatsapp: 'Rašykite per WhatsApp',
      recap: 'Jūsų užklausa',
      rows: {
        journey: 'Kelionė',
        date: 'Data',
        passengers: 'Keleiviai',
        vehicle: 'Automobilis',
        flight: 'Skrydis',
        contact: 'Kontaktas',
        notes: 'Pastabos',
      },
      honesty:
        'Tai yra jūsų užklausa, o ne patvirtintas užsakymas. Užsakymas patvirtinamas suderinus kainą ir kelionės informaciją.',
    },
  },

  notFound: {
    title: 'Puslapis nerastas | LTTransfers',
    heading: 'Puslapis nerastas',
    text: 'Ieškomas puslapis galėjo būti perkeltas arba jo nebėra.',
    home: 'Į pagrindinį',
    request: 'Pateikti užklausą',
  },
};
