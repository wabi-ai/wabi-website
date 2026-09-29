import React from 'react';
import { Eyebrow } from '../core/Eyebrow.jsx';
export function SectionHeader({ eyebrow, title, lead, display = false, size = 'lg', style }) {
  const t = display
    ? { fontSize: size === 'lg' ? 'var(--type-display-lg-size)' : 'var(--type-display-md-size)', lineHeight: size === 'lg' ? 'var(--type-display-lg-lh)' : 'var(--type-display-md-lh)', letterSpacing: size === 'lg' ? 'var(--type-display-lg-ls)' : 'var(--type-display-md-ls)', fontWeight: 400, color: 'var(--wabi-evergreen)' }
    : { fontSize: size === 'lg' ? 'var(--type-headline-lg-size)' : 'var(--type-headline-md-size)', lineHeight: size === 'lg' ? 'var(--type-headline-lg-lh)' : 'var(--type-headline-md-lh)', letterSpacing: size === 'lg' ? 'var(--type-headline-lg-ls)' : 'var(--type-headline-md-ls)', fontWeight: 800, color: 'var(--wabi-forest)' };
  return (
    <header style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 760, fontFamily: 'var(--font-sans)', ...style }}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 style={{ margin: 0, textWrap: 'balance', ...t }}>{title}</h2>
      {lead && <p style={{ margin: 0, fontSize: 'var(--type-body-lg-size)', lineHeight: 'var(--type-body-lg-lh)', color: 'var(--wabi-forest)', textWrap: 'pretty' }}>{lead}</p>}
    </header>
  );
}
