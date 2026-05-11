import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";

// TODO: import { authClient } from "../../lib/auth";

export const Route = createFileRoute("/auth/signup")({
  component: SignupPage,
});

function SignupPage() {
  return (
    <div className="auth-page">
      <div className="auth-card animate-in">
        <div className="auth-header">
          <Link to="/" style={{ color: "var(--text-primary)", fontSize: "1.1rem" }}>
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}>
              Auth<span style={{ color: "var(--accent)" }}>Lab</span>
            </span>
          </Link>
          <h2 style={{ marginTop: "1.5rem" }}>Create your account</h2>
          <p>
            Implement this form using <code>authClient.signUp.email()</code>
          </p>
        </div>

        <form
          className="auth-form"
          onSubmit={(e) => {
            e.preventDefault();
            // TODO: Call authClient.signUp.email({ name, email, password })
            alert("Auth not wired up yet! Go implement src/lib/auth.ts");
          }}
        >
          <Input label="Name" id="name" type="text" name="name" placeholder="Your name" required />
          <Input label="Email" id="email" type="email" name="email" placeholder="you@example.com" required />
          <Input label="Password" id="password" type="password" name="password" placeholder="Min. 8 characters" required minLength={8} />
          <Button type="submit">Create Account</Button>
        </form>

        <p className="auth-footer">
          Already have an account?{" "}
          <Link to="/auth/login">Sign in</Link>
        </p>
      </div>
    </div>
  );
}
