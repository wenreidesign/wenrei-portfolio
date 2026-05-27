import cupraBooking from '../assets/case-cupra-booking.png'
import cupraFaqs from '../assets/case-cupra-faqs.jpg'
import gencatCertificat from '../assets/case-gencat-certificat.jpg'

export const cases = [
  {
    slug: 'cupra-book-an-appointment',
    cover: cupraBooking,
    coverFit: 'contain',
    client: 'SEAT · CUPRA',
    title: 'Booking a workshop visit without the friction',
    summary:
      'Designed the end-to-end “Book an Appointment” flow for CUPRA service centers — turning a multi-step task into something a driver finishes in one sitting.',
    tags: ['UX Design', 'Design System', 'Front-end criteria'],
    metric: { value: '+35%', label: 'online appointments' },
    meta: {
      role: 'Product Designer — SEAT & CUPRA web',
      team: 'PM, front-end engineers, brand team',
      timeline: '2022 – 2023',
      scope: 'Deployed across 47 countries',
      tools: 'Figma, Design System, usability testing',
    },
    intro:
      'CUPRA owners could book a workshop visit online, but most of them gave up halfway. The flow asked for everything at once, the available services were unclear, and people weren’t sure what they were committing to. The booking existed — it just wasn’t finishing.',
    sections: [
      {
        kind: 'text',
        heading: 'Where it all started',
        body: [
          'When I picked up this flow, the data told a familiar story: people entered the booking, started selecting services, and dropped off before confirming. The intention to book was there. The path to the end was not.',
          'My first job wasn’t to redraw screens — it was to understand why a motivated user, someone who actually wanted to service their car, would walk away mid-task.',
        ],
      },
      {
        kind: 'text',
        heading: 'Digging deeper',
        body: [
          'Working from wireframes under a strict Mobile-First approach, I mapped the full journey and ran usability tests to see where confidence broke down. The friction wasn’t the length of the form. It was uncertainty: users didn’t know what each service meant, what it would cost them in time, or whether they could change their mind.',
          'The turning point: the problem wasn’t “too many steps.” It was a lack of clarity and reassurance at the exact moments people had to commit.',
        ],
      },
      {
        kind: 'image',
        src: cupraBooking,
        fit: 'contain',
        caption:
          'Service selection step — model, mileage and workshop summary kept visible so the user never loses context while choosing.',
      },
      {
        kind: 'text',
        heading: 'Designing a clearer path',
        body: [
          'I restructured the flow around one principle: at every step, the user should know exactly where they are, what they’re choosing, and what comes next. The reservation summary stays pinned on the side so the decision context never disappears. Each service carries an inline explanation, so nobody has to guess.',
          'Because I design with front-end criteria from the start, I built the components to fit the existing CUPRA Design System — consistent tokens, predictable states, and a structure the engineering team could ship without re-interpreting my intent.',
        ],
      },
      {
        kind: 'text',
        heading: 'The outcome',
        body: [
          'The redesigned flow lifted online appointments by 35% and shipped across 47 markets. Beyond the number, it became a flow the support team had to explain far less — the screen now answered the questions people used to call about.',
          'It’s the kind of result I can defend in a room: a measurable lift, tied to specific design decisions, on a product that real drivers use.',
        ],
      },
    ],
    learned:
      'Simplifying a flow rarely means removing steps. It means making people feel guided through every one of them. And designing close to how it gets built is what turns a clean Figma file into a flow that actually ships — in 47 countries.',
  },
  {
    slug: 'cupra-faq-architecture',
    cover: cupraFaqs,
    coverFit: 'cover',
    client: 'SEAT · CUPRA',
    title: 'Rebuilding the FAQ so people actually find the answer',
    summary:
      'Redesigned the information architecture of CUPRA’s FAQ section around real UX and SEO criteria — so answers surface fast for users and for search.',
    tags: ['Information Architecture', 'UX', 'SEO'],
    metric: { value: 'IA', label: 'rebuilt around user intent' },
    meta: {
      role: 'Product Designer — SEAT & CUPRA web',
      team: 'PM, content, SEO, engineering',
      timeline: '2022 – 2023',
      scope: 'CUPRA global support content',
      tools: 'Figma, card sorting, IA mapping',
    },
    intro:
      'A FAQ only works if people find their answer in seconds. CUPRA’s electric-and-hybrid help content had grown into a long, flat list where related questions sat far apart and the structure fought the reader instead of helping them.',
    sections: [
      {
        kind: 'text',
        heading: 'The problem with a long list',
        body: [
          'FAQ pages quietly become dumping grounds. Every new question gets appended to the bottom, and over time the page stops being an answer engine and becomes a wall of text. That’s where CUPRA’s electric & hybrid FAQ had landed.',
          'Two audiences were being failed at once: the driver scanning for a single answer, and the search engine trying to understand what the page was actually about.',
        ],
      },
      {
        kind: 'image',
        src: cupraFaqs,
        fit: 'cover',
        caption:
          'Restructured FAQ — a persistent category rail on the left, grouped subcategories, and expandable questions that keep the page scannable.',
      },
      {
        kind: 'text',
        heading: 'Designing for two readers',
        body: [
          'I rebuilt the architecture around how people actually look for help: clear top-level categories (Electric & Hybrid, Charging, Connectivity, Care), grouped subcategories, and a persistent navigation rail so you always know where you are in the system.',
          'The same structure that helps a human scan also helps search engines parse the content — grouped, semantically clear, and crawlable. Good IA is one decision that serves UX and SEO at the same time.',
        ],
      },
      {
        kind: 'text',
        heading: 'Systems thinking, applied',
        body: [
          'I standardized the FAQ components inside the Design System — one accordion pattern, one category rail, consistent spacing and states — so the section can grow without decaying back into a flat list. New questions now have a home instead of a bottom.',
          'This is accessibility and order as a habit: keyboard-navigable accordions, predictable focus, and a structure that scales.',
        ],
      },
    ],
    learned:
      'Information architecture is invisible when it works. The win here wasn’t a flashy screen — it was a structure that lets a person and a search crawler reach the same answer through the same logic. Order is a feature.',
  },
  {
    slug: 'gencat-public-procedure',
    cover: gencatCertificat,
    coverFit: 'cover',
    client: 'Deloitte Digital · Public Administration',
    title: 'Lowering the barrier to a public digital procedure',
    summary:
      'A heuristic evaluation and redesign of a government online procedure — reworking the entry point and information architecture to reduce the friction of getting started.',
    tags: ['Heuristic Evaluation', 'IA', 'Accessibility'],
    metric: { value: 'Gov', label: 'public-sector procedure' },
    meta: {
      role: 'Studio Senior — Deloitte Digital',
      team: 'Design studio, public-sector stakeholders',
      timeline: '2023 – 2024',
      scope: 'Public administration digital procedure',
      tools: 'Heuristic evaluation, IA, prototyping',
    },
    intro:
      'Public-sector procedures carry a particular weight: people have no choice but to complete them, often under stress, sometimes with low digital confidence. When the entry point is confusing, citizens don’t bounce to a competitor — they get stuck, or they give up on something they legally need to do.',
    sections: [
      {
        kind: 'text',
        heading: 'The stakes of a government flow',
        body: [
          'This was a declaration procedure for public administration — the kind of task where a digital certificate, legal language, and strict requirements collide with a citizen who just needs to get it done. The barrier wasn’t one screen; it was the very first moment of access.',
          'My starting point was a heuristic evaluation of the existing flow: walking the journey against usability principles to locate exactly where friction, ambiguity, and dead ends lived.',
        ],
      },
      {
        kind: 'image',
        src: gencatCertificat,
        fit: 'cover',
        caption:
          'The entry modal — clarifying the choice between proceeding with a digital certificate or without it, before the user commits to a path.',
      },
      {
        kind: 'text',
        heading: 'Redesigning the entry point',
        body: [
          'I reworked the access and the information architecture so the procedure announces, up front, what it needs and what the user is about to do. The critical decision — proceed with a digital certificate or not — is surfaced clearly at the door, instead of trapping people in a flow they can’t finish without credentials they don’t have yet.',
          'In public services, clarity is not a nicety. It’s the difference between a citizen completing their obligation and abandoning it.',
        ],
      },
      {
        kind: 'text',
        heading: 'Accessibility as the baseline',
        body: [
          'A government service has to work for everyone — that’s not a target, it’s the requirement. Accessibility is my flag for a reason: it’s empathy turned into technique, designing so nobody is left outside. Auditing flows like this is exactly what pushed me into reading and understanding code, so I can design solutions that hold up when they’re actually built.',
        ],
      },
    ],
    learned:
      'Designing for public administration reset my definition of “user-friendly.” When the person on the other side has no alternative, every moment of confusion is a real cost. Clarity at the entry point is the most respectful thing you can design.',
  },
]

export const getCase = (slug) => cases.find((c) => c.slug === slug)
