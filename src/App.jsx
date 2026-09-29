const ROUTES = {
  hjem: { path: '/', title: 'Praktisk AI for nordiske bedrifter | Wabi' },
  'tjeneste:agenter': { path: '/ai-agenter/', title: 'AI-agenter | Wabi' },
  'tjeneste:automatisering': { path: '/automatisering/', title: 'Automatisering | Wabi' },
  'tjeneste:programvare': { path: '/verktoy-og-programvare/', title: 'Verktøy og programvare | Wabi' },
  'tjeneste:kurs': { path: '/kurs/', title: 'Praktiske AI-kurs | Wabi' },
  'prosjekt:rapportering': { path: '/prosjekter/rapportering/', title: 'Et dashbord for alle kanaler | Wabi' },
  'prosjekt:bruktbil': { path: '/prosjekter/bruktbil/', title: 'Fagsystem for bruktbilforhandlere | Wabi' },
  'prosjekt:legekontor': { path: '/prosjekter/legekontor/', title: 'Regnskapsagent for legekontor | Wabi' },
  'prosjekt:nettside': { path: '/prosjekter/nettside/', title: 'Nettsider bygget med AI | Wabi' },
  kartlegging: { path: '/kartlegging/', title: 'Hvor bør dere starte med AI? | Wabi' },
  kontakt: { path: '/kontakt/', title: 'La oss ta en prat | Wabi' }
};
function routeHref(key) {
  const [page, anchor] = key.split('#');
  return (ROUTES[page]?.path || '/') + (anchor ? '#' + anchor : '');
}
function routeFromPath(path) {
  const normalized = path.replace(/index\.html$/, '').replace(/\/?$/, '/');
  return Object.keys(ROUTES).find(k => ROUTES[k].path === normalized) || 'hjem';
}
function App({ initialPage = 'hjem' }) {
  const [page, setPage] = React.useState(initialPage);
  const go = key => {
    const [next, anchor] = key.split('#');
    if (!ROUTES[next]) return;
    window.history.pushState({}, '', routeHref(key));
    setPage(next);
    requestAnimationFrame(() => {
      const el = document.getElementById(anchor || 'main-content');
      if (anchor) el?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
      else { window.scrollTo(0, 0); el?.focus({ preventScroll: true }); }
    });
  };
  React.useEffect(() => {
    const pop = () => setPage(routeFromPath(window.location.pathname));
    window.addEventListener('popstate', pop);
    return () => window.removeEventListener('popstate', pop);
  }, []);
  React.useEffect(() => {
    document.title = ROUTES[page].title;
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', 'https://wabi.no' + ROUTES[page].path);
  }, [page]);
  const Pages = { hjem: HomePage, 'tjeneste:agenter': AgentsPage, 'tjeneste:automatisering': AutomationPage, 'tjeneste:programvare': SoftwarePage, 'tjeneste:kurs': CoursePage, 'prosjekt:rapportering': ProjectReportPage, 'prosjekt:bruktbil': ProjectDealerPage, 'prosjekt:legekontor': CaseClinicPage, 'prosjekt:nettside': CaseWebsitePage, kartlegging: AssessmentPage, kontakt: ContactPage };
  const Page = Pages[page];
  return <><a href="#main-content" className="skip-link">Hopp til innhold</a><SiteHeader page={page} go={go}/><main id="main-content" tabIndex={-1} key={page}>
    {page.startsWith('prosjekt:') && <div className="container"><p className="example-notice">Illustrativt prosjekteksempel. Navn, tall og demonstrasjoner viser hvordan en løsning kan fungere.</p></div>}
    <Page go={go}/></main><SiteFooter go={go} page={page}/></>;
}
