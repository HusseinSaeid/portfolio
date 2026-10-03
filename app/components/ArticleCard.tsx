import { Link } from "react-router";

interface ArticleCardProps {
  title: string;
  summary: string;
  slug: string;
  tag: string;
  publishedAt: string;
  publishedBy: string;
  image?: string;
}

export default function ArticleCard({
  image,
  title,
  summary,
  slug,
  tag,
  publishedAt,
  publishedBy,
}: ArticleCardProps) {
  const formattedDate = publishedAt
    ? new Date(publishedAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : null;

  return (
    <Link to={`/blog/${slug}`} viewTransition className="block w-full">
      <div className="relative flex flex-col justify-between gap-4 sm:gap-6 rounded-xl border border-(--border-color) bg-(--bg-surface) p-4 sm:p-6 transition-all duration-300 hover:border-(--color-brand)/40 hover:bg-(--bg-card) hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-blue-500/5">
        {/* Main Content Area */}
        <div className="flex items-start justify-between gap-3 sm:gap-6">
          <div className="space-y-2 sm:space-y-3 min-w-0 flex-1">
            <div className="group/title inline-flex items-center gap-1.5 sm:gap-2 font-audiowide text-base sm:text-lg font-medium text-(--text-main)">
              <h2 className="capitalize transition-colors group-hover/title:text-(--color-brand) group-hover/title:underline line-clamp-2">
                {title}
              </h2>
              <span
                aria-hidden="true"
                className="shrink-0 text-xs sm:text-sm text-(--text-muted) transition-transform duration-200 group-hover/title:-translate-y-0.5 group-hover/title:translate-x-0.5 group-hover/title:text-(--color-brand)"
              >
                ➔
              </span>
            </div>

            <p className="max-w-2xl text-xs sm:text-sm leading-relaxed text-(--text-subtle) line-clamp-3 sm:line-clamp-none">
              {summary}
            </p>
          </div>

          {/* Responsive Thumbnail */}
          {image && (
            <div className="aspect-square w-20 sm:w-32 md:w-40 shrink-0 overflow-hidden rounded-lg border border-(--border-color)/50">
              <img
                src={image}
                alt={title}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          )}
        </div>

        {/* Footer Meta Section */}
        <div className="pt-2 border-t border-(--border-color)/40">
          <div className="flex flex-wrap items-center justify-between gap-2.5 sm:gap-3 text-[11px] sm:text-xs">
            {tag && (
              <span className="rounded-sm border border-(--border-color) px-2 py-0.5 sm:px-2.5 sm:py-1 text-(--text-main) transition-colors hover:border-(--color-brand) hover:bg-portfolio-bg-dark hover:text-portfolio-bg-light dark:hover:bg-portfolio-bg-light dark:hover:text-portfolio-bg-dark">
                # {tag}
              </span>
            )}

            {(publishedBy || formattedDate) && (
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-(--text-muted) ml-auto sm:ml-0">
                {publishedBy && <span>By {publishedBy}</span>}
                {publishedBy && formattedDate && <span>•</span>}
                {formattedDate && (
                  <time dateTime={publishedAt}>{formattedDate}</time>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
