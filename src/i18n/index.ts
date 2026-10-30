/** Languages, URL helpers and the shared UI dictionary. English lives at /, the others at /fr/, /de/, /es/. */
export type Lang = 'en' | 'fr' | 'de' | 'es';
export const LANGS: Lang[] = ['en', 'fr', 'de', 'es'];

/** Native names for the language selector. */
export const LANG_NAMES: Record<Lang, string> = { en: 'English', fr: 'Français', de: 'Deutsch', es: 'Español' };

/** BCP 47 tags for dates and numbers. */
export const DATE_LOCALES: Record<Lang, string> = { en: 'en-GB', fr: 'fr-FR', de: 'de-DE', es: 'es-ES' };

export const langFromUrl = (url: URL): Lang => {
  const m = url.pathname.match(/^\/(fr|de|es)(?=\/|$)/);
  return m ? (m[1] as Lang) : 'en';
};

/** "/routes/" -> "/fr/routes/" (or /de/, /es/); unchanged for English. Keeps ?query and #hash. */
export const localize = (lang: Lang, path: string) => (lang === 'en' ? path : `/${lang}${path}`);

/** "/fr/routes/" -> "/routes/" */
export const unlocalize = (pathname: string) => pathname.replace(/^\/(fr|de|es)(?=\/|$)/, '') || '/';

const en = {
    htmlLang: 'en',
    locale: 'en_GB',
    skip: 'Skip to content',
    menu: 'Menu',
    close: 'Close',
    planTrip: 'Plan a trip',
    journal: 'Journal',
    home: 'Home',
    nav: { destinations: 'Destinations', things: 'Things to Do', routes: 'Routes', tips: 'Travel Tips', journal: 'Journal', plan: 'Plan a Trip' },
    homeAria: 'Azul Morocco, home',
    azulMeans: 'ⴰⵣⵓⵍ · Azul means hello in Tamazight',
    menuFeature: 'Marrakech<br />to Fes',
    menuFeatureLink: 'See a first route',
    language: 'Language',
    footerIntro: 'Slow, well-planned journeys through Morocco, from the blue lanes of the Rif to the dunes of the Erg Chebbi.',
    travelNote: 'Entry rules and prices change; always confirm visa requirements with official sources before you travel.',
    legal: { privacy: 'Privacy policy', terms: 'Booking terms', cookies: 'Cookie policy' },
    rights: 'All rights reserved',
    ogAlt: 'Azul Morocco: slow journeys through Morocco',
    orgDescription: 'Independent travel guide and tailor-made trips in Morocco.',
    discover: 'Discover more',
    readMore: 'Read more',
};

/** French UI strings; typed against English so a missing key is a build error. */
const fr: typeof en = {
    htmlLang: 'fr',
    locale: 'fr_FR',
    skip: 'Aller au contenu',
    menu: 'Menu',
    close: 'Fermer',
    planTrip: 'Préparer un voyage',
    journal: 'Journal',
    home: 'Accueil',
    nav: { destinations: 'Destinations', things: 'Que faire', routes: 'Itinéraires', tips: 'Conseils pratiques', journal: 'Journal', plan: 'Préparer un voyage' },
    homeAria: 'Azul Morocco, accueil',
    azulMeans: 'ⴰⵣⵓⵍ · Azul veut dire bonjour en tamazight',
    menuFeature: 'De Marrakech<br />à Fès',
    menuFeatureLink: 'Voir un premier itinéraire',
    language: 'Langue',
    footerIntro: 'Des voyages lents et bien pensés à travers le Maroc, des ruelles bleues du Rif aux dunes de l’Erg Chebbi.',
    travelNote: 'Les règles d’entrée et les prix évoluent : vérifiez toujours les conditions de visa auprès des sources officielles avant de partir.',
    legal: { privacy: 'Politique de confidentialité', terms: 'Conditions de réservation', cookies: 'Politique cookies' },
    rights: 'Tous droits réservés',
    ogAlt: 'Azul Morocco : voyager lentement au Maroc',
    orgDescription: 'Guide de voyage indépendant et voyages sur mesure au Maroc.',
    discover: 'En savoir plus',
    readMore: 'Lire la suite',
};

/** German UI strings. */
const de: typeof en = {
    htmlLang: 'de',
    locale: 'de_DE',
    skip: 'Zum Inhalt springen',
    menu: 'Menü',
    close: 'Schließen',
    planTrip: 'Reise planen',
    journal: 'Journal',
    home: 'Start',
    nav: { destinations: 'Reiseziele', things: 'Erlebnisse', routes: 'Routen', tips: 'Reisetipps', journal: 'Journal', plan: 'Reise planen' },
    homeAria: 'Azul Morocco, Startseite',
    azulMeans: 'ⴰⵣⵓⵍ · Azul heißt „Hallo“ auf Tamazight',
    menuFeature: 'Von Marrakesch<br />nach Fès',
    menuFeatureLink: 'Eine erste Route ansehen',
    language: 'Sprache',
    footerIntro: 'Langsame, gut geplante Reisen durch Marokko, von den blauen Gassen des Rif bis zu den Dünen des Erg Chebbi.',
    travelNote: 'Einreisebestimmungen und Preise ändern sich: Prüfen Sie Visaregeln vor der Reise immer bei offiziellen Stellen.',
    legal: { privacy: 'Datenschutz', terms: 'Buchungsbedingungen', cookies: 'Cookie-Richtlinie' },
    rights: 'Alle Rechte vorbehalten',
    ogAlt: 'Azul Morocco: langsam reisen durch Marokko',
    orgDescription: 'Unabhängiger Reiseführer und maßgeschneiderte Reisen in Marokko.',
    discover: 'Mehr entdecken',
    readMore: 'Weiterlesen',
};

/** Spanish UI strings. */
const es: typeof en = {
    htmlLang: 'es',
    locale: 'es_ES',
    skip: 'Ir al contenido',
    menu: 'Menú',
    close: 'Cerrar',
    planTrip: 'Planear un viaje',
    journal: 'Diario',
    home: 'Inicio',
    nav: { destinations: 'Destinos', things: 'Qué hacer', routes: 'Rutas', tips: 'Consejos de viaje', journal: 'Diario', plan: 'Planear un viaje' },
    homeAria: 'Azul Morocco, inicio',
    azulMeans: 'ⴰⵣⵓⵍ · Azul significa hola en tamazight',
    menuFeature: 'De Marrakech<br />a Fez',
    menuFeatureLink: 'Ver una primera ruta',
    language: 'Idioma',
    footerIntro: 'Viajes pausados y bien pensados por Marruecos, de las callejuelas azules del Rif a las dunas del Erg Chebbi.',
    travelNote: 'Los requisitos de entrada y los precios cambian: confirme siempre las condiciones de visado en fuentes oficiales antes de viajar.',
    legal: { privacy: 'Política de privacidad', terms: 'Condiciones de reserva', cookies: 'Política de cookies' },
    rights: 'Todos los derechos reservados',
    ogAlt: 'Azul Morocco: viajes pausados por Marruecos',
    orgDescription: 'Guía de viaje independiente y viajes a medida por Marruecos.',
    discover: 'Descubrir más',
    readMore: 'Leer más',
};

export const UI: Record<Lang, typeof en> = { en, fr, de, es };
export type UIStrings = typeof en;
