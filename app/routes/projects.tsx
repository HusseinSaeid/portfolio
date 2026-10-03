import { client } from "~/sanity/client";
import type { Route } from "./+types/projects";
import ProjectsCarousel, {
  type ProjectItem,
} from "~/components/ProjectsCarousel";

const PROJECTS_QUERY = `*[
  _type == "project"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{
  _id,
  title,
  slug,
  publishedAt,
  "summary": pt::text(summary),
  techStack,
  description,
  markdown,
  demo,
  "github": githup,
  "image": image.asset->url
}`;

export async function loader() {
  const projects = await client.fetch<ProjectItem[]>(PROJECTS_QUERY);
  return { projects };
}

export default function IndexPage({ loaderData }: Route.ComponentProps) {
  const { projects } = loaderData;

  return (
    <section className="relative flex h-full w-full flex-col items-center justify-center px-6 py-20 lg:px-12">
      <div className="w-full max-w-7xl space-y-10 py-8">
        <ProjectsCarousel projects={projects} />
      </div>
    </section>
  );
}
