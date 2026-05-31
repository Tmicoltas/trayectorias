export type Entrevistado = {
  nombre: string
  pseudonimo: string
  programa: string
  ocupacionActual: string
  ejerceDocencia: string
  profesionHoy: string
  proyeccionFutura: string
  arquetipo: string
  deseosIniciales: {
    ingreso: string
    rechazo: string
    interes: string
    imaginabaEnsenando: string
    tipoMotivacion: string
    frase: string
  }
  aprendizajesClave: string[]
  experienciasPersonales: string[]
  definicionVocacion: string
  satisfaccionDocente: string
  compromisoEducativo: string
  identidadDocente: string
  citasTextuales: string[]
  momentosDeQuiebre: {
    titulo: string
    descripcion: string
    textura: string
  }[]
  relacionesTeoricas: {
    autor: 'Torres (2022)' | 'Tenti (1988)' | 'Lortie (1975)'
    concepto: string
    relacion: string
  }[]
  coloresVisuales: {
    fondo: string
    acento: string
    tinta: string
    secundario: string
  }
  fraseCentral: string
  conceptoVisual: string
  emocionDominante: string
  atmosferaVisual: string
  imagen: string
  ilustracion: 'tejido' | 'engranajes'
  rawExcel: Record<string, string>
  analisis: string[]
}

export const entrevistadosData: Entrevistado[] = [
  {
    nombre: 'Daniela Cortez',
    pseudonimo: 'Daniela',
    programa: 'Sociología y Licenciatura en Ciencias Sociales',
    ocupacionActual: 'Asistente Académica de las Licenciaturas en Icesi',
    ejerceDocencia: 'Sí, desde el acompañamiento y la identidad profesional',
    profesionHoy: 'Como una "aprendiente y enseñante" que integra sociología y pedagogía',
    proyeccionFutura: 'Interactuar con estudiantes durante toda su vida',
    arquetipo: 'La tejedora de micro universos',
    conceptoVisual: 'TEJIDOS, una imagen visual que representa que ella ve las aulas como microuniversos',
    emocionDominante: 'Satisfacción y compromiso por el servicio',
    atmosferaVisual: 'Tejido (el currículo como algo que se construye)',
    fraseCentral: 'El aula es un micro universo social donde la sociología cobra vida.',
    imagen: 'https://www.svgrepo.com/show/521439/weaving.svg',
    ilustracion: 'tejido',
    coloresVisuales: {
      fondo: '#0a0a0a',
      acento: '#e87d16',
      tinta: '#f5f0df',
      secundario: '#fac044',
    },
    deseosIniciales: {
      ingreso: 'Para obtener herramientas de intervención social desde la sociología',
      rechazo: 'Ser docente de un colegio tradicional1922',
      interes: 'La co-creación horizontal de conocimiento',
      imaginabaEnsenando: 'No al inicio; lo veía como algo técnico-instrumental',
      tipoMotivacion: 'Instrumental / Social',
      frase: '"No tenía interés en ser docente de un colegio"19',
    },
    aprendizajesClave: [
      'Diseño de Aprendizaje 3: Enfoque de inclusión y realidades crudas',
      'El aula es un "micro universo social" donde la sociología cobra vida',
      'La co-creación horizontal de conocimiento cambia la relación con enseñar',
    ],
    experienciasPersonales: [
      'Aula Hospitalaria: Aprendizaje sobre duelos y primeros auxilios emocionales',
      'El contacto con estudiantes que asistían sin comer, cuestionando su privilegio',
      'La docencia aparece como acompañamiento, servicio y aprendizaje permanente',
    ],
    definicionVocacion: 'Acto de "dar y dar"; deseo de aprender y enseñar siempre',
    satisfaccionDocente: 'Sí, satisfecha al 100%',
    compromisoEducativo: 'ALTO',
    identidadDocente: 'Sí, es parte de su identidad profesional',
    citasTextuales: [
      'Rechazo al aula escolar: "No, no, no, no... no tenía interés en ser docente de un colegio"12.',
      'El aula como laboratorio social: "Me empiezo a dar cuenta que las aulas son estos micro universos sociales en donde hay una diversidad de personas, de creencias, de prejuicios... donde al final una sociología pues estudia y lee"13.',
      'Concepto de vocación: "Servir no significa como en términos de valores tradicionales religiosos, sino servir en términos de dar... esta sensación de a mí me gusta y dar y dar y dar"45',
      '"Servir no significa valores religiosos, sino dar y dar y dar"',
    ],
    momentosDeQuiebre: [
      {
        titulo: 'Herramienta, no destino',
        descripcion: 'Ingresa para obtener herramientas de intervención social desde la sociología, con una relación inicial técnica e instrumental con la docencia.',
        textura: 'Motivación instrumental / social',
      },
      {
        titulo: 'El aula hospitalaria',
        descripcion: 'La práctica pedagógica abre una comprensión emocional de la enseñanza: duelos, cuidado y primeros auxilios emocionales.',
        textura: 'Práctica pedagógica',
      },
      {
        titulo: 'La desigualdad entra al salón',
        descripcion: 'El contacto con estudiantes que asistían sin comer cuestiona su privilegio y vuelve el aula un territorio social vivo.',
        textura: 'Momento de quiebre',
      },
      {
        titulo: 'Aprendiente y enseñante',
        descripcion: 'La vocación se resignifica como servicio, co-creación y deseo de aprender y enseñar siempre.',
        textura: 'Identidad profesional',
      },
    ],
    relacionesTeoricas: [
      {
        autor: 'Lortie (1975)',
        concepto: 'Aprendizaje por trayectoria',
        relacion: 'Su vínculo con la enseñanza no aparece como deseo inicial, sino como una lectura construida desde experiencias formativas concretas.',
      },
      {
        autor: 'Tenti (1988)',
        concepto: 'Identidad social del oficio',
        relacion: 'La docencia deja de ser una función escolar tradicional y se vuelve una forma de leer relaciones, desigualdades y vínculos.',
      },
      {
        autor: 'Torres (2022)',
        concepto: 'Vocación como construcción',
        relacion: 'La satisfacción, el compromiso y el servicio muestran una vocación que emerge al resignificar la experiencia.',
      },
    ],
    rawExcel: {
      'Edad (si aplica)': '',
      '¿Desea mejorar constantemente?': '',
      '¿Qué cambió en su percepción?': '',
      'Nivel de conciencia vocacional': 'ALTO',
      'Nivel de compromiso educativo': 'ALTO',
      'Nivel de satisfacción docente': 'ALTO',
      'Posible elemento visual': 'TEJIDOS, una imagen visual que representa que ella ve las aulas como microuniversos',
    },
    analisis: [
      'Daniela Cortez ingresó a la Licenciatura en Ciencias Sociales sin la intención de ejercer la docencia, sino buscando herramientas pedagógicas que complementaran su formación como socióloga. Durante su paso por la Universidad Icesi, experiencias como el curso de Ambiente Escolar y Cuidado y sus prácticas en contextos escolares complejos transformaron su visión del aula, permitiéndole comprenderla como un espacio de interacción humana, diversidad y construcción social.',
      'Actualmente, como Asistente Académica de las Licenciaturas, desarrolla una labor centrada en el acompañamiento integral de los estudiantes, fortaleciendo competencias relacionadas con el cuidado, la empatía y el compromiso ético. Su trayectoria evidencia que la vocación docente puede construirse progresivamente a partir de intereses iniciales distintos a la enseñanza.',
      'A través de la resignificación del espacio educativo como un "micro universo social", Cortez encontró satisfacción en la interacción con los estudiantes, incorporó la identidad docente a su proyecto profesional y desarrolló un deseo constante de mejorar su práctica educativa, entendiendo la docencia como un proceso permanente de aprendizaje y enseñanza.',
    ],
  },
  {
    nombre: 'Mateo Villegas',
    pseudonimo: 'Mateo',
    programa: 'Licenciatura en Ciencias Sociales y Ciencia Política',
    ocupacionActual: 'Asesor en diseño instruccional y programas virtuales (Javeriana)',
    ejerceDocencia: 'Sí, en educación superior, consultoría y diseño pedagógico',
    profesionHoy: 'Como un motor de desarrollo social y político enfocado en lo educativo',
    proyeccionFutura: 'Trabajar en política educativa, consultoría o docencia universitaria',
    arquetipo: 'El diseñador de espacios seguros',
    conceptoVisual: 'Engranajes, concepto visual que representa su vision de las aulas como lugares de mejora pedagógica',
    emocionDominante: 'Pasión por el "Ikigai" educativo y la reflexión crítica',
    atmosferaVisual: 'Espacio seguro (la escuela como refugio)',
    fraseCentral: 'Hay vocaciones distintas: aula, asesoría, universidad e Ikigai educativo.',
    imagen: 'https://www.svgrepo.com/show/501135/gears.svg',
    ilustracion: 'engranajes',
    coloresVisuales: {
      fondo: '#0a0a0a',
      acento: '#fac044',
      tinta: '#f5f0df',
      secundario: '#e87d16',
    },
    deseosIniciales: {
      ingreso: 'Por un interés genuino en la educación, aunque entró casi por "inercia"',
      rechazo: 'El estereotipo del profe "pobrecito" y el rol de cuidado materno de primaria',
      interes: 'La escuela como lugar seguro y el impacto social del ejercicio político-educativo',
      imaginabaEnsenando: 'No tenía claridad; pensaba más en política o investigación educativa',
      tipoMotivacion: 'Instrumental / Social',
      frase: '"En ese momento no tenía muy claro si quería enseñar"',
    },
    aprendizajesClave: [
      'Cursos de pedagogía, currículo y evaluación',
      'Existen vocaciones distintas: no solo es el aula, sino la asesoría y la docencia universitaria1115',
      'La escuela puede operar como lugar seguro y como motor de desarrollo social y político',
    ],
    experienciasPersonales: [
      'Voluntariados relacionados con bienestar social y educación',
      'El choque con los estereotipos sociales y las presiones familiares sobre la carrera',
      'Diseño instruccional, consultoría, programas virtuales y docencia superior como formas diferenciadas de enseñar',
    ],
    definicionVocacion: 'Una pasión profunda y una disposición de cuidado hacia el otro',
    satisfaccionDocente: 'Sí, especialmente con públicos de bachillerato y universidad1135',
    compromisoEducativo: 'ALTO',
    identidadDocente: 'Sí, aunque diferenciada (consultoría/docencia superior)',
    citasTextuales: [
      'Deseo inicial incierto: "En ese momento no tenía muy claro si quería enseñar pero sí sabía que tenía un interés genuino por la educación"6.',
      'La escuela como refugio: "Sería chévere volver a ese lugar seguro que era la escuela en el sentido de que cuando yo estaba en el colegio disfrutaba mucho estar ahí compartiendo"7.',
      'Vocación diferenciada: "Siento que son vocaciones distintas: una vocación para trabajar en colegio y otra vocación para trabajar en otros escenarios educativos que tiene mucho que ver con eso que uno puede llamar pasión o Ikigai"',
      '"Hace falta ser buena persona y tener una profunda vocación por la enseñanza"',
    ],
    momentosDeQuiebre: [
      {
        titulo: 'Entrar por inercia',
        descripcion: 'La decisión nace de un interés genuino por la educación, pero sin claridad sobre enseñar como destino profesional.',
        textura: 'Deseo inicial incierto',
      },
      {
        titulo: 'El estereotipo pesa',
        descripcion: 'El imaginario del profe "pobrecito" y el cuidado materno de primaria tensionan su relación con la docencia escolar.',
        textura: 'Tensión identitaria',
      },
      {
        titulo: 'La escuela como refugio',
        descripcion: 'Los cursos, voluntariados y experiencias educativas reactivan la idea de la escuela como lugar seguro.',
        textura: 'Experiencia clave',
      },
      {
        titulo: 'Vocaciones distintas',
        descripcion: 'La docencia se expande hacia consultoría, diseño pedagógico, educación superior y política educativa.',
        textura: 'Vocación diferenciada',
      },
    ],
    relacionesTeoricas: [
      {
        autor: 'Lortie (1975)',
        concepto: 'Imágenes previas de la docencia',
        relacion: 'Su trayectoria muestra cómo los estereotipos iniciales sobre el profesorado condicionan el deseo de enseñar.',
      },
      {
        autor: 'Tenti (1988)',
        concepto: 'Oficio docente y reconocimiento social',
        relacion: 'El rechazo al imaginario del profe "pobrecito" dialoga con la pérdida del atractivo social de la docencia.',
      },
      {
        autor: 'Torres (2022)',
        concepto: 'Conciencia vocacional diferenciada',
        relacion: 'La vocación aparece como pasión, cuidado e Ikigai, pero no necesariamente limitada al colegio.',
      },
    ],
    rawExcel: {
      'Edad (si aplica)': '',
      '¿Desea mejorar constantemente?': '',
      '¿Qué cambió en su percepción?': '',
      'Nivel de conciencia vocacional': 'ALTO',
      'Nivel de compromiso educativo': 'ALTO',
      'Nivel de satisfacción docente': 'ALTO',
      'Posible elemento visual': 'Engranajes, concepto visual que representa su vision de las aulas como lugares de mejora pedagógica',
    },
    analisis: [
      'Mateo Villegas ingresó a la Licenciatura en Ciencias Sociales y Ciencia Política sin una intención clara de convertirse en docente, pues inicialmente se proyectaba en ámbitos relacionados con la política y la investigación educativa. Sin embargo, durante su formación universitaria descubrió que la educación podía ser una herramienta de transformación social y comenzó a replantear su visión sobre la enseñanza.',
      'Los cursos de pedagogía, currículo y evaluación, junto con su participación en voluntariados, fortalecieron su vínculo con los procesos educativos y le permitieron comprender que la vocación docente puede ejercerse de múltiples maneras más allá del aula tradicional. Actualmente, concibe la educación como un motor de desarrollo social y político y disfruta trabajar con estudiantes.',
      'Su trayectoria refleja que la vocación docente puede construirse progresivamente mediante la formación y la reflexión. En su caso, el interés inicial por la educación evolucionó hacia una identidad profesional marcada por la satisfacción con la enseñanza, la conciencia vocacional y el compromiso educativo.',
    ],
  },
  {
    nombre: 'Daniela Idarraga',
    pseudonimo: 'Daniela Idarraga',
    programa: 'Antropología y Licenciatura en Lenguas Extranjeras (Inglés), realizadas mediante simultaneidad en la Universidad Icesi',
    ocupacionActual: 'Profesora de Ciencias Sociales (Social Studies teacher) en bachillerato (High School) en un colegio privado bilingüe',
    ejerceDocencia: 'Sí, ejerce activamente en la actualidad',
    profesionHoy: 'Como un proceso de "amor-odio" que evolucionó hacia un "completo amor" por la educación. Describe la docencia como el lugar donde puede generar un impacto positivo en la sociedad y como un ejercicio de "reafirmación" constante de su propósito de vida',
    proyeccionFutura: 'Se proyecta continuando en el sector educativo; recientemente inició una Maestría en Enseñanza para seguir profesionalizando su labor. Expresa que el compartir con los estudiantes es lo que "reafirma" su motivación a seguir',
    arquetipo: 'El "Micro-universo" y la "Burbuja"',
    conceptoVisual: 'El "Micro-universo": ella ve el aula como un espacio donde se reflejan y analizan las diversas realidades sociales. También la "Burbuja", refiriéndose al contexto de privilegio de algunos estudiantes que intenta cuestionar.',
    emocionDominante: 'Satisfacción y Reafirmación. Aunque admite que hay días de frustración, siente una "energía muy chévere" al compartir con los alumnos.',
    atmosferaVisual: 'Una atmósfera de "Esperanza y Romantización". Describe sus inicios con muchas expectativas de cambio, las cuales mantiene a pesar de encontrarse con realidades complejas o "burbujas" de privilegio.',
    fraseCentral: 'No quiero hacer cambio pero quiero hacerlo desde las aulas',
    imagen: 'https://www.svgrepo.com/show/521439/weaving.svg',
    ilustracion: 'tejido',
    coloresVisuales: {
      fondo: '#0a0a0a',
      acento: '#e87d16',
      tinta: '#f5f0df',
      secundario: '#fac044',
    },
    deseosIniciales: {
      ingreso: 'Daniela decidió ingresar a la licenciatura después de una crisis personal durante su carrera de Antropología, donde no encontraba claridad sobre su futuro profesional. Tras tomarse un semestre de pausa y realizar voluntariados con niños y jóvenes, se "enamoró" de la educación y decidió de forma consciente que quería dedicarse a ella para generar cambios sociales. Eligió específicamente la licenciatura en idiomas para complementar su formación en sociales y ampliar sus posibilidades en el campo laboral.',
      rechazo: 'Al inicio de su vida universitaria, le generaba rechazo la idea de graduarse para "volver al colegio" a enseñar, calificándolo como una "pereza". También le afectan los prejuicios comunes sobre la profesión, como la idea de que "esto no da plata" o las dudas sobre de qué viviría un profesor. Asimismo, no se veía trabajando en oficinas o recolectando datos en el campo para entidades gubernamentales',
      interes: 'Le interesaba profundamente generar un impacto positivo en la sociedad, pero no desde la política, sino directamente desde las aulas. También le atraía el mundo de la lingüística y la posibilidad de conectar los aspectos sociales con el lenguaje. Sobre todo, le interesaba el "compartir" y la energía que sentía al estar con los estudiantes, tanto en clase como en los descansos.',
      imaginabaEnsenando: 'Inicialmente no; entró a Antropología por curiosidad intelectual pero sin visión profesional. En sus comienzos afirmaba: "No, yo no quiero ser profe, qué pereza". Fue solo después de sus experiencias de voluntariado que pudo decir: "esto sí, me veo en esto, sí me veo trabajando en esto"',
      tipoMotivacion: 'Intrínseca Su motivación evolucionó de un "amor-odio" inicial a una decisión consciente y vocacional por las necesidades de aprendizaje que veía a su alrededor.',
      frase: '"No quiero hacer cambio pero quiero hacerlo desde las aulas"',
    },
    aprendizajesClave: [
      'Clases de lingüística y la primera clase de pedagogía (con una profesora llamada María).',
      '"Lograba como conectar cosas sociales con cosas del lenguaje... era chévere cuestionárselo y pensar".',
      'El aula como laboratorio social donde convergen diversas realidades, necesidades y desigualdades.',
    ],
    experienciasPersonales: [
      'Realización de voluntariados en barrios como Siloé y Alto Nápoles (recreación y enseñanza de inglés).',
      'Visitas a colegios con realidades opuestas: desde colegios públicos vulnerables hasta el Colegio Bolívar (privado/exclusivo).',
      'Una crisis personal por falta de claridad profesional en Antropología que la llevó a pausar la universidad por un semestre.',
    ],
    definicionVocacion: 'Es un proceso de reafirmación constante; sentir que lo que uno hace tiene un impacto positivo en la sociedad y reafirmar la intención de generar un cambio desde las aulas',
    satisfaccionDocente: 'Sí, describe la relación con ellos como una "energía muy chévere" y disfruta especialmente del compartir en los espacios fuera de clase, como los descansos',
    compromisoEducativo: 'Alto: Se proyecta a largo plazo, estudia un posgrado y busca constantemente formas creativas de desafiar los prejuicios de sus estudiantes en el aula',
    identidadDocente: 'Sí, se identifica plenamente como alguien que "sí quiere ser profe" y valora que sus estudiantes perciban y le devuelvan ese sentimiento',
    citasTextuales: [
      '"No quiero hacer cambio pero quiero hacerlo desde las aulas"',
      '"No, yo no quiero ser profe, qué pereza"',
      '"Esto me gusta, esto sí me veo en esto... no en una oficina"',
      '"Lograba como conectar cosas sociales con cosas del lenguaje... era chévere cuestionárselo y pensar"',
      '"Ambos son adolescentes y ambos... tienes que engancharlos a lo mismo a querer estudiar"',
      '"Vocación sería como ese reafirmarse, reafirmar que esto es lo que te gusta y que sí tiene un sentido lo que uno está haciendo"',
    ],
    momentosDeQuiebre: [
      {
        titulo: 'Crisis personal',
        descripcion: 'Una crisis personal por falta de claridad profesional en Antropología que la llevó a pausar la universidad por un semestre.',
        textura: 'Incertidumbre inicial seguida de una decisión consciente y "enamoramiento"',
      },
      {
        titulo: 'Voluntariados comunitarios',
        descripcion: 'Realización de voluntariados en barrios como Siloé y Alto Nápoles (recreación y enseñanza de inglés).',
        textura: 'Disfrute genuino, "energía muy chévere"',
      },
      {
        titulo: 'Aulas contrastantes',
        descripcion: 'Visitas a colegios con realidades opuestas: desde colegios públicos vulnerables hasta el Colegio Bolívar (privado/exclusivo).',
        textura: 'Reto, asombro y romantización inicial de la labor docente',
      },
      {
        titulo: 'Impacto y reafirmación',
        descripcion: 'Identificación del aula como un espacio de impacto social real y la reafirmación constante de su propósito.',
        textura: 'Satisfacción y sentido de impacto (reafirmación)',
      },
    ],
    relacionesTeoricas: [
      {
        autor: 'Lortie (1975)',
        concepto: 'La vocación apareció después',
        relacion: 'Transición de una motivación extrínseca (rechazo inicial por prejuicios sociales) a una decisión consciente e intrínseca tras una crisis de identidad profesional',
      },
      {
        autor: 'Tenti (1988)',
        concepto: 'El aula cambió su percepción',
        relacion: 'El aula entendida como un micro-universo social donde las realidades externas convergen, convirtiéndose en el escenario ideal para el impacto social que ella buscaba',
      },
      {
        autor: 'Torres (2022)',
        concepto: 'La identidad docente se transformó',
        relacion: 'La vocación como un proceso de reafirmación constante frente a la frustración y el cansancio; la identidad se construye en la interacción de "ida y vuelta" con el alumno',
      },
    ],
    rawExcel: {
      'Edad (si aplica)': '',
      '¿Desea mejorar constantemente?': 'Sí, manifiesta siempre tener "ganas de mejorar más cosas", colabora con sus pares para crear secuencias didácticas conjuntas y actualmente cursa una maestría en enseñanza',
      '¿Qué cambió en su percepción?': 'Pasó de un rechazo inicial ("qué pereza ser profe") y prejuicios sobre la rentabilidad de la carrera a un "completo amor" tras realizar voluntariados y entender la educación como su lugar de impacto social',
      'Nivel de conciencia vocacional': 'Alto: Define su entrada a la licenciatura como una "decisión muy consciente" tras un proceso de reflexión personal',
      'Nivel de compromiso educativo': 'Alto: Se proyecta a largo plazo, estudia un posgrado y busca constantemente formas creativas de desafiar los prejuicios de sus estudiantes en el aula',
      'Nivel de satisfacción docente': 'Alto: A pesar de reconocer que hay días difíciles, afirma que el impacto que ve en sus alumnos es lo que "llena o reafirma" su motivación',
      'Posible elemento visual': 'El "Micro-universo": Daniela percibe el aula como un espacio donde se reflejan las diversas realidades, necesidades y desigualdades de la sociedad. También menciona la "Burbuja", refiriéndose al contexto de privilegio de algunos estudiantes que ella intenta cuestionar a través de preguntas.',
    },
    analisis: [
      'Daniela Idarraga Campo inició su trayectoria universitaria sin interés en la docencia e incluso con cierto rechazo hacia la profesión, influenciada por estereotipos sobre su bajo reconocimiento social y económico. Mientras estudiaba Antropología, una crisis personal la llevó a realizar voluntariados en comunidades de Siloé y Alto Nápoles, donde descubrió en la educación una forma significativa de generar impacto social.',
      'Esta experiencia transformó su proyecto profesional y la motivó a complementar sus estudios con la Licenciatura en Lenguas Extranjeras. A través de la enseñanza encontró una manera de integrar su interés por la investigación y el trabajo humano con las comunidades.',
      'Actualmente, concibe la vocación docente como un proceso de construcción y reafirmación constante, en el que el acompañamiento a los estudiantes y la promoción de la reflexión crítica le permiten generar transformaciones desde el aula. Su historia evidencia que la vocación puede surgir incluso a partir de una posición inicial de rechazo y fortalecerse mediante experiencias significativas de formación y servicio.',
    ],
  },
]

export const hallazgosData = [
  {
    patron: 'La vocación apareció después',
    participantes: 'Ambos ingresaron sin querer ser profes de colegio y descubrieron su camino en la práctica',
    relacionTeorica: 'Memoria Creativa: El sujeto resignifica su pasado para dar sentido a su identidad presente2425',
    visualizacion: 'Un mapa del tesoro donde el destino final es inesperado.',
    capas: ['deseos iniciales', 'transformación profesional', 'identidad docente'],
  },
  {
    patron: 'El aula cambió su percepción',
    participantes: 'Daniela la vio como micro-universo social19; Mateo como motor de desarroll',
    relacionTeorica: 'Espacialización de la práctica social: El aula como territorio de interacciones complejas2728',
    visualizacion: 'Un microscopio enfocando un salón de clases.',
    capas: ['experiencias', 'aprendizajes', 'identidad docente'],
  },
  {
    patron: 'La práctica fue clave',
    participantes: 'El aula hospitalaria para Daniela36 y el diseño instruccional/consultoría para Mateo',
    relacionTeorica: 'Aprendizaje dialógico: La formación ocurre en el intercambio con el "otro"3132',
    visualizacion: 'Dos rostros de perfil enfrentados formando un puente.',
    capas: ['aprendizajes', 'compromiso', 'satisfacción'],
  },
  {
    patron: 'La identidad docente se transformó',
    participantes: 'De ver la pedagogía como herramienta técnica a verla como un eje identitario de servicio y Ikigai',
    relacionTeorica: 'Agencia Social: Individuos que, al cambiar sus vidas, alteran su entorno',
    visualizacion: 'Una mariposa saliendo de un libro de texto.',
    capas: ['identidad docente', 'compromiso', 'transformación profesional'],
  },
]

export const teoriaData = [
  {
    autor: 'Lortie (1975)',
    idea: 'Las imágenes previas y trayectorias de socialización influyen en cómo se imagina la docencia.',
    conectadoCon: 'deseos iniciales, estereotipos y distancia frente al colegio tradicional',
  },
  {
    autor: 'Tenti (1988)',
    idea: 'El oficio docente se disputa entre reconocimiento social, condiciones simbólicas y sentido del trabajo.',
    conectadoCon: 'pérdida del atractivo social, imaginarios del profe y resignificación del oficio',
  },
  {
    autor: 'Torres (2022)',
    idea: 'La vocación docente se configura como una conciencia construida en la experiencia y en la identidad profesional.',
    conectadoCon: 'satisfacción, compromiso, servicio, cuidado e Ikigai educativo',
  },
]
