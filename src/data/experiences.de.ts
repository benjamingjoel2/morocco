import type { Experience, Festival } from './experiences';

export const EXPERIENCES: Experience[] = [
  {
    slot: 'desertCamp',
    tag: 'Wüste',
    title: 'Eine Nacht in den Dünen',
    where: 'Merzouga oder M’hamid',
    text: 'Wandern oder reiten Sie bei Sonnenuntergang in den Erg Chebbi oder den wilderen Erg Chigaga, essen Sie Tajine am Feuer zum Klang der Trommeln und schlafen Sie fernab jeder Lichtverschmutzung.',
  },
  {
    slot: 'atlasValley',
    tag: 'Berge',
    title: 'Von Dorf zu Dorf im Hohen Atlas',
    where: 'Imlil & das Aït-Mizane-Tal',
    text: 'Folgen Sie mit einem einheimischen Bergführer den Maultierpfaden zwischen Walnussterrassen und kehren Sie für Brot und Honig in Amazigh-Häusern ein.',
  },
  {
    slot: 'tagine',
    tag: 'Kulinarik',
    title: 'Tajine kochen, beginnend im Souk',
    where: 'Marrakesch oder Fès',
    text: 'Kaufen Sie eingelegte Zitronen, Oliven und Ras el-Hanout, lernen Sie die Kunst des langsamen Schmorens im Tontopf und schließen Sie mit perfekt eingeschenktem Tee.',
  },
  {
    slot: 'riad',
    tag: 'Wohlbefinden',
    title: 'Hammam & Gommage',
    where: 'Überall',
    text: 'Dampf, schwarze Olivenseife und ein kräftiges Peeling mit dem Kessa-Handschuh. Probieren Sie mit Einheimischen ein Viertel-Hammam oder ein ruhigeres Spa in einem Riad.',
  },
  {
    slot: 'taghazout',
    tag: 'Ozean',
    title: 'Die Pointbreaks des Atlantiks surfen',
    where: 'Taghazout & Imsouane',
    text: 'Sanfte Anfängerwellen im Sommer, lange Rechtswellen im Winter und Surfcamps, die sich nach einer Woche wie Zuhause anfühlen.',
  },
  {
    slot: 'tannery',
    tag: 'Handwerk',
    title: 'Die Handwerker von Fès treffen',
    where: 'Fès el-Bali',
    text: 'Besuchen Sie die Gerberei Chouara, die Kupferschmiede am Seffarine-Platz und Zellige-Schneider, die jede Fliese noch von Hand formen.',
  },
  {
    slot: 'dades',
    tag: 'Roadtrip',
    title: 'Die Straße der Kasbahs',
    where: 'Von Ouarzazate zur Todra-Schlucht',
    text: 'Palmenhaine, Rosentäler und Serpentinen: Die Fahrt zwischen Atlas und Sahara ist ein Reiseziel für sich.',
  },
  {
    slot: 'majorelle',
    tag: 'Gärten',
    title: 'Gärten & stille Winkel von Marrakesch',
    where: 'Marrakesch',
    text: 'Das leuchtende Blau des Majorelle, der Secret Garden in der Medina und die Olivenhaine der Menara: grüne Pausen in der roten Stadt.',
  },
];

export const FESTIVALS: Festival[] = [
  {
    name: 'Festival der Sakralen Musik der Welt',
    where: 'Fès',
    when: 'Ende Mai oder Juni',
    text: 'Sufi-Gesänge, Gospel und andalusische Musik in den Höfen von Bab al-Makina und im Batha-Museum.',
  },
  {
    name: 'Rosenfest',
    where: 'Kelaat M’Gouna, Dadès-Tal',
    when: 'Mai, nach der Ernte',
    text: 'Das Tal feiert die Ernte der Damaszener Rose mit Musik, Tanz und einem Regen aus Blütenblättern.',
  },
  {
    name: 'Gnaoua and World Music Festival',
    where: 'Essaouira',
    when: 'Juni',
    text: 'Gnawa-Meister (Maâlems) jammen auf Bühnen am Meer mit Jazz-, Blues- und Weltmusikern.',
  },
  {
    name: 'Hochzeitsfest von Imilchil',
    where: 'Imilchil, Hoher Atlas',
    when: 'Spätsommer (meist September)',
    text: 'Ein großes Amazigh-Moussem mit Markt in den Bergen, verbunden mit der Legende zweier unglücklich Liebender und ihrer Seen.',
  },
  {
    name: 'Ramadan & Eid',
    where: 'Landesweit',
    when: 'Die Daten folgen dem Mondkalender',
    text: 'Ruhige Tage, festliche Nächte. Nach Sonnenuntergang füllen sich die Straßen zum Ftour mit Harira. Reisen ist problemlos möglich, nur mit gemächlicheren Zeiten.',
  },
];

export const FOODS = [
  { name: 'Tajine', text: 'Der Tontopf und das Schmorgericht: Lamm mit Backpflaumen und Mandeln, Huhn mit eingelegter Zitrone und Oliven.' },
  { name: 'Couscous', text: 'Traditionell das Freitagsmittagessen, dreimal gedämpft und mit sieben Gemüsen gekrönt.' },
  { name: 'Pastilla', text: 'Blättriger Warqa-Teig mit Taube oder Huhn, Mandeln und Zimt. Süß und herzhaft zugleich.' },
  { name: 'Harira', text: 'Suppe aus Tomaten, Linsen und Kichererbsen, mit der im Ramadan das Fasten gebrochen wird.' },
  { name: 'Msemen & Amlou', text: 'Quadratische, geschichtete Pfannkuchen zum Frühstück, mit Amlou aus Arganöl, Mandeln und Honig.' },
  { name: 'Tanjia', text: 'Das „Junggesellengericht“ von Marrakesch, stundenlang in der Asche eines Hammam-Ofens gegart.' },
  { name: 'Gegrillte Sardinen', text: 'Direkt von den Booten in Essaouira und Safi, mit Brot, Kreuzkümmel und Salz.' },
  { name: 'Atay', text: 'Grüner Tee, frische Minze und reichlich Zucker, aus der Höhe eingeschenkt, damit er schäumt.' },
];
