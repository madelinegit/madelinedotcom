import "../styles/navbar.css";
import Banner from "../assets/brand/mg-horizontal.svg";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="Banner">
        <img src={Banner} alt="Madeline Gall" className="banner-img" />
        </div>
        <div className="nav-links">
          <a href="#automation">Automation</a>
          <a href="#capabilities">Capabilities</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;