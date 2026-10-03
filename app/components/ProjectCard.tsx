import { Link } from "react-router";
import { FaGithub, FaLink } from "react-icons/fa6";

interface ProjectCardProps {
  title: string;
  summary: string;
  techStack?: string[];
  demo?: string;
  github?: string;
  slug: string;
  image?: string;
}

export default function ProjectCard({
  title,
  summary,
  techStack = [],
  demo,
  github,
  slug,
  image,
}: ProjectCardProps) {
  return (
    <article className="group relative flex h-full flex-col justify-between gap-6 rounded-xl border border-(--border-color) bg-(--bg-surface) p-5 transition-all duration-300 hover:border-(--color-brand)/40 hover:bg-(--bg-card) hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-blue-500/5">
      <div className="space-y-4">
        {/* صورة المشروع */}
        {image && (
          <div className="aspect-video w-full overflow-hidden rounded-lg border border-(--border-color) bg-(--bg-card)">
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover "
              loading="lazy"
            />
          </div>
        )}

        <div className="space-y-2">
          <Link
            to={`/projects/${slug}`}
            viewTransition
            className="group/title inline-flex items-center gap-2 font-audiowide text-lg font-medium text-(--text-main) transition-colors hover:text-(--color-brand)"
          >
            <h2 className="capitalize">{title}</h2>
            <span
              aria-hidden="true"
              className="text-sm text-(--text-muted) transition-transform duration-200 group-hover/title:-translate-y-0.5 group-hover/title:translate-x-0.5 group-hover/title:text-(--color-brand)"
            >
              ➔
            </span>
          </Link>

          <p className="line-clamp-3 text-sm leading-relaxed text-(--text-subtle)">
            {summary}
          </p>
        </div>
      </div>

      <div className="space-y-5">
        {techStack.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-sm border border-(--border-color) px-2.5 py-1 text-xs text-(--text-main) hover:border-(--color-brand) hover:bg-portfolio-bg-dark hover:text-portfolio-bg-light dark:hover:bg-portfolio-bg-light dark:hover:text-portfolio-bg-dark"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {(demo || github) && (
          <div className="flex items-center gap-3 pt-1">
            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-transparent bg-(--color-brand) px-4 py-2 font-audiowide text-[12px] font-medium text-white transition-all duration-200 hover:bg-(--color-brand-hover) hover:shadow-md hover:shadow-blue-500/20 active:scale-95"
              >
                <FaLink /> Live Demo
              </a>
            )}

            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-(--border-color) bg-(--bg-main) px-4 py-2 font-audiowide text-[12px] font-medium text-(--text-main) transition-all duration-200 hover:border-(--color-brand) hover:bg-(--bg-card-hover) hover:text-(--color-brand) hover:shadow-md active:scale-95"
              >
                <FaGithub /> GitHub
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
