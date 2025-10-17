"use client"

import { Button } from "@/components/ui/button"
import type { BettingSite } from "@/lib/mock-data"
import { StarRating } from "./star-rating"

interface CasinoSiteCardProps {
  site: BettingSite
  rank: number
}

export function CasinoSiteCard({ site, rank }: CasinoSiteCardProps) {
  const isFirstItem = rank === 1

  const handleCardClick = () => {
    window.open(site.url, "_blank")
  }

  return (
    <div className="relative">
      {site.badge && (
        <div className="absolute -top-4 left-6 z-30">
          <div className="bg-primary text-black px-6 py-3 border-2 border-primary">
            <span className="text-xs font-bold uppercase tracking-wider">{site.badge}</span>
          </div>
        </div>
      )}

      <div onClick={handleCardClick} className="block group cursor-pointer">
        <div
          className={`relative p-6 transition-all duration-300 group-hover:scale-[1.01] bg-card ${
            isFirstItem ? "border-4 border-primary hover:border-primary" : "border-3 border-muted hover:border-primary"
          }`}
        >
          <div className="relative z-10">
            {/* Desktop and Tablet Layout */}
            <div className="hidden md:flex md:items-center md:gap-6 lg:gap-8 pt-4">
              <div
                className={`w-16 h-16 font-bold flex items-center justify-center text-2xl flex-shrink-0 border-4 ${
                  isFirstItem ? "bg-primary text-black border-primary" : "bg-muted text-primary border-primary"
                }`}
              >
                {rank}
              </div>

              <div className="flex-shrink-0 bg-black p-4 border-3 border-primary">
                <img
                  src={site.logo || "/placeholder.svg"}
                  alt={site.name}
                  className="w-[140px] h-[84px] lg:w-[160px] lg:h-[96px] object-contain"
                />
              </div>

              <div className="flex-1 text-center">
                <div className="text-secondary font-bold mb-2 text-lg uppercase tracking-wide border-b-2 border-secondary pb-1">
                  Bónus
                </div>
                <p className="text-white font-bold leading-tight text-xl">{site.bonus}</p>
              </div>

              <div className="text-center flex-shrink-0 border-3 border-primary p-4">
                <div className="text-3xl font-bold text-primary mb-2">
                  {site.rating.toFixed(1)}
                  <span className="text-sm text-muted-foreground">/10</span>
                </div>
                <div className="flex items-center justify-center mb-2">
                  <StarRating rating={site.rating / 2} size="md" showHover />
                </div>
                <div className="text-muted-foreground text-xs">({site.reviews})</div>
              </div>

              <div className="flex-shrink-0">
                <Button
                  onClick={(e) => {
                    e.stopPropagation()
                    window.open(site.url, "_blank")
                  }}
                  className="bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold px-8 py-4 text-base uppercase tracking-wide border-2 border-[#22c55e]"
                >
                  Jogar Agora
                </Button>
              </div>
            </div>

            {/* Mobile Layout */}
            <div className="md:hidden pt-4">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="flex-shrink-0 bg-black p-3 border-2 border-primary">
                  <img
                    src={site.logo || "/placeholder.svg"}
                    alt={site.name}
                    className="w-[120px] h-[72px] object-contain"
                  />
                </div>
              </div>

              <div className="text-center mb-4 border-2 border-secondary p-3">
                <div className="text-secondary font-bold text-sm mb-1 uppercase">Bónus</div>
                <p className="text-white font-bold leading-tight text-lg">{site.bonus}</p>
              </div>

              <div className="flex items-center justify-between mb-4 border-2 border-primary p-3">
                <div className="flex flex-col items-center">
                  <span className="text-primary font-bold text-2xl mb-1">
                    {site.rating.toFixed(1)}
                    <span className="text-sm text-muted-foreground">/10</span>
                  </span>
                  <StarRating rating={site.rating / 2} size="sm" showHover />
                </div>
                <div className="text-muted-foreground text-sm">({site.reviews})</div>
              </div>

              <Button
                onClick={(e) => {
                  e.stopPropagation()
                  window.open(site.url, "_blank")
                }}
                className="bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold w-full py-4 uppercase tracking-wide border-2 border-[#22c55e]"
              >
                Jogar Agora
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
