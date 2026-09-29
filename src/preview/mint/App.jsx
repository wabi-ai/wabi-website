const mintRoutes = new Set(['innsikt', ...mintGuides.map(guide => 'artikkel:'+guide.slug), 'hjem', 'kontakt', 'kartlegging', ...['agenter','automatisering','programvare','kurs'].map(id => 'tjeneste:'+id), ...mintCases.map(item => 'prosjekt:'+item.id)]);
function MintApp({ initialPage = 'hjem' }) {
  const [page, setPage] = React.useState(initialPage);
  const go = next => {
    if (!mintRoutes.has(next)) return;
    if (window.location.pathname !== mintBase && window.location.pathname !== mintBase+'index.html') { window.location.assign(mintBase+'#'+next); return; }
    setPage(next);
    if (window.location.hash !== '#'+next) window.history.pushState(null, '', '#'+next);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };
  React.useEffect(() => {
    const restore = () => {
      const [route, anchor] = decodeURIComponent(window.location.hash.slice(1)).split('#');
      setPage(mintRoutes.has(route) ? route : initialPage);
      requestAnimationFrame(() => requestAnimationFrame(() => {
        const target = document.getElementById(anchor || route);
        if (target) target.scrollIntoView({ behavior: 'instant' });
        else window.scrollTo({ top: 0, behavior: 'instant' });
      }));
    };
    restore();
    window.addEventListener('hashchange', restore);
    window.addEventListener('popstate', restore);
    return () => { window.removeEventListener('hashchange', restore); window.removeEventListener('popstate', restore); };
  }, []);
  return <>
    <a className="mint-skip" href="#main-content" onClick={event => { event.preventDefault(); document.getElementById('main-content')?.focus(); }}>Hopp til innhold</a>
    <SiteHeader page={page} go={go} overHero={false}/>
    <main id="main-content" tabIndex={-1} key={page} className="wabi-page-content">
      {page === 'hjem' && <HomePage go={go}/>}
      {page === 'innsikt' && <GuideLibrary/>}
      {page.startsWith('artikkel:') && <GuidePage guide={mintGuides.find(guide => 'artikkel:'+guide.slug === page)} go={go}/>}
      {page === 'tjeneste:agenter' && <AgentsPage go={go}/>}
      {page === 'tjeneste:automatisering' && <AutomationPage go={go}/>}
      {page === 'tjeneste:programvare' && <SoftwarePage go={go}/>}
      {page === 'tjeneste:kurs' && <CoursePage go={go}/>}
      {page === 'prosjekt:rapportering' && <ProjectReportPage go={go}/>}
      {page === 'prosjekt:bruktbil' && <ProjectDealerPage go={go}/>}
      {page === 'prosjekt:legekontor' && <CaseClinicPage go={go}/>}
      {page === 'prosjekt:nettside' && <CaseWebsitePage go={go}/>}
      {page === 'kartlegging' && <AssessmentPage go={go}/>}
      {page === 'kontakt' && <ContactPage/>}
    </main>
    <SiteFooter page={page} go={go}/>
  </>;
}
