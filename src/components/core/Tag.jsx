import React from 'react';
export function Tag({ children, style }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', padding: '4px 12px', borderRadius: 9999, background: 'var(--wabi-moss)', color: 'var(--wabi-oat)',
      fontFamily: 'var(--font-sans)', fontSize: 'var(--type-body-sm-size)', lineHeight: 'var(--type-body-sm-lh)', fontWeight: 400, whiteSpace: 'nowrap', ...style }}>{children}</span>
  );
}
