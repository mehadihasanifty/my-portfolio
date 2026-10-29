import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <Reveal className="mx-auto mb-14 max-w-2xl text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-400">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-slate-600 dark:text-slate-400">{description}</p>
      )}
      <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500" />
    </Reveal>
  );
}
