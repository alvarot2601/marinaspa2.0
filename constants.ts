import { PageSEO, ServiceCategory, Testimonial } from './types';

// SEO Meta Tags Configuration
// Keyword Strategy: Centro de Estética Zafra, Centro de Belleza Zafra, Indiba Zafra
export const SEO_DATA: Record<string, PageSEO> = {
  home: {
    path: '/',
    title: 'Centro de Estética en Zafra y Belleza | MARINA SPA',
    description: 'Marina Spa, tu centro de estética y belleza en Zafra (Badajoz). Expertos en tratamientos faciales, Indiba, depilación y masajes. Reserva tu cita hoy.',
  },
  about: {
    path: '/quienes-somos',
    title: 'Sobre Nosotros | El Mejor Centro de Estética en Zafra | Marina Spa',
    description: 'Conoce al equipo de Marina Spa, tu centro de belleza en Zafra. Más de 10 años de experiencia en estética avanzada, Indiba y bienestar. Visítanos.',
  },
  faciales: {
    path: '/tratamientos-faciales-zafra',
    title: 'Tratamientos Faciales en Zafra | Centro de Estética Marina Spa',
    description: 'Rejuvenece tu piel en nuestro centro de belleza en Zafra. Higiene facial, anti-aging, dermapen y tratamientos personalizados para una piel radiante.',
  },
  indiba: {
    path: '/indiba-zafra',
    title: 'Indiba Zafra | Radiofrecuencia Facial y Corporal | Marina Spa',
    description: 'Centro oficial Indiba en Zafra. Tratamientos de radiofrecuencia regenerativa para lifting facial, reducción de grasa y bienestar en Marina Spa.',
  },
  corporales: {
    path: '/tratamientos-corporales-zafra',
    title: 'Tratamientos Corporales Zafra | Remodelación y Celulitis | Marina Spa',
    description: 'Mejora tu silueta en el mejor centro de estética de Zafra. Maderoterapia, criolipólisis, presoterapia y planes de adelgazamiento personalizados.',
  },
  spa: {
    path: '/spa-relax-masajes-zafra',
    title: 'Spa y Masajes en Zafra | Bienestar y Relajación | Marina Spa',
    description: 'Desconecta en Marina Spa Zafra. Disfruta de masajes relajantes, bañeras de hidromasaje y rituales de spa únicos en la provincia de Badajoz.',
  },
  depilacion: {
    path: '/depilacion-fotodepilacion-zafra',
    title: 'Depilación en Zafra y Fotodepilación | Centro de Estética Marina Spa',
    description: 'Servicios de depilación en Zafra: Láser fotodepilación, cera y diseño de cejas con hilo. Tu centro de belleza de confianza en C. Reyes Huertas.',
  },
  estetica: {
    path: '/estetica-general-zafra',
    title: 'Manicura y Maquillaje en Zafra | Estética General | Marina Spa',
    description: 'Expertas en manicura spa, pedicura y maquillaje social en Zafra. Ven a Marina Spa para realzar tu belleza con productos de alta calidad.',
  },
};

// Content for Pages
export const FACIAL_SERVICES: ServiceCategory[] = [
  {
    title: "Higiene Facial Oxigenante",
    description: "Los rituales y programas faciales son una forma excepcional de cuidar tu piel y rejuvenecer tu rostro. Estos tratamientos están diseñados para ofrecer una atención personalizada que se adapta a las necesidades específicas de tu piel, lo que resulta en un cutis radiante y saludable",
    items: [
      {
        name: "Limpieza en Profundidad de la piel con cosmética profesional",
        price: "44€",
        description: "Este tratamiento se centra en una limpieza exhaustiva de la piel utilizando productos de alta calidad. Se eliminan impurezas, se desobstruyen los poros y se prepara la piel para recibirlos siguientes pasos del cuidado facial. Ideal para mantener la piel fresca y saludable."
      },
      {
        name: "Higiene Facial profunda con microdermoabrasión con punta de Diamante",
        price: "50€",
        description: "Un tratamiento indoloro que utiliza tecnología avanzada para exfoliar la piel suavemente. La microdermoabrasión elimina las células muertas, promoviendo la regeneración celular y dejando la piel suave y radiante. Además, ayuda a reafirmar el rostro y a disminuir la visibilidad de las líneas de expresión."
      },
      {
        name: "Hidravacuum",
        price: "55€",
        description: "Este ritual combina varias técnicas para ofrecer una experiencia completa. La tecnología Hidravacuum realiza una limpieza profunda, seguida de un proceso detox que elimina toxinas y proporciona una exfoliación efectiva. Finalmente, se nutre la piel con productos específicos que hidratan y revitalizan, dejando un aspecto saludable y luminoso."
      },
      {
        name: "Ritual de Regeneración y Luminosidad",
        price: "55€",
        description: "Un tratamiento diseñado para devolverle a tu piel su brillo natural. A través de técnicas específicas, se estimula la regeneración celular y se mejora la textura de la piel. Ideal para quienes buscan un rostro radiante y rejuvenecido."
      },
      {
        name: "Ritual Equilibrio y Purificador",
        price: "49€",
        description: "Este tratamiento está especialmente formulado para las pieles mixtas y grasas. Ayuda a restablecer el equilibrio natural de la piel, eliminando imperfecciones y reduciendo brillos no deseados. Es perfecto para quienes desean una piel más limpia, fresca y libre de impurezas."
      }
    ]
  },
  {
    title: "Faciales Anti-Aging",
    description: "Los activos más eficaces y las técnicas manuales más avanzadas se unen para lograr un resultado excepcional en los tratamientos de belleza anti-edad.",
    items: [
      {
        name: "Ritual Biocelular",
        price: "52€",
        description: "Regenera la piel, estimula la producción de colágeno y elastina, mejorando la textura y luminosidad."
      },
      {
        name: "Ritual Ácido Hialurónico",
        price: "52€",
        description: "Hidratación profunda con efecto lifting natural, suavizando líneas de expresión y mejorando el contorno facial."
      },
      {
        name: "Ritual de Perlas",
        price: "52€",
        description: "Aporta luminosidad y juventud a la piel con extractos de perlas, ofreciendo propiedades antioxidantes y una apariencia radiante."
      }
    ]
  },
  {
    title: "Tratamientos Faciales Avanzados",
    description: "Soluciones de vanguardia tecnológica para problemas específicos de la piel, garantizando resultados visibles desde la primera sesión.",
    items: [
      {
        name: "Tratamiento Facial Dermapen",
        price: "70€",
        description: "Estimula el colágeno y elastina, reduce las líneas de expresión y el tamaño del poro, disminuye la apariencia de cicatrices, mejora la firmeza de la piel."
      },
      {
        name: "Tratamiento MESOECLAT",
        price: "65€",
        description: "Es una solución avanzada para quienes buscan revitalizar su piel de manera rápida y efectiva. Este tratamiento esta diseñado para combatir los signos del envejecimiento, mejorar la textura y unificar el tono de la piel, dejando un acabado radiante y rejuvenecido."
      },
      {
        name: "Masaje ENERGILIFT",
        price: "40€",
        description: "Técnica de lifting manual que transforma la apariencia de tu rostro de manera natural. Este tratamiento exclusivo está diseñado para remodelar la estructura de la piel, reposicionar los volúmenes y redefinir el contorno facial, logrando un efecto rejuvenecedor inmediato."
      },
      {
        name: "Programa Facial Personalizado (6 sesiones)",
        price: "330€",
        description: ""
      },
      {
        name: "Mantenimiento Facial",
        price: "59€",
        description: ""
      }
    ]
  }
];

export const INDIBA_SERVICES: ServiceCategory[] = [
  {
    title: "Indiba Facial",
    description: "El tratamiento más avanzado para la regeneración y revitalización celular de la piel. Combina tecnología de radiofrecuencia con un enfoque terapéutico que mejora la apariencia y promueve la salud de la piel, sin efectos secundarios.",
    items: [
      {
        name: "Indiba Facial Exprés",
        price: "39€",
        duration: "30 min",
        description: "El Indiba Facial Express es un tratamiento innovador que utiliza la tecnología de Indiba para ofrecer resultados visibles en tan solo 30 minutos. Este procedimiento se centra exclusivamente en la aplicación de Indiba, proporcionando un efecto rejuvenecedor y revitalizante para tu piel."
      },
      {
        name: "Indiba Facial Pro",
        price: "62€",
        duration: "60 min",
        description: "Programa facial, trabajamos todos los aspectos de tu piel en una sola sesión, combinando 2 tratamientos en 1, como ácido + Indiba, Dermapen + Indiba, o Indiba Ona + Indiba. Todo complementado con nuestra mejor cosmética y personalizada según caso. Esto asegura resultados más completos y efectivos."
      },
      {
        name: "Indiba Monográfico Antienvejecimiento",
        price: "75€",
        description: "Monográfico que profundiza en los objetivos del tratamiento facial completo, aportando más luminosidad y condición general de la piel del rostro."
      },
      {
        name: "Indiba ONA",
        price: "70€",
        description: "Tratamiento facial 4 en 1 que combina la hidrodermoabrasión, electroporación, LED y electroterapia de baja frecuencia para llevar la piel a otro nivel."
      }
    ]
  },
];

export const BODY_SERVICES: ServiceCategory[] = [
  {
    title: "Silueta Corporal y Programas",
    description: "Nuestros tratamientos corporales promueven una piel más saludable, tonificada y reafirmada, abordando también problemas de salud como edemas y celulitis. Mejoran la circulación y estimulan la eliminación de toxinas, transformando la apariencia y contribuyendo al bienestar general.",
    items: [
      {
        name: "Envoltura de Algas | Cura Detox",
        price: "45€",
        description: "Sumérgete en una experiencia de bienestar profunda, donde la riqueza mineral y el alto poder de penetración de las algas ayudan a drenar y desintoxicar el organismo, eliminando desechos y favoreciendo la relajación total. El tratamiento se completa con una bañera de hidromasaje, potenciando sus beneficios revitalizantes."
      },
      {
        name: "Tratamiento Body Sculpt",
        price: "Consultar Bonos",
        description: "Favorece la pérdida de grasa, remodela y tonifica. (Bono 6 curas: 180€ | 10 curas: 350€)"
      },
      {
        name: "Maderoterapia",
        price: "52€/sesión",
        description: "Elimina la grasa acumulada en abdomen, muslos y caderas. (Bono 8 sesiones: 388€)"
      },
      {
        name: "Presoterapia",
        price: "15€/sesión",
        description: "Estimula y mejora la circulación. Esto suele conllevar otros efectos positivos, como la mejora de la oxigenación, el tono y la firmeza de la piel. (Bono 10 sesiones: 100€)"
      },
      {
        name: "Criolipólisis + Presoterapia",
        price: "52€/sesión",
        description: "Este tratamiento destruye las células adiposas de la grasa localizada. Se trata de definir la figura aplicando frío intenso."
      },
      {
        name: "Indiba Corporal",
        price: "60€/sesión",
        description: "Tecnología que actúa en profundidad, beneficiando a todas las células mediante la activación de fibroblastos, colágeno y elastina."
      },
      {
        name: "Wonder",
        price: "52€/sesión",
        description: "Tonifica tus músculos y quema grasa. (Bono 4 sesiones: 200€ | 8 sesiones: 320€)"
      },
      {
        name: "Rollation",
        price: "52€/sesión",
        description: "Tratamiento anticelulítico y remodelador que se basa en un concepto de amasamiento dérmico-muscular fisio-activo."
      },
      {
        name: "Programa Integral Personalizado",
        price: "Desde 450€",
        description: "10 sesiones de acción global sobre grasas profundas y superficiales, remodela la silueta y reduce la celulitis. 1 zona: 420€ | 2 zonas: 700€."
      },
      {
        name: "Mantenimiento Corporal",
        price: "59€/sesión",
      }
    ]
  }
];

export const SPA_SERVICES: ServiceCategory[] = [
  {
    title: "Bañeras de Hidromasaje",
    description: "Sumérgete en un mar de relax absoluto con nuestros baños terapéuticos de 20 minutos.",
    items: [
      {
        name: "Baño Sensación Océano",
        price: "19€",
        duration: "20 min",
        description: "Sumérgete en un mar de relax absoluto."
      },
      {
        name: "Baño Aromaceane",
        price: "19€",
        duration: "20 min",
        description: "Drenante, ayuda a eliminar líquidos."
      }
    ]
  },
  {
    title: "Peelings Corporales",
    description: "Renueva tu piel eliminando células muertas y nutriendo en profundidad. Duración 35 minutos.",
    items: [
      {
        name: "Peeling Vivificante",
        price: "39€",
        duration: "35 min",
        description: "Elimina el estrés."
      },
      {
        name: "Peeling Hidratante",
        price: "39€",
        duration: "35 min",
        description: "Piel más suave y súper hidratada."
      },
      {
        name: "Polinesia",
        price: "39€",
        duration: "35 min",
        description: "Piel aterciopelada y con una luminosidad natural."
      }
    ]
  },
  {
    title: "Masajes",
    description: "Técnicas manuales para aliviar la tensión y revitalizar el cuerpo.",
    items: [
      {
        name: "Masaje Antiestrés",
        price: "29€ / 49€",
        duration: "30min / 50min",
        description: "Desconecta de la rutina y libera tensiones."
      },
      {
        name: "Masajes Piernas Cansadas + Presoterapia",
        price: "45€",
        duration: "50 min",
        description: "Alivio inmediato para la pesadez y retención de líquidos."
      }
    ]
  },
  {
    title: "Rituales de Bienestar",
    description: "Experiencias sensoriales completas que combinan exfoliación, masaje y tratamientos especializados.",
    items: [
      {
        name: "Ritual Polinesia",
        price: "80€",
        duration: "100 min",
        description: "Aromas tropicales y experiencia de relajación (bañera, exfoliación y masaje)."
      },
      {
        name: "Ritual Ártico",
        duration: "100 min",
        price: "80€",
        description: "Experiencia estimulante nacida de la fusión del calor y el frío para una profunda relajación."
      },
      {
        name: "Ritual Termal",
        duration: "100 min",
        price: "90€",
        description: "Exfoliante, bañera, masaje corporal y tratamiento iluminador facial."
      },
      {
        name: "Ritual de la Alegría con Cítricos by Alquimia",
        duration: "100 min",
        price: "90€",
        description: "Tratamiento vitalizante y energético."
      }
    ]
  },
  {
    title: "Envolturas",
    description: "Tratamientos nutritivos que subliman la piel.",
    items: [
      {
        name: "Envoltura de Algas",
        price: "45€",
        description: "Detox y relajación."
      },
      {
        name: "Envoltura Indoceane + 30 minutos de masaje",
        price: "50€",
        description: "Enriquecida en activos nutritivos."
      }
    ]
  }
];

export const DEPILATION_SERVICES: ServiceCategory[] = [
  {
    title: "Depilación y Fotodepilación",
    description: "Soluciones eficaces para la eliminación del vello, desde cera tradicional hasta tecnología avanzada.",
    items: [
      {
        name: "Depilación y diseño de cejas",
        price: "6€",
        description: ""
      },
      {
        name: "Depilación Cera",
        price: "Desde 3€",
        description: "Zonas XS (3€), S (7€), M (15€), L (17€) y XL (30€)."
      },
      {
        name: "Depilación con Hilo",
        price: "Desde 7€",
        description: "Cejas (7€), labio superior (7€), labio y cejas (12€), facial completo (20€)."
      },
      {
        name: "Fotodepilación",
        price: "Desde 15€",
        description: "Zona XS (15€), ingles normal (20€), axilas (20€), facial completo (30€), ingles brasileñas o completas con inter glúteos (35€), medias piernas (38€), brazos (40€), espalda (45€), pecho (45€), piernas completas (50€)."
      },
      {
        name: "Bonos 5 sesiones",
        price: "Desde 80€",
        description: "Piernas completas (200€), axilas + ingles completas (200€), axilas + ingles normales (175€), espalda (175€), pecho (175€), medias piernas (170€), brazos (170€), ingles completas + perianal (150€), axilas (80€)."
      }
    ]
  }
];

export const AESTHETIC_SERVICES: ServiceCategory[] = [
  {
    title: "Manicura",
    description: "Cuidado completo para manos, con esmaltados de alta calidad.",
    items: [
      {
        name: "Manicura Normal",
        price: "15€",
        description: ""
      },
      {
        name: "Manicura con Esmaltado Semipermanente",
        price: "22€",
        description: ""
      },
      {
        name: "Manicura Spa",
        price: "30€",
        description: "Tratamiento completo de belleza en tus manos."
      }
    ]
  },
  {
    title: "Pedicura",
    description: "Cuidado completo para pies, con esmaltados de alta calidad.",
    items: [
      {
        name: "Pedicura con Esmaltado Semipermanente",
        price: "22€",
        description: ""
      },
      {
        name: "Pedicura Spa",
        price: "30€",
        description: "Tratamiento completo de belleza en tus pies."
      }
    ]
  },
  {
    title: "Maquillaje",
    description: "Realza tu belleza natural para eventos especiales.",
    items: [
      {
        name: "Maquillaje Social",
        price: "40€",
        description: "Día, tarde o noche."
      },
      {
        name: "Maquillaje de Novia",
        price: "150€",
        description: "Incluye fijación flash de larga duración y prueba de maquillaje. No incluye desplazamiento."
      },
      {
        name: "Lifting de Pestañas + Tinte",
        price: "38€",
        description: ""
      }
    ]
  }
];

const GOOGLE_REVIEWS_URL = "https://www.google.com/maps/search/?api=1&query=Marina+Spa+Zafra";

export const TESTIMONIALS: (Testimonial & { googleUrl?: string })[] = [
  {
    name: "Ana M.",
    rating: 5,
    text: "El mejor centro de estética en Zafra. El trato es exquisito y los tratamientos faciales han cambiado mi piel por completo.",
    googleUrl: GOOGLE_REVIEWS_URL
  },
  {
    name: "Lucía R.",
    rating: 5,
    text: "Me hice el tratamiento Indiba y los resultados fueron inmediatos. El local es precioso y transmite mucha paz.",
    googleUrl: GOOGLE_REVIEWS_URL
  },
  {
    name: "Elena G.",
    rating: 5,
    text: "Las chicas son encantadoras. Recomiendo 100% los masajes relajantes y la manicura semipermanente.",
    googleUrl: GOOGLE_REVIEWS_URL
  },
  {
    name: "María José T.",
    rating: 5,
    text: "Profesionalidad de 10. Llevo años yendo y no cambio. La depilación láser es súper efectiva.",
    googleUrl: GOOGLE_REVIEWS_URL
  }
];