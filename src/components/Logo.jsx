import { Link } from 'react-router-dom'
import logoWenrei from '../assets/logo-wenrei.svg'

export default function Logo({ onClick }) {
  return (
    <Link to="/" className="logo" aria-label="WENREI DESIGN — home" onClick={onClick}>
      <img src={logoWenrei} alt="WENREI DESIGN" className="logo__img" />
    </Link>
  )
}
