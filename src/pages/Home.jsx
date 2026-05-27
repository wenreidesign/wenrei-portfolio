import { motion } from 'framer-motion'
import { cases } from '../data/cases.js'
import CaseCard from '../components/CaseCard.jsx'
import Reveal from '../components/Reveal.jsx'

const Arrow = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const pillars = [
  { num: '01', name: 'Design', text: 'Understand people, and turn complex problems into intuitive experiences.' },
  { num: '02', name: 'Systems', text: 'Create order, consistency and scale through design systems, accessibility and governance.' },
  { num: '03', name: 'Code', text: 'Turn concepts into real, functional products — and speak the same language as engineering.' },
]

const skills = [
  'Design Systems', 'Accessibility · WCAG 2.2', 'UX Research', 'Information Architecture',
  'React', 'Figma', 'Front-end criteria', 'Prototyping', 'Usability Testing', 'Mobile-First',
]

const principles = [
  { b: 'Clarity over complexity', s: 'If it doesn’t add, it goes.' },
  { b: 'Accessibility by default', s: 'Empathy turned into technique.' },
  { b: 'Systems create freedom', s: 'Order is what lets things scale.' },
  { b: 'Build what matters', s: 'Design knowing how it ships.' },
]

const heroItem = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
}
const E = { duration: 0.6, ease: [0.16, 1, 0.3, 1] }

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="hero">
        <div className="hero__glow" />
        <div className="container hero__inner">
          <motion.span className="eyebrow" {...heroItem} transition={E}>
            Product Designer · Web platforms
          </motion.span>

          <motion.h1 className="display" {...heroItem} transition={{ ...E, delay: 0.05 }}>
            I design <span className="accent">clarity</span><br />and build the reality.
          </motion.h1>

          <motion.p className="lead hero__lead" {...heroItem} transition={{ ...E, delay: 0.12 }}>
            I’m Ramón — a Product Designer who closes the gap between design and code. I work
            where Design Systems, accessibility and front-end meet, so what I design is what
            actually ships.
          </motion.p>

          <motion.div className="hero__actions" {...heroItem} transition={{ ...E, delay: 0.18 }}>
            <a href="#work" className="btn btn--primary" onClick={(e) => { e.preventDefault(); document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' }) }}>
              View selected work <Arrow />
            </a>
            <a href="#about" className="btn btn--ghost" onClick={(e) => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }) }}>
              About me <Arrow />
            </a>
          </motion.div>

          <motion.div className="hero__pillars" {...heroItem} transition={{ ...E, delay: 0.24 }}>
            {pillars.map((p) => (
              <div className="pillar" key={p.num}>
                <span className="pillar__num">{p.num}</span>
                <h3 className="h3">{p.name}</h3>
                <p>{p.text}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="marquee" aria-hidden="true">
          <div className="marquee__track">
            <span>{skills.map((s) => <span key={s}>{s}</span>)}</span>
            <span>{skills.map((s) => <span key={s + '2'}>{s}</span>)}</span>
          </div>
        </div>
      </section>

      {/* WORK */}
      <section className="section" id="work">
        <div className="container">
          <Reveal className="section__head">
            <h2 className="h2">Selected work</h2>
            <p>Three products where design, systems and front-end criteria came together — real users, real constraints, real outcomes.</p>
          </Reveal>
          <div className="work__grid">
            {cases.map((c, i) => (
              <Reveal key={c.slug} delay={i * 0.08}>
                <CaseCard data={c} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section" id="about">
        <div className="container">
          <Reveal className="section__head">
            <h2 className="h2">About</h2>
            <p>The short version: I design products, and I understand how they’re built.</p>
          </Reveal>

          <div className="about">
            <Reveal className="about__body">
              <p>
                I’m a Product Designer with a focus on web platforms, specialized in <strong>Design
                Systems</strong> and <strong>accessibility</strong>. I design complex flows on B2C
                platforms — taking something complicated and making it something anyone can finish
                without friction.
              </p>
              <p>
                I came from a visual and motion background, but what pulled me in was understanding
                how people actually use what we build. That led me to UX, then to product design —
                and then accessibility led me into <strong>code</strong>. Auditing real interfaces
                forced me to read and understand the front-end, and now I design knowing what can be
                built and where the friction lives.
              </p>
              <p>
                That’s my difference: I don’t throw designs over the wall to engineering. I speak
                both languages, so the handoff is a conversation, not a translation. I’ve worked in
                consultancies and agencies for brands like <strong>SEAT, CUPRA</strong> and clients
                at <strong>Deloitte Digital</strong> — on real products, with real deadlines and
                real technical limits.
              </p>
              <p>
                Accessibility isn’t an add-on for me. It’s empathy made technical: designing so
                nobody is left out. The full stack — design, systems, code — isn’t there to show
                off. It’s there to serve the person on the other side of the screen.
              </p>
            </Reveal>

            <Reveal className="about__aside" as="aside" delay={0.1}>
              <h4>What I bring</h4>
              <ul className="stacklist">
                <li><span>Discipline</span><span>Product Design</span></li>
                <li><span>Specialty</span><span>Design Systems</span></li>
                <li><span>Standard</span><span>WCAG 2.2 · AA/AAA</span></li>
                <li><span>Front-end</span><span>React · JS · CSS</span></li>
                <li><span>Experience</span><span>5+ years</span></li>
                <li><span>Mode</span><span>Remote</span></li>
                <li><span>Based in</span><span>Barcelona</span></li>
              </ul>
            </Reveal>
          </div>

          <Reveal className="principles">
            {principles.map((p) => (
              <div className="principle" key={p.b}>
                <b>{p.b}</b>
                <span>{p.s}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>
    </div>
  )
}
