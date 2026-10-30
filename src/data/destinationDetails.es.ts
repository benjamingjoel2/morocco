import type { DestinationDetail } from './destinationDetails';

/** Contenido adicional para la página de cada destino, por id de destino. */
export const DETAILS: Record<string, DestinationDetail> = {
  marrakech: {
    day: {
      morning: 'Llegue al Jardín Majorelle a la hora de apertura, antes de las colas, y después camine hasta el Palacio de la Bahía por las callejuelas más tranquilas de la mellah.',
      afternoon: 'Almuerzo en una azotea, una hora sin prisas en la Madrasa Ben Youssef y luego piérdase por los zocos de los tintoreros y de los babucheros.',
      evening: 'Vea desde la terraza de un café cómo Jemaa el-Fna se llena de humo y música, y baje a cenar en los puestos numerados.',
    },
    stay: [
      { area: 'En la medina', text: 'Un riad con patio y azotea: la opción clásica, cerca de todo y en calma tras su puerta.' },
      { area: 'Guéliz e Hivernage', text: 'La ciudad nueva: calles más anchas, cafés y galerías, y trayectos en taxi más fáciles.' },
      { area: 'El Palmeral y Agafay', text: 'Piscinas, jardines y espacio a las afueras, para terminar el viaje con más calma.' },
    ],
    tips: [
      'Los petits taxis deben usar el taxímetro; si está «roto», acuerde el precio antes de subir.',
      'A muchos riads de la medina no se llega en coche. Pida a su riad que envíe a alguien a buscarle.',
      'Los viernes por la tarde los zocos están más tranquilos, porque muchas tiendas cierran para la oración.',
    ],
    nearby: ['atlas', 'essaouira', 'aitbenhaddou'],
  },
  fes: {
    day: {
      morning: 'Entre por Bab Bou Jeloud con un guía oficial y diríjase a las terrazas de la curtiduría Chouara mientras la luz es suave.',
      afternoon: 'Visite las madrasas Bou Inania y Al-Attarine, luego los caldereros de la plaza Seffarine y el museo de la madera Nejjarine.',
      evening: 'Suba a las tumbas meriníes para ver el atardecer sobre la medina y cene en un palacio-restaurante o en su riad.',
    },
    stay: [
      { area: 'Fez el-Bali', text: 'Riads y dars restaurados en el corazón de la medina, a pie de las madrasas.' },
      { area: 'Cerca de Batha', text: 'Junto a una puerta de la medina y una parada de taxis: práctico para llegar y para excursiones.' },
      { area: 'Ville Nouvelle', text: 'Hoteles modernos y la estación de tren, a un corto trayecto en taxi de la medina.' },
    ],
    tips: [
      'Reserve un guía oficial para la primera mañana; después se orientará solo con mucha más seguridad.',
      'Acepte la ramita de menta en las curtidurías: ayuda con el olor.',
      'Muchos talleres cierran el viernes, así que planee las visitas de artesanía otros días.',
    ],
    nearby: ['chefchaouen', 'sahara', 'marrakech'],
  },
  chefchaouen: {
    day: {
      morning: 'Pasee temprano por las callejuelas azules, antes de que lleguen los excursionistas, y tome un café en la plaza Outa el-Hammam.',
      afternoon: 'Visite la alcazaba y su jardín, y curiosee mantas de lana y queso de cabra en las tiendecitas de la medina alta.',
      evening: 'Suba a la Mezquita Española para ver el atardecer sobre el pueblo y el Rif.',
    },
    stay: [
      { area: 'Medina alta', text: 'Pequeñas casas de huéspedes con azotea y vistas; cuente con escaleras.' },
      { area: 'Cerca de Outa el-Hammam', text: 'Céntrico y animado, con restaurantes a la puerta.' },
    ],
    tips: [
      'Quédese al menos una noche: el pueblo es mágico a primera hora y al anochecer.',
      'Pregunte antes de fotografiar puertas de viviendas.',
      'Lleve capas de ropa; las noches de montaña son frescas incluso en verano.',
    ],
    nearby: ['fes', 'marrakech', 'atlas'],
  },
  sahara: {
    day: {
      morning: 'Suba a una duna para ver el amanecer, desayune en el campamento y dé un paseo por la arena.',
      afternoon: 'Visite el pueblo de Khamlia para escuchar música gnawa, o el lago estacional cerca de Merzouga si ha llovido.',
      evening: 'Entre en las dunas en dromedario o a pie antes del atardecer, cene junto al fuego y luego, las estrellas.',
    },
    stay: [
      { area: 'Campamento en el desierto', text: 'De tiendas sencillas a campamentos con baño privado: el motivo por el que viene casi todo el mundo.' },
      { area: 'Hotel kasbah en Merzouga', text: 'Al borde de las dunas y con piscina: una buena segunda noche después del campamento.' },
    ],
    tips: [
      'Lleve una prenda de abrigo: las noches del desierto pueden ser frías, sobre todo de noviembre a febrero.',
      'Prepare una bolsa pequeña para el campamento y deje el resto en el vehículo.',
      'Divida el trayecto desde Marrakech en dos días; la carretera es parte de la experiencia.',
    ],
    nearby: ['aitbenhaddou', 'fes', 'marrakech'],
  },
  atlas: {
    day: {
      morning: 'Camine desde Imlil entre nogales hasta el pueblo de Aroumd, con un guía de montaña local.',
      afternoon: 'Almuerzo con una familia y luego siga por un collado o baje el valle junto al río.',
      evening: 'Té a la menta en la terraza de la casa de huéspedes mientras las cumbres se tiñen de rosa.',
    },
    stay: [
      { area: 'Imlil', text: 'Casas de huéspedes familiares y lodges al pie de los senderos, de sencillos a confortables.' },
      { area: 'Valles de Ourika y Asni', text: 'Acceso más fácil desde Marrakech, jardines y paseos junto al río.' },
    ],
    tips: [
      'Contrate a un guía de montaña oficial; conoce los caminos, el tiempo y a las familias.',
      'El Toubkal en invierno exige crampones, piolet y experiencia.',
      'Las mulas pueden llevar el equipaje entre pueblos por un precio justo.',
    ],
    nearby: ['marrakech', 'aitbenhaddou', 'essaouira'],
  },
  essaouira: {
    day: {
      morning: 'Vea descargar las barcas en el puerto y recorra las murallas de la Skala du Port.',
      afternoon: 'Curiosee los talleres de madera de tuya y las galerías de la medina, y luego un largo almuerzo de pescado a la brasa.',
      evening: 'Atardecer en las murallas de la Skala de la Ville, seguido de cena y música en directo.',
    },
    stay: [
      { area: 'En la medina', text: 'Riads dentro de las murallas, a pocos minutos del puerto y de la playa.' },
      { area: 'Junto a la playa', text: 'Hoteles con vistas al mar, a un corto paseo de la medina.' },
      { area: 'Campo y Sidi Kaouki', text: 'Casas de huéspedes tranquilas cerca de playas salvajes al sur de la ciudad.' },
    ],
    tips: [
      'Lleve una prenda cortavientos: el alisio sopla casi todas las tardes.',
      'Elija su pescado en los puestos del puerto y que se lo asen allí mismo.',
      'Reserve con mucha antelación para el festival Gnaoua de junio.',
    ],
    nearby: ['marrakech', 'taghazout', 'atlas'],
  },
  aitbenhaddou: {
    day: {
      morning: 'Cruce el río y suba por el ksar hasta el granero de lo alto para disfrutar de la vista.',
      afternoon: 'Recorra la antigua ruta hasta la kasbah de Telouet, o siga hasta Uarzazat y sus estudios de cine.',
      evening: 'Vea brillar el ksar al atardecer desde la otra orilla del río.',
    },
    stay: [
      { area: 'Pueblo de Aït Ben Haddou', text: 'Pequeñas casas de huéspedes en kasbahs frente al ksar.' },
      { area: 'Uarzazat', text: 'Hoteles más grandes, buena base para la carretera del Dadès y Skoura.' },
      { area: 'Oasis de Skoura', text: 'Kasbahs restauradas entre palmerales, de una calma maravillosa.' },
    ],
    tips: [
      'Visítelo temprano o al final del día, con luz más suave y menos grupos.',
      'La carretera del Tizi n’Tichka es preciosa pero lenta; calcule tiempo de sobra.',
      'Haga aquí una pausa en el camino al desierto en lugar de hacerlo en un solo día.',
    ],
    nearby: ['marrakech', 'sahara', 'atlas'],
  },
  taghazout: {
    day: {
      morning: 'Clase de surf o una sesión en una rompiente para principiantes mientras el viento es suave.',
      afternoon: 'Almuerzo en el pueblo y luego las pozas naturales de Paradise Valley, en las colinas.',
      evening: 'Yoga al atardecer en una azotea y pescado fresco para cenar.',
    },
    stay: [
      { area: 'Pueblo de Taghazout', text: 'Casas de surf y pequeños hoteles junto a las olas.' },
      { area: 'Tamraght', text: 'Un pueblo vecino más tranquilo, con buenas olas para principiantes.' },
      { area: 'Imsouane', text: 'Más al norte, famoso por una de las olas de derecha más largas de Marruecos.' },
    ],
    tips: [
      'El invierno trae el mayor oleaje; el verano es ideal para principiantes.',
      'El neopreno es útil casi todo el año; el Atlántico es fresco.',
      'Combínelo con Esauira para una semana de costa.',
    ],
    nearby: ['essaouira', 'marrakech', 'atlas'],
  },
};
