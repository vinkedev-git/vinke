// Acesso (somente leitura) ao banco de questões para as páginas públicas.
//
// As páginas usam ISR (revalidate diário), então o custo no Firestore é de
// UMA varredura leve por dia por rota de listagem — não uma leitura por
// visita. O doc completo só é lido na página da própria questão.

import { unstable_cache } from "next/cache";
import { cert, getApps, initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

function db() {
  if (getApps().length === 0) {
    initializeApp({
      credential: cert({
        projectId: process.env.FIREBASE_ADMIN_PROJECT_ID,
        clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
        privateKey: (process.env.FIREBASE_ADMIN_PRIVATE_KEY ?? "").replace(/\\n/g, "\n"),
      }),
    });
  }
  return getFirestore();
}

// ─── Slugs ───────────────────────────────────────────────────────────────────

export function slugFromId(id: string): string {
  // ENEM2019_Q137 -> enem-2019-questao-137 · ENEM2019_Q001_ESPANHOL -> enem-2019-questao-1-espanhol
  const m = id.match(/^ENEM(\d{4})_Q0*(\d+)(?:_([A-Z]+))?$/);
  if (!m) return id.toLowerCase().replace(/_/g, "-");
  return `enem-${m[1]}-questao-${m[2]}${m[3] ? `-${m[3].toLowerCase()}` : ""}`;
}

export function idFromSlug(slug: string): string | null {
  const m = slug.match(/^enem-(\d{4})-questao-(\d+)(?:-([a-z]+))?$/);
  if (!m) return null;
  const idx = String(Number(m[2])).padStart(3, "0");
  return `ENEM${m[1]}_Q${idx}${m[3] ? `_${m[3].toUpperCase()}` : ""}`;
}

export const slugify = (s: string) =>
  String(s)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

// ─── Tipos ───────────────────────────────────────────────────────────────────

export type QuestaoMeta = {
  id: string;
  slug: string;
  examYear: number;
  enemIndex: number;
  disciplina: string;
  area: string;
  themes: string[];
  enemLanguage: string | null;
};

export type QuestaoFull = QuestaoMeta & {
  prompt: string;
  options: Array<{ id: string; text: string; imageUrl: string | null }>;
  correctOptionId: string;
  explanation: string;
};

// ─── Consultas ───────────────────────────────────────────────────────────────

/** Metadados leves de TODAS as questões ativas (1 varredura, cache diário). */
export const listQuestoesMeta = unstable_cache(
  async (): Promise<QuestaoMeta[]> => {
    const snap = await db()
      .collection("questionsBank")
      .select("examYear", "enemIndex", "disciplina", "area", "themes", "enemLanguage", "isActive")
      .get();
    return snap.docs
      .filter((d) => d.get("isActive") !== false)
      .map((d) => ({
        id: d.id,
        slug: slugFromId(d.id),
        examYear: Number(d.get("examYear") ?? 0),
        enemIndex: Number(d.get("enemIndex") ?? 0),
        disciplina: String(d.get("disciplina") ?? ""),
        area: String(d.get("area") ?? ""),
        themes: Array.isArray(d.get("themes")) ? d.get("themes") : [],
        enemLanguage: d.get("enemLanguage") ?? null,
      }))
      .sort((a, b) => a.examYear - b.examYear || a.enemIndex - b.enemIndex);
  },
  ["questoes-meta"],
  { revalidate: 86400 }
);

export async function getQuestao(slug: string): Promise<QuestaoFull | null> {
  const id = idFromSlug(slug);
  if (!id) return null;
  const d = await db().collection("questionsBank").doc(id).get();
  if (!d.exists || d.get("isActive") === false) return null;
  const rawOptions = Array.isArray(d.get("options")) ? d.get("options") : [];
  return {
    id: d.id,
    slug,
    examYear: Number(d.get("examYear") ?? 0),
    enemIndex: Number(d.get("enemIndex") ?? 0),
    disciplina: String(d.get("disciplina") ?? ""),
    area: String(d.get("area") ?? ""),
    themes: Array.isArray(d.get("themes")) ? d.get("themes") : [],
    enemLanguage: d.get("enemLanguage") ?? null,
    prompt: String(d.get("prompt") ?? d.get("prompt_text") ?? ""),
    options: rawOptions.map((o: Record<string, unknown>) => ({
      id: String(o?.id ?? ""),
      text: String(o?.text ?? ""),
      imageUrl: (o?.imageUrl as string) ?? null,
    })),
    correctOptionId: String(d.get("correctOptionId") ?? ""),
    explanation: String(d.get("explanation") ?? ""),
  };
}

// ─── Utilidades de texto ─────────────────────────────────────────────────────

export function stripHtml(html: string): string {
  return html
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, " ")
    .trim();
}
