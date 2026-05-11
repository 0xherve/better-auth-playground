import type { HTMLAttributes, ReactNode } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function Card({ className = "", ...props }: CardProps) {
  const classes = ["card", className].filter(Boolean).join(" ");
  return <div className={classes} {...props} />;
}

export function CardHeader({ className = "", ...props }: HTMLAttributes<HTMLDivElement>) {
  const classes = ["card-header", className].filter(Boolean).join(" ");
  return <div className={classes} {...props} />;
}

export function CardTitle({ className = "", ...props }: HTMLAttributes<HTMLSpanElement>) {
  const classes = ["card-title", className].filter(Boolean).join(" ");
  return <span className={classes} {...props} />;
}

export function CardBody({ className = "", ...props }: HTMLAttributes<HTMLDivElement>) {
  const classes = ["card-body", className].filter(Boolean).join(" ");
  return <div className={classes} {...props} />;
}
