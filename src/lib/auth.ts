// ============================================================
// 🎓 YOUR ASSIGNMENT: Wire up better-auth here
// ============================================================
//
// This file exports two things the rest of the app depends on:
//   1. getSession(headers) — returns the current user session or null
//   2. authClient          — the better-auth client for the browser
//
// The app already has protected routes and server functions that
// call getSession(). Your job is to make auth actually work.
//
// Steps:
//   1. Set up the better-auth server instance (auth)
//   2. Create the API route handler (see src/routes/api/auth.$.ts)
//   3. Implement getSession() below so it returns a real session
//   4. Set up the authClient for client-side auth
//
// Docs: https://www.better-auth.com/docs
// ============================================================

import type { Session, User } from "better-auth";

export type AuthSession = {
  user: User;
  session: Session;
} | null;

// TODO: Create and export your better-auth server instance
// import { betterAuth } from "better-auth";
// export const auth = betterAuth({ ... });

// TODO: Implement this — it's called by every protected server function
export async function getSession(headers: Headers): Promise<AuthSession> {
  // HINT: use auth.api.getSession({ headers })
  return null;
}

// TODO: Create and export the auth client for browser-side usage
// import { createAuthClient } from "better-auth/react";
// export const authClient = createAuthClient();
