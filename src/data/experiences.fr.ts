import type { Experience, Festival } from './experiences';

export const EXPERIENCES: Experience[] = [
  {
    slot: 'desertCamp',
    tag: 'Désert',
    title: 'Une nuit dans les dunes',
    where: 'Merzouga ou M’hamid',
    text: 'Gagnez à pied ou à dos de dromadaire l’Erg Chebbi, ou l’Erg Chigaga plus sauvage, au coucher du soleil, dînez d’un tajine autour du feu au son des tambours, et dormez loin de toute pollution lumineuse.',
  },
  {
    slot: 'atlasValley',
    tag: 'Montagne',
    title: 'De village en village dans le Haut Atlas',
    where: 'Imlil et la vallée des Aït Mizane',
    text: 'Suivez les sentiers muletiers entre les terrasses de noyers avec un guide de montagne local, et faites halte pour du pain et du miel chez des familles amazighes.',
  },
  {
    slot: 'tagine',
    tag: 'Cuisine',
    title: 'Cuisiner un tajine, en commençant par le souk',
    where: 'Marrakech ou Fès',
    text: 'Faites provision de citrons confits, d’olives et de ras el hanout, puis initiez-vous à l’art lent et patient du plat en terre, avant de conclure par un thé versé dans les règles.',
  },
  {
    slot: 'riad',
    tag: 'Bien-être',
    title: 'Hammam et gommage',
    where: 'Partout',
    text: 'Vapeur, savon noir à l’olive et gommage énergique au gant kessa. Essayez un hammam de quartier avec quelqu’un du coin, ou le spa plus paisible d’un riad.',
  },
  {
    slot: 'taghazout',
    tag: 'Océan',
    title: 'Surfer les pointes de l’Atlantique',
    where: 'Taghazout et Imsouane',
    text: 'Des vagues douces pour débuter en été, de longues droites en hiver, et des surf camps où l’on se sent chez soi au bout d’une semaine.',
  },
  {
    slot: 'tannery',
    tag: 'Artisanat',
    title: 'À la rencontre des artisans de Fès',
    where: 'Fès el-Bali',
    text: 'Visitez la tannerie Chouara, les dinandiers de la place Seffarine et les tailleurs de zellige qui façonnent encore chaque carreau à la main.',
  },
  {
    slot: 'dades',
    tag: 'Road trip',
    title: 'La route des Mille Kasbahs',
    where: 'De Ouarzazate aux gorges du Todra',
    text: 'Palmeraies, vallées des roses et lacets : la route entre l’Atlas et le Sahara est un voyage à elle seule.',
  },
  {
    slot: 'majorelle',
    tag: 'Jardins',
    title: 'Jardins et coins tranquilles de Marrakech',
    where: 'Marrakech',
    text: 'Le bleu électrique du jardin Majorelle, le Jardin secret dans la médina et les oliveraies de la Ménara : des pauses vertes dans la ville rouge.',
  },
];

export const FESTIVALS: Festival[] = [
  {
    name: 'Festival de Fès des musiques sacrées du monde',
    where: 'Fès',
    when: 'Fin mai ou juin',
    text: 'Chants soufis, gospel et musique arabo-andalouse dans les cours de Bab al-Makina et du musée Batha.',
  },
  {
    name: 'Festival des roses',
    where: 'Kelaat M’Gouna, vallée du Dadès',
    when: 'Mai, après la récolte',
    text: 'La vallée fête la cueillette de la rose de Damas avec musique, danses et pluie de pétales.',
  },
  {
    name: 'Festival Gnaoua et musiques du monde',
    where: 'Essaouira',
    when: 'Juin',
    text: 'Les maîtres gnaoua (maâlems) improvisent avec des musiciens de jazz, de blues et du monde entier sur des scènes au bord de la mer.',
  },
  {
    name: 'Festival des fiançailles d’Imilchil',
    where: 'Imilchil, Haut Atlas',
    when: 'Fin de l’été (généralement en septembre)',
    text: 'Un grand moussem amazigh et un marché en pleine montagne, liés à la légende de deux amants maudits et de leurs lacs.',
  },
  {
    name: 'Ramadan et Aïd',
    where: 'Dans tout le pays',
    when: 'Dates fixées par le calendrier lunaire',
    text: 'Journées calmes, soirées festives. Après le coucher du soleil, les rues se remplissent pour le ftour et la harira. On voyage sans souci, simplement à un rythme plus doux.',
  },
];

export const FOODS = [
  { name: 'Tajine', text: 'Le plat en terre et le mijoté qu’il abrite : agneau aux pruneaux et aux amandes, poulet au citron confit et aux olives.' },
  { name: 'Couscous', text: 'Traditionnellement le déjeuner du vendredi, cuit trois fois à la vapeur et couronné de sept légumes.' },
  { name: 'Pastilla', text: 'Feuilles de warqa croustillantes garnies de pigeon ou de poulet, d’amandes et de cannelle. Sucrée et salée à la fois.' },
  { name: 'Harira', text: 'Soupe de tomates, lentilles et pois chiches, le plat qui rompt le jeûne pendant le ramadan.' },
  { name: 'Msemen et amlou', text: 'Crêpes feuilletées carrées au petit-déjeuner, avec de l’amlou : huile d’argan, amandes et miel.' },
  { name: 'Tanjia', text: 'Le plat des célibataires de Marrakech, mijoté des heures durant dans les cendres du foyer d’un hammam.' },
  { name: 'Sardines grillées', text: 'Tout droit sorties des bateaux à Essaouira et à Safi, avec du pain, du cumin et du sel.' },
  { name: 'Atay', text: 'Thé vert, menthe fraîche et beaucoup de sucre, versé de haut pour faire mousser.' },
];
