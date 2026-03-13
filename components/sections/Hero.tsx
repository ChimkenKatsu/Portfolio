// Matches <!-- HERO --> section from original HTML.
// GSAP timeline targets (#heroWm, #hl1-3, #heroB, etc.) are untouched.
export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-wm" id="heroWm">Design</div>

      <div className="wrap hero-inner">
        <div className="hero-content">

          <div className="hero-top-row">
            <div className="badge-avail" id="heroB">
              <span className="badge-dot" />Currently open to new projects
            </div>
            <span className="label" id="heroLbl">Based in the Philippines</span>
          </div>

          <h1 className="hero-h1" id="heroH">
            <span className="mask"><span className="mask-inner" id="hl1">Crafting <em>visual</em></span></span>
            <span className="mask"><span className="mask-inner" id="hl2">stories that</span></span>
            <span className="mask"><span className="mask-inner" id="hl3">leave marks</span></span>
          </h1>

          <div className="hero-bottom-row">
            <p className="hero-desc" id="heroDesc">
              Designing identities, campaigns and visual systems that endure — where strategy meets soul and form meets meaning.
            </p>

            <div className="hero-stats" id="heroStats">
              <div><span className="hstat-n">7+</span><span className="hstat-l">Years exp.</span></div>
              <div><span className="hstat-n">80+</span><span className="hstat-l">Projects</span></div>
              <div><span className="hstat-n">40+</span><span className="hstat-l">Brands</span></div>
            </div>

            <div className="hero-cta" id="heroCta">
              <a href="#contact" className="btn btn-light"><span className="btn-text">Start a project</span></a>
              <a href="#work" className="link-arrow">See my work <span className="arr">→</span></a>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll ticker */}
      <div className="wrap" style={{ paddingBottom: 0 }}>
        <div className="hero-scroll-strip">
          <div className="scroll-ticker" id="ticker">
            <span>Brand Identity</span><span className="tick-sep">·</span>
            <span>Editorial</span><span className="tick-sep">·</span>
            <span>Art Direction</span><span className="tick-sep">·</span>
            <span>Packaging</span><span className="tick-sep">·</span>
            <span>Campaigns</span><span className="tick-sep">·</span>
            <span>Typography</span><span className="tick-sep">·</span>
            <span>Motion</span><span className="tick-sep">·</span>
            <span>Brand Identity</span><span className="tick-sep">·</span>
            <span>Editorial</span><span className="tick-sep">·</span>
            <span>Art Direction</span><span className="tick-sep">·</span>
            <span>Packaging</span><span className="tick-sep">·</span>
            <span>Campaigns</span><span className="tick-sep">·</span>
            <span>Typography</span><span className="tick-sep">·</span>
            <span>Motion</span><span className="tick-sep">·</span>
          </div>
        </div>
      </div>
    </section>
  );
}
