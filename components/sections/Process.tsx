// Matches <!-- PROCESS --> section from original HTML.
export default function Process() {
  return (
    <section className="process">
      <div className="wm">Process</div>
      <div className="wrap">

        <div className="sec-divider fu">
          <span className="sec-divider-n">04</span>
          <div className="sec-divider-line" />
          <span className="sec-divider-title">Process</span>
        </div>

        <div className="proc-layout">
          <div className="proc-sticky fu">
            <h2 className="proc-h2">How I <em>work</em></h2>
            <p className="proc-sub">A deliberate, collaborative process designed to produce work that lasts — not just looks good.</p>
          </div>

          <div className="steps">
            <div className="step fu">
              <span className="step-n">01</span>
              <div>
                <div className="step-h">Discover &amp; Define</div>
                <p className="step-p">Deep-dive into your brand&apos;s world — history, audience, competitors and ambitions. We align on vision before a single mark is made.</p>
              </div>
            </div>
            <div className="step fu d1">
              <span className="step-n">02</span>
              <div>
                <div className="step-h">Concept &amp; Explore</div>
                <p className="step-p">Multiple distinct directions — each rooted in strategy, each visually strong. We explore widely before committing.</p>
              </div>
            </div>
            <div className="step fu d2">
              <span className="step-n">03</span>
              <div>
                <div className="step-h">Refine &amp; Perfect</div>
                <p className="step-p">Focused iteration on the chosen direction. Every detail — spacing, weight, contrast — considered until it&apos;s right, not just good.</p>
              </div>
            </div>
            <div className="step fu d3">
              <span className="step-n">04</span>
              <div>
                <div className="step-h">Deliver &amp; Support</div>
                <p className="step-p">Organized, production-ready files with full guidelines. Available through rollout to ensure seamless execution.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
