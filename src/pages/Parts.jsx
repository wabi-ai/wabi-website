const WB = '/assets/design/blob/wabi-blob.webp';
const WBB = '/assets/design/blob/';
const svc = id => id === 'kurs' ? window.WABI_WEB.kurs : window.WABI_WEB.services.find(s => s.id === id);
const wabiText = {
  h2: { margin: 0, fontWeight: 400, fontSize: 'clamp(32px, 4vw, 52px)', lineHeight: 1.05, letterSpacing: '-0.03em', color: 'var(--wabi-evergreen)', textWrap: 'balance' },
  lead: { margin: 0, fontSize: 18, lineHeight: 1.6, color: 'var(--wabi-forest)', maxWidth: 620, textWrap: 'pretty' },
  h3: { margin: 0, fontWeight: 700, fontSize: 20, lineHeight: 1.3, letterSpacing: '-0.01em', color: 'var(--wabi-forest)' },
  p: { margin: 0, fontSize: 15, lineHeight: 1.6, color: 'var(--wabi-ink)', textWrap: 'pretty' },
};
function ServiceHero({ id, eyebrow, title, lead, go }) {
  const { BlobPanel, Button, Icon } = window.WabiDesignSystem_66a19c;
  const S = svc(id);
  return <section style={{ ...wabiWrap, paddingTop: 16 }}>
    <BlobPanel blobBase={WBB} tone={S.tone} layout="left" preset={S.hero} protect="64%" contentWidth={620} minHeight={520} style={{ padding: '56px 56px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}><Icon name={S.icon} size={40} color="#F4F1E7" accent="var(--blob-panel-sub)"/><span className="wabi-eyebrow" style={{ color: 'var(--blob-panel-sub)' }}>{eyebrow}</span></div>
      <h1 style={{ margin: 0, fontWeight: 400, fontSize: 'clamp(40px, 5vw, 64px)', lineHeight: 1.02, letterSpacing: '-0.035em', textWrap: 'balance' }}>{title}</h1>
      <p style={{ margin: 0, fontSize: 17, lineHeight: 1.6, color: 'var(--blob-panel-sub)', textWrap: 'pretty', maxWidth: 540 }}>{lead}</p>
      <div style={{ display: 'flex', gap: 12, marginTop: 8, flexWrap: 'wrap' }}>
        <Button variant="secondary" onClick={() => go('kontakt')}>Book en prat</Button>
        <Button variant="secondary" onClick={() => go('kartlegging')}>Start med kartlegging</Button>
      </div>
    </BlobPanel>
  </section>;
}
function Sec({ eyebrow, title, lead, children, top = 120 }) {
  return <section style={{ ...wabiWrap, paddingTop: top }}>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 48, maxWidth: 760 }}>
      {eyebrow && <div className="wabi-eyebrow">{eyebrow}</div>}
      <h2 style={wabiText.h2}>{title}</h2>
      {lead && <p style={wabiText.lead}>{lead}</p>}
    </div>
    {children}
  </section>;
}
function Grid({ min = 240, gap = 16, children, style }) {
  return <div style={{ display: 'grid', gridTemplateColumns: `repeat(auto-fit, minmax(min(100%, ${min}px), 1fr))`, gap, ...style }}>{children}</div>;
}
const NODE_KINDS = {
  trigger: ['var(--wabi-raised)', 'var(--wabi-outline)', 'Når', 'epost'],
  step: ['var(--wabi-card)', 'var(--wabi-outline)', 'Gjør', 'pil'],
  rule: ['var(--wabi-card)', 'var(--wabi-outline)', 'Regel', 'justering'],
  ai: ['var(--wabi-tint)', 'var(--wabi-outline-tint)', 'AI-steg', 'ai'],
  human: ['var(--wabi-raised)', 'var(--wabi-moss)', 'Menneske', 'menneske'],
  done: ['var(--wabi-moss)', 'var(--wabi-moss)', 'Ferdig', 'godkjent'],
};
function Node({ kind = 'step', tag, icon, label, text, active, onClick }) {
  const { Icon } = window.WabiDesignSystem_66a19c;
  const K = NODE_KINDS[kind];
  const dark = kind === 'done';
  return <div onClick={onClick} style={{ background: K[0], border: '1px solid ' + K[1], boxShadow: active ? '0 0 0 2px var(--wabi-moss)' : 'none', borderRadius: 12, padding: 20, display: 'flex', flexDirection: 'column', gap: 10, minWidth: 0, cursor: onClick ? 'pointer' : 'default', transition: 'box-shadow 200ms' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 8 }}>
      <span className="wabi-eyebrow" style={{ color: dark ? 'var(--wabi-sage)' : 'var(--wabi-moss)' }}>{tag || K[2]}</span>
      <Icon name={icon || K[3]} size={32} color={dark ? '#F4F1E7' : undefined} accent={dark ? '#CFE0D4' : undefined}/>
    </div>
    <div style={{ fontWeight: 700, fontSize: 16, lineHeight: 1.35, color: dark ? 'var(--wabi-oat)' : 'var(--wabi-forest)', textWrap: 'balance' }}>{label}</div>
    {text && <div style={{ fontSize: 13, lineHeight: 1.5, color: dark ? 'var(--wabi-sage)' : 'var(--wabi-ink)', textWrap: 'pretty' }}>{text}</div>}
  </div>;
}
function Flow({ nodes }) {
  return <div className="flow" style={{ ['--n']: nodes.length }}>
    {nodes.map((x, i) => <React.Fragment key={i}><div className="flow-node"><Node {...x}/></div>{i < nodes.length - 1 && <div aria-hidden="true" className="flow-link"></div>}</React.Fragment>)}
  </div>;
}
function CtaBand({ id, title, text, go }) {
  const { BlobPanel, Button } = window.WabiDesignSystem_66a19c;
  const S = svc(id);
  return <section style={{ ...wabiWrap, paddingTop: 120 }}>
    <BlobPanel blobBase={WBB} tone={S.tone} layout="left" preset={S.cta} protect="62%" contentWidth={560} minHeight={360} style={{ padding: '48px 56px' }}>
      <h2 style={{ margin: 0, fontWeight: 400, fontSize: 40, lineHeight: 1.08, letterSpacing: '-0.03em', textWrap: 'balance' }}>{title}</h2>
      <p style={{ margin: 0, fontSize: 16, lineHeight: 1.6, color: 'var(--blob-panel-sub)', textWrap: 'pretty' }}>{text}</p>
      <div style={{ display: 'flex', gap: 12, marginTop: 8, flexWrap: 'wrap' }}>
        <Button variant="secondary" onClick={() => go('kontakt')}>Book en prat</Button>
        <Button variant="secondary" onClick={() => go('kartlegging')}>Ta kartleggingen</Button>
      </div>
    </BlobPanel>
  </section>;
}
function OtherServices({ current, go }) {
  const { BlobPanel } = window.WabiDesignSystem_66a19c;
  const others = window.WABI_WEB.services.filter(s => s.id !== current);
  return <section style={{ ...wabiWrap, paddingTop: 120 }}>
    <div className="wabi-eyebrow" style={{ marginBottom: 16 }}>Mer vi gjør</div>
    <Grid min={300}>{others.map(o => <BlobPanel key={o.id} blobBase={WBB} tone={o.tone} preset={o.preset} protect="50%" minHeight={460} onClick={() => go('tjeneste:' + o.id)}>
      <h3 style={{ margin: 0, fontWeight: 400, fontSize: 28, letterSpacing: '-0.025em' }}>{o.title}</h3>
      <p style={{ margin: 0, fontSize: 14, lineHeight: 1.55, color: 'var(--blob-panel-sub)', textWrap: 'balance' }}>{o.short}</p>
    </BlobPanel>)}</Grid>
  </section>;
}
function ProjectHero({ tone, preset = 'w1', category, year = '2026', title, logo, mark, go }) {
  const { BlobPanel } = window.WabiDesignSystem_66a19c;
  return <section style={{ ...wabiWrap, paddingTop: 48 }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 20, maxWidth: 820, margin: '0 auto' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, fontSize: 14, color: 'var(--wabi-forest)' }}>
        <button onClick={() => go('hjem')} style={{ border: 'none', background: 'none', padding: 0, fontFamily: 'inherit', fontSize: 14, color: 'var(--wabi-forest)', cursor: 'pointer', whiteSpace: 'nowrap' }}>{category}</button>
        <span style={{ width: 1, height: 16, background: 'var(--wabi-outline)' }}></span>
        <span style={{ color: 'var(--wabi-muted)' }}>{year}</span>
      </div>
      <h1 style={{ margin: 0, fontWeight: 400, fontSize: 'clamp(34px, 4.4vw, 56px)', lineHeight: 1.08, letterSpacing: '-0.03em', color: 'var(--wabi-evergreen)', textWrap: 'balance' }}>{title}</h1>
    </div>
    <BlobPanel blobBase={WBB} tone={tone} preset={preset} align="center" protect="0%" contentWidth={600} minHeight={0} style={{ marginTop: 56, aspectRatio: '16 / 8', padding: 40 }}>
      {logo ? <img src={logo} alt="" style={{ height: 'clamp(36px, 5vw, 64px)', width: 'auto', display: 'block' }}/>
        : typeof mark === 'string' ? <span style={{ fontWeight: 800, fontSize: 'clamp(28px, 4vw, 48px)', letterSpacing: '-0.03em', color: '#F4F1E7' }}>{mark}</span> : mark}
    </BlobPanel>
  </section>;
}
Object.assign(window, { ProjectHero, WB, WBB, svc, wabiText, ServiceHero, Sec, Grid, Node, Flow, CtaBand, OtherServices });
