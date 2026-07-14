import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { cases } from '../data/cases.js'
import { es } from '../i18n/es.js'
import { applyCase } from '../i18n/applyCase.js'
import CaseCard from '../components/CaseCard.jsx'
import Reveal from '../components/Reveal.jsx'
import SocialLinks from '../components/SocialLinks.jsx'
import CircuitSection from '../components/CircuitSection.jsx'
import HeroBackground from '../components/HeroBackground.jsx'
import { useLanguage } from '../contexts/LanguageContext.jsx'

const Arrow = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const heroItem = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
}

const E = { duration: 0.6, ease: [0.16, 1, 0.3, 1] }

export default function Home() {
  const [wordIndex, setWordIndex] = useState(0)
  const [marqueeVisible, setMarqueeVisible] = useState(false)
  const { lang, t } = useLanguage()
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const rotatingWords = t('hero.titleWords')
  const pillars       = t('pillars')
  const skills        = t('skills')

  // Reset word index when language changes so we don't go out of bounds
  useEffect(() => {
    setWordIndex(0)
  }, [lang])

  useEffect(() => {
    if (prefersReducedMotion) return
    const intervalId = setInterval(() => {
      setWordIndex((idx) => (idx + 1) % rotatingWords.length)
    }, 2200)
    return () => clearInterval(intervalId)
  }, [prefersReducedMotion, rotatingWords.length])

  useEffect(() => {
    setMarqueeVisible(true)
  }, [])

  // Build translated case data for cards
  const displayCases = cases.map((c) =>
    lang === 'es' ? applyCase(c.slug, c, es) : c
  )

  return (
    <div>
      <Helmet>
        <title>Ramón Camacho — Product Designer · WENREI DESIGN</title>
        <meta name="description" content="Product Designer focused on Design Systems, accessibility and front-end. B2C platforms, 5+ years. Based in Barcelona." />
        <meta property="og:title" content="Ramón Camacho — Product Designer · WENREI DESIGN" />
        <meta property="og:description" content="Product Designer who closes the gap between design and code." />
        <meta property="og:image" content="https://wenreidesign.com/og-image.jpg" />
        <meta property="og:url" content="https://wenreidesign.com" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* HERO */}
      <section className="hero">
        <HeroBackground />
        <div className="container hero__inner">
          <motion.span className="eyebrow" {...heroItem} transition={E}>
            {t('hero.eyebrow')}
          </motion.span>

          <motion.h1
            className="display hero__title"
            {...heroItem}
            transition={{ ...E, delay: 0.05 }}
          >
            {t('hero.titleStatic')}
            <br />

            <span className="hero__second-line">
              <span className="sr-only">{rotatingWords[0]}</span>
              {t('hero.titlePrefix')}
              <span style={{ whiteSpace: 'nowrap' }}>
                <span className="hero__rotating-word" aria-hidden="true">
                  <AnimatePresence mode="popLayout">
                    <motion.span
                      key={rotatingWords[wordIndex]}
                      initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={prefersReducedMotion ? {} : { opacity: 0, y: -18 }}
                      transition={{
                        duration: prefersReducedMotion ? 0 : 0.35,
                        ease: [0.16, 1, 0.3, 1]
                      }}
                    >
                      {rotatingWords[wordIndex]}
                    </motion.span>
                  </AnimatePresence>
                </span>
                {t('hero.titleEnd')}
              </span>
              <span className="hero__end-break">{t('hero.titleEndRest')}</span>
            </span>
          </motion.h1>

          <motion.p
            className="lead hero__lead hero__quote"
            {...heroItem}
            transition={{ ...E, delay: 0.12 }}
          >
            {t('hero.quote')}
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
                document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              {t('hero.ctaPrimary')}<span className="hero__cta-extra">{t('hero.ctaPrimaryExtra')}</span> <Arrow />
            </a>

            <a
              href={lang === 'es' ? '/CV_ProductDesigner_RamonCamacho_ES.pdf' : '/CV_ProductDesigner_RamonCamacho_EN.pdf'}
              target="_blank"
              rel="noreferrer"
              className="btn btn--ghost"
            >
              {t('hero.ctaSecondary')} <Arrow />
            </a>
          </motion.div>

          <SocialLinks />

        </div>
      </section>

      {/* WORK */}
      <section className="section" id="work" tabIndex="-1">
        <div className="container">
          <Reveal className="section__head">
            <h2 className="h2">{t('workSection.heading')}<span className="accent">.</span></h2>
          </Reveal>

          <div className="work__grid">
            {displayCases.map((c, i) => (
              <Reveal key={c.slug} delay={i * 0.08}>
                <CaseCard data={c} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section" id="about" tabIndex="-1">
        <div className="container">
          <Reveal className="section__head">
            <h2 className="h2">{t('about.heading')}</h2>
          </Reveal>

          <div className="about">
            <div className="about__image">
              <img src="/profile.jpg" alt="Portrait of Ramón Camacho" />
            </div>
            <Reveal className="about__body">
              <p dangerouslySetInnerHTML={{ __html: t('about.p1') }} />
              <p dangerouslySetInnerHTML={{ __html: t('about.p2') }} />
              <p dangerouslySetInnerHTML={{ __html: t('about.p3') }} />
              <p dangerouslySetInnerHTML={{ __html: t('about.p4') }} />

              <blockquote className="about__quote">
                <p>
                  {t('about.quote').split('\n').map((line, i, arr) => (
                    i < arr.length - 1
                      ? <span key={i}>{line}<br /></span>
                      : <span key={i}>{line}</span>
                  ))}
                </p>
              </blockquote>
            </Reveal>
          </div>

          {/* METHODOLOGY */}
          <section className="methodology" aria-labelledby="how-i-work-title">
            <Reveal className="section__head">
              <h3 className="about__subheading" id="how-i-work-title">
                {t('about.howIWorkTitle')}
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
      <div className="marquee" aria-hidden="true" style={{ opacity: marqueeVisible ? undefined : 0 }}>
        <div className="marquee__track">
          <span>{skills.map((s) => <span key={s}>{s}</span>)}</span>
          <span>{skills.map((s) => <span key={s + '2'}>{s}</span>)}</span>
        </div>
      </div>

    </div>
  )
}
