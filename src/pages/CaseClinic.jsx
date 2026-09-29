const CLINIC_NODES = [
  { id: 'in', x: 4, y: 50, kind: 'trigger', tag: 'Når', label: 'Dagsoppgjør fra journalsystemet', text: 'Konsultasjoner, takster og betalinger for dagen.' },
  { id: 'agent', x: 36, y: 50, kind: 'agent', tag: 'Regnskapsagent', label: 'Leser, sorterer og kontrollerer', text: 'Spesialisert på legekontor: takster, egenandeler og refusjon.' },
  { id: 'helfo', x: 70, y: 16, kind: 'ai', tag: 'Helfo', label: 'Refusjonskrav', text: 'Takster som skal refunderes, samlet og sjekket mot regelverket.' },
  { id: 'egen', x: 70, y: 50, kind: 'ai', tag: 'Pasient', label: 'Egenandel', text: 'Riktig egenandel, frikort og unntak registrert per pasient.' },
  { id: 'bok', x: 70, y: 84, kind: 'step', tag: 'Regnskap', label: 'Bokføring', text: 'Bilag ført i Tripletex eller Fiken med riktig konto og mva.' },
  { id: 'human', x: 100, y: 50, kind: 'human', tag: 'Menneske', label: 'Avvik til godkjenning', text: 'Bare det som ikke stemmer, havner hos kontoret eller regnskapsfører.' },
];
const CLINIC_EDGES = [['in', 'agent'], ['agent', 'helfo'], ['agent', 'egen'], ['agent', 'bok'], ['helfo', 'human'], ['egen', 'human'], ['bok', 'human']];
function NodeGraph() {
  const { Icon, ToolLogo } = window.WabiDesignSystem_66a19c;
  const order = ['in', 'agent', 'helfo', 'egen', 'bok', 'human'];
  const [active, setActive] = React.useState(0);
  const on = order[active];
  const K = { trigger: ['#FDF9F1', '#E2DECF', 'epost'], agent: ['#143D24', '#143D24', 'agent'], ai: ['#E9F0E9', '#C8DAC8', 'ai'], step: ['#F6F5EC', '#E2DECF', 'okonomi'], human: ['#FDF9F1', '#1E5631', 'menneske'] };
  const N = id => { const n = CLINIC_NODES.find(x => x.id === id), k = K[n.kind], dark = n.kind === 'agent', lit = on === id;
    return <div tabIndex={0} onFocus={() => setActive(order.indexOf(id))} onMouseEnter={() => setActive(order.indexOf(id))} style={{ position: 'relative', zIndex: 1, background: k[0], border: `1px solid ${k[1]}`, borderRadius: 14, padding: 16, boxShadow: lit ? '0 0 0 3px rgba(30,86,49,0.28)' : 'none', transition: 'box-shadow 300ms', color: dark ? '#F4F1E7' : 'var(--wabi-forest)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}><span className="wabi-eyebrow" style={{ color: dark ? '#CFE0D4' : 'var(--wabi-moss)' }}>{n.tag}</span><Icon name={k[2]} size={28} color={dark ? '#F4F1E7' : undefined} accent={dark ? '#CFE0D4' : undefined}/></div>
      <div style={{ fontWeight: 700, fontSize: 15, lineHeight: 1.3 }}>{n.label}</div>
      <div style={{ fontSize: 13, lineHeight: 1.5, marginTop: 6, color: dark ? '#CFE0D4' : 'var(--wabi-ink)' }}>{n.text}</div>
      {id === 'bok' && <div style={{ display: 'flex', gap: 6, marginTop: 10, flexWrap: 'wrap' }}>{['Tripletex', 'Fiken'].map(x => <span key={x} style={{ display: 'inline-flex', alignItems: 'center', gap: 5, padding: '3px 8px', borderRadius: 9999, background: '#fff', border: '1px solid var(--wabi-outline)', fontSize: 11, fontWeight: 700 }}><ToolLogo name={x} size={12}/>{x}</span>)}</div>}
    </div>; };
  const lit = (a, b) => on === a || on === b;
  const H = (a, b) => <div aria-hidden="true" className="g-link" style={{ height: 2, alignSelf: 'center', background: lit(a, b) ? '#1E5631' : '#C8DAC8', transition: 'background 300ms' }}></div>;
  const Fan = ({ from, to, dir }) => <div aria-hidden="true" className="g-link" style={{ alignSelf: 'stretch', position: 'relative' }}>
    <div style={{ position: 'absolute', left: dir === 'out' ? '50%' : 0, right: dir === 'out' ? 0 : '50%', top: '16.6%', bottom: '16.6%', borderLeft: dir === 'out' ? '2px solid #C8DAC8' : 'none', borderRight: dir === 'in' ? '2px solid #C8DAC8' : 'none' }}></div>
    <div style={{ position: 'absolute', left: dir === 'out' ? 0 : '50%', right: dir === 'out' ? '50%' : 0, top: 'calc(50% - 1px)', height: 2, background: lit(from, to[1]) || lit(from, to[0]) || lit(from, to[2]) ? '#1E5631' : '#C8DAC8' }}></div>
    {[16.6, 50, 83.4].map((y, i) => <div key={y} style={{ position: 'absolute', left: dir === 'out' ? '50%' : 0, right: dir === 'out' ? 0 : '50%', top: `calc(${y}% - 1px)`, height: 2, background: lit(from, to[i]) ? '#1E5631' : '#C8DAC8', transition: 'background 300ms' }}></div>)}
  </div>;
  return <div style={{ background: 'var(--wabi-card)', border: '1px solid var(--wabi-outline)', borderRadius: 16, padding: 32 }}>
    <div className="node-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) 36px minmax(0,1.1fr) 56px minmax(0,1fr) 56px minmax(0,0.9fr)', alignItems: 'center' }}>
      {N('in')}{H('in', 'agent')}{N('agent')}
      <Fan from="agent" to={['helfo', 'egen', 'bok']} dir="out"/>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>{N('helfo')}{N('egen')}{N('bok')}</div>
      <Fan from="human" to={['helfo', 'egen', 'bok']} dir="in"/>
      {N('human')}
    </div>
  </div>;
}
function CaseClinicPage({ go }) {
  const { Card, Icon, PromptBlock, NumberedList, BeforeAfter } = window.WabiDesignSystem_66a19c;
  return <>
    <ProjectHero go={go} tone="fjord" preset="f1" category="AI-agenter" title="En regnskapsagent for legekontor" mark="Legekontor"/>
    <section style={{ ...wabiWrap, paddingTop: 64 }}>
      <p style={{ margin: '0 auto 40px', maxWidth: 680, fontSize: 19, lineHeight: 1.6, color: 'var(--wabi-forest)', textAlign: 'center', textWrap: 'pretty' }}>Legene vil jobbe med pasienter, ikke med bilag. Vi bygde en agent som tar dagsoppgjøret, Helfo-refusjonene og egenandelene, og fører alt i Tripletex eller Fiken.</p>
      <div className="facts" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0,1fr))', gap: 24, borderTop: '1px solid var(--wabi-outline)', borderBottom: '1px solid var(--wabi-outline)', padding: '24px 0' }}>
        {[['Kunde', 'Legekontor'], ['Bygget', 'Agentisk system med spesialisert agent'], ['Koblet til', 'Journalsystem, Tripletex, Fiken'], ['Håndterer', 'Helfo, egenandel, bokføring']].map(([k, v]) => <div key={k}><div className="wabi-eyebrow">{k}</div><div style={{ marginTop: 8, fontSize: 15, lineHeight: 1.5, fontWeight: 700, color: 'var(--wabi-forest)' }}>{v}</div></div>)}
      </div>
    </section>
    <Sec eyebrow="Flyten" title="Slik henger det sammen" lead="Hver node er et steg. Agenten i midten leser dagsoppgjøret og fordeler arbeidet. Bare avvik havner hos et menneske." top={80}>
      <NodeGraph/>
    </Sec>
    <Sec eyebrow="Agenten" title="Spesialisert på én jobb" lead="Ikke en generell chatbot. Agenten kjenner takstene, reglene for egenandel og hvordan Helfo vil ha kravene. Den vet også når den skal stoppe og spørre.">
      <Grid min={260}>
        <Card icon={<Icon name="dokument"/>} title="Helfo-refusjon">Samler takstene som skal refunderes og kontrollerer dem før kravet sendes.</Card>
        <Card icon={<Icon name="menneske"/>} title="Riktig egenandel">Frikort, barn, unntak og ulike takster. Agenten registrerer riktig egenandel per pasient.</Card>
        <Card icon={<Icon name="okonomi"/>} title="Bokført automatisk">Bilag føres i Tripletex eller Fiken med riktig konto og mva, hver dag.</Card>
        <Card icon={<Icon name="sikkerhet"/>} title="Bare det den trenger">Egen tilgang, uten pasientjournaler. Alt den gjør, blir logget.</Card>
      </Grid>
    </Sec>
    <Sec eyebrow="Oppgaven" title="Beskrevet så agenten forstår den">
      <PromptBlock label="Oppgavebeskrivelse" tool="Regnskapsagent" prompt={'Rolle: Du fører regnskapet for et legekontor.\nInput: Dagsoppgjør fra journalsystemet (takster, betalinger, pasient-ID uten journal).\nSteg: Skill Helfo-refusjon fra egenandel. Sjekk frikort og unntak. Før bilag i Tripletex.\nFerdig når: Refusjonskrav er klart og alle bilag er ført.\nStopp og spør: Hvis en takst er ukjent, eller betaling ikke stemmer med egenandel.'}/>
    </Sec>
    <Sec eyebrow="Resultat" title="Fra kveldsarbeid til ferdig oppgjør">
      <BeforeAfter before={{ items: ['Dagsoppgjør og refusjoner gjøres manuelt etter arbeidstid', 'Feil i egenandel oppdages sent'] }} after={{ items: ['Agenten fører alt samme dag', 'Kontoret godkjenner bare avvik'] }} saved="~5t/uke" savedLabel="spart per kontor (eksempel)"/>
    </Sec>
    <CtaBand go={go} id="agenter" title="Driver du et legekontor eller en klinikk?" text="Vi viser hvordan agenten kan settes opp med deres journalsystem og regnskap."/>
  </>;
}
window.CaseClinicPage = CaseClinicPage;
