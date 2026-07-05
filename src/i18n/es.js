// src/i18n/es.js
// Traducciones al español — WENREI DESIGN
// Reglas aplicadas:
// - Spanglish del sector: end to end, UX Research, web apps, motion design,
//   design system, front-end, full stack, modal, scroll, email, live, tooltips,
//   Product Designer, ID, online, WCAG se mantienen en inglés.
// - WORK → Proyectos | ABOUT → Sobre mí | SHIP/SHIPPED → lanzado / en producción
// - GDPR → RGPD (Reglamento General de Protección de Datos) la primera vez
// - Sin guiones largos (em dashes)

export const es = {

  // ─── NAVBAR ────────────────────────────────────────────────────────────────
  nav: {
    work:      'Proyectos',
    about:     'Sobre mí',
    contact:   'Contacto',
    langLabel: 'Selector de idioma',
  },

  // ─── FOOTER ────────────────────────────────────────────────────────────────
  footer: {
    cta:            '¿Construimos algo <span class="accent">claro?</span>',
    ctaBtn:         'Hablemos',
    tagline:        'Diseño con claridad, escalo con sistemas e integro accesibilidad y código para llevar ideas end to end.',
    exploreTitle:   'Explorar',
    elsewhereTitle: 'También en',
    copyright:      'Diseñado y construido end to end.',
  },

  // ─── NOT FOUND ─────────────────────────────────────────────────────────────
  notFound: {
    body: 'Esta página no llegó a producción.',
    btn:  'Volver al inicio',
  },

  // ─── HOME — HERO ───────────────────────────────────────────────────────────
  hero: {
    eyebrow:      'Ramón Camacho · Product Designer · Plataformas web',
    titleStatic:   'Diseño y construyo',
    titlePrefix:   'productos ',
    titleWords:    ['coherentes', 'escalables', 'accesibles', 'inclusivos'],
    titleEnd:      ',',
    titleEndRest:  ' end to end.',
    quote:        '"De empatía a claridad. De claridad a productos reales."',
    ctaPrimary:      'Ver proyectos',
    ctaPrimaryExtra: ' seleccionados',
    ctaSecondary: 'Descargar CV',
  },

  // ─── HOME — WORK SECTION ───────────────────────────────────────────────────
  workSection: {
    heading: 'Proyectos seleccionados',
  },

  // ─── HOME — ABOUT SECTION ──────────────────────────────────────────────────
  about: {
    heading:       'Sobre mí',
    p1:            'Soy <strong>Ramón Camacho</strong>, Product Designer especializado en aplicaciones web y plataformas B2C. Trabajo con <strong>Design Systems</strong> y aplico criterios de <strong>accesibilidad</strong> y desarrollo <strong>front-end</strong> en cada decisión de diseño.',
    p2:            'Vengo del diseño visual y del motion design, donde muchas decisiones se defendían desde el gusto: <em>"hazlo más grande, cambia el color, no me convence"</em>. Con el tiempo, empecé a necesitar algo más que opinión para tomar decisiones.',
    p3:            'En producto las reglas cambian: si una persona no puede completar un flujo, no es una cuestión de gusto, es una señal de que algo no está bien resuelto. Por eso, antes de diseñar, pienso como usuario.',
    p4:            'Durante el último año he profundizado en <strong>Design Systems</strong> y <strong>Accesibilidad</strong>. Auditar interfaces me llevó a entender el código de una forma más real. Hoy complemento mi perfil con desarrollo <strong>Full Stack</strong>, lo que me permite anticipar límites técnicos y reducir fricciones con el equipo de desarrollo.',
    quote:         'Entender lo que diseño.\nConstruir lo que entiendo.',
    howIWorkTitle: 'Cómo trabajo',
  },

  // ─── HOME — PILLARS ────────────────────────────────────────────────────────
  pillars: [
    {
      num:  '01',
      name: 'Diseño',
      text: 'Entiendo a las personas y convierto problemas complejos en experiencias claras e intuitivas.',
    },
    {
      num:  '02',
      name: 'Sistemas',
      text: 'Diseño con orden, consistencia y escalabilidad a través de Design Systems, accesibilidad y patrones reutilizables.',
    },
    {
      num:  '03',
      name: 'Código',
      text: 'Conecto diseño y desarrollo para convertir ideas en productos funcionales, viables y listos para llegar a producción.',
    },
  ],

  // ─── HOME — CIRCUIT SECTION ────────────────────────────────────────────────
  circuit: {
    heading: 'Lo que conecta mi trabajo',
    nodes: {
      design:        { label: 'Diseño',         sub: 'Research · UX' },
      systems:       { label: 'Sistemas',        sub: 'Escalabilidad · Consistencia' },
      accessibility: { label: 'Accesibilidad',   sub: 'WCAG · Auditoría' },
      code:          { label: 'Código',          sub: 'React · Arquitectura' },
      product:       { label: 'PRODUCTO',        sub: 'Impacto · Usabilidad · Escalabilidad' },
    },
  },

  // ─── HOME — SKILLS MARQUEE ─────────────────────────────────────────────────
  skills: [
    'Design Systems', 'Accesibilidad · WCAG 2.2', 'UX Research', 'Arquitectura de Información',
    'React', 'Figma', 'Criterio de desarrollo front-end', 'Prototipado', 'Usability Testing', 'Mobile-First',
  ],

  // ─── CASE CARD ─────────────────────────────────────────────────────────────
  caseCard: {
    cta: 'Ver caso',
  },

  // ─── CASE STUDY — UI ───────────────────────────────────────────────────────
  caseStudy: {
    back:         'Volver a proyectos',
    metaRole:     'Rol',
    metaTeam:     'Equipo',
    metaTimeline: 'Duración',
    metaScope:    'Alcance',
    metaTools:    'Herramientas',
    learnedTitle: 'Lo que me llevé',
    allWork:      'Todos los proyectos',
    nextCase:     'Siguiente caso',
    beforeTag:    'Antes',
    afterTag:     'Después',
  },

  // ─── CASE 1 — BOOK AN APPOINTMENT ─────────────────────────────────────────
  case1: {
    client:       'SEAT · CUPRA',
    cardTitle:    'Los conductores solo tenían una forma de pedir cita: el teléfono',
    articleTitle: 'Pedir cita en el taller significaba llamar por teléfono.',
    summary:      'Cómo diseñé la primera forma digital de pedir cita en talleres autorizados para SEAT y CUPRA, live en 47 países.',
    tags:         ['UX Research', 'UI Design', 'Design System', 'Prototipado'],
    metric:       { value: '+35%', label: 'citas online' },
    meta: {
      role:     'Product Designer — SEAT & CUPRA web',
      team:     'SEAT Web & Private Area',
      timeline: '6 a 9 meses',
      scope:    'Lanzado en 47 países',
      tools:    'Figma, Zeplin, Adobe Photoshop, Design System',
    },
    intro: 'Para los conductores de SEAT y CUPRA, gestionar el mantenimiento significaba llamar al taller en un mundo donde casi todo ya ocurría online. Diseñé el flujo digital que cambió eso.',
    sections: {
      s1_heading: 'Empezó con una llamada.',
      s1_body: [
        'SEAT y CUPRA no tenían ninguna forma digital de pedir cita en un taller autorizado. Cualquier servicio, incluso un simple cambio de aceite, empezaba con una llamada. Para los usuarios era lento y frustrante; para los talleres, difícil de gestionar.',
        'La oportunidad estaba clara: no se trataba solo de digitalizar la llamada, sino de diseñar algo mejor que ella. Desde el inicio fijamos dos objetivos de producto:',
      ],
      s1_objectives: [
        '**Aumentar la retención de usuarios**',
        '**Ofrecer tiempos de respuesta más rápidos**',
      ],
      s1_question: '¿Cómo podríamos permitir que los usuarios pidan cita en el taller de forma rápida y sin fricción?',

      s2_heading: 'Un dato cambió la dirección del proyecto.',
      s2_body: [
        'Partí de los datos recopilados por el equipo de Strategy y analicé cómo otras marcas del sector resolvían el mismo problema, estudiando su arquitectura de información, recorridos de usuario y patrones de UX para evitar errores conocidos y adoptar lo que funcionaba.',
      ],
      s2_body_connector: 'Un hallazgo reencuadró todo el proyecto:',
      s2_caption:       'Benchmark de otras marcas de automoción: arquitectura de información, recorridos de usuario y patrones de UX.',
      s2_insight_label: 'Insight clave',
      s2_insight_value: '50%',
      s2_insight_text:  'de las llamadas de servicio eran solo para pedir servicios básicos y recurrentes, como un cambio de aceite o una revisión.',

      s3_versions: [
        { label: 'V1', caption: 'Demasiado largo. Más de 30 opciones sin una jerarquía clara.' },
        { label: 'V2', caption: 'Mejor estructura, pero seguía obligando al usuario a tomar demasiadas decisiones.' },
        { label: 'V3', caption: 'Simplificado para responder a la necesidad real. Campo abierto para servicios o detalles fuera de la lista.' },
      ],

      s4_heading: 'Así empecé a trazar un camino más claro.',
      s4_body: [
        'Para mantener la coherencia con el ecosistema digital existente, construí el flujo sobre el componente ya existente de *"Find a Dealer"* y lo estructuré como un recorrido lineal simple:',
        '**1. Seleccionar servicios**',
        '**2. Elegir fecha y hora**',
        '**3. Confirmar datos personales**',
        'Como más de la mitad de las solicitudes eran servicios básicos, evité deliberadamente la sobrecarga de opciones: pocas opciones claras desde el inicio, con la posibilidad de añadir más detalle para quien lo necesitara.',
        'También tuve que definir el flujo para usuarios nuevos y no registrados, que originalmente dependía demasiado de Private Area. Tenía que funcionar por sí solo sin perder conexión con la experiencia digital de SEAT y CUPRA. Esa conexión terminó convirtiéndose en un objetivo de negocio en sí misma:',
      ],
      s4_question: 'Impulsar la adopción de Private Area ofreciendo servicios personalizados.',

      s5_heading: 'La primera solución no encajaba. Y el debate fue por un modal.',
      s5_body: [
        'Aquí fue donde más aprendí. Mi instinto me decía que **un modal no era el contenedor adecuado** para un flujo tan detallado y extenso: limita la navegación, da problemas en mobile, plantea dudas de accesibilidad y puede dificultar que el usuario conserve su progreso.',
        'Lo cuestioné, pero al trabajarlo con otros diseñadores y con el equipo de desarrollo entendí que el modal era necesario por la arquitectura del sistema. Adoptamos un enfoque modular que encajaba con la plataforma existente, asumiendo sus límites donde eran inevitables.',
        'La lección fue clara: antes de hacer recomendaciones de diseño en firme, hay que sopesar todos los puntos de vista y entender bien las limitaciones técnicas.',
      ],
      s5_takeaway_label: 'Lo que aprendí',
      s5_takeaway_text:  'Diseño y desarrollo necesitan alinearse en la arquitectura antes de que el diseño avance. Si no, se trabaja doble.',

      s6_heading:   'La solución final se organizó en cuatro momentos.',
      s6_body_1:    '**1. Identificar tu vehículo.** El usuario introduce la matrícula, o elige modelo y año, para desbloquear servicios adaptados a su coche.',
      s6_caption_1: 'Matrícula o modelo y año: los servicios se desbloquean según el vehículo concreto.',
      s6_body_2:    '**2. Seleccionar servicios y adicionales.** Opciones básicas claras, con la posibilidad de añadir detalles en un campo de comentarios.',
      s6_caption_2: 'Una lista corta y enfocada evita que el usuario se sienta abrumado.',
      s6_body_3:    '**3. Fecha y hora.** Un calendario intuitivo con franjas dinámicas agrupadas en bloques como mañana y tarde.',
      s6_caption_3: 'Mostrar solo disponibilidad en tiempo real reduce errores y evita falsas expectativas.',
      s6_body_4:    '**4. Confirmar y reservar.** Un resumen en tiempo real permite verificar todo antes de finalizar, con la visibilidad de privacidad y RGPD integrada.',
      s6_caption_4: 'Datos personales prellenados para usuarios con sesión iniciada, privacidad visible y confirmación clara al final del proceso.',
      s6_video_intro: 'El flujo se adapta limpiamente en Desktop XL/L, Tablet M y Mobile S.',

      s7_heading:   'Diecisiete personas lo pusieron a prueba.',
      s7_companion: 'Probé el flujo con 17 usuarios y todos completaron las tareas principales. Donde detecté fricción, datos incompletos o selecciones inválidas, la solución fue usar tooltips inline claros en lugar de modales, para evitar capas superpuestas y confusas.',
      s7_stat:      [{ value: '17', label: 'usuarios probaron el flujo antes del lanzamiento' }],
      s7_quote1:    'Ahora puedo agendar mis servicios en minutos, sin necesidad de llamadas.',
      s7_quote2:    'La experiencia fue muy clara y me dio confianza en el proceso.',

      s8_heading: 'Y llegaron los datos.',
      s8_body:    'Más allá de las métricas, el flujo redujo la necesidad de explicación por parte del equipo de soporte. La pantalla empezó a responder las preguntas por las que antes la gente llamaba.',
      s8_stats: [
        { value: '+35%', label: 'de aumento en citas online durante los primeros 3 meses' },
        { value: '+20%', label: 'más usuarios registrados gestionando citas a través de Private Area' },
        { value: '47',   label: 'países donde el diseño está live hoy' },
      ],
      s8_caption: 'Resumen completo antes de confirmar. Todo visible, un toque para reservar.',
      s8_links: [
        { label: 'Verlo live en SEAT',  url: 'https://www.seat.es/' },
        { label: 'Verlo live en CUPRA', url: 'https://www.cupra.com/es-es/' },
      ],
    },
    learned: 'La mayor lección fue incluir a los usuarios desde el principio del proceso. Hacerlo evita que se cuelen suposiciones. Más allá de eso, el proyecto me enseñó a equilibrar la convicción de diseño con la realidad técnica, a comunicarme antes con desarrollo para prevenir fricciones y a entender lo importante que es la alineación entre equipos desde el primer día.',
  },

  // ─── CASE 2 — FAQ ARCHITECTURE ─────────────────────────────────────────────
  case2: {
    client:       'SEAT · CUPRA',
    cardTitle:    'Tenías una duda sobre tu coche. Google no podía llevarte a la respuesta.',
    articleTitle: 'Tenías una duda sobre tu coche. Google no podía llevarte a la respuesta.',
    summary:      'Reestructuré las FAQ de SEAT y CUPRA para que cada tema pudiera aparecer en buscadores y encontrarse fácilmente dentro de la web.',
    tags:         ['Arquitectura de Información', 'SEO', 'UX Design', 'Design System'],
    meta: {
      role:     'Product Designer — SEAT & CUPRA web',
      team:     'SEAT Web',
      timeline: '3 meses',
      scope:    'Contenido de soporte global de SEAT y CUPRA',
      tools:    'Figma, Adobe Photoshop',
    },
    intro: 'Las antiguas páginas de FAQ vivían como un único bloque sin estructura real. Los buscadores no podían mostrar temas concretos y los conductores no encontraban lo que necesitaban. Rediseñé las FAQ en un sistema claro, escalable y preparado para que cada tema tuviera su propio lugar.',
    sections: {
      s1_heading: 'Todo estaba en una sola página. Nada era fácil de encontrar.',
      s1_body: [
        'El contenido de FAQ de SEAT y CUPRA vivía en una sola página apenas estructurada. Todo se amontonaba en el mismo sitio: preguntas sobre carga, garantía, conectividad y modelos, sin páginas dedicadas y sin una forma clara de navegar.',
        'Eso generaba dos problemas al mismo tiempo: los buscadores no podían posicionar bien el contenido y quien llegaba a la página tenía dificultades para encontrar la respuesta concreta que buscaba.',
      ],
      s1_question: '¿Cómo podríamos reestructurar las FAQ para que fueran fáciles de encontrar en buscadores y fáciles de navegar una vez dentro?',

      s2_heading: 'La misma estructura fallaba de tres formas distintas.',
      s2_body: [
        '**Visibilidad en buscadores (SEO).** Con todo en una sola página, los buscadores no tenían temas concretos que indexar. Alguien buscando una pregunta específica sobre CUPRA Connect o sobre carga tenía pocas opciones de llegar directamente a esa respuesta.',
        '**Navegación.** Dentro de una página larga, los usuarios tenían que hacer scroll o rebuscar hasta encontrar su tema. No había menú persistente ni una referencia clara de ubicación.',
        '**Escalabilidad.** El planteamiento antiguo no admitía nuevas categorías o subcategorías de forma limpia. Añadir contenido significaba hacer la página cada vez más larga, más desordenada y más difícil de mantener.',
      ],
      s2_diagram_caption: 'Antes: una sola URL con todo mezclado. Después: cada categoría y subcategoría con su propia página indexable.',
      s2_before_caption:  'Antes: categorías cerradas, sin jerarquía visible. El usuario no sabía dónde estaba.',
      s2_after_caption:   'Después: categoría activa expandida y subcategorías visibles. La ubicación siempre era clara.',

      s3_heading: 'Primero la estructura. Lo demás viene solo.',
      s3_body: [
        'Reestructuré las FAQ en una jerarquía clara de categorías y subcategorías, donde cada nivel tenía su propia página dedicada e indexable.',
        '**Para mejorar el SEO:** cada categoría y subcategoría tenía su propia URL, por ejemplo seat.com/faqs/models/ateca, para que los buscadores pudieran indexar y posicionar temas concretos en lugar de una sola página con todo mezclado.',
        '**Para mejorar la navegación:** diseñé un menú persistente, visible en todas las páginas de FAQ, con categorías y subcategorías como enlaces. Estuvieras donde estuvieras, podías ver la estructura completa y saltar a cualquier tema.',
        '**Para permitir el crecimiento:** la estructura era modular. Se podían añadir y reordenar nuevas categorías, subcategorías y preguntas sin romper el layout ni saturar la página.',
      ],
      s3_image_caption: 'Una respuesta expandida: CTA hacia la página relevante, soporte visual para temas técnicos y "¿Te resultó útil esta respuesta?" para saber qué contenido funciona.',

      s4_heading: 'Después añadí funciones que hacían cada respuesta más útil.',
      s4_body: [
        '**CTAs dentro de las respuestas:** una pregunta sobre un servicio podía enlazar directamente a la página relevante o al flujo de reserva, convirtiendo una respuesta pasiva en un siguiente paso.',
        '**Imágenes y vídeo en las respuestas:** apoyo visual para temas técnicos como la carga de un híbrido enchufable, donde una imagen o un clip puede explicar más rápido que el texto.',
        '**"¿Te resultó útil esta respuesta?"** Un simple sí/no en cada respuesta daba al equipo una señal clara de qué contenido funcionaba y cuál necesitaba revisión.',
      ],

      s5_heading: 'Lo que quedó fuera del alcance',
      s5_body:    'Un buscador interno de FAQ estaba en la lista de deseos, pero quedó fuera de este proyecto. Necesitaba una prueba técnica para evaluar su viabilidad, así que lo dejamos señalado como siguiente paso en lugar de forzarlo.',
      s5_links: [
        { label: 'Verlo live en CUPRA', url: 'https://www.cupraofficial.com/faqs' },
        { label: 'Verlo live en SEAT',  url: 'https://www.seat.com/faqs' },
      ],
    },
    learned: 'La mayor lección fue entender lo mucho que dependen entre sí la arquitectura de información y el SEO. Una estructura limpia no solo ordena el contenido: también permite que la gente lo encuentre. También insistiría antes en tener acceso a métricas posteriores al lanzamiento. Diseñar con objetivos es importante, pero medir si la nueva estructura mejoró las visitas, la navegación y el rebote habría cerrado mejor el ciclo de aprendizaje.',
  },

  // ─── CASE 3 — TRÁMITE ADMINISTRATIVO ──────────────────────────────────────
  case3: {
    client:       'Administración Pública',
    cardTitle:    'Los ciudadanos abandonaban antes de poder hacer un trámite administrativo',
    articleTitle: 'Los ciudadanos querían presentar una declaración. Primero tenían que superar la identificación digital.',
    summary:      'Rediseñé un trámite público para que el laberinto de identificación dejara de bloquear a las personas antes de empezar.',
    tags:         ['Evaluación Heurística', 'Service design', 'Progressive disclosure', 'Prototipado'],
    meta: {
      role:     'Product Designer',
      team:     'Consultora de transformación digital, para una administración pública',
      timeline: '2023 a 2024',
      scope:    'Research, benchmark, evaluación heurística, flujos y diseño de pantallas',
      tools:    'Figma',
    },
    intro: 'En la sede electrónica de una administración pública, presentar la declaración de bienes de un alto cargo empezaba con un muro: elegir entre cuatro sistemas de identificación digital, cada uno con su propio proceso. Muchos ciudadanos se perdían ahí y nunca llegaban al formulario. Rediseñé el trámite para que el acceso fuera simple y la información, clara.',
    sections: {
      s1_heading: 'Parecía un trámite sencillo. No lo era.',
      s1_body: [
        'La administración pública quería mejorar la experiencia de sus trámites digitales. El caso que trabajé parecía uno de los más sencillos: presentar la declaración de actividades y bienes de un alto cargo. Sencillo en teoría, porque en la práctica el ciudadano se topaba con un proceso lleno de fricción antes incluso de empezar.',
        'El patrón se repetía en muchos trámites del portal, así que resolverlo bien aquí podía servir como modelo para los demás trámites.',
      ],
      s1_question: '¿Cómo hacer que un trámite oficial sea simple, incluso para personas con menos experiencia digital?',

      s2_heading: 'Evalué el flujo antiguo. Se rompía en dos puntos.',
      s2_body: [
        'Hice una evaluación heurística del flujo existente y encontré dos problemas que se sumaban.',
        '**La identificación era un laberinto.** Para empezar, el ciudadano tenía que identificarse digitalmente eligiendo entre cuatro sistemas distintos, sin una guía clara sobre cuál usar. La ventaja real la tenían quienes ya habían gestionado antes un Certificado Digital. Para el resto, conseguir cualquiera de esos métodos era otro trámite largo y complejo. Resultado: la gente se perdía saltando de página en página y muchas veces nunca llegaba al formulario.',
        '**La información del trámite era un muro.** Una vez dentro, los detalles del trámite, como qué es, plazos, documentación y requisitos, se presentaban como un bloque largo que obligaba a hacer scroll infinito para encontrar cualquier cosa.',
      ],
      s2_image_caption: 'El flujo antiguo: cuatro sistemas de identificación, cada uno con su propio proceso. La mayoría de usuarios nunca llegaba al formulario.',

      s3_heading: 'Luego miré cómo lo resolvían otros organismos públicos.',
      s3_body: [
        'Analicé cómo resuelven este tipo de trámites organismos públicos de referencia internacional, especialmente en Reino Unido y Canadá.',
        'Sobre la identificación, todos los organismos públicos de referencia piden identificarse para trámites oficiales. Es un requisito legal y de seguridad, no algo que se pueda eliminar. La diferencia está en cómo se organiza: otros sistemas ofrecen varios métodos, pero con más guía y menos fricción.',
        'Sobre la información, los referentes organizan los trámites complejos con un índice de contenido navegable y progressive disclosure: cada tema en su sección, sin muros de texto. Ese patrón fue mi referencia directa para reestructurar la información del trámite.',
      ],
      s3_image_caption: 'Referencias internacionales: índice de contenido navegable y progressive disclosure como patrón para trámites públicos complejos.',

      s4_heading: 'Así rediseñé el acceso al trámite.',
      s4_body: [
        'No se trataba de eliminar la identificación, porque era obligatoria y legal. Se trataba de quitar la fricción del sitio equivocado y aclarar la información.',
        '**Una vía de acceso sin bloqueo previo.** Rediseñé el acceso para separar dos cosas que el flujo antiguo mezclaba: rellenar la declaración y firmarla. Con certificado, el formulario podía venir prerrellenado con los datos del usuario. Sin Certificado Digital, el usuario podía entrar igual y rellenar el formulario a mano. La firma con certificado seguía siendo obligatoria al final, para presentar la declaración con validez legal. Lo que cambiaba era que ya no bloqueaba el inicio del trámite.',
        '**Progressive disclosure en lugar de scroll infinito.** Reestructuré la información del trámite en secciones tipo acordeón, como qué es, a quién va dirigido, plazos, documentación y requisitos. El objetivo era que la información clave cupiera en pantalla, sin scroll interminable y sin abrir modales que cortaran la navegación.',
      ],
      s4_insight_label:  'La decisión clave',
      s4_insight_text:   'Ninguna de las referencias separaba claramente rellenar de firmar. Separar esos dos momentos permitió quitar el muro de identificación del inicio sin tocar el requisito legal.',
      s4_image_caption:  'El acceso rediseñado: dos caminos claros, con o sin Certificado Digital, sin bloquear el inicio del trámite.',
      s4_before_caption: 'Antes: toda la información del trámite en un bloque largo. Encontrar algo significaba recorrerlo todo.',
      s4_after_caption:  'Después: secciones con acordeón. Cada tema en su sitio, sin enterrar la información importante.',

      s5_heading: 'Diseñé el flujo completo, no solo el camino ideal.',
      s5_body:    'También diseñé los estados de excepción que el ciudadano podía encontrar: trámite no disponible con aviso por email, fuera de plazo y un punto de ayuda claro, como 012, soporte en línea o FAQs. En un servicio público, esos casos no son secundarios. Son el momento en que una persona con menos experiencia digital puede quedarse sin salida.',
      s5_gallery: [
        { caption: 'Trámite no disponible: aviso por email para que el usuario vuelva cuando esté activo.' },
        { caption: 'Fuera de plazo: CTA desactivado y aviso claro. Sin callejón sin salida.' },
        { caption: 'Ayuda contextual: acceso visible a soporte, sin interrumpir el trámite.' },
      ],
      s5_objectives: [
        'Llevar al ciudadano al formulario sin perderse en el laberinto de identificación',
        'Ayudarle a entender el trámite sin pelearse con un muro de texto',
      ],
      s5_takeaway_label: 'Hasta dónde llegó el proyecto',
      s5_takeaway_text:  'El proyecto se quedó en fase de propuesta de diseño. Mi etapa terminó antes del lanzamiento, así que no llegué a validarlo con usuarios ni a ver métricas en producción. El siguiente paso natural habría sido testar el flujo con usuarios reales, especialmente con perfiles con menos experiencia digital, que eran justo a quienes la fricción afectaba más.',
    },
    learned: 'En servicios públicos, la fricción casi nunca está donde parece. El problema no era tener que identificarse, porque eso era necesario. El problema era que ese paso estaba mal resuelto y colocado donde más bloqueaba. También aprendí que mirar referentes sirve tanto para adoptar lo que funciona como para detectar lo que nadie resuelve bien: ver que ni las referencias separaban claramente rellenar de firmar me dio espacio para proponer algo distinto, respetando los requisitos legales.',
  },

}
