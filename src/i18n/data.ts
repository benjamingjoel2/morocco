/** Content data in the requested language. Code identifiers (ids, slots) are shared across languages. */
import type { Lang } from '.';
import * as dEn from '../data/destinations';
import * as dFr from '../data/destinations.fr';
import * as dDe from '../data/destinations.de';
import * as dEs from '../data/destinations.es';
import * as ddEn from '../data/destinationDetails';
import * as ddFr from '../data/destinationDetails.fr';
import * as ddDe from '../data/destinationDetails.de';
import * as ddEs from '../data/destinationDetails.es';
import * as xEn from '../data/experiences';
import * as xFr from '../data/experiences.fr';
import * as xDe from '../data/experiences.de';
import * as xEs from '../data/experiences.es';
import * as rEn from '../data/routes';
import * as rFr from '../data/routes.fr';
import * as rDe from '../data/routes.de';
import * as rEs from '../data/routes.es';
import * as sEn from '../data/seasons';
import * as sFr from '../data/seasons.fr';
import * as sDe from '../data/seasons.de';
import * as sEs from '../data/seasons.es';

const pick = (d: typeof dEn, dd: typeof ddEn, x: typeof xEn, r: typeof rEn, s: typeof sEn) => ({
  DESTINATIONS: d.DESTINATIONS,
  DETAILS: dd.DETAILS,
  EXPERIENCES: x.EXPERIENCES,
  FESTIVALS: x.FESTIVALS,
  FOODS: x.FOODS,
  ROUTES: r.ROUTES,
  SEASONS: s.SEASONS,
});

const BY_LANG = {
  en: pick(dEn, ddEn, xEn, rEn, sEn),
  fr: pick(dFr, ddFr, xFr, rFr, sFr),
  de: pick(dDe, ddDe, xDe, rDe, sDe),
  es: pick(dEs, ddEs, xEs, rEs, sEs),
};

export const content = (lang: Lang) => BY_LANG[lang];
