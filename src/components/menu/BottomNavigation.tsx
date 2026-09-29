import { Home, Search, ShoppingBag, UtensilsCrossed } from "lucide-react";

type Props = {
  active: "home" | "menu" | "search" | "cart";
  cartCount: number;
  onHome: () => void;
  onMenu: () => void;
  onSearch: () => void;
  onCart: () => void;
};

export function BottomNavigation({
  active,
  cartCount,
  onHome,
  onMenu,
  onSearch,
  onCart,
}: Props) {
  const items = [
    { key: "home", label: "Home", Icon: Home, onClick: onHome },
    { key: "menu", label: "Menu", Icon: UtensilsCrossed, onClick: onMenu },
    { key: "search", label: "Search", Icon: Search, onClick: onSearch },
    { key: "cart", label: "Cart", Icon: ShoppingBag, onClick: onCart },
  ] as const;

  return (
    <nav
      aria-label="Primary"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-card/95 pb-[env(safe-area-inset-bottom)] backdrop-blur"
    >
      <ul className="mx-auto grid max-w-lg grid-cols-4">
        {items.map(({ key, label, Icon, onClick }) => (
          <li key={key}>
            <button
              type="button"
              onClick={onClick}
              className={
                "relative flex w-full flex-col items-center gap-1 py-2.5 text-[11px] font-medium transition-colors " +
                (active === key ? "text-primary" : "text-muted-foreground")
              }
            >
              <span className="relative">
                <Icon className="h-5 w-5" />
                {key === "cart" && cartCount > 0 && (
                  <span className="absolute -right-2 -top-1.5 grid h-4 min-w-4 place-items-center rounded-full bg-primary px-1 text-[10px] font-bold text-primary-foreground">
                    {cartCount}
                  </span>
                )}
              </span>
              {label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
