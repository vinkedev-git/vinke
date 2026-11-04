"use client";

import type { ReactNode } from "react";
import { useEffect, useState } from "react";

// Vinke aberto: de 16/11/2026 a 31/01/2027 o plano gratuito tem tudo liberado.
// Mesma janela de vinke-aluno/src/lib/oferta-client.ts. Checado no navegador
// (useEffect) para a página estática não congelar a data no build.
const INICIO = new Date("2026-11-16T00:00:00-03:00");
const FIM = new Date("2027-02-01T00:00:00-03:00");

export function useVinkeAberto(): boolean {
  const [ativo, setAtivo] = useState(false);
  useEffect(() => {
    const now = new Date();
    setAtivo(now >= INICIO && now < FIM);
  }, []);
  return ativo;
}

/** Faixa do herói: substitui o "Sem cartão" quando o período está ativo. */
export function AvisoAbertoHero({ fallback }: { fallback: ReactNode }) {
  const ativo = useVinkeAberto();
  if (!ativo) return <>{fallback}</>;
  return (
    <div className="flex items-start gap-3 rounded-xl bg-vinke-navy px-4 py-3 text-white">
      <span className="mt-0.5 shrink-0 rounded-full bg-vinke px-2 py-0.5 text-[10px] font-bold tracking-[0.12em]">
        VINKE ABERTO
      </span>
      <p className="text-[13px] leading-5">
        <b>Tudo liberado até 31 de janeiro.</b> Questões sem limite, simulados completos, plano diário e
        caderno de erros. Grátis, sem cartão. A turma 2027 começa agora.
      </p>
    </div>
  );
}

/** Linha abaixo do título da seção Planos. */
export function AvisoAbertoPlanos() {
  const ativo = useVinkeAberto();
  if (!ativo) return null;
  return (
    <p className="mt-1 max-w-[560px] rounded-xl bg-vinke-offwhite px-4 py-3 text-[14px] font-medium leading-6 text-vinke-ink2">
      <span className="font-bold text-vinke">Vinke aberto:</span> até 31 de janeiro o plano gratuito tem tudo
      liberado, sem limite de questões. Os planos pagos voltam a valer em fevereiro.
    </p>
  );
}
