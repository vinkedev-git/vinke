// Datas oficiais do INEP (1º dia de prova), por ano.
// Quando o edital do ano seguinte sair, basta adicionar a linha aqui.
const DATAS_OFICIAIS: Record<number, [mes: number, dia: number]> = {
  2026: [10, 8], // 8 de novembro de 2026 — Edital INEP nº 64/2026
};

// Sem data oficial conhecida, estima o primeiro domingo de novembro.
function dataDoEnem(ano: number): Date {
  const oficial = DATAS_OFICIAIS[ano];
  if (oficial) return new Date(ano, oficial[0], oficial[1]);
  const primeiroNov = new Date(ano, 10, 1);
  const domingo = new Date(primeiroNov);
  domingo.setDate(1 + ((7 - primeiroNov.getDay()) % 7));
  return domingo;
}

// Diferença em dias de calendário (hoje → dia da prova), ignorando horários.
export function proximoEnem(): { ano: number; dias: number } {
  const agora = new Date();
  const hoje = new Date(agora.getFullYear(), agora.getMonth(), agora.getDate());
  for (const ano of [hoje.getFullYear(), hoje.getFullYear() + 1]) {
    const dias = Math.round((dataDoEnem(ano).getTime() - hoje.getTime()) / 86_400_000);
    if (dias >= 0) return { ano, dias };
  }
  return { ano: hoje.getFullYear() + 1, dias: 365 };
}
