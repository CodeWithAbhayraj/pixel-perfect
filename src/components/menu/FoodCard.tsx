import { Minus, Plus } from "lucide-react";
import type { MenuItem } from "@/data/menuData";
import { BestsellerBadge, SpicyBadge, TypeMark } from "./Badges";

type Props = {
  item: MenuItem;
  qty: number;
  onOpen: (item: MenuItem) => void;
  onAdd: (item: MenuItem) => void;
  onDecrement: (id: number) => void;
};

export function FoodCard({ item, qty, onOpen, onAdd, onDecrement }: Props) {
  return (
    <article className="group flex gap-3 rounded-2xl border border-border bg-card p-3 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-float)] sm:gap-4 sm:p-4">
      <button
        type="button"
        onClick={() => onOpen(item)}
        className="min-w-0 flex-1 text-left"
        aria-label={`View details for ${item.name}`}
      >
        <div className="flex items-center gap-2">
          <TypeMark type={item.type} />
          {item.bestseller && <BestsellerBadge />}
          {item.spicy && <SpicyBadge />}
        </div>
        <h3 className="mt-1.5 text-base font-semibold leading-snug">{item.name}</h3>
        <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{item.description}</p>
        <p className="mt-2 text-sm font-semibold text-foreground">₹{item.price}</p>
      </button>

      <div className="relative w-28 shrink-0 sm:w-32">
        <button
          type="button"
          onClick={() => onOpen(item)}
          className="block w-full overflow-hidden rounded-xl"
          tabIndex={-1}
          aria-hidden="true"
        >
          <img
            src={item.image}
            alt={item.name}
            loading="lazy"
            width={944}
            height={704}
            className="h-24 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-28"
          />
        </button>

        {qty === 0 ? (
          <button
            type="button"
            onClick={() => onAdd(item)}
            className="absolute -bottom-3 left-1/2 flex h-9 -translate-x-1/2 items-center gap-1 rounded-full bg-primary px-4 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-float)] transition-transform active:scale-95"
          >
            <Plus className="h-4 w-4" />
            Add
          </button>
        ) : (
          <div className="absolute -bottom-3 left-1/2 flex h-9 -translate-x-1/2 items-center gap-1 rounded-full bg-primary px-1.5 text-primary-foreground shadow-[var(--shadow-float)]">
            <button
              type="button"
              onClick={() => onDecrement(item.id)}
              aria-label={`Remove one ${item.name}`}
              className="grid h-7 w-7 place-items-center rounded-full transition-colors hover:bg-primary-foreground/15"
            >
              <Minus className="h-4 w-4" />
            </button>
            <span className="min-w-5 text-center text-sm font-semibold">{qty}</span>
            <button
              type="button"
              onClick={() => onAdd(item)}
              aria-label={`Add one ${item.name}`}
              className="grid h-7 w-7 place-items-center rounded-full transition-colors hover:bg-primary-foreground/15"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>
    </article>
  );
}
