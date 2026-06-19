import cupraBooking from '../assets/case-cupra-booking.webp'
import cupraFaqs from '../assets/case-cupra-faqs.webp'
import gencatCertificat from '../assets/case-gencat-certificat.webp'
import cupraVideo from '../assets/case-cupra-prototype-desktop.mov'
import cupraResponsive from '../assets/case-cupra-responsive.mov'
import cupra01Map from '../assets/case-cupra-01-map.png'
import cupra02Identify from '../assets/case-cupra-02-identify.png'
import cupra03Services from '../assets/case-cupra-03-services.png'
import cupra04Date from '../assets/case-cupra-04-date.png'
import cupra05Contact from '../assets/case-cupra-05-contact.png'
import cupra06Confirm from '../assets/case-cupra-06-confirm.png'
import benchmark from '../assets/Benchmark.jpg'
import v1 from '../assets/V1.jpg'
import v2 from '../assets/V2.jpg'
import v3 from '../assets/V3.png'
import faqAntes from '../assets/faq-antes.jpg'
import faqDespues from '../assets/faq-despues.jpg'
import faqSubcategoryImage from '../assets/faq-subcategory-image.jpg'
import faqArchitecture from '../assets/faq_before_after_architecture.svg'

export const cases = [
  {
    slug: 'cupra-book-an-appointment',
    cover: cupraBooking,
    coverFit: 'contain',
    client: 'SEAT · CUPRA',
    cardTitle: 'Drivers had only one way to book a service: the phone',
    articleTitle: 'Booking a car service used to mean picking up the phone.',
    summary: 'How I designed the first digital way to book a car service for SEAT and CUPRA, now live in 47 countries.',
    tags: ['UX Research', 'UI Design', 'Design System', 'Prototyping'],
    metric: { value: '+35%', label: 'online appointments' },
    meta: {
      role: 'Product Designer — SEAT & CUPRA web',
      team: 'SEAT Web & Private Area',
      timeline: '6–9 months',
      scope: 'Deployed across 47 countries',
      tools: 'Figma, Design System, usability testing',
    },
    intro: 'For SEAT and CUPRA drivers, scheduling maintenance meant calling the workshop in a world where everything else already happened online. I designed the digital flow that changed that.',
    sections: [
      {
        kind: 'text',
        heading: 'It started with a phone call.',
        body: [
          'SEAT and CUPRA had no digital way to book a workshop appointment. Every service, even a simple oil change, started with a phone call. For users it was slow and frustrating; for workshops, hard to manage.',
          'The opportunity was clear: not just to digitize the call, but to design something better than it. Two product goals were set from day one:',
        ],
      },
      {
        kind: 'callout',
        variant: 'objective',
        items: [
          '**Increase user retention**',
          '**Deliver a faster response time**',
        ],
      },
      {
        kind: 'callout',
        variant: 'question',
        text: 'How might we let users book a workshop appointment quickly and with zero friction?',
      },
      {
        kind: 'text',
        heading: 'Then a number changed how I saw the whole project.',
        body: [
          'I started from the data the Strategy team had gathered and benchmarked how other automotive brands solved the same problem, studying their information architecture, user flows and UX patterns.',
        ],
      },
      {
        kind: 'image',
        src: benchmark,
        fit: 'cover',
        caption: 'Benchmarking other automotive brands — comparing information architecture, flows and UX patterns.',
        alt: 'Benchmark comparison of automotive booking flows',
      },
      {
        kind: 'text',
        body: [
          'One finding reframed the whole project:',
        ],
      },
      {
        kind: 'callout',
        variant: 'insight',
        label: 'Key finding',
        value: '50%',
        text: 'of service calls were just to book basic, recurring services like an oil change or a routine inspection.',
      },
      {
        kind: 'version-compare',
        versions: [
          {
            label: 'V1',
            src: v1,
            alt: 'First version of the booking flow',
            caption: 'Too long. 30+ options with no clear hierarchy.',
          },
          {
            label: 'V2',
            src: v2,
            alt: 'Second version of the booking flow',
            caption: 'Better structure, but still too many decisions.',
          },
          {
            label: 'V3',
            src: v3,
            alt: 'Third version of the booking flow',
            caption: 'Simplified to match the real need. Open field for everything else.',
          },
        ],
      },
      {
        kind: 'text',
        heading: 'So I started drawing a clearer path.',
        body: [
          'To stay consistent with the existing digital ecosystem, I built the flow on top of the existing **"Find a Dealer"** component, and structured it as a simple linear journey:',
          '**1. Select services**',
          '**2. Pick a date and time**',
          '**3. Confirm personal details**',
          'Because over half of requests were basic services, I deliberately **avoided choice overload**: short, clear default options up front, with the option to add detail for users who needed it.',
          'I also had to define the flow for new and unregistered users, which originally leaned too heavily on the Private Area. It needed to stand on its own without losing the connection to the wider ecosystem. That connection also served a business goal the team had set from the start:',
        ],
      },
      {
        kind: 'callout',
        variant: 'question',
        text: 'Drive Private Area adoption by offering personalized services.',
      },
      {
        kind: 'video',
        src: cupraVideo,
        label: 'The flow — live prototype',
      },
      {
        kind: 'text',
        heading: "The first version didn't work. The team and I argued about a modal.",
        body: [
          "My instinct was clear: **a modal is not the right container** for a flow this detailed. It limits navigation, penalizes mobile, has serious accessibility concerns and doesn't persist state. I said so.",
          "The final call went the other way. Dev defined that the system architecture required a modal, and the flow had to adapt to that constraint. It wasn't the outcome I defended, but it's the one I executed to the fullest.",
          "Two concrete things I took from it: don't design at volume until dev has defined their structure, and test earlier. Several solutions came out of testing when there was already little room to improvise.",
        ],
      },
      {
        kind: 'callout',
        variant: 'takeaway',
        label: 'What I learned',
        text: 'Design and development need to align on architecture before design moves forward. Otherwise, you work twice.',
      },
      {
        kind: 'text',
        heading: 'In the end, the flow had four moments.',
        body: [
          '**1. Identify your vehicle.** The user enters their license plate, or picks model and year, to unlock services tailored to their car.',
        ],
      },
      {
        kind: 'image',
        src: cupra02Identify,
        fit: 'cover',
        caption: 'License plate or model and year — services unlock based on the specific vehicle.',
        alt: 'Vehicle identification step with license plate and model selection',
      },
      {
        kind: 'text',
        body: [
          '**2. Select services (and add-ons).** Clear default options, with a free-text field to add specifics.',
        ],
      },
      {
        kind: 'image',
        src: cupra03Services,
        fit: 'cover',
        caption: 'Short, clear defaults up front. The free-text field handles anything outside the standard list.',
        alt: 'Service selection step showing available maintenance options',
      },
      {
        kind: 'text',
        body: [
          '**3. Date and time.** An intuitive calendar with dynamic slots, grouped into blocks like morning and afternoon. Real-time availability only.',
        ],
      },
      {
        kind: 'image',
        src: cupra04Date,
        fit: 'cover',
        caption: 'Dynamic slots by time of day. Only real-time availability is shown — no false expectations.',
        alt: 'Date and time picker with morning and afternoon slot groups',
      },
      {
        kind: 'text',
        body: [
          '**4. Confirm and book.** A real-time summary lets users verify everything before finalizing, with GDPR visibility built in.',
        ],
      },
      {
        kind: 'image',
        src: cupra05Contact,
        fit: 'cover',
        caption: 'Personal details — pre-filled for logged-in users, GDPR visible throughout.',
        alt: 'Contact details form pre-filled for registered users',
      },
      {
        kind: 'video',
        src: cupraResponsive,
        intro: 'The flow adapts cleanly across Desktop XL/L, Tablet M and Mobile S.',
      },
      {
        kind: 'stat',
        heading: 'Seventeen people put it to the test.',
        companion: 'All of them completed the core tasks. Where I detected friction, incomplete data or invalid selections, the solution was clear inline tooltips instead of modals, to avoid confusing overlays.',
        items: [
          { value: '17', label: 'users tested the flow before launch' },
        ],
      },
      {
        kind: 'callout',
        variant: 'quote',
        text: 'I can now schedule my services in minutes, no calls needed.',
      },
      {
        kind: 'callout',
        variant: 'quote',
        text: 'The experience was very clear and gave me confidence in the process.',
      },
      {
        kind: 'text',
        heading: 'And then the numbers came in.',
        body: [
          'Beyond the numbers, it became a flow the support team had to explain far less. The screen now answered the questions people used to call about.',
        ],
      },
      {
        kind: 'stat',
        dark: true,
        items: [
          { value: '+35%', label: 'increase in online appointments in the first 3 months' },
          { value: '+20%', label: 'more users managing appointments through the Private Area' },
          { value: '47', label: 'countries where the design is live today' },
        ],
      },
      {
        kind: 'image',
        src: cupra06Confirm,
        fit: 'cover',
        caption: 'Full summary before confirming. Everything visible, one tap to book.',
        alt: 'Booking confirmation screen with full appointment summary',
      },
      {
        kind: 'livelinks',
        links: [
          { label: 'See it live on SEAT', url: 'https://www.seat.es/' },
          { label: 'See it live on CUPRA', url: 'https://www.cupra.com/es-es/' },
        ],
      },
    ],
    learned: "This was my first long, complex project as a product designer. It scared me and it excited me at the same time. I discovered how much there is to this work: the research, the systems, the constraints, the people. That's what made me want to keep solving problems for real users.",
    conclusion: null,
  },
  {
    slug: 'cupra-faq-architecture',
    cover: cupraFaqs,
    coverFit: 'cover',
    client: 'SEAT · CUPRA',
    cardTitle: "You had a question. Google couldn't take you to the answer.",
    articleTitle: "You had a question about your car. Google couldn't take you to the answer.",
    summary: "Restructuring SEAT and CUPRA's FAQs so every topic became findable in search and easy to navigate.",
    tags: ['Information Architecture', 'SEO', 'UX Design', 'Design System'],
    meta: {
      role: 'Product Designer — SEAT & CUPRA web',
      team: 'SEAT Web',
      timeline: '3 months',
      scope: 'SEAT & CUPRA global support content',
      tools: 'Figma, Adobe Photoshop',
    },
    intro: "The old FAQ pages lived as one big block with no real structure, so search engines couldn't surface specific topics and drivers couldn't find what they needed. I redesigned the FAQs into a clear, scalable system where every topic is findable.",
    sections: [
      {
        kind: 'text',
        heading: 'Everything in one place. Nothing findable.',
        body: [
          "SEAT and CUPRA's FAQ content lived on a single, loosely structured page. Everything piled up in one place: charging questions next to warranty questions next to connectivity questions, with no dedicated pages and no clear way to navigate.",
          "That created problems on two fronts at once: search engines couldn't rank the content well, and people landing on it struggled to find the specific answer they came for.",
        ],
      },
      {
        kind: 'callout',
        variant: 'question',
        text: 'How might we restructure the FAQs so they\'re easy to find in search and easy to navigate once you\'re there?',
      },
      {
        kind: 'text',
        heading: 'The same structure failing in three different ways.',
        body: [
          '**Discoverability (SEO).** With everything on one page, search engines had nothing specific to index. Someone Googling a precise question about CUPRA Connect or charging had little chance of landing directly on that answer.',
          '**Navigation.** Inside one long repository, users had to scroll or hunt to find their topic. There was no persistent menu, no sense of where you were.',
          '**Scalability.** The old setup didn\'t accommodate new categories or subcategories cleanly. Adding content meant longer, more cluttered pages and a growing maintenance headache.',
        ],
      },
      {
        kind: 'image',
        src: faqArchitecture,
        fit: 'contain',
        bg: '#ffffff',
        caption: 'Before: one URL, everything mixed. After: each category and subcategory with its own indexable page.',
        alt: 'Architecture diagram comparing flat FAQ structure before redesign with hierarchical structure after',
      },
      {
        kind: 'before-after',
        before: {
          src: faqAntes,
          caption: 'Before: categories collapsed, no hierarchy visible. The user has no sense of where they are.',
          alt: 'Old FAQ structure with all categories collapsed and no subcategory hierarchy',
        },
        after: {
          src: faqDespues,
          caption: 'After: active category expanded, subcategories visible. Location is always clear.',
          alt: 'Redesigned FAQ with active category expanded showing subcategory hierarchy',
        },
      },
      {
        kind: 'text',
        heading: 'Structure first. Everything else follows.',
        body: [
          'I restructured the FAQs into a clear hierarchy of categories and subcategories, where each level has its own dedicated, indexable page.',
          '**For discoverability:** every category and subcategory gets its own URL (e.g. seat.com/faqs/models/ateca), so search engines can index and rank specific topics instead of one undifferentiated page.',
          '**For navigation:** a persistent menu, visible across every FAQ page, with categories and subcategories as clickable links. Wherever you are, you can see the full structure and jump anywhere.',
          '**For scalability:** the structure is modular. New categories, subcategories and questions can be added and reordered without breaking the layout or cluttering the page.',
        ],
      },
      {
        kind: 'image',
        src: faqSubcategoryImage,
        fit: 'contain',
        naturalHeight: true,
        caption: 'An answer expanded: CTA linking to the relevant page, video support for technical topics, and "Was this answer helpful?" to signal what content works.',
        alt: 'FAQ answer expanded showing CTA button, embedded video and helpful feedback widget',
      },
      {
        kind: 'text',
        heading: 'Small additions, real difference.',
        body: [
          '**CTAs inside answers:** a question about a service can link straight to the relevant page or booking flow, turning a passive answer into a next step.',
          '**Images and video in answers:** visual support for technical topics like how a plug-in hybrid charges, where a picture or clip explains faster than text.',
          '**"Was this answer helpful?"** A simple yes/no on each answer, giving the team a signal on which content works and which needs revisiting.',
        ],
      },
      {
        kind: 'text',
        heading: 'What stayed out of scope',
        body: [
          'A FAQ search engine was on the wishlist but fell outside this project. It needed a technical spike to assess feasibility, so we flagged it as a clear next step rather than forcing it in.',
        ],
      },
      {
        kind: 'livelinks',
        links: [
          { label: 'See it live on CUPRA', url: 'https://www.cupraofficial.com/faqs' },
          { label: 'See it live on SEAT', url: 'https://www.seat.com/faqs' },
        ],
      },
    ],
    learned: "The biggest takeaway was how much information architecture and SEO depend on each other. A clean structure isn't just tidier: it's what makes content discoverable in the first place. I'd also push earlier for access to post-launch metrics. Designing toward goals is right, but being able to measure whether the structure actually moved discoverability would close the loop and make the next iteration sharper.",
  },
  {
    slug: 'gencat-public-procedure',
    cover: gencatCertificat,
    coverFit: 'cover',
    client: 'Public Administration',
    cardTitle: 'Citizens gave up before they could file a simple form',
    articleTitle: 'Citizens had to understand legal language before they could even start the form.',
    summary: 'Redesigning a government service so the identification maze stopped blocking people from even starting.',
    tags: ['Heuristic Evaluation', 'Service design', 'Progressive disclosure', 'Prototyping'],
    meta: {
      role: 'Studio Senior — Deloitte Digital',
      team: 'Design studio, public-sector stakeholders',
      timeline: '2023 – 2024',
      scope: 'Public administration digital procedure',
      tools: 'Heuristic evaluation, IA, prototyping',
    },
    intro: "Public-sector procedures carry a particular weight: people have no choice but to complete them, often under stress, sometimes with low digital confidence. When the entry point is confusing, citizens don't bounce to a competitor — they get stuck, or they give up on something they legally need to do.",
    sections: [
      {
        kind: 'text',
        heading: 'The stakes of a government flow',
        body: [
          'This was a declaration procedure for public administration — the kind of task where a digital certificate, legal language, and strict requirements collide with a citizen who just needs to get it done. The barrier was not one screen; it was the very first moment of access.',
          'My starting point was a heuristic evaluation of the existing flow: walking the journey against usability principles to locate exactly where friction, ambiguity, and dead ends lived.',
        ],
      },
      {
        kind: 'image',
        src: gencatCertificat,
        fit: 'cover',
        caption: 'The entry modal — clarifying the choice between proceeding with a digital certificate or without it, before the user commits to a path.',
        alt: 'Government procedure entry modal showing digital certificate and alternative access options',
      },
      {
        kind: 'text',
        heading: 'Redesigning the entry point',
        body: [
          'I reworked the access and the information architecture so the procedure announces, up front, what it needs and what the user is about to do. The critical decision — proceed with a digital certificate or not — is surfaced clearly at the door, instead of trapping people in a flow they cannot finish without credentials they do not have yet.',
          'In public services, clarity is not a nicety. It is the difference between a citizen completing their obligation and abandoning it.',
        ],
      },
      {
        kind: 'text',
        heading: 'Accessibility as the baseline',
        body: [
          "A government service has to work for everyone — that's not a target, it's the requirement. Accessibility is my flag for a reason: it's empathy turned into technique, designing so nobody is left outside. Auditing flows like this is exactly what pushed me into reading and understanding code, so I can design solutions that hold up when they're actually built.",
        ],
      },
    ],
    learned: "Designing for public administration reset my definition of user-friendly. When the person on the other side has no alternative, every moment of confusion is a real cost. Clarity at the entry point is the most respectful thing you can design.",
  },
]

export const getCase = (slug) => cases.find((c) => c.slug === slug)
