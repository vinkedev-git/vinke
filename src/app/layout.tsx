import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({ variable: "--font-space-grotesk", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vinke — Sua nota no ENEM começa a subir hoje",
  description:
    "Questões oficiais do ENEM, simulados no formato da prova e um plano diário que prioriza o que você mais erra. Treino de verdade, não videoaula.",
  icons: {
    icon: [{ url: "/logo-icon.png", type: "image/png" }],
    shortcut: "/logo-icon.png",
    apple: "/logo-icon.png",
  },
  openGraph: {
    title: "Vinke — preparação para o ENEM",
    description:
      "Questões oficiais, simulados e um plano diário que prioriza o que você mais erra.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${manrope.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
