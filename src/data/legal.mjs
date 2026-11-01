/** @typedef {{ title: string, intro: string, sections: { h: string, html: string }[] }} LegalDoc */

/**
 * Legal page copy: Privacy Policy, Booking Terms and Cookie Policy, written in full in
 * English, French, German and Spanish (src/data/legal.json, with the brand name, email,
 * Casablanca address and language-prefixed links in place). Each document is split into
 * { h, html } sections for src/views/Legal.astro.
 */
import DATA from './legal.json';

const split = (html) =>
  [...html.matchAll(/<section><h2>([\s\S]*?)<\/h2>\n([\s\S]*?)\n<\/section>/g)].map((m) => ({ h: m[1], html: m[2] }));

/** @param {'en'|'fr'|'de'|'es'} lang @returns {{ privacy: LegalDoc, terms: LegalDoc, cookies: LegalDoc }} */
export const legalFor = (lang) => {
  const d = DATA[lang];
  const doc = (k) => ({ title: d[k].title, intro: `${d[k].updated}.`, sections: split(d[k].html) });
  return { privacy: doc('privacy'), terms: doc('terms'), cookies: doc('cookies') };
};
