import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import Logo from './Logo.jsx'
import { useLanguage } from '../contexts/LanguageContext.jsx'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const { lang, setLang, t } = useLanguage()

  const links = [
    { label: t('nav.work'),    to: '/#work' },
    { label: t('nav.about'),   to: '/#about' },
    { label: t('nav.contact'), to: '/#contact' },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location])

  useEffect(() => {
    if (!open) return
    const handleClickOutside = (e) => {
      if (!e.target.closest('.nav')) setOpen(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [open])

  const handleAnchor = (e, to) => {
    const [, hash] = to.split('#')
    if (location.pathname === '/' && hash) {
      e.preventDefault()
      document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' })
      setOpen(false)
    }
  }

  const toggleLang = () => setLang(lang === 'en' ? 'es' : 'en')

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <Logo onClick={() => setOpen(false)} />

        <nav aria-label="Primary">
          <ul className="nav__links">
            {links.map((l) => (
              <li key={l.label}>
                <NavLink
                  to={l.to}
                  className="nav__link"
                  onClick={(e) => handleAnchor(e, l.to)}
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav__right">
          <button
            className="lang"
            type="button"
            aria-label={t('nav.langLabel')}
            onClick={toggleLang}
          >
            {lang === 'en'
              ? <><span aria-hidden="true">EN</span> / ES</>
              : <>EN / <span aria-hidden="true">ES</span></>
            }
          </button>
          <button
            className="nav__toggle"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span style={open ? { transform: 'translateY(7px) rotate(45deg)' } : null} />
            <span style={open ? { opacity: 0 } : null} />
            <span style={open ? { transform: 'translateY(-7px) rotate(-45deg)' } : null} />
          </button>
        </div>
      </div>

      {open && (
        <nav className="nav__mobile" aria-label="Mobile">
          {links.map((l) => (
            <NavLink key={l.label} to={l.to} onClick={(e) => handleAnchor(e, l.to)}>
              {l.label}
            </NavLink>
          ))}
          <button
            className="lang lang--mobile"
            type="button"
            aria-label={t('nav.langLabel')}
            onClick={toggleLang}
          >
            {lang === 'en'
              ? <><span aria-hidden="true">EN</span> / ES</>
              : <>EN / <span aria-hidden="true">ES</span></>
            }
          </button>
        </nav>
      )}
    </header>
  )
}
