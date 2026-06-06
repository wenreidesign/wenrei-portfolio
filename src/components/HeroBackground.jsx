import { motion } from 'framer-motion'

export default function HeroBackground() {
  return (
    <div className="hero__background" aria-hidden="true" role="presentation">
      {/* Subtle grid lines */}
      <svg className="hero__grid" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="grid-fade" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(254, 53, 170, 0.04)" />
            <stop offset="100%" stopColor="rgba(254, 53, 170, 0)" />
          </linearGradient>
        </defs>

        {/* Vertical lines */}
        {Array.from({ length: 13 }).map((_, i) => (
          <line
            key={`v-${i}`}
            x1={i * 100}
            y1="0"
            x2={i * 100}
            y2="800"
            stroke="url(#grid-fade)"
            strokeWidth="0.5"
            opacity="0.3"
          />
        ))}

        {/* Horizontal lines */}
        {Array.from({ length: 9 }).map((_, i) => (
          <line
            key={`h-${i}`}
            x1="0"
            y1={i * 100}
            x2="1200"
            y2={i * 100}
            stroke="url(#grid-fade)"
            strokeWidth="0.5"
            opacity="0.3"
          />
        ))}

        {/* Small accent nodes - animated */}
        <g className="hero__nodes">
          <motion.circle
            cx="150"
            cy="120"
            r="3"
            fill="rgba(254, 53, 170, 0.6)"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0.2, 0.8, 0.2], scale: [1, 1.3, 1] }}
            transition={{ duration: 4, delay: 0, repeat: Infinity }}
          />
          <motion.circle
            cx="1050"
            cy="680"
            r="2.5"
            fill="rgba(45, 212, 191, 0.6)"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0.15, 0.7, 0.15], scale: [1, 1.4, 1] }}
            transition={{ duration: 5, delay: 0.5, repeat: Infinity }}
          />
          <motion.circle
            cx="200"
            cy="650"
            r="2"
            fill="rgba(167, 139, 250, 0.6)"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0.1, 0.6, 0.1], scale: [1, 1.3, 1] }}
            transition={{ duration: 4.5, delay: 1, repeat: Infinity }}
          />
        </g>

        {/* Micro cursor accent - fuchsia dot that pulses */}
        <motion.g className="hero__cursor">
          <motion.circle
            cx="600"
            cy="200"
            r="1.5"
            fill="#fe35aa"
            animate={{
              opacity: [0.3, 1, 0.3],
              r: [1.5, 2.5, 1.5],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.circle
            cx="600"
            cy="200"
            r="1.5"
            fill="none"
            stroke="#fe35aa"
            strokeWidth="0.5"
            animate={{
              r: [1.5, 6, 10],
              opacity: [1, 0.5, 0],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.g>

        {/* Subtle highlight line - animated accent */}
        <motion.line
          x1="100"
          y1="350"
          x2="400"
          y2="350"
          stroke="#fe35aa"
          strokeWidth="0.75"
          initial={{ opacity: 0, pathLength: 0 }}
          animate={{ opacity: [0, 0.4, 0], pathLength: [0, 1, 1] }}
          transition={{ duration: 3, delay: 0.5, repeat: Infinity }}
        />
      </svg>

      {/* Subtle gradient overlay */}
      <div className="hero__gradient-overlay" />
    </div>
  )
}
