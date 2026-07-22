import { Link, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { formatDate, getPost } from "../lib/posts";
import Meta from "../components/Meta";
import NotFound from "./NotFound";
import "../styles/blog.css";

function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPost(slug) : undefined;

  if (!post) return <NotFound />;

  return (
    <article className="post">
      <Meta
        title={`${post.title} — Madeline Gall`}
        description={post.excerpt}
        path={`/blog/${post.slug}`}
        type="article"
      />

      <header className="post-header">
        <Link to="/blog" className="post-back">
          ← The Product Blog
        </Link>
        <h1 className="post-title">{post.title}</h1>
        <p className="post-excerpt">{post.excerpt}</p>
        <div className="blog-meta">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span className="blog-meta-dot">·</span>
          <span>{post.readingMinutes} min read</span>
        </div>
        {post.tags.length > 0 && (
          <ul className="post-tags">
            {post.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        )}
      </header>

      <div className="post-body">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.body}</ReactMarkdown>
      </div>

      <footer className="post-footer">
        <p className="post-byline">Madeline Gall · Technical Product Manager · Truckee, CA</p>
        <Link to="/blog" className="post-back">
          ← All posts
        </Link>
      </footer>
    </article>
  );
}

export default BlogPost;
