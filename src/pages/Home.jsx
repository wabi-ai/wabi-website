function Hero({ go }) {
  return <section className="hero">
    <img src="/assets/footer-bg.jpg" alt="" aria-hidden="true" className="hero-photo" fetchPriority="high" width="1800" height="1280"/>
    <div className="hero-shade" aria-hidden="true"/>
    <div className="container hero-content"><div className="hero-title"><span className="hero-label">Praktisk AI for nordiske bedrifter</span><h1>AI som gir verdi.<br/>I arbeidsdagen.</h1></div><div className="hero-detail"><p className="hero-lead">Vi finner mulighetene, bygger løsningene og følger dem videre. Sammen med dere.</p><div className="hero-actions"><RouteLink page="kontakt" go={go} className="button button-secondary">La oss ta en prat</RouteLink><RouteLink page="hjem#prosjekter" go={go} className="text-link">Se mulighetene <span aria-hidden="true">→</span></RouteLink></div></div></div>
    <div className="container hero-caption"><span>Trondheim · Singapore</span><span>Fra første spørsmål til en løsning i bruk.</span></div>
  </section>;
}
function ClientProof() {
  const clients = [
    ['vespa.png', 'Vespa'], ['trondheim-kommune.png', 'Trondheim Kommune'],
    ['hornet.png', 'Hornet'], ['novela-klinikken.png', 'Novela Klinikken'],
    ['norwegian-fish-oil.png', 'Norwegian Fish Oil'], ['maxpuls.png', 'Maxpuls'],
    ['tbu.png', 'TBU'], ['trondheim-catering.png', 'Trondheim Catering'],
    ['bunnpris.png', 'Bunnpris'], ['norwegian-efoil.png', 'Norwegian Efoil Company'],
    ['noteless.png', 'Noteless'],
  ];
  return <section className="container client-proof" aria-labelledby="client-proof-title"><h2 id="client-proof-title" className="wabi-eyebrow">I godt selskap</h2><ul className="client-logos">{clients.map(([file, name]) => <li key={file}><img src={'/assets/logos/' + file} alt={name} width="150" height="56" loading="lazy"/></li>)}</ul></section>;
}
function ServicePanels({ go }) {
  const levels = [
    { id: 'agenter', label: 'AI-agenter', title: 'Presisjonsverktøyet.', description: 'Én oppgave, gjort raskere av AI. Fra å følge opp kunder til å klargjøre ukens rapport.' },
    { id: 'automatisering', label: 'Automatiserte arbeidsflyter', title: 'Prosesslaget.', description: 'Verktøyene deres kobles sammen. AI gjør forarbeidet, og mennesker tar beslutningene.' },
    { id: 'programvare', label: 'Skreddersydd programvare', title: 'Ditt eget system.', description: 'Programvare bygget rundt kundene, oppgavene og måten dere faktisk jobber på.' },
  ];
  return <section className="services-section" id="tjenester" aria-labelledby="levels-title"><div className="container">
    <div className="levels-heading"><h2 id="levels-title">Tre nivåer.<br/>Én tilnærming.</h2><p>Vi starter der AI gir verdi for dere.<br/>Og bygger videre derfra.</p></div>
    <ol className="service-levels">{levels.map((level, i) => <li key={level.id}><RouteLink page={'tjeneste:' + level.id} go={go} className="level-link">
      <span className="level-label"><span>0{i + 1}</span>{level.label}</span>
      <h3>{level.title}</h3><p>{level.description}</p>
      <span className="level-more">Les mer <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 19 19 5M5 5h14v14" fill="none" stroke="currentColor" strokeWidth="1.4"/></svg></span>
    </RouteLink></li>)}</ol>
    <div className="levels-start"><p>Usikker på hvor dere bør starte?</p><RouteLink go={go} page="kartlegging" className="text-link">Finn en mulighet med AI-kartlegging <span aria-hidden="true">→</span></RouteLink></div>
  </div></section>;
}
function CaseVisual({ kind }) {
  if (kind === 'report') return <div className="case-screen" aria-hidden="true"><div className="screen-toolbar"><span className="screen-mark"/>Rapportering<span className="screen-context">Denne uken</span></div><div className="screen-body"><span className="screen-eyebrow">SAMLET OVERSIKT</span><div className="report-heading">En god start på mandagen.</div><div className="report-metrics"><span>Markedsføring<b>Oppdatert</b></span><span>Salg<b>Oppdatert</b></span><span>Økonomi<b>Oppdatert</b></span></div><div className="report-plot"><svg viewBox="0 0 300 92" preserveAspectRatio="none"><path d="M0 22H300M0 48H300M0 74H300" stroke="#DDE3DD" strokeWidth="1"/><path d="m0 76 30-12 30 5 30-22 30 8 30-17 30 5 30-18 30 8 30-17 30 4" fill="none" stroke="#315F4B" strokeWidth="2"/></svg></div><div className="screen-foot"><span>Alle kildene. Én rapport.</span><span>Se detaljer →</span></div></div></div>;
  if (kind === 'dealer') return <div className="case-screen" aria-hidden="true"><div className="screen-toolbar"><span className="screen-mark"/>Salgsoversikt<span className="screen-context">Lager · Kunder · Avtaler</span></div><div className="screen-body"><span className="screen-eyebrow">DAGENS ARBEID</span><div className="report-heading">Fra henvendelse til overlevering.</div><div className="dealer-table"><div><span>Bil</span><span>Neste steg</span></div><div><strong>Volvo XC60<small>På lager</small></strong><span>Avtal prøvekjøring</span></div><div><strong>Volkswagen ID.4<small>Reservert</small></strong><span>Send kontrakt</span></div><div><strong>Toyota RAV4<small>Solgt</small></strong><span>Klargjør levering</span></div></div></div></div>;
  if (kind === 'clinic') return <div className="case-screen" aria-hidden="true"><div className="screen-toolbar"><span className="screen-mark"/>Regnskapsassistent<span className="screen-context">Til godkjenning</span></div><div className="screen-body"><span className="screen-eyebrow">BILAGSFLYT</span><div className="report-heading">Forarbeidet er gjort.</div><div className="clinic-row"><span className="clinic-check">✓</span><span>Bilag mottatt<small>Vedlegg hentet fra innboksen</small></span></div><div className="clinic-row"><span className="clinic-check">✓</span><span>Opplysninger kontrollert<small>Forslag til kontering er klart</small></span></div><div className="clinic-approval"><span>Du tar den siste vurderingen.</span><b>Se bilag →</b></div></div></div>;
  return <div className="case-screen screen-website" aria-hidden="true"><div className="screen-toolbar"><span className="screen-mark"/>Nettside<span className="screen-context">Forside · Tjenester · Kontakt</span></div><div className="website-preview"><img src="/assets/footer-bg.jpg" alt="" width="1800" height="1280" loading="lazy"/><span>TYDELIG. RELEVANT. ENKEL.</span><strong>Et godt førsteinntrykk.<br/>Et tydelig neste steg.</strong><span className="website-preview-link">Bli kjent med oss →</span></div></div>;
}
function Cases({ go }) {
  const ref = React.useRef(null);
  const [position, setPosition] = React.useState({ start: true, end: false, progress: 0 });
  const cases = [
    { title: 'Én oversikt for hele byrået.', category: 'Rapportering', page: 'prosjekt:rapportering', tone: 'fjord', kind: 'report' },
    { title: 'Hele bilsalget. I ett system.', category: 'Bruktbilhandel', page: 'prosjekt:bruktbil', tone: 'sand', kind: 'dealer' },
    { title: 'En nettside som gjør jobben sin.', category: 'Nettsider', page: 'prosjekt:nettside', tone: 'dusk', kind: 'website' },
    { title: 'Mindre papirarbeid på legekontoret.', category: 'AI-agenter', page: 'prosjekt:legekontor', tone: 'forest', kind: 'clinic' },
  ];
  React.useEffect(() => {
    const rail = ref.current;
    let frame = 0;
    const measure = () => {
      const max = Math.max(0, rail.scrollWidth - rail.clientWidth);
      const left = Math.max(0, Math.min(max, rail.scrollLeft));
      setPosition({ start: left < 2, end: max - left < 2, progress: max ? left / max : 0 });
    };
    const update = () => { cancelAnimationFrame(frame); frame = requestAnimationFrame(measure); };
    measure(); rail.addEventListener('scroll', update, { passive: true });
    const observer = new ResizeObserver(update); observer.observe(rail);
    return () => { cancelAnimationFrame(frame); rail.removeEventListener('scroll', update); observer.disconnect(); };
  }, []);
  const move = direction => {
    const rail = ref.current;
    const cards = [...rail.children];
    const stops = cards.map(card => card.offsetLeft - cards[0].offsetLeft);
    const target = direction === 'first' ? 0 : direction === 'last' ? rail.scrollWidth - rail.clientWidth : direction > 0 ? stops.find(stop => stop > rail.scrollLeft + 8) ?? rail.scrollWidth - rail.clientWidth : [...stops].reverse().find(stop => stop < rail.scrollLeft - 8) ?? 0;
    rail.scrollTo({ left: target, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  };
  const arrow = <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true"><path d="m9 5 7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>;
  return <section id="prosjekter" className="cases-section" aria-labelledby="cases-title">
    <div className="cases-heading"><div><h2 id="cases-title">En enklere arbeidsdag.<br/>Slik kan det se ut.</h2></div><div className="case-controls"><button type="button" aria-label="Forrige prosjekteksempel" aria-controls="case-rail" disabled={position.start} onClick={() => move(-1)}>{arrow}</button><button type="button" aria-label="Neste prosjekteksempel" aria-controls="case-rail" disabled={position.end} onClick={() => move(1)}>{arrow}</button></div></div>
    <div className="case-window">
    <div ref={ref} id="case-rail" className="case-rail" tabIndex={0} role="region" aria-label="Prosjekteksempler. Bruk piltastene for å bla." onKeyDown={event => {
      if (event.target !== event.currentTarget) return;
      const direction = { ArrowLeft: -1, ArrowRight: 1, Home: 'first', End: 'last' }[event.key];
      if (direction !== undefined) { event.preventDefault(); move(direction); }
    }}>
      {cases.map((item, index) => <RouteLink key={item.kind} go={go} page={item.page} className={'case-card case-tone-' + item.tone}><div className="case-card-top"><span className="case-index">0{index + 1} / {item.category}</span><svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 19 19 5M5 5h14v14" stroke="currentColor" strokeWidth="1.4"/></svg></div><h3>{item.title}</h3><div className="case-art"><CaseVisual kind={item.kind}/></div><div className="case-card-bottom"><span>Utforsk løsningen</span><span aria-hidden="true">→</span></div></RouteLink>)}
    </div>
    </div>
    <div className="cases-footer"><p>Illustrative prosjekter. Muligheter vi kan bygge videre på.</p><div className="case-progress" aria-hidden="true"><span style={{ transform: `translateX(${position.progress * 300}%)` }}/></div><span className="cases-swipe-hint">Sveip for å utforske</span></div>
  </section>;
}
function Team({ go }) {
  return <section id="om-oss" className="container team-section" aria-labelledby="team-title"><div className="team-copy"><h2 id="team-title">To mennesker.<br/>Tett på bedriften din.</h2><p>Vi er Ulrik og Eljar. Vi lærer hvordan dere jobber, bygger sammen med dere og følger opp.</p><RouteLink go={go} page="kontakt" className="text-link">Bli kjent med oss <span aria-hidden="true">→</span></RouteLink></div><div className="team-portraits"><figure><img src="/assets/design/portraits/ulrik-rosmael-bue-blob-hoyre.webp" width="240" height="240" alt="Ulrik Rosmæl" loading="lazy"/><figcaption>Ulrik Rosmæl<span>Trondheim</span></figcaption></figure><figure><img src="/assets/design/portraits/eljar-skjorholm-bue-blob-venstre.webp" width="240" height="240" alt="Eljar Skjørholm" loading="lazy"/><figcaption>Eljar Skjørholm<span>Singapore</span></figcaption></figure></div></section>;
}
function HomePage({ go }) {
  const root = React.useRef(null);
  React.useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (motion.matches || !('IntersectionObserver' in window)) return;
    const sections = root.current.querySelectorAll('.cases-heading, .levels-heading, .service-levels, .team-section');
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.removeAttribute('data-reveal-pending'); observer.unobserve(entry.target); }
    }), { threshold: .08 });
    sections.forEach(section => {
      if (section.getBoundingClientRect().top > window.innerHeight) { section.setAttribute('data-reveal-pending', ''); observer.observe(section); }
    });
    const showAll = () => { if (motion.matches) { sections.forEach(section => section.removeAttribute('data-reveal-pending')); observer.disconnect(); } };
    motion.addEventListener('change', showAll);
    return () => { observer.disconnect(); motion.removeEventListener('change', showAll); };
  }, []);
  return <div ref={root} className="home-page"><Hero go={go}/><ClientProof/><Cases go={go}/><ServicePanels go={go}/><Team go={go}/></div>;
}
