import { useRef } from 'react'
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
const CONNECTIONS = [
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

          {/* SVG — curved lines + animated glows (desktop + tablet) */}
          <svg
            viewBox="0 0 900 360"
            className="circuit-svg circuit-svg--desktop"
            aria-hidden="true"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <filter id="lg" x="-100%" y="-100%" width="300%" height="300%">
                <feGaussianBlur stdDeviation="3.5" result="blur" />
              </filter>
            </defs>

            {/* Static curved guide lines */}
            {CONNECTIONS.map((c, i) => (
              <path key={i} d={c.d} fill="none"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="1.5"
                strokeDasharray="5 4"
                strokeLinecap="round"
              />
            ))}

            {/* Animated comet — glow halo + crisp core */}
            {inView && CONNECTIONS.map((c, i) => {
              const gap     = c.L + DASH
              const dashArr = `${DASH} ${gap}`
              const toVal   = `-${gap}`
              return (
                <g key={i}>
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

          {/* SVG — mobile version with adjusted line positions */}
          <svg
            viewBox="0 0 100 100"
            className="circuit-svg circuit-svg--mobile"
            aria-hidden="true"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <filter id="lg-mobile" x="-100%" y="-100%" width="300%" height="300%">
                <feGaussianBlur stdDeviation="3.5" result="blur" />
              </filter>
            </defs>

            {/* Static curved guide lines for mobile */}
            {inView && (
              <>
                {/* Lines from corners to center */}
                <path d="M 15 10 Q 30 40 50 50" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" strokeDasharray="5 4" strokeLinecap="round" />
                <path d="M 85 10 Q 70 40 50 50" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" strokeDasharray="5 4" strokeLinecap="round" />
                <path d="M 15 90 Q 30 60 50 50" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" strokeDasharray="5 4" strokeLinecap="round" />
                <path d="M 85 90 Q 70 60 50 50" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" strokeDasharray="5 4" strokeLinecap="round" />

                {/* Animated comet glows */}
                <path d="M 15 10 Q 30 40 50 50" fill="none" stroke="#fe35aa" strokeWidth="7" strokeLinecap="round" filter="url(#lg-mobile)" opacity="0.5">
                  <animate attributeName="stroke-dashoffset" from="0" to="-40" dur="4s" begin="0s" repeatCount="indefinite" calcMode="linear" />
                </path>
                <path d="M 15 10 Q 30 40 50 50" fill="none" stroke="#fe35aa" strokeWidth="2" strokeLinecap="round">
                  <animate attributeName="stroke-dashoffset" from="0" to="-40" dur="4s" begin="0s" repeatCount="indefinite" calcMode="linear" />
                </path>

                <path d="M 85 10 Q 70 40 50 50" fill="none" stroke="#fe35aa" strokeWidth="7" strokeLinecap="round" filter="url(#lg-mobile)" opacity="0.5">
                  <animate attributeName="stroke-dashoffset" from="0" to="-40" dur="2.7s" begin="1s" repeatCount="indefinite" calcMode="linear" />
                </path>
                <path d="M 85 10 Q 70 40 50 50" fill="none" stroke="#fe35aa" strokeWidth="2" strokeLinecap="round">
                  <animate attributeName="stroke-dashoffset" from="0" to="-40" dur="2.7s" begin="1s" repeatCount="indefinite" calcMode="linear" />
                </path>

                <path d="M 15 90 Q 30 60 50 50" fill="none" stroke="#fe35aa" strokeWidth="7" strokeLinecap="round" filter="url(#lg-mobile)" opacity="0.5">
                  <animate attributeName="stroke-dashoffset" from="0" to="-40" dur="3.4s" begin="2s" repeatCount="indefinite" calcMode="linear" />
                </path>
                <path d="M 15 90 Q 30 60 50 50" fill="none" stroke="#fe35aa" strokeWidth="2" strokeLinecap="round">
                  <animate attributeName="stroke-dashoffset" from="0" to="-40" dur="3.4s" begin="2s" repeatCount="indefinite" calcMode="linear" />
                </path>

                <path d="M 85 90 Q 70 60 50 50" fill="none" stroke="#fe35aa" strokeWidth="7" strokeLinecap="round" filter="url(#lg-mobile)" opacity="0.5">
                  <animate attributeName="stroke-dashoffset" from="0" to="-40" dur="2.2s" begin="3s" repeatCount="indefinite" calcMode="linear" />
                </path>
                <path d="M 85 90 Q 70 60 50 50" fill="none" stroke="#fe35aa" strokeWidth="2" strokeLinecap="round">
                  <animate attributeName="stroke-dashoffset" from="0" to="-40" dur="2.2s" begin="3s" repeatCount="indefinite" calcMode="linear" />
                </path>
              </>
            )}
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
            style={{ left: '34.22%', top: '33.89%' }}
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
