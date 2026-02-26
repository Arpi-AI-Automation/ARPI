import './Hero.css'

interface HeroProps {
  onCtaClick: () => void
}

export default function Hero({ onCtaClick }: HeroProps) {
  return (
    <div className="hero">
      <div className="hero-bg" />
      <div className="hero-grid-overlay" />

      <div className="hero-inner">
        <div className="hero-eyebrow">Revenue Friction &amp; Conversion Optimization</div>

        <h1 className="hero-headline">
          Increase Revenue From The Traffic<br />
          You're <em>Already Paying For</em>
        </h1>

        <p className="hero-sub">
          We help e-com brands identify and fix conversion friction across speed,
          funnel flow, and tracking — before you scale ad spend.
        </p>

        <div className="hero-actions">
          <button onClick={onCtaClick} className="btn-primary">
            Get Your Revenue Friction Snapshot
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <span className="hero-qualifier">
            Built for <strong>Shopify brands</strong> running paid traffic.
          </span>
        </div>
      </div>

      <div className="hero-bottom">
        <div className="hero-stat">
          <span className="hero-stat-num">3–7×</span>
          <span className="hero-stat-label">Avg. ROAS improvement window</span>
        </div>
        <div className="hero-stat-divider" />
        <div className="hero-stat">
          <span className="hero-stat-num">48h</span>
          <span className="hero-stat-label">Friction snapshot turnaround</span>
        </div>
        <div className="hero-stat-divider" />
        <div className="hero-stat">
          <span className="hero-stat-num">4-step</span>
          <span className="hero-stat-label">Prioritized fix methodology</span>
        </div>
      </div>
    </div>
  )
}
