export const SITE = {
  name: 'Wabi',
  url: 'https://wabi.no',
  description: 'Vi kartlegger hvordan dere jobber, bygger AI inn der den gjør en forskjell og hjelper hele teamet å bruke den trygt.',
  socialImage: '/assets/wabi-social-2026-10-v2.jpg',
  socialImageAlt: 'Wabi. Praktisk AI, bygget for hvordan dere faktisk jobber.',
  email: 'ulrik@wabi.no', // fallback only, if the form fails
  linkedin: 'https://www.linkedin.com/company/wabino/',
  // Web3Forms access key for the contact form. Submissions go to the address the key was created for (admin@wabi.no).
  // While empty, the form falls back to opening an e-mail draft.
  contactFormKey: '299414e8-17a7-4e12-afc9-bd94a50f3a59',
};

export const SERVICES = [
  { id: 'agenter', href: '/ai-agenter/', tone: 'fjord', preset: 't1', title: 'AI-agenter', short: 'En digital hjelper som kan lage rapporter, skrive svar og følge opp oppgaver.', nav: ['En ekstra hånd i arbeidsdagen.', 'Få hjelp med rapporter, kundesvar og andre faste oppgaver.'] },
  { id: 'automatisering', href: '/automatisering/', tone: 'ember', preset: 't2', title: 'Automatisering', short: 'La faste oppgaver gå av seg selv, så dere slipper å flytte informasjon for hånd.', nav: ['La rutinen gå av seg selv.', 'Vi kobler sammen systemene dere bruker, så dere slipper dobbeltarbeid.'] },
  { id: 'programvare', href: '/verktoy-og-programvare/', tone: 'sand', preset: 't3', title: 'Verktøy', navTitle: 'Verktøy og programvare', short: 'Vi går gjennom verktøyene dere betaler for, og bygger det som mangler.', nav: ['Verktøy som passer måten dere jobber på.', 'Vi bygger det dere mangler, og rydder i det dere har.'] },
];

export const COURSE = { id: 'kurs', href: '/kurs/', tone: 'forest', title: 'Kurs', short: 'Kurs i Claude, ChatGPT, Gemini og Copilot, bygget på oppgavene dere faktisk har.', nav: ['Lær AI med egne oppgaver.', 'Praktiske kurs som gjør det enklere å komme i gang.'] };

export const CLIENTS = [
  ['vespa', 'Vespa'], ['trondheim-kommune', 'Trondheim Kommune'], ['hornet', 'Hornet'], ['novela-klinikken', 'Novela Klinikken'],
  ['norwegian-fish-oil', 'Norwegian Fish Oil'], ['maxpuls', 'Maxpuls'], ['tbu', 'TBU'], ['trondheim-catering', 'Trondheim Catering'],
  ['bunnpris', 'Bunnpris'], ['norwegian-efoil', 'Norwegian Efoil Company'], ['noteless', 'Noteless'],
];
