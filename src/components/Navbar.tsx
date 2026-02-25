import "../styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">mgalldev@gmail.com</div>
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