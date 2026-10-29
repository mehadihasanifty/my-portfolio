"use client";

import { useEffect, useRef, useState } from "react";
import { marqueeTools, skills } from "@/data/portfolio";
import {
  BriefcaseIcon,
  CodeIcon,
  RocketIcon,
} from "@/lib/icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import type { ReactElement } from "react";

const groupIcons: Record<string, (props: React.SVGProps<SVGSVGElement>) => ReactElement> = {
  code: CodeIcon,
  briefcase: BriefcaseIcon,
  rocket: RocketIcon,
};

const accentStyles = [
  {
    border: "hover:border-indigo-400 dark:hover:border-indigo-500/60",
    iconBg: "bg-indigo-500/15 text-indigo-500 dark:text-indigo-400",
    bar: "from-indigo-500 to-violet-500",
  },
  {
    border: "hover:border-emerald-400 dark:hover:border-emerald-500/60",
    iconBg: "bg-emerald-500/15 text-emerald-500 dark:text-emerald-400",
    bar: "from-emerald-500 to-teal-500",
  },
  {
    border: "hover:border-fuchsia-400 dark:hover:border-fuchsia-500/60",
    iconBg: "bg-fuchsia-500/15 text-fuchsia-500 dark:text-fuchsia-400",
    bar: "from-fuchsia-500 to-pink-500",
  },
];

function SkillBar({
  name,
  level,
  stroke,
}: {
  name: string;
  level: number;
  stroke: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>
      <div className="mb-1.5 flex items-center justify-between text-sm">
        <span className="font-medium text-slate-700 dark:text-slate-200">
          {name}
        </span>
        <span className="font-mono text-xs text-slate-500 dark:text-slate-400">
          {level}%
        </span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
        <div
          className={`h-full rounded-full bg-gradient-to-r ${stroke} transition-[width] duration-1000 ease-out ${
            visible ? "opacity-100" : "opacity-0"
          }`}
          style={{
            width: visible ? `${level}%` : "0%",
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const doubledTools = [...marqueeTools, ...marqueeTools];

  return (
    <section id="skills" className="relative scroll-mt-20 py-24 sm:py-28">
      {/* soft background band */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-indigo-500/[0.04] to-transparent" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Skills"
          title="What I bring to the table"
          description="A graphical overview of my toolkit — grouped by where it lives in the stack."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skills.map((group, index) => {
            const Icon = groupIcons[group.icon] ?? CodeIcon;
            const accent = accentStyles[index % accentStyles.length];
            return (
              <Reveal key={group.category} delay={index * 120}>
                <div
                  className={`group h-full rounded-3xl border border-slate-200/70 bg-white/60 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-indigo-500/10 dark:border-slate-800 dark:bg-white/[0.03] sm:p-7 ${accent.border}`}
                >
                  <div className="mb-6 flex items-center gap-3.5">
                    <span
                      className={`flex h-11 w-11 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6 ${accent.iconBg}`}
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-white">
                        {group.category}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {group.blurb}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {group.items.map((skill) => (
                      <SkillBar
                        key={skill.name}
                        name={skill.name}
                        level={skill.level}
                        stroke={accent.bar}
                      />
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Technologies marquee */}
        <Reveal delay={200}>
          <div className="marquee mt-12 overflow-hidden rounded-2xl border border-slate-200/70 bg-white/60 py-4 backdrop-blur-sm dark:border-slate-800 dark:bg-white/[0.03]">
            <div className="animate-marquee flex w-max items-center gap-3 px-3">
              {doubledTools.map((tool, index) => (
                <span
                  key={`${tool}-${index}`}
                  aria-hidden={index >= marqueeTools.length}
                  className="whitespace-nowrap rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-sm font-medium text-slate-600 dark:border-slate-700 dark:bg-slate-800/60 dark:text-slate-300"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
