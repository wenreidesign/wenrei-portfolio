import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'

// SVG viewBox: 0 0 900 360
// Asymmetric positions — intentionally staggered, not perfectly mirrored
// Design (top-left, higher)  | Systems (top-right, slightly lower)
// Accessibility (bot-left)   | Code (bot-right, slightly higher)

const NODES = [
  {
    id: 'design',
    label: 'Design',
    sub: 'Research · UX',
    color: '#fe35aa',
    style: { left: '3.89%', top: '5%' },           // x=35, y=18
  },
  {
    id: 'systems',
    label: 'Systems',
    sub: 'Scale · Consistency',
    color: '#2dd4bf',
    style: { left: '72.78%', top: '14.44%' },       // x=655, y=52 — slightly lower
  },
  {
    id: 'accessibility',
    label: 'Accessibility',
    sub: 'WCAG · Auditing',
    color: '#a78bfa',
    style: { left: '3.11%', top: '65.83%' },        // x=28, y=237
  },
  {
    id: 'code',
    label: 'Code',
    sub: 'React · Architecture',
    color: '#f59e0b',
    style: { left: '73.11%', top: '54.17%' },       // x=658, y=195 — slightly higher than Accessibility
  },
]

// Curved L-shaped paths: rounded corners via Q bezier (r=16 for Design/Systems/Accessibility, r=10 for Code)
// Each path: cornerNode_edge → bend → product_edge
// Flow direction: CORNER → PRODUCT (animated glow travels this way)

// DESKTOP (1440px+): Original balanced connections
const CONNECTIONS_DESKTOP = [
  {
    // Design right (225,61) → bend (265) → Product left (308,160)
    d:   'M 225,61  L 249,61  Q 265,61  265,77  L 265,144 Q 265,160 281,160 L 308,160',
    L:   168,
    dur: '4s',
    begin: '0s',
  },
  {
    // Systems left (655,95) → bend (624) → Product right (592,160)
    d:   'M 655,95  L 640,95  Q 624,95  624,111 L 624,144 Q 624,160 608,160 L 592,160',
    L:   114,
    dur: '2.7s',
    begin: '1s',
  },
  {
    // Accessibility right (228,280) → bend (265) → Product left (308,205)
    d:   'M 228,280 L 249,280 Q 265,280 265,264 L 265,221 Q 265,205 281,205 L 308,205',
    L:   141,
    dur: '3.4s',
    begin: '2s',
  },
  {
    // Code left (658,238) → bend (624) → Product right (592,205)  [r=10, short vertical]
    d:   'M 658,238 L 634,238 Q 624,238 624,228 L 624,215 Q 624,205 614,205 L 592,205',
    L:   91,
    dur: '2.2s',
    begin: '3s',
  },
]

// TABLET (701-1100px): Adjusted connections for tablet layout
const CONNECTIONS_TABLET = [
  {
    // Design - moved down and slightly left
    d:   'M 225,100  L 249,100 Q 265,100 265,120 L 265,150 Q 265,165 281,165 L 308,165',
    L:   168,
    dur: '4s',
    begin: '0s',
  },
  {
    // Systems - adjusted for tablet
    d:   'M 655,120  L 640,120 Q 624,120 624,140 L 624,150 Q 624,165 608,165 L 592,165',
    L:   114,
    dur: '2.7s',
    begin: '1s',
  },
  {
    // Accessibility - adjusted for tablet
    d:   'M 228,290  L 249,290 Q 265,290 265,270 L 265,200 Q 265,185 281,185 L 308,185',
    L:   141,
    dur: '3.4s',
    begin: '2s',
  },
  {
    // Code - adjusted for tablet
    d:   'M 658,260  L 634,260 Q 624,260 624,240 L 624,190 Q 624,185 614,185 L 592,185',
    L:   91,
    dur: '2.2s',
    begin: '3s',
  },
]

// MOBILE (≤700px): Compact connections for mobile layout
// Mobile node positions in CSS: Design(10%,8%), Systems(62%,8%), Accessibility(15%,70%), Code(58%,70%), PRODUCT(25%,40%)
// Converted to viewBox coords (900x360): Design(90,29), Systems(558,29), Accessibility(135,252), Code(522,252), PRODUCT(225,144)
const CONNECTIONS_MOBILE = [
  {
    // Design (90,29) → PRODUCT (225,144)
    d:   'M 90,40  L 120,40  Q 150,40  150,70  L 150,120 Q 150,144 180,144 L 225,144',
    L:   140,
    dur: '4s',
    begin: '0s',
  },
  {
    // Systems (558,29) → PRODUCT (225,144)
    d:   'M 558,40  L 520,40  Q 480,40  480,70  L 480,120 Q 480,144 450,144 L 225,144',
    L:   140,
    dur: '2.7s',
    begin: '1s',
  },
  {
    // Accessibility (135,252) → PRODUCT (225,144)
    d:   'M 135,252  L 150,252 Q 180,252 180,210 L 180,170 Q 180,144 210,144 L 225,144',
    L:   120,
    dur: '3.4s',
    begin: '2s',
  },
  {
    // Code (522,252) → PRODUCT (225,144)
    d:   'M 522,252  L 490,252 Q 450,252 450,210 L 450,170 Q 450,144 240,144 L 225,144',
    L:   120,
    dur: '2.2s',
    begin: '3s',
  },
]

const CONNECTIONS = CONNECTIONS_DESKTOP // Default to desktop

const DASH = 28 // traveling-segment length

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
    <section className="circuit-section" ref={ref} aria-label="What connects my work">
      <div className="container">

        {/* Header */}
        <motion.div
          className="circuit-header"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="circuit-title">What connects my work</h2>
        </motion.div>

        {/* Diagram */}
        <div className="circuit-diagram">

          {/* SVG — curved lines + animated glows (all viewports) */}
          <svg
            viewBox="0 0 900 360"
            className="circuit-svg"
            aria-hidden="true"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <filter id="lg" x="-100%" y="-100%" width="300%" height="300%">
                <feGaussianBlur stdDeviation="3.5" result="blur" />
              </filter>
            </defs>

            {/* Static curved guide lines */}
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

            {/* Animated comet — glow halo + crisp core */}
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

          {/* Corner node cards — asymmetric positions */}
          {NODES.map((node, i) => (
            <motion.div key={node.id} className="circuit-node" style={node.style}
              custom={i} variants={cardVariant}
              initial="hidden" animate={inView ? 'visible' : 'hidden'}
            >
              <span className="circuit-node__dot" style={{ background: node.color }} />
              <strong className="circuit-node__label">{node.label}</strong>
              <span className="circuit-node__sub">{node.sub}</span>
            </motion.div>
          ))}

          {/* PRODUCT — center, solid dark bg so glow fades under it */}
          <motion.div
            className="circuit-node circuit-node--product"
            style={{ left: '36.22%', top: '25.22%' }}
            initial={{ opacity: 0, scale: 0.88 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.55, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="circuit-node__star" aria-hidden="true">✦</span>
            <strong className="circuit-node__label circuit-node__label--product">PRODUCT</strong>
            <span className="circuit-node__sub">Impactful · Usable · Scalable</span>
          </motion.div>

        </div>


      </div>
    </section>
  )
}
