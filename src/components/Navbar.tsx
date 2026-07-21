import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { navLinks, site } from "../data/site";
import "../styles/navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <nav className={`navbar${scrolled ? " navbar--scrolled" : ""}`}>
      <Link to="/" className="navbar-name">
        {site.name}
      </Link>

      <button
        className="navbar-toggle"
        aria-expanded={menuOpen}
        aria-controls="navbar-menu"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span className={`navbar-toggle-bars${menuOpen ? " is-open" : ""}`} />
      </button>

      {/* Closing on click rather than on a route effect: an anchor jump to the
          current page does not always change the location, but should still
          dismiss the menu. */}
      <ul id="navbar-menu" className={`navbar-links${menuOpen ? " navbar-links--open" : ""}`}>
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link to={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </Link>
          </li>
        ))}
        <li>
          <Link to="/#contact" className="navbar-cta" onClick={() => setMenuOpen(false)}>
            Get in Touch
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
