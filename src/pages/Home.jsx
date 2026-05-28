import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cases } from '../data/cases.js'
import CaseCard from '../components/CaseCard.jsx'
import Reveal from '../components/Reveal.jsx'
import SocialLinks from '../components/SocialLinks.jsx'

const Arrow = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const pillars = [
  { num: '01', name: 'Design', text: 'Turning complexity into clarity.' },
  { num: '02', name: 'Systems', text: 'Scalable consistency through accessibility.' },
  { num: '03', name: 'Code', text: 'Designing with implementation in mind.' },
]

const skills = [
  'Design Systems', 'Accessibility · WCAG 2.2', 'UX Research', 'Information Architecture',
  'React', 'Figma', 'Front-end criteria', 'Prototyping', 'Usability Testing', 'Mobile-First',
]

const rotatingWords = ['consistent', 'scalable', 'accessible', 'inclusive']

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
            <Reveal className="about__body">
              <p>
                I’m a Product Designer focused on web platforms, Design Systems and accessibility.
                I work on complex B2C flows, turning friction into clear, usable experiences.
              </p>

              <p>
                My background in UX, visual design and front-end helps me bridge the gap between
                design and development. I don’t throw designs over the wall — I speak both languages,
                so the handoff becomes a conversation, not a translation.
              </p>
            </Reveal>

            <Reveal className="about__image" as="aside" delay={0.1}>
              <img src="/profile.jpg" alt="Portrait of Ramón Camacho" />
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

      {/* SKILLS */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee__track">
          <span>{skills.map((s) => <span key={s}>{s}</span>)}</span>
          <span>{skills.map((s) => <span key={s + '2'}>{s}</span>)}</span>
        </div>
      </div>

      {/* METHODOLOGY */}
      <section className="methodology">
        <div className="container">

          <Reveal className="section__head">
            <h2 className="h2">Methodology</h2>
            <p>
              Design, systems and implementation working together — not as separate phases,
              but as one continuous product process.
            </p>
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

        </div>
      </section>
    </div>
  )
}