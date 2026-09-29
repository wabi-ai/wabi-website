import React from 'react';
export function NumberedList({ items = [], compact, style }) {
  const ref = React.useRef(null);
  const [narrow, setNarrow] = React.useState(!!compact);
  React.useEffect(() => {
    if (compact !== undefined) { setNarrow(!!compact); return; }
    const el = ref.current; if (!el || typeof ResizeObserver === 'undefined') return;
    const ro = new ResizeObserver(([e]) => setNarrow(e.contentRect.width < 560));
    ro.observe(el); return () => ro.disconnect();
  }, [compact]);
  return (
    <ol ref={ref} style={{ listStyle: 'none', margin: 0, padding: 0, fontFamily: 'var(--font-sans)', ...style }}>
      {items.map((it, i) => (
        <li key={i} style={{ display: 'grid', gridTemplateColumns: narrow ? '40px minmax(0, 1fr)' : '56px minmax(120px, 240px) minmax(0, 1fr)', columnGap: narrow ? 16 : 24, rowGap: 4, alignItems: 'baseline', padding: '20px 0',
          borderTop: i === 0 ? '1px solid var(--wabi-outline)' : 'none', borderBottom: '1px solid var(--wabi-outline)' }}>
          <span style={{ fontWeight: 800, fontSize: 'var(--type-body-md-size)', color: 'var(--wabi-moss)', fontVariantNumeric: 'tabular-nums', letterSpacing: '0.02em', gridRow: narrow ? 'span 2' : 'auto' }}>{i + 1}</span>
          <b style={{ fontWeight: 700, fontSize: 18, lineHeight: 1.35, letterSpacing: '-0.01em', color: 'var(--wabi-forest)' }}>{it.title}</b>
          {it.text && <span style={{ fontSize: 'var(--type-body-md-size)', lineHeight: 'var(--type-body-md-lh)', color: 'var(--wabi-ink)', textWrap: 'pretty', maxWidth: '60ch' }}>{it.text}</span>}
        </li>
      ))}
    </ol>
  );
}
NumberedList.wabiVersion = 2;
