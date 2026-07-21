import { requiredEnv } from "./auth.js";

const POSTS_DIR = "content/posts";

interface ContentsResponse {
  sha: string;
  content?: string;
  encoding?: string;
  name: string;
  path: string;
}

function repo(): string {
  return process.env.GITHUB_REPO ?? "madelinegit/madelinedotcom";
}

function branch(): string {
  return process.env.GITHUB_BRANCH ?? "main";
}

async function gh<T>(path: string, init: RequestInit = {}): Promise<T> {
  const response = await fetch(`https://api.github.com${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${requiredEnv("GITHUB_TOKEN")}`,
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
      "Content-Type": "application/json",
      ...init.headers,
    },
  });

  if (!response.ok) {
    const body = await response.text();
    throw Object.assign(new Error(`GitHub ${response.status}: ${body}`), {
      status: response.status,
    });
  }

  return response.json() as Promise<T>;
}

/**
 * Slugs are used directly as file paths, so they must not be able to escape
 * the posts directory or collide with dotfiles.
 */
export function isValidSlug(slug: unknown): slug is string {
  return typeof slug === "string" && /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug) && slug.length <= 80;
}

function filePath(slug: string): string {
  return `${POSTS_DIR}/${slug}.md`;
}

export async function listPosts(): Promise<{ slug: string; sha: string }[]> {
  try {
    const entries = await gh<ContentsResponse[]>(
      `/repos/${repo()}/contents/${POSTS_DIR}?ref=${branch()}`,
    );
    return entries
      .filter((entry) => entry.name.endsWith(".md"))
      .map((entry) => ({ slug: entry.name.replace(/\.md$/, ""), sha: entry.sha }));
  } catch (error) {
    // An empty posts directory does not exist in git — treat it as no posts.
    if ((error as { status?: number }).status === 404) return [];
    throw error;
  }
}

export async function readPost(slug: string): Promise<{ raw: string; sha: string } | null> {
  try {
    const file = await gh<ContentsResponse>(
      `/repos/${repo()}/contents/${filePath(slug)}?ref=${branch()}`,
    );
    if (!file.content) return null;
    return {
      raw: Buffer.from(file.content, "base64").toString("utf8"),
      sha: file.sha,
    };
  } catch (error) {
    if ((error as { status?: number }).status === 404) return null;
    throw error;
  }
}

export async function writePost(slug: string, raw: string, message: string): Promise<void> {
  // An update needs the current blob sha; a create must omit it entirely.
  const existing = await readPost(slug);

  await gh(`/repos/${repo()}/contents/${filePath(slug)}`, {
    method: "PUT",
    body: JSON.stringify({
      message,
      content: Buffer.from(raw, "utf8").toString("base64"),
      branch: branch(),
      ...(existing ? { sha: existing.sha } : {}),
    }),
  });
}

export async function deletePost(slug: string): Promise<boolean> {
  const existing = await readPost(slug);
  if (!existing) return false;

  await gh(`/repos/${repo()}/contents/${filePath(slug)}`, {
    method: "DELETE",
    body: JSON.stringify({
      message: `Delete post: ${slug}`,
      sha: existing.sha,
      branch: branch(),
    }),
  });
  return true;
}

export interface PostFields {
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  published: boolean;
  body: string;
}

/** Escapes a value for a single-quoted YAML scalar. */
function yamlString(value: string): string {
  return `'${value.replace(/'/g, "''")}'`;
}

export function serializePost(fields: PostFields): string {
  const frontmatter = [
    "---",
    `title: ${yamlString(fields.title)}`,
    `date: ${fields.date}`,
    `excerpt: ${yamlString(fields.excerpt)}`,
    `tags: [${fields.tags.map(yamlString).join(", ")}]`,
    `published: ${fields.published}`,
    "---",
  ].join("\n");

  return `${frontmatter}\n\n${fields.body.trim()}\n`;
}

/** Mirror of the client-side parser in src/lib/posts.ts. */
export function parsePost(raw: string): PostFields {
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/.exec(raw);
  if (!match) {
    return { title: "", date: "", excerpt: "", tags: [], published: true, body: raw };
  }

  const data: Record<string, string> = {};
  for (const line of match[1].split(/\r?\n/)) {
    const kv = /^([A-Za-z0-9_-]+):\s*(.*)$/.exec(line.trim());
    if (kv) data[kv[1]] = kv[2].trim();
  }

  const unquote = (value = "") =>
    /^["'].*["']$/.test(value) ? value.slice(1, -1).replace(/''/g, "'") : value;

  const rawTags = data.tags ?? "";
  const tags = rawTags.startsWith("[")
    ? rawTags
        .slice(1, -1)
        .split(",")
        .map((tag) => unquote(tag.trim()))
        .filter(Boolean)
    : [];

  return {
    title: unquote(data.title),
    date: unquote(data.date),
    excerpt: unquote(data.excerpt),
    tags,
    published: data.published !== "false",
    body: match[2].trim(),
  };
}
