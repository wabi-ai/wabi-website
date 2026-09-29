const WEB_LOOP = [
  ['sok', 'Kartlegge', 'Agenten leser nettsiden dere har i dag, konkurrentene og det dere sender oss. Den lager en oversikt over tjenester, målgruppe og tone.'],
  ['rammeverk', 'Strukturere', 'Sidekart og innhold per side, skrevet for både mennesker og søkemotorer. Et menneske hos oss godkjenner før noe bygges.'],
  ['bygg', 'Bygge', 'Kodeagenter bygger sidene i ekte kode, ikke i en mal. Hver side testes for hastighet, mobil og tilgjengelighet.'],
  ['godkjent', 'Kontrollere', 'En egen kontrollagent går gjennom alt: lenker, tekst, bilder og skjemaer. Feil sendes tilbake til byggesteget.'],
  ['syklus', 'Publisere og følge opp', 'Siden går live på vår hosting. Etterpå holder agentene innholdet oppdatert fra systemene deres.'],
];
function BuildLoop() {
  const { Icon } = window.WabiDesignSystem_66a19c;
  const [i, setI] = React.useState(0);
  const log = [['09:02', 'Leste 14 sider og 3 konkurrenter'], ['09:40', 'Sidekart med 6 sider godkjent'], ['11:15', '6 sider bygget, 98/100 i ytelse'], ['11:32', '2 brutte lenker funnet og rettet'], ['12:00', 'Publisert på bedrift-x.no']];
  return <Grid min={380} gap={40} style={{ alignItems: 'start' }}>
    <ol style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
      {WEB_LOOP.map(([ic, t, d], k) => { const on = k === i; return <li key={t}><button onClick={() => { setI(k); }} style={{ width: '100%', display: 'grid', gridTemplateColumns: '40px 1fr', gap: 16, alignItems: 'start', textAlign: 'left', padding: '14px 18px', borderRadius: 12, cursor: 'pointer', fontFamily: 'inherit', border: '1px solid ' + (on ? 'var(--wabi-moss)' : 'var(--wabi-outline)'), background: on ? 'var(--wabi-tint)' : 'var(--wabi-card)', transition: 'background 200ms' }}>
        <span style={{ width: 40, height: 40, borderRadius: '50%', background: on ? 'var(--wabi-moss)' : 'var(--wabi-forest)', color: 'var(--wabi-oat)', display: 'grid', placeItems: 'center', fontWeight: 800 }}>{k + 1}</span>
        <span><b style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 17, color: 'var(--wabi-forest)' }}>{t}<Icon name={ic} size={24}/></b>{on && <span style={{ display: 'block', fontSize: 14, lineHeight: 1.55, color: 'var(--wabi-ink)', marginTop: 6 }}>{d}</span>}</span>
      </button></li>; })}
    </ol>
    <div style={{ background: 'var(--wabi-raised)', border: '1px solid var(--wabi-outline)', borderRadius: 12, overflow: 'hidden' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '14px 24px', borderBottom: '1px solid var(--wabi-outline)' }}><span className="wabi-eyebrow">Logg · Ny nettside</span><span style={{ fontSize: 13, color: 'var(--wabi-muted)' }}>Dag 1 av 5</span></div>
      <ul style={{ listStyle: 'none', margin: 0, padding: '8px 24px 16px' }}>{log.map(([tm, x], k) => <li key={tm} style={{ display: 'grid', gridTemplateColumns: '56px 1fr', gap: 16, padding: '12px 0', borderBottom: k < log.length - 1 ? '1px solid var(--wabi-outline)' : 'none', opacity: k <= i ? 1 : 0.3, transition: 'opacity 300ms' }}><span style={{ fontSize: 13, fontWeight: 700, color: 'var(--wabi-moss)' }}>{tm}</span><span style={{ fontSize: 15, color: 'var(--wabi-ink)' }}>{x}</span></li>)}</ul>
    </div>
  </Grid>;
}
function CaseWebsitePage({ go }) {
  const { Card, Icon, NumberedList, LogoStrip, StatCard } = window.WabiDesignSystem_66a19c;
  return <>
    <ProjectHero go={go} tone="dusk" preset="f1" category="AI-nettsider" title="En ny nettside på fem virkedager, bygget og drevet av AI" mark="bedrift-x.no"/>
    <section style={{ ...wabiWrap, paddingTop: 64 }}>
      <p style={{ margin: '0 auto 40px', maxWidth: 700, fontSize: 19, lineHeight: 1.6, color: 'var(--wabi-forest)', textAlign: 'center', textWrap: 'pretty' }}>Tiden der noen satt i et nettsideverktøy og flyttet bokser, er forbi. Vi har bygget et system av agenter som lager, hoster og holder nettsiden oppdatert, koblet til systemene dere allerede bruker.</p>
      <Grid min={220}>
        <StatCard value="5 dager" label="fra første samtale til publisert side"/>
        <StatCard variant="plain" value="Lav pris" label="fordi agentene gjør det meste av byggingen"/>
        <StatCard variant="plain" value="Alltid oppdatert" label="innhold hentes fra systemene deres"/>
      </Grid>
    </section>
    <Sec eyebrow="Slik bygger vi" title="Agenter i en løkke, med et menneske i hvert veiskille" lead="Ingen enkelt AI lager en god nettside alene. Vi har satt sammen flere spesialiserte agenter som jobber i en løkke: de bygger, kontrollerer hverandre og retter opp før noe publiseres." top={96}>
      <BuildLoop/>
    </Sec>
    <Sec eyebrow="Koblet til" title="Nettsiden oppdaterer seg selv" lead="Nettsiden henter innhold direkte fra systemene deres. Endrer dere en pris, et produkt eller åpningstider der, er nettsiden oppdatert noen minutter etter.">
      <Grid min={260}>
        <Card icon={<Icon name="data"/>} title="Produkter og priser">Fra nettbutikk, lager eller regneark. Ingen dobbeltføring.</Card>
        <Card icon={<Icon name="kalender"/>} title="Booking og åpningstider">Ledige timer og åpningstider vises direkte fra bookingsystemet.</Card>
        <Card icon={<Icon name="chat"/>} title="AI på nettsiden">En assistent som svarer på spørsmål fra deres egne dokumenter, og sender leads rett til CRM.</Card>
        <Card icon={<Icon name="graf"/>} title="Dashbord">Besøk, henvendelser og salg samlet i ett dashbord, med en kort AI-oppsummering hver uke.</Card>
      </Grid>
      <div style={{ marginTop: 40 }}><LogoStrip labels size={22} gap={32} names={['HubSpot', 'Shopify', 'Google Sheets', 'Google Kalender', 'Notion', 'Slack']}/></div>
    </Sec>
    <Sec eyebrow="Hvorfor oss" title="Enkelt å bruke. Krevende å bygge selv." lead="Verktøyene finnes, men å få dem til å jobbe sammen er et fag. Dette er noe av det vi har løst, så dere slipper.">
      <NumberedList items={[{ title: 'Orkestrering', text: 'Flere agenter som deler oppgaver, venter på hverandre og vet når de skal stoppe.' }, { title: 'Kvalitetskontroll', text: 'Egne agenter og tester som fanger feil før en kunde ser dem.' }, { title: 'Integrasjoner', text: 'Trygge koblinger mot CRM, booking og nettbutikk, med feilhåndtering når et system er nede.' }, { title: 'Hosting og drift', text: 'Rask hosting, sikkerhetsoppdateringer og overvåking, uten at dere trenger å tenke på det.' }, { title: 'Mennesket i loopen', text: 'Vi godkjenner struktur, tekst og design før noe går live.' }]}/>
    </Sec>
    <section style={{ ...wabiWrap, paddingTop: 120 }}>
      <window.WabiDesignSystem_66a19c.BlobPanel blobBase={WBB} tone="dusk" layout="left" preset="k1" protect="62%" contentWidth={580} minHeight={360} style={{ padding: '48px 56px' }}>
        <h2 style={{ margin: 0, fontWeight: 400, fontSize: 40, lineHeight: 1.08, letterSpacing: '-0.03em', textWrap: 'balance' }}>Trenger dere en ny nettside?</h2>
        <p style={{ margin: 0, fontSize: 16, lineHeight: 1.6, color: 'var(--blob-panel-sub)' }}>Send oss adressen til den dere har i dag. Vi svarer med en plan og en pris samme uke.</p>
        <div style={{ display: 'flex', gap: 12, marginTop: 8, flexWrap: 'wrap' }}><window.WabiDesignSystem_66a19c.Button variant="secondary" onClick={() => go('kontakt')}>Book en prat</window.WabiDesignSystem_66a19c.Button><window.WabiDesignSystem_66a19c.Button variant="secondary" onClick={() => go('kartlegging')}>Ta kartleggingen</window.WabiDesignSystem_66a19c.Button></div>
      </window.WabiDesignSystem_66a19c.BlobPanel>
    </section>
  </>;
}
window.CaseWebsitePage = CaseWebsitePage;
