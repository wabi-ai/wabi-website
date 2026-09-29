import React from 'react';
export function Blob({ src = 'assets/blob/wabi-blob.webp', width = 700, rotate = 0, flip = false, top, right, bottom, left, style }) {
  const t = `rotate(${rotate}deg)${flip ? ' scaleX(-1)' : ''}`;
  return (
    <img src={src} alt="" aria-hidden="true" draggable={false}
      style={{ position: 'absolute', width, height: 'auto', top, right, bottom, left, transform: t, pointerEvents: 'none', userSelect: 'none', zIndex: 0, ...style }} />
  );
}
