export interface PostSummary {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  published: boolean;
}

export interface PostDraft extends PostSummary {
  body: string;
}

async function request<T>(path: string, init: RequestInit = {}): Promise<T> {
  const response = await fetch(path, {
    ...init,
    headers: { "Content-Type": "application/json", ...init.headers },
  });

  const payload = await response.json().catch(() => ({}) as Record<string, unknown>);

  if (!response.ok) {
    const message = (payload as { error?: string }).error ?? `Request failed (${response.status})`;
    throw Object.assign(new Error(message), { status: response.status });
  }

  return payload as T;
}

export function checkSession() {
  return request<{ authenticated: boolean }>("/api/session");
}

export function login(password: string) {
  return request<{ authenticated: boolean }>("/api/session", {
    method: "POST",
    body: JSON.stringify({ password }),
  });
}

export function logout() {
  return request<{ authenticated: boolean }>("/api/session", { method: "DELETE" });
}

export function fetchPosts() {
  return request<{ posts: PostSummary[] }>("/api/posts");
}

export function fetchPost(slug: string) {
  return request<PostDraft>(`/api/posts/${slug}`);
}

export function savePost(slug: string, draft: Omit<PostDraft, "slug">) {
  return request<{ slug: string; created: boolean }>(`/api/posts/${slug}`, {
    method: "PUT",
    body: JSON.stringify(draft),
  });
}

export function removePost(slug: string) {
  return request<{ deleted: boolean }>(`/api/posts/${slug}`, { method: "DELETE" });
}

/** Mirrors the slug rule enforced server-side in api/_lib/github.ts. */
export function slugify(title: string): string {
  return title
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80)
    .replace(/-+$/, "");
}

export function todayIso(): string {
  return new Date().toISOString().slice(0, 10);
}
