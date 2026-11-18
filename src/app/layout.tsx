import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import MetaPixel from "@/components/MetaPixel";
import CapturaOrigem from "@/components/CapturaOrigem";
import "./globals.css";

const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({ variable: "--font-space-grotesk", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vinke — Preparação para o ENEM 2027 com questões oficiais resolvidas",
  description:
    "Mais de 4.000 questões oficiais do ENEM (2009 a 2026), incluindo a prova de 2026, todas com resolução comentada. Simulados no formato da prova e um plano diário que prioriza o que você mais erra.",
  icons: {
    icon: [{ url: "/logo-icon.png", type: "image/png" }],
    shortcut: "/logo-icon.png",
    apple: "/logo-icon.png",
  },
  openGraph: {
    title: "Vinke — a turma do ENEM 2027 começa agora",
    description:
      "ENEM 2026 resolvido e comentado, mais de 4.000 questões oficiais, simulados e um plano diário que prioriza o que você mais erra.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${manrope.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        {children}
        <Analytics />
        <MetaPixel />
        <CapturaOrigem />
      </body>
    </html>
  );
}
