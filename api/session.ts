import type { VercelRequest, VercelResponse } from "@vercel/node";
import {
  clearSessionCookie,
  createSessionCookie,
  isAuthenticated,
  verifyPassword,
} from "./_lib/auth.js";

/**
 * Session endpoint.
 *   GET    → is the caller signed in?
 *   POST   → sign in with { password }
 *   DELETE → sign out
 */
export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === "GET") {
    return res.status(200).json({ authenticated: isAuthenticated(req) });
  }

  if (req.method === "POST") {
    const password = (req.body as { password?: unknown } | undefined)?.password;

    if (!verifyPassword(password)) {
      // Generic message: never reveal whether the account or password was wrong.
      return res.status(401).json({ error: "Incorrect password" });
    }

    res.setHeader("Set-Cookie", createSessionCookie());
    return res.status(200).json({ authenticated: true });
  }

  if (req.method === "DELETE") {
    res.setHeader("Set-Cookie", clearSessionCookie());
    return res.status(200).json({ authenticated: false });
  }

  res.setHeader("Allow", "GET, POST, DELETE");
  return res.status(405).json({ error: "Method not allowed" });
}
