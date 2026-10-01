// Website agents: step through how the agents build and run a site. Fictional company and log.
import React, { useEffect, useState } from 'react';

const W = { ink: '#1E1B2E', mute: '#6E6A7C', line: '#E6E3EC', soft: '#F7F6FA', accent: '#5B45A8', green: '#1E7B4A', font: '"Inter", system-ui, sans-serif' };

const STEPS = [
  { t: 'Leser', d: 'Agenten leser nettsiden dere har i dag, konkurrentene og det dere sender oss.', log: ['09:02', 'Leste 14 sider og 3 konkurrenter'] },
  { t: 'Planlegger', d: 'Sidekart og innhold per side, skrevet for mennesker og søkemotorer. Et menneske hos oss godkjenner.', log: ['09:40', 'Sidekart med 6 sider godkjent'] },
  { t: 'Bygger', d: 'Kodeagenter bygger sidene i ekte kode. Hver side testes for hastighet, mobil og tilgjengelighet.', log: ['11:15', '6 sider bygget, 98 av 100 i ytelse'] },
  { t: 'Kontrollerer', d: 'En egen agent sjekker lenker, tekst, bilder og skjemaer. Feil sendes tilbake til byggesteget.', log: ['11:32', '2 brutte lenker funnet og rettet'] },
  { t: 'Publiserer', d: 'Siden går live. Etterpå holder agentene innholdet oppdatert fra systemene deres.', log: ['12:00', 'Publisert på bedrift-x.no'] },
];
const PAGES = ['Forside', 'Tjenester', 'Om oss', 'Priser', 'Blogg', 'Kontakt'];

function Preview({ i }) {
  const box = { borderRadius: 6, background: '#ECEAF2' };
  if (i === 0) return <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
    {['bedrift-x.no', 'konkurrent-a.no', 'konkurrent-b.no', 'konkurrent-c.no'].map((u, k) => <div key={u} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px', borderRadius: 10, background: '#fff', border: `1px solid ${W.line}` }}>
      <span style={{ width: 8, height: 8, borderRadius: '50%', background: k ? '#B9B3CC' : W.accent }}></span><span style={{ fontSize: 13 }}>{u}</span><span style={{ marginLeft: 'auto', fontSize: 12, color: W.mute }}>{k ? 'Konkurrent' : '14 sider lest'}</span></div>)}
  </div>;
  if (i === 1) return <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
    <span style={{ padding: '8px 14px', borderRadius: 8, background: W.accent, color: '#fff', fontSize: 13, fontWeight: 600 }}>Forside</span>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8, width: '100%' }}>{PAGES.slice(1).map(p => <span key={p} style={{ padding: '8px 6px', borderRadius: 8, background: '#fff', border: `1px solid ${W.line}`, fontSize: 12, textAlign: 'center' }}>{p}</span>)}</div>
    <span style={{ fontSize: 12, color: W.green, fontWeight: 600 }}>Godkjent av Wabi ✓</span>
  </div>;
  // Steps 2 to 4: the page itself, progressively more finished.
  const real = i >= 2;
  return <div style={{ borderRadius: 10, overflow: 'hidden', border: `1px solid ${W.line}`, background: '#fff' }}>
    <div style={{ height: 120, padding: 16, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', gap: 6, background: real ? 'linear-gradient(135deg,#2E2650,#5B45A8)' : '#ECEAF2', color: '#fff' }}>
      {real ? <><span style={{ fontSize: 10, letterSpacing: '.1em', opacity: .8 }}>BEDRIFT X</span><b style={{ fontSize: 18, lineHeight: 1.2 }}>Regnskap som er gjort i tide.</b></> : <><span style={{ ...box, width: '30%', height: 8 }}></span><span style={{ ...box, width: '70%', height: 14 }}></span></>}
    </div>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8, padding: 12 }}>{[0, 1, 2].map(k => <div key={k} style={{ height: 44, borderRadius: 8, background: real ? '#F2F0F8' : '#ECEAF2', border: real ? `1px solid ${W.line}` : 'none' }}></div>)}</div>
    {i >= 3 && <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', padding: '0 12px 12px' }}>{['Ytelse 98', 'Mobil ✓', 'Lenker ✓', 'Skjema ✓'].map(x => <span key={x} style={{ padding: '4px 8px', borderRadius: 6, background: '#E6F3EC', color: W.green, fontSize: 11, fontWeight: 600 }}>{x}</span>)}</div>}
  </div>;
}

export function WebsiteApp() {
  const [i, setI] = useState(0);
  const [auto, setAuto] = useState(true);
  useEffect(() => {
    if (!auto || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const t = setTimeout(() => setI(n => (n + 1) % STEPS.length), 3200);
    return () => clearTimeout(t);
  }, [i, auto]);
  const pick = k => { setAuto(false); setI(k); };

  return <div style={{ fontFamily: W.font, color: W.ink, background: '#fff', border: `1px solid ${W.line}`, borderRadius: 18, overflow: 'hidden', boxShadow: '0 40px 100px -40px rgba(0,0,0,0.45)' }}>
    <div className="demo-dash" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.1fr)' }}>
      <ol style={{ listStyle: 'none', margin: 0, padding: 18, display: 'flex', flexDirection: 'column', gap: 8, borderRight: `1px solid ${W.line}` }}>
        {STEPS.map((s, k) => { const on = k === i; return <li key={s.t}><button onClick={() => pick(k)} aria-pressed={on} style={{ width: '100%', display: 'grid', gridTemplateColumns: '30px 1fr', gap: 12, alignItems: 'start', textAlign: 'left', padding: '12px 14px', borderRadius: 12, cursor: 'pointer', fontFamily: 'inherit', border: `1px solid ${on ? W.accent : W.line}`, background: on ? '#F2EFFA' : '#fff', color: W.ink }}>
          <span style={{ width: 28, height: 28, borderRadius: '50%', display: 'grid', placeItems: 'center', fontSize: 13, fontWeight: 700, color: '#fff', background: k < i ? W.green : on ? W.accent : '#B9B3CC' }}>{k < i ? '✓' : k + 1}</span>
          <span><b style={{ display: 'block', fontSize: 15 }}>{s.t}</b>{on && <span style={{ display: 'block', marginTop: 4, fontSize: 13, lineHeight: 1.5, color: W.mute }}>{s.d}</span>}</span>
        </button></li>; })}
      </ol>
      <div style={{ padding: 18, background: W.soft, display: 'flex', flexDirection: 'column', gap: 14, minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '8px 12px', borderRadius: 10, background: '#fff', border: `1px solid ${W.line}`, fontSize: 12, color: W.mute }}>
          <span style={{ display: 'flex', gap: 4 }}>{[0, 1, 2].map(k => <span key={k} style={{ width: 8, height: 8, borderRadius: '50%', background: '#DDD9E6' }}></span>)}</span>
          <span style={{ marginLeft: 8 }}>{i === 4 ? 'https://bedrift-x.no' : 'forhåndsvisning'}</span>
          {i === 4 && <span style={{ marginLeft: 'auto', color: W.green, fontWeight: 600 }}>Live</span>}
        </div>
        <Preview i={i} />
        <div style={{ borderRadius: 12, background: '#fff', border: `1px solid ${W.line}`, overflow: 'hidden' }}>
          <div style={{ padding: '10px 14px', borderBottom: `1px solid ${W.line}`, fontSize: 12, fontWeight: 600, letterSpacing: '.06em', textTransform: 'uppercase', color: W.mute }}>Logg · Ny nettside</div>
          <ul style={{ listStyle: 'none', margin: 0, padding: '4px 14px 8px' }}>{STEPS.map((s, k) => <li key={s.t} style={{ display: 'grid', gridTemplateColumns: '48px 1fr', gap: 10, padding: '7px 0', fontSize: 13, opacity: k <= i ? 1 : 0.3, transition: 'opacity 300ms' }}><span style={{ fontWeight: 600, color: W.accent }}>{s.log[0]}</span><span>{s.log[1]}</span></li>)}</ul>
        </div>
      </div>
    </div>
  </div>;
}
