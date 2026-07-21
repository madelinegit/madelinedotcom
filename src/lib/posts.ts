export interface Post {
  slug: string;
  title: string;
  /** ISO date string, e.g. "2026-07-20". */
  date: string;
  excerpt: string;
  tags: string[];
  published: boolean;
  body: string;
  readingMinutes: number;
}

interface Frontmatter {
  [key: string]: string | string[] | boolean;
}

/**
 * Minimal YAML-subset frontmatter parser.
 *
 * Deliberately not gray-matter: that pulls in Node's Buffer, which needs a
 * polyfill in the browser bundle. We only support the handful of shapes the
 * admin editor actually writes — scalars, inline arrays, and booleans.
 */
function parseFrontmatter(raw: string): { data: Frontmatter; body: string } {
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/.exec(raw);
  if (!match) return { data: {}, body: raw };

  const data: Frontmatter = {};
  for (const line of match[1].split(/\r?\n/)) {
    const kv = /^([A-Za-z0-9_-]+):\s*(.*)$/.exec(line.trim());
    if (!kv) continue;

    const key = kv[1];
    let value = kv[2].trim();

    if (value === "true" || value === "false") {
      data[key] = value === "true";
      continue;
    }
    if (value.startsWith("[") && value.endsWith("]")) {
      data[key] = value
        .slice(1, -1)
        .split(",")
        .map((s) => stripQuotes(s.trim()))
        .filter(Boolean);
      continue;
    }
    value = stripQuotes(value);
    data[key] = value;
  }

  return { data, body: match[2] };
}

function stripQuotes(value: string): string {
  if (value.length >= 2 && /^["'].*["']$/.test(value)) return value.slice(1, -1);
  return value;
}

/** Average adult prose speed; rounded up so a short post never reads "0 min". */
function estimateReadingMinutes(body: string): number {
  const words = body.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 225));
}

function firstParagraph(body: string): string {
  const paragraph = body
    .split(/\r?\n\r?\n/)
    .map((block) => block.trim())
    .find((block) => block && !block.startsWith("#") && !block.startsWith("!["));
  if (!paragraph) return "";
  const flattened = paragraph.replace(/\s+/g, " ").replace(/[*_`>]/g, "");
  return flattened.length > 200 ? `${flattened.slice(0, 197).trimEnd()}…` : flattened;
}

const modules = import.meta.glob<string>("../../content/posts/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

function toPost(path: string, raw: string): Post {
  const slug = path.split("/").pop()!.replace(/\.md$/, "");
  const { data, body } = parseFrontmatter(raw);

  return {
    slug,
    title: typeof data.title === "string" && data.title ? data.title : slug,
    date: typeof data.date === "string" ? data.date : "",
    excerpt:
      typeof data.excerpt === "string" && data.excerpt ? data.excerpt : firstParagraph(body),
    tags: Array.isArray(data.tags) ? data.tags : [],
    // Absent `published` means published — a file in the repo is intentional.
    published: data.published !== false,
    body: body.trim(),
    readingMinutes: estimateReadingMinutes(body),
  };
}

const allPosts: Post[] = Object.entries(modules)
  .map(([path, raw]) => toPost(path, raw))
  .sort((a, b) => b.date.localeCompare(a.date));

/** Published posts, newest first. Drafts are excluded from the public site. */
export const posts: Post[] = allPosts.filter((post) => post.published);

export function getPost(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}

export function formatDate(iso: string): string {
  if (!iso) return "";
  const date = new Date(`${iso}T00:00:00Z`);
  if (Number.isNaN(date.getTime())) return iso;
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
