import React from 'react';
export function QRBlock({ qrSrc, title = 'Scan koden', caption, style }) {
  return (
    <div style={{ background: 'var(--wabi-forest)', color: 'var(--wabi-oat)', borderRadius: 12, padding: 32, display: 'inline-flex', flexDirection: 'column', alignItems: 'stretch', gap: 20, fontFamily: 'var(--font-sans)', width: 224, boxSizing: 'content-box', ...style }}>
      <div style={{ aspectRatio: '1 / 1', background: '#FFFFFF', borderRadius: 6, display: 'grid', placeItems: 'center', overflow: 'hidden' }}>
        {qrSrc ? <img src={qrSrc} alt="QR-kode" style={{ width: '88%', height: '88%', objectFit: 'contain' }} /> : <span style={{ color: 'var(--wabi-muted)', fontSize: 12 }}>QR-kode</span>}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4, textAlign: 'center' }}>
        <div style={{ fontWeight: 700, fontSize: 'var(--type-headline-sm-size)', lineHeight: 'var(--type-headline-sm-lh)', letterSpacing: '-0.01em' }}>{title}</div>
        {caption && <div style={{ fontSize: 'var(--type-body-sm-size)', lineHeight: 'var(--type-body-sm-lh)', color: 'var(--wabi-sage)', textWrap: 'balance' }}>{caption}</div>}
      </div>
    </div>
  );
}
