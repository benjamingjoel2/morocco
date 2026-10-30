import type { Experience, Festival } from './experiences';

export const EXPERIENCES: Experience[] = [
  {
    slot: 'desertCamp',
    tag: 'Desierto',
    title: 'Una noche en las dunas',
    where: 'Merzouga o M’hamid',
    text: 'Entre a pie o en dromedario en el Erg Chebbi o en el más salvaje Erg Chigaga al atardecer, cene tajín junto al fuego al son de los tambores y duerma lejos de cualquier contaminación lumínica.',
  },
  {
    slot: 'atlasValley',
    tag: 'Montaña',
    title: 'De aldea en aldea por el Alto Atlas',
    where: 'Imlil y el valle de Aït Mizane',
    text: 'Siga caminos de mulas entre terrazas de nogales con un guía de montaña local, parando a tomar pan y miel en casas amazigh.',
  },
  {
    slot: 'tagine',
    tag: 'Gastronomía',
    title: 'Cocinar un tajín, empezando por el zoco',
    where: 'Marrakech o Fez',
    text: 'Compre limones confitados, aceitunas y ras el hanout, aprenda el arte lento de la olla de barro y termine con un té servido a la perfección.',
  },
  {
    slot: 'riad',
    tag: 'Bienestar',
    title: 'Hammam y gommage',
    where: 'En todas partes',
    text: 'Vapor, jabón negro de aceituna y una exfoliación enérgica con el guante kessa. Pruebe un hammam de barrio con alguien del lugar o un spa más tranquilo en un riad.',
  },
  {
    slot: 'taghazout',
    tag: 'Océano',
    title: 'Surfear las rompientes del Atlántico',
    where: 'Taghazout e Imsouane',
    text: 'Olas suaves para principiantes en verano, largas derechas en invierno y campamentos de surf que a la semana parecen su casa.',
  },
  {
    slot: 'tannery',
    tag: 'Artesanía',
    title: 'Conocer a los artesanos de Fez',
    where: 'Fez el-Bali',
    text: 'Visite la curtiduría Chouara, a los caldereros de la plaza Seffarine y a los cortadores de zellige que aún dan forma a mano a cada azulejo.',
  },
  {
    slot: 'dades',
    tag: 'Por carretera',
    title: 'La Ruta de las Mil Kasbahs',
    where: 'De Uarzazat a la garganta del Todra',
    text: 'Palmerales, valles de rosas y curvas cerradas: el trayecto entre el Atlas y el Sáhara es un destino en sí mismo.',
  },
  {
    slot: 'majorelle',
    tag: 'Jardines',
    title: 'Jardines y rincones tranquilos de Marrakech',
    where: 'Marrakech',
    text: 'El azul eléctrico del Majorelle, el Jardín Secreto de la medina y los olivares de la Menara: pausas verdes en una ciudad roja.',
  },
];

export const FESTIVALS: Festival[] = [
  {
    name: 'Festival de Músicas Sagradas del Mundo',
    where: 'Fez',
    when: 'Finales de mayo o junio',
    text: 'Cantos sufíes, góspel y música andalusí en los patios de Bab al-Makina y del museo Batha.',
  },
  {
    name: 'Fiesta de las Rosas',
    where: 'Kelaat M’Gouna, valle del Dadès',
    when: 'Mayo, después de la cosecha',
    text: 'El valle celebra la cosecha de la rosa de Damasco con música, bailes y una lluvia de pétalos.',
  },
  {
    name: 'Festival Gnaoua y Músicas del Mundo',
    where: 'Esauira',
    when: 'Junio',
    text: 'Los maestros gnawa (maâlems) improvisan con músicos de jazz, blues y del mundo en escenarios junto al mar.',
  },
  {
    name: 'Fiesta de los Novios de Imilchil',
    where: 'Imilchil, Alto Atlas',
    when: 'Finales del verano (normalmente septiembre)',
    text: 'Un gran moussem y mercado amazigh en la montaña, ligado a la leyenda de dos amantes desdichados y sus lagos.',
  },
  {
    name: 'Ramadán y Eid',
    where: 'En todo el país',
    when: 'Las fechas siguen el calendario lunar',
    text: 'Días tranquilos, noches festivas. Tras la puesta de sol, las calles se llenan para el ftour y la harira. Se puede viajar sin problema, solo que con horarios más pausados.',
  },
];

export const FOODS = [
  { name: 'Tajín', text: 'La olla de barro y el guiso: cordero con ciruelas y almendras, pollo con limón confitado y aceitunas.' },
  { name: 'Cuscús', text: 'Tradicionalmente el almuerzo del viernes, cocido al vapor tres veces y coronado con siete verduras.' },
  { name: 'Pastela', text: 'Hojaldre warqa con pichón o pollo, almendras y canela. Dulce y salada a la vez.' },
  { name: 'Harira', text: 'Sopa de tomate, lentejas y garbanzos, el plato con el que se rompe el ayuno en Ramadán.' },
  { name: 'Msemen y amlou', text: 'Crepes cuadradas de capas para el desayuno, con amlou: aceite de argán, almendras y miel.' },
  { name: 'Tanjia', text: 'El plato «de solteros» de Marrakech, cocinado durante horas en las cenizas del horno de un hammam.' },
  { name: 'Sardinas a la brasa', text: 'Recién desembarcadas en Esauira y Safi, con pan, comino y sal.' },
  { name: 'Atay', text: 'Té verde, menta fresca y mucho azúcar, servido desde lo alto para que haga espuma.' },
];
