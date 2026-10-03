import { Link } from "react-router";
import type { SanityDocument } from "@sanity/client";
import type { Route } from "./+types/project";
import { client } from "~/sanity/client";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { FaGithub, FaLink } from "react-icons/fa6";

const PROJECT_QUERY = `*[_type == "project" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  publishedAt,
  summary,
  techStack,
  description,
  demo,
  markdown,
  "github": githup,
  "image": image.asset->url
}`;

export async function loader({ params }: Route.LoaderArgs) {
  const project = await client.fetch<SanityDocument>(PROJECT_QUERY, params);

  if (!project) {
    throw new Response("Error 404", { status: 404 });
  }

  return { project };
}

export default function ProjectDetail({ loaderData }: Route.ComponentProps) {
  const { project } = loaderData;

  const formattedDate = project.publishedAt
    ? new Date(project.publishedAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  return (
    <main className="relative flex h-full w-full flex-col items-center justify-center px-6 py-12 lg:px-12">
      <div className="w-full max-w-4xl space-y-12 py-6">
        <header className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="font-audiowide text-xs uppercase tracking-widest text-(--color-brand)">
              Project Detail
            </span>
          </div>

          <h1 className="font-audiowide text-3xl font-bold tracking-tight text-(--text-main) sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
            {project.title}
          </h1>

          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-(--border-color) pb-6">
            {formattedDate ? (
              <span className="text-sm font-medium text-(--text-muted)">
                Published on {formattedDate}
              </span>
            ) : (
              <div></div>
            )}

            <div className="flex items-center gap-3">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-transparent bg-(--color-brand) px-4 py-2 font-audiowide text-[12px] font-medium text-white transition-all duration-200 hover:bg-(--color-brand-hover) hover:shadow-md hover:shadow-blue-500/20 active:scale-95"
                >
                  <FaLink /> Live Demo
                </a>
              )}

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-(--border-color) bg-(--bg-main) px-4 py-2 font-audiowide text-[12px] font-medium text-(--text-main) transition-all duration-200 hover:border-(--color-brand) hover:bg-(--bg-card-hover) hover:text-(--color-brand) hover:shadow-md active:scale-95"
                >
                  <FaGithub /> Source Code
                </a>
              )}
            </div>
          </div>
        </header>

        {project.image && (
          <div className="overflow-hidden rounded-2xl border border-(--border-color) bg-(--bg-card) shadow-lg shadow-black/5 dark:shadow-blue-500/5">
            <img
              src={project.image}
              alt={project.title}
              className="h-auto w-full object-cover transition-transform duration-500 hover:scale-[1.01]"
            />
          </div>
        )}

        {project.techStack && project.techStack.length > 0 && (
          <div className="space-y-4 rounded-xl border border-(--border-color) bg-(--bg-surface) p-6">
            <h3 className="font-audiowide text-xs uppercase tracking-wider text-(--text-muted)">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech: string) => (
                <span
                  key={tech}
                  className="rounded-sm border border-(--border-color) px-2.5 py-1 text-xs text-(--text-main) hover:border-(--color-brand) hover:bg-portfolio-bg-dark hover:text-portfolio-bg-light dark:hover:bg-portfolio-bg-light dark:hover:text-portfolio-bg-dark"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        <div
          className="prose dark:prose-invert max-w-none pt-4 text-(--text-main)
                    prose-headings:font-audiowide prose-headings:text-(--text-main)
                    prose-a:text-(--color-brand) prose-a:no-underline hover:prose-a:underline
                    prose-code:rounded prose-code:bg-(--bg-card) prose-code:px-1.5 prose-code:py-0.5 prose-code:text-(--color-brand) prose-code:before:content-none prose-code:after:content-none
                    prose-pre:rounded-xl prose-pre:border prose-pre:border-(--border-color) prose-pre:bg-(--bg-surface) prose-pre:p-4"
        >
          <Markdown remarkPlugins={[remarkGfm]}>{project.markdown}</Markdown>
        </div>
      </div>
    </main>
  );
}
