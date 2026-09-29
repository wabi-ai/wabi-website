const mintBase = '/ui_kits/mint/';
const guideHref = guide => mintBase + 'innsikt/' + guide.slug + '/';
const guideMinutes = guide => Math.max(1, Math.ceil([guide.summary, ...guide.sections.flatMap(s => [s.title, ...s.paragraphs, ...(s.items || [])]), ...guide.questions.flatMap(q => [q.question, q.answer])].join(' ').split(/\s+/).length / 200));
const guideDate = value => new Intl.DateTimeFormat('nb-NO', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(new Date(value+'T00:00:00Z'));
function GuideArt({ guide }) {
  const { Icon } = window.WabiDesignSystem_66a19c;
  return <div className={'guide-art guide-tone-'+guide.tone} aria-hidden="true"><img src={'/assets/blob/wabi-blob'+(guide.tone === 'forest' ? '' : '-'+guide.tone)+'.webp'} alt="" loading="lazy" width="800" height="800"/><div className="guide-art-content"><Icon name={guide.icon} size={48} color="#F4F1E7"/><span>{guide.artTitle}</span><div className="guide-art-steps">{guide.artSteps.map(step => <span key={step}>{step}</span>)}</div></div></div>;
}
function GuideCard({ guide, showArtwork = true }) {
  return <a className={'guide-card guide-tone-'+guide.tone} href={guideHref(guide)}><div className="guide-card-copy"><span className="mint-eyebrow">{guide.category} · {guide.topic}</span><h3>{guide.title}</h3><p>{guide.description}</p><div className="guide-card-meta"><span>{guideMinutes(guide)} min lesing</span><span>Praktisk AI</span></div><span className="guide-read">Les {guide.category === 'Guide' ? 'guiden' : 'artikkelen'} <MintArrow/></span></div>{showArtwork && <GuideArt guide={guide}/>}</a>;
}
function MintGuides() {
  const rail = React.useRef(null);
  const [edges, setEdges] = React.useState({ start: true, end: false });
  React.useEffect(() => {
    const el = rail.current;
    const update = () => setEdges({ start: el.scrollLeft < 2, end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 2 });
    update(); el.addEventListener('scroll', update, { passive: true });
    const observer = new ResizeObserver(update); observer.observe(el);
    return () => { el.removeEventListener('scroll', update); observer.disconnect(); };
  }, []);
  const move = direction => {
    const el = rail.current;
    const card = el.querySelector('.guide-card');
    el.scrollBy({left: direction * (card.getBoundingClientRect().width + 20), behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'});
  };
  return <section className="guide-section mint-section" id="innsikt" aria-labelledby="guide-section-title"><div className="mint-container guide-section-heading"><div><span className="mint-eyebrow">INNSIKT FRA WABI</span><h2 id="guide-section-title">Forstå litt mer.<br/><span>Få mer ut av AI i hverdagen.</span></h2></div><div className="guide-controls"><button type="button" aria-label="Forrige guide" aria-controls="guide-rail" disabled={edges.start} onClick={() => move(-1)}><span aria-hidden="true">←</span></button><button type="button" aria-label="Neste guide" aria-controls="guide-rail" disabled={edges.end} onClick={() => move(1)}><span aria-hidden="true">→</span></button><a href={mintBase+'innsikt/'}>Se alle guider <MintArrow/></a></div></div><div ref={rail} id="guide-rail" className="guide-rail" role="region" aria-label="Guider og artikler" tabIndex={0} onKeyDown={event => { if (event.target !== event.currentTarget) return; if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') { event.preventDefault(); move(event.key === 'ArrowRight' ? 1 : -1); } }}>{mintGuides.map(guide => <GuideCard key={guide.slug} guide={guide}/>)}</div></section>;
}
function GuideLibrary() {
  const [filter, setFilter] = React.useState('Alle');
  const filtered = mintGuides.filter(guide => filter === 'Alle' || guide.category === filter);
  return <div className="mint-home guide-library mint-container"><span className="mint-eyebrow">WABI / INNSIKT</span><h1>Praktisk kunnskap.<br/>Til en ny arbeidsdag.</h1><p className="guide-library-intro">Guider og forklaringer som gjør det enklere å ta gode valg om AI. Begynn med spørsmålet du sitter med.</p><div className="guide-filters" role="group" aria-label="Filtrer innhold">{['Alle', 'Guide', 'Forklart'].map(value => <button key={value} aria-pressed={filter === value} onClick={() => setFilter(value)}>{value === 'Guide' ? 'Guider' : value}</button>)}</div><p className="guide-result-count" aria-live="polite">{filtered.length} artikler</p><div className="guide-library-grid">{filtered.map(guide => <GuideCard key={guide.slug} guide={guide} showArtwork={false}/>)}</div></div>;
}
function GuidePage({ guide, go }) {
  const anchor = id => guideHref(guide)+'#'+id;
  return <div className="mint-home guide-page mint-container"><nav className="guide-breadcrumb" aria-label="Brødsmuler"><a href={mintBase}>Wabi</a><span aria-hidden="true">/</span><a href={mintBase+'innsikt/'}>Innsikt</a><span aria-hidden="true">/</span><span>{guide.topic}</span></nav><article><header className="guide-article-header"><span className="mint-eyebrow">{guide.category} · {guide.topic}</span><h1>{guide.title}</h1><p>{guide.description}</p><div className="guide-byline"><span>Wabi</span><span>{guideMinutes(guide)} min lesing</span><span>Oppdatert <time dateTime={guide.updatedAt}>{guideDate(guide.updatedAt)}</time></span></div></header><div className="guide-article-layout"><aside className="guide-toc"><span className="mint-eyebrow">I DENNE ARTIKKELEN</span><nav aria-label="Innholdsfortegnelse"><a href={anchor('kort-fortalt')}>Kort fortalt</a>{guide.sections.map(section => <a href={anchor(section.id)} key={section.id}>{section.title}</a>)}<a href={anchor('sporsmal')}>Vanlige spørsmål</a></nav><a className="guide-back" href={mintBase+'innsikt/'}>← Alle guider</a></aside><div className="guide-article-body"><section id="kort-fortalt" className="guide-answer"><h2>Kort fortalt</h2><p>{guide.summary}</p></section>{guide.sections.map(section => <section id={section.id} key={section.id}><h2>{section.title}</h2>{section.paragraphs.map((paragraph,i) => <p key={i}>{paragraph}</p>)}{section.items && <ul>{section.items.map(item => <li key={item}>{item}</li>)}</ul>}</section>)}<section id="sporsmal" className="guide-questions"><h2>Vanlige spørsmål</h2>{guide.questions.map(question => <div key={question.question}><h3>{question.question}</h3><p>{question.answer}</p></div>)}</section>{guide.sources.length > 0 && <section className="guide-sources"><h2>Kilder og videre lesning</h2><ul>{guide.sources.map(source => <li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer">{source.title} ↗</a></li>)}</ul></section>}<div className="guide-article-cta"><h2>{guide.cta}</h2><p>Vi tar utgangspunkt i oppgavene deres og finner et konkret sted å begynne.</p><MintLink go={go} page={guide.relatedService}>Se hvordan vi kan hjelpe</MintLink></div></div></div></article><section className="guide-related"><h2>Les videre</h2><div className="guide-library-grid">{mintGuides.filter(item => item.slug !== guide.slug).map(item => <GuideCard guide={item} key={item.slug} showArtwork={false}/>)}</div></section></div>;
}
