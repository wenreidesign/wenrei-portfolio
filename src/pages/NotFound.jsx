import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext.jsx'

export default function NotFound() {
  const { t } = useLanguage()

  return (
    <motion.div className="container notfound" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <h1>4<span className="accent">0</span>4</h1>
      <p className="lead">{t('notFound.body')}</p>
      <Link to="/" className="btn btn--primary">{t('notFound.btn')}</Link>
    </motion.div>
  )
}
