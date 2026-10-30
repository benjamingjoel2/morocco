/** Brand contact details, used by the footer, the legal pages and the JSON-LD. */
export const SITE = {
  name: 'Azul Morocco',
  /** One address per brand, in the owner's format {brandname}@tourground.com. */
  email: 'azulmorocco@tourground.com',
  /**
   * Business address: Syllabus Coworking, Maârif, Casablanca (owner-approved coworking arrangement).
   * Source: OpenStreetMap ("Syllabus Coworking", 16 Rue des Asphodèles). Confirm before launch.
   */
  address: {
    name: 'Syllabus Coworking',
    streetAddress: '16 Rue des Asphodèles, Maârif',
    addressLocality: 'Casablanca',
    addressCountry: 'MA',
    country: { en: 'Morocco', fr: 'Maroc', de: 'Marokko', es: 'Marruecos' },
  },
};

export const addressLine = (lang: 'en' | 'fr' | 'de' | 'es') =>
  `${SITE.address.name}, ${SITE.address.streetAddress}, ${SITE.address.addressLocality}, ${SITE.address.country[lang]}`;
