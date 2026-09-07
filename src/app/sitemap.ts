import type { MetadataRoute } from "next";
import { listQuestoesMeta, slugify } from "@/lib/qdata";

export const revalidate = 86400;

const BASE = "https://vinke.app.br";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const metas = await listQuestoesMeta();

  const fixas: MetadataRoute.Sitemap = [
    { url: BASE, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/questoes`, changeFrequency: "daily", priority: 0.9 },
    { url: `${BASE}/termos`, changeFrequency: "yearly", priority: 0.1 },
    { url: `${BASE}/privacidade`, changeFrequency: "yearly", priority: 0.1 },
    { url: `${BASE}/suporte`, changeFrequency: "yearly", priority: 0.1 },
  ];

  const anos = [...new Set(metas.map((m) => m.examYear))].map((ano) => ({
    url: `${BASE}/questoes/prova/${ano}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const disciplinas = [...new Set(metas.map((m) => slugify(m.disciplina)).filter(Boolean))].map(
    (slug) => ({
      url: `${BASE}/questoes/disciplina/${slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })
  );

  const assuntosSet = new Set<string>();
  for (const m of metas) for (const t of m.themes) assuntosSet.add(slugify(t));
  const assuntos = [...assuntosSet].filter(Boolean).map((slug) => ({
    url: `${BASE}/questoes/assunto/${slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const questoes = metas.map((m) => ({
    url: `${BASE}/questoes/${m.slug}`,
    changeFrequency: "yearly" as const,
    priority: 0.5,
  }));

  return [...fixas, ...anos, ...disciplinas, ...assuntos, ...questoes];
}
