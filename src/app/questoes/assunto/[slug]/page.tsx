import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { listQuestoesMeta, slugify } from "@/lib/qdata";
import { QuestoesShell, Trilha, CtaTreino, SITE_URL } from "@/components/QuestoesShell";

export const revalidate = 86400;

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const metas = await listQuestoesMeta();
  const slugs = new Set<string>();
  for (const m of metas) for (const t of m.themes) slugs.add(slugify(t));
  return [...slugs].filter(Boolean).map((slug) => ({ slug }));
}

async function dadosDe(slug: string) {
  const metas = await listQuestoesMeta();
  const qs = metas.filter((m) => m.themes.some((t) => slugify(t) === slug));
  const nome = qs[0]?.themes.find((t) => slugify(t) === slug) ?? null;
  return { qs, nome };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const { qs, nome } = await dadosDe(slug);
  if (!nome) return {};
  return {
    title: `Questões de ${nome} no ENEM (resolvidas) | Vinke`,
    description: `${qs.length} questões do ENEM sobre ${nome}, com gabarito e resolução comentada. Veja como o assunto é cobrado na prova.`,
    alternates: { canonical: `${SITE_URL}/questoes/assunto/${slug}` },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const { qs, nome } = await dadosDe(slug);
  if (!nome) notFound();

  const disciplina = qs[0]?.disciplina;
  const ordenadas = [...qs].sort((a, b) => b.examYear - a.examYear || a.enemIndex - b.enemIndex);

  return (
    <QuestoesShell>
      <Trilha
        itens={[
          { href: "/questoes", label: "Questões" },
          ...(disciplina ? [{ href: `/questoes/disciplina/${slugify(disciplina)}`, label: disciplina }] : []),
          { label: nome },
        ]}
      />
      <h1 className="font-display text-3xl font-bold leading-tight text-vinke-ink sm:text-[40px]">
        Questões de {nome} no ENEM
      </h1>
      <p className="mt-3 max-w-[640px] text-[15px] font-medium leading-relaxed text-vinke-ink2">
        {nome} já apareceu em {qs.length} {qs.length === 1 ? "questão" : "questões"} do ENEM desde
        2009. Todas abaixo, resolvidas e comentadas — do jeito que a prova cobra.
      </p>

      <ul className="mt-8 flex flex-col gap-2">
        {ordenadas.map((m) => (
          <li key={m.id}>
            <Link
              href={`/questoes/${m.slug}`}
              className="flex items-center justify-between gap-3 rounded-[12px] border-[1.5px] border-vinke-line bg-white px-4 py-3 text-sm font-semibold text-vinke-ink transition hover:border-vinke hover:text-vinke"
            >
              <span>
                Questão {m.enemIndex} · ENEM {m.examYear} · {m.disciplina}
              </span>
              <span className="text-xs font-medium text-vinke-ink3">ver resolução →</span>
            </Link>
          </li>
        ))}
      </ul>

      <CtaTreino contexto={`${nome} com questões reais`} />
    </QuestoesShell>
  );
}
