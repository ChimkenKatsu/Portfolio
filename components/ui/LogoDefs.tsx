// SVG symbol defs from original HTML.
// Both symbols are referenced throughout via: <svg><use href="#tp-dark"/></svg>
export default function LogoDefs() {
  return (
    <svg style={{ display: "none" }} xmlns="http://www.w3.org/2000/svg">
      <defs>

        <symbol id="tp-dark" viewBox="0 0 260 340">
          <rect x="2" y="2" width="256" height="336" fill="none" stroke="#161412" strokeWidth=".9" />
          <rect x="8.5" y="8.5" width="243" height="323" fill="none" stroke="#161412" strokeWidth=".3" strokeDasharray="3 3" />
          <line x1="2"   y1="2"   x2="30"  y2="2"   stroke="#C9A84C" strokeWidth="2.5" />
          <line x1="2"   y1="2"   x2="2"   y2="30"  stroke="#C9A84C" strokeWidth="2.5" />
          <line x1="258" y1="2"   x2="230" y2="2"   stroke="#C9A84C" strokeWidth="2.5" />
          <line x1="258" y1="2"   x2="258" y2="30"  stroke="#C9A84C" strokeWidth="2.5" />
          <line x1="2"   y1="338" x2="30"  y2="338" stroke="#C9A84C" strokeWidth="2.5" />
          <line x1="2"   y1="338" x2="2"   y2="310" stroke="#C9A84C" strokeWidth="2.5" />
          <line x1="258" y1="338" x2="230" y2="338" stroke="#C9A84C" strokeWidth="2.5" />
          <line x1="258" y1="338" x2="258" y2="310" stroke="#C9A84C" strokeWidth="2.5" />
          <line x1="26"  y1="236" x2="234" y2="236" stroke="#C9A84C" strokeWidth=".6" opacity=".6" />
          <text x="130" y="210" fontFamily="'Playfair Display',Georgia,serif" fontSize="140" fontWeight="400" textAnchor="middle" fill="#161412" letterSpacing="-3">TP</text>
          <text x="130" y="270" fontFamily="'Inter',Arial,sans-serif" fontSize="13" fontWeight="400" textAnchor="middle" fill="#161412" letterSpacing="6.5">TRISTAN PARAJES</text>
          <text x="130" y="294" fontFamily="'Inter',Arial,sans-serif" fontSize="8.5" fontWeight="300" textAnchor="middle" fill="#7A756F" letterSpacing="5.5">GRAPHIC DESIGNER</text>
        </symbol>

        <symbol id="tp-light" viewBox="0 0 260 340">
          <rect x="2" y="2" width="256" height="336" fill="none" stroke="#F8F6F2" strokeWidth=".9" />
          <rect x="8.5" y="8.5" width="243" height="323" fill="none" stroke="#F8F6F2" strokeWidth=".3" strokeDasharray="3 3" />
          <line x1="2"   y1="2"   x2="30"  y2="2"   stroke="#C9A84C" strokeWidth="2.5" />
          <line x1="2"   y1="2"   x2="2"   y2="30"  stroke="#C9A84C" strokeWidth="2.5" />
          <line x1="258" y1="2"   x2="230" y2="2"   stroke="#C9A84C" strokeWidth="2.5" />
          <line x1="258" y1="2"   x2="258" y2="30"  stroke="#C9A84C" strokeWidth="2.5" />
          <line x1="2"   y1="338" x2="30"  y2="338" stroke="#C9A84C" strokeWidth="2.5" />
          <line x1="2"   y1="338" x2="2"   y2="310" stroke="#C9A84C" strokeWidth="2.5" />
          <line x1="258" y1="338" x2="230" y2="338" stroke="#C9A84C" strokeWidth="2.5" />
          <line x1="258" y1="338" x2="258" y2="310" stroke="#C9A84C" strokeWidth="2.5" />
          <line x1="26"  y1="236" x2="234" y2="236" stroke="#C9A84C" strokeWidth=".6" opacity=".6" />
          <text x="130" y="210" fontFamily="'Playfair Display',Georgia,serif" fontSize="140" fontWeight="400" textAnchor="middle" fill="#F8F6F2" letterSpacing="-3">TP</text>
          <text x="130" y="270" fontFamily="'Inter',Arial,sans-serif" fontSize="13" fontWeight="400" textAnchor="middle" fill="#F8F6F2" letterSpacing="6.5">TRISTAN PARAJES</text>
          <text x="130" y="294" fontFamily="'Inter',Arial,sans-serif" fontSize="8.5" fontWeight="300" textAnchor="middle" fill="rgba(248,246,242,.38)" letterSpacing="5.5">GRAPHIC DESIGNER</text>
        </symbol>

      </defs>
    </svg>
  );
}
