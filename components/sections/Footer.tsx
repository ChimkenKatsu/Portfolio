// Matches <!-- FOOTER --> block from original HTML.
export default function Footer() {
  return (
    <footer>
      <div className="ft-l">
        <a href="#" className="ft-logo">Tristan Parajes</a>
        <span className="ft-tagline">Graphic Designer — Philippines</span>
      </div>
      <ul className="ft-links">
        <li><a href="#">Instagram</a></li>
        <li><a href="#">Behance</a></li>
        <li><a href="#">LinkedIn</a></li>
        <li><a href="#">Dribbble</a></li>
      </ul>
      <span className="ft-copy">© 2025 Tristan Parajes. All rights reserved.</span>
    </footer>
  );
}
