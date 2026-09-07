import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getQuestao, listQuestoesMeta, stripHtml, slugify } from "@/lib/qdata";
import { QuestoesShell, Trilha, CtaTreino, PROSE, SITE_URL } from "@/components/QuestoesShell";

export const revalidate = 86400;
export const dynamicParams = true;

// As páginas de questão são geradas sob demanda (ISR) — sem pré-build das ~2.700.
export async function generateStaticParams() {
  return [];
}

type Props = { params: Promise<{ slug: string }> };

function tituloDe(q: { enemIndex: number; examYear: number; disciplina: string; enemLanguage: string | null }) {
  const lang = q.enemLanguage ? ` (${q.enemLanguage})` : "";
  return `Questão ${q.enemIndex} do ENEM ${q.examYear}${lang} — ${q.disciplina}`;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const q = await getQuestao(slug);
  if (!q) return {};
  const desc = stripHtml(q.prompt).slice(0, 155);
  return {
    title: `${tituloDe(q)} | Resolvida e comentada — Vinke`,
    description: desc,
    alternates: { canonical: `${SITE_URL}/questoes/${slug}` },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const q = await getQuestao(slug);
  if (!q) notFound();

  const metas = await listQuestoesMeta();
  const daProva = metas.filter((m) => m.examYear === q.examYear && !m.enemLanguage);
  const pos = daProva.findIndex((m) => m.id === q.id);
  const anterior = pos > 0 ? daProva[pos - 1] : null;
  const proxima = pos >= 0 && pos < daProva.length - 1 ? daProva[pos + 1] : null;

  const correta = q.options.find((o) => o.id === q.correctOptionId);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Question",
    name: tituloDe(q),
    text: stripHtml(q.prompt).slice(0, 500),
    answerCount: 1,
    educationalLevel: "Ensino Médio",
    acceptedAnswer: {
      "@type": "Answer",
      text: `Alternativa ${q.correctOptionId}${correta?.text ? `: ${stripHtml(correta.text).slice(0, 200)}` : ""}. ${stripHtml(q.explanation).slice(0, 400)}`,
    },
  };

  return (
    <QuestoesShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Trilha
        itens={[
          { href: "/questoes", label: "Questões" },
          { href: `/questoes/prova/${q.examYear}`, label: `ENEM ${q.examYear}` },
          { label: `Questão ${q.enemIndex}` },
        ]}
      />

      <h1 className="font-display text-2xl font-bold leading-tight text-vinke-ink sm:text-[32px]">
        {tituloDe(q)}
      </h1>
      <div className="mt-2 flex flex-wrap gap-2">
        <Link
          href={`/questoes/disciplina/${slugify(q.disciplina)}`}
          className="rounded-full bg-vinke-soft px-3 py-1 text-xs font-bold text-vinke transition hover:bg-vinke-ring"
        >
          {q.disciplina}
        </Link>
        {q.themes.map((t) => (
          <Link
            key={t}
            href={`/questoes/assunto/${slugify(t)}`}
            className="rounded-full border border-vinke-line bg-white px-3 py-1 text-xs font-semibold text-vinke-ink2 transition hover:border-vinke hover:text-vinke"
          >
            {t}
          </Link>
        ))}
      </div>

      {/* Enunciado */}
      <div className="mt-8 rounded-[18px] border-[1.5px] border-vinke-line bg-white p-6 sm:p-8">
        <div className={PROSE} dangerouslySetInnerHTML={{ __html: q.prompt }} />

        <div className="mt-6 flex flex-col gap-2.5">
          {q.options.map((opt) => {
            const ehCorreta = opt.id === q.correctOptionId;
            return (
              <div
                key={opt.id}
                className={`flex items-start gap-3 rounded-[12px] border-[1.5px] px-4 py-3 ${
                  ehCorreta ? "border-vinke-green bg-vinke-green-soft" : "border-vinke-line bg-white"
                }`}
              >
                <span
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                    ehCorreta ? "bg-vinke-green text-white" : "bg-vinke-line2 text-vinke-ink2"
                  }`}
                >
                  {ehCorreta ? "✓" : opt.id}
                </span>
                <div className="min-w-0 pt-0.5 text-[14px] leading-relaxed text-vinke-ink2">
                  {opt.text && <span dangerouslySetInnerHTML={{ __html: opt.text }} />}
                  {opt.imageUrl && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={opt.imageUrl} alt={`Alternativa ${opt.id}`} className="mt-2 max-h-44 rounded-lg" />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-5 text-sm font-bold text-vinke-green-text">
          Gabarito oficial: alternativa {q.correctOptionId}
        </div>
      </div>

      {/* Resolução */}
      {q.explanation && (
        <div className="mt-6 rounded-[18px] bg-white p-6 shadow-[0_10px_30px_rgba(11,10,33,0.06)] sm:p-8">
          <h2 className="font-display text-lg font-bold text-vinke-ink">Resolução comentada</h2>
          <div className={`mt-3 ${PROSE}`} dangerouslySetInnerHTML={{ __html: q.explanation }} />
        </div>
      )}

      <CtaTreino contexto={`${q.disciplina} para o ENEM`} />

      {/* Navegação entre questões */}
      <div className="mt-8 flex items-center justify-between gap-3 text-sm font-bold">
        {anterior ? (
          <Link href={`/questoes/${anterior.slug}`} className="text-vinke transition hover:text-vinke-deep">
            ← Questão {anterior.enemIndex}
          </Link>
        ) : (
          <span />
        )}
        <Link href={`/questoes/prova/${q.examYear}`} className="text-vinke-ink3 transition hover:text-vinke">
          Prova completa
        </Link>
        {proxima ? (
          <Link href={`/questoes/${proxima.slug}`} className="text-vinke transition hover:text-vinke-deep">
            Questão {proxima.enemIndex} →
          </Link>
        ) : (
          <span />
        )}
      </div>
    </QuestoesShell>
  );
}
