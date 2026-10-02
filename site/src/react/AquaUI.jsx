// Aquaculture operations: dashboard, KPIs and a funding draft, in PhycoNor's colours. Fictional sites and numbers.
import React, { useEffect, useRef, useState } from 'react';

const C = { ink: '#1F3329', mute: '#5C6F66', line: '#DCE9E1', soft: '#EDFCF4', mint: '#B5E2CB', green: '#3F6652', navy: '#0B3A6E', red: '#C81E1E', amber: '#A9661A', font: '"Inter", system-ui, sans-serif' };

const SITES = [
  { id: 'a', name: 'Tanglinje A', kind: 'Tang', temp: 29.4, sal: 31, oxy: 6.8, trend: [6.6, 6.7, 6.9, 6.8, 6.7, 6.9, 6.8] },
  { id: 'b', name: 'Tanglinje B', kind: 'Tang', temp: 30.1, sal: 30, oxy: 6.5, trend: [6.4, 6.6, 6.5, 6.3, 6.5, 6.6, 6.5] },
  { id: 'c', name: 'Krabbedam 2', kind: 'Krabber', temp: 30.8, sal: 27, oxy: 4.6, trend: [6.1, 5.9, 5.6, 5.3, 5.1, 4.8, 4.6], alert: 'Oksygenet har falt i seks dager. Sjekk luftingen i dag.' },
  { id: 'd', name: 'Sjøpølse, felt 1', kind: 'Sjøpølse', temp: 29.0, sal: 32, oxy: 6.9, trend: [6.8, 6.9, 7.0, 6.9, 6.8, 7.0, 6.9] },
  { id: 'e', name: 'Rekedam 1', kind: 'Reker', temp: 31.2, sal: 25, oxy: 5.4, trend: [5.9, 5.8, 5.7, 5.6, 5.5, 5.5, 5.4], watch: 'Svakt fallende oksygen og høy temperatur. Følg med neste tre dager.' },
];

const KPIS = [
  { label: 'Høstet i september', value: 4820, goal: 5000, unit: 'kg', note: 'Tanglinje B høstet en uke senere enn planlagt. Resten følger planen.' },
  { label: 'Overlevelse, krabber', value: 86, goal: 85, unit: '%', note: 'Over målet, men Krabbedam 2 trekker ned. Henger sammen med oksygenfallet.' },
  { label: 'Vekst, tang', value: 4.1, goal: 4.5, unit: '% per dag', note: 'Lavere vekst på linje B etter tre uker med høy vanntemperatur.' },
  { label: 'Leveranser i tide', value: 97, goal: 95, unit: '%', note: 'To forsinkede leveranser i måneden, begge på grunn av transport.' },
];

const PROGRAMMES = ['Støtte til bærekraftig havbruk', 'Grønt innovasjonsprogram'];
const STEPS = [
  ['Leste utlysningen', 'Krav, kriterier og frist'],
  ['Hentet KPI-er fra de siste tolv månedene', 'Høsting, overlevelse og vekst'],
  ['Hentet målinger og bærekraftsdata', 'Vannkvalitet og arealbruk'],
  ['Skrev utkast til tre deler', 'Klart for gjennomgang'],
];
const DRAFT = [
  ['Prosjektbeskrivelse', 'PhycoNor driver regenerativt havbruk med tang, krabber, sjøpølser og reker. Prosjektet skal øke produksjonen per anlegg uten å øke belastningen på det lokale økosystemet.', 'Kilde: selskapsprofil'],
  ['Resultater så langt', 'Siste tolv måneder er det høstet 52 tonn, overlevelsen for krabber er 86 prosent, og 97 prosent av leveransene har gått i tide.', 'Kilde: KPI-er'],
  ['Effekt på miljøet', 'Tanglinjene tar opp næringsstoffer fra vannet rundt krabbe- og rekedammene. Vannkvaliteten måles daglig på alle fem anlegg.', 'Kilde: målinger'],
];

const fmt = n => n.toLocaleString('nb-NO');

function Spark({ data, color }) {
  const min = Math.min(...data) - 0.3, max = Math.max(...data) + 0.3;
  const pts = data.map((v, i) => `${(i / (data.length - 1)) * 100},${36 - ((v - min) / (max - min)) * 32}`).join(' ');
  return <svg viewBox="0 0 100 38" preserveAspectRatio="none" style={{ width: '100%', height: 56, display: 'block' }} aria-hidden="true">
    <polyline points={pts} fill="none" stroke={color} strokeWidth="1.6" vectorEffect="non-scaling-stroke" strokeLinejoin="round" />
  </svg>;
}

function Status({ s }) {
  const [label, fg, bg] = s.alert ? ['Lavt oksygen', C.red, '#FBE9E7'] : s.watch ? ['Følg med', C.amber, '#FBF1DF'] : ['Normal', C.green, '#E3F4EA'];
  return <span style={{ padding: '3px 8px', borderRadius: 6, background: bg, color: fg, fontSize: 12, fontWeight: 600, whiteSpace: 'nowrap' }}>{label}</span>;
}

function AiCard({ title, children }) {
  return <div style={{ padding: 16, borderRadius: 12, background: '#fff', border: `1px solid ${C.line}` }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8, fontSize: 12, fontWeight: 700, letterSpacing: '.06em', textTransform: 'uppercase', color: C.green }}>
      <span style={{ width: 8, height: 8, borderRadius: '50%', background: C.green }} />{title}
    </div>
    <div style={{ fontSize: 14, lineHeight: 1.55 }}>{children}</div>
  </div>;
}

function Ops() {
  const [sel, setSel] = useState('c');
  const site = SITES.find(s => s.id === sel);
  const td = { padding: '10px 8px', borderBottom: `1px solid ${C.line}`, fontVariantNumeric: 'tabular-nums' };
  return <div className="demo-dash" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.5fr) minmax(0,1fr)' }}>
    <div style={{ padding: 18, borderRight: `1px solid ${C.line}`, minWidth: 0 }}>
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13, minWidth: 500 }}>
          <thead><tr style={{ color: C.mute, textAlign: 'left' }}>{['Anlegg', 'Temp.', 'Salinitet', 'Oksygen', 'Status'].map(h => <th key={h} style={{ fontWeight: 500, padding: '6px 8px', borderBottom: `1px solid ${C.line}` }}>{h}</th>)}</tr></thead>
          <tbody>{SITES.map(s => <tr key={s.id} onClick={() => setSel(s.id)} style={{ cursor: 'pointer', background: s.id === sel ? C.soft : 'transparent' }}>
            <td style={td}><button onClick={() => setSel(s.id)} aria-pressed={s.id === sel} style={{ all: 'unset', cursor: 'pointer' }}><b style={{ fontWeight: 600 }}>{s.name}</b><span style={{ display: 'block', fontSize: 12, color: C.mute }}>{s.kind}</span></button></td>
            <td style={td}>{s.temp.toFixed(1)} °C</td>
            <td style={td}>{s.sal} ‰</td>
            <td style={td}>{s.oxy.toFixed(1)} mg/L</td>
            <td style={td}><Status s={s} /></td>
          </tr>)}</tbody>
        </table>
      </div>
      <p style={{ margin: '12px 0 0', fontSize: 12, color: C.mute }}>Klikk på et anlegg for å se oksygen siste sju dager.</p>
    </div>
    <div style={{ padding: 18, background: C.soft, display: 'flex', flexDirection: 'column', gap: 14, minWidth: 0 }}>
      <AiCard title="Dagens oppsummering">Fire av fem anlegg er normale. <b>Krabbedam 2</b> trenger tilsyn i dag, og Rekedam 1 bør følges med på. Høstingen på Tanglinje A kan starte torsdag.</AiCard>
      <div style={{ padding: 16, borderRadius: 12, background: '#fff', border: `1px solid ${C.line}` }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 10 }}>
          <b style={{ fontSize: 14 }}>{site.name}</b><span style={{ fontSize: 12, color: C.mute }}>Oksygen, 7 dager</span>
        </div>
        <Spark data={site.trend} color={site.alert ? C.red : site.watch ? C.amber : C.green} />
        <p style={{ margin: 0, fontSize: 13, color: site.alert ? C.red : C.ink }}>{site.alert || site.watch || 'Stabile verdier. Ingen tiltak nødvendig.'}</p>
      </div>
    </div>
  </div>;
}

function Kpis() {
  return <div style={{ padding: 18, display: 'flex', flexDirection: 'column', gap: 14 }}>
    <div className="demo-kpi4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0,1fr))', gap: 12 }}>
      {KPIS.map(k => { const hit = k.value >= k.goal; const pct = Math.min(100, (k.value / k.goal) * 100); return <div key={k.label} style={{ padding: 14, borderRadius: 12, border: `1px solid ${C.line}`, background: '#fff', minWidth: 0 }}>
        <div style={{ fontSize: 12, color: C.mute }}>{k.label}</div>
        <div style={{ margin: '6px 0 2px', fontSize: 24, fontWeight: 700, letterSpacing: '-.02em', fontVariantNumeric: 'tabular-nums' }}>{fmt(k.value)} <span style={{ fontSize: 13, fontWeight: 500, color: C.mute }}>{k.unit}</span></div>
        <div style={{ fontSize: 12, color: hit ? C.green : C.amber, fontWeight: 600 }}>Mål {fmt(k.goal)} {k.unit} · {hit ? 'nådd' : 'under målet'}</div>
        <div style={{ height: 5, marginTop: 10, borderRadius: 4, background: C.soft, overflow: 'hidden' }}><div style={{ width: pct + '%', height: '100%', background: hit ? C.green : C.amber }} /></div>
        <p style={{ margin: '10px 0 0', fontSize: 12, lineHeight: 1.5, color: C.mute }}>{k.note}</p>
      </div>; })}
    </div>
    <AiCard title="Hva AI ser denne måneden">Tre av fire mål er nådd. Avvikene på tang og krabber har samme årsak: <b>høy vanntemperatur</b> i midten av måneden. Forslag: flytt høstingen på linje B fram, og øk luftingen i krabbedammene når temperaturen passerer 30 °C.</AiCard>
  </div>;
}

function Grant() {
  const [prog, setProg] = useState(0);
  const [step, setStep] = useState(-1);
  const timer = useRef(null);
  const running = step >= 0 && step < STEPS.length;
  const done = step >= STEPS.length;
  useEffect(() => {
    if (!running) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    timer.current = setTimeout(() => setStep(s => s + 1), reduced ? 0 : 850);
    return () => clearTimeout(timer.current);
  }, [step, running]);
  const pick = i => { setProg(i); setStep(-1); };
  return <div className="demo-dash" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.5fr)' }}>
    <div style={{ padding: 18, borderRight: `1px solid ${C.line}`, background: C.soft, display: 'flex', flexDirection: 'column', gap: 14, minWidth: 0 }}>
      <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: '.06em', textTransform: 'uppercase', color: C.mute }}>Utlysning</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {PROGRAMMES.map((p, i) => <button key={p} onClick={() => pick(i)} aria-pressed={prog === i} disabled={running} style={{ textAlign: 'left', padding: '10px 12px', borderRadius: 10, border: `1px solid ${prog === i ? C.green : C.line}`, background: prog === i ? '#fff' : 'transparent', color: C.ink, fontFamily: 'inherit', fontSize: 13, fontWeight: 600, cursor: running ? 'progress' : 'pointer' }}>{p}<span style={{ display: 'block', fontSize: 12, fontWeight: 400, color: C.mute }}>Eksempel · frist om tre uker</span></button>)}
      </div>
      <button onClick={() => setStep(0)} disabled={running} style={{ padding: '11px 18px', borderRadius: 10, border: 'none', background: running ? '#8FA89A' : C.green, color: '#fff', fontFamily: 'inherit', fontWeight: 600, fontSize: 14, cursor: running ? 'progress' : 'pointer' }}>{running ? 'AI skriver ...' : done ? 'Skriv på nytt' : 'Skriv utkast'}</button>
      <ol style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
        {STEPS.map(([t, s], i) => { const state = step > i ? 'done' : step === i ? 'work' : 'wait'; return <li key={t} style={{ display: 'grid', gridTemplateColumns: '20px 1fr', gap: 10, opacity: state === 'wait' ? 0.4 : 1, transition: 'opacity 300ms' }}>
          <span style={{ width: 18, height: 18, marginTop: 1, borderRadius: '50%', display: 'grid', placeItems: 'center', fontSize: 10, color: '#fff', background: state === 'done' ? C.green : 'transparent', border: state === 'done' ? 'none' : `1.5px solid ${state === 'work' ? C.green : '#BFD1C6'}` }}>{state === 'done' ? '✓' : ''}</span>
          <span><span style={{ display: 'block', fontSize: 13, fontWeight: 500 }}>{t}</span><span style={{ fontSize: 12, color: C.mute }}>{s}</span></span>
        </li>; })}
      </ol>
    </div>
    <div style={{ padding: 18, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 10, flexWrap: 'wrap' }}>
        <b style={{ fontSize: 16 }}>Søknad: {PROGRAMMES[prog]}</b>
        <span style={{ fontSize: 12, color: C.mute }}>{done ? 'Utkast · venter på gjennomgang' : 'Ikke startet'}</span>
      </div>
      {DRAFT.map(([h, text, src], i) => { const shown = done || step >= i + 2; return <section key={h} style={{ padding: 14, borderRadius: 12, border: `1px solid ${C.line}`, background: shown ? '#fff' : C.soft, transition: 'background 300ms' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 10, flexWrap: 'wrap', marginBottom: 6 }}><b style={{ fontSize: 14 }}>{h}</b>{shown && <span style={{ fontSize: 11, fontWeight: 600, color: C.navy, background: '#E6EEF7', padding: '2px 8px', borderRadius: 100 }}>{src}</span>}</div>
        {shown ? <p style={{ margin: 0, fontSize: 13, lineHeight: 1.6 }}>{text}</p>
          : <div aria-hidden="true" style={{ display: 'flex', flexDirection: 'column', gap: 6 }}><i style={{ height: 6, borderRadius: 4, background: C.line }} /><i style={{ height: 6, width: '70%', borderRadius: 4, background: C.line }} /></div>}
      </section>; })}
      {done && <p style={{ margin: 0, fontSize: 12, color: C.mute }}>Teamet kontrollerer tallene og teksten før søknaden sendes.</p>}
    </div>
  </div>;
}

const TABS = [['drift', 'Drift'], ['kpi', 'KPI-er'], ['soknad', 'Søknad']];

export function AquaApp() {
  const [tab, setTab] = useState('drift');
  return <div style={{ fontFamily: C.font, color: C.ink, background: '#fff', border: `1px solid ${C.line}`, borderRadius: 18, overflow: 'hidden', boxShadow: '0 40px 100px -40px rgba(0,0,0,0.45)' }}>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, padding: '14px 18px', borderBottom: `1px solid ${C.line}`, flexWrap: 'wrap' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <span style={{ fontWeight: 800, fontSize: 18, letterSpacing: '-.02em' }}><span style={{ color: C.navy }}>Phyco</span><span style={{ color: C.red }}>Nor</span></span>
        <span style={{ fontSize: 13, color: C.mute }}>5 anlegg · eksempeldata</span>
      </div>
      <div role="tablist" aria-label="Visning" style={{ display: 'flex', gap: 4, padding: 4, borderRadius: 12, background: C.soft }}>
        {TABS.map(([id, label]) => <button key={id} role="tab" aria-selected={tab === id} onClick={() => setTab(id)} style={{ padding: '8px 14px', borderRadius: 9, border: 'none', background: tab === id ? C.ink : 'transparent', color: tab === id ? '#fff' : C.ink, fontFamily: 'inherit', fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>{label}</button>)}
      </div>
    </div>
    {tab === 'drift' && <Ops />}
    {tab === 'kpi' && <Kpis />}
    {tab === 'soknad' && <Grant />}
  </div>;
}
