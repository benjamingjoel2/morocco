export interface Destination {
  id: string;
  slot: string;
  name: string;
  region: string;
  tagline: string;
  intro: string;
  bestFor: string[];
  stay: string;
  season: string;
  gettingThere: string;
  dontMiss: string[];
}

export const DESTINATIONS: Destination[] = [
  {
    id: 'marrakech',
    slot: 'marrakech',
    name: 'Marrakech',
    region: 'Marrakech-Safi',
    tagline: 'The red city that never quite sits still',
    intro:
      'Pink-ochre walls, a square that turns into an open-air theatre at dusk, and riads where the noise drops away the moment the door closes behind you. Marrakech is loud and lovely, and it’s the easiest place to start a first trip.',
    bestFor: ['First-timers', 'Food lovers', 'Gardens & design'],
    stay: '3 nights',
    season: 'Oct–Apr (summer afternoons regularly pass 38°C)',
    gettingThere: 'Direct flights to Marrakech Menara (RAK); trains from Casablanca and Rabat.',
    dontMiss: [
      'Jemaa el-Fnaa as the food stalls fire up at sunset',
      'The Jardin Majorelle and the Musée Yves Saint Laurent next door',
      'Tanjia, slow-cooked in the embers of a hammam furnace',
      'The Bahia Palace and the Saadian Tombs early, before the groups',
    ],
  },
  {
    id: 'fes',
    slot: 'fes',
    name: 'Fes',
    region: 'Fès-Meknès',
    tagline: 'A medieval medina that still works for a living',
    intro:
      'Fes el-Bali is one of the largest car-free urban areas in the world, a maze of more than nine thousand lanes where donkeys still carry the deliveries. Come for the craftsmanship, stay for the quiet courtyards of its madrasas.',
    bestFor: ['History', 'Crafts', 'Architecture'],
    stay: '2–3 nights',
    season: 'Mar–May and Sep–Nov',
    gettingThere: 'Trains from Casablanca, Rabat, Meknes and Tangier; Fès–Saïss airport (FEZ).',
    dontMiss: [
      'The Chouara tannery seen from a leather-shop terrace in the morning light',
      'Bou Inania and Al-Attarine madrasas, carved cedar and zellige floor to ceiling',
      'Al-Qarawiyyin, founded in 859 by Fatima al-Fihri (view from the doorway)',
      'A day trip to Meknes and the Roman ruins of Volubilis',
    ],
  },
  {
    id: 'chefchaouen',
    slot: 'chefchaouen',
    name: 'Chefchaouen',
    region: 'Rif Mountains',
    tagline: 'Blue lanes beneath the peaks of the Rif',
    intro:
      'Founded in 1471 in a fold of the Rif, Chaouen is washed in every shade of blue. It’s slower and gentler than the big cities: hike to the Spanish Mosque for sunset, then linger over goat’s cheese and mint tea in the Outa el-Hammam square.',
    bestFor: ['Photographers', 'Slow days', 'Hiking'],
    stay: '2 nights',
    season: 'Apr–Jun and Sep–Oct',
    gettingThere: 'CTM buses or a private transfer from Fes (about 4 hours) or Tangier (about 2.5 hours).',
    dontMiss: [
      'The walk up to the Spanish Mosque at golden hour',
      'The kasbah and its garden in Outa el-Hammam',
      'Akchour waterfalls and the God’s Bridge rock arch in Talassemtane National Park',
    ],
  },
  {
    id: 'sahara',
    slot: 'sahara',
    name: 'Sahara, Merzouga',
    region: 'Drâa-Tafilalet',
    tagline: 'Where the Erg Chebbi dunes glow at dusk',
    intro:
      'The dunes of Erg Chebbi rise in waves up to about 150 metres above the hamada. Ride or walk in at sunset, spend the night in a camp under an outrageous sky, and wake early to watch the sand turn from violet to gold.',
    bestFor: ['Stargazing', 'Couples', 'Once-in-a-lifetime'],
    stay: '1–2 nights in camp',
    season: 'Oct–Apr (nights can drop near freezing in winter)',
    gettingThere: 'Long but beautiful drive from Marrakech via the High Atlas (about 9–10 hours, best split over two days) or from Fes (about 7–8 hours).',
    dontMiss: [
      'Sunrise from the top of a big dune',
      'Gnawa music in the village of Khamlia',
      'Madfouna, the “Berber pizza” stuffed with meat, onion and spices',
    ],
  },
  {
    id: 'atlas',
    slot: 'atlas',
    name: 'High Atlas & Imlil',
    region: 'Al Haouz',
    tagline: 'Walnut groves, mule paths and North Africa’s highest peak',
    intro:
      'Just ninety minutes from Marrakech, Imlil is the trailhead for Jbel Toubkal (4,167 m) and for gentler walks between terraced Amazigh villages. Stay in a mountain guesthouse and you’ll be fed tagine and walnuts until you cannot move.',
    bestFor: ['Hikers', 'Families', 'Village life'],
    stay: '2–3 nights',
    season: 'Apr–Jun and Sep–Oct; Toubkal in winter needs crampons and a guide',
    gettingThere: 'Private transfer or grand taxi from Marrakech via Asni (about 1.5 hours).',
    dontMiss: [
      'A day walk over the Tizi n’Mzik pass',
      'Lunch on a rooftop in Aroumd',
      'A two-day guided ascent of Toubkal for fit walkers',
    ],
  },
  {
    id: 'essaouira',
    slot: 'essaouira',
    name: 'Essaouira',
    region: 'Atlantic coast',
    tagline: 'Sea wind, blue boats and grilled sardines',
    intro:
      'Behind its 18th-century ramparts, Essaouira is breezy, artistic and laid back. The trade winds keep it cool in summer and make it one of the best kitesurf spots in Africa. Pick your fish at the port and have it grilled on the spot.',
    bestFor: ['Seaside', 'Music', 'Kitesurfing'],
    stay: '2–3 nights',
    season: 'Year-round; windiest Apr–Aug',
    gettingThere: 'Supratours or CTM bus from Marrakech (about 3 hours).',
    dontMiss: [
      'The Skala de la Ville ramparts at sunset',
      'The fishing port when the morning catch comes in',
      'The Gnaoua and World Music Festival each June',
      'Argan oil cooperatives run by local women on the road inland',
    ],
  },
  {
    id: 'aitbenhaddou',
    slot: 'aitbenhaddou',
    name: 'Aït Benhaddou & Ouarzazate',
    region: 'Drâa-Tafilalet',
    tagline: 'Earthen ksour on the old caravan road',
    intro:
      'A fortified village of rammed earth climbing a hill above the Ounila river, Aït Benhaddou is a UNESCO World Heritage site and a familiar face from many film sets. Continue along the Road of a Thousand Kasbahs to the Dadès and Todra gorges.',
    bestFor: ['Road trips', 'Film buffs', 'Architecture'],
    stay: '1–2 nights',
    season: 'Mar–May and Sep–Nov',
    gettingThere: 'About 4 hours from Marrakech over the Tizi n’Tichka pass (2,260 m).',
    dontMiss: [
      'Sunset from the granary at the top of the ksar',
      'Telouet kasbah on the old route over the Atlas',
      'The Dadès gorge switchbacks and the walls of the Todra gorge',
    ],
  },
  {
    id: 'taghazout',
    slot: 'taghazout',
    name: 'Taghazout & the surf coast',
    region: 'Souss-Massa',
    tagline: 'Right-hand point breaks and slow mornings',
    intro:
      'North of Agadir, the old fishing village of Taghazout has become Morocco’s surf capital, with waves for beginners at Panoramas and serious point breaks like Anchor Point in winter. Between sessions: yoga, avocado juice and the hills of Paradise Valley.',
    bestFor: ['Surfers', 'Winter sun', 'Wellness'],
    stay: '4–7 nights',
    season: 'Surf Oct–Apr; sunny most of the year',
    gettingThere: '30 minutes by road from Agadir Al Massira airport (AGA).',
    dontMiss: [
      'A surf lesson at Banana Point or Panoramas',
      'Swimming holes in Paradise Valley',
      'Fresh fish tagine in the village of Imsouane further north',
    ],
  },
];
