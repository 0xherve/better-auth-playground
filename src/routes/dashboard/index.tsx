import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "../../components/ui/page-header";
import { Card, CardHeader, CardTitle, CardBody } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";

export const Route = createFileRoute("/dashboard/")({
  component: DashboardHome,
});

function DashboardHome() {
  const { user } = Route.useRouteContext() as any;
  return (
    <div className="animate-in">
      <PageHeader
        title={`Welcome back, ${user?.name ?? "stranger"}`}
        description="This is your protected dashboard. If you can see this, authentication is working correctly."
      />

      <div className="dashboard-grid">
        <Card className="animate-in delay-1">
          <CardHeader>
            <CardTitle>Protected Notes</CardTitle>
            <Badge>3 notes</Badge>
          </CardHeader>
          <CardBody>
            <p>View notes fetched through guarded server functions. No valid session means no data.</p>
          </CardBody>
          <Link to="/dashboard/notes" className="card-link">
            View Notes <span aria-hidden="true">&rarr;</span>
          </Link>
        </Card>

        <Card className="animate-in delay-2">
          <CardHeader>
            <CardTitle>Admin Panel</CardTitle>
            <Badge variant="outline">Bonus</Badge>
          </CardHeader>
          <CardBody>
            <p>Server statistics and metrics. Bonus challenge: restrict this to users with an admin role.</p>
          </CardBody>
          <Link to="/dashboard/admin" className="card-link">
            View Admin <span aria-hidden="true">&rarr;</span>
          </Link>
        </Card>
      </div>
    </div>
  );
}
