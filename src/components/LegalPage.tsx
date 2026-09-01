import type { ReactNode } from "react";
import { Nav, Footer } from "@/components/sections";

// Casca comum das páginas de documento (termos, privacidade).
export function LegalShell({
  titulo,
  atualizado,
  children,
}: {
  titulo: string;
  atualizado: string;
  children: ReactNode;
}) {
  return (
    <div className="bg-vinke-offwhite">
      <Nav />
      <main className="mx-auto max-w-[760px] px-5 py-14 lg:py-20">
        <h1 className="font-display text-3xl font-bold leading-tight text-vinke-ink sm:text-[40px]">
          {titulo}
        </h1>
        <p className="mt-3 text-xs font-semibold text-vinke-ink3">Última atualização: {atualizado}</p>
        <div className="mt-10 flex flex-col gap-9">{children}</div>
      </main>
      <Footer />
    </div>
  );
}

export function Secao({ titulo, children }: { titulo: string; children: ReactNode }) {
  return (
    <section className="flex flex-col gap-3">
      <h2 className="font-display text-xl font-bold text-vinke-ink">{titulo}</h2>
      {children}
    </section>
  );
}

export function P({ children }: { children: ReactNode }) {
  return <p className="text-[15px] leading-relaxed text-vinke-ink2">{children}</p>;
}

export function Lista({ itens }: { itens: ReactNode[] }) {
  return (
    <ul className="flex flex-col gap-2">
      {itens.map((item, i) => (
        <li key={i} className="flex items-start gap-2.5 text-[15px] leading-relaxed text-vinke-ink2">
          <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-vinke" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function Destaque({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-xl bg-vinke-soft px-5 py-4 text-[14px] font-semibold leading-relaxed text-vinke-ink">
      {children}
    </div>
  );
}
