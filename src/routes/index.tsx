import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "../components/ui/button";
import { Dialog, DialogHeader, DialogTitle, DialogSubtitle, DialogClose } from "../components/ui/dialog";
import { Checklist } from "../components/ui/checklist";

export const Route = createFileRoute("/")({
  component: Home,
});

const checklistItems = [
  <>Set up better-auth server in <code>src/lib/auth.ts</code></>,
  <>Create the API route at <code>src/routes/api/auth.$.ts</code></>,
  <>Implement <code>getSession()</code> so protected routes work</>,
  <>Create the auth client for sign-in / sign-up / sign-out</>,
  <>Build the login page at <code>src/routes/auth/login.tsx</code></>,
  <>Build the signup page at <code>src/routes/auth/signup.tsx</code></>,
  <>Add sign-out to the Navbar</>,
  <>Bonus: Role-based access for the admin page</>,
];

function Home() {
  const [open, setOpen] = useState(false);

  return (
    <div className="hero">
      <div className="hero-content">

        <h1 className="animate-in delay-1">
          Better Auth<br />
          <em>Playground</em>
        </h1>

        <p className="hero-subtitle animate-in delay-2">
          This app has protected routes, guarded server functions, and role-based
          pages — all waiting for you to wire up authentication with{" "}
          <strong>better-auth</strong>.
        </p>

        <div className="hero-actions animate-in delay-3">
          <Link to="/dashboard">
            <Button>
              Dashboard
              <span style={{ fontSize: "0.75rem", opacity: 0.7 }}>Protected</span>
            </Button>
          </Link>
          <Link to="/auth/login">
            <Button variant="secondary">Sign In</Button>
          </Link>
        </div>

        <Button
          variant="ghost"
          className="animate-in delay-4"
          onClick={() => setOpen(true)}
          style={{ marginTop: "1rem" }}
        >
          View Assignment Checklist
        </Button>
      </div>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogHeader>
          <div>
            <DialogTitle>Assignment Checklist</DialogTitle>
            <DialogSubtitle>Wire up better-auth step by step</DialogSubtitle>
          </div>
          <DialogClose onClick={() => setOpen(false)} />
        </DialogHeader>
        <Checklist items={checklistItems} />
      </Dialog>
    </div>
  );
}
