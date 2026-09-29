function ToolRow() {
  const companies = [
    ['vespa.png', 'Vespa'], ['trondheim-kommune.png', 'Trondheim Kommune'],
    ['hornet.png', 'Hornet'], ['novela-klinikken.png', 'Novela Klinikken'],
    ['norwegian-fish-oil.png', 'Norwegian Fish Oil'], ['maxpuls.png', 'Maxpuls'],
    ['tbu.png', 'TBU'], ['trondheim-catering.png', 'Trondheim Catering'],
    ['bunnpris.png', 'Bunnpris'], ['norwegian-efoil.png', 'Norwegian Efoil Company'],
    ['noteless.png', 'Noteless'],
  ];
  return <section className="wabi-tools" aria-labelledby="wabi-tools-title">
    <div className="wabi-tools-inner">
      <h2 id="wabi-tools-title">I godt selskap</h2>
      <ul className="wabi-tools-grid">
        {companies.map(([file, name]) => <li key={file} tabIndex={0}>
          <img className="wabi-tools-mark" src={'/assets/logos/' + file} alt={name} width="72" height="30" loading="lazy"/>
        </li>)}
      </ul>
    </div>
  </section>;
}
