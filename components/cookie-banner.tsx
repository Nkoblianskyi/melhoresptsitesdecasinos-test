"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent")
    if (!cookieConsent) {
      setIsVisible(false)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted")
    setIsVisible(false)
  }

  const rejectCookies = () => {
    localStorage.setItem("cookieConsent", "rejected")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-primary p-4 z-50 shadow-lg">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-foreground text-sm">
            Este site utiliza cookies para melhorar a sua experiência de navegação e fornecer funcionalidades
            personalizadas. Ao continuar a usar o nosso site, concorda com a nossa{" "}
            <Link href="/politica-privacidade" className="text-primary hover:underline font-semibold">
              Política de Privacidade
            </Link>{" "}
            e{" "}
            <Link href="/politica-cookies" className="text-primary hover:underline font-semibold">
              Política de Cookies
            </Link>
            . Pode gerir as suas preferências a qualquer momento.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button
            onClick={rejectCookies}
            variant="outline"
            size="sm"
            className="border-2 border-border text-foreground hover:bg-muted bg-transparent"
          >
            Recusar
          </Button>
          <Button onClick={acceptCookies} size="sm" className="bg-accent hover:bg-accent/90 text-white">
            Aceitar
          </Button>
        </div>
      </div>
    </div>
  )
}
