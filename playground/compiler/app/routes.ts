import { type RouteConfig, index, route } from "@react-router/dev/routes";

export const routes: RouteConfig = [
  index("routes/_index.tsx"),
  route("injected/:id", "routes/injected.tsx"),
  route("manual/:id", "routes/manual.tsx"),
];
