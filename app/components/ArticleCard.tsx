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
    <Link to={`/blog/${slug}`} viewTransition>
      <div className="relative flex flex-col justify-between gap-6 rounded-xl border border-(--border-color) bg-(--bg-surface) p-6 transition-all duration-300 hover:border-(--color-brand)/40 hover:bg-(--bg-card) hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-blue-500/5">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-3">
            <div className="group/title inline-flex items-center gap-2 font-audiowide text-lg font-medium text-(--text-main)">
              <h2 className="capitalize transition-colors group-hover/title:text-(--color-brand) group-hover/title:underline">
                {title}
              </h2>
              <span
                aria-hidden="true"
                className="text-sm text-(--text-muted) transition-transform duration-200 group-hover/title:-translate-y-0.5 group-hover/title:translate-x-0.5 group-hover/title:text-(--color-brand)"
              >
                ➔
              </span>
            </div>

            <p className="max-w-2xl text-sm leading-relaxed text-(--text-subtle)">
              {summary}
            </p>
          </div>

          {image && (
            <div className="aspect-square w-40 shrink-0 overflow-hidden rounded-md ">
              <img
                src={image}
                alt={title}
                className="h-full w-full object-cover"
              />
            </div>
          )}
        </div>

        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            {tag && (
              <span className="rounded-sm border border-(--border-color) px-2.5 py-1 text-xs text-(--text-main) hover:border-(--color-brand) hover:bg-portfolio-bg-dark hover:text-portfolio-bg-light dark:hover:bg-portfolio-bg-light dark:hover:text-portfolio-bg-dark">
                # {tag}
              </span>
            )}

            {(publishedBy || formattedDate) && (
              <div className="flex items-center gap-2 text-xs text-(--text-muted)">
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
