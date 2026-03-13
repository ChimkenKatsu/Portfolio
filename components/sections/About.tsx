// Matches <!-- ABOUT --> section from original HTML.
export default function About() {
  return (
    <section className="about" id="about">
      <div className="wm">About</div>
      <div className="wrap">

        <div className="sec-divider fu">
          <span className="sec-divider-n">01</span>
          <div className="sec-divider-line" />
          <span className="sec-divider-title">About</span>
        </div>

        <div className="about-grid">

          {/* Logo panels */}
          <div className="logo-panels fu">
            <div className="lp lp-a">
              <svg viewBox="0 0 260 340"><use href="#tp-dark" /></svg>
              <span className="lp-tag">Light ver.</span>
            </div>
            <div className="lp lp-b">
              <svg viewBox="0 0 260 340"><use href="#tp-light" /></svg>
              <span className="lp-tag">Dark ver.</span>
            </div>
          </div>

          <div>
            <span className="eyebrow fu">The Designer</span>
            <h2 className="about-h2 fu">
              Design is the<br /><em>language</em><br />ideas speak in
            </h2>
            <p className="about-body fu">
              I&apos;m <strong>Tristan Parajes</strong> — a graphic designer crafting identities,
              campaigns and visual systems that endure. Based in the Philippines, I work where
              strategy meets soul.
            </p>
            <p className="about-body fu d1">
              Every project begins with listening — understanding not just what a brand looks like,
              but what it stands for, who it speaks to, and where it wants to go.
            </p>
            <div className="skills fu d2">
              <span className="skill">Brand Identity</span>
              <span className="skill">Editorial</span>
              <span className="skill">Typography</span>
              <span className="skill">Art Direction</span>
              <span className="skill">Packaging</span>
              <span className="skill">Digital</span>
              <span className="skill">Motion</span>
            </div>
            <div className="stats-bar fu d3">
              <div><div className="stat-n">7+</div><div className="stat-l">Years</div></div>
              <div><div className="stat-n">80+</div><div className="stat-l">Projects</div></div>
              <div><div className="stat-n">40+</div><div className="stat-l">Brands</div></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
