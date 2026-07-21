import type { VercelRequest, VercelResponse } from "@vercel/node";
import { requireAuth } from "../_lib/auth.js";
import { listPosts, parsePost, readPost } from "../_lib/github.js";

/** GET /api/posts — every post in the repo, drafts included. Admin only. */
export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "Method not allowed" });
  }

  if (!requireAuth(req, res)) return;

  try {
    const entries = await listPosts();

    const posts = await Promise.all(
      entries.map(async ({ slug }) => {
        const file = await readPost(slug);
        if (!file) return null;
        const fields = parsePost(file.raw);
        return {
          slug,
          title: fields.title || slug,
          date: fields.date,
          excerpt: fields.excerpt,
          tags: fields.tags,
          published: fields.published,
        };
      }),
    );

    const found = posts.filter((post): post is NonNullable<typeof post> => post !== null);
    found.sort((a, b) => b.date.localeCompare(a.date));

    return res.status(200).json({ posts: found });
  } catch (error) {
    console.error("Failed to list posts", error);
    return res.status(502).json({ error: "Could not reach the post store" });
  }
}
