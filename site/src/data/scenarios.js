// Demo tasks for the hero console. `ending` completes the headline "Vi gjør AI nyttig …".
export const SCENARIOS = [
  { id: 'rapport', label: 'Ukesrapport', ending: 'i rapporteringen.', prompt: 'Lag ukesrapporten fra HubSpot og Gmail hver mandag', tools: ['HubSpot', 'Gmail', 'Slack'],
    steps: [['Hentet salgstall fra HubSpot', '142 rader'], ['Lest nye kundehenvendelser', '23 e-poster'], ['Sammenlignet med forrige uke', '3 avvik'], ['Skrevet utkast til rapport', '1 side']],
    result: ['Utkast klart i #ledelse, 07:00', 'Venter på godkjenning fra deg'], action: 'Godkjenn' },
  { id: 'kundeservice', label: 'Kundeservice', ending: 'i kundeservice.', prompt: 'Svar på vanlige kundehenvendelser og send resten til riktig person', tools: ['Gmail', 'Notion', 'Microsoft Teams'],
    steps: [['Lest nye henvendelser', '41 e-poster'], ['Funnet svar i kunnskapsbasen', 'Notion'], ['Skrevet svarutkast', '32 utkast'], ['Sendt spesialsaker videre', '9 saker']],
    result: ['32 svar klare til sending', '9 saker venter på teamet i Teams'], action: 'Se utkast' },
  { id: 'bilag', label: 'Bilag', ending: 'i regnskapet.', prompt: 'Les bilag fra innboksen og foreslå kontering', tools: ['Gmail', 'Slack'],
    steps: [['Hentet vedlegg fra innboksen', '18 bilag'], ['Lest beløp, dato og leverandør', 'PDF og bilde'], ['Sjekket mot fjorårets kontering', 'Samme leverandør'], ['Foreslått kontering', '18 forslag']],
    result: ['18 bilag klare til godkjenning', 'Du tar den siste vurderingen'], action: 'Godkjenn' },
  { id: 'tilbud', label: 'Tilbud', ending: 'i salgsarbeidet.', prompt: 'Skriv tilbud basert på notatene fra kundemøtet', tools: ['Notion', 'HubSpot', 'Gmail'],
    steps: [['Lest møtenotatene', 'Notion'], ['Hentet priser og vilkår', 'Prisliste 2026'], ['Fylt ut tilbudsmalen', '4 sider'], ['Lagt tilbudet på kunden i CRM', 'HubSpot']],
    result: ['Tilbud klart til gjennomlesning', 'Sendes når du har sett over'], action: 'Åpne' },
];
