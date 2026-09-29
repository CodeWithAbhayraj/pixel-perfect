import { Search, X } from "lucide-react";
import { forwardRef } from "react";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export const SearchBar = forwardRef<HTMLInputElement, Props>(function SearchBar(
  { value, onChange },
  ref,
) {
  return (
    <div className="relative">
      <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <input
        ref={ref}
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search dishes..."
        aria-label="Search dishes"
        className="h-12 w-full rounded-full border border-border bg-card pl-11 pr-11 text-sm text-foreground outline-none transition-shadow placeholder:text-muted-foreground focus:border-primary/50 focus:ring-4 focus:ring-primary/10"
      />
      {value && (
        <button
          type="button"
          onClick={() => onChange("")}
          aria-label="Clear search"
          className="absolute right-3 top-1/2 grid h-7 w-7 -translate-y-1/2 place-items-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-accent"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      )}
    </div>
  );
});
