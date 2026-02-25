import './HowItWorks.css'

const steps = [
  {
    num: '01',
    title: 'Public Friction Snapshot',
    desc: 'We audit your store from the outside — what a paid visitor experiences when they land. Speed, layout, trust signals, flow.',
  },
  {
    num: '02',
    title: 'Identify Top 3 Revenue Leaks',
    desc: 'Not a 40-item spreadsheet. We surface the three friction points costing you the most money right now.',
  },
  {
    num: '03',
    title: 'Prioritize Highest-Impact Fixes',
    desc: 'Every fix is ranked by estimated revenue lift vs. implementation effort. You always know what to do first.',
  },
  {
    num: '04',
    title: 'Implement & Measure Lift',
    desc: 'We implement the changes and track measurable lift in CVR, AOV, and attributed revenue — not vanity metrics.',
  },
]

export default function HowItWorks() {
  return (
    <div className="how-section" id="how">
      <div className="how-inner">
        <div className="how-header reveal">
          <div>
            <div className="section-label">Process</div>
            <h2 className="section-title">How it <em>works</em></h2>
          </div>
          <p className="section-body">
            A structured four-step process designed to find the highest-ROI fixes
            in your funnel — prioritized by revenue impact, not complexity.
          </p>
        </div>

        <div className="steps-grid reveal">
          {steps.map((step) => (
            <div className="step" key={step.num}>
              <span className="step-num">{step.num}</span>
              <div className="step-title">{step.title}</div>
              <div className="step-desc">{step.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
