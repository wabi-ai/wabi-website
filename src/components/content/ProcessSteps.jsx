import React from 'react';
import { Icon } from '../brand/Icon.jsx';
const title = { fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 'var(--type-headline-sm-size)', lineHeight: 'var(--type-headline-sm-lh)', letterSpacing: '-0.01em', color: 'var(--wabi-forest)', margin: 0, textWrap: 'balance' };
const body = { fontSize: 'var(--type-body-sm-size)', lineHeight: 1.6, color: 'var(--wabi-ink)', margin: 0, maxWidth: '30ch', textWrap: 'pretty' };
const meta = { fontSize: 'var(--type-eyebrow-size)', lineHeight: 'var(--type-eyebrow-lh)', letterSpacing: 'var(--type-eyebrow-ls)', fontWeight: 700, textTransform: 'uppercase', color: 'var(--wabi-moss)' };
export function ProcessSteps({ steps = [], variant = 'timeline', style }) {
  const n = Math.max(steps.length, 1);
  if (variant === 'arrows') {
    return (
      <ol style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gridTemplateColumns: Array(n).fill('minmax(0,1fr)').join(' 32px '), alignItems: 'stretch', fontFamily: 'var(--font-sans)', ...style }}>
        {steps.map((s, i) => (
          <React.Fragment key={i}>
            <li style={{ background: 'var(--wabi-card)', border: '1px solid var(--wabi-outline)', borderRadius: 12, padding: 24, display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 8 }}>
                <span style={{ ...meta, fontVariantNumeric: 'tabular-nums' }}>{i + 1}{s.meta ? ' · ' + s.meta : ''}</span>
                {s.icon}
              </div>
              <h4 style={{ ...title, marginTop: 'auto' }}>{s.title}</h4>
              {s.text && <p style={body}>{s.text}</p>}
            </li>
            {i < steps.length - 1 && <li aria-hidden="true" style={{ alignSelf: 'center', justifySelf: 'center' }}><Icon name="pil" size={32} /></li>}
          </React.Fragment>
        ))}
      </ol>
    );
  }
  return (
    <ol style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gridTemplateColumns: `repeat(${n}, minmax(0, 1fr))`, columnGap: 32, fontFamily: 'var(--font-sans)', ...style }}>
      {steps.map((s, i) => (
        <li key={i} style={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginRight: i < steps.length - 1 ? -32 : 0 }}>
            <span style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--wabi-forest)', color: 'var(--wabi-oat)', display: 'grid', placeItems: 'center', fontWeight: 800, fontSize: 15, fontVariantNumeric: 'tabular-nums', flex: 'none' }}>{i + 1}</span>
            {i < steps.length - 1 && <span style={{ flex: 1, height: 1.5, background: 'var(--wabi-outline-tint)', marginRight: 12 }}></span>}
          </div>
          {s.meta && <span style={{ ...meta, marginTop: 24 }}>{s.meta}</span>}
          <h4 style={{ ...title, marginTop: s.meta ? 8 : 24 }}>{s.title}</h4>
          {s.text && <p style={{ ...body, marginTop: 8 }}>{s.text}</p>}
        </li>
      ))}
    </ol>
  );
}
