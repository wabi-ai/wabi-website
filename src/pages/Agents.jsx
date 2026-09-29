const LOOP = [
  { k: 'Les', icon: 'sok', t: 'Henter det jobben trenger', log: 'Henter 43 aktiviteter fra CRM for uke 38, og omsetningen fra regnskap.' },
  { k: 'Planlegg', icon: 'kompass', t: 'Bestemmer neste steg', log: 'Grupperer per selger. Finner 6 avtaler uten kontakt på 14 dager.' },
  { k: 'Gjør', icon: 'bygg', t: 'Utfører steget', log: 'Skriver utkast til ukesrapporten i fast mal, med tre punkter per selger.' },
  { k: 'Sjekk', icon: 'godkjent', t: 'Kontrollerer resultatet', log: 'Sammenligner tallene med regnskap. 2 avvik over 5 000 kr.' },
  { k: 'Spør', icon: 'menneske', t: 'Stopper når noe er utenfor reglene', log: 'Sender de 2 avvikene til salgssjefen i Slack før rapporten publiseres.' },
];
function AgentLoop() {
  const { Icon } = window.WabiDesignSystem_66a19c;
  const [i, setI] = React.useState(0);
  return <Grid min={380} gap={40} style={{ alignItems: 'center' }}>
    <ol style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
      {LOOP.map((s, k) => { const on = k === i; return <li key={s.k}><button onClick={() => { setI(k); }} style={{ width: '100%', display: 'grid', gridTemplateColumns: '40px 1fr 32px', gap: 16, alignItems: 'center', textAlign: 'left', padding: '14px 18px', borderRadius: 12, cursor: 'pointer', fontFamily: 'inherit',
        border: '1px solid ' + (on ? 'var(--wabi-moss)' : 'var(--wabi-outline)'), background: on ? 'var(--wabi-tint)' : 'var(--wabi-card)', transition: 'background 200ms, border-color 200ms' }}>
        <span style={{ width: 40, height: 40, borderRadius: '50%', background: on ? 'var(--wabi-moss)' : 'var(--wabi-forest)', color: 'var(--wabi-oat)', display: 'grid', placeItems: 'center', fontWeight: 800, fontSize: 15 }}>{k + 1}</span>
        <span><b style={{ display: 'block', fontSize: 17, color: 'var(--wabi-forest)' }}>{s.k}</b><span style={{ fontSize: 14, color: 'var(--wabi-ink)' }}>{s.t}</span></span>
        <Icon name={s.icon} size={32}/>
      </button></li>; })}
      <li style={{ fontSize: 13, color: 'var(--wabi-muted)', paddingLeft: 18, marginTop: 4 }}>Steg 2–4 gjentas til oppgaven er løst.</li>
    </ol>
    <div style={{ background: 'var(--wabi-raised)', border: '1px solid var(--wabi-outline)', borderRadius: 12, overflow: 'hidden' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '14px 24px', borderBottom: '1px solid var(--wabi-outline)' }}><span className="wabi-eyebrow">Logg · Ukesrapport</span><span style={{ fontSize: 13, color: 'var(--wabi-muted)' }}>Velg et steg</span></div>
      <ul style={{ listStyle: 'none', margin: 0, padding: '8px 24px 16px' }}>
        {LOOP.map((s, k) => <li key={s.k} style={{ display: 'grid', gridTemplateColumns: '64px 1fr', gap: 16, padding: '12px 0', borderBottom: k < LOOP.length - 1 ? '1px solid var(--wabi-outline)' : 'none', opacity: k <= i ? 1 : 0.35, transition: 'opacity 300ms' }}>
          <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--wabi-moss)', fontVariantNumeric: 'tabular-nums' }}>07:0{k}</span>
          <span style={{ fontSize: 15, lineHeight: 1.5, color: 'var(--wabi-ink)' }}><b style={{ color: 'var(--wabi-forest)' }}>{s.k}.</b> {s.log}</span>
        </li>)}
      </ul>
    </div>
  </Grid>;
}
function ChatDemo() {
  const { Button, ToolLogo } = window.WabiDesignSystem_66a19c;
  const [step, setStep] = React.useState(0);
  const Msg = ({ who, agent, children }) => <div style={{ display: 'grid', gridTemplateColumns: '36px 1fr', gap: 12 }}>
    <span style={{ width: 36, height: 36, borderRadius: 6, background: agent ? 'var(--wabi-forest)' : 'var(--wabi-tint)', color: agent ? 'var(--wabi-oat)' : 'var(--wabi-forest)', display: 'grid', placeItems: 'center', fontWeight: 800, fontSize: 13 }}>{agent ? 'W' : 'K'}</span>
    <div><div style={{ fontSize: 13, fontWeight: 700, color: 'var(--wabi-forest)' }}>{who} <span style={{ fontWeight: 400, color: 'var(--wabi-muted)' }}>{agent ? 'Agent' : '07:58'}</span></div><div style={{ fontSize: 15, lineHeight: 1.55, color: 'var(--wabi-ink)', marginTop: 4 }}>{children}</div></div>
  </div>;
  return <div style={{ background: 'var(--wabi-raised)', border: '1px solid var(--wabi-outline)', borderRadius: 12, overflow: 'hidden' }}>
    <div style={{ padding: '14px 24px', borderBottom: '1px solid var(--wabi-outline)', fontWeight: 700, fontSize: 14, color: 'var(--wabi-forest)', display: 'flex', alignItems: 'center', gap: 10 }}><ToolLogo name="Slack" size={18}/># salg</div>
    <div style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 20, minHeight: 300 }}>
      <Msg who="Kari">@ukesrapport kan du lage rapporten for uke 38?</Msg>
      <Msg who="Ukesrapport" agent>Jeg har hentet 43 aktiviteter fra CRM. <b>2 tall stemmer ikke med regnskap</b> (Nordvik AS og Berg Bygg). Hvilke tall skal jeg bruke?
        {step === 0 && <div style={{ display: 'flex', gap: 8, marginTop: 12, flexWrap: 'wrap' }}><Button onClick={() => setStep(1)}>Bruk regnskap</Button><Button variant="secondary" onClick={() => setStep(1)}>Bruk CRM</Button></div>}
      </Msg>
      {step >= 1 && <Msg who="Ukesrapport" agent>Ferdig. <b>Ukesrapport uke 38</b> ligger i delt mappe, og jeg har lagt inn 6 oppfølgingsoppgaver i CRM. <button onClick={() => setStep(0)} style={{ border: 'none', background: 'none', padding: 0, color: 'var(--wabi-moss)', fontFamily: 'inherit', fontSize: 14, fontWeight: 700, cursor: 'pointer', textDecoration: 'underline' }}>Spill av igjen</button></Msg>}
    </div>
  </div>;
}
function SubAgents() {
  const box = (label, text, strong) => <div style={{ background: strong ? 'var(--wabi-forest)' : 'var(--wabi-card)', color: strong ? 'var(--wabi-oat)' : 'var(--wabi-forest)', border: '1px solid ' + (strong ? 'var(--wabi-forest)' : 'var(--wabi-outline)'), borderRadius: 12, padding: 20, textAlign: 'center', height: '100%', boxSizing: 'border-box' }}>
    <div style={{ fontWeight: 700, fontSize: 16 }}>{label}</div><div style={{ fontSize: 13, lineHeight: 1.5, marginTop: 6, color: strong ? 'var(--wabi-sage)' : 'var(--wabi-ink)' }}>{text}</div></div>;
  const line = <div aria-hidden="true" style={{ width: 1.5, height: 28, background: 'var(--wabi-moss)', margin: '0 auto' }}></div>;
  return <div style={{ maxWidth: 900, margin: '0 auto' }}>
    <div style={{ maxWidth: 360, margin: '0 auto' }}>{box('Hovedagent: Tilbud', 'Får forespørselen, deler opp jobben og samler svaret.', true)}</div>
    {line}
    <div className="sub3-bar" style={{ borderTop: '1.5px solid var(--wabi-moss)', margin: '0 calc((100% - 32px) / 6)' }}></div>
    <div className="sub3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0,1fr))', gap: 16 }}>
      {[['Research', 'Leser forespørselen og kundehistorikken.'], ['Pris', 'Henter priser og avtalte rabatter fra ERP.'], ['Kontroll', 'Sjekker vilkår, tall og tone mot mal.']].map(([a, b]) => <div key={a} style={{ display: 'flex', flexDirection: 'column' }}>{line}<div style={{ flex: 1, display: 'flex' }}><div style={{ flex: 1 }}>{box(a, b)}</div></div>{line}</div>)}
    </div>
    <div className="sub3-bar" style={{ borderTop: '1.5px solid var(--wabi-moss)', margin: '0 calc((100% - 32px) / 6)' }}></div>
    {line}
    <div style={{ maxWidth: 360, margin: '0 auto' }}>{box('Utkast til selger', 'Klart til gjennomlesning i CRM, med kilder.')}</div>
  </div>;
}
function AgentsPage({ go }) {
  const { Card, Icon, PromptBlock, NumberedList, Eyebrow, ToolChip, LogoStrip } = window.WabiDesignSystem_66a19c;
  return <>
    <ServiceHero go={go} id="agenter" eyebrow="AI-agenter" title="En kollega som tar de faste oppgavene" lead="En agent får én tydelig oppgave og tilgang til systemene den trenger. Den jobber i flere steg til jobben er gjort, og spør en person når noe faller utenfor reglene."/>
    <Sec eyebrow="Hva det er" title="En agent er fire ting" lead="Ikke et chattevindu. En agent gjør de gjentakende stegene selv, og legger resultatet fram for en person som godkjenner.">
      <Grid min={240}>
        <Card icon={<Icon name="mal"/>} title="Oppgaven">Én jobb, beskrevet så presist at en ny medarbeider kunne gjort den. Hva er input, hva er ferdig, og hva er utenfor.</Card>
        <Card icon={<Icon name="kobling"/>} title="Tilgangene">Egen innlogging til systemene jobben krever, og ikke mer. Leser i CRM, skriver i regnskap, sender e-post.</Card>
        <Card icon={<Icon name="syklus"/>} title="Løkken">Leser, planlegger, gjør et steg og sjekker resultatet. Gjentar til oppgaven er løst.</Card>
        <Card icon={<Icon name="menneske"/>} title="Mennesket">Godkjenner det som er over grensene dere setter. Alt agenten gjør, blir logget.</Card>
      </Grid>
    </Sec>
    <Sec eyebrow="Agent-løkken" title="Slik jobber den seg gjennom en oppgave" lead="Eksempel: ukesrapporten for salg, mandag morgen. Klikk på et steg for å se hva som skjer.">
      <AgentLoop/>
    </Sec>
    <Sec eyebrow="Der dere jobber" title="I Slack, Teams, e-post eller et eget skjermbilde" lead="Agenten jobber der oppgavene allerede kommer inn. Dere trenger ikke et nytt verktøy for å bruke den.">
      <Grid min={360} gap={40} style={{ alignItems: 'start' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>{['Slack', 'Microsoft Teams', 'Gmail', 'Outlook', 'HubSpot', 'Salesforce', 'Notion'].map(c => <ToolChip key={c} name={c}/>)}</div>
          <p style={wabiText.p}>Den kan startes av en person som skriver til den, av et tidspunkt (hver mandag 07:00), eller av noe som skjer i et system: en ny e-post, et nytt lead, en signert avtale.</p>
        </div>
        <ChatDemo/>
      </Grid>
    </Sec>
    <Sec eyebrow="Oppgaven" title="Det viktigste er hvor godt oppgaven er beskrevet" lead="Forskjellen på en agent som virker og en som ikke gjør det, ligger sjelden i modellen. Den ligger i beskrivelsen. Vi skriver den sammen med dem som gjør jobben i dag.">
      <Grid min={360} gap={24} style={{ alignItems: 'start' }}>
        <div style={{ background: 'var(--wabi-card)', border: '1px solid var(--wabi-outline)', borderRadius: 12, padding: 24, display: 'flex', flexDirection: 'column', gap: 12 }}>
          <Eyebrow>Vag</Eyebrow><p style={{ ...wabiText.p, fontSize: 18 }}>«Lag en ukesrapport for salg.»</p>
          <p style={{ ...wabiText.p, color: 'var(--wabi-muted)', fontSize: 14 }}>Agenten må gjette hvilke tall, hvilken periode, hvilket format og hva den skal gjøre med avvik.</p>
        </div>
        <PromptBlock label="Spesifisert" tool="Ukesrapport" prompt={'Rolle: Du lager ukesrapporten for salgsteamet.\nInput: Aktiviteter fra CRM og omsetning fra regnskap, forrige uke.\nSteg: Grupper per selger. Tre punkter per selger. Marker avtaler uten kontakt på 14 dager.\nFerdig når: Rapporten ligger i delt mappe i fast mal.\nStopp og spør: Hvis tall i CRM og regnskap avviker med mer enn 5 000 kr.'}/>
      </Grid>
    </Sec>
    <Sec eyebrow="Sub-agenter" title="Store oppgaver deles opp" lead="En hovedagent fordeler arbeidet til mindre agenter med hver sin smale jobb, og samler resultatet. Hver del blir enklere å teste og forbedre.">
      <SubAgents/>
    </Sec>
    <Sec eyebrow="Modeller og verktøy" title="Bygget på det som passer jobben" lead="Vi velger modell ut fra oppgaven, kostnaden og hvor dataene skal ligge. Agenten kan byttes til en annen modell senere uten at oppgaven må beskrives på nytt.">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
        <div><div className="wabi-eyebrow" style={{ marginBottom: 16 }}>Modeller</div><LogoStrip labels size={24} gap={32} names={['Claude', 'ChatGPT', 'Gemini', 'Mistral', 'Llama', 'DeepSeek']}/></div>
        <div><div className="wabi-eyebrow" style={{ marginBottom: 16 }}>Agenter og harnesses</div><LogoStrip labels size={24} gap={32} names={['Claude Code', 'Claude Cowork', 'Codex', 'GitHub Copilot', 'Cursor', 'Hermes Agent', 'LangChain', 'CrewAI', 'n8n']}/></div>
      </div>
    </Sec>
    <Sec eyebrow="Hvor det gir verdi" title="Jobber som kommer tilbake hver uke" lead="For liten til et eget IT-prosjekt, for hyppig til å ignorere. Det er typisk de oppgavene en agent passer best til.">
      <NumberedList items={[{ title: 'Ukesrapporter', text: 'Tall fra flere systemer samlet og skrevet i fast mal.' }, { title: 'Førstelinje kundeservice', text: 'Svarer på vanlige spørsmål fra egne dokumenter, sender resten videre med hele historikken.' }, { title: 'Tilbudsutkast', text: 'Fra forespørsel til utkast med riktige priser og vilkår.' }, { title: 'Oppfølging av leads', text: 'Researcher nye leads og legger dem inn i CRM med forslag til neste steg.' }, { title: 'Fakturakontroll', text: 'Sjekker fakturaer mot bestilling og stopper avvik for godkjenning.' }]}/>
    </Sec>
    <CtaBand go={go} id="agenter" title="Har dere en oppgave som tar tid hver uke?" text="Fortell oss hva den er. Vi skisserer hvordan en agent ville løst den, på én samtale."/>
    <OtherServices current="agenter" go={go}/>
  </>;
}
window.AgentsPage = AgentsPage;
