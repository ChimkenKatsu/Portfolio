// Matches <!-- SERVICES --> section from original HTML.
// Inline SVG icons are identical to original.
export default function Services() {
  return (
    <section className="services" id="services">
      <div className="wrap">
        <div className="sec-divider fu">
          <span className="sec-divider-n">03</span>
          <div className="sec-divider-line" />
          <span className="sec-divider-title">Services</span>
        </div>
      </div>

      <div className="srv-grid" style={{ maxWidth: 1380, margin: "0 auto", padding: "0 5rem" }}>

        <div className="srv fu">
          <div className="srv-num">01</div>
          <svg className="srv-icon" viewBox="0 0 38 38" fill="none">
            <rect x=".5" y=".5" width="37" height="37" stroke="#C9A84C" strokeWidth=".7" />
            <path d="M7 19h24M19 7v24" stroke="#161412" strokeWidth=".85" />
            <circle cx="19" cy="19" r="7" stroke="#161412" strokeWidth=".85" />
          </svg>
          <h3 className="srv-h3">Brand Identity &amp; Visual Systems</h3>
          <p className="srv-p">Logos, mark-making, color systems and full brand guidelines that give your brand a coherent, ownable visual voice.</p>
          <div className="tags">
            <span className="tag">Logo Design</span>
            <span className="tag">Brand Guide</span>
            <span className="tag">Typography</span>
          </div>
        </div>

        <div className="srv fu d1">
          <div className="srv-num">02</div>
          <svg className="srv-icon" viewBox="0 0 38 38" fill="none">
            <rect x=".5" y=".5" width="37" height="37" stroke="#C9A84C" strokeWidth=".7" />
            <rect x="7" y="11" width="9" height="16" stroke="#161412" strokeWidth=".85" />
            <line x1="20" y1="11" x2="31" y2="11" stroke="#161412" strokeWidth=".85" />
            <line x1="20" y1="17" x2="31" y2="17" stroke="#161412" strokeWidth=".85" />
            <line x1="20" y1="23" x2="28" y2="23" stroke="#161412" strokeWidth=".85" />
          </svg>
          <h3 className="srv-h3">Editorial &amp; Print Design</h3>
          <p className="srv-p">Magazine layouts, annual reports, lookbooks and printed collateral with obsessive attention to grid and type hierarchy.</p>
          <div className="tags">
            <span className="tag">Magazines</span>
            <span className="tag">Lookbooks</span>
            <span className="tag">Print</span>
          </div>
        </div>

        <div className="srv fu d2">
          <div className="srv-num">03</div>
          <svg className="srv-icon" viewBox="0 0 38 38" fill="none">
            <rect x=".5" y=".5" width="37" height="37" stroke="#C9A84C" strokeWidth=".7" />
            <rect x="7" y="9" width="24" height="15" stroke="#161412" strokeWidth=".85" />
            <line x1="19" y1="24" x2="19" y2="30" stroke="#161412" strokeWidth=".85" />
            <line x1="13" y1="30" x2="25" y2="30" stroke="#161412" strokeWidth=".85" />
          </svg>
          <h3 className="srv-h3">Digital &amp; Campaign Design</h3>
          <p className="srv-p">Social campaigns, digital ads, motion graphics and UI that translate brand identity into compelling digital experiences.</p>
          <div className="tags">
            <span className="tag">Social Media</span>
            <span className="tag">Campaigns</span>
            <span className="tag">Motion</span>
          </div>
        </div>

      </div>
    </section>
  );
}
