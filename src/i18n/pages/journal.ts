const en = {
  metaTitle: 'Journal: Morocco travel guides and stories',
  metaDescription: 'In-depth Morocco travel guides from Azul Morocco: Marrakech, Sahara camps, travelling during Ramadan, what to eat and walking in the High Atlas.',
  eyebrow: 'Journal',
  title: 'Notes from<br />the road',
  intro: 'Longer reads for planning, dreaming and arriving well prepared.',
  heroLabel: 'Jemaa el-Fnaa',
  minRead: (n: number) => `${n} min read`,
  back: '← All articles',
  more: 'More from the journal',
  ctaEyebrow: 'Ready when you are',
  ctaTitle: 'Turn reading<br />into travelling',
  ctaText: 'Tell us what caught your eye and we will build it into a route.',
  planTrip: 'Plan a trip',
  breadcrumb: 'Breadcrumb',
  home: 'Home',
};

/** French; typed against English so a missing string fails the build. */
const fr: typeof en = {
  metaTitle: 'Journal : guides et récits de voyage au Maroc',
  metaDescription: 'Des guides de voyage approfondis par Azul Morocco : Marrakech, les bivouacs du Sahara, voyager pendant le ramadan, que manger et randonner dans le Haut Atlas.',
  eyebrow: 'Journal',
  title: 'Carnets<br />de route',
  intro: 'Des lectures plus longues pour préparer, rêver et arriver bien préparé.',
  heroLabel: 'Jemaa el-Fna',
  minRead: (n) => `${n} min de lecture`,
  back: '← Tous les articles',
  more: 'À lire aussi',
  ctaEyebrow: 'Quand vous voulez',
  ctaTitle: 'De la lecture<br />au voyage',
  ctaText: 'Dites-nous ce qui vous a plu, nous l’intégrerons à un itinéraire.',
  planTrip: 'Préparer un voyage',
  breadcrumb: 'Fil d’Ariane',
  home: 'Accueil',
};

export const JOURNAL = { en, fr };
