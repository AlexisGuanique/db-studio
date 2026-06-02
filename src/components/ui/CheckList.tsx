interface CheckListProps {
  items: readonly string[];
  light?: boolean;
  columns?: 1 | 2;
}

export function CheckList({ items, light = false, columns = 1 }: CheckListProps) {
  return (
    <ul
      className={`grid gap-3 ${columns === 2 ? "md:grid-cols-2" : ""}`}
    >
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span
            className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
              light ? "bg-white text-burgundy" : "bg-burgundy text-white"
            }`}
            aria-hidden
          >
            <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          <span className={light ? "text-white/95" : "text-text-secondary"}>
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}
