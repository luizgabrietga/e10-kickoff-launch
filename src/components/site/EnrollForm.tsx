import { useState } from "react";
import { turmas } from "@/content/site";
import { CheckCircle2 } from "lucide-react";

const fieldClass =
  "w-full rounded-xl border border-input bg-card px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/30";
const labelClass = "mb-2 block text-xs font-bold uppercase tracking-wide text-muted-foreground";

function YesNo({ name, label }: { name: string; label: string }) {
  return (
    <fieldset>
      <legend className={labelClass}>{label}</legend>
      <div className="flex gap-4">
        {["Sim", "Não"].map((opt) => (
          <label key={opt} className="flex items-center gap-2 text-sm">
            <input type="radio" name={name} value={opt} className="h-4 w-4 accent-[var(--primary)]" />
            {opt}
          </label>
        ))}
      </div>
    </fieldset>
  );
}

export function EnrollForm() {
  const [enviado, setEnviado] = useState(false);

  if (enviado) {
    return (
      <div className="mx-auto max-w-xl rounded-2xl border border-primary/30 bg-card p-8 text-center shadow-card">
        <CheckCircle2 className="mx-auto h-12 w-12 text-primary" />
        <h3 className="mt-4 text-xl uppercase">Pré-matrícula enviada!</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Recebemos os dados do atleta. Nossa equipe vai entrar em contato pelo WhatsApp para
          confirmar a turma e os próximos passos.
        </p>
        <button
          type="button"
          onClick={() => setEnviado(false)}
          className="mt-6 rounded-xl border border-input px-4 py-2 text-sm font-bold uppercase tracking-wide"
        >
          Enviar outra
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setEnviado(true);
      }}
      className="mx-auto max-w-3xl space-y-8 rounded-2xl border border-border bg-card p-6 shadow-card sm:p-8"
    >
      <div className="space-y-4">
        <h3 className="text-lg uppercase">Dados do aluno</h3>
        <div>
          <label className={labelClass} htmlFor="aluno-nome">
            Nome completo
          </label>
          <input id="aluno-nome" name="alunoNome" required className={fieldClass} />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className={labelClass} htmlFor="aluno-nascimento">
              Data de nascimento
            </label>
            <input
              id="aluno-nascimento"
              name="alunoNascimento"
              type="date"
              required
              className={fieldClass}
            />
          </div>
          <div>
            <label className={labelClass} htmlFor="aluno-turma">
              Turma pretendida
            </label>
            <select id="aluno-turma" name="alunoTurma" required className={fieldClass}>
              <option value="">Selecione a faixa etária</option>
              {turmas.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="space-y-4 border-t border-border pt-8">
        <h3 className="text-lg uppercase">Dados do responsável</h3>
        <div>
          <label className={labelClass} htmlFor="resp-nome">
            Nome do responsável
          </label>
          <input id="resp-nome" name="respNome" required className={fieldClass} />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className={labelClass} htmlFor="resp-tel">
              Telefone / WhatsApp
            </label>
            <input
              id="resp-tel"
              name="respTelefone"
              type="tel"
              required
              placeholder="(65) 99999-9999"
              className={fieldClass}
            />
          </div>
          <div>
            <label className={labelClass} htmlFor="resp-email">
              E-mail
            </label>
            <input id="resp-email" name="respEmail" type="email" className={fieldClass} />
          </div>
        </div>
      </div>

      <div className="space-y-5 border-t border-border pt-8">
        <h3 className="text-lg uppercase">Saúde e histórico esportivo</h3>
        <YesNo name="saudeCondicao" label="Possui condição de saúde relevante para a prática esportiva?" />
        <div>
          <label className={labelClass} htmlFor="saude-desc">
            Se sim, descreva
          </label>
          <input id="saude-desc" name="saudeDescricao" className={fieldClass} />
        </div>
        <YesNo name="lesaoAnterior" label="Já teve lesão anterior?" />
        <div>
          <label className={labelClass} htmlFor="lesao-desc">
            Se sim, qual e quando?
          </label>
          <input id="lesao-desc" name="lesaoDescricao" className={fieldClass} />
        </div>
        <YesNo name="aptoAtividade" label="Está apto para atividade física sem restrições atualmente?" />
        <div>
          <label className={labelClass} htmlFor="historico">
            Já praticou futebol antes? Há quanto tempo?
          </label>
          <input id="historico" name="historico" className={fieldClass} />
        </div>
      </div>

      <div className="border-t border-border pt-8">
        <label className={labelClass} htmlFor="obs">
          Observações
        </label>
        <textarea id="obs" name="observacoes" rows={4} className={fieldClass} />
      </div>

      <button
        type="submit"
        className="w-full rounded-xl bg-gold px-6 py-4 text-sm font-bold uppercase tracking-wide text-gold-foreground shadow-gold transition-colors hover:bg-gold/90"
      >
        Enviar pré-matrícula
      </button>
    </form>
  );
}
