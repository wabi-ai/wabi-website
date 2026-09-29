const COURSE_TOOLS = [
  ['Claude', 'Claude', 'Lange dokumenter, analyse og skriving. For team som bygger, også kode og agenter.', ['Claude', 'Projects', 'Cowork', 'Claude Code', 'Claude Design']],
  ['ChatGPT', 'ChatGPT', 'Daglig bruk for hele bedriften, egne GPT-er og dataanalyse.', ['ChatGPT', 'GPT-er', 'Codex', 'Agent']],
  ['Gemini', 'Gemini i Google Workspace', 'AI der dere allerede jobber, for dere som bruker Google.', ['Gems', 'Google Workspace Studio', 'Gmail', 'Docs og Sheets', 'Meet', 'NotebookLM']],
];
function CoursePage({ go }) {
  const { Card, Icon, NumberedList, BeforeAfter, ToolLogo } = window.WabiDesignSystem_66a19c;
  const marks = <span style={{ display: 'flex', gap: 'clamp(12px, 2vw, 24px)', flexWrap: 'wrap', justifyContent: 'center' }}>{['Claude', 'ChatGPT', 'Gemini'].map(n => <span key={n} style={{ width: 'clamp(72px, 9vw, 112px)', aspectRatio: '1', borderRadius: 24, background: '#FDF9F1', display: 'grid', placeItems: 'center', boxShadow: '0 12px 30px -12px rgba(0,0,0,0.4)' }}><ToolLogo name={n} size={48}/></span>)}</span>;
  return <>
    <ProjectHero go={go} tone="forest" preset="f1" category="Kurs" title="Kurs bygget rundt måten dere jobber på" mark={marks}/>
    <section style={{ ...wabiWrap, paddingTop: 64 }}>
      <p style={{ margin: '0 auto', maxWidth: 680, fontSize: 19, lineHeight: 1.6, color: 'var(--wabi-forest)', textAlign: 'center', textWrap: 'pretty' }}>Vi lager ikke generiske AI-kurs. Først lærer vi hvordan bedriften og avdelingen jobber. Så bygger vi kurset på oppgaver dere faktisk har.</p>
    </section>
    <Sec eyebrow="Verktøyene" title="Claude, ChatGPT eller Gemini" lead="Hvert kurs handler om ett verktøy, det dere bruker eller ønsker å bruke. Vi går i dybden på det, ikke litt av alt.">
      <Grid min={280}>{COURSE_TOOLS.map(([logo, t, d, prods]) => <div key={t} style={{ background: 'var(--wabi-card)', border: '1px solid var(--wabi-outline)', borderRadius: 16, padding: 32, display: 'flex', flexDirection: 'column', gap: 16 }}>
        <span style={{ width: 72, height: 72, borderRadius: 18, background: 'var(--wabi-raised)', border: '1px solid var(--wabi-outline)', display: 'grid', placeItems: 'center' }}><ToolLogo name={logo} size={40}/></span>
        <h3 style={{ ...wabiText.h3, fontSize: 22 }}>{t}</h3>
        <p style={wabiText.p}>{d}</p>
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 'auto', paddingTop: 8 }}>{prods.map(x => <span key={x} style={{ padding: '4px 12px', borderRadius: 9999, background: 'var(--wabi-tint)', border: '1px solid var(--wabi-outline-tint)', fontSize: 13, fontWeight: 700, color: 'var(--wabi-forest)' }}>{x}</span>)}</div>
      </div>)}</Grid>
    </Sec>
    <Sec eyebrow="Før kurset" title="Vi starter med å forstå dere" lead="Et kurs er bare nyttig hvis eksemplene er deres egne. Derfor bruker vi tid på å forstå bedriften før vi lager noe.">
      <NumberedList items={[
        { title: 'Bedriften og avdelingen', text: 'Hva dere leverer, hvem som gjør hva, og hvilke systemer dere bruker.' },
        { title: 'Arbeidsdagen', text: 'Vi snakker med noen av dem som skal på kurset. Hvilke oppgaver tar tid, og hva gjentar seg?' },
        { title: 'Use-caser dere faktisk har', text: 'Vi plukker ut oppgavene der AI gir mest, og bygger kurset rundt dem.' },
        { title: 'Kurset', text: 'Dere jobber med egne dokumenter og egne oppgaver, ikke med eksempler fra en lærebok.' },
        { title: 'Etterpå', text: 'Deltakerne får promptene og oppsettene fra kurset, klare til bruk dagen etter.' },
      ]}/>
    </Sec>
    <Sec eyebrow="For fagmiljøer" title="Kurs for mer nisjede team" lead="Noen team trenger mer enn det generelle. Vi lager egne kurs for fagmiljøer, med verktøyene som passer faget.">
      <Grid min={240}>
        <Card icon={<Icon name="ide"/>} title="AI for grafisk design">Bildegenerering, variasjoner og arbeidsflyt inn i verktøyene designerne allerede bruker.</Card>
        <Card icon={<Icon name="megafon"/>} title="AI for markedsføring">Innhold, annonsetekster og analyse av kampanjer.</Card>
        <Card icon={<Icon name="okonomi"/>} title="AI for økonomi">Rapporter, avstemming og analyse i regneark.</Card>
        <Card icon={<Icon name="menneske"/>} title="Deres fag">Har dere et team med egne behov, lager vi et kurs for det.</Card>
      </Grid>
    </Sec>
    <Sec eyebrow="Forskjellen" title="Generisk kurs mot et kurs for dere">
      <BeforeAfter before={{ label: 'Generisk kurs', items: ['Eksempler som ikke ligner deres arbeidsdag', 'Glemt etter en uke'] }} after={{ label: 'Kurs fra Wabi', items: ['Bygget på oppgaver dere faktisk har', 'I bruk dagen etter'] }}/>
    </Sec>
    <CtaBand go={go} id="kurs" title="Vil dere ha et kurs som passer dere?" text="Fortell oss litt om teamet, så foreslår vi et opplegg."/>
    <OtherServices current="kurs" go={go}/>
  </>;
}
window.CoursePage = CoursePage;
