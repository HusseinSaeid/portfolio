import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import ProjectCard from "~/components/ProjectCard";

export interface ProjectItem {
  _id: string;
  title: string;
  slug: { current: string } | string;
  summary: string;
  techStack?: string[];
  demo?: string;
  github?: string;
  image?: string;
}

interface ProjectsCarouselProps {
  projects: ProjectItem[];
  title?: string;
}

export default function ProjectsCarousel({
  projects,
  title = "Featured Projects",
}: ProjectsCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
  });

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi],
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi],
  );
  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi],
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  if (!projects || projects.length === 0) {
    return null;
  }

  return (
    <div className="w-full space-y-8">
      {/* Header & Navigation Arrows */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="font-audiowide text-xs uppercase tracking-widest text-(--color-brand)">
            {title}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={scrollPrev}
            disabled={!prevBtnEnabled}
            aria-label="Previous Slide"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-(--border-color) bg-(--bg-surface) text-(--text-main) transition-all hover:border-(--color-brand) hover:text-(--color-brand) active:scale-95 disabled:opacity-30 disabled:hover:border-(--border-color) disabled:hover:text-(--text-main)"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={scrollNext}
            disabled={!nextBtnEnabled}
            aria-label="Next Slide"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-(--border-color) bg-(--bg-surface) text-(--text-main) transition-all hover:border-(--color-brand) hover:text-(--color-brand) active:scale-95 disabled:opacity-30 disabled:hover:border-(--border-color) disabled:hover:text-(--text-main)"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Carousel Viewport */}
      <div className="overflow-hidden rounded-xl p-1" ref={emblaRef}>
        <div className="-ml-4 flex">
          {projects.map((project) => {
            const slugString =
              typeof project.slug === "string"
                ? project.slug
                : project.slug?.current;

            return (
              <div
                key={project._id}
                className="min-w-0 flex-[0_0_100%] pl-4 md:flex-[0_0_50%] lg:flex-[0_0_50%]"
              >
                <ProjectCard
                  title={project.title}
                  summary={project.summary}
                  techStack={project.techStack}
                  demo={project.demo}
                  github={project.github}
                  slug={slugString}
                  image={project.image}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Dots Pagination */}
      {scrollSnaps.length > 1 && (
        <div className="flex justify-center gap-2 pt-4">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === selectedIndex
                  ? "w-8 bg-(--color-brand)"
                  : "w-2 bg-(--border-color) hover:bg-(--text-muted)"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
