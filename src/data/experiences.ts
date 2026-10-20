export interface Experience {
  slot: string;
  tag: string;
  title: string;
  where: string;
  text: string;
}

export const EXPERIENCES: Experience[] = [
  {
    slot: 'desertCamp',
    tag: 'Desert',
    title: 'A night in the Erg Chebbi',
    where: 'Merzouga',
    text: 'Walk or ride into the dunes at sunset, eat tagine around a fire to the sound of drums, and sleep in a camp far from any light pollution.',
  },
  {
    slot: 'atlasValley',
    tag: 'Mountains',
    title: 'Village-to-village in the High Atlas',
    where: 'Imlil & the Aït Mizane valley',
    text: 'Follow mule tracks between walnut terraces with a local mountain guide, stopping for bread and honey in Amazigh homes.',
  },
  {
    slot: 'tagine',
    tag: 'Food',
    title: 'Cook a tagine, start at the souk',
    where: 'Marrakech or Fes',
    text: 'Shop for preserved lemons, olives and ras el hanout, then learn the low, slow art of the clay pot and finish with a perfectly poured tea.',
  },
  {
    slot: 'riad',
    tag: 'Wellbeing',
    title: 'Hammam & gommage',
    where: 'Everywhere',
    text: 'Steam, black olive soap and a vigorous scrub with a kessa glove. Try a neighbourhood hammam with a local, or a calmer spa in a riad.',
  },
  {
    slot: 'taghazout',
    tag: 'Ocean',
    title: 'Surf the Atlantic point breaks',
    where: 'Taghazout & Imsouane',
    text: 'Gentle beginner waves in summer, long right-handers in winter, and surf camps that feel like home after a week.',
  },
  {
    slot: 'tannery',
    tag: 'Crafts',
    title: 'Meet the makers of Fes',
    where: 'Fes el-Bali',
    text: 'Visit the Chouara tannery, coppersmiths on Seffarine square and zellige cutters who still shape every tile by hand.',
  },
  {
    slot: 'dades',
    tag: 'Road trip',
    title: 'The Road of a Thousand Kasbahs',
    where: 'Ouarzazate to the Todra gorge',
    text: 'Palm groves, rose valleys and switchbacks: the drive between the Atlas and the Sahara is a destination in itself.',
  },
  {
    slot: 'majorelle',
    tag: 'Gardens',
    title: 'Gardens & quiet corners of Marrakech',
    where: 'Marrakech',
    text: 'Majorelle’s electric blue, the Secret Garden in the medina and the olive groves of the Menara: green pauses in a red city.',
  },
];

export interface Festival {
  name: string;
  where: string;
  when: string;
  text: string;
}

export const FESTIVALS: Festival[] = [
  {
    name: 'Fes Festival of World Sacred Music',
    where: 'Fes',
    when: 'Late May or June',
    text: 'Sufi chants, gospel and Andalusian music in the courtyards of Bab al-Makina and the Batha museum.',
  },
  {
    name: 'Rose Festival',
    where: 'Kelaat M’Gouna, Dadès valley',
    when: 'May, after the harvest',
    text: 'The valley celebrates the Damask rose harvest with music, dancing and a shower of petals.',
  },
  {
    name: 'Gnaoua & World Music Festival',
    where: 'Essaouira',
    when: 'June',
    text: 'Gnawa masters (maâlems) jam with jazz, blues and world musicians on stages by the sea.',
  },
  {
    name: 'Imilchil Marriage Festival',
    where: 'Imilchil, High Atlas',
    when: 'Late summer (usually September)',
    text: 'A great Amazigh moussem and market in the mountains, tied to the legend of two star-crossed lovers and their lakes.',
  },
  {
    name: 'Ramadan & Eid',
    where: 'Nationwide',
    when: 'Dates follow the lunar calendar',
    text: 'Quiet days, festive nights. After sunset, streets fill for ftour and harira. Travel works fine, just with gentler hours.',
  },
];

export const FOODS = [
  { name: 'Tagine', text: 'The clay pot and the stew: lamb with prunes and almonds, chicken with preserved lemon and olives.' },
  { name: 'Couscous', text: 'Traditionally a Friday lunch, steamed three times and crowned with seven vegetables.' },
  { name: 'Pastilla', text: 'Flaky warqa pastry with pigeon or chicken, almonds and cinnamon. Sweet and savoury at once.' },
  { name: 'Harira', text: 'Tomato, lentil and chickpea soup, the dish that breaks the fast in Ramadan.' },
  { name: 'Msemen & amlou', text: 'Square layered pancakes at breakfast, with amlou: argan oil, almonds and honey.' },
  { name: 'Tanjia', text: 'Marrakech’s bachelor dish, slow-cooked for hours in the ashes of a hammam furnace.' },
  { name: 'Grilled sardines', text: 'Straight off the boats in Essaouira and Safi, with bread, cumin and salt.' },
  { name: 'Atay', text: 'Green tea, fresh mint and plenty of sugar, poured from a height to raise a foam.' },
];
