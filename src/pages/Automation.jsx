function AutomationPage({ go }) {
  const { Card, Icon, NumberedList, BeforeAfter, ToolLogo } = window.WabiDesignSystem_66a19c;
  const [ai, setAi] = React.useState(true);
  const classic = [
    { kind: 'trigger', label: 'Ny e-post til post@', text: 'Utløseren.' },
    { kind: 'rule', label: 'Inneholder ordet «faktura»?', text: 'Fast regel, ja eller nei.' },
    { kind: 'step', label: 'Flytt til fakturamappen', text: 'Alt annet blir liggende.' },
  ];
  const withAi = [
    { kind: 'trigger', label: 'Ny e-post til post@' },
    { kind: 'ai', label: 'Forstå hva e-posten gjelder', text: 'Faktura, klage, bestilling eller spørsmål.' },
    { kind: 'ai', label: 'Vurder hastegrad og eier', text: 'Hvem skal ha den, og hvor fort.' },
    { kind: 'step', label: 'Opprett sak med svarutkast', text: 'I riktig system, med kundens historikk.' },
    { kind: 'human', label: 'Saksbehandler godkjenner', text: 'Sender, endrer eller avviser.' },
  ];
  const seg = on => ({ fontFamily: 'inherit', fontSize: 14, fontWeight: 700, padding: '8px 18px', borderRadius: 9999, cursor: 'pointer', border: '1px solid ' + (on ? 'var(--wabi-moss)' : 'var(--wabi-outline)'), background: on ? 'var(--wabi-moss)' : 'var(--wabi-raised)', color: on ? 'var(--wabi-oat)' : 'var(--wabi-forest)', whiteSpace: 'nowrap' });
  return <>
    <ServiceHero go={go} id="automatisering" eyebrow="Automatisering" title="Når X skjer, gjør Y. Nå med et AI-steg i midten." lead="Automatisering har vi hatt i mange år. Det nye er at et steg i flyten kan lese, vurdere og bestemme, i stedet for bare å følge en fast regel."/>
    <Sec eyebrow="Fra regel til vurdering" title="Samme utløser. Et helt annet resultat." lead="Klassisk automatisering fungerer så lenge virkeligheten følger reglene. Med et AI-steg håndterer flyten også det som ikke passer i en regel.">
      <div style={{ display: 'flex', gap: 8, marginBottom: 24 }}><button style={seg(!ai)} onClick={() => setAi(false)}>Klassisk</button><button style={seg(ai)} onClick={() => setAi(true)}>Med AI-steg</button></div>
      <Flow key={ai ? 'a' : 'c'} nodes={ai ? withAi : classic}/>
      <p style={{ ...wabiText.p, color: 'var(--wabi-muted)', marginTop: 16, fontSize: 14 }}>{ai ? 'Alle e-poster blir sortert, fordelt og besvart i utkast. En person tar den siste beslutningen.' : 'Bare e-poster med riktig ord blir sortert. Resten må noen lese manuelt.'}</p>
    </Sec>
    <Sec eyebrow="AI-steget" title="Tre ting et AI-steg kan gjøre" lead="Et AI-steg er en instruks i flyten, med tilgang til det den trenger. Det er ikke en egen løsning, bare et steg som erstatter en manuell vurdering.">
      <Grid min={280}>
        <Card icon={<Icon name="ide"/>} title="Resonnere">Leser fritekst og forstår hva saken gjelder, selv når kunden ikke bruker ordene regelen ser etter.</Card>
        <Card icon={<Icon name="graf"/>} title="Analysere">Sammenligner tall, finner avvik og oppsummerer. For eksempel en faktura mot bestillingen.</Card>
        <Card icon={<Icon name="godkjent"/>} title="Handle">Oppretter saken, fyller ut skjemaet eller skriver svarutkastet, innenfor grensene dere setter.</Card>
      </Grid>
    </Sec>
    <Sec eyebrow="Systemintegrasjon" title="Det meste av jobben er å koble systemene" lead="AI-steget er ofte den enkle delen. Det krevende er å få systemene til å snakke sammen på en trygg måte. Det tar vi oss av.">
      <Grid min={360} gap={40} style={{ alignItems: 'start' }}>
        <div className="automation-examples" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0,1fr))', gap: 12 }}>
          {[['CRM', 'data', ['HubSpot', 'Salesforce']], ['Regnskap og ERP', 'okonomi', ['Tripletex', 'Visma', 'Fiken']], ['E-post og kalender', 'epost', ['Gmail', 'Outlook', 'Google Kalender']], ['Dokumenter', 'dokument', ['Google Drive', 'SharePoint', 'OneDrive']], ['Chat', 'chat', ['Slack', 'Microsoft Teams']], ['Flytverktøy', 'kobling', ['n8n', 'Make', 'Zapier']]].map(([n, ic, tools]) => <div key={n} style={{ display: 'flex', flexDirection: 'column', gap: 14, padding: 16, borderRadius: 12, background: 'var(--wabi-card)', border: '1px solid var(--wabi-outline)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, fontWeight: 700, fontSize: 15, color: 'var(--wabi-forest)' }}><Icon name={ic} size={32}/>{n}</div>
            <div style={{ display: 'flex', gap: 12, color: 'var(--wabi-forest)' }}>{tools.map(t => <ToolLogo key={t} name={t} size={20} title={t}/>)}</div>
          </div>)}
        </div>
        <NumberedList items={[{ title: 'Kobling', text: 'Vi bruker systemenes egne grensesnitt der de finnes.' }, { title: 'Tilganger', text: 'Flyten får bare tilgang til det den trenger.' }, { title: 'Feilhåndtering', text: 'Hva skjer når et system er nede? Det bestemmer vi på forhånd.' }, { title: 'Overvåking', text: 'Hvert steg logges, så dere ser hva som skjedde og hvorfor.' }]}/>
      </Grid>
    </Sec>
    <Sec eyebrow="Eksempel" title="Ett møtenotat, tre kanaler">
      <BeforeAfter before={{ items: ['Møtenotater skrives om til nyhetsbrev for hånd', 'Samme tekst limes inn i tre kanaler'] }} after={{ items: ['Nytt notat i mappen starter flyten', 'AI-steget skriver utkast, publiseres etter godkjenning'] }} saved="~3t/uke" savedLabel="spart på intern kommunikasjon"/>
    </Sec>
    <CtaBand go={go} id="automatisering" title="Hvilken flyt tar mest tid hos dere?" text="Vi ser på den sammen og finner ut hvor et AI-steg faktisk hjelper."/>
    <OtherServices current="automatisering" go={go}/>
  </>;
}
window.AutomationPage = AutomationPage;
