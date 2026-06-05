import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { getCase, cases } from '../data/cases.js'

const Arrow = ({ left }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={left ? { transform: 'rotate(180deg)' } : null}>
    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function CaseStudy() {
  const { slug } = useParams()
  const data = getCase(slug)

  if (!data) return <Navigate to="/404" replace />

  const idx = cases.findIndex((c) => c.slug === slug)
  const next = cases[(idx + 1) % cases.length]

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
        <Link to="/#work" className="case__back"><Arrow left /> Back to work</Link>

        <span className="case__client">{data.client}</span>
        <h1 className="display case__articleTitle">{data.articleTitle}</h1>
        <p className="lead case__intro">{data.intro}</p>

        <dl className="case__meta">
          <div><dt>Role</dt><dd>{data.meta.role}</dd></div>
          <div><dt>Team</dt><dd>{data.meta.team}</dd></div>
          <div><dt>Timeline</dt><dd>{data.meta.timeline}</dd></div>
          <div><dt>Scope</dt><dd>{data.meta.scope}</dd></div>
        </dl>

        <div className="case__hero-media">
          <img
            src={data.cover}
            alt={`${data.articleTitle} — cover`}
            className={data.coverFit === 'contain' ? 'fit-contain' : 'fit-cover'}
          />
        </div>
      </div>

      <div className="container">
        {data.sections.map((s, i) =>
          s.kind === 'image' ? (
            <figure className="case__figure" key={i}>
              <div className="case__figure-frame">
                <img src={s.src} alt={s.alt || s.caption} className={s.fit === 'contain' ? 'fit-contain' : 'fit-cover'} loading="lazy" decoding="async" />
              </div>
              {s.caption && <figcaption>{s.caption}</figcaption>}
            </figure>
          ) : (
            <section className="case__section" key={i}>
              <h2>{s.heading}</h2>
              {s.body.map((p, j) => <p key={j}>{p}</p>)}
            </section>
          )
        )}

        <div className="case__learned">
          <h4>What I took away</h4>
          <p>{data.learned}</p>
        </div>

        <div className="container case__nav" style={{ paddingLeft: 0, paddingRight: 0 }}>
          <Link to="/#work" className="btn btn--ghost"><Arrow left /> All work</Link>
          <Link to={`/work/${next.slug}`} className="btn btn--primary">Next case <Arrow /></Link>
        </div>
      </div>
    </motion.article>
  )
}
