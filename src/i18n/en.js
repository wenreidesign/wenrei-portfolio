// src/i18n/en.js — English UI strings (case content stays in cases.js)

export const en = {

  nav: {
    work:      'Work',
    about:     'About',
    contact:   'Contact',
    langLabel: 'Language switcher',
  },

  footer: {
    cta:            'Let\'s build something <span class="accent">clear.</span>',
    ctaBtn:         'Start a conversation',
    tagline:        'Designed with clarity. Built with systems. Accessible for everyone. Shipped by one.',
    exploreTitle:   'Explore',
    elsewhereTitle: 'Elsewhere',
    copyright:      'Designed & built end to end.',
  },

  notFound: {
    body: 'This page didn\'t make it past the handoff.',
    btn:  'Back home',
  },

  hero: {
    eyebrow:      'Ramón Camacho · Product Designer · Web platforms',
    titleStatic:   'I design and build',
    titlePrefix:   '',
    titleWords:    ['consistent', 'scalable', 'accessible', 'inclusive'],
    titleEnd:      ' products,',
    titleEndRest:  ' end to end.',
    quote:        '"I turn empathy into clarity, and clarity into real products."',
    ctaPrimary:      'View selected work',
    ctaPrimaryExtra: '',
    ctaSecondary: 'Download CV',
  },

  workSection: {
    heading: 'Selected work',
  },

  about: {
    heading:       'About',
    p1:            'I\'m <strong>Ramón Camacho</strong>, a Product Designer focused on web apps and B2C platforms. I work with <strong>Design Systems</strong> and apply <strong>accessibility</strong> and <strong>front-end criteria</strong> in every decision I make.',
    p2:            'I come from a visual and motion design background, where everything was decided by opinion: <em>"make it bigger, change the color, I\'m not feeling it"</em>. That wore me out.',
    p3:            'In product, the rules change: if a user can\'t complete a flow, that\'s not opinion, it\'s something you didn\'t solve well. So before I design, <strong>I\'m a user first</strong>.',
    p4:            'Over the past year I\'ve gone deep into <strong>Design Systems</strong> and <strong>Accessibility</strong>. Auditing sites pushed me into code for real. I now also work as a <strong>Full Stack developer</strong>, and I cut friction with engineering before it happens.',
    quote:         'Understanding what I design.\nBuilding what I understand.',
    howIWorkTitle: 'How I Work',
  },

  pillars: [
    { num: '01', name: 'Design',  text: 'Understanding people and turning complex problems into intuitive experiences.' },
    { num: '02', name: 'Systems', text: 'Order, consistency and scale through Design Systems, accessibility and patterns.' },
    { num: '03', name: 'Code',    text: 'Turning ideas into functional products that actually ship.' },
  ],

  circuit: {
    heading: 'What connects my work',
    nodes: {
      design:        { label: 'Design',        sub: 'Research · UX' },
      systems:       { label: 'Systems',        sub: 'Scale · Consistency' },
      accessibility: { label: 'Accessibility',  sub: 'WCAG · Auditing' },
      code:          { label: 'Code',           sub: 'React · Architecture' },
      product:       { label: 'PRODUCT',        sub: 'Impactful · Usable · Scalable' },
    },
  },

  skills: [
    'Design Systems', 'Accessibility · WCAG 2.2', 'UX Research', 'Information Architecture',
    'React', 'Figma', 'Front-end criteria', 'Prototyping', 'Usability Testing', 'Mobile-First',
  ],

  caseCard: {
    cta: 'View case',
  },

  caseStudy: {
    back:         'Back to work',
    metaRole:     'Role',
    metaTeam:     'Team',
    metaTimeline: 'Timeline',
    metaScope:    'Scope',
    metaTools:    'Tools',
    learnedTitle: 'What I took away',
    allWork:      'All work',
    nextCase:     'Next case',
    beforeTag:    'Before',
    afterTag:     'After',
  },
}
