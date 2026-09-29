function SiteFooter({ go, page = 'hjem' }) {
  const { WabiMark } = window.WabiDesignSystem_66a19c;
  const home = page === 'hjem';
  const compact = page === 'kontakt' || page === 'kartlegging';
  const variant = home ? 'home' : compact ? 'compact' : 'editorial';
  const tones = {
    'tjeneste:agenter': 'fjord', 'tjeneste:automatisering': 'ember',
    'tjeneste:programvare': 'sand', 'tjeneste:kurs': 'forest',
    'prosjekt:rapportering': 'forest', 'prosjekt:bruktbil': 'sand',
    'prosjekt:legekontor': 'fjord', 'prosjekt:nettside': 'dusk'
  };
  return <footer className="wabi-outro" id="site-footer" data-variant={variant} data-tone={tones[page] || 'forest'}>
    {home && <div className="wabi-outro-bg" aria-hidden="true"/>}
    {home && <section className="wabi-outro-cta" aria-labelledby="footer-invitation-title">
      <span className="wabi-outro-eyebrow">Kontakt oss</span>
      <h2 id="footer-invitation-title">Finn AI-mulighetene dine</h2>
      <p>Ta med en arbeidsflyt, en avdeling, hele selskapet, eller bare en magefølelse. Vi forteller deg hvor AI passer, hvor det ikke passer, og hva som er verdt å gjøre først.</p>
      <div className="wabi-outro-actions">
        <RouteLink go={go} page="kontakt" className="wabi-footer-button">Få en AI-vurdering <span aria-hidden="true">→</span></RouteLink>
        <a href="#ai-input" className="wabi-footer-button wabi-footer-button-secondary">Meld meg på nyhetsbrevet <span aria-hidden="true">↓</span></a>
      </div>
    </section>}
    <div className="wabi-footer-card">
      <section className="wabi-footer-news" id="ai-input" aria-label="Nyhetsbrevet AI-input">
        <div className="wabi-footer-news-intro">
          <a href="https://aiinput.no" target="_blank" rel="noopener noreferrer"><img src="/assets/Aiinput.svg" alt="AI-input" width="150" height="30" loading="lazy"/></a>
          <p>{home ? 'For deg som vil holde oversikt over AI uten å drukne i støy. Nye verktøy og utviklinger innen AI-teknologi, forklart enkelt på norsk, oversiktlig og uten hype.' : 'Nye verktøy og praktiske råd om AI. Forklart enkelt på norsk, uten hype.'}</p>
        </div>
        <div className="wabi-footer-news-signup">
        <form action="https://app.kit.com/forms/9612918/subscriptions" method="post" target="_blank" rel="noopener noreferrer" aria-label="Meld deg på AI-input">
          <input type="text" name="first_name" placeholder="Fornavn" autoComplete="given-name" aria-label="Fornavn" required/>
          <input type="email" name="email_address" placeholder="din@epost.no" autoComplete="email" aria-label="E-post" required/>
          <button type="submit">Meld på <span aria-hidden="true">→</span></button>
        </form>
        <p className="wabi-footer-note">Påmelding åpnes hos Kit. Du kan melde deg av når som helst.</p>
        </div>
      </section>
      <div className="wabi-footer-grid">
        <div className="wabi-footer-brand">
          <RouteLink go={go} page="hjem" aria-label="Wabi — til forsiden"><WabiMark width={40}/></RouteLink>
          <p>Praktisk AI for nordiske bedrifter. Bygget lag for lag rundt måten dere faktisk arbeider på.</p>
        </div>
        <div><h2>Tjenester</h2><RouteLink go={go} page="tjeneste:agenter">AI-agenter</RouteLink><RouteLink go={go} page="tjeneste:automatisering">Automatisering</RouteLink><RouteLink go={go} page="tjeneste:programvare">Verktøy og programvare</RouteLink></div>
        <div><h2>Utforsk</h2><RouteLink go={go} page="hjem#prosjekter">Prosjekter</RouteLink><RouteLink go={go} page="kartlegging">AI-kartlegging</RouteLink><RouteLink go={go} page="tjeneste:kurs">Kurs</RouteLink></div>
        <div className="wabi-footer-contact"><h2>Kontakt</h2>
          <div className="wabi-footer-person">
            <RouteLink go={go} page="kontakt" className="wabi-footer-portrait" aria-label="Book en prat med Ulrik"><img src="/assets/design/portraits/ulrik-rosmael-bue-blob-hoyre.webp" width="56" height="56" alt="" loading="lazy"/></RouteLink>
            <div><strong>Ulrik Rosmæl</strong><a href="mailto:ulrik@wabi.no">ulrik@wabi.no</a></div>
          </div>
          <a href="mailto:admin@wabi.no">admin@wabi.no</a>
        </div>
      </div>
      <div className="wabi-footer-bottom">
        <span>© {new Date().getFullYear()} Wabi</span><span>Trondheim · Singapore</span>
        <a href="https://www.linkedin.com/company/wabino/" target="_blank" rel="noopener noreferrer" aria-label="Wabi på LinkedIn"><svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM10 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.3-.02-2.96-1.8-2.96-1.8 0-2.08 1.4-2.08 2.86V21h-4z"/></svg></a>
      </div>
    </div>
  </footer>;
}
