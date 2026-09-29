const WABI_A = {
  depts: ['Drift', 'Økonomi', 'Salg', 'Marked', 'Kundeservice', 'HR', 'IT', 'Produksjon og levering', 'Innkjøp og lager'],
  industries: ['Eiendom og bygg', 'Handel', 'Industri', 'Helse', 'Rådgivning og tjenester', 'Transport og logistikk', 'Finans og forsikring', 'Annet'],
  sizes: ['Under 20', '20–49', '50–149', '150–500', 'Over 500'],
  areas: [
    { o: 'Rapporter og tall', s: 'agenter' },
    { o: 'Tilbud, kontrakter og dokumenter', s: 'programvare' },
    { o: 'E-post og kundehenvendelser', s: 'agenter' },
    { o: 'Data som flyttes mellom systemer', s: 'automatisering' },
    { o: 'Møter, notater og oppfølging', s: 'automatisering' },
    { o: 'Intern kunnskap og rutiner', s: 'kurs' },
  ],
  why: [
    { o: 'Vi leter etter informasjon noen andre har', r: 'Svaret finnes som regel. Det ligger bare hos en person, ikke i et system.' },
    { o: 'Vi skriver det samme inn i flere systemer', r: 'Dobbeltføring er noe av det enkleste å automatisere. Ofte er det første vi tar tak i.' },
    { o: 'Vi venter på at noen sender det videre', r: 'Da er det overleveringen som stopper, ikke jobben. Den kan ofte gå av seg selv.' },
    { o: 'Alle gjør det litt forskjellig', r: 'Da må vi bli enige om én måte før vi bygger noe. Det er en god start.' },
    { o: 'Tallene stemmer ikke før noen har rettet dem', r: 'Raskere rapporter hjelper lite før tallene er til å stole på. Vi starter med datagrunnlaget.' },
  ],
  ai: [
    { o: 'Ikke i bruk ennå', lvl: 0 },
    { o: 'Noen bruker det på egen hånd', lvl: 1 },
    { o: 'Et team eller to prøver ut ting', lvl: 1 },
    { o: 'Noen team bruker det hver uke', lvl: 2 },
    { o: 'Det er en del av hvordan vi jobber', lvl: 3 },
  ],
  levels: [
    { t: 'Tidlig', d: 'AI er ikke tatt i bruk ennå. Det er en fordel: dere kan starte ryddig, med én oppgave som betyr noe.' },
    { t: 'I gang', d: 'Folk prøver på egen hånd. Neste steg er å gjøre det som fungerer til noe hele teamet bruker.' },
    { t: 'Etablert', d: 'Noen team bruker det jevnlig. Verdien ligger nå i å koble det til systemene og arbeidsflyten.' },
    { t: 'Langt fremme', d: 'AI er en del av driften. Da handler det om agenter og automatisering som tar hele oppgaver.' },
  ],
};
function WabiOpt({ on, multi, onClick, children, disabled }) {
  const box = { width: 22, height: 22, flex: '0 0 22px', borderRadius: multi ? 6 : 11, border: '1.5px solid var(--wabi-forest)', background: on ? 'var(--wabi-forest)' : 'transparent', color: 'var(--wabi-oat)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12 };
  return <button onClick={onClick} aria-pressed={!!on} disabled={disabled} style={{ display: 'flex', alignItems: 'center', gap: 14, textAlign: 'left', fontFamily: 'inherit', fontSize: 16, lineHeight: 1.35, padding: '16px 20px', borderRadius: 12, cursor: disabled ? 'default' : 'pointer', border: (on ? '1.5px solid var(--wabi-forest)' : '1px solid var(--wabi-outline)'), background: on ? 'var(--wabi-tint)' : 'var(--wabi-raised)', color: 'var(--wabi-forest)', opacity: disabled ? 0.45 : 1, width: '100%' }}><span style={box}>{on ? '✓' : ''}</span><span>{children}</span></button>;
}
function WabiQTitle({ title, sub }) {
  return <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
    <h1 tabIndex={-1} data-assessment-title style={{ margin: 0, fontWeight: 400, fontSize: 'clamp(32px, 4.2vw, 52px)', lineHeight: 1.05, letterSpacing: '-0.03em', color: 'var(--wabi-evergreen)', textWrap: 'balance' }}>{title}</h1>
    {sub && <p style={{ margin: 0, fontSize: 16, lineHeight: 1.55, color: 'var(--wabi-muted)' }}>{sub}</p>}
  </div>;
}
function WabiNote({ children }) {
  return <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start', padding: '16px 20px', borderRadius: 12, background: 'var(--wabi-tint)', color: 'var(--wabi-forest)', fontSize: 15, lineHeight: 1.5 }}><span style={{ width: 10, height: 10, borderRadius: 5, background: 'var(--wabi-moss)', marginTop: 6, flex: '0 0 10px' }}></span><span>{children}</span></div>;
}
function AssessmentPage({ go }) {
  const { Button, Icon } = window.WabiDesignSystem_66a19c;
  const A = WABI_A;
  const [step, setStep] = React.useState(0);
  const [a, setA] = React.useState({ scope: null, dept: null, ind: null, size: null, areas: [], why: [], ai: null });
  const set = (k, v) => setA(x => ({ ...x, [k]: v }));
  const tog = (k, v, max) => setA(x => ({ ...x, [k]: x[k].includes(v) ? x[k].filter(y => y !== v) : x[k].length < max ? [...x[k], v] : x[k] }));
  const N = 5;
  React.useEffect(() => { if (step > 0) document.querySelector('[data-assessment-title], #main-content h1')?.focus({ preventScroll: true }); }, [step]);
  const next = () => { setStep(s => s + 1); window.scrollTo(0, 0); };
  const back = () => { setStep(s => Math.max(0, s - 1)); window.scrollTo(0, 0); };
  const ok = [a.scope && (a.scope === 'hele' || a.dept), a.ind && a.size, a.areas.length > 0, a.why.length > 0, a.ai][step];
  const grid = { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 240px), 1fr))', gap: 10 };
  const col = { display: 'flex', flexDirection: 'column', gap: 10 };
  const label = { margin: '8px 0 0', fontSize: 17, fontWeight: 700, color: 'var(--wabi-forest)' };
  const whyNote = A.why.find(w => w.o === a.why[0]);
  const lvl = (A.ai.find(x => x.o === a.ai) || { lvl: 0 }).lvl;
  const counts = {};
  a.areas.forEach(o => { const s = A.areas.find(x => x.o === o).s; counts[s] = (counts[s] || 0) + 1; });
  if (a.why.includes('Vi skriver det samme inn i flere systemer') || a.why.includes('Vi venter på at noen sender det videre')) counts.automatisering = (counts.automatisering || 0) + 1;
  if (a.why.includes('Tallene stemmer ikke før noen har rettet dem')) counts.programvare = (counts.programvare || 0) + 1;
  if (lvl <= 1) counts.kurs = (counts.kurs || 0) + 1;
  const all = [...window.WABI_WEB.services, window.WABI_WEB.kurs];
  const recs = Object.keys(counts).sort((x, y) => counts[y] - counts[x]).slice(0, 2).map(id => all.find(s => s.id === id)).filter(Boolean);
  const scopeCard = (id, t, d, icon) => { const on = a.scope === id; return <button aria-pressed={on} onClick={() => set('scope', id)} style={{ textAlign: 'left', fontFamily: 'inherit', padding: 28, borderRadius: 16, cursor: 'pointer', border: on ? '1.5px solid var(--wabi-forest)' : '1px solid var(--wabi-outline)', background: on ? 'var(--wabi-tint)' : 'var(--wabi-raised)', color: 'var(--wabi-forest)', display: 'flex', flexDirection: 'column', gap: 10 }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}><Icon name={icon} size={44}/><span style={{ width: 24, height: 24, borderRadius: 12, border: '1.5px solid var(--wabi-forest)', background: on ? 'var(--wabi-forest)' : 'transparent', color: 'var(--wabi-oat)', fontSize: 13, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{on ? '✓' : ''}</span></div>
    <span style={{ fontSize: 22, letterSpacing: '-0.01em', marginTop: 8 }}>{t}</span>
    <span style={{ fontSize: 15, lineHeight: 1.5, color: 'var(--wabi-muted)' }}>{d}</span>
  </button>; };
  if (step >= N) return <section style={{ ...wabiWrap, paddingTop: 48, display: 'flex', flexDirection: 'column', gap: 48 }}>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))', gap: 48, alignItems: 'start' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <span className="wabi-eyebrow">Resultat · {a.scope === 'hele' ? 'Hele bedriften' : a.dept}</span>
        <h1 style={{ margin: 0, fontWeight: 400, fontSize: 'clamp(40px, 5vw, 64px)', lineHeight: 1.02, letterSpacing: '-0.035em', color: 'var(--wabi-evergreen)', textWrap: 'balance' }}>Her ville vi startet</h1>
        <p style={{ margin: 0, fontSize: 17, lineHeight: 1.6, color: 'var(--wabi-forest)', textWrap: 'pretty' }}>Basert på svarene dine. I en ekte kartlegging setter vi oss ned med dere og går gjennom oppgavene sammen. Svarene dine blir i denne nettleserfanen. Send oss gjerne en oppsummering når du tar kontakt.</p>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 8 }}><Button onClick={() => go('kontakt')}>Book en prat</Button><Button variant="secondary" onClick={() => { setStep(0); setA({ scope: null, dept: null, ind: null, size: null, areas: [], why: [], ai: null, email: '', web: '' }); }}>Start på nytt</Button></div>
      </div>
      <div style={{ borderRadius: 16, border: '1px solid var(--wabi-outline)', background: 'var(--wabi-raised)', padding: 32, display: 'flex', flexDirection: 'column', gap: 16 }}>
        <span className="wabi-eyebrow">Hvor dere står med AI</span>
        <div style={{ display: 'flex', gap: 6 }}>{A.levels.map((l, i) => <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}><span style={{ height: 8, borderRadius: 4, background: i <= lvl ? 'var(--wabi-moss)' : 'var(--wabi-outline)' }}></span><span style={{ fontSize: 12, color: i === lvl ? 'var(--wabi-forest)' : 'var(--wabi-muted)', fontWeight: i === lvl ? 700 : 400 }}>{l.t}</span></div>)}</div>
        <span style={{ fontSize: 30, letterSpacing: '-0.02em', color: 'var(--wabi-evergreen)', marginTop: 8 }}>{A.levels[lvl].t}</span>
        <p style={{ margin: 0, fontSize: 15, lineHeight: 1.55, color: 'var(--wabi-forest)' }}>{A.levels[lvl].d}</p>
      </div>
    </div>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: 16 }}>
      {(recs.length ? recs : [all[0]]).map((s, i) => <button key={s.id} onClick={() => go('tjeneste:' + s.id)} style={{ textAlign: 'left', fontFamily: 'inherit', cursor: 'pointer', borderRadius: 16, border: '1px solid var(--wabi-outline)', background: i === 0 ? 'var(--wabi-evergreen)' : 'var(--wabi-raised)', color: i === 0 ? 'var(--wabi-oat)' : 'var(--wabi-forest)', padding: 32, display: 'flex', flexDirection: 'column', gap: 12 }}>
        <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', opacity: 0.8 }}>{i === 0 ? 'Start her' : 'Deretter'}</span>
        <span style={{ fontSize: 28, letterSpacing: '-0.02em' }}>{s.title}</span>
        <span style={{ fontSize: 15, lineHeight: 1.55, opacity: 0.85 }}>{s.short}</span>
        <span style={{ fontSize: 14, fontWeight: 700, marginTop: 8 }}>Se hvordan →</span>
      </button>)}
    </div>
  </section>;
  return <section style={{ ...wabiWrap, maxWidth: 880, paddingTop: 48, display: 'flex', flexDirection: 'column', gap: 32 }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
      <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--wabi-forest)' }}>AI-kartlegging</span>
      <div style={{ display: 'flex', gap: 6, flex: 1, maxWidth: 240 }}>{Array.from({ length: N }).map((_, i) => <span key={i} style={{ height: 4, flex: 1, borderRadius: 2, background: i <= step ? 'var(--wabi-moss)' : 'var(--wabi-outline)' }}></span>)}</div>
      <span style={{ marginLeft: 'auto', fontSize: 14, color: 'var(--wabi-muted)' }}>{step < N ? (step + 1) + ' av ' + N : 'Siste steg'}</span>
    </div>
    {step === 1 && a.scope === 'hele' && <WabiNote>Hele bedriften. Bra. De mest interessante problemene ligger ofte mellom avdelingene, ikke inne i dem.</WabiNote>}
    {step === 4 && whyNote && <WabiNote>{whyNote.r}</WabiNote>}
    {step === 0 && <><WabiQTitle title="Hva skal vi se på?"/>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 12 }}>{scopeCard('hele', 'Hele bedriften', 'Felles grunnmur, mønstre på tvers av team og muligheter i hele virksomheten.', 'kompass')}{scopeCard('avd', 'Én avdeling', 'Oppgaver og muligheter innenfor én funksjon.', 'agent')}</div>
      {a.scope === 'avd' && <><p style={label}>Hvilken avdeling?</p><div style={grid}>{A.depts.map(o => <WabiOpt key={o} on={a.dept === o} onClick={() => set('dept', o)}>{o}</WabiOpt>)}</div></>}
    </>}
    {step === 1 && <><WabiQTitle title="Litt om bedriften"/>
      <p style={label}>Bransje</p><div style={grid}>{A.industries.map(o => <WabiOpt key={o} on={a.ind === o} onClick={() => set('ind', o)}>{o}</WabiOpt>)}</div>
      <p style={label}>Omtrent hvor mange jobber her?</p><div style={grid}>{A.sizes.map(o => <WabiOpt key={o} on={a.size === o} onClick={() => set('size', o)}>{o}</WabiOpt>)}</div>
    </>}
    {step === 2 && <><WabiQTitle title="Hvor går tiden?" sub="Velg opptil tre. Du trenger ikke et prosjekt i tankene, bare en magefølelse."/>
      <div style={col}>{A.areas.map(({ o }) => <WabiOpt key={o} multi on={a.areas.includes(o)} disabled={!a.areas.includes(o) && a.areas.length >= 3} onClick={() => tog('areas', o, 3)}>{o}</WabiOpt>)}</div>
    </>}
    {step === 3 && <><WabiQTitle title="Når arbeidet stopper opp, hva skjer da?" sub="Velg opptil to. Tenk på det vanlige mønsteret, ikke den beste dagen."/>
      <div style={col}>{A.why.map(({ o }) => <WabiOpt key={o} multi on={a.why.includes(o)} disabled={!a.why.includes(o) && a.why.length >= 2} onClick={() => tog('why', o, 2)}>{o}</WabiOpt>)}</div>
    </>}
    {step === 4 && <><WabiQTitle title="Hvor er AI i bruk hos dere i dag?" sub="Det finnes ikke noe feil svar."/>
      <div style={col}>{A.ai.map(({ o }) => <WabiOpt key={o} on={a.ai === o} onClick={() => set('ai', o)}>{o}</WabiOpt>)}</div>
    </>}
    <div style={{ borderTop: '1px solid var(--wabi-outline)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      {step > 0 ? <button onClick={back} style={{ background: 'none', border: 'none', padding: 0, fontFamily: 'inherit', fontSize: 15, color: 'var(--wabi-forest)', textDecoration: 'underline', textUnderlineOffset: 4, cursor: 'pointer' }}>Tilbake</button> : <span></span>}
      <Button disabled={!ok} onClick={next}>{step === N - 1 ? 'Se resultatet' : 'Fortsett'}</Button>
    </div>
  </section>;
}
window.AssessmentPage = AssessmentPage;
