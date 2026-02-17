type CodeBlockProps = {
  code: string;
  caption?: string;
};

export function CodeBlock({ code, caption }: CodeBlockProps) {
  return (
    <div className="rounded-xl border border-zinc-200 bg-zinc-900 text-zinc-100 dark:border-zinc-800">
      {caption ? (
        <div className="border-b border-zinc-800 px-4 py-2 text-xs uppercase tracking-[0.2em] text-zinc-400">
          {caption}
        </div>
      ) : null}
      <pre className="overflow-x-auto px-4 py-4 text-xs leading-5 sm:text-sm">
        <code>{code}</code>
      </pre>
    </div>
  );
}
