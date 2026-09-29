import { useEffect } from "react";
import { Flame, Plus, X } from "lucide-react";
import type { MenuItem } from "@/data/menuData";
import { BestsellerBadge, TypeMark } from "./Badges";

type Props = {
  item: MenuItem | null;
  onClose: () => void;
  onAdd: (item: MenuItem) => void;
};

export function FoodDetailsModal({ item, onClose, onAdd }: Props) {
  useEffect(() => {
    if (!item) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center">
      <div
        className="overlay-in absolute inset-0 bg-foreground/50 backdrop-blur-[2px]"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label={item.name}
        className="sheet-in relative max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-t-3xl bg-card shadow-[var(--shadow-float)] sm:rounded-3xl"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-card/90 text-foreground shadow-[var(--shadow-card)]"
        >
          <X className="h-4 w-4" />
        </button>

        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          width={944}
          height={704}
          className="h-56 w-full object-cover sm:h-64 sm:rounded-t-3xl"
        />

        <div className="p-5 pb-8 sm:p-6">
          <div className="flex items-center gap-2">
            <TypeMark type={item.type} />
            {item.bestseller && <BestsellerBadge />}
            <span className="inline-flex items-center gap-1 rounded-full bg-muted px-2 py-0.5 text-[11px] font-semibold text-muted-foreground">
              <Flame className="h-3 w-3" />
              {item.spiceLevel}
            </span>
          </div>

          <h2 className="mt-2 text-2xl font-semibold">{item.name}</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>

          <div className="mt-5 rounded-2xl bg-muted/70 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Ingredients
            </p>
            <p className="mt-1.5 text-sm">{item.ingredients}</p>
          </div>

          <div className="mt-6 flex items-center justify-between gap-4">
            <p className="text-2xl font-semibold">₹{item.price}</p>
            <button
              type="button"
              onClick={() => {
                onAdd(item);
                onClose();
              }}
              className="inline-flex h-12 items-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition-transform active:scale-95"
            >
              <Plus className="h-4 w-4" />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
