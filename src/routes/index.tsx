import { createFileRoute } from "@tanstack/react-router";
import { MenuPage } from "@/components/menu/MenuPage";

export const Route = createFileRoute("/")({
  validateSearch: (search: Record<string, unknown>): { table?: string } => {
    const table = search["table"];
    return table ? { table: String(table) } : {};
  },
  head: () => ({
    meta: [
      { title: "The Urban Plate — Digital Table Menu" },
      {
        name: "description",
        content:
          "Scan, browse and order from The Urban Plate's digital menu — starters, biryani, breads, desserts and more.",
      },
      { property: "og:title", content: "The Urban Plate — Digital Table Menu" },
      {
        property: "og:description",
        content: "Fresh • Local • Delicious. Browse our full menu and order right from your table.",
      },
      { property: "og:type", content: "restaurant.menu" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const { table } = Route.useSearch();
  return <MenuPage table={table} />;
}
