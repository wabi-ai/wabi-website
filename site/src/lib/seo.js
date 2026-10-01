import { SITE } from '../data/site.js';

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
  provider: { '@id': SITE.url + '/#org' }, areaServed: { '@type': 'Country', name: 'Norge' }, inLanguage: 'nb-NO',
});
