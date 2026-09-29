import React, { useState } from 'react';
export function Button({ variant = 'primary', children, icon, disabled = false, onClick, href, type = 'button', style }) {
  const [hover, setHover] = useState(false);
  const [press, setPress] = useState(false);
  const primary = variant === 'primary';
  const base = {
    display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 24px', borderRadius: 9999,
    fontFamily: 'var(--font-sans)', fontSize: 'var(--type-label-md-size)', lineHeight: 'var(--type-label-md-lh)', fontWeight: 700,
    border: primary ? '1px solid transparent' : '1px solid var(--wabi-outline)', cursor: disabled ? 'default' : 'pointer', textDecoration: 'none', whiteSpace: 'nowrap',
    background: primary ? (hover && !disabled ? 'var(--wabi-forest)' : 'var(--wabi-moss)') : (hover && !disabled ? 'var(--wabi-card)' : 'var(--wabi-raised)'),
    color: primary ? 'var(--wabi-oat)' : 'var(--wabi-forest)',
    opacity: disabled ? 0.45 : 1, transform: press && !disabled ? 'scale(0.98)' : 'none',
    transition: 'background 150ms var(--ease-standard), transform 150ms var(--ease-standard)', ...style,
  };
  const Tag = href ? 'a' : 'button';
  return (
    <Tag href={href} type={href ? undefined : type} disabled={href ? undefined : disabled} onClick={disabled ? undefined : (event) => { if (onClick) { event.stopPropagation(); onClick(event); } }} style={base}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => { setHover(false); setPress(false); }}
      onMouseDown={() => setPress(true)} onMouseUp={() => setPress(false)}>
      {children}{icon && <span aria-hidden="true" style={{ display: 'inline-flex' }}>{icon}</span>}
    </Tag>
  );
}
