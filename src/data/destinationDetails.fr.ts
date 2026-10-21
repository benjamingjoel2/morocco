import type { DestinationDetail } from './destinationDetails';

/** Contenu complémentaire pour la page de chaque destination, indexé par id de destination. */
export const DETAILS: Record<string, DestinationDetail> = {
  marrakech: {
    day: {
      morning: 'Arrivez au jardin Majorelle dès l’ouverture, avant les files d’attente, puis rejoignez le palais de la Bahia par les ruelles plus calmes du mellah.',
      afternoon: 'Déjeuner sur un toit-terrasse, une heure tranquille à la médersa Ben Youssef, puis perdez-vous dans les souks des teinturiers et des babouchiers.',
      evening: 'Regardez Jemaa el-Fna se remplir de fumée et de musique depuis une terrasse de café, puis descendez dîner aux stands numérotés.',
    },
    stay: [
      { area: 'Dans la médina', text: 'Un riad avec patio et toit-terrasse : le choix classique, proche de tout et paisible derrière sa porte.' },
      { area: 'Guéliz et Hivernage', text: 'La ville moderne : des rues plus larges, des cafés et des galeries, et des trajets en taxi plus simples.' },
      { area: 'La Palmeraie et l’Agafay', text: 'Piscines, jardins et grands espaces juste à la sortie de la ville, pour finir le voyage en douceur.' },
    ],
    tips: [
      'Les petits taxis doivent mettre le compteur ; s’il est « en panne », mettez-vous d’accord sur le prix avant de monter.',
      'Beaucoup de riads de la médina ne sont pas accessibles en voiture. Demandez à votre riad d’envoyer quelqu’un vous chercher.',
      'Le vendredi après-midi, les souks sont plus calmes, car de nombreuses boutiques ferment pour la prière.',
    ],
    nearby: ['atlas', 'essaouira', 'aitbenhaddou'],
  },
  fes: {
    day: {
      morning: 'Entrez par Bab Bou Jeloud avec un guide agréé et filez vers les terrasses de la tannerie Chouara tant que la lumière est douce.',
      afternoon: 'Visitez les médersas Bou Inania et Al-Attarine, puis les dinandiers de la place Seffarine et le musée Nejjarine des arts du bois.',
      evening: 'Montez aux tombeaux mérinides pour le coucher du soleil sur la médina, puis dînez dans un restaurant-palais ou dans votre riad.',
    },
    stay: [
      { area: 'Fès el-Bali', text: 'Des riads et des dars restaurés au cœur de l’ancienne médina, à quelques pas des médersas.' },
      { area: 'Près de Batha', text: 'Proche d’une porte de la médina et d’une station de taxis : pratique pour arriver et pour les excursions.' },
      { area: 'Ville nouvelle', text: 'Hôtels modernes et gare ferroviaire, à une courte course de taxi de la médina.' },
    ],
    tips: [
      'Réservez un guide officiel pour la première matinée ; ensuite, vous vous orienterez seul avec bien plus d’assurance.',
      'Acceptez le brin de menthe qu’on vous tend aux tanneries : il aide à supporter l’odeur.',
      'Beaucoup d’ateliers ferment le vendredi : prévoyez les visites d’artisans un autre jour.',
    ],
    nearby: ['chefchaouen', 'sahara', 'marrakech'],
  },
  chefchaouen: {
    day: {
      morning: 'Flânez tôt dans les ruelles bleues, avant l’arrivée des excursionnistes, et prenez un café sur la place Outa el-Hammam.',
      afternoon: 'Visitez la kasbah et son jardin, puis chinez couvertures en laine et fromage de chèvre dans les petites boutiques du haut de la médina.',
      evening: 'Montez à la mosquée espagnole pour voir le soleil se coucher sur la ville et le Rif.',
    },
    stay: [
      { area: 'Haut de la médina', text: 'De petites maisons d’hôtes avec toit-terrasse et vue ; attendez-vous à des escaliers.' },
      { area: 'Près d’Outa el-Hammam', text: 'Central et animé, avec les restaurants à deux pas.' },
    ],
    tips: [
      'Restez au moins une nuit : la ville est magique tôt le matin et le soir.',
      'Demandez avant de photographier les portes des maisons habitées.',
      'Prévoyez plusieurs couches : les soirées en montagne sont fraîches, même en été.',
    ],
    nearby: ['fes', 'marrakech', 'atlas'],
  },
  sahara: {
    day: {
      morning: 'Grimpez sur une dune pour le lever du soleil, puis petit-déjeuner au camp et balade dans le sable.',
      afternoon: 'Rendez-vous au village de Khamlia pour la musique gnaoua, ou au lac saisonnier près de Merzouga s’il a plu.',
      evening: 'Partez dans les dunes à dos de dromadaire ou à pied avant le coucher du soleil, dînez au coin du feu, puis place aux étoiles.',
    },
    stay: [
      { area: 'Camp dans le désert', text: 'De la tente toute simple au camp avec salle de bains privée : la raison pour laquelle la plupart des gens viennent.' },
      { area: 'Hôtel-kasbah à Merzouga', text: 'En lisière des dunes, avec piscine : une bonne deuxième nuit après le camp.' },
    ],
    tips: [
      'Emportez une couche chaude : les nuits dans le désert peuvent être froides, surtout de novembre à février.',
      'Préparez un petit sac pour le camp et laissez le reste dans votre véhicule.',
      'Faites la route depuis Marrakech en deux jours ; le trajet fait partie du voyage.',
    ],
    nearby: ['aitbenhaddou', 'fes', 'marrakech'],
  },
  atlas: {
    day: {
      morning: 'Montez à pied d’Imlil jusqu’au village d’Aroumd à travers les noyeraies, avec un guide de montagne local.',
      afternoon: 'Déjeuner chez l’habitant, puis franchissez un col ou redescendez la vallée en suivant la rivière.',
      evening: 'Un thé à la menthe sur la terrasse du gîte, pendant que les sommets virent au rose.',
    },
    stay: [
      { area: 'Imlil', text: 'Gîtes familiaux et lodges au départ des sentiers, du plus simple au plus confortable.' },
      { area: 'Vallées de l’Ourika et d’Asni', text: 'Plus faciles d’accès depuis Marrakech, avec des jardins et des balades au bord de l’eau.' },
    ],
    tips: [
      'Engagez un guide de montagne agréé ; il connaît les sentiers, la météo et les familles.',
      'En hiver, le Toubkal exige crampons, piolet et expérience.',
      'Des mules peuvent porter vos bagages d’un village à l’autre pour un prix honnête.',
    ],
    nearby: ['marrakech', 'aitbenhaddou', 'essaouira'],
  },
  essaouira: {
    day: {
      morning: 'Regardez les bateaux de pêche décharger au port, puis longez les remparts de la Skala du Port.',
      afternoon: 'Flânez dans les ateliers de bois de thuya et les galeries de la médina, puis offrez-vous un long déjeuner de poisson grillé.',
      evening: 'Coucher de soleil sur les remparts de la Skala de la Ville, suivi d’un dîner en musique.',
    },
    stay: [
      { area: 'Dans la médina', text: 'Des riads à l’intérieur des remparts, à quelques minutes du port et de la plage.' },
      { area: 'Le long de la plage', text: 'Des hôtels avec vue sur la mer, à quelques pas de la médina.' },
      { area: 'Arrière-pays et Sidi Kaouki', text: 'Des maisons d’hôtes paisibles près de plages sauvages, au sud de la ville.' },
    ],
    tips: [
      'Prévoyez un coupe-vent : l’alizé souffle presque tous les après-midi.',
      'Choisissez votre poisson aux étals du port et faites-le griller sur place.',
      'Réservez longtemps à l’avance pour le festival Gnaoua, en juin.',
    ],
    nearby: ['marrakech', 'taghazout', 'atlas'],
  },
  aitbenhaddou: {
    day: {
      morning: 'Traversez la rivière et grimpez à travers le ksar jusqu’au grenier, au sommet, pour la vue.',
      afternoon: 'Prenez l’ancienne route jusqu’à la kasbah de Telouet, ou poursuivez vers Ouarzazate et ses studios de cinéma.',
      evening: 'Regardez le ksar s’embraser au coucher du soleil depuis l’autre rive.',
    },
    stay: [
      { area: 'Village d’Aït Benhaddou', text: 'De petites maisons d’hôtes en kasbah, face au ksar.' },
      { area: 'Ouarzazate', text: 'Des hôtels plus grands, une bonne base pour la route du Dadès et de Skoura.' },
      { area: 'Oasis de Skoura', text: 'Des kasbahs restaurées au milieu des palmeraies, merveilleusement calmes.' },
    ],
    tips: [
      'Venez tôt le matin ou en fin de journée pour une lumière plus douce et moins de groupes.',
      'La route du Tizi n’Tichka est superbe mais lente ; prévoyez largement le temps.',
      'Faites étape ici sur la route du désert plutôt que de tout enchaîner en une journée.',
    ],
    nearby: ['marrakech', 'sahara', 'atlas'],
  },
  taghazout: {
    day: {
      morning: 'Cours de surf ou session sur un spot pour débutants tant que le vent est faible.',
      afternoon: 'Déjeuner au village, puis direction les vasques de Paradise Valley, dans les collines.',
      evening: 'Yoga au coucher du soleil sur un toit-terrasse et poisson frais au dîner.',
    },
    stay: [
      { area: 'Village de Taghazout', text: 'Des surf houses et de petits hôtels, juste à côté des spots.' },
      { area: 'Tamraght', text: 'Un village voisin plus tranquille, avec de bonnes vagues pour débutants.' },
      { area: 'Imsouane', text: 'Plus au nord, réputé pour l’une des plus longues droites du Maroc.' },
    ],
    tips: [
      'L’hiver apporte les plus grosses houles ; l’été convient aux débutants.',
      'Une combinaison est utile presque toute l’année : l’Atlantique est frais.',
      'Associez-le à Essaouira pour une semaine sur la côte.',
    ],
    nearby: ['essaouira', 'marrakech', 'atlas'],
  },
};
