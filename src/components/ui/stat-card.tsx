interface StatCardProps {
  label: string;
  value: string | number;
  mono?: boolean;
}

export function StatCard({ label, value, mono }: StatCardProps) {
  return (
    <div className="stat-card">
      <div className="stat-label">{label}</div>
      <div className={`stat-value${mono ? " mono" : ""}`}>{value}</div>
    </div>
  );
}
