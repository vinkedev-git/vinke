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

// O contador de dias para o ENEM é renderizado no servidor; sem isto o HTML
// estático congela no número do dia do build (o componente client às vezes
// não hidrata e não corrige o valor). Regenera de hora em hora.
export const revalidate = 3600;

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
