/*
  Lithuanian legal pages. Same shape and the same sections as data/legal.ts (English), and the same rules:
  only what the website really does, no invented company details, periods or policies.

  Terminology follows the rest of the Lithuanian site: užklausa (the request), užsakymas (the booking,
  confirmed once the price is agreed), kainos pasiūlymas (the price we send). BDAR = the GDPR.
*/
import type { LegalPageContent, LegalSlug } from './legal';
import { site } from './site';

const email = site.contact.email ?? '';
const tel = site.contact.phone.tel ?? '';
const phone = site.contact.phone.display;
const emailLink = `[${email}](mailto:${email})`;
const phoneLink = `[${phone}](tel:${tel})`;

export const lt: Record<LegalSlug, LegalPageContent> = {
  privacy: {
    slug: 'privacy',
    metaTitle: 'Privatumo politika | LTTransfers',
    metaDescription:
      'Kaip LTTransfers naudoja asmens duomenis, kuriuos atsiunčiate pervežimo užklausos forma arba susisiekdami su mumis, ir kokias teises turite.',
    h1: 'Privatumo politika',
    lead: 'Šioje politikoje paaiškiname, kokią asmeninę informaciją renkame per šią svetainę ir kai su mumis susisiekiate, kodėl ją naudojame ir kokias teises turite.',
    updatedLabel: 'Paskutinį kartą atnaujinta',
    sections: [
      {
        id: 'controller',
        heading: 'Kas atsakingas už duomenis',
        blocks: [
          {
            type: 'p',
            text: 'LTTransfers yra paslaugos prekės ženklas. Paslaugą teikia MKT PASLAUGOS – šioje politikoje aprašomų asmens duomenų valdytojas.',
          },
          { type: 'ul', items: [`El. paštas: ${emailLink}`, `Telefonas: ${phoneLink}`] },
        ],
      },
      {
        id: 'data',
        heading: 'Kokią informaciją renkame',
        blocks: [
          { type: 'p', text: 'Siųsdami pervežimo užklausą per svetainę, nurodote:' },
          {
            type: 'ul',
            items: [
              'kelionės pradžios ir pabaigos vietą',
              'kelionės datą',
              'keleivių skaičių',
              'pageidaujamą susisiekimo būdą (WhatsApp, telefonas ar el. paštas) ir atitinkamą telefono numerį ar el. pašto adresą',
            ],
          },
          { type: 'p', text: 'Jei norite, galite nurodyti ir:' },
          { type: 'ul', items: ['pageidaujamą automobilį', 'skrydžio numerį', 'pastabas apie kelionę'] },
          {
            type: 'p',
            text: 'Formoje neprašome slaptažodžio, mokėjimo kortelės duomenų, asmens tapatybės dokumentų, gimimo datos ar pilietybės, o kliento paskyra nekuriama. Pastabų laukas yra laisvo teksto, todėl tai, ką jame rašote, priklauso nuo jūsų. Prašome nurodyti tik tai, kas svarbu kelionei.',
          },
          {
            type: 'p',
            text: 'Jei susisiekiate telefonu, per WhatsApp ar el. paštu, gauname informaciją, kuria pasidalijate pokalbio metu, pavyzdžiui, jūsų vardą, numerį ar adresą.',
          },
          {
            type: 'p',
            text: 'Svetainę talpinantys ir pateikiantys paslaugų teikėjai bei užklausos formą priimanti paslauga (žr. skyrių „Kas gauna informaciją“), kad jų paslaugos veiktų, taip pat gali tvarkyti techninę informaciją, pavyzdžiui, IP adresus ir pagrindinius užklausų žurnalus.',
          },
        ],
      },
      {
        id: 'purposes',
        heading: 'Kam ją naudojame',
        blocks: [
          { type: 'p', text: 'Atsiųstą informaciją naudojame, kad:' },
          {
            type: 'ul',
            items: [
              'atsakytume į jūsų pervežimo užklausą',
              'patikrintume, ar kelionė galima',
              'parengtume ir pateiktume kainos pasiūlymą',
              'suderintume su jumis kelionės informaciją',
              'patvirtintume ir suteiktume jūsų užsakytą pervežimą',
              'bendrautume su jumis dėl šios užklausos ar užsakymo',
              'įvykdytume apskaitos ir kitus teisinius įpareigojimus, kai jie taikomi',
            ],
          },
          { type: 'p', text: 'Svetainėje nėra naujienlaiškio ar rinkodaros prenumeratos.' },
        ],
      },
      {
        id: 'basis',
        heading: 'Teisinis pagrindas',
        blocks: [
          {
            type: 'p',
            text: 'Kai prašote pervežimo, jūsų informaciją tvarkome, nes tai būtina norint jūsų prašymu imtis veiksmų prieš sudarant sutartį, o pervežimą suderinus – sutarčiai vykdyti (BDAR 6 straipsnio 1 dalies b punktas).',
          },
          {
            type: 'p',
            text: 'Kai tam tikrus įrašus turime saugoti dėl apskaitos ar kitų teisinių reikalavimų, juos tvarkome siekdami įvykdyti teisinę prievolę (BDAR 6 straipsnio 1 dalies c punktas).',
          },
        ],
      },
      {
        id: 'recipients',
        heading: 'Kas gauna informaciją',
        blocks: [
          {
            type: 'p',
            text: 'Asmens duomenų neparduodame. Informaciją mūsų vardu tvarko paslaugų teikėjai, reikalingi svetainei veikti ir užklausoms gauti, ir tik tam, kad teiktų mums šias paslaugas. Informaciją taip pat galime atskleisti, kai to reikalauja teisės aktai. Naudojami teikėjai:',
          },
          {
            type: 'ul',
            items: [
              'Formspree – formų pateikimo paslauga. Kai išsiunčiate pervežimo užklausos formą, jūsų įvesti duomenys perduodami per Formspree, kuri juos el. paštu pristato mums, kad galėtume atsakyti. Formspree taip pat gali saugoti pateikimo kopiją ir techninę informaciją, pavyzdžiui, jūsų IP adresą, atsižvelgiant į tai, kaip sukonfigūruota mūsų paskyra pas šį teikėją.',
              'Cloudflare – svetainės talpinimo ir pateikimo (svetainės talpinimo ir infrastruktūros) paslauga.',
            ],
          },
          {
            type: 'p',
            text: 'Jei susisiekiate per WhatsApp, telefonu ar el. paštu, šias paslaugas teikia jų pačių teikėjai pagal savo sąlygas. Jei paslaugų teikėjas yra už Europos ekonominės erdvės ribų, duomenų perdavimui taikomos teisės aktų reikalaujamos apsaugos priemonės.',
          },
        ],
      },
      {
        id: 'retention',
        heading: 'Kiek laiko saugome',
        blocks: [
          {
            type: 'p',
            text: 'Asmens duomenis saugome tik tiek, kiek būtina jūsų užklausai išnagrinėti, paslaugai suteikti, susijusiems klausimams išspręsti ir taikomiems teisiniams ar apskaitos reikalavimams įvykdyti. Jei skirtingiems įrašams taikomi skirtingi teisiniai saugojimo reikalavimai, saugojimo laiką gali lemti būtent šie reikalavimai.',
          },
          {
            type: 'p',
            text: 'Per formą išsiųsta užklausa gali būti saugoma keliose vietose: mūsų el. pašte ir formų pateikimo paslaugoje, kur ji laikoma pagal mūsų paskyros nustatymus ir to teikėjo sąlygas.',
          },
        ],
      },
      {
        id: 'rights',
        heading: 'Jūsų teisės',
        blocks: [
          { type: 'p', text: 'Kai tai taikoma, turite teisę:' },
          {
            type: 'ul',
            items: [
              'susipažinti su jūsų asmens duomenimis, kuriuos turime',
              'reikalauti ištaisyti netikslius duomenis',
              'reikalauti ištrinti duomenis',
              'apriboti duomenų tvarkymą',
              'nesutikti su duomenų tvarkymu',
              'gauti savo duomenis lengvai perkeliamu formatu',
            ],
          },
          {
            type: 'p',
            text: `Norėdami pasinaudoti šiomis teisėmis, rašykite adresu ${emailLink}. Prieš imdamiesi veiksmų galime paprašyti patvirtinti jūsų tapatybę.`,
          },
          {
            type: 'p',
            text: 'Taip pat turite teisę pateikti skundą kompetentingai priežiūros institucijai. Lietuvoje tai Valstybinė duomenų apsaugos inspekcija (VDAI).',
          },
        ],
      },
      {
        id: 'cookies',
        heading: 'Slapukai ir analitika',
        blocks: [
          {
            type: 'p',
            text: 'Ši svetainė šiuo metu nenaudoja analitikos ar reklamos slapukų ar panašių sekimo priemonių.',
          },
          {
            type: 'p',
            text: 'Kad užklausos forma atsidarytų su jau įvesta kelione, svetainė jūsų naršyklės sesijos atmintyje (session storage) išsaugo laukų „Iš“, „Į“ ir „Data“ reikšmes. Ši informacija lieka jūsų naršyklėje, išnyksta uždarius skirtuką ir mums nesiunčiama, nebent išsiųstumėte užklausą.',
          },
        ],
      },
      {
        id: 'security',
        heading: 'Saugumas',
        blocks: [
          {
            type: 'p',
            text: 'Asmens duomenims apsaugoti taikome pagrįstas technines ir organizacines priemones. Joks perdavimo ar saugojimo būdas nėra visiškai saugus, todėl absoliutaus saugumo garantuoti negalime.',
          },
        ],
      },
      {
        id: 'changes',
        heading: 'Politikos pakeitimai',
        blocks: [
          {
            type: 'p',
            text: 'Šią politiką galime atnaujinti, kai keičiasi svetainė ar paslaugos. Naujausia versija visada skelbiama šiame puslapyje kartu su atnaujinimo data.',
          },
        ],
      },
    ],
  },

  terms: {
    slug: 'terms',
    metaTitle: 'Paslaugų teikimo sąlygos | LTTransfers',
    metaDescription:
      'LTTransfers pervežimų sąlygos: ką apima paslauga, kaip užklausa tampa užsakymu, kainos ir apmokėjimas.',
    h1: 'Paslaugų teikimo sąlygos',
    lead: 'Šios sąlygos taikomos pervežimams, kuriuos užsakote per LTTransfers – per šią svetainę arba susisiekdami su mumis tiesiogiai.',
    updatedLabel: 'Paskutinį kartą atnaujinta',
    sections: [
      {
        id: 'provider',
        heading: 'Kas teikia paslaugą',
        blocks: [
          {
            type: 'p',
            text: 'LTTransfers yra paslaugos prekės ženklas. Paslaugą teikia MKT PASLAUGOS.',
          },
          { type: 'ul', items: [`El. paštas: ${emailLink}`, `Telefonas: ${phoneLink}`] },
        ],
      },
      {
        id: 'service',
        heading: 'Paslauga',
        blocks: [
          {
            type: 'p',
            text: 'LTTransfers teikia privačius, iš anksto užsakomus keleivių pervežimus:',
          },
          {
            type: 'ul',
            items: [
              'pervežimus iš ir į oro uostus',
              'verslo ir VIP pervežimus',
              'tarpmiestinius pervežimus',
              'tarptautinius pervežimus',
            ],
          },
          {
            type: 'p',
            text: 'Šiuo metu paslauga teikiama Lietuvoje, Latvijoje, Estijoje ir Lenkijoje.',
          },
          {
            type: 'p',
            text: 'Pervežimai galimi 24/7, užsakius iš anksto. Tai nėra iškart iškviečiamo taksi paslauga, ir skubaus automobilio atsiuntimo neteikiame.',
          },
        ],
      },
      {
        id: 'request',
        heading: 'Užklausa nėra užsakymas',
        blocks: [
          {
            type: 'p',
            text: 'Išsiuntus užklausos formą šioje svetainėje, patvirtintas užsakymas savaime nesukuriamas. Užklausa tampa užsakymu taip:',
          },
          {
            type: 'ol',
            items: [
              'Atsiunčiate kelionės informaciją.',
              'Patikriname užklausą ir galimybes.',
              'Pranešame jums kainą ir svarbią kelionės informaciją.',
              'Su jumis suderiname kainą ir kelionės informaciją.',
              'Tada užsakymą patvirtiname raštu.',
            ],
          },
          {
            type: 'p',
            text: 'Tokią informaciją kaip tikslus paėmimo laikas ir adresas galime suderinti šio proceso metu.',
          },
        ],
      },
      {
        id: 'pricing-and-payment',
        heading: 'Kaina ir apmokėjimas',
        blocks: [
          {
            type: 'p',
            text: 'Svetainėje prie populiarių maršrutų nurodytos kainos yra orientacinės pradinės kainos, rodomos kaip kainos „nuo“. Jos nėra fiksuotos kainos.',
          },
          {
            type: 'p',
            text: 'Tiksli kaina derinama su jumis individualiai. Ji priklauso nuo tokių veiksnių kaip maršrutas, pageidaujamas automobilis ir kelionės informacija. Užsakymas patvirtinamas tik tada, kai suderinama kaina ir kelionės informacija.',
          },
          { type: 'p', text: 'Atsiskaityti galite grynaisiais, kortele arba banko pavedimu. Išrašome sąskaitas.' },
          {
            type: 'p',
            text: 'MKT PASLAUGOS šiuo metu nėra PVM mokėtoja, todėl įprastoje sąskaitoje PVM nenurodomas. Jei jums būtina PVM sąskaita faktūra, ją galima parengti atskirai – apie tai praneškite savo užklausoje.',
          },
        ],
      },
      {
        id: 'vehicle',
        heading: 'Pageidaujamas automobilis',
        blocks: [
          {
            type: 'p',
            text: 'Užklausoje pasirinktas ar paminėtas automobilis yra pageidavimas. Jis patvirtinamas tik tada, kai patvirtinamas jo prieinamumas, o to, kad formoje pasirinktas konkretus modelis, negarantuojame.',
          },
        ],
      },
      {
        id: 'information',
        heading: 'Jūsų pateikiama informacija',
        blocks: [
          {
            type: 'p',
            text: 'Prašome nurodyti tikslią kelionės ir kontaktinę informaciją, kad galėtume suorganizuoti jūsų pervežimą. Paprastai tai:',
          },
          {
            type: 'ul',
            items: [
              'maršrutas',
              'data',
              'keleivių skaičius',
              'jūsų kontaktiniai duomenys',
              'skrydžio numeris, kai aktualu',
              'kita svarbi kelionės informacija, pavyzdžiui, bagažas ar papildomas sustojimas',
            ],
          },
          { type: 'p', text: 'Jei kas nors keičiasi, praneškite mums.' },
        ],
      },
      {
        id: 'animals',
        heading: 'Gyvūnai',
        blocks: [{ type: 'p', text: 'LTTransfers šiuo metu gyvūnų nevežioja.' }],
      },
      {
        id: 'rights',
        heading: 'Jūsų teisės',
        blocks: [
          {
            type: 'p',
            text: 'Šios sąlygos neriboja jokių jūsų, kaip vartotojo, teisių, kurias nustato privalomosios vartotojų teisių apsaugos normos.',
          },
        ],
      },
      {
        id: 'privacy',
        heading: 'Asmens duomenys',
        blocks: [
          {
            type: 'p',
            text: 'Kaip naudojame jūsų atsiųstą asmeninę informaciją, paaiškinta [Privatumo politikoje](/privacy/).',
          },
        ],
      },
      {
        id: 'changes',
        heading: 'Sąlygų pakeitimai',
        blocks: [
          {
            type: 'p',
            text: 'Šias sąlygas galime atnaujinti, kai keičiasi paslauga. Naujausia versija visada skelbiama šiame puslapyje kartu su atnaujinimo data.',
          },
        ],
      },
    ],
  },
};
