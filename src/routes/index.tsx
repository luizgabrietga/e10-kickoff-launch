import { createFileRoute } from "@tanstack/react-router";
import {
  BarChart3,
  Dumbbell,
  MessageCircle,
  ShieldCheck,
  Star,
  Target,
  Users,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Section, SectionHeading } from "@/components/site/Section";
import { AthleteCard, PillarCard, ReviewCard, TeamCard } from "@/components/site/Cards";
import { Pricing } from "@/components/site/Pricing";
import { EnrollForm } from "@/components/site/EnrollForm";
import {
  academia,
  contato,
  depoimentos,
  equipe,
  hero,
  images,
  metodologia,
  planos,
  resultados,
  sobre,
} from "@/content/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "E10 Football | Escolinha de Futebol em Tangará da Serra - MT" },
      {
        name: "description",
        content:
          "Escolinha de futebol em Tangará da Serra - MT para 3 a 15 anos. Equipe formada em Educação Física, ex-atletas profissionais e +30 atletas aprovados em clubes.",
      },
      { property: "og:title", content: "E10 Football | Escolinha de Futebol em Tangará da Serra" },
      {
        property: "og:description",
        content:
          "Formando atletas com caráter para o futebol profissional. Turmas de 3 a 15 anos, treino técnico e preparação na academia.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const icons: Record<string, React.ReactNode> = {
  shield: <ShieldCheck className="h-6 w-6" />,
  target: <Target className="h-6 w-6" />,
  users: <Users className="h-6 w-6" />,
  chart: <BarChart3 className="h-6 w-6" />,
};

function scrollToForm() {
  document.getElementById("matricula")?.scrollIntoView({ behavior: "smooth" });
}

function Index() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* HERO */}
      <section id="hero" className="relative flex min-h-[92svh] items-center overflow-hidden pt-20">
        <img
          src={images.hero}
          alt="Atletas e professores da E10 Football comemorando em campeonato"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-[oklch(0.17_0.015_150/0.94)] via-[oklch(0.17_0.015_150/0.8)] to-[oklch(0.17_0.015_150/0.55)]" />
        <div className="relative mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-ink/60 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-gold">
            <Star className="h-3.5 w-3.5 fill-gold" /> {hero.nota}
          </span>
          <h1 className="mt-6 max-w-3xl text-4xl uppercase leading-[1.05] text-ink-foreground sm:text-5xl lg:text-6xl">
            {hero.titulo}
          </h1>
          <p className="mt-5 max-w-2xl text-base text-ink-foreground/85 sm:text-lg">
            {hero.subtitulo}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={scrollToForm}
              className="rounded-xl bg-gold px-6 py-4 text-sm font-bold uppercase tracking-wide text-gold-foreground shadow-gold transition-colors hover:bg-gold/90"
            >
              Matricule seu filho
            </button>
            <a
              href={contato.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-ink-foreground/30 px-6 py-4 text-center text-sm font-bold uppercase tracking-wide text-ink-foreground transition-colors hover:bg-ink-foreground/10"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <Section id="sobre">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Tangará da Serra - MT
            </p>
            <h2 className="text-3xl uppercase sm:text-4xl">{sobre.titulo}</h2>
            {sobre.paragrafos.map((p) => (
              <p key={p} className="mt-4 text-base leading-relaxed text-muted-foreground">
                {p}
              </p>
            ))}
            <dl className="mt-8 grid grid-cols-3 gap-4">
              {sobre.destaques.map((d) => (
                <div key={d.label} className="rounded-2xl border border-border bg-card p-4 shadow-card">
                  <dt className="font-display text-2xl text-primary">{d.valor}</dt>
                  <dd className="mt-1 text-xs uppercase tracking-wide text-muted-foreground">
                    {d.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <img
            src={images.equipeCampeonato}
            alt="Equipe da E10 Football perfilada em campeonato"
            loading="lazy"
            className="aspect-4/3 w-full rounded-2xl object-cover shadow-card"
          />
        </div>
      </Section>

      {/* METODOLOGIA */}
      <Section id="metodologia" className="bg-secondary/50">
        <SectionHeading
          eyebrow="Metodologia"
          title="Como formamos nossos atletas"
          subtitle="Quatro pilares que orientam cada treino, do primeiro contato com a bola até a preparação para o futebol profissional."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {metodologia.map((m) => (
            <PillarCard key={m.titulo} icon={icons[m.icone]} titulo={m.titulo} texto={m.texto} />
          ))}
        </div>
      </Section>

      {/* ACADEMIA */}
      <Section id="academia" dark>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-gold">Diferencial</p>
            <h2 className="text-3xl uppercase text-ink-foreground sm:text-4xl">{academia.titulo}</h2>
            <p className="mt-4 text-base leading-relaxed text-ink-foreground/85">{academia.intro}</p>
            <p className="mt-6 rounded-2xl border border-gold/30 bg-ink/40 p-4 text-sm text-ink-foreground/85">
              {academia.rodape}
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {academia.itens.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-ink-foreground/15 bg-ink/40 p-4 text-sm font-semibold text-ink-foreground"
              >
                <Dumbbell className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* EQUIPE */}
      <Section id="equipe">
        <SectionHeading
          eyebrow="Nossa equipe"
          title="Profissionais formados em Educação Física"
          subtitle="Ex-atletas profissionais e especialistas que conhecem de perto o caminho até o futebol de alto nível."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {equipe.map((p) => (
            <TeamCard key={p.nome} {...p} />
          ))}
        </div>
      </Section>

      {/* RESULTADOS */}
      <Section id="resultados" dark>
        <SectionHeading
          eyebrow="Parcerias e resultados"
          title="Resultados que abrem portas"
          dark
        />
        <div className="grid gap-6 sm:grid-cols-3">
          {resultados.numeros.map((n) => (
            <div
              key={n.label}
              className="rounded-2xl border border-gold/30 bg-ink/40 p-6 text-center"
            >
              <p className="font-display text-4xl text-gold">{n.valor}</p>
              <p className="mt-2 text-sm uppercase tracking-wide text-ink-foreground/80">
                {n.label}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {resultados.atletas.map((a) => (
            <AthleteCard key={a.foto} {...a} />
          ))}
        </div>
      </Section>

      {/* PLANOS */}
      <Section id="planos" className="bg-secondary/50">
        <SectionHeading
          eyebrow="Planos e valores"
          title="Escolha o plano do seu filho"
          subtitle="Treinos no campo, academia, goleiro e extras. Tudo com metodologia profissional."
        />
        <Pricing />
      </Section>

      {/* DEPOIMENTOS */}
      <Section id="depoimentos">
        <SectionHeading
          eyebrow="Depoimentos"
          title="O que as famílias dizem"
          subtitle="Avaliações reais de quem já treina com a gente."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {depoimentos.map((d) => (
            <ReviewCard key={d.nome} {...d} />
          ))}
        </div>
      </Section>

      {/* MATRÍCULA */}
      <Section id="matricula" className="bg-secondary/50">
        <SectionHeading
          eyebrow="Pré-matrícula"
          title="Garanta a vaga do seu filho"
          subtitle="Preencha os dados abaixo e nossa equipe entra em contato para confirmar a turma."
        />
        <EnrollForm />
      </Section>

      <Footer />

      {/* WhatsApp flutuante */}
      <a
        href={contato.whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar no WhatsApp com a E10 Football"
        className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-primary px-5 py-4 font-bold uppercase tracking-wide text-primary-foreground shadow-card transition-transform hover:scale-105"
      >
        <MessageCircle className="h-5 w-5" />
        <span className="hidden text-xs sm:inline">WhatsApp</span>
      </a>
    </div>
  );
}
