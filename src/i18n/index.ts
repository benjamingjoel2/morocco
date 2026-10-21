/** Languages, URL helpers and the shared UI dictionary. English lives at /, French at /fr/. */
export type Lang = 'en' | 'fr';
export const LANGS: Lang[] = ['en', 'fr'];

export const langFromUrl = (url: URL): Lang => (/^\/fr(\/|$)/.test(url.pathname) ? 'fr' : 'en');

/** "/routes/" -> "/fr/routes/" for French; unchanged for English. Keeps ?query and #hash. */
export const localize = (lang: Lang, path: string) => (lang === 'en' ? path : `/fr${path}`);

/** "/fr/routes/" -> "/routes/" */
export const unlocalize = (pathname: string) => pathname.replace(/^\/fr(?=\/|$)/, '') || '/';

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
    switchTo: 'Français',
    switchShort: 'FR',
    switchLabel: 'Lire en français',
    footerIntro: 'Slow, well-planned journeys through Morocco, from the blue lanes of the Rif to the dunes of the Erg Chebbi.',
    photosFrom: 'Photos from',
    creditedBelow: 'credited below. Entry rules and prices change; always confirm visa requirements with official sources before you travel.',
    photoCredits: 'Photo credits',
    photos: 'photos',
    by: 'by',
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
    switchTo: 'English',
    switchShort: 'EN',
    switchLabel: 'Read in English',
    footerIntro: 'Des voyages lents et bien pensés à travers le Maroc, des ruelles bleues du Rif aux dunes de l’Erg Chebbi.',
    photosFrom: 'Photos',
    creditedBelow: 'créditées ci-dessous. Les règles d’entrée et les prix évoluent : vérifiez toujours les conditions de visa auprès des sources officielles avant de partir.',
    photoCredits: 'Crédits photo',
    photos: 'photos',
    by: 'par',
    rights: 'Tous droits réservés',
    ogAlt: 'Azul Morocco : voyager lentement au Maroc',
    orgDescription: 'Guide de voyage indépendant et voyages sur mesure au Maroc.',
    discover: 'En savoir plus',
    readMore: 'Lire la suite',
};

export const UI: Record<Lang, typeof en> = { en, fr };
export type UIStrings = typeof en;
