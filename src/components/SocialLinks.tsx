import type { Social } from "@/data/portfolio";
import {
  FacebookIcon,
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
} from "@/lib/icons";

const socialIcons: Record<Social["icon"], (props: React.SVGProps<SVGSVGElement>) => React.ReactElement> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  twitter: TwitterIcon,
  facebook: FacebookIcon,
};

export default function SocialLinks({
  socials,
  size = "md",
}: {
  socials: Social[];
  size?: "md" | "lg";
}) {
  const sizeClasses =
    size === "lg"
      ? "h-12 w-12 [&>svg]:h-5 [&>svg]:w-5"
      : "h-10 w-10 [&>svg]:h-[18px] [&>svg]:w-[18px]";

  return (
    <ul className="flex flex-wrap items-center gap-3">
      {socials.map((social) => {
        const Icon = socialIcons[social.icon];
        return (
          <li key={social.name}>
            <a
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              title={social.name}
              className={`group flex ${sizeClasses} items-center justify-center rounded-full border border-slate-300/60 bg-white/60 text-slate-600 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500 hover:bg-indigo-500 hover:text-white dark:border-slate-700 dark:bg-white/5 dark:text-slate-300 dark:hover:border-indigo-400 dark:hover:bg-indigo-500`}
            >
              <Icon className="transition-transform duration-300 group-hover:scale-110" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
