import logoWhite from '../assets/logo-wenrei-white.svg?url'
import { useLanguage } from '../contexts/LanguageContext.jsx'

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

const contactEmail = 'ramoncamacho@wenreidesign.com'
const contactSubject = encodeURIComponent('Portfolio contact - WENREI DESIGN')
const contactHref = `https://mail.google.com/mail/?view=cm&fs=1&to=${contactEmail}&su=${contactSubject}`

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const { t } = useLanguage()

  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer__cta">
          <h2
            className="h2"
            dangerouslySetInnerHTML={{ __html: t('footer.cta') }}
          />

          <a
            className="btn btn--light"
            href={contactHref}
            target="_blank"
            rel="noreferrer"
            aria-label={t('footer.ctaBtn')}
          >
            {t('footer.ctaBtn')} <Arrow />
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

            <p className="footer__tag">{t('footer.tagline')}</p>

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
              <h3>{t('footer.exploreTitle')}</h3>
              <a href="/#work">{t('nav.work')}</a>
              <a href="/#about">{t('nav.about')}</a>
              <a href={contactHref} target="_blank" rel="noreferrer">
                {t('nav.contact')}
              </a>
            </div>

            <div className="footer__col">
              <h3>{t('footer.elsewhereTitle')}</h3>

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
          <span>{t('footer.copyright')}</span>
        </div>
      </div>
    </footer>
  )
}
