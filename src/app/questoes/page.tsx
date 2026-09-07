import type { Metadata } from "next";
import { listQuestoesMeta, slugify } from "@/lib/qdata";
import { QuestoesShell, CtaTreino, ListaLinks } from "@/components/QuestoesShell";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Questões do ENEM resolvidas e comentadas | Vinke",
  description:
    "Mais de 2.600 questões oficiais do ENEM (2009–2023) com resolução comentada passo a passo, organizadas por prova, disciplina e assunto. Estude grátis.",
  alternates: { canonical: "https://vinke.app.br/questoes" },
};

export default async function Page() {
  const metas = await listQuestoesMeta();

  const porAno = new Map<number, number>();
  const porDisciplina = new Map<string, number>();
  const porAssunto = new Map<string, number>();
  for (const m of metas) {
    porAno.set(m.examYear, (porAno.get(m.examYear) ?? 0) + 1);
    if (m.disciplina) porDisciplina.set(m.disciplina, (porDisciplina.get(m.disciplina) ?? 0) + 1);
    for (const t of m.themes) porAssunto.set(t, (porAssunto.get(t) ?? 0) + 1);
  }

  const anos = [...porAno.entries()].sort((a, b) => b[0] - a[0]);
  const disciplinas = [...porDisciplina.entries()].sort((a, b) => b[1] - a[1]);
  const assuntos = [...porAssunto.entries()].sort((a, b) => b[1] - a[1]).slice(0, 30);

  return (
    <QuestoesShell>
      <h1 className="font-display text-3xl font-bold leading-tight text-vinke-ink sm:text-[40px]">
        Questões do ENEM resolvidas e comentadas
      </h1>
      <p className="mt-3 max-w-[640px] text-[15px] font-medium leading-relaxed text-vinke-ink2">
        {metas.length.toLocaleString("pt-BR")} questões oficiais das provas de 2009 a 2023, todas
        com resolução comentada passo a passo. Escolha por prova, disciplina ou assunto.
      </p>

      <h2 className="mt-10 font-display text-xl font-bold text-vinke-ink">Provas completas</h2>
      <div className="mt-4">
        <ListaLinks
          itens={anos.map(([ano, n]) => ({
            href: `/questoes/prova/${ano}`,
            titulo: `ENEM ${ano}`,
            detalhe: `${n} questões`,
          }))}
        />
      </div>

      <h2 className="mt-10 font-display text-xl font-bold text-vinke-ink">Por disciplina</h2>
      <div className="mt-4">
        <ListaLinks
          itens={disciplinas.map(([d, n]) => ({
            href: `/questoes/disciplina/${slugify(d)}`,
            titulo: d,
            detalhe: `${n} questões`,
          }))}
        />
      </div>

      <h2 className="mt-10 font-display text-xl font-bold text-vinke-ink">Assuntos mais cobrados</h2>
      <div className="mt-4">
        <ListaLinks
          itens={assuntos.map(([t, n]) => ({
            href: `/questoes/assunto/${slugify(t)}`,
            titulo: t,
            detalhe: `${n} questões`,
          }))}
        />
      </div>

      <CtaTreino contexto="com as questões do ENEM" />
    </QuestoesShell>
  );
}
