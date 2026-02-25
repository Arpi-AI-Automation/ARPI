import { useEffect, useState } from 'react'
import './Nav.css'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <a href="#" className="nav-logo">
        ARPI<span>.</span>
      </a>
      <ul className="nav-links">
        <li><a href="#how">Process</a></li>
        <li><a href="#analyze">Analysis</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <a href="#contact" className="nav-cta">Get Your Snapshot</a>
    </nav>
  )
}
