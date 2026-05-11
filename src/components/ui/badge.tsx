import type { HTMLAttributes } from "react";

type BadgeVariant = "default" | "outline" | "success" | "danger";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

export function Badge({ variant = "default", className = "", ...props }: BadgeProps) {
  const classes = [
    "badge",
    variant !== "default" && `badge-${variant}`,
    className,
  ].filter(Boolean).join(" ");

  return <span className={classes} {...props} />;
}
