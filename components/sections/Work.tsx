// Matches <!-- WORK --> section from original HTML.
// CSS (.wi:nth-child) handles the asymmetric 12-column grid positions.
export default function Work() {
  return (
    <section className="work" id="work">
      <div className="wm">Works</div>
      <div className="wrap">

        <div className="sec-divider fu">
          <span className="sec-divider-n">02</span>
          <div className="sec-divider-line" />
          <span className="sec-divider-title">Work</span>
        </div>

        <div className="work-header">
          <h2 className="work-h2 fu">Recent<br /><em>Works</em></h2>
          <div className="work-aside">
            <p className="fu">A curated selection across brand identity, editorial and digital campaigns.</p>
            <a href="#" className="link-arrow fu d1">View all projects <span className="arr">→</span></a>
          </div>
        </div>

        <div className="work-grid">

          {/* Project 1 */}
          <div className="wi fu">
            <div className="work-thumb">
              <div className="proj-bg" style={{ background: "#161412" }}>
                <svg viewBox="0 0 260 340"><use href="#tp-light" /></svg>
              </div>
              <div className="proj-meta">
                <span className="proj-meta-cat">Brand Identity</span>
                <span className="proj-meta-cta">View project →</span>
              </div>
            </div>
            <div className="work-caption">
              <h3>Aurelius Brand Identity</h3>
              <p>Identity / Packaging · 2024</p>
            </div>
          </div>

          {/* Project 2 */}
          <div className="wi fu d1">
            <div className="work-thumb">
              <div className="proj-bg" style={{ background: "#EDEAE4" }}>
                <svg viewBox="0 0 260 340"><use href="#tp-dark" /></svg>
              </div>
              <div className="proj-meta">
                <span className="proj-meta-cat">Editorial Design</span>
                <span className="proj-meta-cta">View project →</span>
              </div>
            </div>
            <div className="work-caption">
              <h3>Volta Magazine — Vol. 4</h3>
              <p>Editorial / Typography · 2024</p>
            </div>
          </div>

          {/* Project 3 */}
          <div className="wi fu d2">
            <div className="work-thumb">
              <div className="proj-bg" style={{ background: "#2A1F0F" }}>
                <svg viewBox="0 0 260 340"><use href="#tp-light" /></svg>
              </div>
              <div className="proj-meta">
                <span className="proj-meta-cat">Art Direction</span>
                <span className="proj-meta-cta">View project →</span>
              </div>
            </div>
            <div className="work-caption">
              <h3>Solis Visual Campaign</h3>
              <p>Art Direction / Digital · 2023</p>
            </div>
          </div>

          {/* Project 4 */}
          <div className="wi fu d3">
            <div className="work-thumb">
              <div className="proj-bg" style={{ background: "#F8F6F2", outline: "1px solid rgba(22,20,18,.09)" }}>
                <svg viewBox="0 0 260 340"><use href="#tp-dark" /></svg>
              </div>
              <div className="proj-meta">
                <span className="proj-meta-cat">Packaging</span>
                <span className="proj-meta-cta">View project →</span>
              </div>
            </div>
            <div className="work-caption">
              <h3>Terroir Packaging System</h3>
              <p>Packaging / Print · 2023</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
