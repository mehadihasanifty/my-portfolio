import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { ArrowRightIcon } from "@/lib/icons";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Portfolio"
          title="Featured projects"
          description="A selection of projects I've designed, built and shipped. Click into any project for the full case study."
        />

        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 130}>
                <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/70 bg-white/70 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-indigo-400/70 hover:shadow-2xl hover:shadow-indigo-500/15 dark:border-slate-800 dark:bg-white/3 dark:hover:border-indigo-500/60">
                {/* Project image */}
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`${project.name} preview`}
                    width={800}
                    height={500}
                    className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <span className="absolute top-3 left-3 rounded-full bg-slate-950/70 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-bold text-slate-900 transition-colors group-hover:text-indigo-500 dark:text-white dark:group-hover:text-indigo-400">
                    {project.name}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                    {project.tagline}
                  </p>

                  {/* Tech chips */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="rounded-full bg-indigo-500/10 px-2.5 py-1 text-xs font-semibold text-indigo-500 dark:text-indigo-400">
                        +{project.tech.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* View details */}
                  <div className="mt-auto pt-5">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-2 rounded-full border border-indigo-500/40 px-5 py-2.5 text-sm font-semibold text-indigo-500 transition-all duration-300 group-hover:bg-indigo-500 group-hover:text-white dark:text-indigo-400 dark:group-hover:text-white"
                    >
                      View Details
                      <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
