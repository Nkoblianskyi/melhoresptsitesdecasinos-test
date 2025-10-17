import { Button } from "@/components/ui/button"
import { bettingSites } from "@/lib/mock-data"
import { StarRating } from "@/components/star-rating"

export function OurChoiceSection() {
  const ourChoice = bettingSites[0]

  return (
    <section className="py-12 px-4 w-full">
      <div className="container mx-auto max-w-[1220px]">
        <div className="bg-white border-2 border-primary rounded-lg">
          <div className="p-8">
            <div className="text-center mb-8">
              <div className="portugal-accent-line w-32 mx-auto mb-6 rounded-full"></div>
              <h2 className="text-4xl font-bold text-foreground mb-4">
                <span className="text-primary">A Nossa</span> <span className="text-secondary">Escolha</span>
              </h2>
              <p className="text-muted-foreground text-xl">
                Após análise rigorosa, este é o nosso casino recomendado para jogadores portugueses
              </p>
            </div>

            {/* Cartão Principal */}
            <div className="border-2 border-primary rounded-lg p-8 mb-8 bg-white">
              <div className="portugal-accent-line mb-6 rounded-full"></div>

              <div className="text-center mb-6">
                <div className="bg-primary text-white px-6 py-3 rounded-lg font-bold text-lg inline-block">
                  ESCOLHA DA REDAÇÃO
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-8 items-center">
                {/* Logo */}
                <div className="text-center">
                  <div className="bg-black p-6 rounded-lg border-2 border-border mb-4 inline-block">
                    <img
                      src={ourChoice.logo || "/placeholder.svg"}
                      alt={ourChoice.name}
                      className="w-[200px] h-[120px] object-contain mx-auto"
                    />
                  </div>
                  <h3 className="text-3xl font-bold text-foreground">{ourChoice.name}</h3>
                </div>

                {/* Informações Principais */}
                <div className="text-center">
                  <div className="mb-6">
                    <div className="text-secondary font-bold text-xl mb-3 uppercase">Bónus</div>
                    <p className="text-foreground font-bold text-2xl">{ourChoice.bonus}</p>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-center justify-center mb-3">
                      <StarRating rating={ourChoice.rating / 2} />
                    </div>
                    <div className="text-3xl font-bold text-primary">
                      {ourChoice.rating.toFixed(1)}
                      <span className="text-lg text-muted-foreground">/10</span>
                    </div>
                    <div className="text-muted-foreground text-sm">({ourChoice.reviews} avaliações)</div>
                  </div>
                </div>

                {/* Botão de Ação */}
                <div className="text-center">
                  <Button
                    asChild
                    className="bg-accent hover:bg-accent/90 text-white font-bold px-8 py-6 text-xl mb-4 uppercase tracking-wide"
                  >
                    <a href={ourChoice.url} target="_blank" rel="noopener noreferrer">
                      Jogar Agora
                    </a>
                  </Button>
                  <p className="text-muted-foreground text-base">Registo em 2 minutos</p>
                  <p className="text-primary text-sm font-semibold">Licenciado SRIJ</p>
                </div>
              </div>
            </div>

            {/* Vantagens */}
            <div className="border-2 border-border rounded-lg p-8 bg-white">
              <h3 className="text-3xl font-bold text-foreground text-center mb-8">
                <span className="text-primary">Porquê</span> <span className="text-secondary">a Nossa Escolha?</span>
              </h3>

              <div className="grid md:grid-cols-2 gap-8 text-muted-foreground">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-foreground font-bold mb-3 text-xl">Máxima Segurança</h4>
                    <p className="text-base">
                      Licença SRIJ válida, encriptação SSL 256-bit e fundos dos jogadores totalmente protegidos.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-foreground font-bold mb-3 text-xl">Melhor Seleção</h4>
                    <p className="text-base">
                      Mais de 1000 slots, jogos de mesa e casino ao vivo dos melhores fornecedores mundiais.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-foreground font-bold mb-3 text-xl">Pagamentos Rápidos</h4>
                    <p className="text-base">
                      MB WAY, Multibanco, cartões. Levantamentos processados em menos de 2 horas.
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-foreground font-bold mb-3 text-xl">Suporte 24/7</h4>
                    <p className="text-base">
                      Atendimento em português por chat, email e telefone. Resposta em menos de 1 minuto.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-foreground font-bold mb-3 text-xl">Melhores Bónus</h4>
                    <p className="text-base">Bónus generosos com requisitos justos e promoções semanais exclusivas.</p>
                  </div>

                  <div>
                    <h4 className="text-foreground font-bold mb-3 text-xl">100% Português</h4>
                    <p className="text-base">Interface em português, suporte local e métodos de pagamento nacionais.</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 border-2 border-secondary rounded-lg text-center bg-white">
                <p className="text-secondary text-xl font-semibold mb-2">Jogue com responsabilidade</p>
                <p className="text-foreground text-base">
                  Apenas maiores de 18 anos. O jogo pode causar dependência. Defina sempre limites.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
