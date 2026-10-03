import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("routes/layout.tsx", [
    index("routes/home.tsx"),
    route("about", "routes/about.tsx"),
    route("projects", "routes/projects.tsx"),
    route("projects/:slug", "routes/project.tsx"),
    route("blog", "routes/blog.tsx"),
    route("blog/:slug", "routes/article.tsx"),
    route("contact-me", "routes/contact-me.tsx"),
  ]),
] satisfies RouteConfig;
