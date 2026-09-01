import type { Metadata } from "next";
import { Nav, Footer } from "@/components/sections";

export const metadata: Metadata = {
  title: "Suporte — VINKE",
  description: "Fale com o suporte do VINKE: conta, pagamentos, garantia e erros em questões.",
};

const TOPICOS = [
  {
    t: "Conta e acesso",
    d: "Não consegue entrar, quer trocar o e-mail ou excluir a conta? Escreva para o suporte com o e-mail cadastrado.",
  },
  {
    t: "Pagamentos e garantia",
    d: "Dúvidas de cobrança, reembolso dos 7 dias ou nota fiscal. O cancelamento da renovação você faz direto na plataforma, sem precisar falar com a gente.",
  },
  {
    t: "Erro em uma questão",
    d: "Achou um enunciado estranho, gabarito suspeito ou resolução com erro? Use o botão de reportar erro na própria questão — o report chega com o contexto certo e agiliza a correção.",
  },
  {
    t: "Sugestões",
    d: "Ideias de recurso e melhorias são muito bem-vindas. Conta pra gente como você estuda e o que faria diferença.",
  },
];

export default function SuportePage() {
  return (
    <div className="bg-vinke-offwhite">
      <Nav />
      <main className="mx-auto flex max-w-[880px] flex-col gap-10 px-5 py-14 lg:py-20">
        <div className="flex flex-col gap-3">
          <span className="text-xs font-bold tracking-[0.14em] text-vinke">SUPORTE</span>
          <h1 className="font-display text-3xl font-bold leading-tight text-vinke-ink sm:text-[40px]">
            Como podemos ajudar?
          </h1>
          <p className="max-w-[560px] text-[15px] leading-relaxed text-vinke-ink2">
            Antes de escrever, vale conferir as{" "}
            <a href="/#duvidas" className="font-bold text-vinke underline underline-offset-2">
              perguntas frequentes
            </a>{" "}
            — as dúvidas mais comuns estão respondidas lá.
          </p>
        </div>

        <div className="flex flex-col gap-4 rounded-2xl bg-vinke-navy p-7 sm:p-8">
          <span className="text-xs font-bold tracking-[0.14em] text-vinke-lav">CANAL OFICIAL</span>
          <a
            href="mailto:suporte@vinke.app.br"
            className="font-display text-2xl font-bold text-white underline-offset-4 hover:underline sm:text-3xl"
          >
            suporte@vinke.app.br
          </a>
          <p className="max-w-[560px] text-[14px] leading-relaxed text-vinke-ink3">
            Respondemos normalmente em até 2 dias úteis. Para agilizar, escreva a partir do
            e-mail cadastrado na sua conta e descreva o que aconteceu — se for um problema na
            tela, um print ajuda muito.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {TOPICOS.map((x) => (
            <div key={x.t} className="flex flex-col gap-2 rounded-2xl border border-vinke-line bg-white p-6">
              <h2 className="font-display text-base font-bold text-vinke-ink">{x.t}</h2>
              <p className="text-[13px] leading-relaxed text-vinke-ink2">{x.d}</p>
            </div>
          ))}
        </div>

        <p className="text-[13px] leading-relaxed text-vinke-ink3">
          Assuntos sobre dados pessoais (acesso, correção, exclusão) também passam por este
          canal — veja a{" "}
          <a href="/privacidade" className="font-bold text-vinke underline underline-offset-2">
            Política de Privacidade
          </a>{" "}
          e os{" "}
          <a href="/termos" className="font-bold text-vinke underline underline-offset-2">
            Termos de Uso
          </a>
          .
        </p>
      </main>
      <Footer />
    </div>
  );
}
