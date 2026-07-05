import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext.jsx'

// SVG viewBox: 0 0 900 360
// Asymmetric positions — intentionally staggered, not perfectly mirrored
// Design (top-left, higher)  | Systems (top-right, slightly lower)
// Accessibility (bot-left)   | Code (bot-right, slightly higher)

const NODE_IDS = ['design', 'systems', 'accessibility', 'code']

const NODE_META = {
  design:        { color: '#fe35aa', style: { left: '3.89%',  top: '5%' } },
  systems:       { color: '#2dd4bf', style: { left: '72.78%', top: '14.44%' } },
  accessibility: { color: '#a78bfa', style: { left: '3.89%',  top: '65.83%' } },
  code:          { color: '#f59e0b', style: { left: '73.11%', top: '54.17%' } },
}

// ─── SVG paths ───────────────────────────────────────────────────────────────
const CONNECTIONS_DESKTOP = [
  { d: 'M 225,70 L 249,70 Q 265,70 265,87 L 265,149 Q 265,165 281,165 L 308,165',   L: 175, dur: '4s',   begin: '0s' },
  { d: 'M 655,104 L 640,104 Q 624,104 624,121 L 624,149 Q 624,165 608,165 L 592,165', L: 114, dur: '2.7s', begin: '1s' },
  { d: 'M 225,289 L 249,289 Q 265,289 265,272 L 265,211 Q 265,195 281,195 L 308,195', L: 145, dur: '3.4s', begin: '2s' },
  { d: 'M 658,247 L 634,247 Q 624,247 624,237 L 624,211 Q 624,195 614,195 L 592,195', L:  91, dur: '2.2s', begin: '3s' },
]

const CONNECTIONS_TABLET = [
  { d: 'M 251,70 L 265,70 Q 288,70 288,100 L 288,165',     L: 120, dur: '4s',   begin: '0s' },
  { d: 'M 648,104 L 610,104 Q 558,104 558,140 L 558,165',  L: 135, dur: '2.7s', begin: '1s' },
  { d: 'M 251,289 L 265,289 Q 288,289 288,260 L 288,190',  L: 120, dur: '3.4s', begin: '2s' },
  { d: 'M 639,247 L 610,247 Q 558,247 558,215 L 558,190',  L: 130, dur: '2.2s', begin: '3s' },
]

const CONNECTIONS_MOBILE = [
  { d: 'M 279,50 L 300,50 Q 330,50 330,90 L 330,155 Q 330,165 300,165 L 270,165',   L: 200, dur: '4s',   begin: '0s' },
  { d: 'M 585,50 L 560,50 Q 530,50 530,90 L 530,155 Q 530,165 560,165 L 630,165',   L: 200, dur: '2.7s', begin: '1s' },
  { d: 'M 279,272 L 300,272 Q 330,272 330,235 L 330,205 Q 330,195 300,195 L 270,195', L: 175, dur: '3.4s', begin: '2s' },
  { d: 'M 585,272 L 560,272 Q 530,272 530,235 L 530,205 Q 530,195 560,195 L 630,195', L: 175, dur: '2.2s', begin: '3s' },
]

const DASH = 28

const cardVariant = {
  hidden:  { opacity: 0, scale: 0.92 },
  visible: (i) => ({
    opacity: 1, scale: 1,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
}

export default function CircuitSection() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-8%' })
  const [connections, setConnections] = useState(CONNECTIONS_DESKTOP)
  const { t } = useLanguage()

  useEffect(() => {
    const updateConnections = () => {
      if (window.innerWidth <= 700) {
        setConnections(CONNECTIONS_MOBILE)
      } else if (window.innerWidth <= 1100) {
        setConnections(CONNECTIONS_TABLET)
      } else {
        setConnections(CONNECTIONS_DESKTOP)
      }
    }

    updateConnections()
    window.addEventListener('resize', updateConnections)
    return () => window.removeEventListener('resize', updateConnections)
  }, [])

  return (
    <section className="circuit-section" ref={ref}>
      <div className="container">

        <motion.div
          className="circuit-header"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="circuit-title">{t('circuit.heading')}</h2>
        </motion.div>

        <div className="circuit-diagram" aria-hidden="true">

          <svg
            viewBox="0 0 900 360"
            className="circuit-svg"
            aria-hidden="true"
            preserveAspectRatio="none"
          >
            <defs>
              <filter id="lg" x="-100%" y="-100%" width="300%" height="300%">
                <feGaussianBlur stdDeviation="3.5" result="blur" />
              </filter>
            </defs>

            {connections.map((c, i) => {
              const connectionNames = ['design-conn', 'systems-conn', 'accessibility-conn', 'code-conn']
              return (
                <path key={i} className={`circuit-path ${connectionNames[i]}`} d={c.d} fill="none"
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="1.5"
                  strokeDasharray="5 4"
                  strokeLinecap="round"
                />
              )
            })}

            {inView && connections.map((c, i) => {
              const gap     = c.L + DASH
              const dashArr = `${DASH} ${gap}`
              const toVal   = `-${gap}`
              const connectionNames = ['design-conn', 'systems-conn', 'accessibility-conn', 'code-conn']
              return (
                <g key={i} className={`circuit-animation ${connectionNames[i]}`}>
                  <path d={c.d} fill="none"
                    stroke="#fe35aa" strokeWidth="7"
                    strokeLinecap="round"
                    strokeDasharray={dashArr}
                    filter="url(#lg)"
                    opacity="0.5"
                  >
                    <animate attributeName="stroke-dashoffset"
                      from="0" to={toVal}
                      dur={c.dur} begin={c.begin}
                      repeatCount="indefinite" calcMode="linear"
                    />
                  </path>
                  <path d={c.d} fill="none"
                    stroke="#fe35aa" strokeWidth="2"
                    strokeLinecap="round"
                    strokeDasharray={dashArr}
                  >
                    <animate attributeName="stroke-dashoffset"
                      from="0" to={toVal}
                      dur={c.dur} begin={c.begin}
                      repeatCount="indefinite" calcMode="linear"
                    />
                  </path>
                </g>
              )
            })}
          </svg>

          {NODE_IDS.map((id, i) => {
            const meta = NODE_META[id]
            const label = t(`circuit.nodes.${id}.label`)
            const sub   = t(`circuit.nodes.${id}.sub`)
            return (
              <motion.div key={id} className={`circuit-node circuit-node--${id}`} style={meta.style}
                custom={i} variants={cardVariant}
                initial="hidden" animate={inView ? 'visible' : 'hidden'}
              >
                <span className="circuit-node__dot" style={{ background: meta.color }} />
                <strong className="circuit-node__label">{label}</strong>
                <span className="circuit-node__sub">{sub}</span>
              </motion.div>
            )
          })}

          <motion.div
            className="circuit-node circuit-node--product"
            style={{ left: '34.22%', top: '34.58%' }}
            initial={{ opacity: 0, scale: 0.88 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.55, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="circuit-node__star" aria-hidden="true">✦</span>
            <strong className="circuit-node__label circuit-node__label--product">
              {t('circuit.nodes.product.label')}
            </strong>
            <span className="circuit-node__sub">{t('circuit.nodes.product.sub')}</span>
          </motion.div>

        </div>

      </div>
    </section>
  )
}
