import { Clock, Instagram, MapPin, Phone } from "lucide-react";
import { contato, images, navLinks } from "@/content/site";

export function Footer() {
  return (
    <footer id="contato" className="surface-field scroll-mt-20 px-4 py-16 sm:px-6">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-3">
        <div>
          <div className="flex min-w-0 items-center gap-3">
            <img src={images.logo} alt="E10 Football" className="h-14 w-14 shrink-0 rounded-full object-cover" />
            <span className="font-display text-lg uppercase text-ink-foreground">E10 Football</span>
          </div>
          <p className="mt-4 text-sm text-ink-foreground/80">
            Escolinha de futebol em Tangará da Serra - MT. Formando atletas com caráter para o
            futebol profissional.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-ink-foreground/85">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>{contato.endereco}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <a href={contato.whatsapp} target="_blank" rel="noreferrer">
                {contato.telefoneLabel}
              </a>
            </li>
            <li className="flex gap-3">
              <Instagram className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <a href={contato.instagram} target="_blank" rel="noreferrer">
                {contato.instagramLabel}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm uppercase text-ink-foreground">Horário de funcionamento</h3>
          <ul className="mt-4 space-y-2 text-sm text-ink-foreground/85">
            {contato.horarios.map((h) => (
              <li key={h} className="flex gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>{h}</span>
              </li>
            ))}
          </ul>

          <h3 className="mt-8 text-sm uppercase text-ink-foreground">Links rápidos</h3>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-ink-foreground/85">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition-colors hover:text-gold">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm uppercase text-ink-foreground">Onde treinamos</h3>
          <div className="mt-4 overflow-hidden rounded-2xl border border-ink-foreground/15">
            <iframe
              title="Mapa da E10 Football em Tangará da Serra"
              src={contato.mapaEmbed}
              loading="lazy"
              className="h-64 w-full border-0"
            />
          </div>
        </div>
      </div>

      <p className="mx-auto mt-12 max-w-6xl border-t border-ink-foreground/10 pt-6 text-xs text-ink-foreground/60">
        © {new Date().getFullYear()} E10 Football — Tangará da Serra, MT. Todos os direitos
        reservados.
      </p>
    </footer>
  );
}
