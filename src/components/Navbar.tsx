import { useEffect, useState } from "react";
import "../styles/navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav className={`navbar${scrolled ? " navbar--scrolled" : ""}`}>
      <a href="#" className="navbar-name">Madeline Gall</a>
      <ul className="navbar-links">
        <li><a href="#capabilities">Capabilities</a></li>
        <li><a href="#projects">Work</a></li>
        <li><a href="#consulting">Consulting</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#contact" className="navbar-cta">Get in Touch</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
