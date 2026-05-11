import type { ReactNode } from "react";

interface PageHeaderProps {
  title: ReactNode;
  description?: string;
  badge?: ReactNode;
}

export function PageHeader({ title, description, badge }: PageHeaderProps) {
  return (
    <div className="page-header">
      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
        <h2>{title}</h2>
        {badge}
      </div>
      {description && <p>{description}</p>}
    </div>
  );
}
