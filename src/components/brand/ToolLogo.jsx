import React from 'react';
import { TOOL_LOGOS, TOOL_CATALOG } from './toolLogoData.js';
const byName = {};
TOOL_CATALOG.forEach(g => g.items.forEach(it => { byName[it.name.toLowerCase()] = it.mark; }));
function resolve(name) { const k = String(name || '').toLowerCase(); if (k in byName) return byName[k]; return TOOL_LOGOS[k] ? k : null; }
export function ToolLogo({ name, size = 24, mode = 'color', color, title, style }) {
  const prefix = 'tool-' + React.useId().replace(/:/g, '') + '-';
  const mark = resolve(name);
  const L = mark && TOOL_LOGOS[mark];
  if (!L) return <span aria-label={title || name} style={{ width: size, height: size, borderRadius: 6, background: 'var(--wabi-card)', border: '1px solid var(--wabi-outline)', display: 'inline-grid', placeItems: 'center', fontFamily: 'var(--font-sans)', fontWeight: 800, fontSize: Math.round(size * 0.42), color: 'var(--wabi-muted)', flex: 'none', boxSizing: 'border-box', ...style }}>{String(name || '?').slice(0, 1)}</span>;
  if (mode === 'color' && !color && L.color) {
    const inner = L.color.inner.replace(/\bid=(["'])([^"']+)\1/g, (_, quote, id) => `id=${quote}${prefix}${id}${quote}`)
      .replace(/url\(#([^)]+)\)/g, (_, id) => `url(#${prefix}${id})`)
      .replace(/((?:xlink:)?href)=(["'])#([^"']+)\2/g, (_, attr, quote, id) => `${attr}=${quote}#${prefix}${id}${quote}`);
    return <svg role="img" aria-label={title || name} width={size} height={size} viewBox={L.color.vb} preserveAspectRatio="xMidYMid meet" style={{ display: 'block', flex: 'none', ...style }} dangerouslySetInnerHTML={{ __html: inner }} />;
  }
  if (!L.d) return <span aria-label={title || name} style={{ width: size, height: size, display: 'inline-block', flex: 'none', ...style }}></span>;
  const fill = color || (mode === 'color' ? (L.hex || 'currentColor') : 'currentColor');
  return <svg role="img" aria-label={title || name} width={size} height={size} viewBox="0 0 24 24" style={{ display: 'block', flex: 'none', ...style }}><path d={L.d} fill={fill} /></svg>;
}
export function ToolChip({ name, mode = 'color', size = 'md', style }) {
  const s = size === 'sm' ? { pad: '6px 12px 6px 8px', icon: 16, fs: 13 } : { pad: '8px 16px 8px 10px', icon: 20, fs: 14 };
  return <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: s.pad, borderRadius: 9999, border: '1px solid var(--wabi-outline)', background: 'var(--wabi-raised)', color: 'var(--wabi-forest)', fontFamily: 'var(--font-sans)', fontSize: s.fs, fontWeight: 700, whiteSpace: 'nowrap', ...style }}>
    <ToolLogo name={name} size={s.icon} mode={mode} />{name}</span>;
}
export function LogoStrip({ names = [], mode = 'color', size = 28, labels = false, gap = 40, style }) {
  return <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: `24px ${gap}px`, color: 'var(--wabi-forest)', fontFamily: 'var(--font-sans)', ...style }}>
    {names.map(n => <li key={n} title={n} style={{ display: 'flex', alignItems: 'center', gap: 10 }}><ToolLogo name={n} size={size} mode={mode} />{labels && <span style={{ fontSize: 15, fontWeight: 700 }}>{n}</span>}</li>)}
  </ul>;
}
export { TOOL_CATALOG };
ToolLogo.wabiVersion = 2;
