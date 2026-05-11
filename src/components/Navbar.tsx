import { Link, useMatches } from "@tanstack/react-router";
import { Button } from "./ui/button";

export function Navbar({ user }: { user?: { name: string; email: string } | null }) {
  const matches = useMatches();
  const currentPath = matches[matches.length - 1]?.pathname ?? "";

  const isActive = (path: string) =>
    currentPath === path || (path !== "/dashboard" && currentPath.startsWith(path));

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        Auth<span>Lab</span>
      </Link>

      <Link
        to="/dashboard"
        className="nav-link"
        data-status={currentPath === "/dashboard/" || currentPath === "/dashboard" ? "active" : undefined}
      >
        Dashboard
      </Link>
      <Link
        to="/dashboard/notes"
        className="nav-link"
        data-status={isActive("/dashboard/notes") ? "active" : undefined}
      >
        Notes
      </Link>
      <Link
        to="/dashboard/admin"
        className="nav-link"
        data-status={isActive("/dashboard/admin") ? "active" : undefined}
      >
        Admin
      </Link>

      <div className="navbar-right">
        {user ? (
          <span className="navbar-user">
            <strong>{user.name}</strong>
            {/* TODO: Add a sign-out button using authClient.signOut() */}
          </span>
        ) : (
          <Link to="/auth/login">
            <Button size="sm">Sign In</Button>
          </Link>
        )}
      </div>
    </nav>
  );
}
