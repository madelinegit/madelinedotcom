import { Link } from "react-router-dom";
import Meta from "../components/Meta";
import "../styles/blog.css";

function NotFound() {
  return (
    <div className="notfound">
      <Meta
        title="Not found — Madeline Gall"
        description="That page does not exist."
        path="/404"
      />
      <p className="blog-eyebrow">404</p>
      <h1 className="blog-title">That page does not exist.</h1>
      <p className="blog-intro">
        The link may be out of date, or the page may have moved.
      </p>
      <Link to="/" className="blog-feature-cta">
        Back to the home page
      </Link>
    </div>
  );
}

export default NotFound;
