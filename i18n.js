/* ──────────────────────────────────────────────────────────────────────────
   Wabi — Norwegian → English i18n dictionary
   Keys = EXACT Norwegian visible text, trimmed, whitespace collapsed to single
   spaces (matching node.nodeValue.trim().replace(/\s+/g,' ')).
   Arrows/separators (→ ↓ › ·) kept as-is.
   ────────────────────────────────────────────────────────────────────────── */

const I18N = {
  /* ── NAV ── */
  "Hva vi bygger": "What we build",
  "Kalkulator": "Calculator",
  "Cases": "Cases",
  "Sammenligning": "Comparison",
  "Book samtale": "Book a call",
  "Book samtale →": "Book a call →",
  "Mørkt tema": "Dark theme",
  "Lyst tema": "Light theme",

  /* ── HERO ── */
  "AI i drift,": "AI in operation,",
  "bygget for": "built for",
  "måten du faktisk arbeider på": "the way you actually work",
  "Vi kartlegger hvordan virksomheten din drives i dag, og bygger den deretter på nytt, med AI-agentene, arbeidsflytene og programvaren du alltid har ønsket deg.": "We map how your business runs today, then rebuild it from the ground up — with the AI agents, workflows and software you've always wanted.",
  "Ta kontakt →": "Get in touch →",
  "Se hvordan det fungerer ↓": "See how it works ↓",
  "12 000+ timer spart for kundene våre": "12,000+ hours saved for our customers",
  "Se hvordan vi gjorde det ›": "See how we did it ›",

  /* ── HERO DASHBOARD MOCK (.hd-app) ── */
  "Wabi": "Wabi",
  "Arbeidsområde": "Workspace",
  "Oversikt": "Overview",
  "Datakart": "Data map",
  "AI-agenter": "AI agents",
  "Arbeidsflyt": "Workflows",
  "Innsikt": "Insight",
  "Rapporter": "Reports",
  "Aktivitet": "Activity",
  "Alle systemer live": "All systems live",
  "Arbeidsområde · Datakart": "Workspace · Data map",
  "Live dataflyt": "Live data flow",
  "Søk i systemet…": "Search the system…",
  "Live": "Live",
  "Timer spart": "Hours saved",
  "↑ 12%": "↑ 12%",
  "12 480": "12,480",
  "t": "h",
  "Kilder koblet": "Sources connected",
  "+2 denne uka": "+2 this week",
  "Aktive agenter": "Active agents",
  "↑ 3 nye": "↑ 3 new",
  "Fra kilder til innsikt": "From sources to insight",
  "· oppdatert nå": "· updated just now",
  "Flyt": "Flow",
  "Tabell": "Table",
  "Logg": "Log",

  /* ── HERO ILLUSTRATION SVG <text> / titles ── */
  "Dataflyt – fra kilder til levende innsikt": "Data flow – from sources to live insight",
  "ÉN KILDE TIL SANNHET": "ONE SOURCE OF TRUTH",
  "Automatiserte arbeidsflyter": "Automated workflows",
  "Skreddersydd programvare": "Custom software",
  "KILDER": "SOURCES",
  "SYSTEMET": "THE SYSTEM",
  "LIVE INNSIKT": "LIVE INSIGHT",

  /* ── PHONE MOCK (.phone-mock) ── */
  "Daglig brief": "Daily brief",
  "God morgen 👋": "Good morning 👋",
  "7 ting": "7 things",
  "krever handling i dag — resten er allerede ordnet.": "need action today — the rest is already handled.",
  "Tilbud sendt til 12 leads": "Quotes sent to 12 leads",
  "Kjørt automatisk · sparte 2t 10m": "Ran automatically · saved 2h 10m",
  "Ferdig": "Done",
  "3 e-poster klar til å sendes": "3 emails ready to send",
  "Venter på din godkjenning": "Waiting for your approval",
  "Godkjenn": "Approve",
  "Omsetning per ansatt": "Revenue per employee",
  "+18%": "+18%",
  "↑": "↑",
  "Koblet til": "Connected to",
  "+6 kilder": "+6 sources",
  "Sett i gang en oppgave": "Start a task",

  /* ── FLOATING CALLOUT CARDS ── */
  "Koblet til verktøyene dine": "Connected to your tools",
  "+6": "+6",
  "Daglig brief · 08:00": "Daily brief · 08:00",
  "7 ting krever handling i dag. Resten er allerede ordnet.": "7 things need action today. The rest is already handled.",
  "Automatisering": "Automation",
  "Send tilbud → 12 leads": "Send quotes → 12 leads",
  "12/12": "12/12",
  "+18% ↑": "+18% ↑",
  "Nordvik & Co · siste kvartal": "Nordvik & Co · last quarter",

  /* ── CONTEXT / LOGOS STRIP ── */
  "I godt selskap": "In good company",

  /* ── PROBLEM SECTION ── */
  "Utfordringen": "The challenge",
  "Kjenner du igjen noe av dette?": "Recognise any of this?",
  "Slik ser DNA-et ut hos mange av bedriftene vi jobber med.": "This is the DNA we see in many of the companies we work with.",
  "AI er en sjanse til å skrive det om.": "AI is a chance to rewrite it.",
  "Driften sitter i hodene på noen få.": "Operations live in the heads of a few people.",
  "Måten arbeidet faktisk blir gjort på står ikke skrevet ned noe sted. Den bor hos en håndfull folk.": "How the work actually gets done isn't written down anywhere. It lives with a handful of people.",
  "Er de borte, stopper det opp. Slutter de, begynner dere på nytt.": "When they're away, things grind to a halt. When they quit, you start over.",
  "Programvaren løser aldri akkurat deres behov.": "Off-the-shelf software never fits exactly what you need.",
  "Standard software er bygd for alle andre, ikke for dere. Dere betaler for funksjoner dere aldri bruker, og bøyer arbeidsmåten rundt det verktøyet tilfeldigvis støtter,": "Standard software is built for everyone else, not for you. You pay for features you never use and bend the way you work around whatever the tool happens to support,",
  "i stedet for omvendt.": "instead of the other way around.",
  "Midlertidige løsninger ble permanente.": "Temporary fixes became permanent.",
  "Regnearket ingen tør å røre. Systemet en konsulent bygde og forlot.": "The spreadsheet no one dares to touch. The system a consultant built and abandoned.",
  "Nødløsningen fra 2016 som fortsatt lekker tid, uke etter uke.": "The 2016 workaround that's still leaking time, week after week.",
  "midlertidig · 2016": "temporary · 2016",
  "Hvert system kjenner bare sin egen bit.": "Each system only knows its own piece.",
  "Kundene i ett system, faktura i et annet, prosjektene i et tredje. Trenger noen hele bildet, settes det sammen for hånd,": "Customers in one system, invoices in another, projects in a third. When someone needs the full picture, it's assembled by hand,",
  "og svaret er utdatert før det er delt.": "and the answer is out of date before it's shared.",
  "Kunde": "Customer",
  "Faktura": "Invoice",
  "Prosjekt": "Project",
  "×": "×",
  "Kursene satte seg aldri.": "The courses never stuck.",
  "Dere har vært på kursene og lest artiklene. Men ingen klarte å gjøre det relevant for måten akkurat dere jobber.": "You've taken the courses and read the articles. But no one managed to make it relevant to the way you actually work.",
  "Kunnskapen ble generell, og hverdagen ble den samme.": "The knowledge stayed generic, and day-to-day work stayed the same.",
  "Kurs fullført": "Course completed",
  "Artikler lest": "Articles read",
  "Tatt i bruk": "Put to use",
  "Det er ikke teknologien som svikter. Det er at": "It isn't the technology that fails. It's that",
  "ingen har bygget den rundt måten dere faktisk jobber på.": "no one has built it around the way you actually work.",

  /* ── PRODUCT / TIERS ── */
  "Tre nivåer. En tilnærming.": "Three levels. One approach.",
  "Fra spisset enkeltagent til et helt skreddersydd system. Vi møter dere der dere er, og bygger derifra. Målet vi måler mot:": "From a single focused agent to a fully custom system. We meet you where you are and build from there. The goal we measure against:",
  "økt omsetning per ansatt.": "higher revenue per employee.",
  "Presisjonsverktøyet.": "The precision tool.",
  "Én oppgave, gjort raskere av AI.": "One task, done faster by AI.",
  "Automatiserte arbeidsflyt": "Automated workflows",
  "Prosesslaget.": "The process layer.",
  "AI og mennesker, side om side.": "AI and people, side by side.",
  "Ditt eget system.": "Your own system.",
  "F.eks. et CRM som kjenner kundene dine — ikke alle andres.": "For example, a CRM that knows your customers — not everyone else's.",
  "2 481": "2,481",
  "+18,0 %": "+18.0%",
  "LIVE": "LIVE",
  "En oppgave": "One task",
  "En prosess": "One process",
  "Ett system": "One system",
  "›": "›",

  /* ── CALCULATOR ── */
  "Hva koster drift deg?": "What does operations cost you?",
  "De fleste norske SMB-er bruker 40 til 60% av kapasiteten på drift, rapportering og koordinering. Beregn hva det faktisk koster, og hva som kan frigjøres.": "Most Norwegian SMBs spend 40 to 60% of their capacity on operations, reporting and coordination. Work out what that actually costs — and what could be freed up.",
  "Antall ansatte": "Number of employees",
  "35": "35",
  "Snittlønn (NOK / år)": "Average salary (NOK / year)",
  "750 000": "750,000",
  "Andel tid på drift": "Share of time on operations",
  "45%": "45%",
  "Drift koster deg i året": "Operations cost you per year",
  "11,8 mill NOK": "NOK 11.8M",
  "Lønnskostnad × andel tid på drift. Det som ikke går til vekst.": "Salary cost × share of time on operations. The part that doesn't go toward growth.",
  "Potensial per ansatt": "Potential per employee",
  "+101k NOK": "+NOK 101k",
  "Hvis 30% av drift-tiden frigjøres til omsetningsskapende arbeid.": "If 30% of operations time is freed up for revenue-generating work.",
  "Snakk om hva som er mulig →": "Talk about what's possible →",
  "Uforpliktende samtale. Vi svarer innen en arbeidsdag.": "No-obligation call. We reply within one business day.",
  "Metode: Drift-kostnad = ansatte × snittlønn × andel tid på drift. Potensial per ansatt = snittlønn × andel drift × 30% frigjøring. Konservativt anslag. I praksis ser vi 30 til 50% reduksjon når AI-implementeringen er på plass.": "Method: Operations cost = employees × average salary × share of time on operations. Potential per employee = average salary × operations share × 30% freed up. A conservative estimate. In practice we see a 30 to 50% reduction once the AI implementation is in place.",

  /* ── CASES ── */
  "Resultater": "Results",
  "Det vi har bygget for andre.": "What we've built for others.",
  "Konkrete bedrifter, konkrete tall. Bransje og kontekst er ekte. Navn er anonymisert.": "Real companies, real numbers. The industry and context are genuine. Names are anonymised.",
  "Hvordan en bedrift går fra": "How a company goes from",
  "AI-nysgjerrig": "AI-curious",
  "til": "to",
  "AI-native": "AI-native",
  ".": ".",
  "Det vanligste vi ser: ledere som har lest om AI, prøvd noen verktøy, hørt foredrag. De vet at det betyr noe, men ingenting har satt seg. Vi starter med en konkret AI-agent, kobler den til arbeidsflyt, og over tid blir AI ikke et eksperiment, men måten dere driver på.": "The most common pattern we see: leaders who've read about AI, tried a few tools, heard the talks. They know it matters, but nothing has stuck. We start with one concrete AI agent, connect it to a workflow, and over time AI stops being an experiment and becomes the way you run.",
  "Snakk om hvordan dette ser ut for din bedrift →": "Talk about what this looks like for your company →",
  "Reisen fra nysgjerrig til AI-native drift": "The journey from curious to AI-native operations",
  "Nysgjerrig": "Curious",
  "Første pilot": "First pilot",
  "Skalerer på": "Scaling",
  "tvers": "across",
  "AI-native": "AI-native",
  "drift": "operations",
  "NÅ": "NOW",

  /* Case card 1 */
  "Driftsrapportering på tvers av tidssoner": "Operations reporting across time zones",
  "Aquakultur · Internasjonal drift": "Aquaculture · International operations",
  "Anlegg i flere land, ulike systemer, ulike tidssoner. Det som var en ukentlig statusrapport blir en daglig brief, sammensatt automatisk fra alle kilder.": "Sites in several countries, different systems, different time zones. What was a weekly status report becomes a daily brief, assembled automatically from every source.",
  "Les mer": "Read more",
  "Utfordringen": "The challenge",
  "Anlegg i flere land, hvert med egne systemer for fôring, biomasse, helse og logistikk. Ledelsen fikk en ukentlig statusrapport som var utdatert i det den ble sendt, og som krevde at noen manuelt hentet tall fra fem-seks ulike kilder.": "Sites in several countries, each with its own systems for feeding, biomass, health and logistics. Management received a weekly status report that was already out of date the moment it was sent, and that required someone to pull numbers manually from five or six different sources.",
  "Hva vi bygde": "What we built",
  "En agent som kobler seg på driftssystemene på tvers av lokasjoner, normaliserer tallene og setter sammen en daglig brief. Avvik flagges automatisk, og ledelsen kan stille oppfølgingsspørsmål i naturlig språk.": "An agent that connects to the operations systems across locations, normalises the numbers and assembles a daily brief. Anomalies are flagged automatically, and management can ask follow-up questions in natural language.",
  "Resultatet": "The result",
  "Det som var en ukentlig rapport ligger nå klar som en daglig brief når ledelsen våkner, uten at noen åpner et regneark. Beslutninger tas på dagsferske tall, ikke uke gamle.": "What was a weekly report now sits ready as a daily brief when management wakes up, without anyone opening a spreadsheet. Decisions are made on numbers that are a day old, not a week old.",

  /* Case card 2 */
  "−58% tid på tilbud": "−58% time on quotes",
  "Tilbud, prosjekt og CRM i ett system": "Quotes, projects and CRM in one system",
  "Infrastruktur · Nordisk drift": "Infrastructure · Nordic operations",
  "Selgerne dikterer på telefonen. Systemet skriver tilbudet, legger det i CRM, sender til kunde og booker oppfølging. Det som tok seks timer tar nå under to.": "Salespeople dictate on the phone. The system writes the quote, logs it in the CRM, sends it to the customer and books the follow-up. What took six hours now takes under two.",
  "Selgere brukte timer på å skrive tilbud manuelt og kopiere data fram og tilbake mellom CRM, prosjektverktøy og e-post. Mye dobbeltarbeid, og tilbud ble liggende.": "Salespeople spent hours writing quotes manually and copying data back and forth between the CRM, project tools and email. Lots of duplicated work, and quotes ended up sitting unsent.",
  "En arbeidsflyt der selgeren dikterer på telefonen. Systemet skriver tilbudet med riktig prising, legger det i CRM, sender til kunde og booker oppfølging automatisk.": "A workflow where the salesperson dictates on the phone. The system writes the quote with the right pricing, logs it in the CRM, sends it to the customer and books the follow-up automatically.",
  "Tiden fra forespørsel til ferdig tilbud falt med 58%: fra rundt seks timer til under to. Selgerne bruker tiden på kunder, ikke på administrasjon.": "The time from enquiry to finished quote dropped by 58%: from around six hours to under two. Salespeople spend their time on customers, not on admin.",

  /* Case card 3 */
  "30+ lokasjoner": "30+ locations",
  "Lik kvalitet på alle restauranter": "Consistent quality across every restaurant",
  "Servering · Kjededrift": "Hospitality · Chain operations",
  "Daglige driftstall fra alle lokasjoner konsolidert. Restaurantsjefer får et morgenbrief som peker dem på det som faktisk trenger oppmerksomhet i dag.": "Daily operational figures from every location, consolidated. Restaurant managers get a morning brief that points them to what actually needs attention today.",
  "Daglige driftstall fra over 30 restauranter lå i ulike systemer. Restaurantsjefer druknet i rapporter og rakk ikke å se hva som faktisk trengte oppmerksomhet.": "Daily operational figures from more than 30 restaurants sat in different systems. Restaurant managers were drowning in reports and never got to see what actually needed attention.",
  "Konsolidering av driftsdata fra alle lokasjoner, med et morgenbrief per restaurant som peker sjefen på dagens viktigste avvik (bemanning, svinn, salg) i stedet for en revisjonsrapport.": "Consolidation of operational data from every location, with a morning brief per restaurant that points the manager to the day's most important issues (staffing, waste, sales) instead of an audit report.",
  "Jevnere kvalitet på tvers av kjeden. Sjefene starter dagen med en konkret, prioritert liste i stedet for et regneark.": "More consistent quality across the chain. Managers start the day with a concrete, prioritised list instead of a spreadsheet.",

  /* Case card 4 */
  "3× kandidater / uke": "3× candidates / week",
  "Fra kandidatkilde til ferdig intervju": "From candidate source to completed interview",
  "Rekruttering · Vekstbedrift": "Recruitment · Growth company",
  "Kandidat-pipeline kobles fra første kontakt til intervju og oppfølging. Rekrutterere bruker tiden på samtaler; systemet håndterer koordinering og status.": "The candidate pipeline is connected from first contact through to interview and follow-up. Recruiters spend their time on conversations; the system handles coordination and status.",
  "Rekrutterere brukte mer tid på koordinering, oppfølging og statusoppdateringer enn på faktiske samtaler med kandidater.": "Recruiters spent more time on coordination, follow-ups and status updates than on actual conversations with candidates.",
  "En pipeline som kobler kandidater fra første kontakt gjennom screening, intervjubooking og oppfølging. Systemet håndterer koordinering og status; rekruttereren tar samtalene.": "A pipeline that connects candidates from first contact through screening, interview booking and follow-up. The system handles coordination and status; the recruiter takes the conversations.",
  "Tre ganger så mange kvalifiserte kandidater gjennom løpet per uke, uten å øke teamet. Mindre tid på admin, mer tid på mennesker.": "Three times as many qualified candidates through the process per week, without growing the team. Less time on admin, more time on people.",

  /* Case card 5 */
  "−40% opplæringstid": "−40% training time",
  "Salgsteamet lærer raskere": "The sales team learns faster",
  "Hotell · Salg + opplæring": "Hotel · Sales + training",
  "AI-coach tilgjengelig for hver selger, segmenttilpasset, alltid på. Nye selgere kommer raskere opp i fart; erfarne får et speil på hvordan de selger.": "An AI coach available to every salesperson, tailored by segment, always on. New salespeople get up to speed faster; experienced ones get a mirror on how they sell.",
  "Nye selgere brukte lang tid på å komme opp i fart. Opplæring var avhengig av at erfarne kolleger hadde tid, og kvaliteten varierte.": "New salespeople took a long time to get up to speed. Training depended on experienced colleagues having time, and quality varied.",
  "En AI-coach tilgjengelig for hver selger, tilpasset segment og rolle, alltid på. Den gir tilbakemelding på faktiske samtaler og svarer på spørsmål i øyeblikket.": "An AI coach available to every salesperson, tailored to segment and role, always on. It gives feedback on real conversations and answers questions in the moment.",
  "Opplæringstiden falt med 40%. Nye selgere blir produktive raskere, og erfarne får et speil på egen salgsteknikk.": "Training time dropped by 40%. New salespeople become productive faster, and experienced ones get a mirror on their own sales technique.",

  /* Case card 6 */
  "−65% henvendelser": "−65% enquiries",
  "Innbyggere finner svar selv": "Residents find answers themselves",
  "Kommune · Innbyggerservice": "Municipality · Citizen services",
  "Søk på tvers av kommunens nettside, dokumenter og tjenester. Det som krevde en telefon til sentralbordet blir et søk, på naturlig norsk.": "Search across the municipality's website, documents and services. What used to require a phone call to the switchboard becomes a search, in plain Norwegian.",
  "Sentralbordet og innbyggerservice ble nedringt med spørsmål som egentlig var besvart et sted på kommunens nettsider, men ingen fant fram.": "The switchboard and citizen services were swamped with questions that were actually answered somewhere on the municipality's website, but no one could find them.",
  "Et søk på tvers av kommunens nettside, dokumenter og tjenester, på naturlig norsk. Innbyggeren stiller spørsmålet sitt og får svaret med kilde.": "A search across the municipality's website, documents and services, in plain Norwegian. Residents ask their question and get the answer with its source.",
  "65% færre rutinehenvendelser til sentralbordet. Innbyggerne får raskere svar, og de ansatte får tid til sakene som faktisk krever et menneske.": "65% fewer routine enquiries to the switchboard. Residents get faster answers, and staff get time for the cases that genuinely need a person.",

  "Konkrete kundenavn deles på forespørsel. Vi snakker gjerne om hvilke som ligner mest på din situasjon.": "Specific customer names are shared on request. We're happy to talk about which ones most resemble your situation.",

  /* ── COMPARISON ── */
  "Slik sammenligner vi oss": "How we compare",
  "Mange måter å gjøre dette på.": "Many ways to do this.",
  "Én som varer.": "One that lasts.",
  "Strategi uten gjennomføring. Programvare uten tilpasning. Løsninger uten oppfølging. Vi tar de tunge delene, og blir værende for resten.": "Strategy without execution. Software without customisation. Solutions without follow-up. We take on the heavy lifting, and stay for the rest.",
  "Hold over eller trykk på en kolonne for å sammenligne en tilnærming av gangen.": "Hover over or tap a column to compare one approach at a time.",
  "Scroll bortover for å se alle tilnærmingene.": "Scroll sideways to see all the approaches.",
  "Gjør-det-selv": "Do-it-yourself",
  "Standard SaaS": "Standard SaaS",
  "Konsulenthus": "Consultancy",
  "Hva du får": "What you get",
  "Produksjonsklar programvare, bygget rundt deg.": "Production-ready software, built around you.",
  "En intern prototype.": "An in-house prototype.",
  "Et ferdigpakket produkt.": "An off-the-shelf product.",
  "En strategipresentasjon.": "A strategy deck.",
  "Tilpasning": "Customisation",
  "Kartlagt før vi bygger.": "Mapped before we build.",
  "Bare så grundig som du har tid til.": "Only as thorough as you have time for.",
  "Bygget for gjennomsnittet av markedet.": "Built for the market average.",
  "Utenfra og inn.": "Outside-in.",
  "Fart": "Speed",
  "I drift på uker.": "In operation within weeks.",
  "Rask å starte, treig å fullføre.": "Quick to start, slow to finish.",
  "Rask å kjøpe, treig å tilpasse.": "Quick to buy, slow to adapt.",
  "Måneder med kartlegging.": "Months of scoping.",
  "AI": "AI",
  "I arbeidsflyten, med trygge rammer.": "In the workflow, with safe guardrails.",
  "Din å feilsøke klokka to om natta.": "Yours to debug at two in the morning.",
  "En chat-boks.": "A chat box.",
  "I anbefalingene.": "In the recommendations.",
  "Etter lansering": "After launch",
  "Teamet ditt, lært opp til å drifte det.": "Your team, trained to run it.",
  "Du er supportteamet.": "You are the support team.",
  "En support-kø.": "A support queue.",
  "Oppdraget tar slutt.": "The engagement ends.",
  "Eierskap": "Ownership",
  "Kode, data, kontroll. Alt ditt.": "Code, data, control. All yours.",
  "Eid, men ustyrt.": "Owned, but unmanaged.",
  "Avhengig av en leverandør.": "Dependent on a vendor.",
  "Du eier en presentasjon.": "You own a presentation.",

  /* ── FAQ ── */
  "Det folk lurer på.": "What people ask.",
  "Hvor lang tid tar det å komme i gang?": "How long does it take to get started?",
  "En første AI-agent kan settes opp på dager til uker. Arbeidsflyt på tvers av flere systemer tar lengre tid. En full skreddersydd plattform er måneder. Vi starter alltid med en konkret leveranse, ikke et stort prosjekt med deadline langt frem i tid.": "A first AI agent can be set up in days to weeks. A workflow spanning several systems takes longer. A full custom platform is a matter of months. We always start with a concrete deliverable, not a big project with a deadline far off in the future.",
  "Hvilke systemer kan dere koble på?": "Which systems can you connect to?",
  "De fleste norske SMB-er bruker en kombinasjon av CRM (HubSpot, Pipedrive, Salesforce), regnskap (Tripletex, Fiken, PowerOffice), e-post, kalender, prosjektverktøy (Notion, Asana, Monday) og annonser (Meta, Google). Vi kobler oss på det du allerede har. Du trenger ikke bytte.": "Most Norwegian SMBs use a mix of CRM (HubSpot, Pipedrive, Salesforce), accounting (Tripletex, Fiken, PowerOffice), email, calendar, project tools (Notion, Asana, Monday) and ads (Meta, Google). We connect to what you already have. You don't need to switch.",
  "Hvor mye må vi gjøre selv?": "How much do we have to do ourselves?",
  "I starten: noen samtaler om hvordan bedriften faktisk fungerer, hvilke oppgaver som spiser tid, hva strategien er. Underveis: validering av at systemet handler riktig. Vi gjør byggingen. Du gir konteksten.": "At the start: a few conversations about how the business actually works, which tasks eat up time, what the strategy is. Along the way: confirming that the system acts correctly. We do the building. You provide the context.",
  "Hva med datasikkerhet og GDPR?": "What about data security and GDPR?",
  "Datasikkerhet og GDPR er en del av vurderingen i hver implementering. Konkrete krav, databehandling og hvilke leverandører som passer best for din bedrift, går vi gjennom sammen i samtalen.": "Data security and GDPR are part of the assessment in every implementation. We go through the specific requirements, data processing and which providers best fit your company together in the conversation.",
  "Hva koster det?": "What does it cost?",
  "Det avhenger av hva som bygges og hvor mange systemer som skal kobles på. En første AI-agent koster langt mindre enn en full plattform. De fleste SMB-er regner kostnaden som lav sammenlignet med en heltidsansatt. Vi prater konkret tall i samtalen.": "It depends on what's being built and how many systems need to be connected. A first AI agent costs far less than a full platform. Most SMBs consider the cost low compared with a full-time hire. We talk concrete figures in the conversation.",
  "Hva skiller dere fra en konsulent?": "What sets you apart from a consultant?",
  "En konsulent leverer en rapport. Vi leverer et system som handler. Vi bygger inn i din hverdag. Vi forlater deg ikke med en plan du må gjennomføre selv. Og vi måler oss på en ting: økt omsetning per ansatt.": "A consultant delivers a report. We deliver a system that acts. We build into your day-to-day. We don't leave you with a plan you have to execute yourself. And we measure ourselves on one thing: higher revenue per employee.",

  /* ── FINAL CTA (.outro-cta) ── */
  "Kontakt oss": "Contact us",
  "La oss finne ut av AI-en din.": "Let's figure out your AI.",
  "Ta med en arbeidsflyt, en avdeling, hele selskapet, eller bare en magefølelse. Vi forteller deg hvor AI passer, hvor det ikke passer, og hva som er verdt å gjøre først.": "Bring a workflow, a department, the whole company, or just a gut feeling. We'll tell you where AI fits, where it doesn't, and what's worth doing first.",
  "Vi svarer innen én arbeidsdag.": "We reply within one business day.",

  /* ── FOOTER ── */
  "AI input": "AI input",
  "For deg som vil holde oversikt over AI uten å drukne i støy. Nye verktøy og utviklinger innen AI-teknologi, forklart enkelt på norsk, oversiktlig og uten hype.": "For those who want to keep up with AI without drowning in noise. New tools and developments in AI technology, explained simply, clear and without the hype.",
  "Meld på →": "Sign up →",
  "AI Driftssystem for norske bedrifter, bygget lag for lag rundt måten dere faktisk arbeider på.": "An AI operating system for Norwegian businesses, built layer by layer around the way you actually work.",
  "admin@wabi.no": "admin@wabi.no",
  "Utforsk": "Explore",
  "Bevis": "Proof",
  "Selskap": "Company",
  "Ofte stilte spørsmål": "FAQ",
  "Kontakt": "Contact",
  "© 2026 Wabi · Trondheim · Singapore": "© 2026 Wabi · Trondheim · Singapore"
};

/* ── Placeholders (input fields) — translate separately: ── */
const I18N_PLACEHOLDERS = {
  "Fornavn": "First name",
  "din@epost.no": "you@email.com"
};

/* ── aria-labels (Norwegian, user-facing): ── */
const I18N_ARIA = {
  "Wabi hjem": "Wabi home",
  "Primær": "Primary",
  "Bytt fargetema": "Toggle colour theme",
  "Meny": "Menu",
  "Dataflyt – fra kilder til levende innsikt": "Data flow – from sources to live insight",
  "Case-detaljer": "Case details",
  "Lukk": "Close",
  "Meld deg på AI input": "Sign up for AI input",
  "Fornavn": "First name",
  "E-post": "Email",
  "Wabi på LinkedIn": "Wabi on LinkedIn"
};

/* ──────────────────────────────────────────────────────────────────────────
   JS-embedded strings that need manual handling (with line numbers + context):

   - line ~3680-3686: typewriter "actions" array in the #hubAction effect.
     NOTE: #hubAction does not appear in the current markup, so this animation
     may be inactive — but the strings are present in the script and should be
     translated if the element is reintroduced.
       actions = [
         'Sender tilbud',        → 'Sending quote'
         'Oppdaterer CRM',       → 'Updating CRM'
         'Booker oppfølging',    → 'Booking follow-up'
         'Henter månedstall',    → 'Fetching monthly figures'
         'Klargjør brief'        → 'Preparing brief'
       ]

   - line ~3925: formatNok() returns the unit suffix ' mill NOK'
       'mill NOK'  → 'M NOK'  (or restructure to 'NOK …M' to match I18N above)

   - line ~3929: formatNok() returns 'k NOK' suffix for thousands
       'k NOK'  → 'k NOK'  (e.g. '+101k NOK'; reorder to 'NOK 101k' if desired)

   - line ~3931: formatNok() returns ' NOK' suffix for small values
       ' NOK'  → ' NOK'

   - line ~3934: formatNokThousands() uses .toLocaleString('no-NO')
       Locale 'no-NO' → use 'en-US' (or similar) for English number grouping
       (space → comma). Affects the salary slider value display.

   - line ~3948: drift slider value template literal: drift + '%'  → unchanged ('%')

   - line ~3961: newsletter success message (innerHTML)
       'Takk! Vi holder deg oppdatert. ✓'
         → 'Thanks! We'll keep you posted. ✓'
   ────────────────────────────────────────────────────────────────────────── */

/* ── strings added/changed after the dictionary was generated ── */
Object.assign(I18N, {
  "Finn AI-mulighetene dine": "Find your AI opportunities",
  "Få en AI-vurdering →": "Get an AI assessment →",
  "Meld meg på nyhetsbrevet ↓": "Sign up for the newsletter ↓",
  "Svar innen én arbeidsdag. Ingen pitch før vi har forstått behovet.": "Reply within one business day. No pitch until we understand the need.",
  "Språk / Language": "Språk / Language",
  "Nysgjerrig": "Curious",
  "Første pilot": "First pilot",
  "Skalerer på tvers": "Scaling across",
  "AI-native drift": "AI-native ops",
  "NÅ": "NOW",
  "Send oss en e-post": "Send us an email",
  "Åpne e-postappen →": "Open your email app →",
  "Kopier adresse": "Copy address",
  "Vi svarer innen én arbeidsdag.": "We reply within one business day.",
  "Hva er et AI driftssystem?": "What is an AI operating system?",
  "Et AI driftssystem er kunstig intelligens (KI) bygget inn i den daglige driften av bedriften: AI-agenter som utfører konkrete oppgaver, arbeidsflyter som kobler systemene dine sammen, og programvare tilpasset måten dere jobber på. Ikke en chatbot på siden av driften, men en del av selve driften.": "An AI operating system is artificial intelligence (AI) built into the daily operations of your business: AI agents that carry out concrete tasks, workflows that connect your systems, and software shaped around the way you work. Not a chatbot on the side, but part of the operation itself."
});

/* ── i18n ENGINE: walks text nodes and swaps NO⇄EN, remembers choice ── */
(function () {
  var orig = new WeakMap();
  function norm(s){ return s.trim().replace(/\s+/g, ' '); }
  function translate(root, lang) {
    if (!root) return;
    var w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
    var nodes = [], n;
    while ((n = w.nextNode())) nodes.push(n);
    for (var i = 0; i < nodes.length; i++) {
      var node = nodes[i], raw = node.nodeValue;
      if (!raw || !raw.trim()) continue;
      var pn = node.parentNode ? node.parentNode.nodeName : '';
      if (pn === 'SCRIPT' || pn === 'STYLE') continue;
      if (!orig.has(node)) orig.set(node, raw);
      var base = orig.get(node);
      var en = I18N[norm(base)];
      node.nodeValue = (lang === 'en' && en !== undefined) ? base.replace(base.trim(), en) : base;
    }
    if (root.querySelectorAll) {
      root.querySelectorAll('[placeholder]').forEach(function (el) {
        if (el.__ph == null) el.__ph = el.getAttribute('placeholder');
        var en = I18N_PLACEHOLDERS[el.__ph];
        el.setAttribute('placeholder', (lang === 'en' && en) ? en : el.__ph);
      });
      root.querySelectorAll('[aria-label]').forEach(function (el) {
        if (el.__al == null) el.__al = el.getAttribute('aria-label');
        var en = I18N_ARIA[el.__al];
        el.setAttribute('aria-label', (lang === 'en' && en) ? en : el.__al);
      });
    }
  }
  function setLang(lang) {
    lang = (lang === 'en') ? 'en' : 'no';
    window.__wabiLang = lang;
    translate(document.body, lang);
    document.documentElement.setAttribute('lang', lang);
    try { localStorage.setItem('wabi-lang', lang); } catch (e) {}
    document.querySelectorAll('[data-lang]').forEach(function (b) {
      b.classList.toggle('is-active', b.getAttribute('data-lang') === lang);
    });
    var dlg = document.querySelector('.case-modal__dialog');
    if (dlg) translate(dlg, lang);
  }
  window.wabiSetLang = setLang;
  window.wabiTranslate = function (root) { translate(root, window.__wabiLang || 'no'); };
  document.querySelectorAll('[data-lang]').forEach(function (b) {
    b.addEventListener('click', function (e) { e.preventDefault(); setLang(b.getAttribute('data-lang')); });
  });
  var saved = 'no';
  try { saved = localStorage.getItem('wabi-lang') || 'no'; } catch (e) {}
  setLang(saved);
})();
