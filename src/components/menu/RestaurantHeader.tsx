import { Clock, MapPin, UtensilsCrossed } from "lucide-react";
import { restaurant } from "@/data/menuData";

export function RestaurantHeader({ table }: { table?: string | undefined }) {
  return (
    <header className="fade-up bg-accent/50 px-4 pb-6 pt-8 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
          <div className="flex min-w-0 items-center gap-3">
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-primary text-primary-foreground">
              <UtensilsCrossed className="h-6 w-6" />
            </div>
            <div className="min-w-0">
              <h1 className="truncate text-2xl font-semibold uppercase tracking-[0.12em] sm:text-3xl">
                {restaurant.name}
              </h1>
              <p className="mt-0.5 text-xs tracking-[0.18em] text-muted-foreground sm:text-sm">
                {restaurant.tagline}
              </p>
            </div>
          </div>
          <span className="shrink-0 rounded-full border border-primary/30 bg-card px-3 py-1.5 text-xs font-medium text-primary">
            {table ? `Table ${table}` : "Welcome"}
          </span>
        </div>

        <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1.5 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5 shrink-0" />
            {restaurant.location}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 shrink-0" />
            {restaurant.hours}
          </span>
        </div>

        <div className="mt-5 rounded-2xl border border-border bg-card p-4 shadow-[var(--shadow-card)]">
          <h2 className="text-lg font-semibold">Welcome to {restaurant.name}</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Explore our menu and order your favourites.
          </p>
        </div>
      </div>
    </header>
  );
}
