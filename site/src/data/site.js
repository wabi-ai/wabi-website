export const SITE = {
  name: 'Wabi',
  url: 'https://wabi.no',
  description: 'Wabi er et AI-rådgivningsselskap for norske bedrifter. Vi finner hvor AI gir verdi, bygger AI-agenter, automatisering og programvare, og følger løsningene opp i drift.',
  email: 'ulrik@wabi.no',
  linkedin: 'https://www.linkedin.com/company/wabino/',
  // Web3Forms access key for the contact form. Get it at web3forms.com by entering ulrik@wabi.no;
  // the key arrives by e-mail. While empty, the form falls back to opening an e-mail draft.
  contactFormKey: '',
};

export const SERVICES = [
  { id: 'agenter', href: '/ai-agenter/', tone: 'fjord', preset: 't1', title: 'AI-agenter', short: 'En agent tar en fast oppgave fra start til slutt, i Slack, e-post eller der dere jobber.', nav: ['En ekstra hånd i arbeidsdagen.', 'En agent som følger opp oppgaven, fra start til slutt.'] },
  { id: 'automatisering', href: '/automatisering/', tone: 'ember', preset: 't2', title: 'Automatisering', short: 'Når X skjer, gjør Y. Nå med et AI-steg som leser, vurderer og handler.', nav: ['La rutinen gå av seg selv.', 'Koble sammen verktøyene og få flyt i arbeidet.'] },
  { id: 'programvare', href: '/verktoy-og-programvare/', tone: 'sand', preset: 't3', title: 'Verktøy', navTitle: 'Verktøy og programvare', short: 'Vi går gjennom verktøyene dere betaler for, og bygger det som mangler.', nav: ['Verktøy som passer måten dere jobber på.', 'Vi bygger det dere mangler, og rydder i det dere har.'] },
];

export const COURSE = { id: 'kurs', href: '/kurs/', tone: 'forest', title: 'Kurs', short: 'Kurs i Claude, ChatGPT, Gemini og Copilot, bygget på oppgavene dere faktisk har.', nav: ['Lær AI med egne oppgaver.', 'Praktiske kurs som gjør det enklere å komme i gang.'] };

export const CLIENTS = [
  ['vespa', 'Vespa'], ['trondheim-kommune', 'Trondheim Kommune'], ['hornet', 'Hornet'], ['novela-klinikken', 'Novela Klinikken'],
  ['norwegian-fish-oil', 'Norwegian Fish Oil'], ['maxpuls', 'Maxpuls'], ['tbu', 'TBU'], ['trondheim-catering', 'Trondheim Catering'],
  ['bunnpris', 'Bunnpris'], ['norwegian-efoil', 'Norwegian Efoil Company'], ['noteless', 'Noteless'],
];
