import React from 'react';
import { Eyebrow } from '../core/Eyebrow.jsx';
function Col({ label, title, items, tint }) {
  return (
    <div style={{ flex: '1 1 240px', background: tint ? 'var(--wabi-tint)' : 'var(--wabi-card)', border: `1px solid ${tint ? 'var(--wabi-outline-tint)' : 'var(--wabi-outline)'}`, borderRadius: 12, padding: 'var(--card-padding)', display: 'flex', flexDirection: 'column', gap: 12 }}>
      <Eyebrow>{label}</Eyebrow>
      {title && <div style={{ fontWeight: 700, fontSize: 'var(--type-headline-sm-size)', lineHeight: 'var(--type-headline-sm-lh)', color: 'var(--wabi-forest)' }}>{title}</div>}
      <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column' }}>
        {items.map((it, i) => <li key={i} style={{ padding: '10px 0', borderTop: `1px solid ${tint ? 'var(--wabi-outline-tint)' : 'var(--wabi-outline)'}`, fontSize: 'var(--type-body-md-size)', lineHeight: 'var(--type-body-md-lh)', color: tint ? 'var(--wabi-forest)' : 'var(--wabi-ink)' }}>{it}</li>)}
      </ul>
    </div>
  );
}
export function BeforeAfter({ before = {}, after = {}, saved, savedLabel, style }) {
  return (
    <div style={{ display: 'flex', gap: 16, alignItems: 'stretch', flexWrap: 'wrap', fontFamily: 'var(--font-sans)', ...style }}>
      <Col label={before.label || 'Før'} title={before.title} items={before.items || []} />
      <Col label={after.label || 'Etter'} title={after.title} items={after.items || []} tint />
      {saved && <div style={{ flex: '0 1 200px', background: 'var(--wabi-moss)', borderRadius: 12, padding: 'var(--card-padding)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', gap: 10 }}>
        <div style={{ fontWeight: 800, fontSize: 'var(--type-stat-size)', lineHeight: 1, letterSpacing: 'var(--type-stat-ls)', color: 'var(--wabi-oat)' }}>{saved}</div>
        {savedLabel && <div style={{ fontSize: 'var(--type-body-sm-size)', lineHeight: 'var(--type-body-sm-lh)', color: 'var(--wabi-sage)' }}>{savedLabel}</div>}
      </div>}
    </div>
  );
}
