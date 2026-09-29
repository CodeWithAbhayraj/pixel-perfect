import { createFileRoute } from "@tanstack/react-router";
import { MenuPage } from "@/components/menu/MenuPage";

export const Route = createFileRoute("/menu")({
  validateSearch: (search: Record<string, unknown>): { table?: string } => {
    const table = search["table"];
    return table ? { table: String(table) } : {};
  },
  head: () => ({
    meta: [
      { title: "Menu — The Urban Plate" },
      {
        name: "description",
        content:
          "The full Urban Plate menu: starters, soups, main course, breads, biryani, Chinese, desserts and beverages.",
      },
      { property: "og:title", content: "Menu — The Urban Plate" },
      {
        property: "og:description",
        content: "Browse every dish and add favourites to your table order.",
      },
      { property: "og:type", content: "restaurant.menu" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MenuRoute,
});

function MenuRoute() {
  const { table } = Route.useSearch();
  return <MenuPage table={table} />;
}
