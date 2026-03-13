"use client";
import { useEffect, useRef, ReactNode } from "react";

interface Props { children: ReactNode; delay?: number; className?: string; }

export default function FadeUp({ children, delay = 0, className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add("in"); io.disconnect(); }
    }, { threshold: 0.08 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`fu ${className}`} style={delay ? { transitionDelay: `${delay}s` } : {}}>
      {children}
    </div>
  );
}
