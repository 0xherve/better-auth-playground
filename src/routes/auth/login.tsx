import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";

// TODO: import { authClient } from "../../lib/auth";

export const Route = createFileRoute("/auth/login")({
  component: LoginPage,
});

function LoginPage() {
  return (
    <div className="auth-page">
      <div className="auth-card animate-in">
        <div className="auth-header">
          <Link to="/" style={{ color: "var(--text-primary)", fontSize: "1.1rem" }}>
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}>
              Auth<span style={{ color: "var(--accent)" }}>Lab</span>
            </span>
          </Link>
          <h2 style={{ marginTop: "1.5rem" }}>Welcome back</h2>
          <p>
            Implement this form using <code>authClient.signIn.email()</code>
          </p>
        </div>

        <form
          className="auth-form"
          onSubmit={(e) => {
            e.preventDefault();
            // TODO: Call authClient.signIn.email({ email, password })
            alert("Auth not wired up yet! Go implement src/lib/auth.ts");
          }}
        >
          <Input label="Email" id="email" type="email" name="email" placeholder="you@example.com" required />
          <Input label="Password" id="password" type="password" name="password" placeholder="Enter your password" required />
          <Button type="submit">Sign In</Button>
        </form>

        <p className="auth-footer">
          Don't have an account?{" "}
          <Link to="/auth/signup">Create one</Link>
        </p>
      </div>
    </div>
  );
}
