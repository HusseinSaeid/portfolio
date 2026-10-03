import { Link } from "react-router";
import type { SanityDocument } from "@sanity/client";
import type { Route } from "./+types/article";
import { client } from "~/sanity/client";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  publishedAt,
  publishedBy,
  tag,
  "summary": pt::text(summary),
  markdown,
  "image": image.asset->url
}`;

export async function loader({ params }: Route.LoaderArgs) {
  const post = await client.fetch<SanityDocument | null>(POST_QUERY, {
    slug: params.slug,
  });

  if (!post) {
    throw new Response("Post Not Found", { status: 404 });
  }

  return { post };
}

export default function PostDetail({ loaderData }: Route.ComponentProps) {
  const { post } = loaderData;

  const formattedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  return (
    <main className="relative flex h-full w-full flex-col items-center justify-center px-6 py-12 lg:px-12">
      <div className="w-full max-w-4xl space-y-12 py-6">
        <header className="space-y-6">
          {post.tag && (
            <div className="flex items-center gap-1">
              <span className="font-audiowide text-xs uppercase tracking-widest text-(--color-brand)">
                # {post.tag}
              </span>
            </div>
          )}

          <h1 className="font-audiowide text-3xl font-bold tracking-tight text-(--text-main) sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-(--border-color) pb-6 text-sm font-medium text-(--text-muted)">
            {post.publishedBy && <span>By {post.publishedBy}</span>}

            {formattedDate && (
              <time dateTime={post.publishedAt}>
                Published on {formattedDate}
              </time>
            )}
          </div>
        </header>

        {post.image && (
          <div className="overflow-hidden rounded-2xl border border-(--border-color) bg-(--bg-card) shadow-lg shadow-black/5 dark:shadow-blue-500/5">
            <img
              src={post.image}
              alt={post.title}
              className="h-auto w-full object-cover transition-transform duration-500 hover:scale-[1.01]"
            />
          </div>
        )}

        {post.markdown && (
          <div
            className="prose dark:prose-invert max-w-none pt-4 text-(--text-main)
                       prose-headings:font-audiowide prose-headings:text-(--text-main)
                       prose-a:text-(--color-brand) prose-a:no-underline hover:prose-a:underline
                       prose-code:rounded prose-code:bg-(--bg-card) prose-code:px-1.5 prose-code:py-0.5 prose-code:text-(--color-brand) prose-code:before:content-none prose-code:after:content-none
                       prose-pre:rounded-xl prose-pre:border prose-pre:border-(--border-color) prose-pre:bg-(--bg-surface) prose-pre:p-4"
          >
            <Markdown remarkPlugins={[remarkGfm]}>{post.markdown}</Markdown>
          </div>
        )}
      </div>
    </main>
  );
}
