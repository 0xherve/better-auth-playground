type InfoCardProps = {
  title: string;
  items: string[];
};

export function InfoCard({ title, items }: InfoCardProps) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 text-sm text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300">
      <h4 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
        {title}
      </h4>
      <ul className="mt-3 space-y-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
