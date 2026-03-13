// Matches <!-- MARQUEE --> block from original HTML.
// Two duplicate .mq-item divs create the seamless CSS loop (mq keyframe).
export default function MarqueeStrip() {
  const row = (
    <div className="mq-item">
      <span>Aurelius Studio</span><span className="mq-dot" />
      <span>Volta Magazine</span><span className="mq-dot" />
      <span>Terroir Collective</span><span className="mq-dot" />
      <span>Solis Agency</span><span className="mq-dot" />
      <span>Nova Brand Co.</span><span className="mq-dot" />
      <span>Meridian Labs</span><span className="mq-dot" />
      <span>Lux Collective</span><span className="mq-dot" />
      <span>Forma Studio</span><span className="mq-dot" />
    </div>
  );
  return (
    <div className="marquee-strip">
      <div className="mq-track">
        {row}
        {row}
      </div>
    </div>
  );
}
