import type { SanityDocument } from "@sanity/client";
import { client } from "~/sanity/client";
import type { Route } from "./+types/blog";
import ArticleCard from "~/components/ArticleCard";

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id,
  title,
  slug,
  publishedAt,
  publishedBy,
  tag,
  "summary": pt::text(summary),
  markdown,
  "image": image.asset->url}`;

export async function loader() {
  return { posts: await client.fetch<SanityDocument[]>(POSTS_QUERY) };
}

export default function IndexPage({ loaderData }: Route.ComponentProps) {
  const { posts } = loaderData;

  return (
    <section className="relative flex h-full w-full flex-col items-center justify-center px-6 py-20 lg:px-12">
      <div className="w-full max-w-5xl space-y-10 py-8">
        <div className="flex items-center gap-3">
          <span className="font-audiowide text-xs text-(--color-brand)">
            Articles
          </span>
        </div>

        <div className=" flex flex-col gap-8">
          {posts.map((article) => (
            <ArticleCard
              key={article._id}
              title={article.title}
              summary={article.summary}
              slug={article.slug.current}
              tag={article.tag}
              publishedAt={article.publishedAt}
              publishedBy={article.publishedBy}
              image={article.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
