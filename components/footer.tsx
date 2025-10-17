import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-black border-t border-primary/30 py-12 w-full">
      <div className="container mx-auto max-w-[1220px] px-4">
        {/* Mobile Layout */}
        <div className="block md:hidden space-y-8">
          <div className="text-center">
            <Link href="/" className="inline-flex items-center gap-3 hover:opacity-80 transition-opacity">
              <Image src="/favicon.ico" alt="Logo" width={32} height={32} />
              <h1 className="text-base font-bold">
                <span className="text-primary">Melhores PT Sites de Casinos</span>
              </h1>
            </Link>
          </div>

          {/* 18+ Warning */}
          <div className="flex items-center justify-center gap-4 p-6">
            <div className="w-16 h-16 bg-accent flex items-center justify-center">
              <span className="text-black font-bold text-xl">18+</span>
            </div>
            <div className="text-left">
              <p className="text-accent font-bold text-base">Jogo Responsável</p>
              <p className="text-white text-sm">Proibido a menores</p>
            </div>
          </div>

          <div className="text-center space-y-3">
            <Link href="/politica-privacidade" className="block text-white hover:text-primary transition-colors">
              Política de Privacidade
            </Link>
            <Link href="/politica-cookies" className="block text-white hover:text-primary transition-colors">
              Política de Cookies
            </Link>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-3 md:gap-8 md:items-start">
          {/* Left: Logo and Description */}
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center gap-3 hover:opacity-80 transition-opacity">
              <Image src="/favicon.ico" alt="Logo" width={40} height={40} />
              <h1 className="text-xl font-bold">
                <span className="text-primary">Melhores PT Sites de Casinos</span>
              </h1>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Comparador independente de casinos online licenciados em Portugal
            </p>
          </div>

          {/* Center: Links */}
          <div className="space-y-4">
            <h3 className="text-primary font-bold text-lg">Informações Legais</h3>
            <div className="space-y-2">
              <Link href="/politica-privacidade" className="block text-white hover:text-primary transition-colors">
                Política de Privacidade
              </Link>
              <Link href="/politica-cookies" className="block text-white hover:text-primary transition-colors">
                Política de Cookies
              </Link>
            </div>
          </div>

          {/* Right: 18+ Warning */}
          <div className="flex flex-col items-center gap-4 p-6">
            <div className="w-20 h-20 bg-accent flex items-center justify-center">
              <span className="text-black font-bold text-2xl">18+</span>
            </div>
            <div className="text-center">
              <p className="text-accent font-bold text-lg">Jogo Responsável</p>
              <p className="text-white text-sm mt-1">Proibido a menores</p>
              <p className="text-gray-400 text-xs mt-2">O jogo pode causar dependência</p>
            </div>
          </div>
        </div>

        {/* Support Organizations Section */}
        <div className="mt-12 pt-8 border-t border-primary/30">
          <h4 className="text-center font-bold mb-6 text-base text-gray-400">Organizações de Apoio</h4>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <Link
              href="https://www.srij.turismodeportugal.pt"
              target="_blank"
              className=" hover:bg-gray-100 p-4 flex items-center justify-center transition-colors"
            >
              <img src="/srij.svg" alt="SRIJ" className="h-10 md:h-12 w-auto object-contain" />
            </Link>

            <Link
              href="https://www.sicad.pt"
              target="_blank"
              className=" hover:bg-gray-100 p-4 flex items-center justify-center transition-colors"
            >
              <img src="/icad.png" alt="SICAD" className="h-10 md:h-12 w-auto object-contain" />
            </Link>
            <Link
              href="https://www.jogoresponsavel.pt"
              target="_blank"
              className="hover:bg-card p-4 flex items-center justify-center transition-colors col-span-2 md:col-span-1"
            >
              <img src="/jogo2.png" alt="Jogo Responsável" className="h-10 md:h-12 w-auto object-contain" />
            </Link>
            <Link
              href="https://www.gamcare.org.uk"
              target="_blank"
              className="bg-white/80 hover:bg-gray-100 p-4 flex items-center justify-center transition-colors"
            >
              <img src="/gamecare.svg" alt="GamCare" className="h-10 md:h-12 w-auto object-contain" />
            </Link>

            <Link
              href="https://www.gambleaware.org"
              target="_blank"
              className="bg-white/80 hover:bg-gray-100 p-4 flex items-center justify-center transition-colors"
            >
              <img src="/gamble.webp" alt="GambleAware" className="h-10 md:h-12 w-auto object-contain" />
            </Link>


          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-primary/30 mt-12 pt-8 text-center">
          <p className="text-primary font-bold text-lg mb-3">&copy; 2025 melhoresptsitesdecasinos.com</p>
          <div className="inline-block px-8 py-4 mt-4">
            <p className="text-accent font-bold text-sm">Apenas para maiores de 18 anos</p>
            <p className="text-gray-400 text-xs mt-1">O jogo pode causar dependência</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
