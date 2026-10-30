import type { DestinationDetail } from './destinationDetails';

/** Zusätzliche Inhalte für die Seite jedes Reiseziels, nach Reiseziel-ID. */
export const DETAILS: Record<string, DestinationDetail> = {
  marrakech: {
    day: {
      morning: 'Seien Sie zur Öffnung im Jardin Majorelle, vor den Warteschlangen, und spazieren Sie dann durch die ruhigeren Gassen der Mellah zum Bahia-Palast.',
      afternoon: 'Mittagessen auf einer Dachterrasse, eine gemächliche Stunde in der Medersa Ben Youssef, dann verlieren Sie sich in den Souks der Färber und Pantoffelmacher.',
      evening: 'Beobachten Sie von einer Caféterrasse, wie sich der Djemaa el-Fna mit Rauch und Musik füllt, und essen Sie dann unten an den nummerierten Garküchen.',
    },
    stay: [
      { area: 'In der Medina', text: 'Ein Riad mit Innenhof und Dachterrasse: der Klassiker, nah an allem und ruhig hinter der eigenen Tür.' },
      { area: 'Guéliz & Hivernage', text: 'Die Neustadt: breitere Straßen, Cafés und Galerien und kürzere Taxifahrten.' },
      { area: 'Palmeraie & Agafay', text: 'Pools, Gärten und viel Raum knapp außerhalb der Stadt, für einen ruhigeren Reiseausklang.' },
    ],
    tips: [
      'Petits Taxis sollten das Taxameter benutzen; ist es „kaputt“, vereinbaren Sie den Preis vor der Fahrt.',
      'Viele Riads in der Medina sind nicht mit dem Auto erreichbar. Bitten Sie Ihr Riad, Sie abholen zu lassen.',
      'Freitagnachmittags ist es in den Souks ruhiger, da viele Läden zum Gebet schließen.',
    ],
    nearby: ['atlas', 'essaouira', 'aitbenhaddou'],
  },
  fes: {
    day: {
      morning: 'Betreten Sie die Medina mit einem lizenzierten Guide durch das Bab Bou Jeloud und gehen Sie zu den Terrassen der Gerberei Chouara, solange das Licht weich ist.',
      afternoon: 'Besuchen Sie die Medresen Bou Inania und Al-Attarine, dann die Kupferschmiede am Seffarine-Platz und das Holzhandwerksmuseum Nejjarine.',
      evening: 'Steigen Sie zum Sonnenuntergang zu den Meriniden-Gräbern über der Medina hinauf, danach Abendessen in einem Palastrestaurant oder in Ihrem Riad.',
    },
    stay: [
      { area: 'Fès el-Bali', text: 'Restaurierte Riads und Dars mitten in der Altstadt, zu Fuß zu den Medresen.' },
      { area: 'Nahe Batha', text: 'Nah an einem Medina-Tor und einem Taxistand: praktisch für Anreise und Tagesausflüge.' },
      { area: 'Ville Nouvelle', text: 'Moderne Hotels und der Bahnhof, eine kurze Taxifahrt von der Medina.' },
    ],
    tips: [
      'Buchen Sie für den ersten Vormittag einen offiziellen Guide; danach finden Sie sich allein viel sicherer zurecht.',
      'Nehmen Sie in den Gerbereien den angebotenen Minzzweig an: Er hilft gegen den Geruch.',
      'Viele Werkstätten schließen freitags, planen Sie Handwerksbesuche also für andere Tage.',
    ],
    nearby: ['chefchaouen', 'sahara', 'marrakech'],
  },
  chefchaouen: {
    day: {
      morning: 'Streifen Sie früh durch die blauen Gassen, bevor die Tagesbesucher kommen, und trinken Sie einen Kaffee am Platz Outa el-Hammam.',
      afternoon: 'Besuchen Sie die Kasbah und ihren Garten und stöbern Sie dann in den kleinen Läden der oberen Medina nach Wolldecken und Ziegenkäse.',
      evening: 'Wandern Sie zum Sonnenuntergang über Stadt und Rif hinauf zur Spanischen Moschee.',
    },
    stay: [
      { area: 'Obere Medina', text: 'Kleine Gästehäuser mit Dachterrasse und Aussicht; rechnen Sie mit Treppen.' },
      { area: 'Nahe Outa el-Hammam', text: 'Zentral und lebendig, mit Restaurants direkt vor der Tür.' },
    ],
    tips: [
      'Bleiben Sie mindestens eine Nacht: Früh am Morgen und abends ist die Stadt zauberhaft.',
      'Fragen Sie, bevor Sie Haustüren fotografieren, hinter denen Menschen wohnen.',
      'Nehmen Sie warme Schichten mit; Bergabende sind selbst im Sommer kühl.',
    ],
    nearby: ['fes', 'marrakech', 'atlas'],
  },
  sahara: {
    day: {
      morning: 'Steigen Sie zum Sonnenaufgang auf eine Düne, dann Frühstück im Camp und ein Spaziergang über den Sand.',
      afternoon: 'Besuchen Sie für Gnawa-Musik das Dorf Khamlia oder nach Regenfällen den saisonalen See bei Merzouga.',
      evening: 'Vor Sonnenuntergang zu Kamel oder zu Fuß in die Dünen, Abendessen am Feuer, dann die Sterne.',
    },
    stay: [
      { area: 'Wüstencamp', text: 'Von einfachen Zelten bis zu Camps mit eigenem Bad: der Grund, warum die meisten herkommen.' },
      { area: 'Kasbah-Hotel in Merzouga', text: 'Am Rand der Dünen, mit Pool: eine gute zweite Nacht nach dem Camp.' },
    ],
    tips: [
      'Packen Sie eine warme Schicht ein: Wüstennächte können kalt sein, besonders von November bis Februar.',
      'Nehmen Sie eine kleine Tasche mit ins Camp und lassen Sie den Rest im Fahrzeug.',
      'Teilen Sie die Fahrt von Marrakesch auf zwei Tage auf; die Strecke gehört zum Erlebnis.',
    ],
    nearby: ['aitbenhaddou', 'fes', 'marrakech'],
  },
  atlas: {
    day: {
      morning: 'Wandern Sie mit einem einheimischen Bergführer von Imlil durch Walnusshaine hinauf ins Dorf Aroumd.',
      afternoon: 'Mittagessen bei einer Familie, dann weiter über einen Pass oder am Fluss entlang zurück ins Tal.',
      evening: 'Minztee auf der Terrasse des Gästehauses, während sich die Gipfel rosa färben.',
    },
    stay: [
      { area: 'Imlil', text: 'Familiengästehäuser und Lodges am Ausgangspunkt der Wege, von einfach bis komfortabel.' },
      { area: 'Ourika- & Asni-Tal', text: 'Leichter von Marrakesch erreichbar, mit Gärten und Wegen am Fluss.' },
    ],
    tips: [
      'Engagieren Sie einen lizenzierten Bergführer; er kennt die Wege, das Wetter und die Familien.',
      'Der Toubkal erfordert im Winter Steigeisen, Eispickel und Erfahrung.',
      'Maultiere tragen das Gepäck gegen eine faire Gebühr von Dorf zu Dorf.',
    ],
    nearby: ['marrakech', 'aitbenhaddou', 'essaouira'],
  },
  essaouira: {
    day: {
      morning: 'Sehen Sie zu, wie die Fischerboote im Hafen entladen werden, und laufen Sie dann über die Wälle der Skala du Port.',
      afternoon: 'Stöbern Sie in den Thuja-Werkstätten und Galerien der Medina, dann ein langes Mittagessen mit gegrilltem Fisch.',
      evening: 'Sonnenuntergang auf den Wällen der Skala de la Ville, danach Abendessen und Livemusik.',
    },
    stay: [
      { area: 'In der Medina', text: 'Riads innerhalb der Stadtmauern, wenige Minuten von Hafen und Strand.' },
      { area: 'Am Strand', text: 'Hotels mit Meerblick, ein kurzer Spaziergang zur Medina.' },
      { area: 'Hinterland & Sidi Kaouki', text: 'Ruhige Gästehäuser nahe wilder Strände südlich der Stadt.' },
    ],
    tips: [
      'Nehmen Sie eine winddichte Jacke mit: Der Passat weht an den meisten Nachmittagen.',
      'Suchen Sie sich Ihren Fisch an den Hafenständen aus und lassen Sie ihn vor Ort grillen.',
      'Buchen Sie für das Gnaoua-Festival im Juni frühzeitig.',
    ],
    nearby: ['marrakech', 'taghazout', 'atlas'],
  },
  aitbenhaddou: {
    day: {
      morning: 'Überqueren Sie den Fluss und steigen Sie durch den Ksar zum Speicher auf der Spitze hinauf, wegen der Aussicht.',
      afternoon: 'Fahren Sie die alte Route zur Kasbah von Telouet oder weiter nach Ouarzazate mit seinen Filmstudios.',
      evening: 'Sehen Sie vom anderen Flussufer aus zu, wie der Ksar im Sonnenuntergang glüht.',
    },
    stay: [
      { area: 'Dorf Aït-Ben-Haddou', text: 'Kleine Kasbah-Gästehäuser mit Blick auf den Ksar.' },
      { area: 'Ouarzazate', text: 'Größere Hotels, eine gute Basis für die Straße ins Dadès-Tal und nach Skoura.' },
      { area: 'Oase Skoura', text: 'Restaurierte Kasbahs in Palmenhainen, herrlich ruhig.' },
    ],
    tips: [
      'Kommen Sie früh oder spät am Tag, für weicheres Licht und weniger Gruppen.',
      'Die Straße über den Tizi n’Tichka ist schön, aber langsam; planen Sie reichlich Zeit ein.',
      'Unterbrechen Sie hier die Fahrt in die Wüste, statt sie an einem Tag zu machen.',
    ],
    nearby: ['marrakech', 'sahara', 'atlas'],
  },
  taghazout: {
    day: {
      morning: 'Surfstunde oder eine Session an einem Anfängerspot, solange der Wind schwach ist.',
      afternoon: 'Mittagessen im Dorf, dann zu den Badegumpen im Paradise Valley in den Hügeln.',
      evening: 'Yoga bei Sonnenuntergang auf einer Dachterrasse und frischer Fisch zum Abendessen.',
    },
    stay: [
      { area: 'Dorf Taghazout', text: 'Surfhäuser und kleine Hotels direkt an den Wellen.' },
      { area: 'Tamraght', text: 'Ein ruhigeres Nachbardorf mit guten Anfängerwellen.' },
      { area: 'Imsouane', text: 'Weiter nördlich, berühmt für eine der längsten rechten Wellen Marokkos.' },
    ],
    tips: [
      'Im Winter kommt der größte Swell; der Sommer eignet sich für Anfänger.',
      'Ein Neoprenanzug ist fast das ganze Jahr nützlich; der Atlantik ist kühl.',
      'Kombinieren Sie den Aufenthalt mit Essaouira für eine Woche an der Küste.',
    ],
    nearby: ['essaouira', 'marrakech', 'atlas'],
  },
};
