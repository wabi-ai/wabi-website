// Minimal React versions of the design-system Icon and ToolLogo, backed by the same brand.json as the Astro components.
import React from 'react';
import brand from '../data/brand.json';

export function Icon({ name, size = 24, style }) {
  const inner = brand.icons[name];
  if (!inner) return null;
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
    style={{ display: 'block', flex: 'none', color: '#143D24', ...style }} dangerouslySetInnerHTML={{ __html: inner }} />;
}

export function ToolLogo({ name, size = 18 }) {
  const logo = brand.tools[name];
  if (!logo) return null;
  return <svg role="img" aria-label={name} width={size} height={size} viewBox={logo.vb} preserveAspectRatio="xMidYMid meet" style={{ display: 'block', flex: 'none' }} dangerouslySetInnerHTML={{ __html: logo.inner }} />;
}

// Maps the generic UI icon names used in the product demos to Wabi icons.
const UI_ICONS = {
  'shopping-bag': 'bygg', target: 'kompass', banknote: 'okonomi', coins: 'okonomi', 'layout-grid': 'rammeverk', 'chart-column': 'graf', megaphone: 'megafon',
  wallet: 'okonomi', users: 'lag', copy: 'dokument', calendar: 'kalender', activity: 'graf', 'chevron-down': 'pil', ellipsis: 'justering', car: 'bygg', inbox: 'epost',
  'key-round': 'sikkerhet', 'file-pen-line': 'dokument', 'chart-line': 'graf', store: 'bygg', 'circle-help': 'chat', bell: 'epost', sun: 'ide', search: 'sok',
  'user-plus': 'menneske', 'chevron-right': 'pil', 'shield-check': 'sikkerhet', 'file-warning': 'dokument', handshake: 'menneske', 'file-text': 'dokument',
  repeat: 'syklus', 'shopping-cart': 'bygg', paperclip: 'dokument', landmark: 'bygg',
};
export const LU = (name, size = 18, opacity = .75, style) => <Icon name={UI_ICONS[name] || 'pil'} size={size} style={{ opacity, ...style }} />;
