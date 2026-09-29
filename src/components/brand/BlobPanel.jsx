import React from 'react';
const PRESETS = {
  a: { width: '190%', left: '-40%', top: '-60%', t: 'rotate(10deg)' },
  b: { width: '200%', left: '-70%', top: '-55%', t: 'scaleX(-1) rotate(-8deg)' },
  c: { width: '210%', left: '-60%', top: '-70%', t: 'rotate(-68deg)' },
  d: { width: '190%', left: '-55%', top: '-18%', t: 'rotate(170deg)' },
  e: { width: '170%', left: '-10%', top: '-45%', t: 'scaleX(-1) rotate(24deg)' },
  t1: { width: '240%', left: '-137%', top: '-55%', t: 'rotate(10deg)' },
  t2: { width: '240%', left: '-3%', top: '-50%', t: 'scaleX(-1) rotate(-14deg)' },
  t3: { width: '240%', left: '-10%', top: '-12%', t: 'rotate(160deg)' },
  s1: { width: '124%', left: '2%', top: 0, t: 'translateY(-24%) rotate(10deg)' },
  s2: { width: '124%', left: '-26%', top: 0, t: 'translateY(-22%) scaleX(-1) rotate(-6deg)' },
  s3: { width: '124%', left: '6%', top: 0, t: 'translateY(-26%) rotate(-4deg)' },
  w1: { width: 'max(72%, 820px)', left: '40%', top: '-78%', t: 'rotate(10deg)' },
  w2: { width: 'max(70%, 820px)', left: '-14%', top: '-70%', t: 'scaleX(-1) rotate(-8deg)' },
  w3: { width: 'max(80%, 860px)', left: '30%', top: '-82%', t: 'scaleX(-1) rotate(16deg)' },
  f1: { width: '92%', left: '22%', top: 0, t: 'translateY(-30%) rotate(10deg)' },
  f2: { width: '92%', left: '-16%', top: 0, t: 'translateY(-30%) scaleX(-1) rotate(10deg)' },
  f3: { width: '92%', left: '-14%', top: 0, t: 'translateY(-34%) rotate(-12deg)' },
  k1: { width: 'min(46%, 560px)', right: '-4%', top: '-26%', t: 'rotate(10deg)' },
  k2: { width: 'min(46%, 560px)', right: '-2%', top: '-34%', t: 'scaleX(-1) rotate(-8deg)' },
};
const TONES = {
  forest: { bg: '#143D24', fg: '#F4F1E7', sub: '#CFE0D4' },
  moss: { bg: '#1E5631', fg: '#F4F1E7', sub: '#CFE0D4' },
  deep: { bg: '#214F57', fg: '#F4F1E7', sub: '#CFE0D4' },
  slate: { bg: '#4E6868', fg: '#F4F1E7', sub: '#E9F0E9', filter: 'saturate(0.28) brightness(1.08)' },
  oat: { bg: '#FDF9F1', fg: '#143D24', sub: '#143D24', border: '1px solid #E2DECF' },
  mist: { bg: '#FDF9F1', fg: '#143D24', sub: '#143D24', border: '1px solid #E2DECF', filter: 'saturate(0.3)' },
  fjord: { bg: '#24466F', fg: '#F4F1E7', sub: '#DCE6F3', blob: 'wabi-blob-fjord.webp' },
  ember: { bg: '#6E1D14', fg: '#F4F1E7', sub: '#F6DCCF', blob: 'wabi-blob-ember.webp' },
  sand: { bg: '#4F5530', fg: '#F4F1E7', sub: '#EFE6CC', blob: 'wabi-blob-sand.webp' },
  dusk: { bg: '#3B2A5C', fg: '#F4F1E7', sub: '#E4DAF2', blob: 'wabi-blob-dusk.webp' },
};
const PAPER = { bg: '#F6F5EC', fg: '#143D24', sub: '#143D24', border: '1px solid #E2DECF' };
export function BlobPanel({ src, blobBase = '/assets/design/blob/', tone = 'forest', ground = 'tone', layout = 'center', preset = 'a', align = 'bottom', protect = '46%', contentWidth = 380, minHeight = 520, radius = 12, onClick, href, children, style }) {
  const p = PRESETS[preset] || PRESETS.a;
  const t = TONES[tone] || TONES.forest;
  const c = ground === 'paper' ? { ...PAPER, blob: t.blob, filter: t.filter } : t;
  const img = src || (blobBase + (c.blob || 'wabi-blob.webp'));
  const left = layout === 'left';
  const [h, setH] = React.useState(false);
  const Tag = href ? 'a' : 'div';
  const activate = event => {
    if (href && (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button > 0)) return;
    onClick?.(event);
  };
  const shield = left
    ? { top: 0, bottom: 0, left: 0, width: protect, background: `linear-gradient(to right, ${c.bg} 0%, ${c.bg} 60%, transparent 100%)` }
    : align === 'top' ? { top: 0, left: 0, right: 0, height: '55%', background: `linear-gradient(to bottom, ${c.bg} 0%, ${c.bg} 45%, transparent 100%)` }
    : align === 'center' ? { top: 0, bottom: 0, left: 0, right: 0, background: `radial-gradient(ellipse 70% 38% at 50% 50%, ${c.bg} 0%, ${c.bg} 45%, transparent 100%)` }
    : { bottom: 0, left: 0, right: 0, height: protect, background: `linear-gradient(to top, ${c.bg} 0%, ${c.bg} 55%, transparent 100%)` };
  return (
    <Tag className="blob-panel" data-layout={layout} href={href} role={!href && onClick ? 'link' : undefined} tabIndex={!href && onClick ? 0 : undefined} onClick={activate} onKeyDown={event => { if (!href && onClick && event.target === event.currentTarget && event.key === 'Enter') activate(event); }} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ position: 'relative', overflow: 'hidden', isolation: 'isolate', borderRadius: radius, background: c.bg, border: c.border || 'none', color: c.fg, minHeight, display: 'flex', flexDirection: 'column',
        justifyContent: left ? 'center' : align === 'center' ? 'center' : align === 'top' ? 'flex-start' : 'flex-end', alignItems: left ? 'flex-start' : 'center', textAlign: left ? 'left' : 'center', padding: 40, boxSizing: 'border-box',
        cursor: onClick ? 'pointer' : 'default', fontFamily: 'var(--font-sans)', ['--blob-panel-sub']: c.sub, ...style }}>
      <img src={img} alt="" aria-hidden="true" draggable={false} loading="lazy"
        style={{ position: 'absolute', zIndex: -1, width: p.width, height: 'auto', left: p.left, right: p.right, top: p.top, maxWidth: 'none', pointerEvents: 'none', userSelect: 'none',
          transform: p.t + (onClick && h ? ' scale(1.04)' : ''), transformOrigin: '50% 50%', transition: 'transform 220ms var(--ease-standard)', filter: c.filter }} />
      <div className="blob-shield" aria-hidden="true" style={{ position: 'absolute', zIndex: -1, pointerEvents: 'none', ...shield }}></div>
      <div className="blob-panel-content" style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: left ? 'flex-start' : 'center', gap: 16, maxWidth: contentWidth }}>{children}</div>
    </Tag>
  );
}
BlobPanel.wabiVersion = 6;
