function ProjectDealerPage({ go }) {
  const { BlobPanel, Button, Card, Icon, NumberedList } = window.WabiDesignSystem_66a19c;
  return <>
    <ProjectHero go={go} tone="sand" preset="f3" category="Verktøy og programvare" title="Et fagsystem som følger bilen fra innkjøp til salg" mark="Bruktbil-SaaS"/>
    <section style={{ ...wabiWrap, paddingTop: 64 }}>
      <p style={{ margin: '0 auto 40px', maxWidth: 680, fontSize: 19, lineHeight: 1.6, color: 'var(--wabi-forest)', textAlign: 'center', textWrap: 'pretty' }}>Lager, kunder, prøvekjøringer, kontrakter og økonomi på ett sted. Laget sammen med en forhandler, og nå i bruk hos flere.</p>
      <div className="facts" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0,1fr))', gap: 24, borderTop: '1px solid var(--wabi-outline)', borderBottom: '1px solid var(--wabi-outline)', padding: '24px 0' }}>
        {[['Kunde', 'Bruktbilforhandlere'], ['Bygget', 'SaaS for hele salgsløpet'], ['Koblet til', 'Kjøretøyregisteret'], ['Status', 'I bruk hos flere forhandlere']].map(([k, v]) => <div key={k}><div className="wabi-eyebrow">{k}</div><div style={{ marginTop: 8, fontSize: 15, lineHeight: 1.5, fontWeight: 700, color: 'var(--wabi-forest)' }}>{v}</div></div>)}
      </div>
    </section>
    <Sec eyebrow="Systemet" title="Slik ser det ut" lead="Klikk deg rundt, og prøv «Ta imot ny bil». Alle navn, biler og tall er eksempeldata." top={80}>
      <div className="demo-viewport" tabIndex={0} aria-label="Interaktivt bilsystem. Rull sidelengs på små skjermer."><DealerApp/></div>
    </Sec>
    <Sec eyebrow="Hva vi bygde" title="Mindre skriving, mer salg">
      <Grid min={260}>
        <Card icon={<Icon name="sok"/>} title="Reg.nr inn, bilkort ut">Tekniske data, vekter, EU-frist og miljøtall hentes automatisk. Forhandleren legger bare til pris og bilder.</Card>
        <Card icon={<Icon name="dokument"/>} title="Kontrakter fylt ut">Butikkens egne maler for forbrukerkjøp, næringskjøp, formidling og innkjøp, fylt ut fra bilkortet.</Card>
        <Card icon={<Icon name="tid"/>} title="Oversikt over ståtid">Hvilke biler som står for lenge, og hva de binder av kapital.</Card>
        <Card icon={<Icon name="justering"/>} title="Tilpasset hver butikk">Egne maler, egen logo og eget oppsett. Samme system, ulik forhandler.</Card>
      </Grid>
    </Sec>
    <Sec eyebrow="Salgsløpet" title="Hele veien, i ett system">
      <NumberedList items={[{ title: 'Ta imot bil', text: 'Reg.nr inn, data hentes, bilkortet opprettes.' }, { title: 'Klargjøre og publisere', text: 'Status, pris og bilder på ett sted.' }, { title: 'Følge opp kunder', text: 'Henvendelser og prøvekjøringer samlet per bil.' }, { title: 'Lage kontrakt', text: 'Riktig mal, ferdig utfylt, klar for signering.' }, { title: 'Se økonomien', text: 'Bruttofortjeneste per bil og per måned.' }]}/>
    </Sec>
    <section style={{ ...wabiWrap, paddingTop: 120 }}>
      <BlobPanel blobBase={WBB} tone="sand" layout="left" preset="k1" protect="62%" contentWidth={580} minHeight={360} style={{ padding: '48px 56px' }}>
        <h2 style={{ margin: 0, fontWeight: 400, fontSize: 40, lineHeight: 1.08, letterSpacing: '-0.03em', textWrap: 'balance' }}>Driver du en bruktbilbutikk?</h2>
        <p style={{ margin: 0, fontSize: 16, lineHeight: 1.6, color: 'var(--blob-panel-sub)' }}>Systemet er i bruk hos flere forhandlere og kan settes opp for din butikk. Ta kontakt, så viser vi det.</p>
        <div style={{ display: 'flex', gap: 12, marginTop: 8, flexWrap: 'wrap' }}><Button variant="secondary" onClick={() => go('kontakt')}>Book en demo</Button><Button variant="secondary" onClick={() => go('kartlegging')}>Ta kartleggingen</Button></div>
      </BlobPanel>
    </section>
  </>;
}
window.ProjectDealerPage = ProjectDealerPage;
