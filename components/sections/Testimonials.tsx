// Matches <!-- TESTIMONIALS --> section from original HTML.
export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="wrap">

        <div className="sec-divider fu">
          <span className="sec-divider-n">05</span>
          <div className="sec-divider-line" />
          <span className="sec-divider-title">Testimonials</span>
        </div>

        <div className="tgrid">

          <div className="tc fu">
            <div className="tc-stars">★★★★★</div>
            <p className="tc-q">&ldquo;Tristan brought an extraordinary sense of refinement to our rebrand. The final system felt timeless the moment we saw it.&rdquo;</p>
            <div className="tc-author">
              <div className="tc-av" style={{ background: "#C4956A", color: "#fff" }}>SR</div>
              <div>
                <div className="tc-name">Sofia Reyes</div>
                <div className="tc-role">Creative Director, Aurelius Studio</div>
              </div>
            </div>
          </div>

          <div className="tc fu d1">
            <div className="tc-stars">★★★★★</div>
            <p className="tc-q">&ldquo;The editorial design for our magazine was flawless. Tristan understood our voice immediately and elevated it into something we&apos;re proud of.&rdquo;</p>
            <div className="tc-author">
              <div className="tc-av" style={{ background: "#7A8B7F", color: "#fff" }}>MD</div>
              <div>
                <div className="tc-name">Marco Delgado</div>
                <div className="tc-role">Editor-in-Chief, Volta Magazine</div>
              </div>
            </div>
          </div>

          <div className="tc fu d2">
            <div className="tc-stars">★★★★★</div>
            <p className="tc-q">&ldquo;Working with Tristan felt like partnering with someone who genuinely cares. The strategic thinking behind each decision was exceptional.&rdquo;</p>
            <div className="tc-author">
              <div className="tc-av" style={{ background: "#9B8E7A", color: "#fff" }}>IL</div>
              <div>
                <div className="tc-name">Isabelle Laurent</div>
                <div className="tc-role">Founder, Terroir Collective</div>
              </div>
            </div>
          </div>

          <div className="tc fu d3">
            <div className="tc-stars">★★★★★</div>
            <p className="tc-q">&ldquo;Every deliverable exceeded expectations. Tristan has a rare ability to make complex brand systems feel effortless and beautiful.&rdquo;</p>
            <div className="tc-author">
              <div className="tc-av" style={{ background: "#6B7B8A", color: "#fff" }}>JO</div>
              <div>
                <div className="tc-name">James Okonkwo</div>
                <div className="tc-role">Brand Lead, Solis Agency</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
