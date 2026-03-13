const clients = ["Aurelius Studio","Volta Magazine","Terroir Collective","Solis Agency","Nova Brand Co.","Meridian Labs","Lux Collective","Forma Studio"];

export default function Marquee() {
  return (
    <div style={{ borderTop:"1px solid var(--border)", borderBottom:"1px solid var(--border)", padding:"1.5rem 0", overflow:"hidden", background:"var(--bg)" }}>
      <div className="mq-track">
        {[...clients, ...clients].map((c, i) => (
          <div key={i} style={{ display:"flex", alignItems:"center", gap:"2.5rem", padding:"0 2.5rem", fontSize:".6rem", letterSpacing:".25em", textTransform:"uppercase", color:"var(--muted)", whiteSpace:"nowrap" }}>
            <span>{c}</span>
            <span style={{ width:3, height:3, background:"var(--gold)", borderRadius:"50%", display:"block", flexShrink:0 }} />
          </div>
        ))}
      </div>
    </div>
  );
}
