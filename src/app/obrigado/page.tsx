import type { Metadata } from "next";
import { Nav, Footer, APP_URL } from "@/components/sections";

// Página de obrigado da Eduzz (cartão/PIX). O aluno cai aqui logo após pagar,
// antes mesmo de qualquer e-mail chegar — por isso ela precisa se bastar:
// explica o que fazer, em que ordem, e leva direto para criar a senha.
export const metadata: Metadata = {
  title: "Compra confirmada — crie sua senha | Vinke",
  description: "Seu acesso ao Vinke foi liberado. Veja o passo a passo para criar sua senha e começar a treinar.",
  robots: { index: false, follow: false },
};

const PASSOS = [
  {
    n: "1",
    titulo: "Crie sua senha",
    texto:
      "Use o mesmo e-mail que você informou na compra. Na tela de acesso, toque em “Esqueci minha senha” e peça o link — ele chega em instantes e serve para definir a sua senha pela primeira vez.",
    acao: { label: "Criar minha senha", href: `${APP_URL}/aluno/entrar` },
  },
  {
    n: "2",
    titulo: "Entre no portal",
    texto:
      "Com a senha criada, entre em aluno.vinke.app.br. Seu plano já estará ativo — não precisa digitar código nem enviar comprovante.",
  },
  {
    n: "3",
    titulo: "Comece pelo diagnóstico",
    texto:
      "Faça um primeiro simulado ou responda a questão do dia. É com os seus acertos e erros que o plano diário passa a priorizar o que você mais precisa treinar.",
  },
];

export default function ObrigadoPage() {
  return (
    <div className="bg-vinke-offwhite">
      <Nav />
      <main className="mx-auto max-w-[760px] px-5 py-14 lg:py-20">
        <div className="flex flex-col items-start gap-4">
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-vinke-green-soft text-2xl font-bold text-vinke-green-text">
            ✓
          </span>
          <h1 className="font-display text-3xl font-bold leading-tight text-vinke-ink sm:text-[40px]">
            Compra confirmada. Bem-vindo ao Vinke!
          </h1>
          <p className="max-w-[620px] text-[15px] font-medium leading-relaxed text-vinke-ink2">
            Seu pagamento foi aprovado e o acesso já está liberado. Falta um último passo rápido:
            criar a sua senha. Leva menos de um minuto.
          </p>
        </div>

        <ol className="mt-10 flex flex-col gap-4">
          {PASSOS.map((p) => (
            <li
              key={p.n}
              className="flex gap-4 rounded-[18px] border-[1.5px] border-vinke-line bg-white p-6"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-vinke-soft font-display text-sm font-bold text-vinke">
                {p.n}
              </span>
              <div className="flex min-w-0 flex-col gap-2">
                <h2 className="font-display text-lg font-bold text-vinke-ink">{p.titulo}</h2>
                <p className="text-[15px] leading-relaxed text-vinke-ink2">{p.texto}</p>
                {p.acao && (
                  <a
                    href={p.acao.href}
                    className="mt-2 self-start rounded-[10px] bg-vinke px-6 py-3 text-[13px] font-bold text-white transition hover:bg-vinke-deep"
                  >
                    {p.acao.label}
                  </a>
                )}
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-10 rounded-[18px] bg-vinke-soft p-6">
          <h2 className="font-display text-base font-bold text-vinke-ink">
            Não recebeu o e-mail do link?
          </h2>
          <p className="mt-2 text-[15px] leading-relaxed text-vinke-ink2">
            Confira a caixa de spam e a aba “Promoções”. Se ainda assim não encontrar, escreva para{" "}
            <a href="mailto:suporte@vinke.app.br" className="font-semibold text-vinke underline">
              suporte@vinke.app.br
            </a>{" "}
            com o e-mail usado na compra — a gente libera manualmente.
          </p>
        </div>

        <p className="mt-8 text-[13px] leading-relaxed text-vinke-ink3">
          Comprou com um e-mail diferente do que usa no dia a dia? O acesso fica vinculado ao e-mail
          da compra. Se precisar trocar, é só pedir pelo suporte. Você tem 7 dias de garantia: se
          não for para você, devolvemos tudo.
        </p>
      </main>
      <Footer />
    </div>
  );
}
