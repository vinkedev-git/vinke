"use client";

import { useState } from "react";

const PERGUNTAS: Array<{ q: string; a: string }> = [
  {
    q: "Funciona no celular?",
    a: "Sim — o VINKE foi feito para o celular. Questões, simulados, flashcards e seus dados funcionam no navegador, sem instalar nada.",
  },
  {
    q: "Preciso de cartão para o plano grátis?",
    a: "Não. O plano gratuito não pede cartão de crédito — você cria a conta e já começa a treinar.",
  },
  {
    q: "As questões são oficiais mesmo?",
    a: "Sim. O banco é formado pelas provas oficiais do ENEM aplicadas pelo INEP, organizadas por área, disciplina e assunto.",
  },
  {
    q: "Posso cancelar quando quiser?",
    a: "Pode, direto no app, sem burocracia. Você mantém o acesso até o fim do período já pago.",
  },
  {
    q: "Serve para outros vestibulares?",
    a: "O foco do treino é o ENEM — formato, tempo e áreas da prova. Como a base é o conteúdo do ensino médio, o estudo também fortalece outros vestibulares.",
  },
  {
    q: "Como funciona a garantia de 7 dias?",
    a: "Assinou e não curtiu? Em até 7 dias, devolvemos 100% do valor, sem perguntas.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section id="duvidas" className="bg-white py-16 lg:py-[88px]">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-10 px-5 lg:flex-row lg:gap-16 lg:px-8">
        <div className="flex flex-col gap-2.5 lg:w-[320px]">
          <span className="text-xs font-bold tracking-[0.14em] text-vinke">DÚVIDAS</span>
          <h2 className="font-display text-3xl font-bold leading-tight text-vinke-ink sm:text-[34px]">
            Perguntas que todo mundo faz
          </h2>
        </div>
        <div className="flex flex-1 flex-col">
          {PERGUNTAS.map((p, i) => {
            const aberta = open === i;
            return (
              <div key={p.q} className="border-b border-vinke-line py-5 last:border-b-0">
                <button
                  type="button"
                  onClick={() => setOpen(aberta ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 text-left"
                >
                  <span className="text-[15px] font-bold text-vinke-ink">{p.q}</span>
                  <span className={"font-display text-lg font-bold " + (aberta ? "text-vinke" : "text-vinke-ink3")}>
                    {aberta ? "−" : "+"}
                  </span>
                </button>
                {aberta ? (
                  <p className="mt-2.5 max-w-[560px] text-[13px] leading-relaxed text-vinke-ink2">{p.a}</p>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
