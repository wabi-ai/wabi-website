import React from 'react';
export function Eyebrow({ children, onDark = false, style }) {
  return (
    <div style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--type-eyebrow-size)', lineHeight: 'var(--type-eyebrow-lh)', letterSpacing: 'var(--type-eyebrow-ls)',
      fontWeight: 700, textTransform: 'uppercase', color: onDark ? 'var(--wabi-sage)' : 'var(--wabi-moss)', ...style }}>{children}</div>
  );
}
