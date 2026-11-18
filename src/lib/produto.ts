// Dados do produto exibidos na landing page — fonte única para facilitar
// atualização quando o banco de questões crescer.
export const DADOS_PRODUTO = [
  { n: "+4.000", d: "questões oficiais do ENEM" },
  { n: "18", d: "provas, de 2009 a 2026" },
  { n: "100%", d: "com resolução comentada" },
  { n: "+450", d: "estudantes já treinam no Vinke" },
] as const;

// Arredondados SEMPRE para baixo. Conferir no banco antes de mudar:
// questões ativas (questionsBank.isActive) e contas (entitlements).
export const RESUMO_BANCO = {
  questoes: "+4.000",
  anos: "2009 a 2026",
  estudantes: "+450",
} as const;
