import Link from "next/link";
import { Mail } from "lucide-react";
import { Logo } from "@/components/shared/Logo";
import { InstagramIcon, LinkedinIcon } from "@/components/shared/SocialIcons";
import { site } from "@/data/site";

const columns = [
  {
    heading: "Product",
    links: [
      { href: "/#how-it-works", label: "How It Works" },
      { href: "/pricing", label: "Pricing" },
      { href: `/demo/${site.demoAgentSlug}`, label: "Live Demo" },
    ],
  },
  {
    heading: "Company",
    links: [
      { href: "/contact", label: "Contact" },
      { href: `/demo`, label: "Demo Gallery" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-ink-800 bg-ink-950 text-stone-300">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo dark />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-stone-400">
              {site.description}
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href={site.social.instagram}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-stone-400 transition hover:border-brass-400 hover:text-brass-300"
                aria-label="Instagram"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href={site.social.linkedin}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-stone-400 transition hover:border-brass-400 hover:text-brass-300"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${site.contactEmail}`}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-stone-400 transition hover:border-brass-400 hover:text-brass-300"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
          {columns.map((column) => (
            <div key={column.heading}>
              <h3 className="text-sm font-semibold text-white">{column.heading}</h3>
              <ul className="mt-4 space-y-3 text-sm text-stone-400">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="transition hover:text-brass-300">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-stone-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>{site.contactEmail} · {site.contactPhone}</p>
        </div>
      </div>
    </footer>
  );
}
