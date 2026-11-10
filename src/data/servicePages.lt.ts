/*
  Lithuanian content for the four service pages. Same shape and the same sections as the English pages
  (data/servicePages.ts): this is a localisation, not a rewrite, so it adds no section, claim or promise.

  Places in `journeys` are location ids, so names come from data/locations.ts in the page language.
  Airport list entries are written out because they are display text.
*/
import type { ServicePageContent, ServiceSlug } from './servicePages';

export const lt: Record<ServiceSlug, ServicePageContent> = {
  'airport-transfers': {
    slug: 'airport-transfers',
    metaTitle: 'Pervežimai iš ir į oro uostus | LTTransfers',
    metaDescription:
      'Privatūs iš anksto užsakomi pervežimai iš ir į Vilniaus, Kauno, Palangos, Rygos ir Varšuvos oro uostus. Atsiųskite maršrutą ir datą – pateiksime kainos pasiūlymą.',
    h1: 'Pervežimai iš ir į oro uostus',
    lead: 'Privatūs iš anksto užsakomi pervežimai į oro uostus ir iš jų Lietuvoje, Latvijoje ir Lenkijoje.',
    support: 'Paėmimo laiką ir vietą suderiname su Jumis iš anksto.',
    sections: [
      {
        id: 'how-it-works',
        heading: 'Kaip tai vyksta',
        blocks: [
          {
            type: 'prose',
            paragraphs: [
              'Atsiųskite maršrutą, datą ir, jei turite, skrydžio numerį. Jei turite pageidaujamą automobilį, nurodykite jį.',
              'Patikriname galimybes ir pateikiame kainos pasiūlymą. Užsakymas patvirtinamas, kai suderiname kelionės informaciją ir kainą.',
            ],
          },
        ],
      },
      {
        id: 'airports',
        heading: 'Oro uostai',
        blocks: [
          {
            type: 'list',
            items: [
              { text: 'Vilniaus oro uostas', code: 'VNO' },
              { text: 'Kauno oro uostas', code: 'KUN' },
              { text: 'Palangos oro uostas', code: 'PLQ' },
              { text: 'Rygos oro uostas', code: 'RIX' },
              { text: 'Varšuvos Šopeno oro uostas', code: 'WAW' },
              { text: 'Varšuvos Modlino oro uostas', code: 'WMI' },
            ],
            note: { before: 'Reikia kito oro uosto? ', link: 'Atsiųskite maršrutą', after: ' – patikrinsime.' },
          },
        ],
      },
      {
        id: 'routes',
        heading: 'Oro uostų maršrutų pavyzdžiai',
        blocks: [
          {
            type: 'journeys',
            items: [
              { from: 'kaunas', to: 'rix' },
              { from: 'vno', to: 'kaunas' },
              { from: 'kun', to: 'vilnius' },
              { from: 'vilnius', to: 'waw' },
            ],
            more: { label: 'Visi populiarūs maršrutai', path: '/#popular-routes' },
          },
        ],
      },
    ],
    faq: [
      {
        question: 'Ar galiu nurodyti pageidaujamą automobilį?',
        answer: 'Taip. Nurodykite pageidaujamą automobilį siųsdami užklausą. Jį patvirtinsime pateikdami kainos pasiūlymą.',
      },
      {
        question: 'Ar vežate į oro uostus ir iš jų anksti ryte ar vėlai naktį?',
        answer: 'Taip. Pervežimai galimi 24/7, užsakius iš anksto.',
      },
      {
        question: 'Ar privalau nurodyti skrydžio numerį?',
        answer: 'Ne, tai neprivaloma. Tai naudinga kelionės informacija, todėl, jei turite, įrašykite ją į užklausą.',
      },
      {
        question: 'Kaip nustatomas paėmimo laikas?',
        answer: 'Paėmimo laiką suderiname su Jumis kartu su kita kelionės informacija.',
      },
    ],
    related: ['business-vip-transfers', 'cross-border'],
  },

  'business-vip-transfers': {
    slug: 'business-vip-transfers',
    metaTitle: 'Verslo ir VIP pervežimai | LTTransfers',
    metaDescription:
      'Privatūs iš anksto užsakomi pervežimai svečiams, darbuotojams ir partneriams tarp oro uostų, viešbučių, biurų ir miestų. Sąskaitos išrašomos.',
    h1: 'Verslo ir VIP pervežimai',
    lead: 'Privatūs iš anksto užsakomi pervežimai svečiams, darbuotojams, partneriams ir verslo keliautojams.',
    support: 'Pavieniams keleiviams ir grupėms.',
    sections: [
      {
        id: 'journeys',
        heading: 'Dažniausi verslo pervežimai',
        blocks: [
          {
            type: 'list',
            items: [
              { text: 'Oro uostas → viešbutis' },
              { text: 'Oro uostas → biuras' },
              { text: 'Viešbutis → susitikimo ar renginio vieta' },
              { text: 'Pervežimai tarp miestų verslo kelionėms' },
            ],
          },
        ],
      },
      {
        id: 'good-to-know',
        heading: 'Gera žinoti',
        blocks: [
          {
            type: 'rows',
            rows: [
              { term: 'Sąskaitos', text: 'Išrašomos.' },
              { term: 'Apmokėjimas', text: 'Grynieji, kortelė, pavedimas.' },
              {
                term: 'Pageidaujamas automobilis',
                text: 'Nurodykite pageidaujamą automobilį. Jį patvirtinsime pateikdami kainos pasiūlymą.',
              },
              {
                term: 'Užsakymas',
                text: 'Pateikiamas iš anksto ir patvirtinamas, kai suderiname kelionės informaciją ir kainą.',
              },
            ],
          },
        ],
      },
    ],
    faq: [
      {
        question: 'Ar galiu užsakyti pervežimą svečiui ar kolegai?',
        answer:
          'Taip. Atsiųskite jo kelionės informaciją ir telefono numerį, kuriuo prireikus galėtume susisiekti.',
      },
      {
        question: 'Ar vežate iš oro uosto į biurą?',
        answer: 'Taip. Vežame tarp oro uostų, viešbučių, biurų ir susitikimų vietų.',
      },
      {
        question: 'Ar keli kolegos gali keliauti kartu?',
        answer: 'Taip. Nurodykite keleivių skaičių ir bagažo kiekį, o rekomenduosime tinkamą automobilį.',
      },
    ],
    related: ['airport-transfers', 'long-distance'],
  },

  'long-distance': {
    slug: 'long-distance',
    metaTitle: 'Tarpmiestiniai pervežimai Lietuvoje | LTTransfers',
    metaDescription:
      'Privatūs iš anksto užsakomi pervežimai tarp miestų ir kitų vietų Lietuvoje. Kaina derinama individualiai ir suderinama prieš patvirtinant užsakymą.',
    h1: 'Tarpmiestiniai pervežimai',
    lead: 'Privatūs iš anksto užsakomi pervežimai tarp miestų ir kitų vietų Lietuvoje.',
    support: 'Iš taško A į tašką B, pavieniams keleiviams ir grupėms.',
    sections: [
      {
        id: 'service',
        heading: 'Paslauga',
        blocks: [
          {
            type: 'prose',
            paragraphs: [
              'Tarpmiestinis pervežimas – tai privatus pervežimas iš Jūsų paėmimo adreso iki paskirties vietos.',
            ],
          },
        ],
      },
      {
        id: 'coverage',
        heading: 'Kur vykstame',
        blocks: [
          { type: 'statement', text: 'Tarp vietų Lietuvoje.' },
          {
            type: 'journeys',
            items: [
              { from: 'vilnius', to: 'kaunas' },
              { from: 'kaunas', to: 'klaipeda' },
              { from: 'vilnius', to: 'klaipeda' },
              { from: 'kaunas', to: 'siauliai' },
            ],
            note: 'Tik pavyzdžiai, ne reguliarūs reisai. Kelionę galima užsakyti abiem kryptimis.',
          },
        ],
      },
    ],
    faq: [
      {
        question: 'Ar galiu užsakyti maršrutą, kurio čia nėra?',
        answer: 'Taip. Atsiųskite paėmimo ir paskirties vietas, o patvirtinsime galimybes.',
      },
      {
        question: 'Ar galiu nurodyti pageidaujamą automobilį?',
        answer: 'Taip. Nurodykite pageidaujamą automobilį užklausoje. Jį patvirtinsime pateikdami kainos pasiūlymą.',
      },
      {
        question: 'Kaip nustatoma kaina?',
        answer: 'Kaina derinama individualiai, gavus Jūsų užklausą. Kainą suderiname prieš patvirtindami užsakymą.',
      },
      {
        question: 'Ar keli keleiviai gali keliauti kartu?',
        answer: 'Taip. Užklausoje nurodykite grupės dydį, o rekomenduosime tinkamą automobilį.',
      },
    ],
    related: ['cross-border', 'airport-transfers'],
  },

  'cross-border': {
    slug: 'cross-border',
    metaTitle: 'Tarptautiniai pervežimai | LTTransfers',
    metaDescription:
      'Privatūs iš anksto užsakomi pervežimai tarp Lietuvos, Latvijos, Estijos ir Lenkijos: iš miesto į miestą, į oro uostus ir viešbučius. Kaina suderinama prieš užsakymą.',
    h1: 'Tarptautiniai pervežimai',
    lead: 'Privatūs iš anksto užsakomi pervežimai tarp Lietuvos, Latvijos, Estijos ir Lenkijos.',
    support: 'Iš miesto į miestą, į oro uostą, viešbutį ar kitą adresą.',
    sections: [
      {
        id: 'countries',
        heading: 'Šalys',
        blocks: [
          {
            type: 'list',
            items: [{ text: 'Lietuva' }, { text: 'Latvija' }, { text: 'Estija' }, { text: 'Lenkija' }],
          },
        ],
      },
      {
        id: 'examples',
        heading: 'Kelionių pavyzdžiai',
        blocks: [
          {
            type: 'journeys',
            items: [
              { from: 'kaunas', to: 'riga' },
              { from: 'vilnius', to: 'rix' },
              { from: 'vilnius', to: 'warsaw' },
              { from: 'vilnius', to: 'tallinn' },
            ],
            note: 'Tik pavyzdžiai. Galite užsakyti ir kitas keliones tarp šių šalių, o galimybes patvirtinsime.',
          },
        ],
      },
    ],
    faq: [
      {
        question: 'Kokias šalis aptarnaujate?',
        answer: 'Lietuvą, Latviją, Estiją ir Lenkiją. Atsiųskite maršrutą, o patvirtinsime galimybes.',
      },
      {
        question: 'Ar vežate į oro uostą kitoje šalyje?',
        answer: 'Taip. Pavyzdžiui, iš Vilniaus į Rygos oro uostą RIX. Atsiųskite maršrutą ir datą, o patikrinsime.',
      },
      {
        question: 'Kaip suderinama kaina?',
        answer: 'Individualiai, gavus Jūsų užklausą. Užsakymas patvirtinamas, kai suderiname kainą ir kelionės informaciją.',
      },
      {
        question: 'Ar galiu nurodyti pageidaujamą automobilį?',
        answer: 'Taip. Nurodykite pageidaujamą automobilį užklausoje. Jį patvirtinsime pateikdami kainos pasiūlymą.',
      },
    ],
    related: ['airport-transfers', 'long-distance'],
  },
};
