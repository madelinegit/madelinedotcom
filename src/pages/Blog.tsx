import { Link } from "react-router-dom";
import { formatDate, posts } from "../lib/posts";
import Meta from "../components/Meta";
import "../styles/blog.css";

function Blog() {
  const [featured, ...rest] = posts;

  return (
    <div className="blog">
      <Meta
        title="The Product Blog — Madeline Gall"
        description="Essays on product management, operational software, and building AI systems that hold up in production."
        path="/blog"
      />

      <header className="blog-header">
        <h1 className="blog-title">The Product Blog</h1>
        <p className="blog-intro">
          Product decisions, operational software, and what AI systems do once real people
          use them.
        </p>
      </header>

      {!featured && (
        <p className="blog-empty">First essay is in progress. Check back shortly.</p>
      )}

      {featured && (
        <article className="blog-feature">
          <p className="blog-feature-kicker">Latest</p>
          <h2 className="blog-feature-title">
            <Link to={`/blog/${featured.slug}`}>{featured.title}</Link>
          </h2>
          <p className="blog-feature-excerpt">{featured.excerpt}</p>
          <div className="blog-meta">
            <time dateTime={featured.date}>{formatDate(featured.date)}</time>
            <span className="blog-meta-dot">·</span>
            <span>{featured.readingMinutes} min read</span>
            {featured.tags.length > 0 && (
              <>
                <span className="blog-meta-dot">·</span>
                <span className="blog-meta-tags">{featured.tags.join(", ")}</span>
              </>
            )}
          </div>
          <Link to={`/blog/${featured.slug}`} className="blog-feature-cta">
            Read the essay
          </Link>
        </article>
      )}

      {rest.length > 0 && (
        <section className="blog-archive" aria-label="More essays">
          <h2 className="blog-archive-heading">More</h2>
          <ol className="blog-list">
            {rest.map((post, index) => (
              <li key={post.slug} className="blog-list-item">
                <span className="blog-list-index" aria-hidden="true">
                  {String(index + 2).padStart(2, "0")}
                </span>
                <div className="blog-list-body">
                  <h3 className="blog-list-title">
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="blog-list-excerpt">{post.excerpt}</p>
                  <div className="blog-meta">
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                    <span className="blog-meta-dot">·</span>
                    <span>{post.readingMinutes} min read</span>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </section>
      )}
    </div>
  );
}

export default Blog;
