import type { ReactNode } from "react";
import Link from "next/link";
import { Nav, Footer, APP_URL } from "@/components/sections";

export const SITE_URL = "https://vinke.app.br";

export function QuestoesShell({ children }: { children: ReactNode }) {
  return (
    <div className="bg-vinke-offwhite">
      <Nav />
      <main className="mx-auto max-w-[880px] px-5 py-10 lg:py-14">{children}</main>
      <Footer />
    </div>
  );
}

export function Trilha({ itens }: { itens: Array<{ href?: string; label: string }> }) {
  return (
    <nav className="mb-6 flex flex-wrap items-center gap-1.5 text-xs font-semibold text-vinke-ink3">
      {itens.map((it, i) => (
        <span key={i} className="flex items-center gap-1.5">
          {i > 0 && <span aria-hidden>›</span>}
          {it.href ? (
            <Link href={it.href} className="transition hover:text-vinke">
              {it.label}
            </Link>
          ) : (
            <span className="text-vinke-ink2">{it.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}

export function CtaTreino({ contexto }: { contexto: string }) {
  return (
    <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-[18px] border-[1.5px] border-vinke bg-vinke-soft p-6 sm:flex-row sm:items-center">
      <div>
        <div className="font-display text-lg font-bold text-vinke-ink">
          Quer treinar {contexto} de verdade?
        </div>
        <div className="mt-1 text-sm font-medium text-vinke-ink2">
          Crie sua conta grátis: 10 questões por dia com correção na hora, simulados no formato da
          prova e estatísticas do seu desempenho.
        </div>
      </div>
      <a
        href={`${APP_URL}/aluno/cadastro`}
        className="shrink-0 rounded-[10px] bg-vinke px-6 py-3 text-[13px] font-bold text-white transition hover:bg-vinke-deep"
      >
        Começar grátis
      </a>
    </div>
  );
}

export function ListaLinks({
  itens,
}: {
  itens: Array<{ href: string; titulo: string; detalhe?: string }>;
}) {
  return (
    <ul className="grid gap-2.5 sm:grid-cols-2">
      {itens.map((it) => (
        <li key={it.href}>
          <Link
            href={it.href}
            className="flex items-baseline justify-between gap-3 rounded-[12px] border-[1.5px] border-vinke-line bg-white px-4 py-3 text-sm font-semibold text-vinke-ink transition hover:border-vinke hover:text-vinke"
          >
            <span>{it.titulo}</span>
            {it.detalhe && <span className="shrink-0 text-xs font-medium text-vinke-ink3">{it.detalhe}</span>}
          </Link>
        </li>
      ))}
    </ul>
  );
}

// Estilo compartilhado para HTML vindo do banco (enunciado/resolução)
export const PROSE =
  "text-[15px] leading-relaxed text-vinke-ink2 [&_p]:my-3 [&_strong]:font-bold [&_strong]:text-vinke-ink [&_ul]:my-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:my-3 [&_ol]:list-decimal [&_ol]:pl-5 [&_img]:my-3 [&_img]:max-w-full [&_img]:rounded-lg [&_table]:my-3 [&_table]:border-collapse [&_td]:border [&_td]:border-vinke-line [&_td]:px-2 [&_td]:py-1 [&_th]:border [&_th]:border-vinke-line [&_th]:px-2 [&_th]:py-1";
