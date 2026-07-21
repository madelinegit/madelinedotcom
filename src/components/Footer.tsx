import { Link } from "react-router-dom";
import { site } from "../data/site";
import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} {site.name}
      </p>
      <nav className="footer-links">
        <Link to="/blog">Writing</Link>
        <a href={`mailto:${site.email}`}>{site.email}</a>
      </nav>
    </footer>
  );
}

export default Footer;
