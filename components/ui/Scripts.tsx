"use client";
// The entire <script> block from the original HTML, ported to a client component.
// Runs once on mount — identical logic, zero behaviour changes.
import { useEffect } from "react";

export default function Scripts() {
  useEffect(() => {
    const gsap: any        = (window as any).gsap;
    const ScrollTrigger: any = (window as any).ScrollTrigger;
    if (!gsap || !ScrollTrigger) return;

    gsap.registerPlugin(ScrollTrigger);

    /* ── CURSOR ── */
    const cur  = document.getElementById("cur")!;
    const ring = document.getElementById("cur-ring")!;
    let mx = 0, my = 0, rx = 0, ry = 0;

    document.addEventListener("mousemove", (e) => {
      mx = e.clientX; my = e.clientY;
      cur.style.left = mx + "px"; cur.style.top = my + "px";
    });

    (function loop() {
      rx += (mx - rx) * 0.1; ry += (my - ry) * 0.1;
      ring.style.left = rx + "px"; ring.style.top = ry + "px";
      requestAnimationFrame(loop);
    })();

    document.querySelectorAll("a, button, .wi, .srv, .tc, .skill").forEach((el) => {
      el.addEventListener("mouseenter", () => document.body.classList.add("cur-hover"));
      el.addEventListener("mouseleave", () => document.body.classList.remove("cur-hover"));
    });

    /* ── NAV ── */
    window.addEventListener("scroll", () => {
      document.getElementById("nav")!.classList.toggle("scrolled", window.scrollY > 50);
    });

    /* ── HAMBURGER ── */
    const ham = document.getElementById("ham")!;
    const mob = document.getElementById("mobNav")!;
    ham.addEventListener("click", () => {
      ham.classList.toggle("open");
      mob.classList.toggle("open");
    });

    /* ── HERO INTRO TIMELINE ── */
    const tl = gsap.timeline({ delay: 0.25 });
    gsap.set("#heroWm",              { opacity: 0, scale: 1.06 });
    gsap.set(["#hl1","#hl2","#hl3"],{ y: "105%" });
    gsap.set(["#heroB","#heroLbl"], { opacity: 0, y: 12 });
    gsap.set("#heroDesc",           { opacity: 0, y: 20, filter: "blur(4px)" });
    gsap.set(["#heroStats","#heroCta"], { opacity: 0, y: 18 });

    tl.to("#heroWm",              { opacity: 1, scale: 1,   duration: 1.9,  ease: "power3.out" }, 0)
      .to(["#hl1","#hl2","#hl3"],{ y: "0%",                duration: 1.25, stagger: 0.13, ease: "power4.out" }, 0.2)
      .to(["#heroB","#heroLbl"], { opacity: 1, y: 0,       duration: 0.9,  stagger: 0.08, ease: "power3.out" }, 0.3)
      .to("#heroDesc",           { opacity: 1, y: 0, filter: "blur(0px)", duration: 1, ease: "power3.out" }, 0.9)
      .to(["#heroStats","#heroCta"], { opacity: 1, y: 0,   duration: 0.9,  stagger: 0.1,  ease: "power3.out" }, 1.05);

    /* ── WATERMARK PARALLAX ── */
    document.querySelectorAll<HTMLElement>(".wm").forEach((el) => {
      gsap.fromTo(el,
        { y: 40, opacity: 0 },
        { y: -60, opacity: 1, ease: "none",
          scrollTrigger: { trigger: el.closest("section"), start: "top bottom", end: "bottom top", scrub: 2 },
        }
      );
    });
    gsap.to("#heroWm", { y: 100, ease: "none",
      scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 1.8 },
    });

    /* ── SECTION DIVIDER LINES ── */
    document.querySelectorAll<HTMLElement>(".sec-divider-line").forEach((line) => {
      gsap.to(line, { scaleX: 1, duration: 1.2, ease: "power3.out",
        scrollTrigger: { trigger: line.closest(".sec-divider"), start: "top 88%" },
      });
    });

    /* ── FADE UP ── */
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("in"); });
    }, { threshold: 0.08 });
    document.querySelectorAll(".fu").forEach((el) => io.observe(el));

    /* ── SMOOTH ANCHOR + CLOSE MOB ── */
    const closeMob = () => { ham.classList.remove("open"); mob.classList.remove("open"); };
    document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((a) => {
      a.addEventListener("click", (e) => {
        const target = document.querySelector(a.getAttribute("href")!);
        if (target) { e.preventDefault(); target.scrollIntoView({ behavior: "smooth" }); closeMob(); }
      });
    });

    /* ── CONTACT FORM ── */
    const form = document.querySelector<HTMLFormElement>(".cf");
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        form.style.transition    = "opacity .5s";
        form.style.opacity       = ".35";
        form.style.pointerEvents = "none";
        setTimeout(() => {
          form.style.display = "none";
          const success = document.getElementById("cf-success");
          if (success) success.style.display = "block";
        }, 600);
      });
    }

    return () => { io.disconnect(); };
  }, []);

  return null; // renders nothing — side-effects only
}
