import { Shield, CreditCard, Headphones } from "lucide-react"
import { Button } from "@/components/ui/button"
import { bettingSites } from "@/lib/mock-data"
import { StarRating } from "@/components/star-rating"

export function BonusSection() {
  const topCasinos = bettingSites.slice(0, 3)

  return (
    <section className="py-16 px-4 w-full">
      <div className="container mx-auto max-w-[1220px] p-8 bg-white border-2 border-primary rounded-lg">
        <div className="text-center mb-12 ">
          <div className="portugal-accent-line w-32 mx-auto mb-8 rounded-full"></div>
          <h2 className="text-4xl font-bold mb-6">
            <span className="text-primary">Melhores</span> <span className="text-secondary">Bónus</span>{" "}
            <span className="text-black">de Casino</span>
          </h2>
          <p className="text-black/90 text-xl max-w-3xl mx-auto">
            Descubra os bónus mais generosos e vantajosos dos casinos online licenciados em Portugal
          </p>
        </div>

        {/* Top 3 Bónus Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16 bg-white border-2 border-primary rounded-lg">
          {topCasinos.map((casino, index) => (
            <div
              key={casino.id}
              className={`bg-white rounded-lg p-6 border-2 flex flex-col ${index === 0 ? "border-primary" : "border-border"}`}
            >
              {index === 0 && (
                <div className="text-center mb-4">
                  <div className="bg-primary text-white px-4 py-2 rounded-full font-bold text-sm">MELHOR BÓNUS</div>
                </div>
              )}

              {index !== 0 && <div className="h-[52px]"></div>}

              <div className="text-center mb-6">
                <div className="bg-black border-2 border-border rounded-lg p-4 inline-block mb-4 h-[116px] flex items-center justify-center">
                  <img
                    src={casino.logo || "/placeholder.svg"}
                    alt={casino.name}
                    className="w-[140px] h-[84px] object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2 h-[56px] flex items-center justify-center">
                  {casino.name}
                </h3>
              </div>

              <div className="text-center mb-6 flex-grow">
                <div className="text-secondary font-bold text-sm mb-2 uppercase">Bónus de Boas-Vindas</div>
                <p className="text-foreground font-bold text-lg mb-4 h-[56px] flex items-center justify-center">
                  {casino.bonus}
                </p>

                <div className="flex items-center justify-center mb-2">
                  <StarRating rating={casino.rating / 2} />
                </div>
                <div className="text-primary font-bold">{casino.rating.toFixed(1)}/10</div>
              </div>

              <Button
                asChild
                className="w-full bg-accent hover:bg-accent/90 text-white font-bold py-3 uppercase mt-auto"
              >
                <a href={casino.url} target="_blank" rel="noopener noreferrer">
                  Obter Bónus
                </a>
              </Button>
            </div>
          ))}
        </div>

        {/* Vantagens dos Casinos Portugueses */}
        <div className="bg-white border-2 border-primary rounded-lg p-8 mb-12">
          <h3 className="text-3xl font-bold text-primary text-center mb-8">
            <span className="text-primary">Porquê Escolher</span>{" "}
            <span className="text-secondary">Casinos Portugueses?</span>
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-foreground font-bold text-xl mb-3">Licenciados SRIJ</h4>
              <p className="text-muted-foreground">
                Todos os casinos são licenciados e regulamentados pelo Serviço de Regulação e Inspeção de Jogos
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-foreground font-bold text-xl mb-3">Pagamentos Locais</h4>
              <p className="text-muted-foreground">
                MB WAY, Multibanco e outros métodos de pagamento portugueses para máxima conveniência
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Headphones className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-foreground font-bold text-xl mb-3">Suporte em Português</h4>
              <p className="text-muted-foreground">
                Atendimento ao cliente 24/7 em português por chat, email e telefone
              </p>
            </div>
          </div>
        </div>

        {/* Dicas para Maximizar Bónus */}
        <div className="border-2 border-primary rounded-lg p-8 bg-white">
          <h3 className="text-2xl font-bold text-primary text-center mb-8">Dicas para Maximizar os Seus Bónus</h3>

          <div className="grid md:grid-cols-2 gap-8 text-muted-foreground">
            <div className="space-y-4">
              <div>
                <h4 className="text-foreground font-bold mb-2">Leia os Termos e Condições</h4>
                <p className="text-sm">
                  Sempre verifique os requisitos de apostas, jogos elegíveis e prazos antes de aceitar qualquer bónus.
                </p>
              </div>

              <div>
                <h4 className="text-foreground font-bold mb-2">Gerencie o Seu Bankroll</h4>
                <p className="text-sm">
                  Defina limites claros e nunca aposte mais do que pode permitir-se perder, mesmo com bónus.
                </p>
              </div>

              <div>
                <h4 className="text-foreground font-bold mb-2">Aproveite Promoções Regulares</h4>
                <p className="text-sm">
                  Além do bónus de boas-vindas, muitos casinos oferecem promoções semanais e mensais.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="text-foreground font-bold mb-2">Escolha Jogos com RTP Alto</h4>
                <p className="text-sm">
                  Prefira jogos com Return to Player (RTP) superior a 96% para maximizar as suas hipóteses.
                </p>
              </div>

              <div>
                <h4 className="text-foreground font-bold mb-2">Verifique a Conta Rapidamente</h4>
                <p className="text-sm">
                  Complete a verificação da conta o mais cedo possível para evitar atrasos nos levantamentos.
                </p>
              </div>

              <div>
                <h4 className="text-foreground font-bold mb-2">Contacte o Suporte</h4>
                <p className="text-sm">Em caso de dúvidas sobre bónus, não hesite em contactar o suporte ao cliente.</p>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-white border-2 border-secondary rounded-lg text-center">
            <p className="text-secondary font-bold text-lg mb-2">Lembre-se: Jogue com Responsabilidade</p>
            <p className="text-foreground">
              Os bónus são uma forma de entretenimento. Defina sempre limites e jogue apenas o que pode permitir-se
              perder.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
