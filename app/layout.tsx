import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Crimson_Text } from "next/font/google"
import "./globals.css"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"
import { CasinoModal } from "@/components/casino-modal"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800"],
})

const crimson = Crimson_Text({
  subsets: ["latin"],
  variable: "--font-crimson",
  weight: ["400", "600", "700"],
})

export const metadata: Metadata = {
  title: "Melhores PT Sites de Casinos - Top Ranking Portugal 2025",
  description:
    "Top ranking dos melhores sites de casino em Portugal. Avaliações detalhadas, comparações de bónus e análise de segurança para escolher a plataforma ideal.",
  keywords: "casinos Portugal, sites de casino, ranking casinos, avaliações casino, bónus casino, SRIJ",
  openGraph: {
    title: "Melhores PT Sites de Casinos - Top Ranking Portugal 2025",
    description: "Top ranking dos melhores sites de casino em Portugal. Avaliações detalhadas e comparações.",
    url: "https://melhoresptsitesdecasinos.com",
    siteName: "Melhores PT Sites de Casinos",
    locale: "pt_PT",
    type: "website",
  },
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt" className={`${playfair.variable} ${crimson.variable}`}>
      <body className="font-sans">
        <div className="min-h-screen w-full">
          {children}
          <Footer />
          <CookieBanner />
          <CasinoModal />
        </div>
      </body>
    </html>
  )
}
