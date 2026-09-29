import type { MenuItem } from "@/data/menuData";
import { FoodCard } from "./FoodCard";

type Props = {
  category: string;
  items: MenuItem[];
  qtyOf: (id: number) => number;
  onOpen: (item: MenuItem) => void;
  onAdd: (item: MenuItem) => void;
  onDecrement: (id: number) => void;
  sectionRef: (el: HTMLElement | null) => void;
};

export function MenuSection({
  category,
  items,
  qtyOf,
  onOpen,
  onAdd,
  onDecrement,
  sectionRef,
}: Props) {
  return (
    <section ref={sectionRef} className="scroll-mt-40 pt-8">
      <div className="flex items-center gap-3">
        <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">{category}</h2>
        <span className="h-px flex-1 bg-border" />
        <span className="text-xs text-muted-foreground">{items.length} items</span>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => (
          <FoodCard
            key={item.id}
            item={item}
            qty={qtyOf(item.id)}
            onOpen={onOpen}
            onAdd={onAdd}
            onDecrement={onDecrement}
          />
        ))}
      </div>
    </section>
  );
}
