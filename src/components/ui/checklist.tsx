import { type ReactNode, useState } from "react";

interface ChecklistProps {
  items: ReactNode[];
  className?: string;
}

export function Checklist({ items, className = "" }: ChecklistProps) {
  const [checked, setChecked] = useState<Set<number>>(new Set());

  const toggle = (i: number) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  };

  return (
    <ul className={`checklist ${className}`.trim()}>
      {items.map((item, i) => (
        <li key={i} data-checked={checked.has(i) || undefined} onClick={() => toggle(i)}>
          {item}
        </li>
      ))}
    </ul>
  );
}
