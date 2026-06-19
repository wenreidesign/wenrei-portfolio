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
    style: { left: '3.89%', top: '5%' },
  },
  {
    id: 'systems',
    label: 'Systems',
    sub: 'Scale · Consistency',
    color: '#2dd4bf',
    style: { left: '72.78%', top: '14.44%' },
  },
  {
    id: 'accessibility',
    label: 'Accessibility',
    sub: 'WCAG · Auditing',
    color: '#a78bfa',
    style: { left: '3.89%', top: '65.83%' },   // aligned with Design
  },
  {
    id: 'code',
    label: 'Code',
    sub: 'React · Architecture',
    color: '#f59e0b',
    style: { left: '73.11%', top: '54.17%' },
  },
]

// ─── SVG paths ───────────────────────────────────────────────────────────────
// preserveAspectRatio="none" → SVG stretches to fill the container, so
// CSS percentage positions map 1:1 to viewBox coords:
//   SVG x = left% × 900    SVG y = top% × 360
//
// Node size (desktop, 21.11% × 28.61%):  w=190  h=103
// Node size (tablet,  24%    × 28.61%):  w=216  h=103
// Node size (mobile,  28%    × 18%):     w=252  h=65
//
// Each path: node_edge_center → L-bend → product_edge
// Flow direction: CORNER → PRODUCT

// DESKTOP (> 1100px)
// Node positions → right/left edge centers:
//   Design       left:3.89%  top:5%     → right (225, 70)   [35+190=225, 18+51=69]
//   Systems      left:72.78% top:14.44% → left  (655, 104)  [52+52=104]
//   Accessibility left:3.89% top:65.83% → right (225, 289)  [237+52=289]
//   Code         left:73.11% top:54.17% → left  (658, 247)  [195+52=247]
// PRODUCT left:34.22% top:34.58% w:31.56% h:32.22% → x=308 y=125 w=284 h=116
//   left edge: 308  right edge: 592  center-y: 183
//   using y=165 (upper pair) / y=195 (lower pair) — classic asymmetric circuit look
const CONNECTIONS_DESKTOP = [
  {
    // Design right-center (225,70) → Product left (308,165)
    d:   'M 225,70 L 249,70 Q 265,70 265,87 L 265,149 Q 265,165 281,165 L 308,165',
    L:   175, dur: '4s',   begin: '0s',
  },
  {
    // Systems left-center (655,104) → Product right (592,165)
    d:   'M 655,104 L 640,104 Q 624,104 624,121 L 624,149 Q 624,165 608,165 L 592,165',
    L:   114, dur: '2.7s', begin: '1s',
  },
  {
    // Accessibility right-center (225,289) → Product left (308,195)
    d:   'M 225,289 L 249,289 Q 265,289 265,272 L 265,211 Q 265,195 281,195 L 308,195',
    L:   145, dur: '3.4s', begin: '2s',
  },
  {
    // Code left-center (658,247) → Product right (592,195)
    d:   'M 658,247 L 634,247 Q 624,247 624,237 L 624,211 Q 624,195 614,195 L 592,195',
    L:    91, dur: '2.2s', begin: '3s',
  },
]

// TABLET (701–1100px)
// Node width: 24%. Right nodes pushed outward for path length.
//   Design       left:3.89%  → right edge 27.89% → x=251, cy=70
//   Systems      left:72%    → left  edge 72%    → x=648, cy=104
//   Accessibility left:3.89% → right edge 27.89% → x=251, cy=289
//   Code         left:71%    → left  edge 71%    → x=639, cy=247
// PRODUCT left:32% top:33.5% w:30% h:30%
//   → x=288 y=121 w=270 h=108  left:288 right:558 top:121 bottom:229
// L-shape: horizontal run → curve → vertical → PRODUCT edge (same logic as desktop)
const CONNECTIONS_TABLET = [
  {
    // Design right (251,70) → horizontal → curve → down → Product left (288,165)
    d:   'M 251,70 L 265,70 Q 288,70 288,100 L 288,165',
    L:   120, dur: '4s',   begin: '0s',
  },
  {
    // Systems left (648,104) → horizontal → curve → down → Product right (558,165)
    d:   'M 648,104 L 610,104 Q 558,104 558,140 L 558,165',
    L:   135, dur: '2.7s', begin: '1s',
  },
  {
    // Accessibility right (251,289) → horizontal → curve → up → Product left (288,190)
    d:   'M 251,289 L 265,289 Q 288,289 288,260 L 288,190',
    L:   120, dur: '3.4s', begin: '2s',
  },
  {
    // Code left (639,247) → horizontal → curve → up → Product right (558,190)
    d:   'M 639,247 L 610,247 Q 558,247 558,215 L 558,190',
    L:   130, dur: '2.2s', begin: '3s',
  },
]

// MOBILE (≤700px)
// Nodes pushed to corners (CSS): Design/Accessibility left:3% top:5%/72%,
//   Systems/Code right:65% top:5%/72%.  PRODUCT left:30% w:40%.
// All coords = CSS% × viewBox dimension (preserveAspectRatio="none").
//   Design       left:3%  top:5%  w:28% h:18% → right=279 cy-bot=83  → use right-center (279,50)
//   Systems      left:65% top:5%  w:28% h:18% → left=585  cy=50      → use left-center (585,50)
//   Accessibility left:3%  top:72% w:28% h:18% → right=279 cy-top=259 → use right-center (279,272)
//   Code         left:65% top:72% w:28% h:18% → left=585  cy-top=259 → use left-center (585,272)
// PRODUCT left:30% top:40% w:40% h:20%
//   → x=270 y=144 w=360 h=72  left:270 right:630 center-y:180
// L-shape: short horizontal → curve → long vertical → PRODUCT left/right edge
const CONNECTIONS_MOBILE = [
  {
    // Design right-center (279,50) → right → curve → down → Product left (270,165)
    d:   'M 279,50 L 300,50 Q 330,50 330,90 L 330,155 Q 330,165 300,165 L 270,165',
    L:   200, dur: '4s',   begin: '0s',
  },
  {
    // Systems left-center (585,50) → left → curve → down → Product right (630,165)
    d:   'M 585,50 L 560,50 Q 530,50 530,90 L 530,155 Q 530,165 560,165 L 630,165',
    L:   200, dur: '2.7s', begin: '1s',
  },
  {
    // Accessibility right-center (279,272) → right → curve → up → Product left (270,195)
    d:   'M 279,272 L 300,272 Q 330,272 330,235 L 330,205 Q 330,195 300,195 L 270,195',
    L:   175, dur: '3.4s', begin: '2s',
  },
  {
    // Code left-center (585,272) → left → curve → up → Product right (630,195)
    d:   'M 585,272 L 560,272 Q 530,272 530,235 L 530,205 Q 530,195 560,195 L 630,195',
    L:   175, dur: '2.2s', begin: '3s',
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
    <section className="circuit-section" ref={ref}>
      <div className="container">

        {/* Header — visible to everyone including screen readers */}
        <motion.div
          className="circuit-header"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="circuit-title">What connects my work</h2>
        </motion.div>

        {/* Diagram — purely visual, hidden from screen readers entirely */}
        <div className="circuit-diagram" aria-hidden="true">

          {/* SVG — curved lines + animated glows (all viewports) */}
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
            <motion.div key={node.id} className={`circuit-node circuit-node--${node.id}`} style={node.style}
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
            style={{ left: '34.22%', top: '34.58%' }}
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
