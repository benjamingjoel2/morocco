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

/** German. */
const de: typeof en = {
  metaTitle: 'Journal: Marokko-Reiseführer und Geschichten',
  metaDescription: 'Ausführliche Marokko-Reiseführer von Azul Morocco: Marrakesch, Wüstencamps in der Sahara, Reisen im Ramadan, was man essen sollte und Wandern im Hohen Atlas.',
  eyebrow: 'Journal',
  title: 'Notizen<br />von unterwegs',
  intro: 'Längere Texte zum Planen, Träumen und gut vorbereiteten Ankommen.',
  heroLabel: 'Djemaa el-Fna',
  minRead: (n) => `${n} Min. Lesezeit`,
  back: '← Alle Artikel',
  more: 'Mehr aus dem Journal',
  ctaEyebrow: 'Wann immer Sie bereit sind',
  ctaTitle: 'Vom Lesen<br />zum Reisen',
  ctaText: 'Erzählen Sie uns, was Ihnen gefallen hat, und wir bauen es in eine Route ein.',
  planTrip: 'Reise planen',
  breadcrumb: 'Brotkrumennavigation',
  home: 'Start',
};

/** Spanish. */
const es: typeof en = {
  metaTitle: 'Diario: guías y relatos de viaje por Marruecos',
  metaDescription: 'Guías de viaje en profundidad de Azul Morocco: Marrakech, campamentos en el Sáhara, viajar durante el Ramadán, qué comer y caminar por el Alto Atlas.',
  eyebrow: 'Diario',
  title: 'Notas<br />del camino',
  intro: 'Lecturas más largas para planear, soñar y llegar bien preparado.',
  heroLabel: 'Jemaa el-Fna',
  minRead: (n) => `${n} min de lectura`,
  back: '← Todos los artículos',
  more: 'Más del diario',
  ctaEyebrow: 'Cuando usted quiera',
  ctaTitle: 'De la lectura<br />al viaje',
  ctaText: 'Cuéntenos qué le ha llamado la atención y lo convertiremos en una ruta.',
  planTrip: 'Planear un viaje',
  breadcrumb: 'Ruta de navegación',
  home: 'Inicio',
};

export const JOURNAL = { en, fr, de, es };
