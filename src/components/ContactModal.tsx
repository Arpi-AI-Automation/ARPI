import { useState, useEffect, useRef } from 'react'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

type FormState = 'idle' | 'submitting' | 'success' | 'error'

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formState, setFormState] = useState<FormState>('idle')
  const [fields, setFields] = useState({ name: '', email: '', website: '', phone: '', message: '' })
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
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
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
      setFormState(res.ok ? 'success' : 'error')
    } catch {
      setFormState('error')
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target
    setFields(f => ({ ...f, [name]: value }))
    if (errors[name as keyof typeof errors]) setErrors(f => ({ ...f, [name]: undefined }))
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
    <div ref={overlayRef} onClick={handleOverlayClick} style={S.overlay}
      role="dialog" aria-modal="true" aria-labelledby="modal-title">

      <div style={S.panel}>

        {/* Close */}
        <button onClick={onClose} aria-label="Close" style={S.closeBtn}
          onMouseEnter={e => (e.currentTarget.style.color = '#f5f2ed')}
          onMouseLeave={e => (e.currentTarget.style.color = '#737373')}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <line x1="3" y1="3" x2="15" y2="15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="15" y1="3" x2="3" y2="15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>

        {formState === 'success' ? (

          /* ── Success ── */
          <div style={S.successWrap}>
            <div style={S.successIcon}>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <polyline points="3 9 7 13 15 5" stroke="#c8b89a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p style={S.eyebrow}>Request received</p>
            <h2 id="modal-title" style={S.title}>Thank you, {fields.name.split(' ')[0]}.</h2>
            <p style={S.mutedText}>
              One of our team members will be in touch with your free Revenue Friction Snapshot shortly.
            </p>
            <button onClick={() => { handleReset(); onClose() }}
              style={S.closeLink}
              onMouseEnter={e => (e.currentTarget.style.color = '#f5f2ed')}
              onMouseLeave={e => (e.currentTarget.style.color = '#737373')}>
              Close
            </button>
          </div>

        ) : (

          /* ── Form ── */
          <div style={S.formWrap}>
            <p style={S.eyebrow}>Free Revenue Friction Snapshot</p>
            <h2 id="modal-title" style={S.title}>Get your snapshot</h2>
            <p style={{ ...S.mutedText, marginBottom: '28px' }}>
              We'll audit your store and deliver a prioritized breakdown of your top 3 revenue leaks.
            </p>

            <form onSubmit={handleSubmit} noValidate>

              <Field label="Name" required error={errors.name}>
                <input ref={firstFieldRef} id="f-name" name="name" type="text"
                  autoComplete="name" value={fields.name} onChange={handleChange}
                  placeholder="Your full name" style={iStyle(!!errors.name)}
                  onFocus={e => (e.currentTarget.style.borderColor = '#8a7a64')}
                  onBlur={e  => (e.currentTarget.style.borderColor = errors.name ? '#e06060' : '#242424')} />
              </Field>

              <Field label="Email address" required error={errors.email}>
                <input id="f-email" name="email" type="email"
                  autoComplete="email" value={fields.email} onChange={handleChange}
                  placeholder="you@brand.com" style={iStyle(!!errors.email)}
                  onFocus={e => (e.currentTarget.style.borderColor = '#8a7a64')}
                  onBlur={e  => (e.currentTarget.style.borderColor = errors.email ? '#e06060' : '#242424')} />
              </Field>

              <Field label="Company website" required error={errors.website}>
                <input id="f-website" name="website" type="text"
                  autoComplete="url" value={fields.website} onChange={handleChange}
                  placeholder="brand.com" style={iStyle(!!errors.website)}
                  onFocus={e => (e.currentTarget.style.borderColor = '#8a7a64')}
                  onBlur={e  => (e.currentTarget.style.borderColor = errors.website ? '#e06060' : '#242424')} />
              </Field>

              <Field label="Phone number" optional>
                <input id="f-phone" name="phone" type="tel"
                  autoComplete="tel" value={fields.phone} onChange={handleChange}
                  placeholder="+1 (555) 000-0000" style={iStyle(false)}
                  onFocus={e => (e.currentTarget.style.borderColor = '#8a7a64')}
                  onBlur={e  => (e.currentTarget.style.borderColor = '#242424')} />
              </Field>

              <Field label="Questions or comments" optional>
                <textarea id="f-message" name="message" rows={3}
                  value={fields.message} onChange={handleChange}
                  placeholder="Anything you'd like us to know about your store or goals..."
                  style={{ ...iStyle(false), resize: 'none' }}
                  onFocus={e => (e.currentTarget.style.borderColor = '#8a7a64')}
                  onBlur={e  => (e.currentTarget.style.borderColor = '#242424')} />
              </Field>

              {formState === 'error' && (
                <p style={{ fontSize: '12px', color: '#e06060', marginTop: '12px', lineHeight: 1.5 }}>
                  Something went wrong. Please try again or email arpiai.automation@gmail.com
                </p>
              )}

              <button type="submit" disabled={formState === 'submitting'} style={S.submitBtn}
                onMouseEnter={e => (e.currentTarget.style.background = '#f5f2ed')}
                onMouseLeave={e => (e.currentTarget.style.background = '#c8b89a')}>
                {formState === 'submitting' ? 'Sending...' : 'Get My Free Snapshot →'}
              </button>

              <p style={S.disclaimer}>No pitch call. No commitment. Just the audit.</p>
            </form>
          </div>
        )}
      </div>

      <style>{`
        @keyframes modalIn {
          from { opacity:0; transform: translateY(14px) scale(0.98); }
          to   { opacity:1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </div>
  )
}

/* ── Field wrapper ── */
function Field({ label, required, optional, error, children }: {
  label: string; required?: boolean; optional?: boolean
  error?: string; children: React.ReactNode
}) {
  return (
    <div style={{ marginBottom: '16px' }}>
      <label style={S.label}>
        {label}
        {required && <span style={{ color: '#c8b89a', marginLeft: 3 }}>*</span>}
        {optional && <span style={{ color: '#737373', fontWeight: 300, marginLeft: 4 }}>(optional)</span>}
      </label>
      {children}
      {error && <p style={{ marginTop: 5, fontSize: 12, color: '#e06060' }}>{error}</p>}
    </div>
  )
}

/* ── Style objects ── */
const S = {
  overlay: {
    position: 'fixed' as const,
    inset: 0,
    zIndex: 200,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '16px',
    background: 'rgba(0,0,0,0.85)',
    backdropFilter: 'blur(6px)',
  },
  panel: {
    position: 'relative' as const,
    width: '100%',
    maxWidth: '480px',
    maxHeight: '90vh',
    overflowY: 'auto' as const,
    background: '#161616',
    border: '1px solid #242424',
    animation: 'modalIn 0.25s ease forwards',
  },
  closeBtn: {
    position: 'absolute' as const,
    top: 16, right: 16,
    background: 'none',
    border: 'none',
    color: '#737373',
    cursor: 'pointer',
    padding: 4,
    lineHeight: 1,
    transition: 'color 0.2s',
  },
  formWrap:    { padding: '40px' },
  successWrap: { padding: '48px 40px', textAlign: 'center' as const },
  successIcon: {
    width: 44, height: 44,
    border: '1px solid #242424',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 24px',
  },
  eyebrow: {
    fontSize: 11,
    fontWeight: 500,
    letterSpacing: '0.12em',
    textTransform: 'uppercase' as const,
    color: '#8a7a64',
    marginBottom: 10,
  },
  title: {
    fontFamily: 'Instrument Serif, Georgia, serif',
    fontSize: 28,
    fontWeight: 400,
    lineHeight: 1.2,
    color: '#f5f2ed',
    marginBottom: 10,
  },
  mutedText: {
    fontSize: 14,
    fontWeight: 300,
    color: '#a3a3a3',
    lineHeight: 1.7,
  },
  label: {
    display: 'block' as const,
    fontSize: 12,
    fontWeight: 500,
    letterSpacing: '0.04em',
    color: '#a3a3a3',
    marginBottom: 6,
  },
  submitBtn: {
    marginTop: 24,
    width: '100%',
    padding: '15px 24px',
    background: '#c8b89a',
    color: '#0a0a0a',
    border: 'none',
    fontFamily: 'DM Sans, system-ui, sans-serif',
    fontSize: 14,
    fontWeight: 500,
    letterSpacing: '0.03em',
    cursor: 'pointer',
    transition: 'background 0.2s',
  },
  closeLink: {
    background: 'none',
    border: 'none',
    color: '#737373',
    fontSize: 13,
    cursor: 'pointer',
    textDecoration: 'underline' as const,
    textUnderlineOffset: '3px',
    transition: 'color 0.2s',
  },
  disclaimer: {
    marginTop: 12,
    textAlign: 'center' as const,
    fontSize: 12,
    color: '#737373',
  },
}

function iStyle(hasError: boolean): React.CSSProperties {
  return {
    width: '100%',
    padding: '10px 14px',
    background: '#111111',
    border: `1px solid ${hasError ? '#e06060' : '#242424'}`,
    color: '#e8e4dc',
    fontFamily: 'DM Sans, system-ui, sans-serif',
    fontSize: 14,
    fontWeight: 300,
    outline: 'none',
    transition: 'border-color 0.2s',
  }
}
