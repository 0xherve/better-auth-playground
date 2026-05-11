import { createFileRoute } from "@tanstack/react-router";
import { getAdminStats } from "../../lib/server-fns";
import { PageHeader } from "../../components/ui/page-header";
import { Badge } from "../../components/ui/badge";
import { StatCard } from "../../components/ui/stat-card";

export const Route = createFileRoute("/dashboard/admin")({
  loader: () => getAdminStats(),
  component: AdminPage,
});

function AdminPage() {
  const stats = Route.useLoaderData();
  return (
    <div className="animate-in">
      <PageHeader
        title="Admin Panel"
        badge={<Badge variant="danger">Restricted</Badge>}
        description="Bonus challenge: restrict this page to users with an admin role by checking the session in the server function."
      />

      <div className="stat-grid animate-in delay-1">
        <StatCard label="Total Users" value={stats.totalUsers} />
        <StatCard label="Total Notes" value={stats.totalNotes} />
        <StatCard label="Server Time" value={stats.serverTime} mono />
      </div>

      <div style={{ marginTop: "2rem" }}>
        <div className="table-wrap animate-in delay-2">
          <table>
            <thead>
              <tr>
                <th>Metric</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Total Users</td><td>{stats.totalUsers}</td></tr>
              <tr><td>Total Notes</td><td>{stats.totalNotes}</td></tr>
              <tr>
                <td>Server Time</td>
                <td style={{ fontFamily: "var(--font-mono)", fontSize: "0.82rem" }}>{stats.serverTime}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
