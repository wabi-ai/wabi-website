import React from 'react';
export function StatCard({ value, label, variant = 'feature', style }) {
  const dark = variant === 'feature';
  return (
    <div style={{ background: dark ? 'var(--wabi-moss)' : 'var(--wabi-card)', border: dark ? '1px solid var(--wabi-moss)' : '1px solid var(--wabi-outline)', borderRadius: 12,
      padding: 'var(--card-padding)', fontFamily: 'var(--font-sans)', display: 'flex', flexDirection: 'column', gap: 12, boxSizing: 'border-box', ...style }}>
      <div style={{ fontSize: 'var(--type-stat-size)', lineHeight: 'var(--type-stat-lh)', letterSpacing: 'var(--type-stat-ls)', fontWeight: 800, color: dark ? 'var(--wabi-oat)' : 'var(--wabi-forest)' }}>{value}</div>
      {label && <div style={{ fontSize: 'var(--type-body-sm-size)', lineHeight: 'var(--type-body-sm-lh)', color: dark ? 'var(--wabi-sage)' : 'var(--wabi-muted)' }}>{label}</div>}
    </div>
  );
}
