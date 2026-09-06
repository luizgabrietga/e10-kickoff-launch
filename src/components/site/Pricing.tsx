import { useState } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { planos } from "@/content/site";

function scrollToForm() {
  document.getElementById("matricula")?.scrollIntoView({ behavior: "smooth" });
}

export function Pricing() {
  const [activeId, setActiveId] = useState(planos[0].id);
  const active = planos.find((p) => p.id === activeId) ?? planos[0];

  return (
    <div className="mx-auto max-w-5xl">
      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-2">
        {planos.map((p) => (
          <button
            key={p.id}
            type="button"
            onClick={() => setActiveId(p.id)}
            className={cn(
              "rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wide transition-colors sm:text-sm",
              activeId === p.id
                ? "bg-gold text-gold-foreground shadow-gold"
                : "border border-border bg-card text-foreground hover:border-gold/60 hover:text-gold",
            )}
          >
            {p.nome}
          </button>
        ))}
      </div>

      {/* Panel */}
      <div className="mt-8 rounded-3xl border border-border bg-card p-6 shadow-card sm:p-8">
        <div className="text-center">
          <h3 className="text-2xl uppercase sm:text-3xl">{active.nome}</h3>
          {(active.subtitulo || active.info) && (
            <p className="mt-2 text-sm font-semibold text-muted-foreground sm:text-base">
              {active.subtitulo}
              {active.subtitulo && active.info ? " — " : ""}
              {active.info}
            </p>
          )}
        </div>

        {active.inclui.length > 0 && (
          <ul className="mx-auto mt-6 flex max-w-2xl flex-wrap justify-center gap-2">
            {active.inclui.map((item) => (
              <li
                key={item}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary px-3 py-1.5 text-xs font-medium"
              >
                <Check className="h-3.5 w-3.5 text-primary" />
                {item}
              </li>
            ))}
          </ul>
        )}

        <div
          className={cn(
            "mt-8 grid gap-4",
            active.opcoes.length === 2 ? "sm:grid-cols-2" : "sm:grid-cols-3",
          )}
        >
          {active.opcoes.map((opcao) => (
            <article
              key={opcao.nome}
              className={cn(
                "flex flex-col rounded-2xl border bg-background p-5 text-center transition-transform hover:-translate-y-1",
                opcao.destaque
                  ? "border-gold ring-2 ring-gold/40"
                  : "border-border",
              )}
            >
              {opcao.destaque && active.id !== "extras" ? (
                <span className="mx-auto mb-3 inline-flex w-fit rounded-full bg-gold px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-gold-foreground">
                  Mais escolhido
                </span>
              ) : null}
              <h4 className="text-sm font-bold uppercase tracking-wide text-muted-foreground">
                {opcao.nome}
              </h4>
              <p className="mt-3 flex items-baseline justify-center gap-1">
                <span className="font-display text-3xl text-foreground sm:text-4xl">
                  {opcao.preco}
                </span>
                {opcao.periodo ? (
                  <span className="text-sm text-muted-foreground">{opcao.periodo}</span>
                ) : null}
              </p>
              <button
                type="button"
                onClick={scrollToForm}
                className={cn(
                  "mt-5 rounded-xl px-4 py-3 text-xs font-bold uppercase tracking-wide transition-colors",
                  opcao.destaque
                    ? "bg-gold text-gold-foreground hover:bg-gold/90"
                    : "bg-primary text-primary-foreground hover:bg-primary/90",
                )}
              >
                Quero este plano
              </button>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
