"use client";
import { useEffect, useRef } from "react";

interface Props { num: string; title: string; dark?: boolean; }

export default function SectionDivider({ num, title, dark }: Props) {
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const line = lineRef.current;
    if (!line) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        line.style.transition = "transform 1.2s cubic-bezier(.22,1,.36,1)";
        line.style.transform  = "scaleX(1)";
      }
    }, { threshold: 0.2 });
    io.observe(line);
    return () => io.disconnect();
  }, []);

  const dim = dark ? "rgba(248,246,242,.28)" : "var(--muted)";
  const lineBg = dark ? "rgba(248,246,242,.08)" : "var(--border)";

  return (
    <div style={{ display:"grid", gridTemplateColumns:"auto 1fr auto", alignItems:"center", gap:"1.5rem", marginBottom:"5rem" }}>
      <span style={{ fontSize:".58rem", letterSpacing:".25em", color:dim, fontWeight:500 }}>{num}</span>
      <div ref={lineRef} style={{ height:"1px", background:lineBg, transform:"scaleX(0)", transformOrigin:"left" }} />
      <span style={{ fontSize:".58rem", letterSpacing:".25em", color:dim, fontWeight:500, textTransform:"uppercase" }}>{title}</span>
    </div>
  );
}
