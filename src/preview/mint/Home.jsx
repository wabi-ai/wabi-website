const mintCases = [
  { id: 'rapportering', label: 'Performance-byrå', category: 'Rapportering', title: 'Fra fire plattformer til én god oversikt.', text: 'Tall fra annonsekanalene samles i ett dashbord. AI forklarer hva som har endret seg, så teamet kan bruke mer tid på kundene.', tone: 'forest', details: ['Meta, Google og Analytics', 'AI-oppsummering på norsk'], visual: 'report' },
  { id: 'bruktbil', label: 'Bilforhandler', category: 'Verktøy og programvare', title: 'En enklere arbeidsdag. Fra innkjøp til solgt.', text: 'Biler, kunder, annonser og avtaler samlet i et fagsystem som følger måten forhandleren jobber på.', tone: 'sand', details: ['Én samlet arbeidsflate', 'Bygget rundt salgsprosessen'], visual: 'dealer' },
  { id: 'legekontor', label: 'Legekontor', category: 'AI-agenter', title: 'La bilagene finne veien selv.', text: 'En agent leser bilag, sorterer innholdet og gjør klart et forslag. De ansatte kontrollerer og godkjenner.', tone: 'fjord', details: ['Fra innboks til regnskap', 'Mennesket godkjenner'], visual: 'clinic' },
  { id: 'nettside', label: 'Nettside', category: 'Nettsider med AI', title: 'Fra idé til en nettside som jobber for dere.', text: 'En tydelig nettside, bygget, hostet og fulgt opp med agenter. Et utgangspunkt som kan vokse med bedriften.', tone: 'dusk', details: ['Design, innhold og utvikling', 'Videre drift og forbedring'], visual: 'website' },
];

function MintArrow({ diagonal = false }) {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d={diagonal ? 'M6 18 18 6M6 6h12v12' : 'M4 12h15m-6-6 6 6-6 6'} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}

function MintLink({ go, page, children, secondary = false, className = '' }) {
  return <RouteLink go={go} page={page} className={'mint-button ' + (secondary ? 'mint-button-secondary ' : '') + className}>{children}<MintArrow/></RouteLink>;
}

function MintReport({ compact = false }) {
  return <div className={'mint-report ' + (compact ? 'is-mini' : '')} aria-label="Illustrasjon av rapportering med eksempeldata">
    <div className="mint-report-bar"><span className="mint-report-mark">w<span> / </span>innsikt</span><span className="mint-demo-label">Eksempelvisning</span></div>
    <div className="mint-report-body">
      <aside className="mint-report-nav"><span className="is-selected">◈ &nbsp; Oversikt</span><span>◷ &nbsp; Rapporter</span><span>↗ &nbsp; Kampanjer</span><span>⊞ &nbsp; Datakilder</span><div className="mint-report-person"><span>UR</span> Ditt arbeidsrom</div></aside>
      <div className="mint-report-main"><div className="mint-report-heading"><div><span className="mint-overline">DIN ARBEIDSDAG, SAMLET</span><h3>God oversikt. Mindre arbeid.</h3></div><span className="mint-status"><i/> Oppdatert</span></div>
        <div className="mint-metrics"><div><small>Datakilder</small><strong>4 <span>koblet sammen</span></strong></div><div><small>Ukens rapport</small><strong>Klar <span>til gjennomgang</span></strong></div><div><small>Neste steg</small><strong>Du <span>godkjenner</span></strong></div></div>
        <div className="mint-report-panels"><div className="mint-chart"><div><b>Utvikling gjennom uken</b><span>Alle kanaler ↗</span></div><svg viewBox="0 0 460 150" preserveAspectRatio="none" role="img" aria-label="Illustrativ graf over ukens utvikling"><defs><linearGradient id={compact ? 'mint-chart-mini' : 'mint-chart-hero'} x1="0" y1="0" x2="0" y2="1"><stop stopColor="#80A778" stopOpacity=".3"/><stop offset="1" stopColor="#80A778" stopOpacity="0"/></linearGradient></defs><path className="mint-chart-grid" d="M0 25H460M0 65H460M0 105H460M0 145H460"/><path d="M0 126C30 126 35 96 65 103S105 111 135 78S175 104 205 72S242 80 275 43S315 67 345 37S400 56 460 10V150H0Z" fill={'url(#'+(compact ? 'mint-chart-mini' : 'mint-chart-hero')+')'}/><path d="M0 126C30 126 35 96 65 103S105 111 135 78S175 104 205 72S242 80 275 43S315 67 345 37S400 56 460 10" fill="none" stroke="#42734C" strokeWidth="2.5"/></svg><div className="mint-chart-days"><span>Man</span><span>Tir</span><span>Ons</span><span>Tor</span><span>Fre</span></div></div>
        <div className="mint-insight"><span className="mint-overline">✳ WABI OPPSUMMERER</span><b>Det viktigste, først.</b><p>Her får teamet en forklaring på utviklingen og et forslag til hva dere bør se nærmere på.</p><span className="mint-insight-foot">Kilder følger med <span>↗</span></span></div></div>
      </div>
    </div>
  </div>;
}

function MintCaseVisual({ kind }) {
  if (kind === 'report') return <MintReport compact/>;
  if (kind === 'dealer') return <div className="mint-demo-window"><div className="mint-window-top"><b>Biloversikt</b><span>+ Legg til bil</span></div><div className="mint-demo-title">Hele bilparken.<br/>Én arbeidsflate.</div><div className="mint-car-row"><div className="mint-car-drawing" aria-hidden="true"><svg viewBox="0 0 260 100"><path d="M35 61 49 39Q52 34 62 34h88q12 0 24 14l14 13 37 8q9 2 9 12v5H22V73q0-9 13-12Z" fill="#C9CBB9"/><path d="m62 40-14 21h122l-20-21Z" fill="#F5F4EC"/><circle cx="65" cy="83" r="17" fill="#394235"/><circle cx="65" cy="83" r="8" fill="#D7DACD"/><circle cx="191" cy="83" r="17" fill="#394235"/><circle cx="191" cy="83" r="8" fill="#D7DACD"/></svg></div><div><b>Klar for neste eier</b><span>Dokumenter samlet</span></div><span className="mint-status">Til salgs</span></div><div className="mint-demo-steps"><span>Innkjøp</span><span>Klargjøring</span><span className="is-current">Annonsering</span><span>Solgt</span></div><div className="mint-demo-caption">Illustrativ arbeidsflyt</div></div>;
  if (kind === 'clinic') return <div className="mint-demo-window"><div className="mint-window-top"><b>Regnskapsassistent</b><span className="mint-status"><i/> Aktiv</span></div><div className="mint-demo-title">Fra bilag til<br/>klart forslag.</div><div className="mint-document"><span className="mint-document-icon">▤</span><div><b>Leverandørfaktura.pdf</b><span>Lest og kategorisert</span></div><span>✓</span></div><div className="mint-approval"><span>✳</span><div><b>Klart for en siste sjekk</b><p>Kontroller forslaget før det føres.</p></div><span>→</span></div><div className="mint-demo-caption">Illustrativ arbeidsflyt · mennesket godkjenner</div></div>;
  return <div className="mint-demo-window mint-site-demo"><div className="mint-window-top"><b>Din bedrift</b><span>Om oss &nbsp; Kontakt ↗</span></div><div className="mint-site-orb"/><div className="mint-demo-title">En god idé.<br/>Et tydelig sted<br/>å begynne.</div><span className="mint-site-pill">La oss ta en prat ↗</span><div className="mint-demo-caption">Illustrativ nettside</div></div>;
}

function MintHero({ go }) {
  return <section className="mint-hero">
    <img className="mint-hero-blob" src="../../assets/blob/wabi-blob.webp" alt="" aria-hidden="true"/>
    <div className="mint-hero-copy"><span className="mint-eyebrow"><i/> PRAKTISK AI FOR NORDISKE BEDRIFTER</span><h1>Vi finner ut hvor AI<br className="mint-desktop-break"/> faktisk er verdt å bruke.</h1><p>Så bygger vi det, setter det i drift,<br/>og følger det videre. Sammen med dere.</p><div className="mint-actions"><MintLink go={go} page="kartlegging">Finn mulighetene deres</MintLink><MintLink go={go} page="kontakt" secondary>Book en prat</MintLink></div></div>
  </section>;
}

function MintCompanies() {
  return <div className="mint-company-section"><ToolRow/></div>;
}

function MintCases({ go }) {
  const [active, setActive] = React.useState(0);
  const caseItem = mintCases[active];
  const tabRefs = React.useRef([]);
  const switchWithKey = (event, index) => {
    let next = index;
    if (event.key === 'ArrowRight') next = (index + 1) % mintCases.length;
    else if (event.key === 'ArrowLeft') next = (index + mintCases.length - 1) % mintCases.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = mintCases.length - 1;
    else return;
    event.preventDefault(); setActive(next); tabRefs.current[next]?.focus();
  };
  return <section className="mint-container mint-section mint-cases" id="prosjekter" aria-labelledby="mint-cases-title"><div className="mint-section-heading"><div><span className="mint-eyebrow">FRA MULIGHET TIL HVERDAG</span><h2 id="mint-cases-title">Ulike bedrifter.<br/>Helt konkrete muligheter.</h2></div><p>AI gir mest verdi når den løser en faktisk oppgave. Her er noen eksempler på hvordan det kan se ut.</p></div>
    <div className="mint-case-tabs" role="tablist" aria-label="Utforsk prosjekteksempler">{mintCases.map((item, index) => <button key={item.id} ref={el => tabRefs.current[index] = el} role="tab" id={'mint-tab-'+item.id} aria-controls="mint-case-panel" aria-selected={active === index} tabIndex={active === index ? 0 : -1} onKeyDown={e => switchWithKey(e,index)} onClick={() => setActive(index)}><span className="mint-tab-number">{index+1}</span>{item.label}<MintArrow diagonal/></button>)}</div>
    <div id="mint-case-panel" role="tabpanel" aria-labelledby={'mint-tab-'+caseItem.id} tabIndex={0} className={'mint-feature mint-tone-'+caseItem.tone}>
      <img src={'../../assets/blob/wabi-blob'+(caseItem.tone === 'forest' ? '' : '-'+caseItem.tone)+'.webp'} className="mint-feature-blob" alt="" aria-hidden="true" loading="lazy"/>
      <div className="mint-feature-copy" key={caseItem.id+'-copy'}><span className="mint-eyebrow">{caseItem.category}</span><h3>{caseItem.title}</h3><p>{caseItem.text}</p><RouteLink go={go} page={'prosjekt:'+caseItem.id} className="mint-story-link">Utforsk prosjektet <MintArrow/></RouteLink><div className="mint-feature-details">{caseItem.details.map(detail => <span key={detail}>{detail}</span>)}</div></div>
      <div className="mint-feature-visual" key={caseItem.id+'-visual'}><MintCaseVisual kind={caseItem.visual}/></div>
    </div>
    <div className="mint-case-cards">{mintCases.slice(1).map(item => <RouteLink key={item.id} go={go} page={'prosjekt:'+item.id} className="mint-case-card"><div className={'mint-case-art mint-tone-'+item.tone}><img src={'../../assets/blob/wabi-blob-'+item.tone+'.webp'} alt="" loading="lazy"/><span>{item.label}</span><div className="mint-card-symbol" aria-hidden="true">{item.visual === 'dealer' ? '↗' : item.visual === 'clinic' ? '✳' : '↗'}</div><span className="mint-card-round"><MintArrow diagonal/></span></div><span className="mint-overline">{item.category}</span><h3>{item.title}</h3><span className="mint-card-link">Se eksempelet <MintArrow/></span></RouteLink>)}</div>
  </section>;
}

function MintServices({ go }) {
  const { BlobPanel, WabiMark, Icon, ToolLogo } = window.WabiDesignSystem_66a19c;
  return <section className="mint-services mint-section" aria-labelledby="mint-services-title"><div className="mint-container">
    <div className="mint-section-heading"><div><span className="mint-eyebrow">DET VI BYGGER</span><h2 id="mint-services-title">Riktig verktøy.<br/>Til riktig oppgave.</h2></div><p>Noen ganger trenger dere en agent. Andre ganger en enklere arbeidsflyt, et eget verktøy eller noen som viser vei.</p></div>
    <div className="mint-service-panels">{window.WABI_WEB.services.map(service => <BlobPanel key={service.id} blobBase="../../assets/blob/" tone={service.tone} preset={service.preset} protect="46%" minHeight={620} href={'#tjeneste:'+service.id} onClick={event => { event.preventDefault(); go('tjeneste:'+service.id); }}>
      <WabiMark tone="white" width={26}/>
      <h3>{service.title}</h3>
      <p>{service.short}</p>
      <span className="mint-panel-button">Se hvordan</span>
    </BlobPanel>)}</div>
    <div className="mint-course-panel"><BlobPanel blobBase="../../assets/blob/" tone="forest" ground="paper" layout="left" preset="k1" protect="66%" contentWidth={650} minHeight={400} style={{padding: '48px'}}>
      <div className="mint-course-label"><Icon name="workshop" size={40}/><span className="mint-eyebrow">Kurs</span></div>
      <h3>Kurs i verktøyet dere bruker</h3>
      <p>Ett kurs, ett verktøy: Claude, ChatGPT eller Gemini, alt etter hva dere bruker eller ønsker å bruke. Vi lærer først hvordan avdelingen jobber, og bygger kurset på oppgaver dere faktisk har. Ingen generiske kurs.</p>
      <div className="mint-course-tools">{['Claude','ChatGPT','Codex','Gemini'].map(name => <span key={name}><ToolLogo name={name} size={22}/>{name}</span>)}</div>
      <div className="mint-course-actions"><MintLink go={go} page="tjeneste:kurs">Se hvordan</MintLink><MintLink go={go} page="kontakt" secondary>Book en prat</MintLink></div>
    </BlobPanel></div>
  </div></section>;
}

function MintProcess({ go }) {
  return <section className="mint-container mint-section mint-process"><div className="mint-process-intro"><span className="mint-eyebrow">ET GODT STED Å STARTE</span><h2>Først forstår vi<br/>arbeidsdagen deres.</h2><p>Vi setter oss ned med dere og finner de tre–fem oppgavene der AI er verdt å bruke. Så starter vi med én som betyr noe.</p><MintLink go={go} page="kartlegging">Start kartleggingen</MintLink></div><ol className="mint-process-list">{[['Vi finner mulighetene','Hva tar tid, hva gjentar seg, og hvor stopper arbeidet opp? Vi ser på oppgavene sammen med dem som gjør dem.'],['Vi bygger det sammen','En konkret løsning i verktøyene dere allerede bruker. Testet med egne oppgaver og folkene som skal bruke den.'],['Vi følger det videre','Løsningen settes i drift og forbedres underveis. Dere eier resultatet. Vi er med når behovene endrer seg.']].map(([title,text],i)=><li key={title}><span>{i+1}</span><div><h3>{title}</h3><p>{text}</p></div></li>)}</ol></section>;
}

function MintTeam({ go }) {
  return <section id="om-oss" className="mint-container mint-team"><div className="mint-team-portraits"><img src="../../assets/portraits/ulrik-rosmael-bue-blob-hoyre.webp" alt="Ulrik Rosmæl" width="240" height="280" loading="lazy"/><img src="../../assets/portraits/eljar-skjorholm-bue-blob-venstre.webp" alt="Eljar Skjørholm" width="240" height="280" loading="lazy"/></div><div className="mint-team-copy"><span className="mint-eyebrow">TRØNDELAG ↔ SINGAPORE</span><h2>Teknologien er ny.<br/>Samarbeidet er personlig.</h2><p>Vi setter oss ned i bedriften din. Vi bygger sammen med dere, forklarer underveis og følger det videre.</p><MintLink go={go} page="kontakt" secondary>Møt Ulrik og Eljar</MintLink></div></section>;
}

function HomePage({ go }) {
  return <div className="mint-home"><MintHero go={go}/><MintCompanies/><MintCases go={go}/><MintServices go={go}/><MintProcess go={go}/><MintGuides/><MintTeam go={go}/></div>;
}
Object.assign(window, { HomePage });
