import React from 'react';
import { Eyebrow } from '../core/Eyebrow.jsx';
import { Tag } from '../core/Tag.jsx';
const V = {
  default: { bg: 'var(--wabi-card)', border: '1px solid var(--wabi-outline)', title: 'var(--wabi-forest)', body: 'var(--wabi-ink)' },
  raised: { bg: 'var(--wabi-raised)', border: '1px solid var(--wabi-outline)', title: 'var(--wabi-forest)', body: 'var(--wabi-ink)' },
  tint: { bg: 'var(--wabi-tint)', border: '1px solid var(--wabi-outline-tint)', title: 'var(--wabi-forest)', body: 'var(--wabi-forest)' },
  feature: { bg: 'var(--wabi-moss)', border: '1px solid var(--wabi-moss)', title: 'var(--wabi-oat)', body: 'var(--wabi-sage)' },
};
export function Card({ variant = 'default', eyebrow, tag, icon, title, children, style }) {
  const v = V[variant] || V.default;
  return (
    <div style={{ background: v.bg, border: v.border, borderRadius: 12, padding: 'var(--card-padding)', display: 'flex', flexDirection: 'column', gap: 12,
      fontFamily: 'var(--font-sans)', color: v.body, boxSizing: 'border-box', ...style }}>
      {icon && <div style={{ marginBottom: 4 }}>{icon}</div>}
      {tag && <div><Tag style={variant === 'feature' ? { background: 'var(--wabi-forest)' } : undefined}>{tag}</Tag></div>}
      {eyebrow && <Eyebrow onDark={variant === 'feature'}>{eyebrow}</Eyebrow>}
      {title && <div style={{ fontSize: 'var(--type-headline-sm-size)', lineHeight: 'var(--type-headline-sm-lh)', fontWeight: 700, color: v.title, textWrap: 'pretty' }}>{title}</div>}
      {children && <div style={{ fontSize: 'var(--type-body-md-size)', lineHeight: 'var(--type-body-md-lh)', textWrap: 'pretty' }}>{children}</div>}
    </div>
  );
}
