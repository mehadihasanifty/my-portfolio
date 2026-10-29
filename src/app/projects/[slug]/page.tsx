import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { projects, profile, socials } from "@/data/portfolio";
import Reveal from "@/components/Reveal";
import SocialLinks from "@/components/SocialLinks";
import {
  AlertTriangleIcon,
  ArrowRightIcon,
  CheckIcon,
  ExternalLinkIcon,
  GithubIcon,
  LightbulbIcon,
} from "@/lib/icons";

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project not found" };
  return {
    title: `${project.name} — ${profile.name}`,
    description: project.tagline,
  };
}

export default function ProjectPage(props: PageProps<"/projects/[slug]">) {
  // Instant shell: the skeleton renders immediately, the slug-dependent
  // content streams in inside the Suspense boundary.
  return (
    <Suspense fallback={<ProjectFallback />}>
      <ProjectDetail params={props.params} />
    </Suspense>
  );
}

function ProjectFallback() {
  return (
    <div className="pt-28">
      <div className="mx-auto max-w-4xl px-4 pb-24 sm:px-6">
        <div className="h-9 w-52 animate-pulse rounded-full bg-slate-200 dark:bg-slate-800" />
        <div className="mt-8 h-12 w-[28rem] max-w-full animate-pulse rounded-2xl bg-slate-200 dark:bg-slate-800" />
        <div className="mt-4 h-6 w-80 max-w-full animate-pulse rounded-full bg-slate-200 dark:bg-slate-800" />
        <div className="mt-8 aspect-[1200/750] w-full animate-pulse rounded-3xl bg-slate-200 dark:bg-slate-800" />
      </div>
    </div>
  );
}

async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const otherProjects = projects.filter((p) => p.slug !== project.slug);

  return (
    <article className="pt-28">
      <div className="mx-auto max-w-4xl px-4 pb-24 sm:px-6">
        {/* Breadcrumb / back link */}
        <Reveal>
          <Link
            href="/#projects"
            className="group inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-indigo-500 dark:text-slate-400 dark:hover:text-indigo-400"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-300/70 transition-colors group-hover:border-indigo-500 dark:border-slate-700">
              <ArrowRightIcon className="h-4 w-4 rotate-180" />
            </span>
            Back to all projects
          </Link>
        </Reveal>

        {/* Header */}
        <Reveal delay={80}>
          <header className="mt-8">
            <span className="mb-3 inline-block rounded-full bg-indigo-500/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-indigo-500 dark:text-indigo-400">
              {project.category}
            </span>
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
              {project.name}
            </h1>
            <p className="mt-3 text-lg text-slate-600 dark:text-slate-400">
              {project.tagline}
            </p>
          </header>
        </Reveal>

        {/* Cover image */}
        <Reveal delay={160}>
          <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200/70 shadow-xl dark:border-slate-800">
            <Image
              src={project.image}
              alt={`${project.name} screenshot`}
              width={1200}
              height={750}
              preload
              className="h-auto w-full object-cover"
            />
          </div>
        </Reveal>

        {/* Live + repo buttons */}
        <Reveal delay={200}>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-indigo-500/40 hover:brightness-110"
            >
              <ExternalLinkIcon className="h-4.5 w-4.5" />
              Live Project
            </a>
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-900 dark:border-slate-700 dark:text-slate-200 dark:hover:border-white"
            >
              <GithubIcon className="h-4.5 w-4.5" />
              GitHub Repository
            </a>
          </div>
        </Reveal>

        {/* Technology stack */}
        <Reveal>
          <section className="mt-12">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              Technology Stack
            </h2>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-indigo-500/25 bg-indigo-500/[0.07] px-4 py-2 text-sm font-medium text-indigo-600 transition-colors hover:bg-indigo-500 hover:text-white dark:text-indigo-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>
        </Reveal>

        {/* Description */}
        <Reveal>
          <section className="mt-12">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              About the Project
            </h2>
            <div className="mt-4 space-y-4">
              {project.description.map((paragraph, index) => (
                <p
                  key={index}
                  className="leading-8 text-slate-600 dark:text-slate-300"
                >
                  {paragraph}
                </p>
              ))}
            </div>
            

            <div className="mt-6 rounded-2xl border border-slate-200/70 bg-white/60 p-6 backdrop-blur-sm dark:border-slate-800 dark:bg-white/[0.03]">
              <h3 className="flex items-center gap-2.5 font-semibold text-slate-900 dark:text-white">
                <CheckIcon className="h-4.5 w-4.5 text-emerald-500" />
                Key highlights
              </h3>
              <ul className="mt-4 grid gap-3 sm:grid-cols-3">
                {project.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300"
                  >
                    <span className="mt-0.5 flex h-4.5 w-4.5 flex-none items-center justify-center rounded-full bg-emerald-500/15 text-emerald-500">
                      <CheckIcon className="h-2.5 w-2.5" strokeWidth={3} />
                    </span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6 rounded-2xl border border-slate-200/70 bg-white/60 p-6 backdrop-blur-sm dark:border-slate-800 dark:bg-white/[0.03]">
              <h3 className="flex items-center gap-2.5 font-semibold text-slate-900 dark:text-white">
                <CheckIcon className="h-4.5 w-4.5 text-emerald-500" />
                Key features
              </h3>
              <ul className="mt-4 grid gap-3 sm:grid-cols-3">
                {project.features.map(( feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300"
                  >
                    <span className="mt-0.5 flex h-4.5 w-4.5 flex-none items-center justify-center rounded-full bg-emerald-500/15 text-emerald-500">
                      <CheckIcon className="h-2.5 w-2.5" strokeWidth={3} />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </Reveal>

        {/* Challenges */}
        <Reveal>
          <section className="mt-12">
            <h2 className="flex items-center gap-2.5 text-xl font-bold text-slate-900 dark:text-white">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-amber-500/15 text-amber-500">
                <AlertTriangleIcon className="h-4.5 w-4.5" />
              </span>
              Challenges Faced
            </h2>
            <ul className="mt-5 space-y-4">
              {project.challenges.map((challenge, index) => (
                <li
                  key={index}
                  className="flex gap-4 rounded-2xl border border-slate-200/70 bg-white/60 p-5 backdrop-blur-sm transition-colors hover:border-amber-400/60 dark:border-slate-800 dark:bg-white/[0.03]"
                >
                  <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-amber-500/15 font-mono text-sm font-bold text-amber-500">
                    {index + 1}
                  </span>
                  <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">
                    {challenge}
                  </p>
                </li>
              ))}
            </ul>
          </section>
        </Reveal>

        {/* Improvements / future plans */}
        <Reveal>
          <section className="mt-12">
            <h2 className="flex items-center gap-2.5 text-xl font-bold text-slate-900 dark:text-white">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-fuchsia-500/15 text-fuchsia-500">
                <LightbulbIcon className="h-4.5 w-4.5" />
              </span>
              Potential Improvements & Future Plans
            </h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {project.improvements.map((improvement) => (
                <li
                  key={improvement}
                  className="flex items-start gap-3 rounded-2xl border border-slate-200/70 bg-white/60 p-4 text-sm text-slate-600 backdrop-blur-sm dark:border-slate-800 dark:bg-white/[0.03] dark:text-slate-300"
                >
                  <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-fuchsia-500/15 text-fuchsia-500">
                    <ArrowRightIcon className="h-3 w-3" />
                  </span>
                  {improvement}
                </li>
              ))}
            </ul>
          </section>
        </Reveal>

        {/* Other projects */}
        <Reveal>
          <section className="mt-16 border-t border-slate-200/70 pt-10 dark:border-slate-800">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              Explore More Projects
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {otherProjects.map((other) => (
                <Link
                  key={other.slug}
                  href={`/projects/${other.slug}`}
                  className="group flex items-center justify-between gap-4 rounded-2xl border border-slate-200/70 bg-white/60 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400 dark:border-slate-800 dark:bg-white/[0.03] dark:hover:border-indigo-500/60"
                >
                  <div>
                    <h3 className="font-semibold text-slate-900 transition-colors group-hover:text-indigo-500 dark:text-white dark:group-hover:text-indigo-400">
                      {other.name}
                    </h3>
                    <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                      {other.category}
                    </p>
                  </div>
                  <ArrowRightIcon className="h-5 w-5 flex-none text-slate-400 transition-all duration-300 group-hover:translate-x-1 group-hover:text-indigo-500" />
                </Link>
              ))}
            </div>

            <div className="mt-8 flex items-center justify-between rounded-2xl bg-gradient-to-r from-indigo-500/10 to-fuchsia-500/10 p-6">
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Liked what you saw? Let&apos;s talk about your next idea.
              </p>
              <Link
                href="/#contact"
                className="inline-flex flex-none items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              >
                Contact Me
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
          </section>
        </Reveal>

        {/* Socials */}
        <Reveal>
          <div className="mt-12 flex justify-center">
            <SocialLinks socials={socials} size="lg" />
          </div>
        </Reveal>
      </div>
    </article>
  );
}
