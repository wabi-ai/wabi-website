// Used-car dealer system: a working recreation with fictional vehicles and a fictional dealer.
import React, { useEffect, useRef, useState } from 'react';
import { LU } from './brand.jsx';

const DL = { ink: '#1F1F1F', mute: '#6B6B6B', line: '#E6E6E6', bg: '#F2F2F2', font: '"Hanken Grotesk", system-ui, sans-serif' };
const DCARS = [
  { m: 'Kompakt elbil', y: 2019, km: '84 200', f: 'Elektrisk', reg: 'EL 10231', p: '189 900', d: 12, s: 'Til salgs' },
  { m: 'Varebil, lang', y: 2017, km: '142 500', f: 'Diesel', reg: 'AB 44120', p: '149 000', d: 27, s: 'Solgt' },
  { m: 'Stasjonsvogn', y: 2020, km: '61 000', f: 'Hybrid', reg: 'DN 55872', p: '279 000', d: 4, s: 'Til salgs' },
  { m: 'SUV, firehjulstrekk', y: 2018, km: '118 300', f: 'Diesel', reg: 'KT 90114', p: '229 500', d: 41, s: 'Reservert' },
  { m: 'Liten bybil', y: 2016, km: '96 800', f: 'Bensin', reg: 'ZX 30027', p: '79 900', d: 9, s: 'Solgt' },
  { m: 'Elbil, lang rekkevidde', y: 2021, km: '38 400', f: 'Elektrisk', reg: 'EV 72190', p: '319 000', d: 2, s: 'Til salgs' },
];
const PASTEL = [['#CFE4F7', '#B6D3EE'], ['#D3DCE5', '#BFCAD6'], ['#E6DADF', '#D6C6CD'], ['#F4DADC', '#E9C4C8']];
const photo = { background: 'linear-gradient(180deg,#D6DCE2 0%,#CDD3CF 55%,#B8C2AE 56%,#AEB9A2 100%)' };

function Plate({ value, onChange }) {
  return <div style={{ background: '#161616', borderRadius: 18, padding: '10px 10px 6px', width: '100%', maxWidth: 420, boxShadow: '0 10px 24px -10px rgba(0,0,0,0.5)' }}>
    <div style={{ display: 'flex', background: '#fff', borderRadius: 10, overflow: 'hidden', border: '3px solid #6B93BF' }}>
      <div style={{ width: 62, background: '#0B3AA0', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 6, flex: 'none' }}>
        <span style={{ position: 'relative', width: 30, height: 22, background: '#D6262E', borderRadius: 2 }}><span style={{ position: 'absolute', left: 8, top: 0, bottom: 0, width: 6, background: '#fff' }}></span><span style={{ position: 'absolute', top: 8, left: 0, right: 0, height: 6, background: '#fff' }}></span><span style={{ position: 'absolute', left: 10, top: 0, bottom: 0, width: 2, background: '#0B3AA0' }}></span><span style={{ position: 'absolute', top: 10, left: 0, right: 0, height: 2, background: '#0B3AA0' }}></span></span>
        <b style={{ color: '#fff', fontSize: 22, fontFamily: 'Arial, sans-serif' }}>N</b></div>
      <input aria-label="Registreringsnummer" value={value} onChange={e => onChange(e.target.value.toUpperCase())} placeholder="EB 12345" style={{ flex: 1, minWidth: 0, border: 'none', outline: 'none', padding: '18px 12px', fontFamily: 'Arial, sans-serif', fontSize: 'clamp(28px, 8vw, 44px)', fontWeight: 700, letterSpacing: '0.08em', textAlign: 'center', color: '#1F1F1F' }}/>
    </div>
    <div style={{ textAlign: 'center', color: '#BDBDBD', fontSize: 12, fontWeight: 700, letterSpacing: '0.35em', padding: '6px 0 2px' }}>NORDVEI BIL AS</div>
  </div>;
}

export function DealerApp() {
  const [view, setView] = useState('Dashbord');
  const [filter, setFilter] = useState('Alle');
  const [modal, setModal] = useState(false);
  const dialog = useRef(null);
  useEffect(() => { if (modal && dialog.current && !dialog.current.open) dialog.current.showModal(); }, [modal]);
  const [reg, setReg] = useState('');
  const [got, setGot] = useState(false);
  const white = { background: '#fff', border: `1px solid ${DL.line}`, borderRadius: 16 };
  const H1 = t => <div style={{ fontWeight: 700, fontSize: 36, letterSpacing: '-0.02em', color: DL.ink }}>{t}</div>;
  const nav = [['Dashbord', 'layout-grid'], null, ['Kjøretøy', 'car'], ['Henvendelser', 'inbox'], ['Prøvekjøringer', 'key-round'], ['Kunder', 'users'], ['Kontrakter', 'file-pen-line'], 'gap', ['Økonomi', 'chart-line']];
  const badge = s => ({ 'Til salgs': ['#1E7B34', '#fff'], 'Solgt': ['#262626', '#fff'], 'Reservert': ['#fff', DL.ink] }[s] || ['#fff', DL.ink]);
  const cars = DCARS.filter(c => filter === 'Alle' || c.s === filter);
  const open = () => { setModal(true); setGot(false); setReg(''); };
  return <div style={{ fontFamily: DL.font, color: DL.ink, borderRadius: 18, overflow: 'hidden', border: `1px solid ${DL.line}`, position: 'relative', boxShadow: '0 40px 100px -40px rgba(0,0,0,0.45)', background: '#fff' }}>
    <div style={{ height: 60, background: '#1C1C1C', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px' }}>
      <span style={{ color: '#fff', fontWeight: 800, fontSize: 22, letterSpacing: '-0.01em' }}>nordvei bil as</span>
      <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}><span style={{ position: 'relative', filter: 'invert(1)' }}>{LU('bell', 20, 0.9)}<span style={{ position: 'absolute', right: -2, top: -2, width: 7, height: 7, borderRadius: '50%', background: '#1B8CF0' }}></span></span><span style={{ width: 34, height: 34, borderRadius: '50%', background: '#fff', display: 'grid', placeItems: 'center', fontWeight: 700, fontSize: 13 }}>NB</span></div>
    </div>
    <div className="demo-mobile-nav" aria-label="Navigasjon i eksempelet">{['Dashbord', 'Kjøretøy', 'Kontrakter'].map(v => <button key={v} aria-pressed={view === v} onClick={() => setView(v)}>{v}</button>)}</div>
    <div className="demo-dash" style={{ display: 'grid', gridTemplateColumns: '200px minmax(0,1fr)', minHeight: 680 }}>
      <aside className="demo-dash-nav" style={{ background: '#FAFAFA', borderRight: `1px solid ${DL.line}`, padding: '14px 10px', display: 'flex', flexDirection: 'column', gap: 2 }}>
        {nav.map((n, i) => n === null ? <div key={i} style={{ fontSize: 13, color: DL.mute, padding: '14px 12px 6px' }}>Salg</div> : n === 'gap' ? <div key={i} style={{ height: 22 }}></div> : <button key={n[0]} onClick={() => ['Dashbord', 'Kjøretøy', 'Kontrakter'].includes(n[0]) && setView(n[0])} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '9px 12px', borderRadius: 12, border: 'none', background: view === n[0] ? '#EBEBEB' : 'transparent', fontFamily: 'inherit', fontSize: 15, fontWeight: view === n[0] ? 600 : 400, color: DL.ink, cursor: 'pointer', textAlign: 'left' }}>{LU(n[1], 18, 0.75)}{n[0]}</button>)}
        <div style={{ marginTop: 'auto', borderTop: `1px solid ${DL.line}`, paddingTop: 10, display: 'flex', flexDirection: 'column', gap: 2 }}>{[['Innstillinger', 'store'], ['Hjelp', 'circle-help']].map(([n, ic]) => <div key={n} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '9px 12px', fontSize: 15 }}>{LU(ic, 18, 0.75)}{n}</div>)}</div>
      </aside>
      <div style={{ background: DL.bg, padding: '28px 24px', display: 'flex', flexDirection: 'column', gap: 22, minWidth: 0 }}>
        {view === 'Dashbord' && <>
          <div>{H1('God dag.')}<div style={{ fontSize: 14, color: DL.mute, marginTop: 4 }}>Fredag 25. september · NORDVEI BIL AS</div><div style={{ fontSize: 15, marginTop: 12 }}>3 biler til salgs. 2 punkter er nytt siden sist.</div></div>
          <div className="demo-kpi4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0,1fr))', gap: 14 }}>
            {[['Ta imot ny bil', 'Skriv inn reg.nr, resten hentes', open], ['Legg til kunde', 'Ny kjøper eller interessent'], ['Book prøvekjøring', 'Velg bil, fører og tid'], ['Lag kontrakt', 'Ferdig utfylt fra bilkortet', () => setView('Kontrakter')]].map(([t, d, fn], i) => <button key={t} onClick={fn} disabled={!fn} title={!fn ? 'Visningseksempel' : undefined} style={{ textAlign: 'left', fontFamily: 'inherit', padding: '18px 18px', borderRadius: 14, border: `1px solid ${PASTEL[i][1]}`, background: PASTEL[i][0], boxShadow: '0 2px 6px -2px rgba(0,0,0,0.12)', cursor: fn ? 'pointer' : 'default', color: DL.ink }}><div style={{ fontWeight: 700, fontSize: 17 }}>{t}</div><div style={{ fontSize: 14, color: '#4A4A4A', marginTop: 6 }}>{d}</div></button>)}
          </div>
          <div style={white}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', padding: 20, gap: 16, flexWrap: 'wrap' }}>
              <div><div style={{ fontSize: 14, color: DL.mute }}>Bruttofortjeneste i september</div><div style={{ fontWeight: 700, fontSize: 'clamp(32px, 5vw, 48px)', letterSpacing: '-0.02em', margin: '6px 0' }}>kr 184 500</div><div style={{ fontSize: 14 }}>+kr 19 800 mot august</div></div>
              <div style={{ textAlign: 'center' }}><svg width="150" height="40" viewBox="0 0 150 40"><polyline points="0,34 30,30 60,26 90,12 120,18 150,6" fill="none" stroke="#1F1F1F" strokeWidth="1.8"/></svg><div style={{ fontSize: 12, color: DL.mute }}>Siste 6 måneder</div></div>
            </div>
            <div className="demo-kpi3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0,1fr))', borderTop: `1px solid ${DL.line}` }}>{[['Salg i september', '9', '41 hittil i år'], ['BF per bil', 'kr 20 500', 'Snitt hittil i år'], ['Leads', '14', '5 nye denne uken']].map(([k, v, s], i) => <div key={k} style={{ padding: 20, borderLeft: i ? `1px solid ${DL.line}` : 'none' }}><div style={{ fontSize: 14, color: DL.mute }}>{k}</div><div style={{ fontWeight: 700, fontSize: 30, margin: '6px 0' }}>{v}</div><div style={{ fontSize: 14, color: '#4A4A4A' }}>{s}</div></div>)}</div>
          </div>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}><b style={{ fontSize: 17 }}>Ståtid på lageret</b><span style={{ fontSize: 15 }}>Åpne lageret</span></div>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '4px 10px', borderRadius: 8, background: '#E8E8E8', fontSize: 13, marginBottom: 10 }}><span style={{ width: 7, height: 7, borderRadius: '50%', background: '#1E7B34' }}></span>3 under 30 dager</span>
            <div style={white}>{DCARS.filter(c => c.s !== 'Solgt').map((c, i, a) => <div key={c.reg} className="demo-stock-row" style={{ display: 'grid', gridTemplateColumns: '96px minmax(0,1fr) auto', gap: 16, alignItems: 'center', padding: '12px 18px', borderBottom: i < a.length - 1 ? `1px solid ${DL.line}` : 'none' }}>
              <div style={{ position: 'relative', height: 60, borderRadius: 8, ...photo }}><span style={{ position: 'absolute', left: -4, top: -4, width: 12, height: 12, borderRadius: '50%', background: c.d > 30 ? '#E0892B' : '#1E7B34', border: '2px solid #fff' }}></span></div>
              <div style={{ minWidth: 0 }}><div style={{ fontSize: 17, fontWeight: 500 }}>{c.y} {c.m}</div><div style={{ fontSize: 14, color: DL.mute }}>{c.d > 30 ? 'Over normal omløpstid' : 'Innenfor normal omløpstid'}</div></div>
              <div style={{ textAlign: 'right' }}><div style={{ fontSize: 17, fontWeight: 500 }}>{c.d} d</div><div style={{ fontSize: 13, color: DL.mute, whiteSpace: 'nowrap' }}>BF kr {(c.d * 470 + 9000).toLocaleString('nb-NO')}</div></div></div>)}</div>
          </div>
        </>}
        {view === 'Kjøretøy' && <>
          <div>{H1('Kjøretøy')}<div style={{ fontSize: 14, color: DL.mute, marginTop: 4 }}>{DCARS.filter(c => c.s !== 'Solgt').length} biler i lager · {DCARS.length} totalt</div></div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <div style={{ ...white, borderRadius: 12, flex: '1 1 260px', display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px', color: '#9A9A9A', fontSize: 15 }}>{LU('search', 17, 0.5)}Søk merke, modell, reg.nr</div>
            {['Alle merker', 'Alt drivstoff', 'Ståtid'].map(x => <div key={x} style={{ ...white, borderRadius: 12, padding: '10px 14px', fontSize: 15, whiteSpace: 'nowrap' }}>{x} ▾</div>)}
          </div>
          <div style={{ display: 'flex', gap: 4, alignItems: 'center', flexWrap: 'wrap' }}>{['Alle', 'Til salgs', 'Reservert', 'Solgt'].map(f => <button key={f} onClick={() => setFilter(f)} style={{ padding: '7px 14px', borderRadius: 10, border: 'none', background: filter === f ? '#fff' : 'transparent', boxShadow: filter === f ? '0 1px 2px rgba(0,0,0,0.08)' : 'none', fontFamily: 'inherit', fontSize: 15, color: DL.ink, cursor: 'pointer' }}>{f}{f !== 'Alle' && <span style={{ color: DL.mute, marginLeft: 6 }}>{DCARS.filter(c => c.s === f).length}</span>}</button>)}<span style={{ fontSize: 14, color: DL.mute, marginLeft: 8 }}>{cars.length} treff</span></div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 230px), 1fr))', gap: 16 }}>
            {cars.map(c => { const [bg, fg] = badge(c.s); return <div key={c.reg} style={{ ...white, overflow: 'hidden' }}>
              <div style={{ position: 'relative', aspectRatio: '16 / 10', ...photo }}>
                <span style={{ position: 'absolute', left: 12, top: 12, padding: '4px 10px', borderRadius: 8, background: bg, color: fg, fontSize: 13, fontWeight: 600 }}>{c.s}</span>
                <span style={{ position: 'absolute', right: 12, bottom: 12, padding: '3px 8px', borderRadius: 8, background: '#fff', fontSize: 13, fontWeight: 600, color: c.d > 30 ? '#C2621B' : DL.ink }}>{c.d} d</span>
              </div>
              <div style={{ padding: '16px 18px' }}>
                <b style={{ fontSize: 18, fontWeight: 600 }}>{c.m}</b>
                <div style={{ fontSize: 14, color: DL.mute, marginTop: 4 }}>{c.y} • {c.km} km • {c.f} • {c.reg}</div>
                <div style={{ borderTop: `1px solid ${DL.line}`, marginTop: 14, paddingTop: 12 }}><b style={{ fontSize: 18, fontWeight: 700 }}>kr {c.p}</b></div>
              </div></div>; })}
          </div>
        </>}
        {view === 'Kontrakter' && <>
          <div>{H1('Kontrakter')}<div style={{ fontSize: 14, color: DL.mute, marginTop: 4 }}>Butikkens maler, utfylt fra bilkortet</div></div>
          <b style={{ fontSize: 17 }}>Velg mal</b>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 240px), 1fr))', gap: 14 }}>
            {[['file-pen-line', 'Kjøpekontrakt forbrukerkjøp', 'Forhandler til forbruker, med full reklamasjonsrett.'], ['handshake', 'Kjøpekontrakt næringskjøp', 'Salg til næringsdrivende etter kjøpsloven.'], ['file-text', 'Kjøpekontrakt formidling', 'Kjøper og privat selger, forhandler formidler.'], ['repeat', 'Formidlingsoppdrag', 'Avtale mellom bileier og forhandler om salg.'], ['shopping-cart', 'Innkjøpskontrakt', 'Forhandler kjøper bil fra privatperson.'], ['paperclip', 'Formidlingssalg', 'Informasjonsvedlegg til kontrakten.']].map(([ic, t, d], i) => { const P = PASTEL[[0, 1, 2, 3, 0, 1][i]]; return <div key={t} style={{ padding: 20, borderRadius: 14, background: P[0], border: `1px solid ${P[1]}`, boxShadow: '0 2px 6px -2px rgba(0,0,0,0.12)', display: 'flex', flexDirection: 'column', gap: 10 }}><span style={{ width: 38, height: 38, borderRadius: 8, background: P[1], display: 'grid', placeItems: 'center' }}>{LU(ic, 18, 0.7)}</span><b style={{ fontSize: 17, fontWeight: 600 }}>{t}</b><span style={{ fontSize: 14, lineHeight: 1.5, color: '#4A4A4A' }}>{d}</span></div>; })}
          </div>
        </>}
      </div>
    </div>
    {view === 'Kjøretøy' && <button onClick={open} aria-label="Ny bil" style={{ position: 'absolute', right: 28, bottom: 28, width: 64, height: 64, borderRadius: '50%', border: 'none', background: '#CFE4F7', boxShadow: '0 8px 20px -6px rgba(0,0,0,0.3)', fontSize: 34, color: DL.ink, cursor: 'pointer' }}>+</button>}
    {modal && <dialog ref={dialog} aria-labelledby="vehicle-dialog-title" onCancel={e => { e.preventDefault(); setModal(false); }} style={{ padding: 0, border: '1px solid #E6E6E6', borderRadius: 16, maxWidth: 'min(600px, calc(100vw - 32px))', maxHeight: '90svh' }}>
      <div style={{ position: 'relative', background: '#fff', borderRadius: 24, padding: '40px clamp(16px, 5vw, 36px) 32px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, textAlign: 'center', fontFamily: DL.font }}>
        <button onClick={() => setModal(false)} aria-label="Lukk" style={{ position: 'absolute', right: 18, top: 14, border: 'none', background: 'none', cursor: 'pointer', fontSize: 28, lineHeight: 1, color: '#666' }}>×</button>
        <b id="vehicle-dialog-title" style={{ fontSize: 28, fontWeight: 700 }}>Prøv et bilkort</b>
        <div style={{ fontSize: 16, color: '#555' }}>Skriv inn et registreringsnummer for å vise et bilkort med eksempeldata.</div>
        <Plate value={reg} onChange={setReg}/>
        {got ? <div style={{ width: '100%', maxWidth: 420, textAlign: 'left', background: '#F4F8FC', border: '1px solid #CFE0F2', borderRadius: 14, padding: 16, fontSize: 15, lineHeight: 1.7 }}><b>{reg || 'EB 12345'}</b> · 2019 · Elektrisk<br/>Egenvekt 1 610 kg · EU-kontroll innen 30.06.2027<br/><span style={{ color: '#1E7B34', fontWeight: 600 }}>Bilkort opprettet</span></div>
          : <button onClick={() => setGot(true)} style={{ width: '100%', maxWidth: 420, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, padding: '14px', borderRadius: 14, border: '1px solid #CFE0F2', background: '#E8F1FA', fontFamily: 'inherit', fontSize: 18, color: '#5A6B7D', cursor: 'pointer' }}>{LU('search', 18, 0.55)}Vis eksempeldata</button>}
        <span style={{ fontSize: 14, color: '#666' }}>Demonstrasjon med fiktive kjøretøydata</span>
      </div>
    </dialog>}
  </div>;
}
