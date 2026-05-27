import { Isotype } from './Logo.jsx'

const Arrow = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer__cta">
          <h2 className="h2">
            Let’s build something <span className="accent">clear.</span>
          </h2>
          <a className="btn btn--light" href="mailto:wenreidesign@gmail.com">
            Start a conversation <Arrow />
          </a>
        </div>

        <div className="footer__grid">
          <div className="footer__brand">
            <span style={{ color: 'var(--white)', display: 'inline-flex' }}>
              <Isotype size={30} />
            </span>
            <p className="footer__tag">
              Designing clarity. Building reality. Product design that closes the gap between
              idea and product.
            </p>
          </div>

          <div className="footer__links">
            <div className="footer__col">
              <h4>Explore</h4>
              <a href="/#work">Work</a>
              <a href="/#about">About</a>
              <a href="mailto:wenreidesign@gmail.com">Contact</a>
            </div>
            <div className="footer__col">
              <h4>Elsewhere</h4>
              <a href="https://www.linkedin.com/in/ramon-camacho-rojas" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="https://github.com/4GeeksAcademy/petspot-sp-131" target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} WENREI DESIGN · Ramón Camacho</span>
          <span>Designed &amp; built end to end.</span>
        </div>
      </div>
    </footer>
  )
}
