function ContactPage() {
  const { Icon } = window.WabiDesignSystem_66a19c;
  const [form, setForm] = React.useState({ navn: '', epost: '', bedrift: '', oppgave: '' });
  const [opened, setOpened] = React.useState(false), [copy, setCopy] = React.useState('');
  const update = e => setForm({ ...form, [e.target.name]: e.target.value });
  const message = `Hei Ulrik!\n\n${form.oppgave}\n\nNavn: ${form.navn}\nBedrift: ${form.bedrift || 'Ikke oppgitt'}\nE-post: ${form.epost}`;
  const compose = e => {
    e.preventDefault();
    window.location.href = 'mailto:ulrik@wabi.no?subject=' + encodeURIComponent('En prat om AI' + (form.bedrift ? ' — ' + form.bedrift : '')) + '&body=' + encodeURIComponent(message);
    setOpened(true);
  };
  const copyMessage = async () => { try { await navigator.clipboard.writeText(message); setCopy('Meldingen er kopiert.'); } catch { setCopy('Kopiering er ikke tilgjengelig. Du kan markere og kopiere teksten nedenfor.'); } };
  return <section className="container contact-page"><div className="contact-intro"><span className="wabi-eyebrow">En oppgave er nok å starte med</span><h1>La oss ta<br/>en prat.</h1><p>Fortell hva dere bruker mye tid på. Vi ser sammen på om AI kan gjøre arbeidsdagen enklere.</p>
    <div className="contact-person"><img src="/assets/design/portraits/ulrik-rosmael-bue-blob-hoyre.webp" width="112" height="112" alt="Ulrik Rosmæl"/><div><strong>Ulrik Rosmæl</strong><span>Din første kontakt hos Wabi</span><a href="mailto:ulrik@wabi.no">ulrik@wabi.no</a></div></div>
    <div className="contact-note"><Icon name="chat" size={36}/><p>Du trenger ikke en ferdig plan. En konkret utfordring fra hverdagen er et godt utgangspunkt.</p></div>
  </div><div className="contact-form-card"><h2>Hva vil dere få til?</h2><form onSubmit={compose}>
    <div className="field-pair"><label>Navn<input name="navn" autoComplete="name" value={form.navn} onChange={update} required maxLength={120}/></label><label>Bedrift <span>(valgfritt)</span><input name="bedrift" autoComplete="organization" value={form.bedrift} onChange={update} maxLength={160}/></label></div>
    <label>E-post<input name="epost" type="email" autoComplete="email" value={form.epost} onChange={update} required maxLength={254}/></label>
    <label>Hva tar mest tid i dag?<textarea name="oppgave" rows={5} value={form.oppgave} onChange={update} placeholder="For eksempel rapporter, tilbud eller informasjon som flyttes mellom systemer." required maxLength={2000}/></label>
    <button className="button button-primary" type="submit">Åpne e-postutkast</button><p className="form-help">Utkastet åpnes i e-postappen din. Du leser gjennom og sender selv til ulrik@wabi.no.</p>
  </form>{opened && <div className="contact-fallback" role="status"><strong>Åpnet ikke e-postappen seg?</strong><p>Kopier meldingen og send den til <a href="mailto:ulrik@wabi.no">ulrik@wabi.no</a>.</p><button className="button button-secondary" onClick={copyMessage}>Kopier meldingen</button><p>{copy}</p><details><summary>Vis meldingen</summary><pre>{message}</pre></details></div>}</div></section>;
}
