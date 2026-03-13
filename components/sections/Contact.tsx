// Matches <!-- CONTACT --> section from original HTML.
// Form submit is handled by Scripts.tsx (same logic as original submitForm()).
export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="wm">Contact</div>
      <div className="wrap">
        <div className="contact-layout">

          {/* Left column */}
          <div>
            <div className="sec-divider fu" style={{ ["--border" as string]: "rgba(248,246,242,.08)" }}>
              <span className="sec-divider-n" style={{ color: "rgba(248,246,242,.3)" }}>06</span>
              <div className="sec-divider-line" style={{ background: "rgba(248,246,242,.08)" }} />
              <span className="sec-divider-title" style={{ color: "rgba(248,246,242,.3)" }}>Contact</span>
            </div>
            <h2 className="contact-h2 fu">Let&apos;s create<br />something <em>remarkable</em></h2>
            <p className="contact-desc fu">Have a project in mind? I&apos;d love to hear about it. Reach out directly or fill in the form.</p>
            <div className="c-info fu d1">
              <div className="c-row"><span className="c-lbl">Email</span><a href="mailto:hello@tristanparajes.com" className="c-val">hello@tristanparajes.com</a></div>
              <div className="c-row"><span className="c-lbl">Location</span><span className="c-val">Philippines</span></div>
              <div className="c-row"><span className="c-lbl">Instagram</span><a href="#" className="c-val">@tristanparajes</a></div>
              <div className="c-row"><span className="c-lbl">Behance</span><a href="#" className="c-val">behance.net/tristanparajes</a></div>
            </div>
          </div>

          {/* Right column — form */}
          <div className="fu d2">
            <form className="cf">
              <div className="cf-row2">
                <div className="cf-field">
                  <label className="cf-lbl">Name</label>
                  <input className="cf-in" type="text" placeholder="Your name" required />
                </div>
                <div className="cf-field">
                  <label className="cf-lbl">Email</label>
                  <input className="cf-in" type="email" placeholder="your@email.com" required />
                </div>
              </div>
              <div className="cf-field">
                <label className="cf-lbl">Project type</label>
                <input className="cf-in" type="text" placeholder="Brand identity, editorial, campaign…" />
              </div>
              <div className="cf-field">
                <label className="cf-lbl">Message</label>
                <textarea className="cf-ta" placeholder="Tell me about your project…" required />
              </div>
              <button type="submit" className="cf-btn"><span>Send Message →</span></button>
            </form>
            <div id="cf-success">✓ &nbsp;Message sent — I&apos;ll be in touch soon.</div>
          </div>

        </div>
      </div>
    </section>
  );
}
