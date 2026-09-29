import { Clock, Instagram, MapPin, Phone } from "lucide-react";
import { restaurant } from "@/data/menuData";

export function Footer() {
  return (
    <footer className="mt-12 border-t border-border bg-accent/40 px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-lg font-semibold uppercase tracking-[0.14em]">{restaurant.name}</h2>
        <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
          <li className="flex items-start gap-2">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
            {restaurant.location}
          </li>
          <li className="flex items-start gap-2">
            <Clock className="mt-0.5 h-4 w-4 shrink-0" />
            {restaurant.hours}
          </li>
          <li className="flex items-start gap-2">
            <Phone className="mt-0.5 h-4 w-4 shrink-0" />
            {restaurant.phone}
          </li>
          <li className="flex items-start gap-2">
            <Instagram className="mt-0.5 h-4 w-4 shrink-0" />
            {restaurant.instagram}
          </li>
        </ul>
        <p className="mt-6 text-sm font-medium">Thank you for dining with us ❤️</p>
      </div>
    </footer>
  );
}
