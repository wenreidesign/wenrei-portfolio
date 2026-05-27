import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function NotFound() {
  return (
    <motion.div className="container notfound" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <h1>4<span className="accent">0</span>4</h1>
      <p className="lead">This page didn’t make it past the handoff.</p>
      <Link to="/" className="btn btn--primary">Back home</Link>
    </motion.div>
  )
}
