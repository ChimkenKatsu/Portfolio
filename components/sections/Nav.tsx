// Matches <!-- MOBILE NAV --> and <!-- NAV --> blocks from original HTML.
// State (scrolled, open) replaces the original window scroll listener + ham click handler.
// closeMob logic lives in Scripts.tsx for anchor clicks; toggle is local here.
export default function Nav() {
  return (
    <>
      {/* Mobile overlay — .mob-nav */}
      <div className="mob-nav" id="mobNav">
        <a href="#about">About</a>
        <a href="#work">Work</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
        <div className="badge-avail" style={{ marginTop: "1rem" }}>
          <span className="badge-dot" />Available for work
        </div>
      </div>

      {/* Fixed nav */}
      <nav id="nav">
        <div className="nav-fill" />
        <a href="#" className="nav-logo">Tristan Parajes</a>
        <div className="nav-right">
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#work">Work</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div className="badge-avail">
            <span className="badge-dot" />Available
          </div>
          <button className="ham" id="ham" aria-label="Menu">
            <span className="ham-line" />
            <span className="ham-line" />
            <span className="ham-line" />
          </button>
        </div>
      </nav>
    </>
  );
}
