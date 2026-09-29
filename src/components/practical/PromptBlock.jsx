import React, { useState } from 'react';
import { Eyebrow } from '../core/Eyebrow.jsx';
export function PromptBlock({ label = 'Prompt', tool, prompt, result, copyable = true, style }) {
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState('');
  const copy = async () => {
    try { await navigator.clipboard.writeText(typeof prompt === 'string' ? prompt : ''); setCopied(true); setError(''); }
    catch { setError('Marker teksten nedenfor og kopier den manuelt.'); }
  };
  return (
    <div style={{ border: '1px solid var(--wabi-outline)', borderRadius: 12, overflow: 'hidden', fontFamily: 'var(--font-sans)', background: 'var(--wabi-raised)', ...style }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, padding: '12px 20px', borderBottom: '1px solid var(--wabi-outline)' }}>
        <Eyebrow>{label}{tool ? ` · ${tool}` : ''}</Eyebrow>
        {copyable && <button onClick={copy} style={{ border: '1px solid var(--wabi-outline)', background: 'var(--wabi-card)', color: 'var(--wabi-forest)', borderRadius: 6, padding: '4px 10px', fontFamily: 'inherit', fontSize: 12, fontWeight: 700, cursor: 'pointer' }}>{copied ? 'Kopiert' : 'Kopier'}</button>}
      </div>
      {error && <p role="status" style={{ padding: '0 20px', fontSize: 13 }}>{error}</p>}
      <div style={{ padding: 20, fontSize: 'var(--type-body-md-size)', lineHeight: 'var(--type-body-md-lh)', color: 'var(--wabi-ink)', whiteSpace: 'pre-wrap', textWrap: 'pretty' }}>{prompt}</div>
      {result && <div style={{ padding: 20, background: 'var(--wabi-tint)', borderTop: '1px solid var(--wabi-outline-tint)', fontSize: 'var(--type-body-sm-size)', lineHeight: 'var(--type-body-sm-lh)', color: 'var(--wabi-forest)' }}>
        <div style={{ fontWeight: 700, marginBottom: 4 }}>Resultat</div>{result}</div>}
    </div>
  );
}
