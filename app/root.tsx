import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";
import { ThemeProvider } from "~/contexts/theme-context";

// 1. Root Meta Export (Default fallback for all routes)
export const meta: Route.MetaFunction = () => {
  return [
    { title: "Hussein — Front-end Developer" },
    {
      name: "description",
      content:
        "Minimalist, futuristic personal portfolio of Hussein — Front-end Developer specializing in React, React Router v7, TypeScript, and Sanity CMS.",
    },
    {
      name: "keywords",
      content:
        "Hussein, Portfolio, Web Developer, Front-end Developer, React, React Router, TypeScript, NextJs, Sanity CMS, Tailwind CSS",
    },
    { name: "author", content: "Hussein" },
    { name: "robots", content: "index, follow" },

    // Open Graph / Facebook
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: "Hussein Portfolio" },
    {
      property: "og:title",
      content: "Hussein — Full-Stack Developer & Software Engineer",
    },
    {
      property: "og:description",
      content:
        "Minimalist, futuristic personal portfolio featuring web development projects, technical blog posts, and interactive experiences.",
    },
    { property: "og:image", content: "/og-image.png" },

    // Twitter Card
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Hussein — Full-Stack Developer" },
    {
      name: "twitter:description",
      content:
        "Minimalist, futuristic personal portfolio featuring web development projects, technical blog posts, and interactive experiences.",
    },
    { name: "twitter:image", content: "/og-image.png" },
  ];
};

// 2. Links Export (Icons & Web Fonts)
export const links: Route.LinksFunction = () => [
  { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
  { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Audiowide&display=swap",
  },
  {
    rel: "stylesheet",
    href: "https://cdn.jsdelivr.net/npm/easymde/dist/easymde.min.css",
  },
];

export async function loader({ request }: Route.LoaderArgs) {
  const cookieHeader = request.headers.get("Cookie") || "";
  const match = cookieHeader.match(/theme=(light|dark)/);
  const theme = match ? (match[1] as "light" | "dark") : "light";
  return { theme };
}

export function Layout({ children }: { children: React.ReactNode }) {
  const data = useLoaderData<typeof loader>();
  const theme = data?.theme ?? "light";

  // Schema.org Person Structured Data for Search Engine Rich Snippets
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Hussein",
    jobTitle: "Full-Stack Developer",
    url: "https://yourdomain.com",
    sameAs: [
      "https://github.com/your-username",
      "https://linkedin.com/in/your-handle",
      "https://twitter.com/your-handle",
    ],
  };

  return (
    <html
      lang="en"
      className={theme === "dark" ? "dark" : undefined}
      suppressHydrationWarning
    >
      <head suppressHydrationWarning>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="theme-color"
          content={theme === "dark" ? "#121418" : "#fbf9f4"}
        />
        <Meta />
        <Links />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning>
        <ThemeProvider initialTheme={theme}>{children}</ThemeProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
