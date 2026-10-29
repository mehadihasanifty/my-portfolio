import { profile } from "@/data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import {
  ArrowRightIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  WhatsappIcon,
} from "@/lib/icons";
import type { ReactElement, SVGProps } from "react";

type ContactCard = {
  label: string;
  value: string;
  href: string;
  cta: string;
  external?: boolean;
  icon: (props: SVGProps<SVGSVGElement>) => ReactElement;
  iconWrap: string;
  hover: string;
};

const cards: ContactCard[] = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}?subject=${encodeURIComponent("Hello from your portfolio!")}`,
    cta: "Write me",
    icon: MailIcon,
    iconWrap: "bg-indigo-500/10 text-indigo-500 dark:text-indigo-400",
    hover: "hover:border-indigo-400 dark:hover:border-indigo-500/60",
  },
  {
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phoneHref}`,
    cta: "Call me",
    icon: PhoneIcon,
    iconWrap: "bg-emerald-500/10 text-emerald-500 dark:text-emerald-400",
    hover: "hover:border-emerald-400 dark:hover:border-emerald-500/60",
  },
  {
    label: "WhatsApp",
    value: profile.whatsapp,
    href: profile.whatsappHref,
    cta: "Chat now",
    external: true,
    icon: WhatsappIcon,
    iconWrap: "bg-sky-500/10 text-sky-500 dark:text-sky-400",
    hover: "hover:border-sky-400 dark:hover:border-sky-500/60",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-20 py-24 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-indigo-500/[0.05] to-transparent" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something together"
          description="Have a project in mind, a role to fill, or just want to say hi? My inbox is always open."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <Reveal key={card.label} delay={index * 120}>
                <a
                  href={card.href}
                  target={card.external ? "_blank" : undefined}
                  rel={card.external ? "noopener noreferrer" : undefined}
                  className={`group flex h-full flex-col items-center gap-3 rounded-3xl border border-slate-200/70 bg-white/60 p-8 text-center shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-indigo-500/10 dark:border-slate-800 dark:bg-white/[0.03] ${card.hover}`}
                >
                  <span
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6 ${card.iconWrap}`}
                  >
                    <Icon className="h-7 w-7" />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                    {card.label}
                  </span>
                  <span className="font-medium text-slate-700 dark:text-slate-200">
                    {card.value}
                  </span>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-3 text-sm font-semibold text-slate-900 dark:text-white">
                    {card.cta}
                    <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </a>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={150}>
          <div className="mt-10 flex flex-col items-center justify-between gap-6 rounded-3xl bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-8 py-10 text-center text-white shadow-xl shadow-indigo-500/20 sm:flex-row sm:text-left">
            <div>
              <h3 className="text-xl font-bold sm:text-2xl">
                Prefer a quick hello on WhatsApp?
              </h3>
              <p className="mt-1.5 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm text-indigo-100 sm:justify-start">
                <span className="inline-flex items-center gap-1.5">
                  <MapPinIcon className="h-4 w-4" /> {profile.location}
                </span>
                <span aria-hidden="true">·</span>
                <span>Usually replies within a day</span>
              </p>
            </div>
            <a
              href={profile.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-none items-center gap-2.5 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-indigo-600 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl sm:text-base"
            >
              <WhatsappIcon className="h-5 w-5" />
              Message Me
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
