import { useEffect } from "react";
import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import type { CartLine } from "@/hooks/useCart";
import { TypeMark } from "./Badges";

type Props = {
  open: boolean;
  lines: CartLine[];
  total: number;
  table?: string;
  onClose: () => void;
  onIncrement: (id: number) => void;
  onDecrement: (id: number) => void;
  onRemove: (id: number) => void;
};

export function CartDrawer({
  open,
  lines,
  total,
  table,
  onClose,
  onIncrement,
  onDecrement,
  onRemove,
}: Props) {
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

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
        aria-label="Your order"
        className="sheet-in relative flex max-h-[88vh] w-full max-w-lg flex-col rounded-t-3xl bg-card shadow-[var(--shadow-float)] sm:rounded-3xl"
      >
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 border-b border-border p-5">
          <div className="min-w-0">
            <h2 className="truncate text-lg font-semibold">Your Order</h2>
            <p className="text-xs text-muted-foreground">
              {table ? `Table ${table}` : "Dine in"} · {lines.length} item
              {lines.length === 1 ? "" : "s"}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close cart"
            className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-muted"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {lines.length === 0 ? (
          <div className="flex flex-col items-center gap-3 px-6 py-16 text-center">
            <ShoppingBag className="h-10 w-10 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">
              Your cart is empty. Add something delicious from the menu.
            </p>
          </div>
        ) : (
          <>
            <ul className="flex-1 divide-y divide-border overflow-y-auto px-5">
              {lines.map(({ item, qty }) => (
                <li key={item.id} className="flex items-center gap-3 py-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    width={944}
                    height={704}
                    className="h-14 w-14 shrink-0 rounded-xl object-cover"
                  />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1.5">
                      <TypeMark type={item.type} />
                      <p className="truncate text-sm font-semibold">{item.name}</p>
                    </div>
                    <p className="mt-0.5 text-sm text-muted-foreground">
                      ₹{item.price} × {qty} = ₹{item.price * qty}
                    </p>
                  </div>
                  <div className="flex shrink-0 items-center gap-1 rounded-full border border-border px-1.5 py-1">
                    <button
                      type="button"
                      onClick={() => onDecrement(item.id)}
                      aria-label={`Decrease ${item.name}`}
                      className="grid h-6 w-6 place-items-center rounded-full text-primary"
                    >
                      <Minus className="h-3.5 w-3.5" />
                    </button>
                    <span className="min-w-4 text-center text-sm font-semibold">{qty}</span>
                    <button
                      type="button"
                      onClick={() => onIncrement(item.id)}
                      aria-label={`Increase ${item.name}`}
                      className="grid h-6 w-6 place-items-center rounded-full text-primary"
                    >
                      <Plus className="h-3.5 w-3.5" />
                    </button>
                  </div>
                  <button
                    type="button"
                    onClick={() => onRemove(item.id)}
                    aria-label={`Remove ${item.name}`}
                    className="grid h-8 w-8 shrink-0 place-items-center rounded-full text-muted-foreground transition-colors hover:text-destructive"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </li>
              ))}
            </ul>

            <div className="border-t border-border p-5">
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>Total</span>
                <span className="text-xl font-semibold text-foreground">₹{total}</span>
              </div>
              <p className="mt-2 text-xs text-muted-foreground">
                Please show this order to your server to confirm.
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
