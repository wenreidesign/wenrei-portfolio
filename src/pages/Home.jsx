import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cases } from '../data/cases.js'
import CaseCard from '../components/CaseCard.jsx'
import Reveal from '../components/Reveal.jsx'
import SocialLinks from '../components/SocialLinks.jsx'
import CircuitSection from '../components/CircuitSection.jsx'

const Arrow = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const pillars = [
  { num: '01', name: 'Design', text: 'Understanding people and turning complex problems into intuitive experiences.' },
  { num: '02', name: 'Systems', text: 'Order, consistency and scale through Design Systems, accessibility and patterns.' },
  { num: '03', name: 'Code', text: 'Turning ideas into functional products that actually ship.' },
]

const skills = [
  'Design Systems', 'Accessibility · WCAG 2.2', 'UX Research', 'Information Architecture',
  'React', 'Figma', 'Front-end criteria', 'Prototyping', 'Usability Testing', 'Mobile-First',
]

const rotatingWords = ['consistent', 'scalable', 'accessible', 'inclusive']

const principles = [
  { b: 'I turn empathy into clarity', s: 'Understanding people is where the work starts.' },
  { b: 'Meeting requirements isn\'t designing well', s: 'Good design solves the problem, not just the brief.' },
  { b: 'Systems before screens', s: 'I design for what scales, not what looks good once.' },
  { b: 'Designed and built', s: 'I understand how my decisions land in code.' },
]

const heroItem = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
}

const E = { duration: 0.6, ease: [0.16, 1, 0.3, 1] }

export default function Home() {
  const [wordIndex, setWordIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setWordIndex((currentIndex) => (currentIndex + 1) % rotatingWords.length)
    }, 2200)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <div>
      {/* HERO */}
      <section className="hero">
        <div className="container hero__inner">
          <motion.span className="eyebrow" {...heroItem} transition={E}>
            Product Designer · Web platforms
          </motion.span>

          <motion.h1
            className="display hero__title"
            {...heroItem}
            transition={{ ...E, delay: 0.05 }}
          >
            I design and build
            <br />

            <span className="hero__second-line">
              <span className="hero__rotating-word">
                <AnimatePresence mode="popLayout">
                  <motion.span
                    key={rotatingWords[wordIndex]}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -18 }}
                    transition={{
                      duration: 0.35,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                  >
                    {rotatingWords[wordIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>

              {' '}products, end to end.
            </span>
          </motion.h1>

          <motion.p
            className="lead hero__lead hero__quote"
            {...heroItem}
            transition={{ ...E, delay: 0.12 }}
          >
            "I turn empathy into clarity, and clarity into real products."
          </motion.p>

          <motion.div
            className="hero__actions"
            {...heroItem}
            transition={{ ...E, delay: 0.18 }}
          >
            <a
              href="#work"
              className="btn btn--primary"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('work')?.scrollIntoView({
                  behavior: 'smooth'
                })
              }}
            >
              View selected work <Arrow />
            </a>

            <a
              href="/CV_ProductDesigner_RamonCamacho.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn btn--ghost"
            >
              Download CV <Arrow />
            </a>
          </motion.div>

          <SocialLinks />

        </div>
      </section>

      {/* WORK */}
      <section className="section" id="work">
        <div className="container">
          <Reveal className="section__head">
            <h2 className="h2">Selected work<span className="accent">.</span></h2>
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
          </Reveal>

          <div className="about">
            <aside className="about__image">
              <img src="/profile.jpg" alt="Portrait of Ramón Camacho" />
            </aside>
            <Reveal className="about__body">
              <p>
                I'm a Product Designer focused on web apps and B2C platforms. I work with{' '}
                <strong>Design Systems</strong> and apply <strong>accessibility</strong> and{' '}
                <strong>front-end criteria</strong> in every decision I make.
              </p>

              <p>
                I come from a visual and motion design background, where everything was decided by
                opinion: <em>"make it bigger, change the color, I'm not feeling it"</em>. <br />That wore me out.
              </p>

              <p>
                In product, the rules change: if a user can't complete a flow, that's not opinion,
                it's something you didn't solve well. So before I design, <br /><strong>I'm a user first</strong>.
              </p>

              <p>
                Over the past year I've gone deep into <strong>Design Systems</strong> and{' '}
                <strong>Accessibility</strong>. Auditing sites pushed me into code for real. I now also
                work as a <br /><strong>Full Stack developer</strong>, and I cut friction with engineering before
                it happens.
              </p>

              <blockquote className="about__quote">
                <strong>
                  Understanding what I design.
                  <br />
                  Building what I understand.
                </strong>
              </blockquote>

            </Reveal>
          </div>



          {/* METHODOLOGY */}
          <section className="methodology" aria-labelledby="how-i-work-title">
            <Reveal className="section__head">
              <h3 className="about__subheading" id="how-i-work-title">
                How I Work
              </h3>
            </Reveal>

            <Reveal className="methodology__cards">
              {pillars.map((p) => (
                <div className="pillar" key={p.num}>
                  <span className="pillar__num">{p.num}</span>
                  <h3 className="h3">{p.name}</h3>
                  <p>{p.text}</p>
                </div>
              ))}
            </Reveal>
          </section>

        </div>
      </section>

      <CircuitSection />

      {/* SKILLS */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee__track">
          <span>{skills.map((s) => <span key={s}>{s}</span>)}</span>
          <span>{skills.map((s) => <span key={s + '2'}>{s}</span>)}</span>
        </div>
      </div>

    </div>
  )
}



