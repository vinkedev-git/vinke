import {
  Nav,
  Hero,
  TrustStrip,
  Numeros,
  Problema,
  Recursos,
  Ciclo,
  ComoFunciona,
  Demonstracao,
  Planos,
  CtaFinal,
  Footer,
  StickyCta,
} from "@/components/sections";
import Faq from "@/components/Faq";

export default function LandingPage() {
  return (
    <div className="pb-16 lg:pb-0">
      <Nav />
      <Hero />
      <TrustStrip />
      <Numeros />
      <Problema />
      <Recursos />
      <Ciclo />
      <ComoFunciona />
      <Demonstracao />
      <Planos />
      <Faq />
      <CtaFinal />
      <Footer />
      <StickyCta />
    </div>
  );
}
