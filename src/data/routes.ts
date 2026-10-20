export interface Route {
  id: string;
  slot: string;
  title: string;
  nights: string;
  pace: string;
  bestFor: string;
  season: string;
  intro: string;
  days: { day: string; place: string; text: string; dest?: string }[];
}

export const ROUTES: Route[] = [
  {
    id: 'five-days',
    slot: 'marrakech',
    title: 'Marrakech & the mountains',
    nights: '5 nights',
    pace: 'Slow',
    bestFor: 'A long weekend, first visits, families',
    season: 'Mar–Jun, Sep–Nov',
    intro: 'The red city and the High Atlas, with one short transfer and plenty of time on riad roofs and mountain paths.',
    days: [
      { day: 'Days 1–3', place: 'Marrakech', text: 'Medina, gardens, a food walk at Jemaa el-Fnaa and a hammam.', dest: 'marrakech' },
      { day: 'Days 4–5', place: 'Imlil, High Atlas', text: 'Village walks with a mountain guide, lunch with a family, starry nights.', dest: 'atlas' },
      { day: 'Day 6', place: 'Back to Marrakech', text: 'About 1.5 hours to the airport.' },
    ],
  },
  {
    id: 'eight-days',
    slot: 'sahara',
    title: 'Marrakech to Fes via the Sahara',
    nights: '8 nights',
    pace: 'Balanced',
    bestFor: 'First trips that want everything',
    season: 'Oct–Apr',
    intro: 'Our most-requested journey: city, mountains, gorges, a night in the dunes and the oldest medina in Morocco.',
    days: [
      { day: 'Days 1–3', place: 'Marrakech', text: 'Riad, souks, gardens and a food walk.', dest: 'marrakech' },
      { day: 'Day 4', place: 'Tizi n’Tichka to Aït Benhaddou', text: 'Cross the High Atlas and sleep near the ksar.', dest: 'aitbenhaddou' },
      { day: 'Day 5', place: 'Dadès & Todra gorges', text: 'Canyon walks along the Road of a Thousand Kasbahs.' },
      { day: 'Day 6', place: 'Merzouga', text: 'Sunset into the Erg Chebbi and a night in camp.', dest: 'sahara' },
      { day: 'Days 7–8', place: 'Fes', text: 'North through the Ziz valley, then two days in the medina.', dest: 'fes' },
    ],
  },
  {
    id: 'two-weeks',
    slot: 'chefchaouen',
    title: 'North to south, slowly',
    nights: '13 nights',
    pace: 'Slow',
    bestFor: 'Second trips, sabbaticals, photographers',
    season: 'Mar–May, Sep–Nov',
    intro: 'From the blue Rif to the Atlantic, with time to stay put: two nights almost everywhere and no rushed days.',
    days: [
      { day: 'Days 1–2', place: 'Chefchaouen', text: 'Blue lanes, Rif walks and the Spanish Mosque at sunset.', dest: 'chefchaouen' },
      { day: 'Days 3–5', place: 'Fes', text: 'Madrasas, tanneries, a day trip to Volubilis and Meknes.', dest: 'fes' },
      { day: 'Day 6', place: 'Merzouga', text: 'Through the cedar forests of the Middle Atlas to the dunes.', dest: 'sahara' },
      { day: 'Day 7', place: 'Dadès valley', text: 'Gorges, rose valleys and kasbahs.' },
      { day: 'Day 8', place: 'Aït Benhaddou', text: 'The ksar at sunset.', dest: 'aitbenhaddou' },
      { day: 'Days 9–11', place: 'Marrakech', text: 'Gardens, souks and a cooking class.', dest: 'marrakech' },
      { day: 'Days 12–13', place: 'Essaouira', text: 'Sea air, grilled sardines and the ramparts.', dest: 'essaouira' },
    ],
  },
];
