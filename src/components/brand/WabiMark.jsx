import React from 'react';
import { WABI_MARK_PATHS } from './logoData.js';
export function WabiMark({ tone = 'black', width = 40, title = 'Wabi', style }) {
  const fill = tone === 'white' ? '#FFFFFF' : '#000000';
  return (
    <svg role="img" aria-label={title} width={width} height={width / 1.6827} viewBox="0 0 700 416" style={{ display: 'block', flex: 'none', ...style }}>
      {WABI_MARK_PATHS.map((d, i) => <path key={i} d={d} fill={fill} />)}
    </svg>
  );
}
