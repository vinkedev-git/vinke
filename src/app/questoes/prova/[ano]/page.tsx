import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { listQuestoesMeta } from "@/lib/qdata";
import { QuestoesShell, Trilha, CtaTreino, SITE_URL } from "@/components/QuestoesShell";

export const revalidate = 86400;

type Props = { params: Promise<{ ano: string }> };

export async function generateStaticParams() {
  const metas = await listQuestoesMeta();
  return [...new Set(metas.map((m) => String(m.examYear)))].map((ano) => ({ ano }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { ano } = await params;
  return {
    title: `Prova do ENEM ${ano} resolvida e comentada (todas as questões) | Vinke`,
    description: `Todas as questões oficiais do ENEM ${ano} com gabarito e resolução comentada passo a passo, organizadas por área do conhecimento.`,
    alternates: { canonical: `${SITE_URL}/questoes/prova/${ano}` },
  };
}

export default async function Page({ params }: Props) {
  const { ano } = await params;
  const metas = await listQuestoesMeta();
  const daProva = metas.filter((m) => m.examYear === Number(ano));
  if (daProva.length === 0) notFound();

  const porArea = new Map<string, typeof daProva>();
  for (const m of daProva) {
    const area = m.area || "Outras";
    if (!porArea.has(area)) porArea.set(area, []);
    porArea.get(area)!.push(m);
  }

  return (
    <QuestoesShell>
      <Trilha itens={[{ href: "/questoes", label: "Questões" }, { label: `ENEM ${ano}` }]} />
      <h1 className="font-display text-3xl font-bold leading-tight text-vinke-ink sm:text-[40px]">
        Prova do ENEM {ano} resolvida e comentada
      </h1>
      <p className="mt-3 max-w-[640px] text-[15px] font-medium leading-relaxed text-vinke-ink2">
        As {daProva.length} questões oficiais do ENEM {ano}, com gabarito e resolução comentada.
        Clique em uma questão para ver a resolução completa.
      </p>

      {[...porArea.entries()].map(([area, qs]) => (
        <section key={area} className="mt-9">
          <h2 className="font-display text-xl font-bold text-vinke-ink">{area}</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {qs.map((m) => (
              <Link
                key={m.id}
                href={`/questoes/${m.slug}`}
                title={`Questão ${m.enemIndex} — ${m.disciplina}`}
                className="flex h-10 min-w-10 items-center justify-center rounded-[10px] border-[1.5px] border-vinke-line bg-white px-2 text-sm font-bold text-vinke-ink transition hover:border-vinke hover:text-vinke"
              >
                {m.enemIndex}
                {m.enemLanguage ? <span className="ml-1 text-[9px] font-semibold text-vinke-ink3">{m.enemLanguage.slice(0, 3).toUpperCase()}</span> : null}
              </Link>
            ))}
          </div>
        </section>
      ))}

      <CtaTreino contexto={`a prova do ENEM ${ano} no formato real`} />
    </QuestoesShell>
  );
}
