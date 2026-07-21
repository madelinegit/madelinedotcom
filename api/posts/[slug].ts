import type { VercelRequest, VercelResponse } from "@vercel/node";
import { requireAuth } from "../_lib/auth.js";
import {
  deletePost,
  isValidSlug,
  parsePost,
  readPost,
  serializePost,
  writePost,
} from "../_lib/github.js";

interface PostPayload {
  title?: unknown;
  date?: unknown;
  excerpt?: unknown;
  tags?: unknown;
  published?: unknown;
  body?: unknown;
}

function asString(value: unknown, fallback = ""): string {
  return typeof value === "string" ? value.trim() : fallback;
}

/**
 * /api/posts/[slug]
 *   GET    → read one post for editing
 *   PUT    → create or update, committing markdown to the repo
 *   DELETE → remove the file from the repo
 *
 * Every method requires a valid session; there is no public read here because
 * the published site already ships posts as static content.
 */
export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (!requireAuth(req, res)) return;

  const { slug } = req.query;
  if (!isValidSlug(slug)) {
    return res.status(400).json({ error: "Slug must be lowercase words separated by hyphens" });
  }

  try {
    if (req.method === "GET") {
      const file = await readPost(slug);
      if (!file) return res.status(404).json({ error: "Post not found" });
      return res.status(200).json({ slug, ...parsePost(file.raw) });
    }

    if (req.method === "PUT") {
      const payload = (req.body ?? {}) as PostPayload;

      const title = asString(payload.title);
      if (!title) return res.status(400).json({ error: "Title is required" });

      const body = typeof payload.body === "string" ? payload.body : "";
      if (!body.trim()) return res.status(400).json({ error: "Post body is required" });

      const date = asString(payload.date);
      if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
        return res.status(400).json({ error: "Date must be in YYYY-MM-DD format" });
      }

      const tags = Array.isArray(payload.tags)
        ? payload.tags.map((tag) => asString(tag)).filter(Boolean)
        : [];

      const existed = (await readPost(slug)) !== null;

      const raw = serializePost({
        title,
        date,
        excerpt: asString(payload.excerpt),
        tags,
        published: payload.published !== false,
        body,
      });

      await writePost(slug, raw, `${existed ? "Update" : "Add"} post: ${slug}`);
      return res.status(existed ? 200 : 201).json({ slug, created: !existed });
    }

    if (req.method === "DELETE") {
      const removed = await deletePost(slug);
      if (!removed) return res.status(404).json({ error: "Post not found" });
      return res.status(200).json({ slug, deleted: true });
    }

    res.setHeader("Allow", "GET, PUT, DELETE");
    return res.status(405).json({ error: "Method not allowed" });
  } catch (error) {
    console.error(`Post operation failed for "${slug}"`, error);
    return res.status(502).json({ error: "Could not reach the post store" });
  }
}
