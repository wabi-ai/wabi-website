const TOOLS = [
  { n: 'ChatGPT Team', l: 'ChatGPT', u: '24 av 40', c: 5400, use: 60, v: 'Behold' },
  { n: 'Microsoft 365 Copilot', l: 'Microsoft Copilot', u: '6 av 40', c: 12800, use: 15, v: 'Kutt' },
  { n: 'Claude Team', l: 'Claude', u: '8 av 40', c: 2900, use: 70, v: 'Behold' },
  { n: 'Transkripsjon av møter', l: 'Google Meet', u: '11 av 40', c: 2200, use: 28, v: 'Erstatt' },
  { n: 'AI-tillegg i HubSpot', l: 'HubSpot', u: '3 av 12', c: 4800, use: 25, v: 'Kutt' },
  { n: 'Tilbudsmaler i Excel', l: 'Excel', u: '12 av 12', c: 0, use: 100, v: 'Bygg' },
  { n: 'Gemini i Workspace', l: 'Gemini', u: '31 av 40', c: 0, use: 78, v: 'Behold' },
];
function ToolAudit() {
  const { Tag, ToolLogo } = window.WabiDesignSystem_66a19c;
  const [f, setF] = React.useState('Alle');
  const rows = TOOLS.filter(t => f === 'Alle' || t.v === f);
  const total = TOOLS.reduce((s, t) => s + t.c, 0);
  const cut = TOOLS.filter(t => t.v === 'Kutt').reduce((s, t) => s + t.c, 0);
  const kr = n => n.toLocaleString('nb-NO') + ' kr';
  const chip = on => ({ fontFamily: 'inherit', fontSize: 13, fontWeight: 700, padding: '6px 14px', borderRadius: 9999, cursor: 'pointer', border: '1px solid ' + (on ? 'var(--wabi-moss)' : 'var(--wabi-outline)'), background: on ? 'var(--wabi-moss)' : 'var(--wabi-raised)', color: on ? 'var(--wabi-oat)' : 'var(--wabi-forest)' });
  const th = { textAlign: 'left', fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--wabi-moss)', padding: '12px 16px', borderBottom: '1px solid var(--wabi-outline)', whiteSpace: 'nowrap' };
  const td = { padding: '14px 16px', borderBottom: '1px solid var(--wabi-outline)', fontSize: 15, color: 'var(--wabi-ink)', whiteSpace: 'nowrap' };
  return <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
    <Grid min={200}>
      {[[TOOLS.length + ' verktøy', 'i bruk i dag'], [kr(total), 'per måned'], [kr(cut), 'per måned kan kuttes']].map(([a, b], i) => <div key={i} style={{ background: i === 2 ? 'var(--wabi-moss)' : 'var(--wabi-card)', border: '1px solid ' + (i === 2 ? 'var(--wabi-moss)' : 'var(--wabi-outline)'), borderRadius: 12, padding: 24 }}>
        <div style={{ fontWeight: 800, fontSize: 36, letterSpacing: '-0.03em', color: i === 2 ? 'var(--wabi-oat)' : 'var(--wabi-forest)' }}>{a}</div><div style={{ fontSize: 14, color: i === 2 ? 'var(--wabi-sage)' : 'var(--wabi-muted)', marginTop: 4 }}>{b}</div></div>)}
    </Grid>
    <div style={{ background: 'var(--wabi-raised)', border: '1px solid var(--wabi-outline)', borderRadius: 12, overflow: 'hidden' }}>
      <div style={{ display: 'flex', gap: 8, padding: 16, borderBottom: '1px solid var(--wabi-outline)', flexWrap: 'wrap' }}>{['Alle', 'Behold', 'Kutt', 'Erstatt', 'Bygg'].map(x => <button key={x} style={chip(f === x)} onClick={() => setF(x)}>{x}</button>)}</div>
      <div style={{ overflowX: 'auto' }}><table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'inherit' }}>
        <thead><tr><th style={th}>Verktøy</th><th style={th}>Brukere</th><th style={th}>Kost/mnd</th><th style={th}>Faktisk bruk</th><th style={th}>Vurdering</th></tr></thead>
        <tbody>{rows.map(t => <tr key={t.n}>
          <td style={{ ...td, fontWeight: 700, color: 'var(--wabi-forest)' }}><span style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}><ToolLogo name={t.l} size={20}/>{t.n}</span></td><td style={td}>{t.u}</td><td style={{ ...td, fontVariantNumeric: 'tabular-nums' }}>{t.c ? kr(t.c) : 'Inkludert'}</td>
          <td style={td}><div style={{ display: 'flex', alignItems: 'center', gap: 10 }}><div style={{ width: 96, height: 6, borderRadius: 3, background: 'var(--wabi-outline)' }}><div style={{ width: t.use + '%', height: 6, borderRadius: 3, background: 'var(--wabi-moss)' }}></div></div><span style={{ fontSize: 13, color: 'var(--wabi-muted)' }}>{t.use}%</span></div></td>
          <td style={td}>{t.v === 'Behold' || t.v === 'Bygg' ? <Tag>{t.v}</Tag> : <span style={{ display: 'inline-flex', padding: '4px 12px', borderRadius: 9999, border: '1px solid var(--wabi-outline)', fontSize: 14, color: 'var(--wabi-forest)' }}>{t.v}</span>}</td>
        </tr>)}</tbody>
      </table></div>
    </div>
    <p style={{ ...wabiText.p, fontSize: 13, color: 'var(--wabi-muted)' }}>Eksempel fra en bedrift med 40 ansatte. Tallene er illustrasjoner.</p>
  </div>;
}
function SoftwarePage({ go }) {
  const { ProcessSteps, BeforeAfter, Eyebrow } = window.WabiDesignSystem_66a19c;
  const list = items => <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>{items.map((x, i) => <li key={i} style={{ padding: '12px 0', borderTop: '1px solid var(--wabi-outline)', fontSize: 15, lineHeight: 1.55, color: 'var(--wabi-ink)' }}>{x}</li>)}</ul>;
  return <>
    <ServiceHero go={go} id="programvare" eyebrow="Verktøy og programvare" title="Riktige verktøy. Det som mangler, bygger vi." lead="Vi går gjennom hvilke verktøy dere betaler for, hvor mye de faktisk brukes og om de gir noe. Der ingen verktøy passer, bygger vi et rundt måten dere jobber på."/>
    <Sec eyebrow="Først: analyse" title="Hva bruker dere i dag, og hva gir det?" lead="De fleste har flere AI-verktøy enn de tror, og lisenser som ingen bruker. Vi lager oversikten, måler bruken og anbefaler hva som bør beholdes, kuttes eller erstattes.">
      <ToolAudit/>
    </Sec>
    <Sec eyebrow="Så: bygg" title="Programvare laget rundt deres arbeidsflyt" lead="Når standardverktøyet tvinger dere til å jobbe på en annen måte, bygger vi heller et lite verktøy som passer. Dere eier koden, og vi drifter det videre hvis dere vil.">
      <ProcessSteps steps={[{ meta: '1 uke', title: 'Kartlegge flyten', text: 'Vi sitter med dem som gjør jobben.' }, { meta: '1–2 uker', title: 'Klikkbar prototype', text: 'Dere prøver før vi bygger.' }, { meta: '2–6 uker', title: 'Første versjon i bruk', text: 'Koblet til systemene dere har.' }, { meta: 'Løpende', title: 'Drift og forbedring', text: 'Vi måler og justerer.' }]}/>
    </Sec>
    <Sec eyebrow="Kjøpe eller bygge" title="Et enkelt valg, tatt på riktig grunnlag">
      <Grid min={320} gap={24}>
        <div style={{ background: 'var(--wabi-card)', border: '1px solid var(--wabi-outline)', borderRadius: 12, padding: 24, display: 'flex', flexDirection: 'column', gap: 12 }}><Eyebrow>Kjøp når</Eyebrow>{list(['Mange bedrifter har samme behov som dere', 'Verktøyet passer uten at dere endrer måten dere jobber på', 'Kostnaden per bruker er lav og bruken er høy'])}</div>
        <div style={{ background: 'var(--wabi-tint)', border: '1px solid var(--wabi-outline-tint)', borderRadius: 12, padding: 24, display: 'flex', flexDirection: 'column', gap: 12 }}><Eyebrow>Bygg når</Eyebrow>{list(['Arbeidsflyten er spesiell for dere, og det er en styrke', 'Dere betaler for mye mer enn dere bruker', 'Oppgaven går på tvers av flere systemer'])}</div>
      </Grid>
    </Sec>
    <Sec eyebrow="Eksempel" title="Tilbud på hotellbooking">
      <BeforeAfter before={{ items: ['Hvert tilbud skrives fra bunnen', 'Priser sjekkes i to systemer'] }} after={{ items: ['Eget tilbudsverktøy lager førsteutkast fra forespørselen', 'Priser hentes automatisk'] }} saved="~70%" savedLabel="raskere førsteutkast av tilbud"/>
    </Sec>
    <CtaBand go={go} id="programvare" title="Vet dere hva AI-verktøyene koster i dag?" text="Vi lager oversikten og viser hva som gir verdi, og hva som ikke gjør det."/>
    <OtherServices current="programvare" go={go}/>
  </>;
}
window.SoftwarePage = SoftwarePage;
