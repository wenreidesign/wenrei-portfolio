import { Link } from 'react-router-dom'

const Arrow = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function CaseCard({ data }) {
  return (
    <Link to={`/work/${data.slug}`} className="case-card" aria-label={`View case study: ${data.cardTitle}`}>
      <div className="case-card__media">
        <img
          src={data.cover}
          alt={`${data.cardTitle} — ${data.client}`}
          className={data.coverFit === 'contain' ? 'fit-contain' : 'fit-cover'}
          loading="lazy"
        />
        {data.metric && (
          <div className="case-card__metric">
            <b>{data.metric.value}</b>
            <span>{data.metric.label}</span>
          </div>
        )}
      </div>
      <div className="case-card__body">
        <span className="case-card__client">{data.client}</span>
        <h3 className="h3">{data.cardTitle}</h3>
        <p>{data.summary}</p>
        <div className="case-card__tags">
          {data.tags.map((t) => (
            <span className="tag" key={t}>{t}</span>
          ))}
        </div>
        <span className="case-card__cta">
          View case <Arrow />
        </span>
      </div>
    </Link>
  )
}
