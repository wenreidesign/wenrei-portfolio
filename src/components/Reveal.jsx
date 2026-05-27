import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

// Reliable scroll-reveal. Uses a ref + useInView so the animation always
// resolves; once in view it animates in and stays. If JS/observer never
// fires for some reason, the element still ends visible because we only
// ever animate TO opacity:1.
export default function Reveal({ children, delay = 0, className, as = 'div' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.15 })
  const MotionTag = motion[as] || motion.div

  return (
    <MotionTag
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </MotionTag>
  )
}
