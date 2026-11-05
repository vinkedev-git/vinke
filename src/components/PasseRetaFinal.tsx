"use client";

import { useEffect, useState } from "react";

// Oferta sazonal do ENEM 2026. Conta até o próximo dia de prova (1º dia até
// 7/11; 2º dia — Matemática e Natureza — de 8 a 14/11) e some a partir de
// 15/11. Mesma regra de vinke-aluno/src/lib/oferta-client.ts (proximaProva).
// Checado no navegador para a página estática não congelar a data do build.
const DIA1 = new Date("2026-11-08T13:30:00-03:00");
const DIA2 = new Date("2026-11-15T13:30:00-03:00");
const diaBRT = (d: Date) => Math.floor((d.getTime() - 3 * 3_600_000) / 86_400_000);

function proximaProva(now = new Date()): { dia: 1 | 2; dias: number } | null {
  const d1 = diaBRT(DIA1) - diaBRT(now);
  if (d1 > 0) return { dia: 1, dias: d1 };
  const d2 = diaBRT(DIA2) - diaBRT(now);
  if (d2 > 0) return { dia: 2, dias: d2 };
  return null;
}

export default function PasseRetaFinal({ checkoutUrl }: { checkoutUrl: string }) {
  const [prova, setProva] = useState<ReturnType<typeof proximaProva> | undefined>(undefined);

  useEffect(() => {
    setProva(proximaProva());
    const id = setInterval(() => setProva(proximaProva()), 60 * 60 * 1000);
    return () => clearInterval(id);
  }, []);

  if (!prova) return null; // carregando (undefined) ou depois do 2º dia (null)

  const { dia, dias } = prova;
  const faltam = dias === 1 ? "Falta 1 dia" : `Faltam ${dias} dias`;
  return (
    <div className="mx-auto flex w-full max-w-[940px] flex-col items-start justify-between gap-4 rounded-[18px] border-[1.5px] border-vinke bg-vinke-soft p-6 sm:flex-row sm:items-center">
      <div className="flex flex-col gap-1">
        <span className="text-[10px] font-bold tracking-[0.12em] text-vinke">
          {dia === 1 ? "PARA QUEM FAZ A PROVA ESTE ANO" : "PARA O 2º DIA · MATEMÁTICA E NATUREZA"}
        </span>
        <span className="font-display text-lg font-bold text-vinke-ink">Passe Reta Final · ENEM 2026</span>
        <span className="text-[13px] font-medium text-vinke-ink2">
          Pagamento único de <strong className="text-vinke-ink">R$ 49,90</strong> · tudo liberado até 30/11/2026.{" "}
          {faltam} para {dia === 1 ? "o ENEM" : "o 2º dia"}.
        </span>
      </div>
      <a
        href={checkoutUrl}
        className="shrink-0 rounded-[10px] bg-vinke px-6 py-3 text-[13px] font-bold text-white transition hover:bg-vinke-deep"
      >
        Garantir o Passe
      </a>
    </div>
  );
}
