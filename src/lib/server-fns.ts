import { createServerFn } from "@tanstack/react-start";
import { getRequestHeaders } from "@tanstack/react-start/server";
import { getSession } from "./auth";

// ============================================================
// Protected server functions — these all require a valid session
// ============================================================

export const getCurrentUser = createServerFn({ method: "GET" }).handler(
  async () => {
    const headers = new Headers(getRequestHeaders() as Record<string, string>);
    const session = await getSession(headers);
    if (!session) {
      throw new Error("Not authenticated");
    }
    return session.user;
  }
);

// Fake "notes" data — imagine this is a database
const notes = [
  { id: 1, title: "Welcome to the playground", body: "Start by setting up auth!", createdAt: "2026-05-10" },
  { id: 2, title: "TanStack Start is cool", body: "Full-stack React with file-based routing.", createdAt: "2026-05-11" },
  { id: 3, title: "Secret note", body: "You can only see this if you're authenticated.", createdAt: "2026-05-11" },
];

export const getNotes = createServerFn({ method: "GET" }).handler(async () => {
  const request = getWebRequest();
  const session = await getSession(request.headers);
  if (!session) {
    throw new Error("Not authenticated");
  }
  return notes;
});

export const getNoteById = createServerFn({ method: "GET" })
  .inputValidator((id: number) => id)
  .handler(async ({ data: id }) => {
    const headers = new Headers(getRequestHeaders() as Record<string, string>);
    const session = await getSession(headers);
    if (!session) {
      throw new Error("Not authenticated");
    }
    const note = notes.find((n) => n.id === id);
    if (!note) {
      throw new Error("Note not found");
    }
    return note;
  });

// Fake "admin" data
export const getAdminStats = createServerFn({ method: "GET" }).handler(
  async () => {
    const headers = new Headers(getRequestHeaders() as Record<string, string>);
    const session = await getSession(headers);
    if (!session) {
      throw new Error("Not authenticated");
    }
    // TODO (bonus): Check if user has admin role
    return {
      totalUsers: 42,
      totalNotes: notes.length,
      serverTime: new Date().toISOString(),
    };
  }
);
