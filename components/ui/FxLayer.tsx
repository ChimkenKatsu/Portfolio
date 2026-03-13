// Fixed FX elements from top of original HTML body:
// #noise, 4x .vline, #cur, #cur-ring
// Cursor interactivity is handled in Scripts.tsx (same JS as original)
export default function FxLayer() {
  return (
    <>
      <div id="noise" aria-hidden="true" />
      <div className="vline" style={{ left: "8.33%" }} />
      <div className="vline" style={{ left: "33.33%" }} />
      <div className="vline" style={{ left: "66.66%" }} />
      <div className="vline" style={{ left: "91.66%" }} />
      <div id="cur" />
      <div id="cur-ring" />
    </>
  );
}
