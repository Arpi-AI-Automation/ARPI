import './CTA.css'

interface CTAProps {
  onCtaClick: () => void
}

export default function CTA({ onCtaClick }: CTAProps) {
  return (
    <div className="cta-section" id="contact">
      <div className="cta-bg" />
      <div className="cta-inner reveal">
        <div className="section-label" style={{ justifyContent: 'center', marginBottom: '24px' }}>
          Start Here
        </div>
        <h2 className="cta-title">
          See exactly where your funnel is <em>leaking revenue</em>
        </h2>
        <p className="cta-body">
          We'll run a public friction snapshot on your store and deliver a prioritized
          breakdown of your top 3 revenue leaks — free, no strings attached.
        </p>
        <button onClick={onCtaClick} className="btn-primary cta-btn">
          Get Your Revenue Friction Snapshot
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <p className="cta-note">Built for Shopify brands spending $10k+/mo on paid traffic.</p>
      </div>
    </div>
  )
}
