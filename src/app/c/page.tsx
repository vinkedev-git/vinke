// Variante para campanha paga: sem navegação, foco total em conversão.
import {
  Hero,
  Numeros,
  Problema,
  Planos,
  CtaFinal,
  Footer,
  StickyCta,
} from "@/components/sections";

export default function CampanhaPage() {
  return (
    <div className="pb-16 lg:pb-0">
      <Hero campanha />
      <Numeros />
      <Problema />
      <Planos />
      <CtaFinal />
      <Footer />
      <StickyCta />
    </div>
  );
}
