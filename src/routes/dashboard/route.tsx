import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import { getCurrentUser } from "../../lib/server-fns";
import { Navbar } from "../../components/Navbar";

export const Route = createFileRoute("/dashboard")({
  beforeLoad: async () => {
    try {
      const user = await getCurrentUser();
      return { user };
    } catch {
      throw redirect({ to: "/auth/login", search: { redirect: "/dashboard" } });
    }
  },
  component: DashboardLayout,
});

function DashboardLayout() {
  const { user } = Route.useRouteContext();
  return (
    <>
      <Navbar user={user} />
      <div className="dashboard-wrap">
        <Outlet />
      </div>
    </>
  );
}
