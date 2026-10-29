import { education, experience } from "@/data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import {
  BriefcaseIcon,
  CheckIcon,
  GraduationIcon,
} from "@/lib/icons";

export default function EducationExperience() {
  return (
    <section id="education" className="relative scroll-mt-20 py-24 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-fuchsia-500/[0.03] to-transparent" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Education & Experience"
          title="My qualifications & journey so far"
          description="Where I studied and where I've worked — in chronological order."
        />

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Education timeline */}
          <div className="relative">
            <h3 className="mb-8 flex items-center gap-2.5 text-xl font-bold text-slate-900 dark:text-white">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/15 text-indigo-500 dark:text-indigo-400">
                <GraduationIcon className="h-5 w-5" />
              </span>
              Education
            </h3>

            <div className="relative border-l border-slate-300 pl-8 dark:border-slate-700">
              {education.map((item, index) => (
                <Reveal key={item.degree} delay={index * 120}>
                  <div className="relative pb-10 last:pb-0">
                    {/* timeline dot */}
                    <span
                      className={`absolute -left-[41px] top-1 flex h-5 w-5 items-center justify-center rounded-full ${
                        item.highlight
                          ? "bg-gradient-to-br from-indigo-500 to-fuchsia-500 shadow-md shadow-indigo-500/40"
                          : "bg-slate-400 ring-4 ring-slate-100 dark:bg-slate-600 dark:ring-slate-900"
                      }`}
                    >
                      {item.highlight && <CheckIcon className="h-2.5 w-2.5 text-white" strokeWidth={3} />}
                    </span>

                    <div
                      className={`rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/10 ${
                        item.highlight
                          ? "border-indigo-400/60 bg-white/70 dark:border-indigo-500/40 dark:bg-white/[0.04]"
                          : "border-slate-200/70 bg-white/50 dark:border-slate-800 dark:bg-white/[0.02]"
                      }`}
                    >
                      <span className="mb-2 inline-block rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                        🎓 {item.period}
                      </span>
                      <h4 className="font-semibold text-slate-900 dark:text-white">
                        {item.degree}
                      </h4>
                      <p className="mt-0.5 text-sm font-medium text-slate-500 dark:text-slate-400">
                        {item.institution}
                      </p>
                      <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Experience timeline */}
          <div className="relative" id="experience" data-section="experience">
            <h3 className="mb-8 flex items-center gap-2.5 text-xl font-bold text-slate-900 dark:text-white">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-500 dark:text-emerald-400">
                <BriefcaseIcon className="h-5 w-5" />
              </span>
              Experience
            </h3>

            <div className="relative border-l border-slate-300 pl-8 dark:border-slate-700">
              {experience.map((item, index) => (
                <Reveal key={item.role} delay={index * 120}>
                  <div className="relative pb-10 last:pb-0">
                    <span
                      className={`absolute -left-[41px] top-1 flex h-5 w-5 items-center justify-center rounded-full ${
                        item.current
                          ? "bg-gradient-to-br from-emerald-500 to-teal-500 shadow-md shadow-emerald-500/40"
                          : "bg-slate-400 ring-4 ring-slate-100 dark:bg-slate-600 dark:ring-slate-900"
                      }`}
                    >
                      {item.current && (
                        <span className="animate-pulse-dot h-2 w-2 rounded-full bg-white" />
                      )}
                    </span>

                    <div
                      className={`rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-500/10 dark:hover:shadow-emerald-500/10 ${
                        item.current
                          ? "border-emerald-400/60 bg-white/70 dark:border-emerald-500/40 dark:bg-white/[0.04]"
                          : "border-slate-200/70 bg-white/50 dark:border-slate-800 dark:bg-white/[0.02]"
                      }`}
                    >
                      <div className="mb-2 flex flex-wrap items-center gap-2">
                        <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                          💼 {item.period}
                        </span>
                        <span className="rounded-full bg-slate-500/10 px-3 py-1 text-xs font-semibold text-slate-600 dark:text-slate-300">
                          {item.type}
                        </span>
                      </div>
                      <h4 className="font-semibold text-slate-900 dark:text-white">
                        {item.role}
                      </h4>
                      <p className="mt-0.5 text-sm font-medium text-slate-500 dark:text-slate-400">
                        {item.organization}
                      </p>
                      <ul className="mt-3 space-y-2">
                        {item.points.map((point) => (
                          <li key={point} className="flex items-start gap-2.5 text-sm leading-6 text-slate-600 dark:text-slate-300">
                            <CheckIcon className="mt-1.5 h-3.5 w-3.5 flex-none text-emerald-500 dark:text-emerald-400" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
