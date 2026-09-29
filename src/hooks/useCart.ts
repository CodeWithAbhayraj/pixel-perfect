import { useCallback, useMemo, useState } from "react";
import type { MenuItem } from "@/data/menuData";

export type CartLine = { item: MenuItem; qty: number };

export function useCart() {
  const [lines, setLines] = useState<CartLine[]>([]);

  const add = useCallback((item: MenuItem) => {
    setLines((prev) => {
      const found = prev.find((l) => l.item.id === item.id);
      if (found) {
        return prev.map((l) => (l.item.id === item.id ? { ...l, qty: l.qty + 1 } : l));
      }
      return [...prev, { item, qty: 1 }];
    });
  }, []);

  const decrement = useCallback((id: number) => {
    setLines((prev) =>
      prev
        .map((l) => (l.item.id === id ? { ...l, qty: l.qty - 1 } : l))
        .filter((l) => l.qty > 0),
    );
  }, []);

  const remove = useCallback((id: number) => {
    setLines((prev) => prev.filter((l) => l.item.id !== id));
  }, []);

  const clear = useCallback(() => setLines([]), []);

  const count = useMemo(() => lines.reduce((n, l) => n + l.qty, 0), [lines]);
  const total = useMemo(() => lines.reduce((n, l) => n + l.qty * l.item.price, 0), [lines]);
  const qtyOf = useCallback(
    (id: number) => lines.find((l) => l.item.id === id)?.qty ?? 0,
    [lines],
  );

  return { lines, add, decrement, remove, clear, count, total, qtyOf };
}
