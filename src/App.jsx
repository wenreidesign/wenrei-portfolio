import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import CaseStudy from './pages/CaseStudy.jsx'
import NotFound from './pages/NotFound.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

// Moves focus to <main> on every route change so keyboard and screen-reader
// users land at the start of the new page content (WCAG 2.4.3 Focus Order).
// The 350ms delay lets Framer Motion finish its exit/enter transition before
// we steal focus — avoids a race condition where the element isn't yet painted.
function FocusMain() {
  const { pathname } = useLocation()
  useEffect(() => {
    const id = setTimeout(() => {
      const main = document.getElementById('main')
      if (main) {
        main.setAttribute('tabindex', '-1')
        main.focus({ preventScroll: true })
      }
    }, 350)
    return () => clearTimeout(id)
  }, [pathname])
  return null
}

export default function App() {
  const location = useLocation()
  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <ScrollToTop />
      <FocusMain />
      <Navbar />
      <main id="main">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/work/:slug" element={<CaseStudy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </>
  )
}
