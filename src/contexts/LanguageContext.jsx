import { createContext, useContext, useState, useEffect } from 'react'
import { en } from '../i18n/en.js'
import { es } from '../i18n/es.js'

const translations = { en, es }

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en')

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const t = (keyPath) => {
    const keys = keyPath.split('.')
    let val = translations[lang]
    for (const k of keys) {
      val = val?.[k]
    }
    return val ?? keyPath
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
