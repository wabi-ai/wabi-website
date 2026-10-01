// Clinic agent: a working recreation of the daily settlement run. Fictional patients and amounts.
import React, { useEffect, useRef, useState } from 'react';

const C = { ink: '#1A2B22', mute: '#6B7570', line: '#E4E7E2', soft: '#F7F8F5', green: '#1E7B4A', amber: '#B7791F', font: '"Inter", system-ui, sans-serif' };

const ROWS = [
  { id: 'P-1042', type: 'Konsultasjon', helfo: 166, own: 192, frikort: false },
  { id: 'P-1043', type: 'Konsultasjon, lab', helfo: 241, own: 192, frikort: false },
  { id: 'P-1044', type: 'Telefonkonsultasjon', helfo: 98, own: 0, frikort: true },
  { id: 'P-1045', type: 'Konsultasjon', helfo: 166, own: 192, frikort: false, issue: 'Ukjent takst i dagsoppgjøret' },
  { id: 'P-1046', type: 'Konsultasjon, barn', helfo: 252, own: 0, frikort: false },
  { id: 'P-1047', type: 'Konsultasjon', helfo: 166, own: 150, frikort: false, issue: 'Betalt 150 kr, egenandel er 192 kr' },
  { id: 'P-1048', type: 'Konsultasjon, lab', helfo: 241, own: 0, frikort: true },
];

const STEPS = [
  ['Hentet dagsoppgjøret fra journalsystemet', `${ROWS.length} konsultasjoner, uten journaldata`],
  ['Skilt Helfo-refusjon fra egenandel', 'Takst for takst'],
  ['Sjekket frikort, barn og unntak', `${ROWS.filter(r => r.frikort).length} frikort funnet`],
  ['Ført bilag i Tripletex', 'Riktig konto og mva'],
  ['Stoppet avvik for godkjenning', `${ROWS.filter(r => r.issue).length} saker`],
];

const kr = n => n.toLocaleString('nb-NO') + ' kr';

export function ClinicApp() {
  const [step, setStep] = useState(-1);
  const [approved, setApproved] = useState({});
  const timer = useRef(null);
  const running = step >= 0 && step < STEPS.length;
  const done = step >= STEPS.length;

  useEffect(() => {
    if (!running) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    timer.current = setTimeout(() => setStep(s => s + 1), reduced ? 0 : 900);
    return () => clearTimeout(timer.current);
  }, [step, running]);

  const run = () => { setApproved({}); setStep(0); };
  const rowStatus = r => {
    if (step < 3) return step < 0 ? 'Venter' : 'Leser';
    if (r.issue) return approved[r.id] ? 'Godkjent' : (step >= 4 ? 'Til godkjenning' : 'Sjekkes');
    return 'Ført';
  };
  const badge = s => ({ 'Ført': [C.green, '#E6F3EC'], 'Godkjent': [C.green, '#E6F3EC'], 'Til godkjenning': [C.amber, '#FBF1DF'], 'Sjekkes': [C.mute, C.soft], 'Leser': [C.mute, C.soft], 'Venter': [C.mute, C.soft] }[s]);
  const helfoSum = ROWS.reduce((a, r) => a + r.helfo, 0);
  const issues = ROWS.filter(r => r.issue);
  const open = issues.filter(r => !approved[r.id]).length;

  return <div style={{ fontFamily: C.font, color: C.ink, background: '#fff', border: `1px solid ${C.line}`, borderRadius: 18, overflow: 'hidden', boxShadow: '0 40px 100px -40px rgba(0,0,0,0.45)' }}>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, padding: '16px 22px', borderBottom: `1px solid ${C.line}`, flexWrap: 'wrap' }}>
      <div><div style={{ fontWeight: 700, fontSize: 18 }}>Dagsoppgjør</div><div style={{ fontSize: 13, color: C.mute }}>Legekontoret · tirsdag 30. september · eksempeldata</div></div>
      <button onClick={run} disabled={running} style={{ padding: '10px 18px', borderRadius: 10, border: 'none', background: running ? '#9DB5A6' : C.green, color: '#fff', fontFamily: 'inherit', fontWeight: 600, fontSize: 14, cursor: running ? 'progress' : 'pointer' }}>{running ? 'Agenten jobber ...' : done ? 'Kjør på nytt' : 'Kjør dagsoppgjøret'}</button>
    </div>
    <div className="demo-dash" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.5fr) minmax(0,1fr)' }}>
      <div style={{ padding: 18, borderRight: `1px solid ${C.line}`, minWidth: 0 }}>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13, minWidth: 460 }}>
            <thead><tr style={{ color: C.mute, textAlign: 'left' }}>{['Pasient', 'Konsultasjon', 'Helfo', 'Egenandel', 'Status'].map(h => <th key={h} style={{ fontWeight: 500, padding: '6px 8px', borderBottom: `1px solid ${C.line}` }}>{h}</th>)}</tr></thead>
            <tbody>{ROWS.map(r => { const s = rowStatus(r); const [fg, bg] = badge(s); return <tr key={r.id} style={{ background: r.issue && step >= 4 && !approved[r.id] ? '#FFFBF2' : 'transparent', transition: 'background 300ms' }}>
              <td style={{ padding: '9px 8px', borderBottom: `1px solid ${C.line}`, fontVariantNumeric: 'tabular-nums' }}>{r.id}</td>
              <td style={{ padding: '9px 8px', borderBottom: `1px solid ${C.line}` }}>{r.type}</td>
              <td style={{ padding: '9px 8px', borderBottom: `1px solid ${C.line}`, fontVariantNumeric: 'tabular-nums' }}>{step >= 1 ? kr(r.helfo) : '·'}</td>
              <td style={{ padding: '9px 8px', borderBottom: `1px solid ${C.line}`, fontVariantNumeric: 'tabular-nums' }}>{step >= 2 ? (r.frikort ? 'Frikort' : kr(r.own)) : '·'}</td>
              <td style={{ padding: '9px 8px', borderBottom: `1px solid ${C.line}` }}><span style={{ padding: '3px 8px', borderRadius: 6, background: bg, color: fg, fontSize: 12, fontWeight: 600, whiteSpace: 'nowrap' }}>{s}</span></td>
            </tr>; })}</tbody>
          </table>
        </div>
        <div style={{ display: 'flex', gap: 24, marginTop: 14, fontSize: 13, color: C.mute, flexWrap: 'wrap' }}>
          <span>Refusjonskrav til Helfo: <b style={{ color: C.ink }}>{step >= 1 ? kr(helfoSum) : '·'}</b></span>
          <span>Bilag ført: <b style={{ color: C.ink }}>{step >= 3 ? ROWS.length - issues.length : 0} av {ROWS.length}</b></span>
        </div>
      </div>
      <div style={{ padding: 18, background: C.soft, display: 'flex', flexDirection: 'column', gap: 14, minWidth: 0 }}>
        <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: '.06em', textTransform: 'uppercase', color: C.mute }}>Agentens logg</div>
        <ol style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
          {STEPS.map(([t, s], i) => { const state = step > i ? 'done' : step === i ? 'work' : 'wait'; return <li key={t} style={{ display: 'grid', gridTemplateColumns: '20px 1fr', gap: 10, alignItems: 'start', opacity: state === 'wait' ? 0.4 : 1, transition: 'opacity 300ms' }}>
            <span style={{ width: 18, height: 18, marginTop: 1, borderRadius: '50%', display: 'grid', placeItems: 'center', fontSize: 10, color: '#fff', background: state === 'done' ? C.green : 'transparent', border: state === 'done' ? 'none' : `1.5px solid ${state === 'work' ? C.green : '#C9D0CB'}` }}>{state === 'done' ? '✓' : ''}</span>
            <span><span style={{ display: 'block', fontSize: 14, fontWeight: 500 }}>{t}</span><span style={{ fontSize: 12, color: C.mute }}>{s}</span></span>
          </li>; })}
        </ol>
        {step >= 4 && <div style={{ marginTop: 4, padding: 14, borderRadius: 12, background: '#fff', border: `1px solid ${C.line}` }}>
          <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 8 }}>{open ? `${open} avvik venter på deg` : 'Alt er ført. Ingen avvik igjen.'}</div>
          {issues.map(r => <div key={r.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, padding: '8px 0', borderTop: `1px solid ${C.line}` }}>
            <span style={{ fontSize: 13 }}><b style={{ fontWeight: 600 }}>{r.id}</b> · {r.issue}</span>
            {approved[r.id] ? <span style={{ fontSize: 12, fontWeight: 600, color: C.green, whiteSpace: 'nowrap' }}>Godkjent ✓</span>
              : <button onClick={() => setApproved(a => ({ ...a, [r.id]: true }))} style={{ flex: 'none', padding: '6px 12px', borderRadius: 8, border: `1px solid ${C.green}`, background: '#fff', color: C.green, fontFamily: 'inherit', fontSize: 12, fontWeight: 600, cursor: 'pointer' }}>Godkjenn</button>}
          </div>)}
        </div>}
        {step < 0 && <p style={{ margin: 0, fontSize: 13, color: C.mute }}>Trykk «Kjør dagsoppgjøret» for å se agenten jobbe. Du godkjenner avvikene til slutt.</p>}
      </div>
    </div>
  </div>;
}
