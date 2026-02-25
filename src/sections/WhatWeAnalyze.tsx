import './WhatWeAnalyze.css'

const cards = [
  {
    title: 'Speed & Load Behavior',
    desc: 'LCP, FID, CLS scored in the context of paid traffic — not just Lighthouse. We care about what your buyers actually experience on mobile.',
    tags: ['Core Web Vitals', 'Mobile Performance', 'Time to Interactive'],
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
  },
  {
    title: 'Funnel Structure',
    desc: 'Landing page → PDP → cart → checkout. We map where visitors drop and why — with specific fixes for each leak point.',
    tags: ['Landing Pages', 'PDP Optimization', 'Checkout Flow'],
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="4" rx="1"/><rect x="3" y="10" width="12" height="4" rx="1"/><rect x="3" y="17" width="8" height="4" rx="1"/>
      </svg>
    ),
  },
  {
    title: 'Tracking & Attribution',
    desc: 'Broken pixels, misattributed revenue, and bad data silently inflate your CPA. We find and fix data gaps before you scale.',
    tags: ['Pixel Health', 'Server-Side Events', 'GA4 Accuracy'],
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
  },
  {
    title: 'Trust & Clarity Signals',
    desc: 'Copy hierarchy, social proof placement, offer clarity, and objection handling — the soft signals that kill conversions quietly.',
    tags: ['Social Proof', 'Offer Clarity', 'Objection Handling'],
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
]

export default function WhatWeAnalyze() {
  return (
    <div className="analyze-section" id="analyze">
      <div className="analyze-inner">
        <div className="analyze-header reveal">
          <div>
            <div className="section-label">Scope</div>
            <h2 className="section-title">What we <em>analyze</em></h2>
          </div>
          <p className="section-body">
            Four diagnostic layers that cover every stage of the paid traffic journey —
            from first click to confirmed order.
          </p>
        </div>

        <div className="analyze-grid reveal">
          {cards.map((card) => (
            <div className="analyze-card" key={card.title}>
              <div className="analyze-icon">{card.icon}</div>
              <div className="analyze-title">{card.title}</div>
              <div className="analyze-desc">{card.desc}</div>
              <div className="analyze-tags">
                {card.tags.map((tag) => (
                  <span className="tag" key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
