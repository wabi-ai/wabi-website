import React from 'react';
export function LogoWall({ logos = [], columns = 4, style }) {
  return (
    <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`, columnGap: 40, rowGap: 24, fontFamily: 'var(--font-sans)', ...style }}>
      {logos.map((l, i) => (
        <li key={i} style={{ height: 72, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {l.src
            ? <img src={l.src} alt={l.name || ''} style={{ maxWidth: '80%', maxHeight: 40, objectFit: 'contain' }} />
            : <span style={{ fontWeight: 800, fontSize: 20, letterSpacing: '-0.02em', color: 'var(--wabi-muted)' }}>{l.name}</span>}
        </li>
      ))}
    </ul>
  );
}
