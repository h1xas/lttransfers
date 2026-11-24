import type { Ui } from './ui';
export const ru: Ui = {
  siteName: 'LTTransfers',

  meta: {
    homeTitle: "Индивидуальные трансферы в Литве и за её пределами | LTTransfers",
    homeDescription:
      "Индивидуальные трансферы по предварительному заказу: аэропорты, деловые, междугородние и международные поездки по Литве, Латвии, Эстонии и Польше.",
    requestTitle: "Заявка на трансфер | LTTransfers",
  },

  a11y: {
    skipToContent: "Перейти к содержанию",
    primaryNav: "Основная навигация",
    languageNav: "Язык",
    // The footer's own language switch: a landmark label must be unique on the page.
    footerLanguageNav: "Язык сайта",
  },

  nav: {
    // `path` is language-relative; localePath() adds the /lt prefix.
    items: [
      { key: 'airport', label: "Аэропорты", path: '/airport-transfers/' },
      { key: 'business', label: "Бизнес и VIP", path: '/business-vip-transfers/' },
      { key: 'long', label: "Междугородние", path: '/long-distance/' },
      { key: 'cross', label: "Международные", path: '/cross-border/' },
      // Secondary items: mobile menu and footer only (the desktop bar shows the four services). They point at the homepage sections.
      { key: 'cars', label: "Автомобили", path: '/#cars' },
      { key: 'how', label: "Как оформить заказ", path: '/#how-it-works' },
    ],
    menu: "Меню",
    closeMenu: "Закрыть",
    menuLabel: "Главное меню",
    callShort: "Позвонить",
    cta: "Узнать стоимость",
    contactHeading: "Контакты",
  },

  contact: {
    phone: "Телефон",
    whatsapp: 'WhatsApp',
    talkPrompt: "Предпочитаете поговорить?",
  },

  hero: {
    headline: "Индивидуальные трансферы. Стоимость согласовываем заранее.",
    subline: "Трансферы в аэропорты, деловые и междугородние поездки по Литве, Латвии, Эстонии и Польше.",
    // Mobile uses the shorter line from the wireframe.
    sublineShort: "По Литве, Латвии, Эстонии и Польше.",
    imageAlt: "Седан бизнес-класса у аэропорта, к которому подходит пассажир с чемоданом",
  },

  starter: {
    label: "Оформите заявку",
    from: "Откуда",
    to: "Куда",
    date: "Дата",
    locationHint: "Город, аэропорт или место подачи",
    swap: "Поменять местами пункты отправления и назначения",
    submit: "Узнать стоимость",
    promiseAgreed: "Стоимость согласовывается до подтверждения бронирования",
    promiseAvailability: "Трансферы круглосуточно по предварительному заказу.",
    suggestions: {
      airports: "Аэропорты",
      cities: "Города",
      available: "Найдено вариантов: {n}",
      none: "Нет вариантов. Вы можете указать любое место.",
    },
    countries: {
      LT: "Литва",
      LV: "Латвия",
      EE: "Эстония",
      PL: "Польша",
    },
  },

  routes: {
    title: "Популярные маршруты",
    columns: { from: "Откуда", to: "Куда", price: "От, за поездку" },
    from: 'от',
    to: '—',
    clarification:
      "Указанные цены ориентировочные. Точная стоимость согласовывается индивидуально с учётом маршрута, автомобиля и деталей поездки.",
    oneWay: "Цена за поездку в одну сторону. Каждый маршрут доступен в обоих направлениях.",
  },

  booking: {
    title: "Как оформить заказ",
    lead: "Ваша поездка. Ваш автомобиль. Стоимость согласована заранее.",
    steps: {
      request: {
        title: "Заявка",
        text: "Укажите маршрут, дату и номер рейса. При желании выберите автомобиль.",
      },
      price: {
        title: "Автомобиль и стоимость",
        text: "Мы уточним детали поездки, подтвердим доступный автомобиль и сообщим стоимость.",
      },
      confirmed: {
        title: "Бронирование подтверждено",
        text: "После согласования стоимости и деталей поездки мы подтвердим бронирование письменно.",
      },
      travel: {
        title: "Поездка",
        text: "Подтверждённый автомобиль заберёт вас в согласованное время и доставит от двери до двери.",
      },
    },
    doc: {
      label: "Пример подтверждения",
      referenceNote: "Номер бронирования",
      route: "Маршрут",
      pickup: "Подача",
      pickupLocation: "Место подачи",
      flight: "Номер рейса",
      flightNote: "если указан",
      vehicle: "Автомобиль",
      colour: "Цвет",
      plate: "Госномер",
      contact: "Контакты",
      payment: "Оплата",
      price: "Согласованная стоимость",
      placeholderAddress: "Ваш адрес",
      placeholderColour: "Если известно",
      placeholderPlate: "Если известно",
      placeholderBlank: "Будет заполнено",
      paymentValue: "Наличные / карта / перевод",
      caption: "Пример подтверждения. В вашем будут указаны подтверждённый автомобиль и детали поездки.",
      // Illustrative example only (the figure is captioned as an example). Not a real journey or price.
      example: {
        from: "Каунас",
        to: "Аэропорт Риги",
        toCode: 'RIX',
        date: "Чт, 14 нояб.",
        time: '03:15',
        vehicle: 'Toyota RAV4',
      },
    },
    link: "Стоимость и оплата",
    // Price and payment are covered in the Terms & Conditions.
    linkPath: '/terms/#pricing-and-payment',
  },

  included: {
    title: "Что входит в каждый трансфер",
    lead: "Всё, что помогает сделать долгую поездку предсказуемой.",
    // Illustrative photograph: generic alt text, never a named fleet vehicle.
    imageAlt: "Деловой пассажир подходит к автомобилю бизнес-класса у современного офисного здания",
    // Only `confirmed` items render. A `tbc` item (child seats, once the client
    // supplies wording) can be added here and stays hidden until it is confirmed.
    items: [
      { key: 'price', status: 'confirmed', label: "Согласованная стоимость", text: "Стоимость согласовываем с вами до подтверждения бронирования." },
      { key: 'door', status: 'confirmed', label: "От двери до двери", text: "Подача и высадка по согласованному адресу или у терминала." },
      {
        key: 'vehicle',
        status: 'confirmed',
        label: "Предпочтительный автомобиль",
        text: "Укажите предпочтительный автомобиль. Подтвердим его наличие, когда сообщим стоимость.",
      },
      { key: 'payment', status: 'confirmed', label: "Оплата", text: "Наличными, картой или банковским переводом." },
      { key: 'invoice', status: 'confirmed', label: "Счёт", text: "Выставляем счета." },
      {
        key: 'luggage',
        status: 'confirmed',
        label: "Багаж",
        text: "Расскажите, какой багаж берёте с собой, и мы подберём подходящий автомобиль.",
      },
    ] as { key: string; status: 'confirmed' | 'tbc'; label: string; text: string }[],
  },

  cars: {
    title: "Автомобили",
    lead: "При желании выберите автомобиль. Подтвердим его наличие, когда сообщим стоимость.",
    // Vehicle names are proper nouns and live in data/fleet.ts. A link is a preference, never a reservation.
    chooseLabel: "Выбрать {name} как предпочтительный автомобиль",
    imageAlt: "{name} для индивидуальных трансферов LTTransfers",
    // Body descriptors are shown uppercase by CSS. Plain body types: not tiers, not packages.
    vehicles: {
      rav4: { descriptor: "Кроссовер", note: "Практичный автомобиль с местом для багажа." },
      'c-class': { descriptor: "Седан", note: "Комфортный седан." },
      'e-class': { descriptor: "Седан бизнес-класса", note: "Элегантный седан для длительных поездок." },
      a8: { descriptor: "Седан бизнес-класса", note: "Просторный седан для длительных поездок." },
      berlingo: { descriptor: "Минивэн", note: "Практичный и просторный вариант." },
      'v-class': { descriptor: "Минивэн", note: "Место для групп и багажа." },
    } as Record<string, { descriptor: string; note: string }>,
    footnote: {
      before: "Не знаете, что выбрать? Укажите в заявке «",
      link: "Подберите автомобиль",
      after: "».",
    },
  },

  certainty: {
    title: "Для поездок, где важна определённость",
    lead: "Индивидуальные трансферы по предварительному заказу в Литве, Латвии, Эстонии и Польше.",
    facts: {
      hours: { figure: '24/7', text: "Трансферы по предварительному заказу" },
      price: { figure: "Цена заранее", text: "Согласовывается до подтверждения бронирования" },
      countries: {
        figure: '4',
        unit: "страны",
        // Rendered as unbreakable names so a line never starts with a separator.
        places: ["Литва", "Латвия", "Эстония", "Польша"],
      },
    },
    payment: { label: "Способы оплаты", value: "Наличные, карта, банковский перевод" },
    invoices: { label: "Счета", value: "Выставляются" },
    register: {
      operator: "Оператор",
      legalForm: "Правовая форма",
      companyCode: "Код компании",
      address: "Юридический адрес",
      permit: "Разрешение на перевозки",
      insurance: "Страхование",
    },
    contactLabel: "Связаться с LTTransfers",
    whatsappValue: "Написать в WhatsApp",
    email: "Электронная почта",
  },

  // "Where we go": the service index. Slugs are the future hub routes (see pages/[service].astro).
  // Operating area stays Lithuania, Latvia, Estonia and Poland; nothing here widens it.
  services: {
    title: "Куда мы ездим",
    items: [
      {
        slug: 'airport-transfers',
        name: "Трансферы в аэропорт и из аэропорта",
        // Codes render in mono; Warsaw has two airports.
        airports: [
          { place: "Вильнюс", codes: ['VNO'] },
          { place: "Каунас", codes: ['KUN'] },
          { place: "Паланга", codes: ['PLQ'] },
          { place: "Рига", codes: ['RIX'] },
          { place: "Варшава", codes: ['WAW', 'WMI'] },
        ],
        description: '',
      },
      {
        slug: 'business-vip-transfers',
        name: "Бизнес- и VIP-трансферы",
        airports: [] as { place: string; codes: string[] }[],
        description: "Перевозки гостей, сотрудников и партнёров между аэропортами, отелями и офисами; выставляем счета",
      },
      {
        slug: 'long-distance',
        name: "Междугородние трансферы",
        airports: [] as { place: string; codes: string[] }[],
        description: "Между любыми двумя пунктами в Литве, от двери до двери",
      },
      {
        slug: 'cross-border',
        name: "Международные трансферы",
        airports: [] as { place: string; codes: string[] }[],
        description: "Поездки в Латвию, Эстонию и Польшу — часть наших услуг",
      },
    ],
  },

  /*
    Woman to Woman: a journey preference, not a fifth service. The eyebrow keeps the service name in both
    languages. The CTA opens the request page with `?femaleDriver=true` (a boolean; no personal data in the URL).
  */
  womanToWoman: {
    eyebrow: 'Woman to Woman',
    title: "Поездка с учётом ваших предпочтений.",
    body: "Предпочитаете поездку с женщиной-водителем? Пассажирки могут указать это при оформлении заявки. Возможность такой поездки согласуем до подтверждения бронирования.",
    cta: "Узнать стоимость",
    imageAlt: "Женщина-водитель с пассажиркой перед индивидуальным трансфером",
  },

  /*
    FAQ. Plain-text answers (no markup) so the same items can feed FAQPage JSON-LD in the final SEO pass.
    Only `confirmed` items render. A `tbc` item stays in the data but never reaches the page. Child seats
    ("Do you have child seats?") is tbc until the business confirms it: it is deliberately NOT listed here;
    add it with status: 'tbc' to stage it, and flip to 'confirmed' once the answer is agreed.
    Nothing here promises cancellation, waiting time, delay handling, flight tracking, deposits or refunds.
  */
  faq: {
    title: "Частые вопросы",
    support: "Остались вопросы? Свяжитесь с нами.",
    contactLabel: "Связаться с LTTransfers",
    items: [
      {
        key: 'vehicle',
        status: 'confirmed',
        question: "Можно ли выбрать автомобиль?",
        answer:
          "Да. Укажите предпочтительный автомобиль в заявке. Подтвердим его наличие, когда сообщим стоимость.",
      },
      {
        key: 'night',
        status: 'confirmed',
        question: "Вы осуществляете поездки ночью?",
        answer: "Да. Трансферы доступны круглосуточно по предварительному заказу.",
      },
      {
        key: 'flight',
        status: 'confirmed',
        question: "За сколько времени до рейса вы меня заберёте?",
        answer: "Сообщите данные рейса, и мы согласуем время подачи с учётом маршрута.",
      },
      {
        key: 'payment',
        status: 'confirmed',
        question: "Как оплатить поездку?",
        answer: "Оплатить можно наличными, картой или банковским переводом.",
      },
      {
        key: 'invoice',
        status: 'confirmed',
        question: "Можно ли получить счёт?",
        answer: "Да, выставляем счета. Если вам необходим именно счёт с НДС, это также можно согласовать.",
      },
      {
        key: 'borders',
        status: 'confirmed',
        question: "Вы осуществляете международные поездки?",
        answer: "Да. Мы выполняем трансферы по предварительному заказу в Литве и в Латвию, Эстонию и Польшу.",
      },
      {
        key: 'business',
        status: 'confirmed',
        question: "Вы осуществляете деловые трансферы?",
        answer:
          "Да. Перевозим гостей, сотрудников и партнёров между аэропортами, отелями и офисами. Выставляем счета.",
      },
      {
        key: 'someone-else',
        status: 'confirmed',
        question: "Можно ли заказать трансфер для другого человека?",
        answer:
          "Да. Вы можете оформить трансфер для другого пассажира. Сообщите детали его поездки и контактный номер для связи при необходимости.",
      },
      {
        key: 'female-driver',
        status: 'confirmed',
        question: "Можно ли заказать поездку с женщиной-водителем?",
        answer:
          "Да. Пассажирки могут указать это пожелание при оформлении заявки. Возможность такой поездки согласуем до подтверждения бронирования.",
      },
    ] as { key: string; status: 'confirmed' | 'tbc'; question: string; answer: string }[],
  },

  /*
    Service information pages (data/servicePages.ts holds each page's own content). Only the shared
    interface strings live here. The closing block links to /request/ and never prefills a route.
  */
  servicePage: {
    requestLink: "Узнать стоимость",
    faqTitle: "Вопросы",
    otherTitle: "Другие трансферы",
    journeyHint: "Выберите поездку, чтобы открыть заявку с заполненным маршрутом.",
    closing: {
      headline: "Планируете поездку?",
      text: "Укажите маршрут и дату. Проверим доступность и сообщим стоимость.",
      cta: "Узнать стоимость",
      call: "Позвонить",
      whatsapp: "Написать в WhatsApp",
    },
  },

  // Closing band: the hero masthead's counterpart. The strip and promise line reuse `starter`.
  closing: {
    headline: "Куда вы направляетесь?",
    subline: "Индивидуальные трансферы по Литве, Латвии, Эстонии и Польше.",
    callPrompt: "Позвонить",
    whatsapp: 'WhatsApp',
  },

  /*
    Footer. Only confirmed information: the operator's name, real contact values from data/site.ts and links to
    pages that exist (services, Privacy, Terms). No cancellation / waiting / delay policy pages exist, so none are linked.
  */
  footer: {
    label: "Сайт",
    operator: "Оператор",
    servicesHeading: "Трансферы",
    moreHeading: "Компания",
    contactHeading: "Контакты",
    legalLabel: "Правовая информация",
    legal: [
      { key: 'privacy', label: "Конфиденциальность", path: '/privacy/' },
      { key: 'terms', label: "Условия услуг", path: '/terms/' },
    ],
    disclosure: "Фотографии на сайте носят иллюстративный характер. В подтверждении бронирования будет указан фактический автомобиль.",
  },

  /*
    The request page: one enquiry, never a booking. Vocabulary is fixed by the Request Flow Wireframe, section 1:
    "Request", "Send request", "Request sent". Nothing here says book, confirm, reserve, pay or quote.
  */
  request: {
    heading: "Заявка на трансфер",
    lead: "Сообщите детали поездки. Подтвердим доступность и сообщим стоимость.",
    noAccount: "Регистрация не требуется.",
    metaDescription:
      "Узнайте стоимость индивидуального трансфера в Литве, Латвии, Эстонии или Польше. Сообщите детали поездки, и мы подтвердим доступность и сообщим стоимость.",
    optional: "Необязательно",
    groups: {
      journey: "Ваша поездка",
      vehicle: "Автомобиль",
      contact: "Как с вами связаться?",
    },
    journeyNote: "Время подачи и точный адрес можно согласовать позже.",
    // Optional driver preference (see `womanToWoman`). Availability is confirmed before the booking.
    femaleDriver: {
      label: "Предпочитаю женщину-водителя",
      recap: "Предпочтение: женщина-водитель",
    },
    passengers: {
      label: "Пассажиры",
      decrease: "Уменьшить число пассажиров",
      increase: "Увеличить число пассажиров",
      more: "Больше 8? Укажите размер группы в примечаниях.",
    },
    flight: {
      label: "Номер рейса",
      placeholder: 'BT123',
      added: "Поле номера рейса добавлено.",
      removed: "Поле номера рейса удалено.",
    },
    vehicle: {
      label: "Предпочтительный автомобиль",
      recommend: "Подберите автомобиль",
      note: "Подтвердим доступность, когда сообщим стоимость.",
    },
    // `fieldChanged` announces the contact input after the method changes: "{label} field."
    methods: {
      whatsapp: {
        option: 'WhatsApp',
        label: "Номер WhatsApp",
        placeholder: '+370 600 00000',
        empty: "Укажите номер WhatsApp",
        invalid: "Проверьте номер WhatsApp, включая код страны",
      },
      phone: {
        option: "Телефон",
        label: "Номер телефона",
        placeholder: '+370 600 00000',
        empty: "Укажите номер телефона",
        invalid: "Проверьте номер телефона, включая код страны",
      },
      email: {
        option: "Электронная почта",
        label: "Электронная почта",
        placeholder: 'name@example.com',
        empty: "Укажите адрес электронной почты",
        invalid: "Проверьте адрес электронной почты, например name@example.com",
      },
      fieldChanged: "Поле: {label}.",
    },
    notes: {
      label: "Что ещё нам нужно знать?",
      placeholder: "Багаж, дополнительная остановка или другие детали поездки",
      shortened: "Текст сокращён до 500 символов",
      remaining: "Осталось символов: {n}",
      limit: "Достигнут предел: 500 символов",
    },
    errors: {
      from: "Укажите пункт отправления",
      to: "Укажите пункт назначения",
      date: "Выберите дату",
      datePast: "Выберите сегодняшнюю или более позднюю дату",
      dateFar: "Выберите дату в пределах ближайших двух лет",
      passengers: "Укажите число пассажиров",
      flight: "Проверьте номер рейса, например BT123",
      countOne: "Проверьте отмеченное выше поле.",
      count: "Проверьте отмеченные выше поля. Всего: {n}.",
    },
    submit: "Отправить заявку",
    sending: "Отправляем…",
    retry: "Попробовать снова",
    // The link text sits inside the sentence: before + link + after.
    privacy: {
      before: "Мы используем эти данные, чтобы ответить на вашу заявку. Подробнее — в нашей ",
      link: "Политике конфиденциальности",
      after: '.',
    },
    failure: {
      heading: "Не удалось отправить заявку",
      text: "Попробуйте ещё раз или свяжитесь с нами напрямую по телефону или через WhatsApp.",
      whatsapp: "Написать нам в WhatsApp",
      call: "Позвонить: {phone}",
    },
    success: {
      title: "Заявка отправлена",
      documentTitle: "Заявка отправлена — LTTransfers",
      text: "Мы получили детали вашей поездки. Свяжемся с вами выбранным способом, чтобы уточнить доступность и согласовать стоимость.",
      home: "На главную",
      whatsapp: "Написать нам в WhatsApp",
      recap: "Данные вашей заявки",
      rows: {
        journey: "Поездка",
        date: "Дата",
        passengers: "Пассажиры",
        vehicle: "Автомобиль",
        driver: "Водитель",
        flight: "Рейс",
        contact: "Контакты",
        notes: "Примечания",
      },
      honesty:
        "Отправленная заявка не является подтверждённым бронированием. Бронирование подтверждается после согласования стоимости и деталей поездки.",
    },
  },

  /* Missing-page screen (pages/404.astro, pages/lt/404.astro). Never indexed. */
  notFound: {
    title: "Страница не найдена | LTTransfers",
    heading: "Страница не найдена",
    text: "Возможно, эта страница была перемещена или больше не существует.",
    home: "На главную",
    request: "Заявка на трансфер",
  },
};
