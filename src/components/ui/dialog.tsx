import type { HTMLAttributes, ReactNode } from "react";
import { Button } from "./button";

interface DialogProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

export function Dialog({ open, onClose, children }: DialogProps) {
  if (!open) return null;
  return (
    <div className="dialog-overlay" onClick={onClose}>
      <div className="dialog" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}

export function DialogHeader({ className = "", ...props }: HTMLAttributes<HTMLDivElement>) {
  const classes = ["dialog-header", className].filter(Boolean).join(" ");
  return <div className={classes} {...props} />;
}

export function DialogTitle({ className = "", ...props }: HTMLAttributes<HTMLHeadingElement>) {
  const classes = ["dialog-title", className].filter(Boolean).join(" ");
  return <h3 className={classes} {...props} />;
}

export function DialogSubtitle({ className = "", ...props }: HTMLAttributes<HTMLParagraphElement>) {
  const classes = ["dialog-subtitle", className].filter(Boolean).join(" ");
  return <p className={classes} {...props} />;
}

export function DialogClose({ onClick }: { onClick: () => void }) {
  return (
    <Button variant="ghost" size="sm" className="dialog-close" onClick={onClick}>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M12 4L4 12M4 4l8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </Button>
  );
}
