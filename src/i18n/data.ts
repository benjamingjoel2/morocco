/** Content data in the requested language. Code identifiers (ids, slots) are shared across languages. */
import type { Lang } from '.';
import * as dEn from '../data/destinations';
import * as dFr from '../data/destinations.fr';
import * as ddEn from '../data/destinationDetails';
import * as ddFr from '../data/destinationDetails.fr';
import * as xEn from '../data/experiences';
import * as xFr from '../data/experiences.fr';
import * as rEn from '../data/routes';
import * as rFr from '../data/routes.fr';
import * as sEn from '../data/seasons';
import * as sFr from '../data/seasons.fr';

export const content = (lang: Lang) =>
  lang === 'fr'
    ? { DESTINATIONS: dFr.DESTINATIONS, DETAILS: ddFr.DETAILS, EXPERIENCES: xFr.EXPERIENCES, FESTIVALS: xFr.FESTIVALS, FOODS: xFr.FOODS, ROUTES: rFr.ROUTES, SEASONS: sFr.SEASONS }
    : { DESTINATIONS: dEn.DESTINATIONS, DETAILS: ddEn.DETAILS, EXPERIENCES: xEn.EXPERIENCES, FESTIVALS: xEn.FESTIVALS, FOODS: xEn.FOODS, ROUTES: rEn.ROUTES, SEASONS: sEn.SEASONS };
