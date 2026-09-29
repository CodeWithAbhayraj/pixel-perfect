import { categories } from "@/data/menuData";

type Props = {
  active: string;
  onSelect: (category: string) => void;
};

export function CategoryNav({ active, onSelect }: Props) {
  return (
    <nav aria-label="Menu categories" className="no-scrollbar -mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
      <ul className="flex w-max gap-2 py-1">
        {categories.map((category) => {
          const isActive = active === category;
          return (
            <li key={category}>
              <button
                type="button"
                onClick={() => onSelect(category)}
                aria-current={isActive ? "true" : undefined}
                className={
                  "whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium transition-all active:scale-95 " +
                  (isActive
                    ? "border-primary bg-primary text-primary-foreground shadow-[var(--shadow-card)]"
                    : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground")
                }
              >
                {category}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
