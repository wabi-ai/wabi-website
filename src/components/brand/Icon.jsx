import React from 'react';
import { WABI_ICONS } from './iconData.js';
export function Icon({ name, size = 48, color, accent, style, title }) {
  const inner = WABI_ICONS[name];
  if (!inner) return null;
  const s = { display: 'block', flex: 'none', color: color || 'var(--icon-main, #143D24)', ...style };
  if (accent) s['--wabi-icon-accent'] = accent;
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"
      role={title ? 'img' : undefined} aria-label={title} aria-hidden={title ? undefined : true} style={s}
      dangerouslySetInnerHTML={{ __html: inner }} />
  );
}
