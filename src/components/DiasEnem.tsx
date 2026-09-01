"use client";

import { useEffect, useState } from "react";
import { proximoEnem } from "@/lib/enem";

// Renderiza a contagem no navegador do visitante, para o número nunca ficar
// congelado no valor do dia do build. Re-checa de hora em hora (pega a virada
// da meia-noite em quem deixa a aba aberta).
export default function DiasEnem() {
  const [dias, setDias] = useState(() => proximoEnem().dias);

  useEffect(() => {
    setDias(proximoEnem().dias);
    const id = setInterval(() => setDias(proximoEnem().dias), 60 * 60 * 1000);
    return () => clearInterval(id);
  }, []);

  return <span suppressHydrationWarning>{dias}</span>;
}
