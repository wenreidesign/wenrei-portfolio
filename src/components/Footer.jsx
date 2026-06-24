import logoWhite from '../assets/logo-wenrei-white.svg?url'

const Arrow = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
    focusable="false"
  >
    <path
      d="M5 12h14M13 6l6 6-6 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const contactEmail = 'wenreidesign@gmail.com'
const contactSubject = encodeURIComponent('Portfolio contact - WENREI DESIGN')
const contactHref = `https://mail.google.com/mail/?view=cm&fs=1&to=${contactEmail}&su=${contactSubject}`

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer__cta">
          <h2 className="h2">
            Let’s build something <span className="accent">clear.</span>
          </h2>

          <a
            className="btn btn--light"
            href={contactHref}
            target="_blank"
            rel="noreferrer"
            aria-label="Start a conversation by email"
          >
            Start a conversation <Arrow />
          </a>
        </div>

        <div className="footer__grid">
          <div className="footer__brand">
            <span style={{ display: 'inline-flex' }}>
              <img
                src={logoWhite}
                alt="WENREI DESIGN"
                className="footer__logo"
              />
            </span>

            <p className="footer__tag">
              Designed with clarity. Built with systems. Accessible for everyone. Shipped by one.
            </p>

            <a
              className="footer__email"
              href={contactHref}
              target="_blank"
              rel="noreferrer"
            >
              {contactEmail}
            </a>
          </div>

          <div className="footer__links">
            <div className="footer__col">
              <h3>Explore</h3>
              <a href="/#work">Work</a>
              <a href="/#about">About</a>
              <a href={contactHref} target="_blank" rel="noreferrer">
                Contact
              </a>
            </div>

            <div className="footer__col">
              <h3>Elsewhere</h3>

              <a
                href="https://www.linkedin.com/in/ramon-camacho-rojas"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>

              <a
                href="https://github.com/wenreidesign"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

              <a
                href="https://www.instagram.com/wcaginaction?igsh=M2twaWdwZWY1MDFo&utm_source=qr"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© {currentYear} WENREI DESIGN · Ramón Camacho</span>
          <span>Designed &amp; built end to end.</span>
        </div>
      </div>
    </footer>
  )
}