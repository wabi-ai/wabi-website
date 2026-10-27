export const SITE = {
  name: 'Wabi',
  url: 'https://wabi.no',
  description: 'Wabi er et AI-byrå i Trondheim for bedrifter i Trøndelag og Midt-Norge. Vi kartlegger hvordan dere jobber, og bygger AI-agenter, automatisering og programvare inn i systemene dere allerede bruker.',
  socialImage: '/assets/wabi-social-2026-10-v2.jpg',
  socialImageAlt: 'Wabi. Praktisk AI, bygget for hvordan dere faktisk jobber.',
  email: 'ulrik@wabi.no', // fallback only, if the form fails
  linkedin: 'https://www.linkedin.com/company/wabino/',
  // Legal entity behind wabi.no. Used in structured data so search engines and AI assistants
  // don't confuse Wabi with similarly named companies.
  legalName: 'Wabi Marketing AS',
  orgNumber: '932368021',
  vatID: 'NO932368021MVA',
  address: { streetAddress: 'Jonsvannsveien 68', postalCode: '7052', addressLocality: 'Trondheim', addressCountry: 'NO' },
  logoPng: '/assets/logo/wabi-logo-square.png',
  // Public registry listings that confirm the legal entity. Only add profiles that are verified to belong to Wabi.
  registryLinks: ['https://virksomhet.brreg.no/nb/oppslag/enheter/932368021', 'https://www.proff.no/selskap/wabi-marketing-as/932368021'],
  // Web3Forms access key for the contact form. Submissions go to the address the key was created for (admin@wabi.no).
  // While empty, the form falls back to opening an e-mail draft.
  contactFormKey: '299414e8-17a7-4e12-afc9-bd94a50f3a59',
  // Tracking IDs. Each tool loads only after the visitor consents (see Consent.astro); while all are empty, no banner is shown.
  tracking: {
    ga4: '', // GA4 measurement ID, e.g. G-XXXXXXXXXX
    metaPixel: '', // Meta pixel ID
    linkedinPartner: '', // LinkedIn Insight Tag partner ID
    searchConsole: '', // Search Console HTML-tag verification token (no cookies, no consent needed)
  },
};

// The founders, as shown on the homepage and /om-oss/. Each has a stable @id so every page refers to the same person.
// sameAs: only verified personal profiles. Ulrik's LinkedIn is not added until the URL is confirmed.
export const PEOPLE = [
  { id: 'ulrik', name: 'Ulrik Rosmæl', jobTitle: 'Daglig leder og AI-konsulent', email: 'ulrik@wabi.no', homeLocation: 'Trondheim', sameAs: [] },
  { id: 'eljar', name: 'Eljar Skjørholm', jobTitle: 'Chief AI Officer', email: 'admin@wabi.no', homeLocation: 'Singapore', sameAs: ['https://www.linkedin.com/in/eljarskjorholm'] },
];
export const personId = id => `${SITE.url}/om-oss/#${id}`;

export const SERVICES = [
  { id: 'agenter', href: '/ai-agenter/', tone: 'fjord', preset: 't1', title: 'AI-agenter', short: 'En digital hjelper som kan lage rapporter, skrive svar og følge opp oppgaver.', nav: ['En ekstra hånd i arbeidsdagen.', 'Få hjelp med rapporter, kundesvar og andre faste oppgaver.'] },
  { id: 'automatisering', href: '/automatisering/', tone: 'ember', preset: 't2', title: 'Automatisering', short: 'La faste oppgaver gå av seg selv, så dere slipper å flytte informasjon for hånd.', nav: ['La rutinen gå av seg selv.', 'Vi kobler sammen systemene dere bruker, så dere slipper dobbeltarbeid.'] },
  { id: 'programvare', href: '/verktoy-og-programvare/', tone: 'sand', preset: 't3', title: 'Verktøy', navTitle: 'Verktøy og programvare', short: 'Vi går gjennom verktøyene dere betaler for, og bygger det som mangler.', nav: ['Verktøy som passer måten dere jobber på.', 'Vi bygger det dere mangler, og rydder i det dere har.'] },
];

export const STRATEGY = { id: 'strategi', href: '/ai-strategi/', tone: 'dusk', title: 'AI-strategi', short: 'En felles plan for hva dere bruker AI til, med verktøy, regler og opplæring.', nav: ['En plan dere faktisk kan følge.', 'Mål, verktøy og regler for trygg bruk, samlet for hele bedriften.'] };

export const COURSE = { id: 'kurs', href: '/kurs/', tone: 'forest', title: 'Kurs', short: 'Kurs i Claude, ChatGPT, Gemini og Copilot, bygget på oppgavene dere faktisk har.', nav: ['Lær AI med egne oppgaver.', 'Praktiske kurs som gjør det enklere å komme i gang.'] };

export const CLIENTS = [
  ['vespa', 'Vespa'], ['trondheim-kommune', 'Trondheim Kommune'], ['hornet', 'Hornet'], ['novela-klinikken', 'Novela Klinikken'],
  ['norwegian-fish-oil', 'Norwegian Fish Oil'], ['maxpuls', 'Maxpuls'], ['tbu', 'TBU'], ['trondheim-catering', 'Trondheim Catering'],
  ['bunnpris', 'Bunnpris'], ['norwegian-efoil', 'Norwegian Efoil Company'], ['noteless', 'Noteless'],
];
