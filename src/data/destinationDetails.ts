/** Extra content for each destination's own page, keyed by destination id. */
export interface DestinationDetail {
  day: { morning: string; afternoon: string; evening: string };
  stay: { area: string; text: string }[];
  tips: string[];
  nearby: string[];
}

export const DETAILS: Record<string, DestinationDetail> = {
  marrakech: {
    day: {
      morning: 'Arrive at the Jardin Majorelle when it opens, before the queues, then walk to the Bahia Palace through the quieter lanes of the mellah.',
      afternoon: 'Lunch on a rooftop, a slow hour in the Ben Youssef Madrasa, then lose yourself in the souks of the dyers and the slipper-makers.',
      evening: 'Watch Jemaa el-Fnaa fill with smoke and music from a café terrace, then go down and eat at the numbered food stalls.',
    },
    stay: [
      { area: 'In the medina', text: 'A riad with a courtyard and a roof terrace: the classic choice, close to everything and quiet behind its door.' },
      { area: 'Gueliz & Hivernage', text: 'The newer city: wider streets, cafés and galleries, and an easier taxi ride in and out.' },
      { area: 'The Palmeraie & Agafay', text: 'Pools, gardens and space just outside the city, for a calmer end to a trip.' },
    ],
    tips: [
      'Petits taxis should use the meter; agree a price before you get in if it is “broken”.',
      'Many medina riads cannot be reached by car. Ask your riad to send someone to meet you.',
      'Friday afternoons are calmer in the souks, as many shops close for prayers.',
    ],
    nearby: ['atlas', 'essaouira', 'aitbenhaddou'],
  },
  fes: {
    day: {
      morning: 'Enter through Bab Bou Jeloud with a licensed guide and head for the Chouara tannery terraces while the light is soft.',
      afternoon: 'Visit the Bou Inania and Al-Attarine madrasas, then the coppersmiths on Seffarine square and the Nejjarine woodwork museum.',
      evening: 'Climb to the Merenid tombs for sunset over the medina, then dinner in a palace restaurant or your riad.',
    },
    stay: [
      { area: 'Fes el-Bali', text: 'Restored riads and dars in the heart of the old medina, walking distance from the madrasas.' },
      { area: 'Near Batha', text: 'Close to a medina gate and a taxi rank: easy for arrivals and day trips.' },
      { area: 'Ville Nouvelle', text: 'Modern hotels and the train station, a short taxi ride from the medina.' },
    ],
    tips: [
      'Book an official guide for the first morning; you will navigate alone much more confidently afterwards.',
      'Accept a sprig of mint at the tanneries: it helps with the smell.',
      'Many workshops close on Friday, so plan craft visits for other days.',
    ],
    nearby: ['chefchaouen', 'sahara', 'marrakech'],
  },
  chefchaouen: {
    day: {
      morning: 'Wander the blue lanes early, before day-trippers arrive, and drink a coffee in Outa el-Hammam square.',
      afternoon: 'Visit the kasbah and its garden, then browse wool blankets and goat’s cheese in the small shops of the upper medina.',
      evening: 'Walk up to the Spanish Mosque for sunset over the town and the Rif.',
    },
    stay: [
      { area: 'Upper medina', text: 'Small guesthouses with roof terraces and views; expect stairs.' },
      { area: 'Near Outa el-Hammam', text: 'Central and lively, with restaurants on the doorstep.' },
    ],
    tips: [
      'Stay at least one night: the town is magical in the early morning and evening.',
      'Ask before photographing doorways that belong to homes.',
      'Bring layers; mountain evenings are cool even in summer.',
    ],
    nearby: ['fes', 'marrakech', 'atlas'],
  },
  sahara: {
    day: {
      morning: 'Climb a dune for sunrise, then breakfast in camp and a walk across the sand.',
      afternoon: 'Visit the village of Khamlia for Gnawa music, or the seasonal lake near Merzouga when there has been rain.',
      evening: 'Ride or walk into the dunes before sunset, dinner by the fire, then stars.',
    },
    stay: [
      { area: 'Desert camp', text: 'From simple tents to camps with private bathrooms: the reason most people come.' },
      { area: 'Kasbah hotel in Merzouga', text: 'At the edge of the dunes, with a pool: a good second night after the camp.' },
    ],
    tips: [
      'Bring a warm layer: desert nights can be cold, especially from November to February.',
      'Pack a small bag for the camp and leave the rest in your vehicle.',
      'Split the drive from Marrakech over two days; the road is part of the experience.',
    ],
    nearby: ['aitbenhaddou', 'fes', 'marrakech'],
  },
  atlas: {
    day: {
      morning: 'Walk from Imlil up through walnut groves to the village of Aroumd, with a local mountain guide.',
      afternoon: 'Lunch with a family, then continue over a pass or follow the river back down the valley.',
      evening: 'Mint tea on the guesthouse terrace as the peaks turn pink.',
    },
    stay: [
      { area: 'Imlil', text: 'Family guesthouses and lodges at the trailhead, from simple to comfortable.' },
      { area: 'Ourika & Asni valleys', text: 'Easier access from Marrakech, gardens and riverside walks.' },
    ],
    tips: [
      'Hire a licensed mountain guide; they know the paths, the weather and the families.',
      'Toubkal in winter needs crampons, an ice axe and experience.',
      'Mules can carry luggage between villages for a fair fee.',
    ],
    nearby: ['marrakech', 'aitbenhaddou', 'essaouira'],
  },
  essaouira: {
    day: {
      morning: 'Watch the fishing boats unload at the port, then walk the Skala du Port ramparts.',
      afternoon: 'Browse thuya-wood workshops and galleries in the medina, then a long lunch of grilled fish.',
      evening: 'Sunset on the Skala de la Ville ramparts, followed by dinner and live music.',
    },
    stay: [
      { area: 'In the medina', text: 'Riads within the ramparts, a few minutes from the port and the beach.' },
      { area: 'Along the beach', text: 'Hotels with sea views, a short walk from the medina.' },
      { area: 'Countryside & Sidi Kaouki', text: 'Quiet guesthouses near wild beaches south of town.' },
    ],
    tips: [
      'Bring a windproof layer: the trade wind blows most afternoons.',
      'Choose your fish at the port stalls and have it grilled on the spot.',
      'Book well ahead for the Gnaoua festival in June.',
    ],
    nearby: ['marrakech', 'taghazout', 'atlas'],
  },
  aitbenhaddou: {
    day: {
      morning: 'Cross the river and climb through the ksar to the granary at the top for the view.',
      afternoon: 'Drive the old route to Telouet kasbah, or continue to Ouarzazate and its film studios.',
      evening: 'Watch the ksar glow at sunset from across the river.',
    },
    stay: [
      { area: 'Aït Benhaddou village', text: 'Small kasbah guesthouses facing the ksar.' },
      { area: 'Ouarzazate', text: 'Larger hotels, a good base for the road to the Dadès and Skoura.' },
      { area: 'Skoura oasis', text: 'Restored kasbahs among palm groves, wonderfully quiet.' },
    ],
    tips: [
      'Visit early or late in the day for softer light and fewer groups.',
      'The road over the Tizi n’Tichka is beautiful but slow; allow plenty of time.',
      'Break the drive to the desert here rather than doing it in one day.',
    ],
    nearby: ['marrakech', 'sahara', 'atlas'],
  },
  taghazout: {
    day: {
      morning: 'Surf lesson or a session at a beginner break while the wind is light.',
      afternoon: 'Lunch in the village, then the swimming holes of Paradise Valley in the hills.',
      evening: 'Sunset yoga on a rooftop and fresh fish for dinner.',
    },
    stay: [
      { area: 'Taghazout village', text: 'Surf houses and small hotels, right by the breaks.' },
      { area: 'Tamraght', text: 'A quieter neighbouring village with good beginner waves.' },
      { area: 'Imsouane', text: 'Further north, famous for one of the longest right-hand waves in Morocco.' },
    ],
    tips: [
      'Winter brings the biggest swells; summer suits beginners.',
      'Wetsuits are useful most of the year; the Atlantic is cool.',
      'Combine with Essaouira for a coastal week.',
    ],
    nearby: ['essaouira', 'marrakech', 'atlas'],
  },
};
