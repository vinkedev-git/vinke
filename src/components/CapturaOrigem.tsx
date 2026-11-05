"use client";

import { useEffect } from "react";

// Guarda de onde o visitante veio (utm_*, clid de anúncio, site de origem) num
// cookie PRÓPRIO no domínio .vinke.app.br, para o cadastro em
// aluno.vinke.app.br gravar a origem no perfil. Regra:
//  - visita com utm/clid: sobrescreve (último clique de campanha vale);
//  - visita sem utm e sem cookie: grava o site de origem (ou "direto");
//  - visita sem utm com cookie: não mexe.
// Mesmo formato lido por vinke-aluno/src/lib/origem.ts.
export const COOKIE_ORIGEM = "vk_origem";
const UTM = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"] as const;
const NOVENTA_DIAS = 90 * 24 * 3600;

function lerCookie(nome: string): string | null {
  const m = document.cookie.match(new RegExp(`(?:^|; )${nome}=([^;]*)`));
  return m ? decodeURIComponent(m[1]) : null;
}

export default function CapturaOrigem() {
  useEffect(() => {
    try {
      const q = new URLSearchParams(window.location.search);
      const dados: Record<string, string> = {};
      for (const k of UTM) {
        const v = q.get(k);
        if (v) dados[k] = v.slice(0, 120);
      }
      if (q.get("fbclid")) dados.clid = "fbclid";
      else if (q.get("gclid")) dados.clid = "gclid";
      const temCampanha = Object.keys(dados).length > 0;
      if (!temCampanha && lerCookie(COOKIE_ORIGEM)) return;

      let ref = "direto";
      try {
        if (document.referrer) {
          const h = new URL(document.referrer).hostname;
          if (!h.endsWith("vinke.app.br")) ref = h;
        }
      } catch {}
      const valor = {
        ...dados,
        referrer: ref,
        landing: window.location.pathname.slice(0, 120),
        em: new Date().toISOString(),
      };
      const dominio = window.location.hostname.endsWith("vinke.app.br") ? "; domain=.vinke.app.br" : "";
      document.cookie = `${COOKIE_ORIGEM}=${encodeURIComponent(JSON.stringify(valor))}; path=/; max-age=${NOVENTA_DIAS}; SameSite=Lax${dominio}`;
    } catch {
      // origem é best-effort: nunca quebra a página
    }
  }, []);
  return null;
}
