import { about } from "@/data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import {
  CameraIcon,
  CheckIcon,
  CodeIcon,
  HeartIcon,
  PaletteIcon,
  TrophyIcon,
} from "@/lib/icons";
import type { ReactElement } from "react";

const hobbyIcons: Record<string, (props: React.SVGProps<SVGSVGElement>) => ReactElement> = {
  trophy: TrophyIcon,
  palette: PaletteIcon,
  camera: CameraIcon,
  heart: HeartIcon,
  code: CodeIcon,
};

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="About Me"
          title="Get to know me"
          description="The story behind the developer — where I started, what drives me, and what I do when I close the IDE."
        />

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Story */}
          <div className="space-y-6">
            {about.paragraphs.map((paragraph, index) => (
              <Reveal key={index} delay={index * 100}>
                <p className="leading-8 text-slate-600 dark:text-slate-300">
                  {index === 0 && (
                    <span className="float-left mr-3 mt-1 text-5xl font-extrabold leading-[0.85] text-indigo-500 dark:text-indigo-400">
                      {paragraph.charAt(0)}
                    </span>
                  )}
                  {index === 0 ? paragraph.slice(1) : paragraph}
                </p>
              </Reveal>
            ))}

            {/* What I enjoy */}
            <Reveal delay={200}>
              <div className="rounded-3xl border border-slate-200/70 bg-white/60 p-6 shadow-sm backdrop-blur-sm sm:p-8 dark:border-slate-800 dark:bg-white/3">
                <h3 className="mb-5 flex items-center gap-2.5 text-lg font-bold text-slate-900 dark:text-white">
                  <HeartIcon className="h-5 w-5 text-fuchsia-500" />
                  {about.enjoyTitle}
                </h3>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {about.enjoy.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300">
                      <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-indigo-500/15 text-indigo-500 dark:text-indigo-400">
                        <CheckIcon className="h-3 w-3" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          {/* Hobbies */}
          <div className="space-y-5">
            <Reveal delay={150}>
              <div className="rounded-3xl bg-linear-to-br from-indigo-500 to-fuchsia-500 p-px">
                <div className="rounded-3xl bg-white px-6 py-5 dark:bg-slate-900">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {about.hobbiesTitle}
                  </h3>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    A person is more than their GitHub graph.
                  </p>
                </div>
              </div>
            </Reveal>

            {about.hobbies.map((hobby, index) => {
              const Icon = hobbyIcons[hobby.icon] ?? HeartIcon;
              return (
                <Reveal key={hobby.title} delay={250 + index * 100}>
                  <div className="group flex gap-4 rounded-3xl border border-slate-200/70 bg-white/60 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400 hover:shadow-lg hover:shadow-indigo-500/10 dark:border-slate-800 dark:bg-white/3 dark:hover:border-indigo-500/60">
                    <span className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-indigo-500/15 text-indigo-500 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 dark:text-indigo-400">
                      <Icon className="h-6 w-6" />
                    </span>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white">
                        {hobby.title}
                      </h4>
                      <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-400">
                        {hobby.text}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
