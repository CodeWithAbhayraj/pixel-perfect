import { useMemo, useRef, useState } from "react";
import { ShoppingBag } from "lucide-react";
import { categories, menuItems, type MenuItem } from "@/data/menuData";
import { useCart } from "@/hooks/useCart";
import { RestaurantHeader } from "./RestaurantHeader";
import { SearchBar } from "./SearchBar";
import { CategoryNav } from "./CategoryNav";
import { MenuSection } from "./MenuSection";
import { FoodDetailsModal } from "./FoodDetailsModal";
import { CartDrawer } from "./CartDrawer";
import { BottomNavigation } from "./BottomNavigation";
import { Footer } from "./Footer";

export function MenuPage({ table }: { table?: string | undefined }) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selected, setSelected] = useState<MenuItem | null>(null);
  const [cartOpen, setCartOpen] = useState(false);

  const cart = useCart();
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const searchRef = useRef<HTMLInputElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return menuItems.filter((item) => {
      const matchesQuery =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q);
      const matchesCategory = activeCategory === "All" || item.category === activeCategory;
      return matchesQuery && matchesCategory;
    });
  }, [query, activeCategory]);

  const grouped = useMemo(() => {
    return categories
      .filter((c) => c !== "All")
      .map((category) => ({
        category,
        items: filtered.filter((item) => item.category === category),
      }))
      .filter((group) => group.items.length > 0);
  }, [filtered]);

  const selectCategory = (category: string) => {
    setActiveCategory(category);
    if (category === "All") {
      menuRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    requestAnimationFrame(() => {
      sectionRefs.current[category]?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  return (
    <div className="min-h-screen pb-32">
      <RestaurantHeader table={table} />

      <div className="sticky top-0 z-30 border-b border-border bg-background/95 px-4 py-3 backdrop-blur sm:px-6">
        <div className="mx-auto max-w-5xl space-y-3">
          <SearchBar ref={searchRef} value={query} onChange={setQuery} />
          <CategoryNav active={activeCategory} onSelect={selectCategory} />
        </div>
      </div>

      <main ref={menuRef} className="mx-auto max-w-5xl px-4 sm:px-6">
        {grouped.length === 0 ? (
          <p className="py-20 text-center text-sm text-muted-foreground">
            No dishes match “{query}”. Try another search.
          </p>
        ) : (
          grouped.map(({ category, items }) => (
            <MenuSection
              key={category}
              category={category}
              items={items}
              qtyOf={cart.qtyOf}
              onOpen={setSelected}
              onAdd={cart.add}
              onDecrement={cart.decrement}
              sectionRef={(el) => {
                sectionRefs.current[category] = el;
              }}
            />
          ))
        )}
      </main>

      <Footer />

      {cart.count > 0 && !cartOpen && (
        <div className="fixed inset-x-0 bottom-16 z-40 px-4 pb-2">
          <button
            type="button"
            onClick={() => setCartOpen(true)}
            className="fade-up mx-auto flex h-14 w-full max-w-lg items-center justify-between rounded-full bg-primary px-5 text-primary-foreground shadow-[var(--shadow-float)] transition-transform active:scale-[0.98]"
          >
            <span className="flex items-center gap-2 text-sm font-medium">
              <ShoppingBag className="h-5 w-5" />
              {cart.count} item{cart.count === 1 ? "" : "s"} · ₹{cart.total}
            </span>
            <span className="text-sm font-semibold">View Cart</span>
          </button>
        </div>
      )}

      <BottomNavigation
        active={cartOpen ? "cart" : "menu"}
        cartCount={cart.count}
        onHome={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        onMenu={() => selectCategory("All")}
        onSearch={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
          setTimeout(() => searchRef.current?.focus(), 350);
        }}
        onCart={() => setCartOpen(true)}
      />

      <FoodDetailsModal item={selected} onClose={() => setSelected(null)} onAdd={cart.add} />

      <CartDrawer
        open={cartOpen}
        lines={cart.lines}
        total={cart.total}
        table={table}
        onClose={() => setCartOpen(false)}
        onIncrement={(id) => {
          const item = menuItems.find((i) => i.id === id);
          if (item) cart.add(item);
        }}
        onDecrement={cart.decrement}
        onRemove={cart.remove}
      />
    </div>
  );
}
