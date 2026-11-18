"use client";

import { useEffect, useState } from "react";

// Anual Fundador: 12x R$ 14,90 (R$ 178,80) até 31/01/2027, e os 12 meses só
// começam a contar em 1º/02/2027. Mesmo prazo/preço do app
// (vinke-aluno/src/lib/oferta-client.ts) e do e-mail de janeiro (admin).
// CHECKOUT vazio = faixa escondida. A data é checada no navegador para a
// página estática não congelar no dia do build.
export const CHECKOUT_FUNDADOR = "";
const FIM = new Date("2027-02-01T00:00:00-03:00");
const diaBRT = (d: Date) => Math.floor((d.getTime() - 3 * 3_600_000) / 86_400_000);

export default function OfertaFundador() {
  const [faltam, setFaltam] = useState<number | null>(null);

  useEffect(() => {
    const atualiza = () => setFaltam(new Date() < FIM ? diaBRT(FIM) - diaBRT(new Date()) : null);
    atualiza();
    const id = setInterval(atualiza, 60 * 60 * 1000);
    return () => clearInterval(id);
  }, []);

  if (!CHECKOUT_FUNDADOR || faltam === null) return null;

  return (
    <div className="mx-auto flex w-full max-w-[940px] flex-col items-start justify-between gap-4 rounded-[18px] border-[1.5px] border-vinke bg-vinke-soft p-6 sm:flex-row sm:items-center">
      <div className="flex flex-col gap-1">
        <span className="text-[10px] font-bold tracking-[0.12em] text-vinke">
          CONDIÇÃO DE FUNDADOR · {faltam <= 1 ? "TERMINA HOJE" : `ATÉ 31 DE JANEIRO · FALTAM ${faltam} DIAS`}
        </span>
        <span className="font-display text-lg font-bold text-vinke-ink">
          Anual por 12x R$ 14,90 <span className="text-sm font-semibold text-vinke-ink3 line-through">12x R$ 19,90</span>
        </span>
        <span className="max-w-[560px] text-[13px] font-medium leading-relaxed text-vinke-ink2">
          Os 12 meses só começam a contar em 1º de fevereiro: até lá o Vinke continua aberto para você, e o acesso vai até
          31/01/2028, cobrindo o ENEM 2027 inteiro. Em fevereiro o Anual volta para 12x R$ 19,90.
        </span>
      </div>
      <a
        href={CHECKOUT_FUNDADOR}
        className="shrink-0 rounded-[10px] bg-vinke px-6 py-3 text-[13px] font-bold text-white transition hover:bg-vinke-deep"
      >
        Garantir o Fundador
      </a>
    </div>
  );
}

/**
 * Botão do card do Anual: enquanto a condição de fundador vale, leva ao
 * checkout de fundador (ninguém paga o preço cheio sem querer); depois de
 * 31/01 (ou sem o link), volta ao checkout normal do Anual.
 */
export function BotaoAnual({ checkoutAnual, className }: { checkoutAnual: string; className: string }) {
  const [fundador, setFundador] = useState(false);
  useEffect(() => {
    setFundador(Boolean(CHECKOUT_FUNDADOR) && new Date() < FIM);
  }, []);
  return (
    <a href={fundador ? CHECKOUT_FUNDADOR : checkoutAnual} className={className}>
      {fundador ? "Assinar com preço de fundador" : "Assinar Anual"}
    </a>
  );
}
