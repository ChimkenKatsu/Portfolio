"use client";
import { useEffect, useRef } from "react";

export default function Cursor() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mx = 0, my = 0, rx = 0, ry = 0;
    const dot  = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY;
      dot.style.left = mx + "px"; dot.style.top = my + "px";
    };
    document.addEventListener("mousemove", onMove);

    let af: number;
    const loop = () => {
      rx += (mx - rx) * 0.1; ry += (my - ry) * 0.1;
      ring.style.left = rx + "px"; ring.style.top = ry + "px";
      af = requestAnimationFrame(loop);
    };
    loop();

    const hoverEls = document.querySelectorAll("a,button,.wi-wrap,.srv-card,.tc,.skill");
    const add    = () => document.body.classList.add("cur-hover");
    const remove = () => document.body.classList.remove("cur-hover");
    hoverEls.forEach(el => { el.addEventListener("mouseenter", add); el.addEventListener("mouseleave", remove); });

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(af);
      hoverEls.forEach(el => { el.removeEventListener("mouseenter", add); el.removeEventListener("mouseleave", remove); });
    };
  }, []);

  return (
    <>
      <div ref={dotRef}  className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}
