import { createFileRoute } from "@tanstack/react-router";
import { getNotes } from "../../lib/server-fns";
import { PageHeader } from "../../components/ui/page-header";
import { Badge } from "../../components/ui/badge";

export const Route = createFileRoute("/dashboard/notes")({
  loader: () => getNotes(),
  component: NotesPage,
});

function NotesPage() {
  const notes = Route.useLoaderData();
  return (
    <div className="animate-in">
      <PageHeader
        title="Notes"
        badge={<Badge variant="success">Protected</Badge>}
        description="This data is fetched via a guarded server function. Without a valid session, you'd be redirected to login."
      />

      <div className="notes-grid">
        {notes.map((note, i) => (
          <div key={note.id} className={`note-card animate-in delay-${i + 1}`}>
            <div className="note-header">
              <span className="note-title">{note.title}</span>
              <span className="note-date">{note.createdAt}</span>
            </div>
            <p className="note-body">{note.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
