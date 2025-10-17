"use client"

import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { BettingSite } from "@/lib/mock-data"
import { StarRating } from "./star-rating"
import { useEffect, useState } from "react"
import { bettingSites } from "@/lib/mock-data"

interface CasinoModalProps {
  site?: BettingSite
  rank?: number
  isOpen?: boolean
  onClose?: () => void
}

export function CasinoModal({ site: propSite, rank: propRank, isOpen: propIsOpen = false, onClose }: CasinoModalProps) {
  const [internalOpen, setInternalOpen] = useState(false)
  const [autoOpenSite, setAutoOpenSite] = useState<BettingSite | null>(null)

  // Auto-open after 10 seconds if no site prop provided
  useEffect(() => {
    if (!propSite) {
      const hasShown = sessionStorage.getItem("promo-modal-shown")
      if (!hasShown) {
        const timer = setTimeout(() => {
          setAutoOpenSite(bettingSites[0])
          setInternalOpen(true)
          sessionStorage.setItem("promo-modal-shown", "true")
        }, 10000)
        return () => clearTimeout(timer)
      }
    }
  }, [propSite])

  // Sync with prop when controlled
  useEffect(() => {
    if (propSite) {
      setInternalOpen(propIsOpen)
    }
  }, [propIsOpen, propSite])

  const handleClose = () => {
    setInternalOpen(false)
    setAutoOpenSite(null)
    onClose?.()
  }

  const site = propSite || autoOpenSite
  const rank = propRank || 1

  if (!internalOpen || !site) return null

  const isFirstItem = rank === 1

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80" onClick={handleClose} />

      <div className="relative z-10 w-full max-w-md">
        <button
          onClick={handleClose}
          className="absolute -right-3 -top-3 z-20 rounded-full p-2 bg-[#D4AF37] hover:bg-[#B8941F] transition-colors shadow-lg border-2 border-black"
        >
          <X className="w-5 h-5 text-black" />
        </button>

        <div className="rounded-none border-4 border-[#D4AF37] bg-black shadow-2xl">
          <div className="bg-[#D4AF37] py-4 px-6 border-b-4 border-black">
            <h2 className="text-black text-2xl font-bold text-center uppercase tracking-wider">Melhor Escolha</h2>
          </div>

          <div className="p-6">
            <div className="flex flex-col items-center gap-4">
              <div className="flex-shrink-0 bg-white rounded-none p-3 border-2 border-[#D4AF37]">
                <img
                  src={site.logo || "/placeholder.svg"}
                  alt={site.name}
                  className="w-[160px] h-[80px] object-contain"
                />
              </div>

              <div className="text-center w-full border-t-2 border-b-2 border-[#D4AF37] py-3">
                <div className="text-[#D4AF37] font-bold mb-1 text-base uppercase tracking-wide">Bónus</div>
                <p className="text-white font-semibold leading-tight text-2xl">{site.bonus}</p>
              </div>

              <div className="text-center w-full">
                <div className="text-2xl font-bold text-[#D4AF37] mb-1">
                  {site.rating.toFixed(1)}
                  <span className="text-sm text-gray-400">/10</span>
                </div>
                <div className="flex items-center justify-center mb-1">
                  <StarRating rating={site.rating / 2} size="md" showHover />
                </div>
                <div className="text-gray-400 text-xs">({site.reviews} avaliações)</div>
              </div>

              <div className="w-full">
                <Button
                  onClick={(e) => {
                    e.stopPropagation()
                    window.open(site.url, "_blank")
                  }}
                  className="w-full bg-[#228B22] hover:bg-[#1a6b1a] text-white font-bold px-6 py-3 text-base uppercase tracking-wide border-2 border-[#228B22] rounded-none"
                >
                  Jogar Agora
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
