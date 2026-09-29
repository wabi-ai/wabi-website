const wabiWrap = { width: '100%', maxWidth: 1280, margin: '0 auto', padding: '0 var(--page-gutter)' };
function RouteLink({ page = 'hjem', go, children, className, onNavigate, ...props }) {
  return <a href={routeHref(page)} className={className} {...props} onClick={e => {
    if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault(); onNavigate?.(); go(page);
  }}>{children}</a>;
}
function SiteHeader({ page, go, overHero = page === 'hjem' }) {
  const { WabiMark, Icon } = window.WabiDesignSystem_66a19c;
  const [mobile, setMobile] = React.useState(false);
  const [open, setOpen] = React.useState(null);
  const [compact, setCompact] = React.useState(false);
  const [preview, setPreview] = React.useState('agenter');
  const ref = React.useRef(null), trigger = React.useRef(null), menuTriggers = React.useRef({}), leaveTimer = React.useRef(null);
  const services = [...window.WABI_WEB.services, window.WABI_WEB.kurs];
  const captions = {
    agenter: ['En ekstra hånd i arbeidsdagen.', 'En agent som følger opp oppgaven, fra start til slutt.'],
    automatisering: ['La rutinen gå av seg selv.', 'Koble sammen verktøyene og få flyt i arbeidet.'],
    programvare: ['Verktøy som passer måten dere jobber på.', 'Vi bygger det dere mangler, og rydder i det dere har.'],
    kurs: ['Lær AI med egne oppgaver.', 'Praktiske kurs som gjør det enklere å komme i gang.'],
  };
  const cancelLeave = () => { clearTimeout(leaveTimer.current); };
  const close = () => { cancelLeave(); setMobile(false); setOpen(null); };
  const hover = (event, name) => {
    if (event.pointerType !== 'mouse' || !window.matchMedia('(min-width: 861px) and (hover: hover)').matches) return;
    cancelLeave(); setOpen(name);
  };
  const leave = event => {
    if (event.pointerType !== 'mouse' || mobile) return;
    cancelLeave(); leaveTimer.current = setTimeout(() => setOpen(null), 160);
  };
  const toggle = (event, name) => {
    cancelLeave();
    const hoverClick = event.detail > 0 && window.matchMedia('(min-width: 861px) and (hover: hover) and (pointer: fine)').matches;
    setOpen(current => hoverClick ? name : current === name ? null : name);
  };
  const enterMenu = (event, name) => {
    if (event.key !== 'ArrowDown') return;
    event.preventDefault(); cancelLeave(); setOpen(name);
    requestAnimationFrame(() => ref.current?.querySelector(`#${name}-navigation a`)?.focus());
  };
  React.useEffect(() => {
    const scroll = () => setCompact(previous => window.scrollY > (previous ? 32 : 72));
    scroll(); window.addEventListener('scroll', scroll, { passive: true });
    const desktop = window.matchMedia('(min-width: 861px)');
    const resize = () => { setMobile(false); setOpen(null); };
    desktop.addEventListener('change', resize);
    return () => { window.removeEventListener('scroll', scroll); desktop.removeEventListener('change', resize); cancelLeave(); };
  }, []);
  React.useEffect(() => {
    const click = event => { if (!ref.current?.contains(event.target)) close(); };
    const key = event => {
      if (event.key !== 'Escape' || (!mobile && !open)) return;
      event.preventDefault();
      if (mobile) { close(); trigger.current?.focus(); }
      else { cancelLeave(); setOpen(null); menuTriggers.current[open]?.focus(); }
    };
    document.addEventListener('pointerdown', click); document.addEventListener('keydown', key);
    return () => { document.removeEventListener('pointerdown', click); document.removeEventListener('keydown', key); };
  }, [mobile, open]);
  React.useEffect(close, [page]);
  const arrow = <svg aria-hidden="true" width="12" height="12" viewBox="0 0 12 12"><path d="m3 4 3 3 3-3" fill="none" stroke="currentColor" strokeWidth="1.5"/></svg>;
  const menuButton = (name, label) => <button ref={node => { menuTriggers.current[name] = node; }} className="nav-link" aria-expanded={open === name} aria-controls={`${name}-navigation`} onClick={event => toggle(event, name)} onKeyDown={event => enterMenu(event, name)}>{label}{arrow}</button>;
  return <header className={'site-header' + (compact ? ' is-compact' : overHero ? ' is-over-hero' : '')} ref={ref} onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) close(); }}>
    <div className="header-inner" onPointerEnter={cancelLeave} onPointerLeave={leave}>
      <RouteLink go={go} onNavigate={close} className="brand-link" aria-label="Wabi — til forsiden"><WabiMark width={40} tone={overHero && !compact ? 'white' : 'black'}/></RouteLink>
      <button ref={trigger} className="menu-toggle" aria-expanded={mobile} aria-controls="site-navigation" onClick={() => { setMobile(!mobile); setOpen(null); }}><span>{mobile ? 'Lukk' : 'Meny'}</span><span className={'menu-symbol' + (mobile ? ' is-open' : '')} aria-hidden="true"><i/><i/></span></button>
      <nav id="site-navigation" className={'site-nav' + (mobile ? ' is-open' : '')} aria-label="Hovedmeny">
        <div className="nav-links">
        <div className="nav-disclosure" onPointerEnter={event => hover(event, 'services')}>
          {menuButton('services', 'Hva vi gjør')}
          <div className="nav-panel nav-services" id="services-navigation" hidden={open !== 'services'}>
            <div className="nav-service-list">{services.map(service => <RouteLink key={service.id} go={go} page={'tjeneste:' + service.id} onNavigate={close} className={'nav-service-item' + (preview === service.id ? ' is-previewed' : '')} aria-current={page === 'tjeneste:' + service.id ? 'page' : undefined} onPointerEnter={() => setPreview(service.id)} onFocus={() => setPreview(service.id)}><span><strong>{service.id === 'programvare' ? 'Verktøy og programvare' : service.title}</strong><small>{service.short}</small></span><span className="nav-item-arrow" aria-hidden="true">↗</span></RouteLink>)}</div>
            <div className="nav-previews" aria-hidden="true">{services.map(service => <div key={service.id} className={'nav-preview nav-art-' + service.tone + (preview === service.id ? ' is-active' : '')}>
              <img src={'/assets/design/blob/wabi-blob' + (service.tone === 'forest' ? '' : '-' + service.tone) + '.webp'} alt="" width="800" height="800" loading="lazy"/>
              <div className="nav-preview-copy"><Icon name={service.icon} size={40} color="var(--wabi-oat)" accent="var(--wabi-sage)"/><span className="nav-preview-title">{captions[service.id][0]}</span><p>{captions[service.id][1]}</p></div>
            </div>)}</div>
          </div>
        </div>
        <div className="nav-disclosure" onPointerEnter={event => hover(event, 'projects')}>
          {menuButton('projects', 'Prosjekter')}
          <div className="nav-panel nav-projects" id="projects-navigation" hidden={open !== 'projects'}>
            <div className="nav-project-grid">
              <RouteLink go={go} page="prosjekt:rapportering" onNavigate={close} className="nav-project-card nav-art-fjord"><img src="/assets/design/blob/wabi-blob-fjord.webp" alt="" width="800" height="800" loading="lazy"/><span className="nav-project-label">1 / Rapportering <span aria-hidden="true">↗</span></span><span className="nav-project-copy"><strong>Fra tall til oversikt.</strong><small>Se hvordan en agent kan samle ukens rapport.</small></span></RouteLink>
              <RouteLink go={go} page="prosjekt:bruktbil" onNavigate={close} className="nav-project-card nav-art-ember"><img src="/assets/design/blob/wabi-blob-ember.webp" alt="" width="800" height="800" loading="lazy"/><span className="nav-project-label">2 / Programvare <span aria-hidden="true">↗</span></span><span className="nav-project-copy"><strong>En enklere salgsdag.</strong><small>Utforsk et verktøy laget for bruktbilforhandleren.</small></span></RouteLink>
            </div>
            <div className="nav-project-footer"><span>Illustrative eksempler</span><RouteLink go={go} page="hjem#prosjekter" onNavigate={close}>Se alle prosjekter <span aria-hidden="true">↗</span></RouteLink></div>
          </div>
        </div>
        <RouteLink go={go} page="kartlegging" className="nav-link" onPointerEnter={event => hover(event, null)} onFocus={() => { cancelLeave(); setOpen(null); }} onNavigate={close} aria-current={page === 'kartlegging' ? 'page' : undefined}>Kartlegging</RouteLink>
        <RouteLink go={go} page="hjem#om-oss" className="nav-link" onPointerEnter={event => hover(event, null)} onFocus={() => { cancelLeave(); setOpen(null); }} onNavigate={close}>Om oss</RouteLink>
        </div>
        <RouteLink go={go} page="kontakt" className="button nav-contact" onPointerEnter={event => hover(event, null)} onFocus={() => { cancelLeave(); setOpen(null); }} onNavigate={close}>La oss ta en prat <span aria-hidden="true">↗</span></RouteLink>
      </nav>
    </div>
  </header>;
}
