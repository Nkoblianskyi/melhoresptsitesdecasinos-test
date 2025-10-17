export function AboutUsSection() {
  return (
    <section className="py-16 px-4 w-full bg-black">
      <div className="container mx-auto max-w-[1220px]">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif text-white mb-3 border-b border-[#D4AF37] inline-block pb-2">Sobre Nós</h2>
          <p className="text-white/60 text-sm mt-4">O seu guia de confiança no mundo dos casinos online</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg text-white mb-2">A Nossa Missão</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                No melhoresptsitesdecasinos.com, a nossa missão é fornecer aos jogadores a informação mais precisa e
                atualizada sobre casinos online. A nossa equipa de especialistas testa cuidadosamente cada plataforma
                para que possa jogar com segurança e confiança.
              </p>
            </div>

            <div>
              <h3 className="text-lg text-white mb-2">Os Nossos Valores</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Honestidade, transparência e independência são a base do nosso trabalho. Não aceitamos pagamento por
                avaliações positivas e dizemos sempre a verdade sobre cada casino.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg text-white mb-2">A Nossa Experiência</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Mais de 10 anos de experiência na indústria de jogo online. A nossa equipa é composta por jogadores
                profissionais, analistas e especialistas em segurança.
              </p>
            </div>

            <div>
              <h3 className="text-lg text-white mb-2">A Nossa Metodologia</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Cada casino passa por uma verificação detalhada com mais de 50 critérios. Testamos com dinheiro real,
                verificamos a velocidade dos pagamentos e a qualidade do suporte.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-8 border-t border-white/10">
          <div className="text-center">
            <div className="text-2xl text-white mb-1">150+</div>
            <div className="text-white/50 text-xs">Casinos Verificados</div>
          </div>
          <div className="text-center">
            <div className="text-2xl text-white mb-1">50K+</div>
            <div className="text-white/50 text-xs">Utilizadores Ativos</div>
          </div>
          <div className="text-center">
            <div className="text-2xl text-white mb-1">100%</div>
            <div className="text-white/50 text-xs">Avaliações Independentes</div>
          </div>
          <div className="text-center">
            <div className="text-2xl text-white mb-1">10+</div>
            <div className="text-white/50 text-xs">Anos de Experiência</div>
          </div>
        </div>
      </div>
    </section>
  )
}
