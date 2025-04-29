import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("cards", "routes/cards.tsx"),
  route("cards/*", "routes/card.tsx"),
] satisfies RouteConfig;
