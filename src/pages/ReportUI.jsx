const LU = (name, size = 18, opacity = .75, style) => {
  const names = { 'shopping-bag': 'bygg', target: 'kompass', banknote: 'okonomi', coins: 'okonomi', 'layout-grid': 'rammeverk', 'chart-column': 'graf', megaphone: 'megafon', wallet: 'okonomi', users: 'lag', copy: 'dokument', calendar: 'kalender', activity: 'graf', 'chevron-down': 'pil', ellipsis: 'justering', car: 'bygg', inbox: 'epost', 'key-round': 'sikkerhet', 'file-pen-line': 'dokument', 'chart-line': 'graf', store: 'bygg', 'circle-help': 'chat', bell: 'epost', sun: 'ide', search: 'sok', 'user-plus': 'menneske', 'chevron-right': 'pil' };
  const { Icon } = window.WabiDesignSystem_66a19c;
  return <Icon name={names[name] || 'pil'} size={size} style={{ opacity, ...style }}/>;
};
const RP = { ink: '#0F172A', mute: '#6B7280', line: '#E5E7EB', soft: '#F9FAFB', font: '"Inter", system-ui, sans-serif' };
const RDATA = {
  kpis: [['shopping-bag', 'Kjøp', '148', -18, '21 k klikk'], ['target', 'CAC', '1 180 kr', 9, '149 k kr / 126 (Meta)'], ['banknote', 'Forbruk', '174 k kr', -6, 'Meta + Google'], ['coins', 'Kjøpsverdi', '92 k kr', 12, 'ROAS 0,53']],
  tabs: {
    'Meta Ads': { logo: 'Meta', cards: [['Kjøp', '126', -12, 'fra 143'], ['CAC', '1 180 kr', 9, 'fra 1 082 kr'], ['Totalt forbruk', '148 640 kr', -5, 'fra 156 300 kr'], ['Kjøpsverdi', '78 420 kr', 10, 'fra 71 290 kr']], series: [3,4,2,2,4,3,5,2,3,1,1,5,3,2,4,5,3,3,4,4,0,0,6,3,0,4,3,4,2,2,1,2,1,2,1,3,4,4,6,1,2,2,0,0,1,0,0,3,1,0,1,0,0,0,1,0,0,0,0,1,0] },
    'Google Ads': { logo: 'Google', cards: [['Kjøp', '22', 8, 'fra 20'], ['CAC', '1 170 kr', -4, 'fra 1 220 kr'], ['Totalt forbruk', '25 740 kr', 3, 'fra 24 990 kr'], ['Kjøpsverdi', '13 580 kr', 14, 'fra 11 910 kr']], series: [1,1,0,2,1,1,2,0,1,1,0,2,1,1,1,2,0,1,1,1,0,1,2,1,0,1,1,2,1,0,1,1,0,1,0,1,1,1,2,0,1,1,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,0] },
    'Google Analytics': { logo: 'Google', cards: [['Økter', '12 k', 7, 'fra 11,2 k'], ['Engasjement', '58 %', 3, 'fra 56 %'], ['Konvertering', '1,2 %', -6, 'fra 1,3 %'], ['Nye brukere', '8,4 k', 9, 'fra 7,7 k']], series: [14,16,12,13,17,15,19,12,14,11,10,20,15,13,17,19,15,14,16,17,9,9,22,15,9,17,15,16,13,12,11,13,11,12,10,14,16,17,21,11,12,13,9,9,10,9,9,14,11,9,10,9,9,9,11,9,9,9,9,10,9] },
    'Search Console': { logo: 'Google', cards: [['Klikk', '1 960', 11, 'fra 1 766'], ['Visninger', '64 k', 18, 'fra 54 k'], ['CTR', '3,1 %', -2, 'fra 3,2 %'], ['Snittposisjon', '8,4', 6, 'fra 8,9']], series: [30,32,28,31,35,33,36,30,31,29,28,38,33,31,35,37,33,32,34,36,27,28,40,34,28,35,33,34,31,30,29,31,29,30,28,32,34,35,39,29,31,32,27,27,29,27,28,32,29,27,29,27,27,28,29,27,27,28,27,29,27] },
  },
  ads: [['Annonse 1', '2 067 kr forbruk', 'g'], ['Annonse 2', '2 kjøp · CAC 977 kr', 'i'], ['Annonse 3', '2 kjøp · CAC 922 kr', 'g'], ['Annonse 4', '1 kjøp · CAC 1 432 kr', 'g'], ['Annonse 5', '1 kjøp · CAC 865 kr', 'o']],
  top: [['Annonse 1', 34, '1 253'], ['Annonse 2', 20, '845'], ['Annonse 3', 9, '2 136'], ['Annonse 4', 6, '1 905'], ['Annonse 5', 4, '2 388'], ['Annonse 6', 4, '2 319']],
  demo: [['18-24', 16, 14, 1], ['25-34', 62, 72, 2], ['35-44', 118, 96, 3], ['45-54', 138, 86, 4], ['55-64', 110, 64, 3], ['65+', 70, 50, 2]],
};
function RDelta({ v, invert, pill = true, small }) {
  const good = invert ? v < 0 : v >= 0;
  const c = good ? ['#DCFCE7', '#16A34A'] : ['#FEE2E2', '#DC2626'];
  return <span style={{ display: 'inline-flex', alignItems: 'center', gap: 3, padding: pill ? (small ? '2px 6px' : '3px 8px') : 0, borderRadius: 6, fontSize: small ? 12 : 13, fontWeight: 600, whiteSpace: 'nowrap', flex: 'none', background: pill ? c[0] : 'none', color: c[1] }}>{v >= 0 ? '↑' : '↓'} {Math.abs(v)} %</span>;
}
function RLine({ data }) {
  const W = 1000, H = 220, max = Math.max(...data) * 1.12 || 1;
  const P = data.map((v, i) => [i / (data.length - 1) * W, 8 + (H - 8) - v / max * (H - 8)]);
  let d = `M ${P[0][0]} ${P[0][1]}`;
  for (let i = 1; i < P.length; i++) { const [x0, y0] = P[i - 1], [x1, y1] = P[i], cx = (x0 + x1) / 2; d += ` C ${cx} ${y0}, ${cx} ${y1}, ${x1} ${y1}`; }
  return <svg viewBox={`0 0 ${W} ${H + 10}`} preserveAspectRatio="none" style={{ width: '100%', height: 220, display: 'block', overflow: 'visible' }}>
    {[0, 0.33, 0.66, 1].map(f => <line key={f} x1="0" x2={W} y1={8 + (H - 8) * f} y2={8 + (H - 8) * f} stroke={RP.line} strokeDasharray="4 6" vectorEffect="non-scaling-stroke"/>)}
    <path d={d} fill="none" stroke="#1F2937" strokeWidth="2" vectorEffect="non-scaling-stroke"/>
  </svg>;
}
function Dashboard() {
  const { ToolLogo } = window.WabiDesignSystem_66a19c;
  const [nav, setNav] = React.useState('Sammendrag');
  const [tab, setTab] = React.useState('Meta Ads');
  const [sel, setSel] = React.useState(0);
  const T = RDATA.tabs[tab];
  const box = { background: '#fff', border: `1px solid ${RP.line}`, borderRadius: 16 };
  const cap = { fontSize: 12, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#4B5563' };
  return <div style={{ fontFamily: RP.font, color: RP.ink, background: '#fff', border: `1px solid ${RP.line}`, borderRadius: 18, overflow: 'hidden', boxShadow: '0 24px 60px -30px rgba(20,61,36,0.35)' }}>
    <div className="dash" style={{ display: 'grid', gridTemplateColumns: '210px minmax(0,1fr)' }}>
      <aside className="dash-nav" style={{ padding: '24px 14px', display: 'flex', flexDirection: 'column', gap: 4 }}>
        <div style={{ ...cap, color: '#9CA3AF', padding: '0 12px 10px', fontWeight: 500 }}>Rapport</div>
        {[['Sammendrag', 'layout-grid'], ['Resultater', 'chart-column'], ['Aktive annonser', 'megaphone'], ['Budsjett', 'wallet'], ['Målgrupper', 'users'], ['Kampanjer', 'megaphone']].map(([n, ic]) => <button key={n} onClick={() => setNav(n)} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 12px', borderRadius: 10, border: 'none', background: nav === n ? '#F3F4F6' : 'transparent', fontFamily: 'inherit', fontSize: 15, fontWeight: nav === n ? 500 : 400, color: RP.ink, cursor: 'pointer', textAlign: 'left' }}>{LU(ic, 18, nav === n ? 0.9 : 0.6)}{n}</button>)}
      </aside>
      <div style={{ padding: '24px 24px 28px', display: 'flex', flexDirection: 'column', gap: 18, minWidth: 0 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16, flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
            <div style={{ width: 52, height: 52, borderRadius: 12, border: `1px solid ${RP.line}`, display: 'grid', placeItems: 'center', fontSize: 10, fontWeight: 700, color: '#9CA3AF', letterSpacing: '0.04em', textAlign: 'center', lineHeight: 1.1 }}>BEDRIFT X</div>
            <div><div style={{ fontWeight: 700, fontSize: 26, letterSpacing: '-0.02em' }}>Rapport for BEDRIFT X</div><div style={{ fontSize: 14, color: RP.mute, marginTop: 2 }}>1. jul 2026 – 25. sep 2026 · E-handel / helse</div></div>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            {[['copy', 'Del rapport', 'Kopier lenke'], ['calendar', 'Dette kvartalet ▾', '1. jul – 25. sep 2026']].map(([ic, a, b]) => <div key={a} style={{ ...box, borderRadius: 12, padding: '8px 14px', display: 'flex', gap: 10, alignItems: 'center' }}>{LU(ic, 16, 0.6)}<div><div style={{ fontSize: 11, color: RP.mute }}>{a}</div><div style={{ fontSize: 13, fontWeight: 500 }}>{b}</div></div></div>)}
          </div>
        </div>
        <div style={{ ...box, padding: '14px 18px', display: 'flex', alignItems: 'center', gap: 10 }}>{LU('activity', 18, 0.6)}<b style={{ fontSize: 15, fontWeight: 600 }}>Kampanjestatus</b><span style={{ width: 8, height: 8, borderRadius: '50%', background: '#EF4444' }}></span><span style={{ marginLeft: 'auto', fontSize: 13, color: '#9CA3AF', borderBottom: '1px dashed #D1D5DB' }}>Sist synkronisert 0 min siden</span>{LU('chevron-down', 16, 0.5)}</div>
        <div style={{ ...box, background: RP.soft, padding: 20 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 18, flexWrap: 'wrap' }}><span style={cap}>Samlet på tvers av plattformer</span>{['Meta', 'Google'].map(l => <span key={l} style={{ width: 24, height: 24, borderRadius: 6, border: `1px solid ${RP.line}`, background: '#fff', display: 'grid', placeItems: 'center' }}><ToolLogo name={l} size={14}/></span>)}<span style={{ marginLeft: 'auto', fontSize: 13, color: RP.mute }}>Nettside-besøk: <b style={{ color: RP.ink, fontWeight: 600 }}>12 k</b> økter</span></div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 160px), 1fr))', gap: '20px 16px' }}>
            {RDATA.kpis.map(([ic, k, v, d, s], i) => <div key={k} style={{ minWidth: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, minWidth: 0 }}><span style={{ width: 24, height: 24, borderRadius: 7, border: `1px solid ${RP.line}`, background: '#fff', display: 'grid', placeItems: 'center', flex: 'none' }}>{LU(ic, 13, 0.6)}</span><span style={{ ...cap, fontSize: 11, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{k}</span></div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, whiteSpace: 'nowrap' }}><span style={{ fontWeight: 700, fontSize: 24, lineHeight: 1.1, letterSpacing: '-0.02em', fontVariantNumeric: 'tabular-nums' }}>{v}</span><RDelta v={d} invert={i === 1} small/></div>
              <div style={{ fontSize: 12, color: RP.mute, minHeight: 16, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{s}</div></div>)}
          </div>
          <div style={{ fontSize: 12, color: '#9CA3AF', marginTop: 14 }}>Sammenlignet med 5. apr 2026 – 30. jun 2026</div>
        </div>
        <div style={{ display: 'flex', gap: 6, borderBottom: `1px solid ${RP.line}`, overflowX: 'auto' }}>
          {Object.keys(RDATA.tabs).map(n => <button key={n} onClick={() => { setTab(n); setSel(0); }} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '12px 14px', border: 'none', borderBottom: `2px solid ${tab === n ? RP.ink : 'transparent'}`, marginBottom: -1, background: 'none', fontFamily: 'inherit', fontSize: 15, fontWeight: tab === n ? 500 : 400, color: tab === n ? RP.ink : '#4B5563', cursor: 'pointer', whiteSpace: 'nowrap' }}><ToolLogo name={RDATA.tabs[n].logo} size={16}/>{n}<span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22C55E' }}></span></button>)}
        </div>
        <div style={{ ...box, overflow: 'hidden' }}>
          <div className="kpi4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0,1fr))', gap: 12, padding: 12, background: RP.soft, borderBottom: `1px solid ${RP.line}` }}>
            {T.cards.map(([k, v, d, f], i) => <button key={k} onClick={() => setSel(i)} style={{ textAlign: 'left', fontFamily: 'inherit', background: '#fff', border: sel === i ? `2px solid ${RP.ink}` : `1px solid ${RP.line}`, padding: sel === i ? 15 : 16, borderRadius: 14, cursor: 'pointer', color: RP.ink }}>
              <div style={{ fontSize: 14, color: '#4B5563' }}>{k}</div><div style={{ fontWeight: 700, fontSize: 24, letterSpacing: '-0.02em', margin: '10px 0 8px', whiteSpace: 'nowrap', fontVariantNumeric: 'tabular-nums' }}>{v}</div>
              <div style={{ display: 'flex', gap: 8, alignItems: 'center', fontSize: 13, whiteSpace: 'nowrap', overflow: 'hidden' }}><RDelta v={d} pill={false} invert={k === 'CAC'}/><span style={{ color: '#9CA3AF', overflow: 'hidden', textOverflow: 'ellipsis' }}>{f}</span></div></button>)}
          </div>
          <div style={{ padding: 20 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}><b style={{ fontSize: 16, fontWeight: 600 }}>{T.cards[sel][0]} per dag</b><span style={{ fontSize: 14, color: '#4B5563' }}>{T.cards[sel][1]}</span></div>
            <RLine data={T.series.map((v, i) => Math.max(0, v + ((i * 7 + sel * 3) % 5) - 2))}/>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, color: '#9CA3AF', marginTop: 8 }}>{['1. jul', '15. jul', '1. aug', '15. aug', '1. sep', '25. sep'].map(x => <span key={x}>{x}</span>)}</div>
          </div>
        </div>
      </div>
    </div>
  </div>;
}
function AdsAndAudience() {
  const box = { background: '#fff', border: `1px solid ${RP.line}`, borderRadius: 18, fontFamily: RP.font, color: RP.ink, boxShadow: '0 24px 60px -34px rgba(20,61,36,0.3)' };
  const C = { g: ['#ECFDF5', '#A7F3D0', '#34D399'], i: ['#EEF2FF', '#C7D2FE', '#6366F1'], o: ['#FFF7ED', '#FED7AA', '#F59E0B'] };
  const tag = (t, bg, fg) => <span key={t} style={{ padding: '3px 10px', borderRadius: 9999, background: bg, color: fg, fontSize: 12, fontWeight: 500, whiteSpace: 'nowrap' }}>{t}</span>;
  const max = 240;
  return <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
    <div style={{ ...box, overflow: 'hidden' }}>
      <div style={{ padding: '24px 24px 8px' }}><div style={{ fontWeight: 600, fontSize: 20 }}>Aktive annonser</div><div style={{ fontSize: 14, color: RP.mute, marginTop: 2 }}>40 annonser med forbruk · nodestørrelse = forbruk · farge = kampanje</div>
        <div style={{ display: 'flex', gap: 18, marginTop: 12, fontSize: 14, color: '#374151', flexWrap: 'wrap' }}>{[['g', 'NY - Prospecting_CBO'], ['i', 'NY - Retargeting'], ['o', 'Prospecting_BedriftX']].map(([k, n]) => <span key={k} style={{ display: 'flex', alignItems: 'center', gap: 6 }}><span style={{ width: 10, height: 10, borderRadius: '50%', background: C[k][2] }}></span>{n}</span>)}</div></div>
      <div style={{ display: 'grid', gridTemplateColumns: '150px 60px minmax(0, 420px)', alignItems: 'center', padding: '12px 24px 24px' }}>
        <div style={{ height: 96, borderRadius: 16, background: '#111827', border: '2px solid #34D399', display: 'grid', placeItems: 'center', color: '#F3F4F6', fontSize: 20, letterSpacing: '0.04em', fontWeight: 700 }}>BEDRIFT X</div>
        <div style={{ alignSelf: 'stretch', position: 'relative' }}><div style={{ position: 'absolute', left: 0, right: '50%', top: '50%', height: 1.5, background: '#CBD5E1' }}></div><div style={{ position: 'absolute', left: '50%', top: 24, bottom: 24, width: 1.5, background: '#E2E8F0' }}></div><span style={{ position: 'absolute', left: 'calc(50% - 4px)', top: 'calc(50% - 4px)', width: 9, height: 9, borderRadius: '50%', background: '#10B981' }}></span></div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>{RDATA.ads.map(([t, s, k]) => <div key={t} style={{ display: 'flex', gap: 12, alignItems: 'center', padding: '10px 12px', borderRadius: 12, background: C[k][0], border: `1px solid ${C[k][1]}`, borderLeft: `4px solid ${C[k][1]}` }}>
          <span style={{ width: 40, height: 40, borderRadius: 8, background: 'linear-gradient(135deg,#E5E7EB,#F3F4F6)', flex: 'none' }}></span>
          <div style={{ minWidth: 0 }}><div style={{ fontWeight: 500, fontSize: 15, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{t}</div><div style={{ fontSize: 13, color: RP.mute }}>{s}</div></div></div>)}</div>
      </div>
      <div style={{ background: RP.soft, borderTop: `1px solid ${RP.line}`, padding: 24 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}><span style={{ fontSize: 13, fontWeight: 600, letterSpacing: '0.06em', color: '#4B5563' }}>TOPPANNONSER</span><span style={{ fontSize: 13, color: '#9CA3AF' }}>Rangert etter kjøp</span></div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))', gap: '12px 32px' }}>{RDATA.top.map(([t, k, cac], i) => <div key={t} style={{ display: 'grid', gridTemplateColumns: '36px minmax(0,1fr)', gap: 12, alignItems: 'center' }}>
          <span style={{ width: 32, height: 32, borderRadius: '50%', background: '#10B981', color: '#fff', display: 'grid', placeItems: 'center', fontWeight: 600, fontSize: 14 }}>{i + 1}</span>
          <div style={{ minWidth: 0 }}><div style={{ fontSize: 15, fontWeight: 500, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{t}</div><div style={{ display: 'flex', gap: 6, alignItems: 'center', flexWrap: 'wrap', marginTop: 4 }}><span style={{ fontSize: 13, whiteSpace: 'nowrap' }}><b style={{ fontWeight: 600 }}>{k} kjøp</b> <span style={{ color: RP.mute }}>· CAC: {cac} kr</span></span>{i < 3 && tag('Høy konverterende', '#DCFCE7', '#15803D')}{i < 2 && tag('Budsjettdriver', '#EEF2FF', '#4338CA')}{i === 0 && tag('Fenger', '#FEE2E2', '#B91C1C')}</div></div></div>)}</div>
      </div>
    </div>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))', gap: 16 }}>
      <div style={{ ...box, padding: 24 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' }}><b style={{ fontSize: 18, fontWeight: 600 }}>Demografi</b><span style={{ fontSize: 13, color: RP.mute }}>Basert på 894 120 visninger</span></div>
        <div style={{ fontSize: 13, color: '#4B5563', margin: '12px 0 16px' }}>Aldersgrupper × kjønn (visninger)</div>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 12, height: 170, borderBottom: `1px dashed ${RP.line}` }}>{RDATA.demo.map(([a, w, m, u]) => <div key={a} style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', height: '100%' }}><div style={{ height: u / max * 170, background: '#D1D5DB', borderRadius: '3px 3px 0 0' }}></div><div style={{ height: m / max * 170, background: '#93C5FD' }}></div><div style={{ height: w / max * 170, background: '#F9A8D4' }}></div></div>)}</div>
        <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>{RDATA.demo.map(([a]) => <span key={a} style={{ flex: 1, textAlign: 'center', fontSize: 12, color: '#9CA3AF' }}>{a}</span>)}</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 20 }}>{[['Kvinner', 56.4, '#F9A8D4'], ['Menn', 41.6, '#93C5FD'], ['Ukjent', 2.1, '#D1D5DB']].map(([n, p, c]) => <div key={n}><div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 14, marginBottom: 6 }}><span style={{ display: 'flex', gap: 8, alignItems: 'center' }}><span style={{ width: 12, height: 12, borderRadius: 3, background: c }}></span>{n}</span><span>{String(p).replace('.', ',')} %</span></div><div style={{ height: 8, borderRadius: 4, background: '#F3F4F6' }}><div style={{ width: p + '%', height: 8, borderRadius: 4, background: c }}></div></div></div>)}</div>
      </div>
      <div style={{ ...box, padding: 24 }}>
        <b style={{ fontSize: 18, fontWeight: 600 }}>Publikumstrakt</b><div style={{ fontSize: 13, color: RP.mute, margin: '4px 0 20px' }}>Visninger per publikumsstadie</div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>{[['Nytt publikum', '812 440 visninger · 91 %', 'linear-gradient(#818CF8,#4F46E5)', 100], ['Engasjert publikum', '52 380 visninger · 6 %', 'linear-gradient(#22D3EE,#0891B2)', 76], ['Eksisterende kunder', '29 300 visninger · 3 %', 'linear-gradient(#34D399,#059669)', 52]].map(([n, v, g, w]) => <div key={n} style={{ width: w + '%', height: 96, background: g, clipPath: 'polygon(0 0, 100% 0, 88% 100%, 12% 100%)', color: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}><b style={{ fontSize: 17, fontWeight: 700 }}>{n}</b><span style={{ fontSize: 13, opacity: 0.95 }}>{v}</span></div>)}</div>
      </div>
    </div>
  </div>;
}
Object.assign(window, { Dashboard, AdsAndAudience, LU });
