import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import Logo from './Logo.jsx'

const links = [
  { label: 'Work', to: '/#work' },
  { label: 'About', to: '/#about' },
  { label: 'Contact', to: '/#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location])

  // Smooth-scroll to a section when the hash points to one on the home page.
  const handleAnchor = (e, to) => {
    const [, hash] = to.split('#')
    if (location.pathname === '/' && hash) {
      e.preventDefault()
      document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' })
      setOpen(false)
    }
  }

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
          <button className="lang" type="button" title="More languages coming soon" disabled>
            <span>EN</span> / ES
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
        </nav>
      )}
    </header>
  )
}
