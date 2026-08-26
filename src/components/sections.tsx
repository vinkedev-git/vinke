import Link from "next/link";
import { VinkeSymbol } from "@/components/VinkeLogo";
import { proximoEnem } from "@/lib/enem";

export const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://vinke-aluno.vercel.app";
const ENTRAR = `${APP_URL}/aluno/entrar`;
const COMECAR = `${APP_URL}/aluno/entrar`;

// ─── Nav ─────────────────────────────────────────────────────────────────────

export function Nav() {
  return (
    <nav className="sticky top-0 z-40 border-b border-vinke-line bg-vinke-offwhite/95 backdrop-blur">
      <div className="mx-auto flex max-w-[1240px] items-center justify-between px-5 py-4 lg:px-8">
        <a href="#" className="flex items-center gap-2">
          <VinkeSymbol size={24} />
          <span className="font-display text-xl font-bold tracking-[0.01em] text-vinke-ink">VINKE</span>
        </a>
        <div className="hidden gap-8 text-[13px] font-semibold text-vinke-ink2 md:flex">
          <a href="#recursos" className="transition hover:text-vinke-ink">Recursos</a>
          <a href="#como-funciona" className="transition hover:text-vinke-ink">Como funciona</a>
          <a href="#planos" className="transition hover:text-vinke-ink">Planos</a>
          <a href="#duvidas" className="transition hover:text-vinke-ink">Dúvidas</a>
        </div>
        <div className="flex items-center gap-4">
          <Link href={ENTRAR} className="hidden text-[13px] font-bold text-vinke-ink sm:block">
            Entrar
          </Link>
          <Link
            href={COMECAR}
            className="rounded-[10px] bg-vinke px-5 py-2.5 text-[13px] font-bold text-white transition hover:bg-vinke-deep"
          >
            Começar agora
          </Link>
        </div>
      </div>
    </nav>
  );
}

// ─── Mockup: Início do aluno ─────────────────────────────────────────────────

function AreaBar({ nome, pct, delta }: { nome: string; pct: number; delta?: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className="w-20 shrink-0 text-[8px] font-semibold text-vinke-ink">{nome}</span>
      <div className="h-[5px] min-w-0 flex-1 rounded-full bg-vinke-line2">
        <div className="h-[5px] rounded-full bg-vinke" style={{ width: `${pct}%` }} />
      </div>
      <span className="shrink-0 font-display text-[9px] font-bold text-vinke-ink">{pct}%</span>
      {delta ? (
        <span className="shrink-0 rounded-full bg-vinke-green-soft px-1.5 text-[7px] font-bold text-vinke-green-text">
          {delta}
        </span>
      ) : (
        <span className="w-6 shrink-0" />
      )}
    </div>
  );
}

export function MockupInicio() {
  return (
    <div className="flex w-full max-w-[600px] overflow-hidden rounded-[18px] border border-vinke-line bg-white shadow-[0_28px_70px_rgba(11,10,33,0.14)]">
      <div className="hidden w-[132px] shrink-0 flex-col gap-3 bg-vinke-navy p-4 sm:flex">
        <div className="flex items-center gap-1.5">
          <VinkeSymbol size={14} className="text-vinke" />
          <span className="font-display text-[13px] font-bold text-white">VINKE</span>
        </div>
        <div className="flex flex-col gap-1.5 text-[9px] font-semibold">
          <span className="rounded-[7px] bg-vinke px-2 py-1.5 text-white">Início</span>
          <span className="px-2 py-1.5 text-vinke-ink3">Estudo de hoje</span>
          <span className="px-2 py-1.5 text-vinke-ink3">Simulados</span>
          <span className="px-2 py-1.5 text-vinke-ink3">Questões</span>
          <span className="px-2 py-1.5 text-vinke-ink3">Meus dados</span>
        </div>
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-2.5 bg-vinke-offwhite p-4">
        <div className="flex items-center justify-between">
          <span className="font-display text-sm font-bold text-vinke-ink">Boa tarde, Marina</span>
          <span className="rounded-full border border-vinke-line bg-white px-2 py-1 text-[9px] font-bold text-vinke-ink">
            ⚡ 12 dias
          </span>
        </div>
        <div className="flex gap-2">
          <div className="flex flex-[1.3] flex-col gap-0.5 rounded-xl bg-vinke-navy p-3">
            <span className="text-[7px] font-semibold tracking-[0.12em] text-vinke-ink3">TAXA DE ACERTO GERAL</span>
            <div className="flex items-baseline gap-1.5">
              <span className="font-display text-3xl font-bold text-white">68%</span>
              <span className="rounded-full bg-vinke-green-soft px-1.5 py-0.5 text-[8px] font-bold text-vinke-green-text">↑ +4 pts</span>
            </div>
            <span className="text-[8px] font-medium text-vinke-ink3">média de acertos nas 4 áreas</span>
          </div>
          <div className="flex flex-1 flex-col gap-1 rounded-xl bg-white p-3">
            <span className="text-[7px] font-semibold tracking-[0.12em] text-vinke-ink3">SUA META</span>
            <span className="font-display text-lg font-bold text-vinke-ink">ENEM 2027</span>
            <div className="h-[5px] rounded-full bg-vinke-line2">
              <div className="h-[5px] w-[90%] rounded-full bg-vinke" />
            </div>
            <span className="text-[8px] font-semibold text-vinke-ink2">Faltam 74 dias</span>
          </div>
        </div>
        <div className="flex flex-col gap-1.5 rounded-xl bg-white p-3">
          <span className="font-display text-[10px] font-bold text-vinke-ink">Desempenho por área</span>
          <AreaBar nome="Linguagens" pct={78} delta="+3" />
          <AreaBar nome="Humanas" pct={71} delta="+6" />
          <AreaBar nome="Matemática" pct={54} />
        </div>
        <div className="flex items-center justify-between rounded-xl bg-vinke px-3 py-2.5">
          <span className="font-display text-[10px] font-bold text-white">Simulado de Matemática · 23/45</span>
          <span className="rounded-[7px] bg-white px-2.5 py-1 text-[8px] font-bold text-vinke">Continuar →</span>
        </div>
      </div>
    </div>
  );
}

// ─── Hero ────────────────────────────────────────────────────────────────────

export function Hero({ campanha = false }: { campanha?: boolean }) {
  return (
    <header className="mx-auto flex max-w-[1240px] flex-col items-center gap-10 px-5 pb-10 pt-14 lg:flex-row lg:gap-14 lg:px-8 lg:pt-[72px]">
      <div className="flex max-w-[560px] flex-1 flex-col gap-5">
        <span className="text-xs font-bold tracking-[0.14em] text-vinke">PREPARAÇÃO PARA O ENEM</span>
        <h1 className="font-display text-[40px] font-bold leading-[1.08] tracking-[-0.01em] text-vinke-ink sm:text-[54px]">
          Sua nota no ENEM começa a subir hoje.
        </h1>
        <p className="text-[16px] leading-relaxed text-vinke-ink2 sm:text-[17px]">
          Questões oficiais, simulados no formato da prova e um plano diário que prioriza o que
          você mais erra. Treino de verdade, não videoaula.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href={COMECAR}
            className="rounded-xl bg-vinke px-7 py-4 text-center text-[15px] font-bold text-white transition hover:bg-vinke-deep"
          >
            Começar agora — grátis
          </Link>
          {!campanha ? (
            <a
              href="#como-funciona"
              className="rounded-xl border-[1.5px] border-vinke-line bg-white px-6 py-4 text-center text-[15px] font-bold text-vinke-ink transition hover:bg-vinke-line2"
            >
              Ver como funciona
            </a>
          ) : null}
        </div>
        <span className="text-xs font-medium text-vinke-ink3">Sem cartão de crédito no plano grátis.</span>
      </div>
      <MockupInicio />
    </header>
  );
}

export function TrustStrip() {
  return (
    <div className="mx-auto flex max-w-[1240px] flex-wrap gap-x-10 gap-y-2 px-5 pb-14 text-[13px] font-semibold text-vinke-ink2 lg:px-8">
      {["Todas as provas oficiais do ENEM", "Correção na hora", "Estude no celular"].map((t) => (
        <span key={t} className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-vinke" />
          {t}
        </span>
      ))}
    </div>
  );
}

// ─── Números ─────────────────────────────────────────────────────────────────

export function Numeros() {
  const items = [
    { n: "+2.700", d: "questões oficiais do ENEM" },
    { n: "15", d: "provas completas" },
    { n: "4", d: "áreas do conhecimento" },
    { n: "Na hora", d: "correção e resolução comentada" },
  ];
  return (
    <section className="bg-vinke-navy py-11">
      <div className="mx-auto grid max-w-[1240px] grid-cols-2 gap-8 px-5 lg:grid-cols-4 lg:px-8">
        {items.map((i) => (
          <div key={i.d} className="flex flex-col gap-0.5">
            <span className="font-display text-3xl font-bold text-white sm:text-[40px]">{i.n}</span>
            <span className="text-xs font-semibold text-vinke-ink3">{i.d}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── O problema ──────────────────────────────────────────────────────────────

export function Problema() {
  return (
    <section className="bg-white py-16 lg:py-[88px]">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-7 px-5 lg:px-8">
        <h2 className="max-w-[640px] font-display text-3xl font-bold leading-tight text-vinke-ink sm:text-[38px]">
          Estudar sem direção não sobe nota.
        </h2>
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
          <div className="flex flex-1 flex-col gap-3.5">
            {[
              "Apostila parada na página 40 desde março.",
              "Horas de videoaula assistindo alguém resolver — sem você resolver nada.",
              "Nenhuma ideia do que realmente cai, nem de onde você está perdendo ponto.",
            ].map((t) => (
              <div key={t} className="flex items-start gap-3">
                <span className="font-bold text-vinke-red">✗</span>
                <span className="text-[15px] leading-relaxed text-vinke-ink2">{t}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-1 flex-col gap-2.5 rounded-2xl bg-vinke-soft p-7">
            <VinkeSymbol size={28} />
            <p className="font-display text-lg font-bold leading-snug text-vinke-ink sm:text-xl">
              O VINKE é o contrário: você treina com a prova de verdade, e seus dados decidem o
              que estudar em seguida.
            </p>
            <p className="text-sm leading-relaxed text-vinke-ink2">
              Cada questão respondida ensina a plataforma sobre você. Seu ponto fraco vira seu
              plano de amanhã.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Recursos (4 blocos com mockups) ─────────────────────────────────────────

function MockQuestao() {
  return (
    <div className="flex w-full max-w-[480px] flex-col gap-2.5 rounded-2xl border border-vinke-line bg-white p-5 shadow-[0_18px_48px_rgba(11,10,33,0.08)]">
      <div className="flex flex-wrap gap-1.5">
        <span className="rounded-full bg-vinke-soft px-2 py-0.5 text-[10px] font-bold text-vinke">Matemática</span>
        <span className="rounded-full bg-vinke-line2 px-2 py-0.5 text-[10px] font-bold text-vinke-ink2">ENEM 2023</span>
        <span className="rounded-full bg-vinke-line2 px-2 py-0.5 text-[10px] font-bold text-vinke-ink2">Função afim</span>
      </div>
      <p className="text-[13px] leading-relaxed text-vinke-ink">
        Uma função afim f(x) = ax + b passa pelos pontos (1, 5) e (3, 11). O valor de a + b é…
      </p>
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center gap-2 rounded-[9px] border-[1.5px] border-vinke-line px-3 py-2">
          <span className="flex h-5 w-5 items-center justify-center rounded-full border-[1.5px] border-vinke-line text-[10px] font-bold text-vinke-ink2">A</span>
          <span className="text-xs text-vinke-ink">4</span>
        </div>
        <div className="flex items-center gap-2 rounded-[9px] border-[1.5px] border-vinke-green bg-vinke-green-soft px-3 py-2">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-vinke-green text-[10px] font-bold text-white">✓</span>
          <span className="text-xs font-bold text-vinke-green-text">5 — você acertou</span>
        </div>
        <div className="flex items-center gap-2 rounded-[9px] border-[1.5px] border-vinke-line px-3 py-2">
          <span className="flex h-5 w-5 items-center justify-center rounded-full border-[1.5px] border-vinke-line text-[10px] font-bold text-vinke-ink2">C</span>
          <span className="text-xs text-vinke-ink">6</span>
        </div>
      </div>
      <div className="rounded-[10px] bg-vinke-offwhite px-3 py-2.5 text-[11px] leading-relaxed text-vinke-ink2">
        <strong className="text-vinke-ink">Resolução: </strong>
        com dois pontos da reta, a = (11−5)/(3−1) = 3 e b = 2. Logo a + b = 5.
      </div>
    </div>
  );
}

function MockSimulado() {
  const estados = [
    ..."111111111111111111111112".split(""),
    "3",
    ..."00000".split(""),
  ];
  return (
    <div className="flex w-full max-w-[480px] flex-col gap-3 rounded-2xl border border-vinke-line bg-white p-5 shadow-[0_18px_48px_rgba(11,10,33,0.08)]">
      <div className="flex items-center justify-between">
        <span className="font-display text-[13px] font-bold text-vinke-ink">Simulado · Matemática · 45 questões</span>
        <span className="rounded-lg bg-vinke-navy px-2.5 py-1 font-display text-[11px] font-bold text-white">01:22:40</span>
      </div>
      <div className="flex flex-wrap gap-1">
        {estados.map((e, i) => (
          <span
            key={i}
            className={
              "flex h-6 w-6 items-center justify-center rounded-[7px] text-[9px] font-bold " +
              (e === "1"
                ? "bg-vinke text-white"
                : e === "2"
                  ? "bg-vinke-navy text-white"
                  : e === "3"
                    ? "border-[1.5px] border-dashed border-[#F0A63A] text-vinke-ink2"
                    : "border-[1.5px] border-vinke-line text-vinke-ink3")
            }
          >
            {i + 1}
          </span>
        ))}
      </div>
      <div className="flex flex-wrap gap-3 text-[10px] font-semibold text-vinke-ink3">
        <span><span className="text-vinke">■</span> respondida</span>
        <span><span className="text-vinke-navy">■</span> atual</span>
        <span><span className="text-[#F0A63A]">■</span> marcada</span>
        <span>□ vazia</span>
      </div>
    </div>
  );
}

function MockEvolucao() {
  const meses = [
    { m: "mai · 51%", h: 44, c: "bg-vinke-line2" },
    { m: "jun · 58%", h: 52, c: "bg-[#D9D1F7]" },
    { m: "jul · 65%", h: 60, c: "bg-[#B7A6F4]" },
    { m: "ago · 72%", h: 72, c: "bg-vinke" },
  ];
  return (
    <div className="flex w-full max-w-[480px] flex-col gap-3 rounded-2xl border border-vinke-line bg-white p-5 shadow-[0_18px_48px_rgba(11,10,33,0.08)]">
      <div className="flex items-center justify-between">
        <span className="font-display text-[13px] font-bold text-vinke-ink">Sua evolução</span>
        <span className="rounded-full bg-vinke-green-soft px-2.5 py-0.5 text-[10px] font-bold text-vinke-green-text">↑ +21 pts desde maio</span>
      </div>
      <div className="flex h-[90px] items-end gap-2.5">
        {meses.map((x) => (
          <div key={x.m} className="flex flex-1 flex-col items-center gap-1">
            <div className={`w-full rounded-t-[7px] ${x.c}`} style={{ height: `${x.h}px` }} />
            <span className="text-[9px] font-semibold text-vinke-ink3">{x.m}</span>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between rounded-[10px] bg-vinke-offwhite px-3 py-2.5">
        <span className="text-[11px] font-semibold text-vinke-ink2">Caderno de erros · 23 questões para revisar</span>
        <span className="text-[11px] font-bold text-vinke">Praticar →</span>
      </div>
    </div>
  );
}

function MockEstudoHoje() {
  return (
    <div className="flex w-full max-w-[480px] flex-col gap-2.5 rounded-2xl border border-vinke-line bg-white p-5 shadow-[0_18px_48px_rgba(11,10,33,0.08)]">
      <div className="flex items-center justify-between">
        <span className="font-display text-[13px] font-bold text-vinke-ink">Estudo de hoje</span>
        <span className="rounded-full border border-vinke-line px-2.5 py-1 text-[10px] font-bold text-vinke-ink">⚡ 12 dias de sequência</span>
      </div>
      <div className="flex items-center gap-3 rounded-[11px] border-[1.5px] border-vinke px-3 py-2.5">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-vinke-soft font-display text-[9px] font-bold text-vinke">14/20</span>
        <div className="flex min-w-0 flex-1 flex-col">
          <span className="text-xs font-bold text-vinke-ink">20 questões de Matemática</span>
          <span className="text-[10px] text-vinke-ink3">montado com seus erros recentes</span>
        </div>
        <span className="rounded-lg bg-vinke px-3 py-1.5 text-[10px] font-bold text-white">Continuar</span>
      </div>
      <div className="flex items-center gap-3 rounded-[11px] border-[1.5px] border-vinke-line px-3 py-2.5">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-vinke-green-soft font-display text-sm font-bold text-vinke-green-text">✓</span>
        <div className="flex min-w-0 flex-1 flex-col">
          <span className="text-xs font-bold text-vinke-ink3 line-through">30 flashcards</span>
          <span className="text-[10px] font-medium text-vinke-green-text">concluído — 26/30 de primeira</span>
        </div>
      </div>
      <div className="flex items-center gap-3 rounded-[11px] border-[1.5px] border-vinke-line px-3 py-2.5">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-vinke-line2 font-display text-[11px] font-bold text-vinke-ink2">2&apos;</span>
        <div className="flex min-w-0 flex-1 flex-col">
          <span className="text-xs font-bold text-vinke-ink">Questão do dia · Geografia</span>
          <span className="text-[10px] text-vinke-ink3">vale pela sequência</span>
        </div>
      </div>
    </div>
  );
}

export function Recursos() {
  const blocos = [
    {
      titulo: "Questões oficiais",
      texto:
        "Todas as provas do ENEM, com filtros por área, disciplina e assunto. Errou? A resolução comentada explica o caminho — não só o gabarito.",
      mock: <MockQuestao />,
      invert: false,
    },
    {
      titulo: "Simulados do seu jeito",
      texto:
        "Monte por ano, área e assunto. 45 questões = uma área inteira. 90 = um dia de prova. Mapa da prova, cronômetro e correção na hora, como no dia oficial.",
      mock: <MockSimulado />,
      invert: true,
    },
    {
      titulo: "Seus dados trabalhando por você",
      texto:
        "Desempenho por área, evolução mês a mês e um caderno de erros que se preenche sozinho. Você nunca mais estuda no escuro.",
      mock: <MockEvolucao />,
      invert: false,
    },
    {
      titulo: "Plano diário que se adapta",
      texto:
        "Metas de questões e flashcards, todo dia. Sua sequência de dias vira motivação — e o plano sempre prioriza seu ponto fraco da semana.",
      mock: <MockEstudoHoje />,
      invert: true,
    },
  ];
  return (
    <section id="recursos" className="py-16 lg:py-[88px]">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-12 px-5 lg:gap-14 lg:px-8">
        <div className="flex flex-col gap-2">
          <span className="text-xs font-bold tracking-[0.14em] text-vinke">RECURSOS</span>
          <h2 className="font-display text-3xl font-bold text-vinke-ink sm:text-[38px]">
            Tudo que sobe nota. Nada que enrola.
          </h2>
        </div>
        {blocos.map((b) => (
          <div
            key={b.titulo}
            className={
              "flex flex-col items-center gap-8 lg:gap-14 " +
              (b.invert ? "lg:flex-row-reverse" : "lg:flex-row")
            }
          >
            <div className="flex flex-1 flex-col gap-3">
              <h3 className="font-display text-2xl font-bold text-vinke-ink sm:text-[26px]">{b.titulo}</h3>
              <p className="max-w-[480px] text-[15px] leading-relaxed text-vinke-ink2">{b.texto}</p>
            </div>
            {b.mock}
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Como funciona ───────────────────────────────────────────────────────────

export function ComoFunciona() {
  const passos = [
    {
      n: "1",
      t: "Crie a conta e responda o diagnóstico",
      d: "10 questões para o VINKE conhecer seu nível em cada área. Leva 10 minutos.",
      check: false,
    },
    {
      n: "2",
      t: "Siga o plano diário",
      d: "Questões, flashcards e minutos de estudo, calibrados no que você mais erra.",
      check: false,
    },
    {
      n: "3",
      t: "Veja a nota subir nos simulados",
      d: "Cada simulado atualiza sua taxa de acerto em cada área. Evolução que dá pra ver.",
      check: true,
    },
  ];
  return (
    <section id="como-funciona" className="bg-vinke-navy py-16 lg:py-[88px]">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-10 px-5 lg:px-8">
        <div className="flex flex-col gap-2">
          <span className="text-xs font-bold tracking-[0.14em] text-vinke-lav">COMO FUNCIONA</span>
          <h2 className="font-display text-3xl font-bold text-white sm:text-[38px]">
            Três passos. Sem enrolação.
          </h2>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {passos.map((p) => (
            <div key={p.n} className="flex flex-col gap-3 rounded-2xl bg-[#1B1932] p-7">
              <div className="flex items-baseline gap-2.5">
                <span className="font-display text-4xl font-bold text-vinke-lav">{p.n}</span>
                {p.check ? <VinkeSymbol size={24} className="text-vinke-green" /> : null}
              </div>
              <span className="font-display text-lg font-bold text-white">{p.t}</span>
              <span className="text-[13px] leading-relaxed text-vinke-ink3">{p.d}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Depoimentos ─────────────────────────────────────────────────────────────

export function Depoimentos() {
  return (
    <section className="bg-white py-16 lg:py-[88px]">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-9 px-5 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-2">
          <h2 className="font-display text-3xl font-bold text-vinke-ink sm:text-[38px]">Quem treina, sobe.</h2>
          <span className="text-[11px] font-medium text-vinke-ink4">
            depoimentos ilustrativos — em breve, histórias reais de alunos
          </span>
        </div>
        <div className="grid gap-5 lg:grid-cols-[1.3fr_1fr_1fr]">
          <div className="flex flex-col justify-between gap-4 rounded-2xl bg-vinke-navy p-7">
            <p className="font-display text-xl font-bold leading-snug text-white sm:text-[22px]">
              &ldquo;Comecei acertando metade. Três meses depois, 72%.&rdquo;
            </p>
            <div className="flex flex-wrap items-baseline gap-2">
              <span className="font-display text-3xl font-bold text-white">51% → 72%</span>
              <span className="rounded-full bg-vinke-green-soft px-2.5 py-1 text-xs font-bold text-vinke-green-text">↑ +21 pts</span>
            </div>
            <Pessoa dark nome="[Nome do aluno]" info="São Paulo · quer Medicina" letra="M" />
          </div>
          <div className="flex flex-col gap-5">
            <Depo texto="[Depoimento — o plano diário me fez estudar todo dia sem pensar no que estudar.]" nome="[Nome]" info="Recife · quer Direito" letra="A" />
            <Depo texto="[Depoimento — resolver as provas antigas com resolução comentada mudou meu jeito de estudar.]" nome="[Nome]" info="Belo Horizonte · quer Engenharia" letra="L" />
          </div>
          <Depo texto="[Depoimento — estudo no ônibus pelo celular. O caderno de erros virou minha rotina de revisão.]" nome="[Nome]" info="Fortaleza · quer Psicologia" letra="J" alta />
        </div>
      </div>
    </section>
  );
}

function Pessoa({ nome, info, letra, dark }: { nome: string; info: string; letra: string; dark?: boolean }) {
  return (
    <div className="flex items-center gap-2.5">
      <span
        className={
          "flex h-9 w-9 items-center justify-center rounded-full font-display text-[13px] font-bold " +
          (dark ? "bg-[#1B1932] text-vinke-ink3" : "bg-vinke-line2 text-vinke-ink3")
        }
      >
        {letra}
      </span>
      <div className="flex flex-col">
        <span className={"text-[13px] font-bold " + (dark ? "text-white" : "text-vinke-ink")}>{nome}</span>
        <span className="text-[11px] font-medium text-vinke-ink3">{info}</span>
      </div>
    </div>
  );
}

function Depo({ texto, nome, info, letra, alta }: { texto: string; nome: string; info: string; letra: string; alta?: boolean }) {
  return (
    <div className={"flex flex-col justify-between gap-3 rounded-2xl border-[1.5px] border-vinke-line p-6 " + (alta ? "" : "flex-1")}>
      <p className="text-[13px] leading-relaxed text-vinke-ink2">&ldquo;{texto}&rdquo;</p>
      <Pessoa nome={nome} info={info} letra={letra} />
    </div>
  );
}

// ─── Planos ──────────────────────────────────────────────────────────────────

export function Planos() {
  return (
    <section id="planos" className="py-16 lg:py-[88px]">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-9 px-5 lg:px-8">
        <div className="flex flex-col items-center gap-2 text-center">
          <span className="text-xs font-bold tracking-[0.14em] text-vinke">PLANOS</span>
          <h2 className="font-display text-3xl font-bold text-vinke-ink sm:text-[38px]">
            Menos que um lanche por semana.
          </h2>
        </div>
        <div className="flex flex-col items-stretch justify-center gap-5 lg:flex-row">
          {/* Gratuito */}
          <div className="flex w-full flex-col gap-3.5 rounded-[18px] border-[1.5px] border-vinke-line bg-white p-7 lg:w-[300px]">
            <span className="font-display text-base font-bold text-vinke-ink">Gratuito</span>
            <span className="font-display text-4xl font-bold text-vinke-ink">R$ 0</span>
            <span className="text-xs font-medium text-vinke-ink3">Para conhecer o treino.</span>
            <div className="flex flex-col gap-2 text-[13px] font-medium text-vinke-ink2">
              <span>✓ 10 questões por dia</span>
              <span>✓ 1 simulado por mês</span>
              <span>✓ Questão do dia e sequência</span>
              <span className="text-vinke-ink4">✗ Plano diário adaptativo</span>
              <span className="text-vinke-ink4">✗ Caderno de erros</span>
            </div>
            <Link
              href={COMECAR}
              className="mt-auto rounded-[10px] border-[1.5px] border-vinke-line py-3 text-center text-[13px] font-bold text-vinke-ink transition hover:bg-vinke-offwhite"
            >
              Começar grátis
            </Link>
          </div>
          {/* Mensal */}
          <div className="flex w-full flex-col gap-3.5 rounded-[18px] border-[1.5px] border-vinke-line bg-white p-7 lg:w-[300px]">
            <span className="font-display text-base font-bold text-vinke-ink">Mensal</span>
            <div className="flex items-baseline gap-1">
              <span className="font-display text-4xl font-bold text-vinke-ink">R$ 49,90</span>
              <span className="text-[13px] font-semibold text-vinke-ink3">/mês</span>
            </div>
            <span className="text-xs font-medium text-vinke-ink3">Tudo liberado, mês a mês.</span>
            <div className="flex flex-col gap-2 text-[13px] font-medium text-vinke-ink2">
              <span>✓ Questões e simulados ilimitados</span>
              <span>✓ Plano diário adaptativo</span>
              <span>✓ Caderno de erros e flashcards</span>
              <span>✓ Todos os seus dados</span>
            </div>
            <Link
              href={COMECAR}
              className="mt-auto rounded-[10px] border-[1.5px] border-vinke py-3 text-center text-[13px] font-bold text-vinke transition hover:bg-vinke-soft"
            >
              Assinar Mensal
            </Link>
          </div>
          {/* Anual */}
          <div className="relative flex w-full flex-col gap-3.5 rounded-[18px] bg-vinke-navy p-7 shadow-[0_24px_60px_rgba(11,10,33,0.25)] lg:w-[300px]">
            <span className="absolute -top-3 left-7 rounded-full bg-vinke px-3 py-1 text-[10px] font-bold tracking-[0.08em] text-white">
              MAIS ESCOLHIDO
            </span>
            <span className="font-display text-base font-bold text-white">Anual</span>
            <div className="flex items-baseline gap-1">
              <span className="font-display text-4xl font-bold text-white">R$ 29,90</span>
              <span className="text-[13px] font-semibold text-vinke-ink3">/mês</span>
            </div>
            <span className="text-xs font-medium text-vinke-ink3">
              Cobrado R$ 358,80/ano · economia de 40% vs. mensal.
            </span>
            <div className="flex flex-col gap-2 text-[13px] font-medium text-[#C9C5E2]">
              <span>✓ Tudo do Mensal</span>
              <span>✓ Preço travado até o ENEM</span>
              <span>✓ Prioridade em novos recursos</span>
            </div>
            <Link
              href={COMECAR}
              className="mt-auto rounded-[10px] bg-vinke py-3 text-center text-[13px] font-bold text-white transition hover:bg-vinke-deep"
            >
              Assinar Anual
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 text-xs font-semibold text-vinke-ink2 sm:flex-row sm:gap-6">
          <span className="flex items-center gap-2">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-vinke-soft text-[11px] font-bold text-vinke">7</span>
            Garantia de 7 dias — devolvemos tudo, sem pergunta
          </span>
          <span className="flex items-center gap-2">
            <span className="text-vinke">✓</span>
            Cancele quando quiser, direto no app
          </span>
        </div>
      </div>
    </section>
  );
}

// ─── CTA final ───────────────────────────────────────────────────────────────

export function CtaFinal() {
  const { dias } = proximoEnem();
  return (
    <section className="bg-vinke-navy px-5 py-20 lg:py-[96px]">
      <div className="mx-auto flex max-w-[680px] flex-col items-center gap-5 text-center">
        <VinkeSymbol size={44} />
        <h2 className="font-display text-[32px] font-bold leading-tight text-white sm:text-[46px]">
          Faltam <span className="text-vinke-lav">{dias} dias</span> para o ENEM. Comece hoje.
        </h2>
        <p className="text-[15px] font-medium text-vinke-ink3">
          Cada dia de treino conta. O diagnóstico leva 10 minutos.
        </p>
        <Link
          href={COMECAR}
          className="rounded-xl bg-vinke px-9 py-4 text-base font-bold text-white transition hover:bg-vinke-deep"
        >
          Começar agora — grátis
        </Link>
      </div>
    </section>
  );
}

// ─── Rodapé ──────────────────────────────────────────────────────────────────

export function Footer() {
  return (
    <footer className="border-t border-[#1B1932] bg-vinke-navy px-5 py-9">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <VinkeSymbol size={18} />
            <span className="font-display text-[15px] font-bold text-white">VINKE</span>
          </div>
          <span className="text-[10px] font-medium text-[#5D5A72]">
            VINKE Educação · CNPJ em registro
          </span>
        </div>
        <div className="flex gap-6 text-xs font-semibold text-vinke-ink3">
          <a href="/termos" className="transition hover:text-white">Termos de uso</a>
          <a href="/privacidade" className="transition hover:text-white">Privacidade</a>
          <a href="mailto:suporte@vinke.app.br" className="transition hover:text-white">Suporte</a>
        </div>
        <div className="flex gap-4 text-xs font-semibold text-vinke-ink3">
          <span>Instagram</span>
          <span>TikTok</span>
          <span>YouTube</span>
        </div>
      </div>
    </footer>
  );
}

// ─── CTA fixo mobile ─────────────────────────────────────────────────────────

export function StickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-vinke-line bg-white/95 p-3 pb-[max(env(safe-area-inset-bottom),12px)] backdrop-blur lg:hidden">
      <Link
        href={COMECAR}
        className="block rounded-xl bg-vinke py-3.5 text-center text-[15px] font-bold text-white"
      >
        Começar agora — grátis
      </Link>
    </div>
  );
}
