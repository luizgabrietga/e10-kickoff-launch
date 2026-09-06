import { Check, Star } from "lucide-react";
import { cn } from "@/lib/utils";

export function PillarCard({
  icon,
  titulo,
  texto,
}: {
  icon: React.ReactNode;
  titulo: string;
  texto: string;
}) {
  return (
    <article className="h-full rounded-2xl border border-border bg-card p-6 shadow-card transition-transform hover:-translate-y-1">
      <div className="mb-4 grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground">
        {icon}
      </div>
      <h3 className="text-lg uppercase">{titulo}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{texto}</p>
    </article>
  );
}

export function TeamCard({
  nome,
  cargo,
  descricao,
  foto,
}: {
  nome: string;
  cargo: string;
  descricao: string;
  foto: string;
}) {
  return (
    <article className="group h-full overflow-hidden rounded-2xl border border-border bg-card shadow-card">
      <div className="aspect-4/5 overflow-hidden bg-muted">
        <img
          src={foto}
          alt={`Foto de ${nome}, ${cargo} da E10 Football`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <h3 className="text-base uppercase leading-tight">{nome}</h3>
        <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-primary">{cargo}</p>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{descricao}</p>
      </div>
    </article>
  );
}

export function AthleteCard({ foto, legenda }: { foto: string; legenda: string }) {
  return (
    <figure className="overflow-hidden rounded-2xl border border-ink-foreground/10 bg-ink/40 shadow-card">
      <div className="aspect-4/5 overflow-hidden">
        <img
          src={foto}
          alt={legenda}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <figcaption className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-ink-foreground/80">
        {legenda}
      </figcaption>
    </figure>
  );
}

export function PlanCard({
  nome,
  preco,
  periodo,
  inclui,
  destaque,
  onCta,
}: {
  nome: string;
  preco: string;
  periodo: string;
  inclui: string[];
  destaque?: boolean;
  onCta: () => void;
}) {
  return (
    <article
      className={cn(
        "flex h-full flex-col rounded-2xl border bg-card p-6 shadow-card",
        destaque ? "border-gold ring-2 ring-gold/40" : "border-border",
      )}
    >
      {destaque ? (
        <span className="mb-3 inline-flex w-fit rounded-full bg-gold px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-gold-foreground">
          Mais escolhido
        </span>
      ) : null}
      <h3 className="text-xl uppercase">{nome}</h3>
      <p className="mt-4 flex items-baseline gap-1">
        <span className="font-display text-3xl">{preco}</span>
        <span className="text-sm text-muted-foreground">{periodo}</span>
      </p>
      <ul className="mt-6 flex-1 space-y-3">
        {inclui.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <button
        type="button"
        onClick={onCta}
        className={cn(
          "mt-6 rounded-xl px-4 py-3 text-sm font-bold uppercase tracking-wide transition-colors",
          destaque
            ? "bg-gold text-gold-foreground hover:bg-gold/90"
            : "bg-primary text-primary-foreground hover:bg-primary/90",
        )}
      >
        Quero este plano
      </button>
    </article>
  );
}

export function ReviewCard({
  texto,
  nome,
  estrelas,
}: {
  texto: string;
  nome: string;
  estrelas: number;
}) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-card">
      <div className="flex gap-1" aria-label={`${estrelas} de 5 estrelas`}>
        {Array.from({ length: estrelas }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-gold text-gold" />
        ))}
      </div>
      <p className="mt-4 flex-1 text-sm leading-relaxed">“{texto}”</p>
      <p className="mt-4 text-sm font-bold uppercase tracking-wide">{nome}</p>
    </article>
  );
}
