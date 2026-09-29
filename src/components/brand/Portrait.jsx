import React from 'react';
export function Portrait({ src, name, title, size = 220, style }) {
  return (
    <figure style={{ margin: 0, width: size, fontFamily: 'var(--font-sans)', ...style }}>
      <img src={src} alt={name || ''} style={{ width: size, height: size, display: 'block', objectFit: 'cover', borderRadius: `${size / 2}px ${size / 2}px 0 0` }} />
      {name && <figcaption style={{ marginTop: 16 }}>
        <div style={{ fontSize: 'var(--type-headline-sm-size)', lineHeight: 'var(--type-headline-sm-lh)', fontWeight: 700, color: 'var(--wabi-forest)' }}>{name}</div>
        {title && <div style={{ fontSize: 'var(--type-body-md-size)', lineHeight: 'var(--type-body-md-lh)', color: 'var(--wabi-muted)' }}>{title}</div>}
      </figcaption>}
    </figure>
  );
}
