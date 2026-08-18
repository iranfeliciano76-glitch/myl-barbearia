import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"

const haasDisplay = localFont({
  src: [
    { path: "./fonts/NeueHaasGrotDisp-45Light-Trial.otf",  weight: "300", style: "normal" },
    { path: "./fonts/NeueHaasGrotDisp-55Roman-Trial.otf",  weight: "400", style: "normal" },
    { path: "./fonts/NeueHaasGrotDisp-65Medium-Trial.otf", weight: "500", style: "normal" },
    { path: "./fonts/NeueHaasGrotDisp-75Bold-Trial.otf",   weight: "700", style: "normal" },
    { path: "./fonts/NeueHaasGrotDisp-95Black-Trial.otf",  weight: "900", style: "normal" },
  ],
  variable: "--font-haas",
  display: "swap",
})

const lato = localFont({
  src: [
    { path: "./fonts/Lato-Thin.ttf",    weight: "100", style: "normal" },
    { path: "./fonts/Lato-Light.ttf",   weight: "300", style: "normal" },
    { path: "./fonts/Lato-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/Lato-Bold.ttf",    weight: "700", style: "normal" },
    { path: "./fonts/Lato-Black.ttf",   weight: "900", style: "normal" },
  ],
  variable: "--font-lato",
  display: "swap",
})

export const metadata: Metadata = {
  title: "MYL Barber Clinic | Calhau, São Luís - MA",
  description:
    "MYL Barber Clinic — Barbearia premium, SPA, massagem e terapia capilar no Calhau, São Luís - MA. Excelência que transforma.",
  keywords: [
    "barbearia São Luís",
    "barbearia Calhau",
    "barber clinic",
    "MYL Barbearia",
    "spa masculino",
    "terapia capilar São Luís",
    "barbearia premium Maranhão",
  ],
  icons: {
    icon: "/logo-myl.jpg",
    shortcut: "/logo-myl.jpg",
    apple: "/logo-myl.jpg",
  },
  openGraph: {
    title: "MYL Barber Clinic",
    description: "Barbearia premium, SPA e terapia capilar no Calhau, São Luís - MA.",
    locale: "pt_BR",
    type: "website",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${haasDisplay.variable} ${lato.variable}`}>
      <body className="bg-[#1c1208] text-[#f2f1f0] font-[family-name:var(--font-lato)]">
        {children}
      </body>
    </html>
  )
}
