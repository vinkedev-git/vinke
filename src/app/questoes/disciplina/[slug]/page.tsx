import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { listQuestoesMeta, slugify } from "@/lib/qdata";
import { QuestoesShell, Trilha, CtaTreino, ListaLinks, SITE_URL } from "@/components/QuestoesShell";

export const revalidate = 86400;

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const metas = await listQuestoesMeta();
  return [...new Set(metas.map((m) => slugify(m.disciplina)).filter(Boolean))].map((slug) => ({ slug }));
}

async function dadosDe(slug: string) {
  const metas = await listQuestoesMeta();
  const qs = metas.filter((m) => slugify(m.disciplina) === slug);
  return { qs, nome: qs[0]?.disciplina ?? null };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const { qs, nome } = await dadosDe(slug);
  if (!nome) return {};
  return {
    title: `Questões de ${nome} do ENEM resolvidas e comentadas | Vinke`,
    description: `${qs.length} questões oficiais de ${nome} que já caíram no ENEM, com resolução comentada passo a passo. Estude pelos assuntos mais cobrados.`,
    alternates: { canonical: `${SITE_URL}/questoes/disciplina/${slug}` },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const { qs, nome } = await dadosDe(slug);
  if (!nome) notFound();

  const porAssunto = new Map<string, number>();
  for (const m of qs) for (const t of m.themes) porAssunto.set(t, (porAssunto.get(t) ?? 0) + 1);
  const assuntos = [...porAssunto.entries()].sort((a, b) => b[1] - a[1]);

  const recentes = [...qs].sort((a, b) => b.examYear - a.examYear || a.enemIndex - b.enemIndex).slice(0, 60);

  return (
    <QuestoesShell>
      <Trilha itens={[{ href: "/questoes", label: "Questões" }, { label: nome }]} />
      <h1 className="font-display text-3xl font-bold leading-tight text-vinke-ink sm:text-[40px]">
        Questões de {nome} do ENEM
      </h1>
      <p className="mt-3 max-w-[640px] text-[15px] font-medium leading-relaxed text-vinke-ink2">
        {qs.length} questões oficiais de {nome} das provas de 2009 a 2023, todas resolvidas e
        comentadas.
      </p>

      {assuntos.length > 0 && (
        <>
          <h2 className="mt-9 font-display text-xl font-bold text-vinke-ink">Por assunto</h2>
          <div className="mt-4">
            <ListaLinks
              itens={assuntos.map(([t, n]) => ({
                href: `/questoes/assunto/${slugify(t)}`,
                titulo: t,
                detalhe: `${n} questões`,
              }))}
            />
          </div>
        </>
      )}

      <h2 className="mt-9 font-display text-xl font-bold text-vinke-ink">Questões recentes</h2>
      <ul className="mt-4 flex flex-col gap-2">
        {recentes.map((m) => (
          <li key={m.id}>
            <Link
              href={`/questoes/${m.slug}`}
              className="flex items-center justify-between gap-3 rounded-[12px] border-[1.5px] border-vinke-line bg-white px-4 py-3 text-sm font-semibold text-vinke-ink transition hover:border-vinke hover:text-vinke"
            >
              <span>
                Questão {m.enemIndex} · ENEM {m.examYear}
              </span>
              <span className="text-xs font-medium text-vinke-ink3">ver resolução →</span>
            </Link>
          </li>
        ))}
      </ul>

      <CtaTreino contexto={`${nome} para o ENEM`} />
    </QuestoesShell>
  );
}
