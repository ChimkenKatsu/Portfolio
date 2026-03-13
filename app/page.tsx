// Root page — mirrors the body order of the original HTML exactly
import LogoDefs     from "@/components/ui/LogoDefs";
import FxLayer      from "@/components/ui/FxLayer";
import Nav          from "@/components/sections/Nav";
import Hero         from "@/components/sections/Hero";
import MarqueeStrip from "@/components/sections/MarqueeStrip";
import About        from "@/components/sections/About";
import Work         from "@/components/sections/Work";
import Services     from "@/components/sections/Services";
import Process      from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import Contact      from "@/components/sections/Contact";
import Footer       from "@/components/sections/Footer";
import Scripts      from "@/components/ui/Scripts";

export default function Home() {
  return (
    <>
      {/* Hidden SVG <defs> — #tp-dark and #tp-light symbols used via <use href> */}
      <LogoDefs />

      {/* Fixed FX: noise texture, grid lines, custom cursor */}
      <FxLayer />

      {/* Navigation */}
      <Nav />

      {/* Page sections — same order as original HTML */}
      <main>
        <Hero />
        <MarqueeStrip />
        <About />
        <Work />
        <Services />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />

      {/* All JS from original <script> block — runs after hydration */}
      <Scripts />
    </>
  );
}
