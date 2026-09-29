function ProjectReportPage({ go }) {
  const { BlobPanel, Button, Card, Icon, BeforeAfter, LogoStrip } = window.WabiDesignSystem_66a19c;
  return <>
    <ProjectHero go={go} tone="forest" preset="f1" category="Verktøy og programvare" title="Ett dashbord for alle kanaler, bygget for et performance-byrå" mark="Rapportering"/>
    <section style={{ ...wabiWrap, paddingTop: 64 }}>
      <p style={{ margin: '0 auto 40px', maxWidth: 680, fontSize: 19, lineHeight: 1.6, color: 'var(--wabi-forest)', textAlign: 'center', textWrap: 'pretty' }}>Byrået brukte timer hver uke på å hente tall fra Meta, Google og Analytics. Nå samles alt automatisk i ett dashbord per kunde, med en AI som forklarer hva som har endret seg.</p>
      <div className="facts" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0,1fr))', gap: 24, borderTop: '1px solid var(--wabi-outline)', borderBottom: '1px solid var(--wabi-outline)', padding: '24px 0' }}>
        {[['Kunde', 'Performance-byrå (eksempel)'], ['Bygget', 'Custom dashbord med AI-oppsummering'], ['Kanaler', 'Meta, Google Ads, Analytics, Search Console'], ['Oppsett', 'Eget per kunde, delbar lenke']].map(([k, v]) => <div key={k}><div className="wabi-eyebrow">{k}</div><div style={{ marginTop: 8, fontSize: 15, lineHeight: 1.5, fontWeight: 700, color: 'var(--wabi-forest)' }}>{v}</div></div>)}
      </div>
    </section>
    <Sec eyebrow="Verktøyet" title="Slik ser det ut" lead="Klikk mellom kanalene. Tallene er eksempeldata; kundens egne data er konfidensielle." top={80}>
      <div className="demo-viewport" tabIndex={0} aria-label="Interaktivt rapporteringseksempel. Rull sidelengs på små skjermer."><Dashboard/></div>
      <div style={{ marginTop: 24 }}><div className="demo-viewport" tabIndex={0} aria-label="Eksempel på annonser og målgrupper"><AdsAndAudience/></div></div>
    </Sec>
    <Sec eyebrow="Hva vi bygde" title="Helt tilpasset, helt fleksibelt">
      <Grid min={260}>
        <Card icon={<Icon name="kobling"/>} title="Alle kanaler på ett sted">Meta, Google Ads, Analytics og Search Console hentes automatisk. Nye kanaler kobles på uten å bygge om.</Card>
        <Card icon={<Icon name="justering"/>} title="Ulikt oppsett per kunde">Hver kunde har sine egne mål, kampanjer og nøkkeltall. Byrået velger hva som vises, uten å gå via oss.</Card>
        <Card icon={<Icon name="ai"/>} title="AI som leser tallene">En kort oppsummering av hva som har endret seg og hva som bør gjøres, skrevet på norsk hver uke.</Card>
        <Card icon={<Icon name="sikkerhet"/>} title="Delbar, men trygg">Kunden får sin egen lenke og ser bare sine egne tall.</Card>
      </Grid>
      <div style={{ marginTop: 40, display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div className="wabi-eyebrow">Koblet til</div>
        <LogoStrip labels size={22} gap={32} names={['Meta', 'Google', 'Gemini', 'Slack', 'Google Sheets']}/>
      </div>
    </Sec>
    <Sec eyebrow="Resultat" title="Fra kopiering til kundedialog">
      <BeforeAfter before={{ items: ['Tall hentes manuelt fra fire plattformer per kunde', 'Rapport i regneark, sendt som vedlegg'] }} after={{ items: ['Tallene oppdateres automatisk hver time', 'Kunden har sin egen lenke med AI-oppsummering'] }} saved="~2t" savedLabel="spart per kunde, per uke (eksempel)"/>
    </Sec>
    <CtaBand go={go} id="programvare" title="Bruker dere timer på rapporter?" text="Vi ser på hvordan dere jobber i dag, og hva et eget verktøy kunne spart."/>
  </>;
}
window.ProjectReportPage = ProjectReportPage;
