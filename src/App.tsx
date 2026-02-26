import { useEffect, useState } from 'react'
import Nav from './components/Nav'
import Hero from './sections/Hero'
import HowItWorks from './sections/HowItWorks'
import WhatWeAnalyze from './sections/WhatWeAnalyze'
import CTA from './sections/CTA'
import Footer from './components/Footer'
import ContactModal from './components/ContactModal'
import './index.css'

export default function App() {
  const [modalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    const reveals = document.querySelectorAll<HTMLElement>('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('visible'), i * 80)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )
    reveals.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="app">
      <Nav onCtaClick={() => setModalOpen(true)} />
      <Hero onCtaClick={() => setModalOpen(true)} />
      <div className="full-divider" />
      <HowItWorks />
      <div className="full-divider" />
      <WhatWeAnalyze />
      <CTA onCtaClick={() => setModalOpen(true)} />
      <Footer />
      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  )
}
