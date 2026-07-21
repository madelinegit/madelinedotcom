import { createHmac, timingSafeEqual, randomBytes } from "node:crypto";
import type { VercelRequest, VercelResponse } from "@vercel/node";

const COOKIE_NAME = "mg_session";
const SESSION_MS = 1000 * 60 * 60 * 12; // 12 hours

export function requiredEnv(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`Missing required environment variable: ${name}`);
  return value;
}

/**
 * Constant-time string comparison.
 *
 * timingSafeEqual throws when lengths differ, which would itself leak length,
 * so both sides are HMAC'd to a fixed width first.
 */
function safeEqual(a: string, b: string): boolean {
  const key = randomBytes(32);
  const digestA = createHmac("sha256", key).update(a).digest();
  const digestB = createHmac("sha256", key).update(b).digest();
  return timingSafeEqual(digestA, digestB);
}

export function verifyPassword(candidate: unknown): boolean {
  if (typeof candidate !== "string" || !candidate) return false;
  return safeEqual(candidate, requiredEnv("ADMIN_PASSWORD"));
}

function sign(payload: string): string {
  return createHmac("sha256", requiredEnv("SESSION_SECRET")).update(payload).digest("hex");
}

export function createSessionCookie(): string {
  const expires = Date.now() + SESSION_MS;
  const token = `${expires}.${sign(String(expires))}`;
  const attributes = [
    `${COOKIE_NAME}=${token}`,
    "HttpOnly",
    "Secure",
    "SameSite=Strict",
    "Path=/",
    `Max-Age=${Math.floor(SESSION_MS / 1000)}`,
  ];
  return attributes.join("; ");
}

export function clearSessionCookie(): string {
  return `${COOKIE_NAME}=; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=0`;
}

export function isAuthenticated(req: VercelRequest): boolean {
  const header = req.headers.cookie;
  if (!header) return false;

  const cookie = header
    .split(";")
    .map((part) => part.trim())
    .find((part) => part.startsWith(`${COOKIE_NAME}=`));
  if (!cookie) return false;

  const token = cookie.slice(COOKIE_NAME.length + 1);
  const [expires, signature] = token.split(".");
  if (!expires || !signature) return false;

  const expiresAt = Number(expires);
  if (!Number.isFinite(expiresAt) || Date.now() > expiresAt) return false;

  return safeEqual(signature, sign(expires));
}

/** Guards a handler; returns false and sends 401 when the session is invalid. */
export function requireAuth(req: VercelRequest, res: VercelResponse): boolean {
  if (isAuthenticated(req)) return true;
  res.status(401).json({ error: "Not authenticated" });
  return false;
}
