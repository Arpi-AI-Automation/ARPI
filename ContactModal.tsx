import { useState, useEffect, useRef } from 'react'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

type FormState = 'idle' | 'submitting' | 'success' | 'error'

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formState, setFormState] = useState<FormState>('idle')
  const [fields, setFields] = useState({
    name: '',
    email: '',
    website: '',
    phone: '',
    message: '',
  })
  const [errors, setErrors] = useState<Partial<typeof fields>>({})
  const firstFieldRef = useRef<HTMLInputElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      setTimeout(() => firstFieldRef.current?.focus(), 100)
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  function validate() {
    const e: Partial<typeof fields> = {}
    if (!fields.name.trim())    e.name    = 'Name is required.'
    if (!fields.email.trim())   e.email   = 'Email is required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email))
                                e.email   = 'Enter a valid email address.'
    if (!fields.website.trim()) e.website = 'Company website is required.'
    return e
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setErrors({})
    setFormState('submitting')

    try {
      const res = await fetch('https://formspree.io/f/xkovyjra', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name:     fields.name,
          email:    fields.email,
          website:  fields.website,
          phone:    fields.phone || 'Not provided',
          message:  fields.message || 'No message provided',
          _replyto: fields.email,
          _subject: `New friction snapshot request from ${fields.name} — ${fields.website}`,
        }),
      })
      if (res.ok) {
        setFormState('success')
      } else {
        setFormState('error')
      }
    } catch {
      setFormState('error')
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target
    setFields(f => ({ ...f, [name]: value }))
    if (errors[name as keyof typeof errors]) {
      setErrors(f => ({ ...f, [name]: undefined }))
    }
  }

  function handleOverlayClick(e: React.MouseEvent) {
    if (e.target === overlayRef.current) onClose()
  }

  function handleReset() {
    setFormState('idle')
    setFields({ name: '', email: '', website: '', phone: '', message: '' })
    setErrors({})
  }

  if (!isOpen) return null

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(10, 9, 8, 0.75)', backdropFilter: 'blur(4px)' }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-lg bg-white rounded-sm shadow-2xl"
        style={{ animation: 'modalIn 0.25s ease forwards', border: '1px solid #E5E2DC' }}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 text-[#7A7670] hover:text-[#1A1917] transition-colors"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <line x1="4" y1="4" x2="16" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="16" y1="4" x2="4" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>

        {formState === 'success' ? (
          <div className="p-10 text-center">
            <div className="w-12 h-12 rounded-full border border-[#E5E2DC] flex items-center justify-center mx-auto mb-6">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <polyline points="4 10 8 14 16 6" stroke="#2D6A4F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p className="text-xs font-mono tracking-widest uppercase text-[#8A7A64] mb-3">
              Request received
            </p>
            <h2
              className="mb-4 text-[#1A1917]"
              style={{ fontFamily: 'Instrument Serif, Georgia, serif', fontSize: '28px', lineHeight: '1.2' }}
            >
              Thank you, {fields.name.split(' ')[0]}.
            </h2>
            <p className="text-sm text-[#7A7670] leading-relaxed mb-8">
              One of our team members will be in touch with your free Revenue Friction Snapshot shortly.
            </p>
            <button
              onClick={() => { handleReset(); onClose() }}
              className="text-xs font-medium text-[#7A7670] hover:text-[#1A1917] transition-colors underline underline-offset-2"
            >
              Close
            </button>
          </div>
        ) : (
          <div className="p-8 sm:p-10">
            <p className="text-xs font-mono tracking-widest uppercase text-[#8A7A64] mb-2">
              Free Revenue Friction Snapshot
            </p>
            <h2
              id="modal-title"
              className="mb-1 text-[#1A1917]"
              style={{ fontFamily: 'Instrument Serif, Georgia, serif', fontSize: '26px', lineHeight: '1.25' }}
            >
              Get your snapshot
            </h2>
            <p className="text-sm text-[#7A7670] mb-7 leading-relaxed">
              We'll audit your store and deliver a prioritized breakdown of your top 3 revenue leaks.
            </p>

            <form onSubmit={handleSubmit} noValidate>
              <div className="space-y-4">
                <div>
                  <label htmlFor="modal-name" className="block text-xs font-medium text-[#1A1917] mb-1.5">
                    Name <span className="text-[#991B1B]">*</span>
                  </label>
                  <input
                    ref={firstFieldRef}
                    id="modal-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={fields.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className={inputClass(!!errors.name)}
                  />
                  {errors.name && <p className="mt-1 text-xs text-[#991B1B]">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="modal-email" className="block text-xs font-medium text-[#1A1917] mb-1.5">
                    Email address <span className="text-[#991B1B]">*</span>
                  </label>
                  <input
                    id="modal-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={fields.email}
                    onChange={handleChange}
                    placeholder="you@brand.com"
                    className={inputClass(!!errors.email)}
                  />
                  {errors.email && <p className="mt-1 text-xs text-[#991B1B]">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="modal-website" className="block text-xs font-medium text-[#1A1917] mb-1.5">
                    Company website <span className="text-[#991B1B]">*</span>
                  </label>
                  <input
                    id="modal-website"
                    name="website"
                    type="text"
                    autoComplete="url"
                    value={fields.website}
                    onChange={handleChange}
                    placeholder="brand.com"
                    className={inputClass(!!errors.website)}
                  />
                  {errors.website && <p className="mt-1 text-xs text-[#991B1B]">{errors.website}</p>}
                </div>

                <div>
                  <label htmlFor="modal-phone" className="block text-xs font-medium text-[#1A1917] mb-1.5">
                    Phone number <span className="text-[#7A7670] font-normal">(optional)</span>
                  </label>
                  <input
                    id="modal-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    value={fields.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                    className={inputClass(false)}
                  />
                </div>

                <div>
                  <label htmlFor="modal-message" className="block text-xs font-medium text-[#1A1917] mb-1.5">
                    Questions or comments <span className="text-[#7A7670] font-normal">(optional)</span>
                  </label>
                  <textarea
                    id="modal-message"
                    name="message"
                    rows={3}
                    value={fields.message}
                    onChange={handleChange}
                    placeholder="Anything you'd like us to know about your store or goals..."
                    className={inputClass(false) + ' resize-none'}
                  />
                </div>
              </div>

              {formState === 'error' && (
                <p className="mt-4 text-xs text-[#991B1B]">
                  Something went wrong. Please try again or email us at arpiai.automation@gmail.com
                </p>
              )}

              <button
                type="submit"
                disabled={formState === 'submitting'}
                className="mt-6 w-full py-3.5 text-sm font-medium text-white rounded-sm transition-opacity disabled:opacity-60"
                style={{ background: '#1A1917' }}
              >
                {formState === 'submitting' ? 'Sending...' : 'Get My Free Snapshot'}
              </button>

              <p className="mt-3 text-center text-xs text-[#7A7670]">
                No pitch call. No commitment. Just the audit.
              </p>
            </form>
          </div>
        )}
      </div>

      <style>{`
        @keyframes modalIn {
          from { opacity: 0; transform: translateY(12px) scale(0.98); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </div>
  )
}

function inputClass(hasError: boolean) {
  return [
    'w-full px-3.5 py-2.5 text-sm rounded-sm border bg-white text-[#1A1917]',
    'placeholder:text-[#7A7670]/60 transition-colors duration-150',
    'focus:outline-none focus:ring-1 focus:ring-[#C8B89A] focus:border-[#C8B89A]',
    hasError ? 'border-[#991B1B]' : 'border-[#E5E2DC] hover:border-[#C8B89A]',
  ].join(' ')
}
