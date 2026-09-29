import { Flame, Star } from "lucide-react";

export function TypeMark({ type }: { type: "veg" | "nonveg" }) {
  const color = type === "veg" ? "border-veg text-veg" : "border-nonveg text-nonveg";
  return (
    <span
      aria-label={type === "veg" ? "Vegetarian" : "Non-vegetarian"}
      className={`grid h-4 w-4 shrink-0 place-items-center rounded-[4px] border-2 ${color}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
    </span>
  );
}

export function BestsellerBadge() {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-gold/20 px-2 py-0.5 text-[11px] font-semibold text-accent-foreground">
      <Star className="h-3 w-3 fill-current" />
      Bestseller
    </span>
  );
}

export function SpicyBadge() {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-spice/15 px-2 py-0.5 text-[11px] font-semibold text-spice">
      <Flame className="h-3 w-3" />
      Spicy
    </span>
  );
}
