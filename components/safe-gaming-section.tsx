export function SafeGamingSection() {
  return (
    <section className="py-16 px-4 w-full bg-black">
      <div className="container mx-auto max-w-[1220px]">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif text-white mb-3 border-b border-[#D4AF37] inline-block pb-2">
            Jogo Responsável
          </h2>
          <p className="text-white/60 text-sm mt-4">Jogue com responsabilidade e controle as suas apostas</p>
        </div>

        <div className="bg-zinc-900 border border-white/20 p-6 mb-10 text-center max-w-2xl mx-auto">
          <p className="text-white text-base mb-2">O jogo pode causar dependência</p>
          <p className="text-white/60 text-sm">Proibido para menores de 18 anos</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-10">
          <div>
            <h3 className="text-lg text-white mb-4">Jogo Saudável</h3>
            <ul className="space-y-2 text-white/60 text-sm">
              <li>• Estabeleça limites de tempo e dinheiro antes de jogar</li>
              <li>• Jogue apenas por diversão, não para ganhar dinheiro</li>
              <li>• Pare quando atingir o limite estabelecido</li>
              <li>• Nunca tente recuperar o dinheiro perdido</li>
              <li>• Faça pausas regulares durante o jogo</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg text-white mb-4">Sinais de Alerta</h3>
            <ul className="space-y-2 text-white/60 text-sm">
              <li>• Joga mais tempo ou mais dinheiro do que planeou</li>
              <li>• Esconde as suas perdas dos familiares</li>
              <li>• Negligencia o trabalho ou a família por causa do jogo</li>
              <li>• Sente ansiedade quando não está a jogar</li>
              <li>• Pede dinheiro emprestado para jogar</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 max-w-4xl mx-auto">
          <h3 className="text-lg text-white text-center mb-6">Onde Obter Ajuda</h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-zinc-900 p-4">
              <p className="text-white text-sm mb-1">Linha de Apoio</p>
              <p className="text-white/80 text-base font-bold">800 202 345</p>
              <p className="text-white/50 text-xs mt-1">Gratuito 24/7</p>
            </div>
            <div className="bg-zinc-900 p-4">
              <p className="text-white text-sm mb-1">Apoio Online</p>
              <p className="text-white/80 text-base font-bold">jogosantacruz.pt</p>
              <p className="text-white/50 text-xs mt-1">Ajuda anónima</p>
            </div>
            <div className="bg-zinc-900 p-4">
              <p className="text-white text-sm mb-1">Auto-Exclusão</p>
              <p className="text-white/80 text-base font-bold">Bloqueio de Acesso</p>
              <p className="text-white/50 text-xs mt-1">Em todas as plataformas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
