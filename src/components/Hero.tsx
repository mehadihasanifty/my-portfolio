import Image from "next/image";
import Link from "next/link";
import { profile, socials } from "@/data/portfolio";
import Reveal from "./Reveal";
import SocialLinks from "./SocialLinks";
import {
  ArrowRightIcon,
  DownloadIcon,
  MapPinIcon,
} from "@/lib/icons";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16"
    >
      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="animate-float -z-10 absolute top-24 -left-32 h-80 w-80 rounded-full bg-indigo-500/15 blur-3xl" />
        <div className="animate-float-slow absolute right-0 -bottom-24 -z-10 h-96 w-96 rounded-full bg-fuchsia-500/10 blur-3xl" />
        <div className="animate-float absolute top-1/2 left-1/2 -z-10 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/10 blur-3xl" />
        <div
          className="absolute inset-0 -z-20 opacity-[0.35] dark:opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(100,116,139,0.35) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Left: intro */}
        <div>
          <Reveal>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-sm font-medium text-emerald-600 dark:text-emerald-400">
              <span className="animate-pulse-dot h-2 w-2 rounded-full bg-emerald-500" />
              {profile.available ? "Available for work" : "Currently busy"}
            </p>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
              Hi, I&apos;m{" "}
              <span className="bg-linear-to-r from-indigo-500 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
                {profile.name}
              </span>
              <span className="text-indigo-500">.</span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            {/* Professional designation */}
            <p className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-xl font-semibold text-slate-700 sm:text-2xl dark:text-slate-200">
              <span className="text-slate-500 dark:text-slate-400">— a</span>
              {profile.designations.map((designation, index) => (
                <span key={designation} className="inline-flex items-center gap-3">
                  <span className="text-indigo-500 dark:text-indigo-400">
                    {designation}
                  </span>
                  {index < profile.designations.length - 1 && (
                    <span className="text-slate-300 dark:text-slate-600">/</span>
                  )}
                </span>
              ))}
            </p>
          </Reveal>

          <Reveal delay={300}>
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8 dark:text-slate-400">
              {profile.tagline}
            </p>
          </Reveal>

          <Reveal delay={400}>
            <p className="mt-4 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
              <MapPinIcon className="h-4 w-4 text-indigo-500" />
              {profile.location}
            </p>
          </Reveal>

          {/* Resume + socials */}
          <Reveal delay={500}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <div className="flex flex-wrap items-center gap-3">
                {/* Resume: put your file at public/resume.pdf */}
                <a
                  href={profile.resumeUrl}
                  download="Mehadi_Hasan_Resume.pdf"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-linear-to-r from-indigo-500 to-fuchsia-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-indigo-500/40 hover:brightness-110 sm:text-base"
                >
                  <DownloadIcon className="h-5 w-5 transition-transform duration-300 group-hover:translate-y-0.5" />
                  Download Resume
                </a>
                <Link
                  href="/#projects"
                  className="group inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3.5 text-sm font-semibold text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-500 hover:text-indigo-500 sm:text-base dark:border-slate-600 dark:text-slate-200 dark:hover:border-indigo-400 dark:hover:text-indigo-400"
                >
                  View My Work
                  <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal delay={600}>
            <div className="mt-8">
              <SocialLinks socials={socials} />
            </div>
          </Reveal>

          <Reveal delay={700}>
            <div className="mt-8 grid max-w-md grid-cols-3 gap-3 text-center">
              {[
                { value: profile.yearsOfExperience, label: "Years Experience" },
                { value: profile.projectsCompleted, label: "Projects Done" },
                { value: profile.happyClients, label: "Happy Clients" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-slate-200/70 bg-white/50 px-3 py-4 backdrop-blur-sm transition-colors hover:border-indigo-400 dark:border-slate-800 dark:bg-white/3"
                >
                  <p className="text-xl font-bold text-indigo-500 sm:text-2xl dark:text-indigo-400">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Right: photo */}
        <Reveal delay={300} className="relative mx-auto w-full max-w-sm lg:max-w-md">
          <div className="relative">
            {/* Glow ring */}
            <div
              className="absolute -inset-4 rounded-[2.5rem] bg-linear-to-tr from-indigo-500/30 via-fuchsia-500/20 to-sky-500/30 blur-2xl"
              aria-hidden="true"
            />
            <div className="animate-float-slow relative overflow-hidden rounded-4xl border-4 border-white/80 shadow-2xl dark:border-slate-800">
              <Image
                src={profile.photo}
                alt={`Professional photo of ${profile.name}`}
                width={480}
                height={560}
                preload
                className="h-auto w-full object-cover"
              />
            </div>

            {/* Floating tech badges */}
            <span className="animate-float absolute -left-6 top-8 rounded-full border border-indigo-500/40 bg-white/90 px-4 py-2 text-sm font-semibold text-indigo-500 shadow-lg backdrop-blur-sm dark:bg-slate-900/90 dark:text-indigo-400">
              ⚛ React
            </span>
            <span
              className="animate-float absolute -right-4 bottom-20 rounded-full border border-fuchsia-500/40 bg-white/90 px-4 py-2 text-sm font-semibold text-fuchsia-500 shadow-lg backdrop-blur-sm dark:bg-slate-900/90 dark:text-fuchsia-400"
              style={{ animationDelay: "1.2s" }}
            >
              🖥 Next.js
            </span>
          </div>
        </Reveal>
      </div>

      {/* Scroll hint */}
      <Link
        href="/#about"
        aria-label="Scroll to about section"
        className="animate-bounce-once absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-slate-400 transition-colors hover:text-indigo-500 sm:block"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-6 w-6">
          <path d="m6 9 6 6 6-6" />
        </svg>
      </Link>
    </section>
  );
}
