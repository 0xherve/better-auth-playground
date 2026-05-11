// ============================================================
// 🎓 YOUR ASSIGNMENT: Create the better-auth API handler
// ============================================================
//
// This catch-all route handles all /api/auth/* requests.
// better-auth needs this to process sign-in, sign-up, sessions, etc.
//
// TODO:
//   1. Import your auth instance from src/lib/auth.ts
//   2. Export a default handler that passes requests to auth.handler
//
// Example:
//   import { auth } from "../../lib/auth";
//   export const APIRoute = createAPIFileRoute("/api/auth/$")({
//     GET: ({ request }) => auth.handler(request),
//     POST: ({ request }) => auth.handler(request),
//   });

import { createAPIFileRoute } from "@tanstack/react-start/api";

export const APIRoute = createAPIFileRoute("/api/auth/$")({
  GET: ({ request }) => {
    return new Response("Auth not configured yet", { status: 501 });
  },
  POST: ({ request }) => {
    return new Response("Auth not configured yet", { status: 501 });
  },
});
