import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {
  checkSession,
  fetchPost,
  fetchPosts,
  login,
  logout,
  removePost,
  savePost,
  slugify,
  todayIso,
  type PostDraft,
  type PostSummary,
} from "../lib/adminApi";
import "../styles/admin.css";

const emptyDraft = (): PostDraft => ({
  slug: "",
  title: "",
  date: todayIso(),
  excerpt: "",
  tags: [],
  published: false,
  body: "",
});

function Admin() {
  const [status, setStatus] = useState<"checking" | "out" | "in">("checking");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");

  const [posts, setPosts] = useState<PostSummary[]>([]);
  const [draft, setDraft] = useState<PostDraft | null>(null);
  /** Slug the draft was loaded from; empty for a new post. */
  const [editingSlug, setEditingSlug] = useState("");
  const [slugTouched, setSlugTouched] = useState(false);
  const [saving, setSaving] = useState(false);
  const [preview, setPreview] = useState(false);

  useEffect(() => {
    checkSession()
      .then((result) => setStatus(result.authenticated ? "in" : "out"))
      .catch(() => setStatus("out"));
  }, []);

  const loadPosts = useCallback(async () => {
    try {
      const result = await fetchPosts();
      setPosts(result.posts);
    } catch (e) {
      setError((e as Error).message);
    }
  }, []);

  useEffect(() => {
    if (status === "in") void loadPosts();
  }, [status, loadPosts]);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    try {
      await login(password);
      setPassword("");
      setStatus("in");
    } catch (err) {
      setError((err as Error).message);
    }
  }

  async function handleLogout() {
    await logout().catch(() => undefined);
    setStatus("out");
    setDraft(null);
    setPosts([]);
  }

  function startNew() {
    setDraft(emptyDraft());
    setEditingSlug("");
    setSlugTouched(false);
    setPreview(false);
    setError("");
    setNotice("");
  }

  async function startEdit(slug: string) {
    setError("");
    setNotice("");
    try {
      const post = await fetchPost(slug);
      setDraft(post);
      setEditingSlug(slug);
      setSlugTouched(true);
      setPreview(false);
    } catch (e) {
      setError((e as Error).message);
    }
  }

  function update<K extends keyof PostDraft>(key: K, value: PostDraft[K]) {
    setDraft((current) => (current ? { ...current, [key]: value } : current));
  }

  // Until the slug is edited by hand it tracks the title, so new posts get a
  // sensible URL without anyone having to think about it.
  function updateTitle(title: string) {
    setDraft((current) =>
      current ? { ...current, title, slug: slugTouched ? current.slug : slugify(title) } : current,
    );
  }

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    if (!draft) return;

    const slug = draft.slug || slugify(draft.title);
    if (!slug) {
      setError("Add a title so the post has a URL.");
      return;
    }

    setSaving(true);
    setError("");
    setNotice("");
    try {
      await savePost(slug, {
        title: draft.title,
        date: draft.date,
        excerpt: draft.excerpt,
        tags: draft.tags,
        published: draft.published,
        body: draft.body,
      });

      // Renaming means the old file would otherwise linger under its old URL.
      if (editingSlug && editingSlug !== slug) {
        await removePost(editingSlug).catch(() => undefined);
      }

      setEditingSlug(slug);
      setNotice(
        draft.published
          ? "Saved and committed. The live site rebuilds in about 30 seconds."
          : "Saved as a draft. It stays hidden from the public site until you publish.",
      );
      await loadPosts();
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(slug: string) {
    if (!window.confirm(`Delete "${slug}"? The file is removed from the repo.`)) return;
    try {
      await removePost(slug);
      if (editingSlug === slug) {
        setDraft(null);
        setEditingSlug("");
      }
      setNotice(`Deleted ${slug}.`);
      await loadPosts();
    } catch (e) {
      setError((e as Error).message);
    }
  }

  if (status === "checking") {
    return <div className="admin-loading">Checking session…</div>;
  }

  if (status === "out") {
    return (
      <div className="admin-login-wrap">
        <form className="admin-login" onSubmit={handleLogin}>
          <h1>Sign in</h1>
          <p className="admin-login-sub">Editor access for madelinegall.com</p>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoFocus
          />
          {error && <p className="admin-error">{error}</p>}
          <button type="submit" className="admin-primary">
            Sign in
          </button>
          <Link to="/" className="admin-back-link">
            ← Back to the site
          </Link>
        </form>
      </div>
    );
  }

  return (
    <div className="admin">
      <header className="admin-header">
        <div>
          <h1>Writing</h1>
          <p className="admin-sub">
            {posts.length} {posts.length === 1 ? "post" : "posts"} · saved straight to the repo
          </p>
        </div>
        <div className="admin-header-actions">
          <Link to="/blog" className="admin-ghost">
            View blog
          </Link>
          <button className="admin-ghost" onClick={handleLogout}>
            Sign out
          </button>
          <button className="admin-primary" onClick={startNew}>
            New post
          </button>
        </div>
      </header>

      {error && <p className="admin-error admin-banner">{error}</p>}
      {notice && <p className="admin-notice admin-banner">{notice}</p>}

      <div className="admin-body">
        <aside className="admin-list">
          {posts.length === 0 && <p className="admin-empty">No posts yet.</p>}
          {posts.map((post) => (
            <div
              key={post.slug}
              className={`admin-list-row${editingSlug === post.slug ? " is-active" : ""}`}
            >
              <button className="admin-list-open" onClick={() => startEdit(post.slug)}>
                <span className="admin-list-title">{post.title}</span>
                <span className="admin-list-meta">
                  {post.date}
                  {!post.published && <em className="admin-draft-flag">Draft</em>}
                </span>
              </button>
              <button
                className="admin-delete"
                onClick={() => handleDelete(post.slug)}
                aria-label={`Delete ${post.title}`}
              >
                ✕
              </button>
            </div>
          ))}
        </aside>

        <section className="admin-editor">
          {!draft && (
            <p className="admin-empty">
              Pick a post to edit, or start a new one.
            </p>
          )}

          {draft && (
            <form onSubmit={handleSave}>
              <label htmlFor="title">Title</label>
              <input
                id="title"
                value={draft.title}
                onChange={(e) => updateTitle(e.target.value)}
                placeholder="Your Chatbot Has Amnesia"
              />

              <div className="admin-row">
                <div>
                  <label htmlFor="slug">URL slug</label>
                  <input
                    id="slug"
                    value={draft.slug}
                    onChange={(e) => {
                      setSlugTouched(true);
                      update("slug", e.target.value);
                    }}
                    placeholder="your-chatbot-has-amnesia"
                  />
                  <p className="admin-hint">/blog/{draft.slug || "…"}</p>
                </div>
                <div>
                  <label htmlFor="date">Date</label>
                  <input
                    id="date"
                    type="date"
                    value={draft.date}
                    onChange={(e) => update("date", e.target.value)}
                  />
                </div>
              </div>

              <label htmlFor="excerpt">Excerpt</label>
              <textarea
                id="excerpt"
                rows={2}
                value={draft.excerpt}
                onChange={(e) => update("excerpt", e.target.value)}
                placeholder="One or two sentences shown on the blog index."
              />

              <label htmlFor="tags">Tags</label>
              <input
                id="tags"
                value={draft.tags.join(", ")}
                onChange={(e) =>
                  update(
                    "tags",
                    e.target.value
                      .split(",")
                      .map((tag) => tag.trim())
                      .filter(Boolean),
                  )
                }
                placeholder="AI, product management"
              />

              <div className="admin-editor-bar">
                <label htmlFor="body">Body (Markdown)</label>
                <button
                  type="button"
                  className="admin-toggle"
                  onClick={() => setPreview((p) => !p)}
                >
                  {preview ? "Edit" : "Preview"}
                </button>
              </div>

              {preview ? (
                <div className="admin-preview post-body">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {draft.body || "_Nothing to preview yet._"}
                  </ReactMarkdown>
                </div>
              ) : (
                <textarea
                  id="body"
                  className="admin-body-input"
                  rows={20}
                  value={draft.body}
                  onChange={(e) => update("body", e.target.value)}
                  placeholder={"## A heading\n\nWrite in Markdown."}
                />
              )}

              <label className="admin-check">
                <input
                  type="checkbox"
                  checked={draft.published}
                  onChange={(e) => update("published", e.target.checked)}
                />
                Published (uncheck to keep it a private draft)
              </label>

              <div className="admin-actions">
                <button type="submit" className="admin-primary" disabled={saving}>
                  {saving ? "Saving…" : "Save"}
                </button>
                <button type="button" className="admin-ghost" onClick={() => setDraft(null)}>
                  Close
                </button>
              </div>
            </form>
          )}
        </section>
      </div>
    </div>
  );
}

export default Admin;
