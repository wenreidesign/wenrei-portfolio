import { Fragment } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { getCase, cases } from '../data/cases.js'
import { es } from '../i18n/es.js'
import { applyCase } from '../i18n/applyCase.js'
import { useLanguage } from '../contexts/LanguageContext.jsx'

const Arrow = ({ left }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={left ? { transform: 'rotate(180deg)' } : null} aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

function renderMetricValue(val) {
  const m = val.match(/^([+]?)(\d+[a-z]*)([%+]?)$/i)
  if (!m) return val
  const [, pre, core, suf] = m
  return (
    <>
      {pre && <sup className="metric-sym">{pre}</sup>}
      {core}
      {suf && <sup className="metric-sym">{suf}</sup>}
    </>
  )
}

function renderText(text) {
  const parts = text.split(/(\*\*.*?\*\*|\*.*?\*)/g)
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i}>{part.slice(2, -2)}</strong>
    }
    if (part.startsWith('*') && part.endsWith('*')) {
      return <em key={i}>{part.slice(1, -1)}</em>
    }
    return part
  })
}

export default function CaseStudy() {
  const { slug } = useParams()
  const { lang, t } = useLanguage()

  const enData = getCase(slug)
  if (!enData) return <Navigate to="/404" replace />

  const data = lang === 'es' ? applyCase(slug, enData, es) : enData

  const idx  = cases.findIndex((c) => c.slug === slug)
  const next = cases[(idx + 1) % cases.length]

  const nextDisplay = lang === 'es' ? applyCase(next.slug, next, es) : next

  return (
    <motion.article
      className="case"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
    >
      <Helmet>
        <title>{data.cardTitle} · WENREI DESIGN</title>
        <meta name="description" content={data.summary} />
        <meta property="og:title" content={`${data.cardTitle} · WENREI DESIGN`} />
        <meta property="og:description" content={data.summary} />
        <meta property="og:image" content="https://wenreidesign.com/og-image.jpg" />
        <meta property="og:url" content={`https://wenreidesign.com/work/${data.slug}`} />
      </Helmet>

      <div className="container">
        <Link to="/#work" className="case__back"><Arrow left /> {t('caseStudy.back')}</Link>
        <span className="case__client">{data.client}</span>
        <h1 className="display case__articleTitle">{data.articleTitle}</h1>
        <p className="lead case__intro">{data.intro}</p>
        <dl className="case__meta">
          <div><dt>{t('caseStudy.metaRole')}</dt><dd>{data.meta.role}</dd></div>
          <div><dt>{t('caseStudy.metaTeam')}</dt><dd>{data.meta.team}</dd></div>
          <div><dt>{t('caseStudy.metaTimeline')}</dt><dd>{data.meta.timeline}</dd></div>
          <div><dt>{t('caseStudy.metaScope')}</dt><dd>{data.meta.scope}</dd></div>
        </dl>
        <div className="case__hero-media">
          <img
            src={data.cover}
            alt={`${data.articleTitle} — cover`}
            className={data.coverFit === 'contain' ? 'fit-contain' : 'fit-cover'}
          />
        </div>
      </div>

      {data.sections.map((s, i) => {

        if (s.kind === 'image') {
          return (
            <div className="container" key={i}>
              <figure className="case__figure">
                <div
                  className={`case__figure-frame${s.naturalHeight ? ' case__figure-frame--natural' : ''}`}
                  style={s.bg ? { background: s.bg } : undefined}
                >
                  <img src={s.src} alt={s.alt || s.caption} className={s.fit === 'contain' ? 'fit-contain' : 'fit-cover'} loading="lazy" />
                </div>
                {s.caption && <figcaption>{s.caption}</figcaption>}
              </figure>
            </div>
          )
        }

        if (s.kind === 'gallery') {
          if (!s.images) return null
          return (
            <div className="container" key={i}>
              {s.label && <span className="case__gallery-label">{s.label}</span>}
              <div className="case__gallery-grid">
                {s.images.map((img, j) => (
                  <figure className="case__gallery-grid-item" key={j}>
                    <div className="case__figure-frame">
                      <img
                        src={img.src}
                        alt={img.alt || img.caption || ''}
                        loading="lazy"
                        className="fit-cover"
                      />
                    </div>
                    {img.caption && <figcaption>{img.caption}</figcaption>}
                  </figure>
                ))}
              </div>
              {s.caption && <span className="case__gallery-caption">{s.caption}</span>}
            </div>
          )
        }

        if (s.kind === 'version-compare') {
          return (
            <div className="container" key={i}>
              <div className="case__version-compare">
                {s.versions.map((v, j) => (
                  <Fragment key={j}>
                    {j > 0 && <div className="case__version-compare-divider" aria-hidden="true" />}
                    <div className="case__version-compare-content">
                      <span className="case__version-compare-label">{v.label}</span>
                      <div className="case__figure-frame">
                        <img src={v.src} alt={v.alt || v.caption} loading="lazy" />
                      </div>
                      {v.caption && <p className="case__version-compare-caption">{v.caption}</p>}
                    </div>
                  </Fragment>
                ))}
              </div>
            </div>
          )
        }

        if (s.kind === 'before-after') {
          return (
            <div className="container" key={i}>
              <div className="case__before-after">
                {[
                  { ...s.before, tag: t('caseStudy.beforeTag') },
                  { ...s.after,  tag: t('caseStudy.afterTag') },
                ].map((item, j) => (
                  <figure className="case__before-after-item" key={j}>
                    <span className="case__before-after-tag">{item.tag}</span>
                    <div className="case__figure-frame">
                      <img src={item.src} alt={item.alt || item.caption} loading="lazy" className="fit-cover" />
                    </div>
                    {item.caption && <figcaption>{item.caption}</figcaption>}
                  </figure>
                ))}
              </div>
            </div>
          )
        }

        if (s.kind === 'figma-embed') {
          const iframeTitle = s.label
            ? `Interactive prototype: ${s.label}`
            : 'Interactive prototype'
          return (
            <div className="case__figma-embed" key={i}>
              {s.label && <span className="case__gallery-label">{s.label}</span>}
              <iframe src={s.src} allowFullScreen loading="lazy" title={iframeTitle} />
              {s.caption && <span className="case__gallery-caption">{s.caption}</span>}
            </div>
          )
        }

        if (s.kind === 'video') {
          const videoLabel = s.label || s.intro || 'Product design demo video'
          return (
            <div className="case__figma-embed" key={i}>
              {s.label && <span className="case__gallery-label">{s.label}</span>}
              {s.intro  && <p className="case__video-intro">{s.intro}</p>}
              <video
                src={s.src}
                autoPlay
                loop
                muted
                playsInline
                title={videoLabel}
                aria-label={videoLabel}
              />
              {!s.label && !s.intro && (
                <p className="sr-only">{videoLabel}</p>
              )}
              {s.caption && <span className="case__gallery-caption">{s.caption}</span>}
            </div>
          )
        }

        if (s.kind === 'stat') {
          const grid = (
            <div className={`case-stats${s.dark ? ' case-stats--dark' : ''}`}>
              {s.items.map((item, j) => (
                <div className="case-stat" key={j}>
                  <span className="case-stat-value">
                    {s.dark ? renderMetricValue(item.value) : item.value}
                  </span>
                  <span className="case-stat-label">{item.label}</span>
                </div>
              ))}
            </div>
          )
          if (s.companion) {
            return (
              <div className="container" key={i}>
                <div className="case__section">
                  {s.heading && <h2>{s.heading}</h2>}
                  <div className="case-stat-row">
                    {grid}
                    <p className="case-stat-companion">{s.companion}</p>
                  </div>
                </div>
              </div>
            )
          }
          return (
            <div className="container" key={i}>
              {grid}
            </div>
          )
        }

        if (s.kind === 'livelinks') {
          return (
            <div className="container" key={i}>
              <div className="case__livelinks">
                {s.links.map((link, j) => (
                  <a
                    key={j}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="case__livelink"
                  >
                    {link.label}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M7 17L17 7M17 7H7M17 7v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          )
        }

        if (s.kind === 'callout') {
          if (s.variant === 'insight') {
            return (
              <div className="container" key={i}>
                <div className="case__callout case__callout--insight">
                  {s.label && <span className="callout__label">{s.label}</span>}
                  {s.value && <span className="callout__value">{renderMetricValue(s.value)}</span>}
                  {s.text && <span className="callout__text">{s.text}</span>}
                </div>
              </div>
            )
          }
          if (s.variant === 'objective') {
            return (
              <div className="container" key={i}>
                <div className="case__callout case__callout--objective">
                  {s.label && <span className="callout__label">{s.label}</span>}
                  {s.items.map((item, j) => (
                    <div className="callout__objective-item" key={j}>
                      <span className="callout__objective-num">{j + 1}<span className="callout__objective-dot">.</span></span>
                      <span className="callout__objective-text">{renderText(item)}</span>
                    </div>
                  ))}
                </div>
              </div>
            )
          }
          if (s.variant === 'question') {
            return (
              <div className="container" key={i}>
                <div className="case__callout case__callout--question">
                  <p>{s.text}</p>
                </div>
              </div>
            )
          }
          if (s.variant === 'takeaway') {
            return (
              <div className="container" key={i}>
                <div className="case__callout case__callout--takeaway">
                  {s.label && <span className="callout__label">{s.label}</span>}
                  <p>{s.text}</p>
                </div>
              </div>
            )
          }
          if (s.variant === 'quote') {
            return (
              <div className="container" key={i}>
                <div className="case__callout case__callout--quote">
                  <p>{s.text}</p>
                </div>
              </div>
            )
          }
        }

        return (
          <div className="container" key={i}>
            <section className="case__section">
              {s.heading && <h2>{s.heading}</h2>}
              {s.body && s.body.map((p, j) => (
                <p key={j}>{renderText(p)}</p>
              ))}
            </section>
          </div>
        )
      })}

      <div className="container">
        <div className="case__learned">
          <h4>{t('caseStudy.learnedTitle')}</h4>
          <p>{renderText(data.learned)}</p>
        </div>
        {data.conclusion && (
          <div className="case__conclusion">
            <p>{renderText(data.conclusion)}</p>
          </div>
        )}
        <div className="case__nav">
          <Link to="/#work" className="btn btn--ghost"><Arrow left /> {t('caseStudy.allWork')}</Link>
          <Link to={`/work/${next.slug}`} className="btn btn--primary" aria-label={`${t('caseStudy.nextCase')}: ${nextDisplay.cardTitle}`}>
            {t('caseStudy.nextCase')} <Arrow />
          </Link>
        </div>
      </div>

    </motion.article>
  )
}
