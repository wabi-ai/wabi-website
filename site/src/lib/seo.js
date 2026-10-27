import { SITE, PEOPLE, personId } from '../data/site.js';

// Wabi is based in Trondheim, works mostly in Trøndelag and Midt-Norge, and takes work across Norway.
export const areaServed = [
  { '@type': 'City', name: 'Trondheim' }, { '@type': 'AdministrativeArea', name: 'Trøndelag' },
  { '@type': 'Place', name: 'Midt-Norge' }, { '@type': 'Country', name: 'Norge' },
];

export const personLd = id => {
  const p = PEOPLE.find(person => person.id === id);
  return {
    '@context': 'https://schema.org', '@type': 'Person', '@id': personId(p.id), name: p.name, jobTitle: p.jobTitle, email: p.email,
    homeLocation: p.homeLocation, worksFor: { '@id': SITE.url + '/#org' }, ...(p.sameAs.length && { sameAs: p.sameAs }),
  };
};

export const breadcrumbLd = crumbs => ({
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [{ label: 'Forside', href: '/' }, ...crumbs].map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.label, item: SITE.url + c.href })),
});

export const faqLd = faq => ({
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
});

export const serviceLd = ({ name, description, path }) => ({
  '@context': 'https://schema.org', '@type': 'Service', name, description, url: SITE.url + path,
  provider: { '@id': SITE.url + '/#org' }, areaServed, inLanguage: 'nb-NO',
});
