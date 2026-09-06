import { useState } from "react";
import { Instagram, Menu, X } from "lucide-react";
import { contato, images, navLinks } from "@/content/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-ink-foreground/10 bg-ink/90 backdrop-blur">
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6">
        <a href="#hero" className="flex min-w-0 items-center gap-3">
          <img src={images.logo} alt="E10 Football" className="h-11 w-11 shrink-0 rounded-full object-cover" />
          <span className="truncate font-display text-sm uppercase text-ink-foreground sm:text-base">
            E10 Football
          </span>
        </a>

        <nav className="hidden items-center gap-5 lg:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs font-semibold uppercase tracking-wide text-ink-foreground/80 transition-colors hover:text-gold"
            >
              {l.label}
            </a>
          ))}
          <a
            href={contato.instagram}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram da E10 Football"
            className="text-ink-foreground/80 transition-colors hover:text-gold"
          >
            <Instagram className="h-5 w-5" />
          </a>
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={contato.instagram}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram da E10 Football"
            className="p-2 text-ink-foreground/80"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menu"
            className="p-2 text-ink-foreground"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav className="border-t border-ink-foreground/10 bg-ink px-4 pb-4 lg:hidden">
          <ul className="grid gap-1">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-sm font-semibold uppercase tracking-wide text-ink-foreground/85"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
