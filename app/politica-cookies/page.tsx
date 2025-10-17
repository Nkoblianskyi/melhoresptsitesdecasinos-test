import { Header } from "@/components/header"

export default function PoliticaCookiesPage() {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-8 text-center text-[#D4AF37]">Política de Cookies</h1>

        <div className="max-w-4xl mx-auto space-y-6 text-white">
          <div className="text-center mb-6">
            <p className="text-gray-400 text-sm">Última atualização: Janeiro de 2025</p>
          </div>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#D4AF37]">O que são Cookies?</h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              Cookies são pequenos ficheiros de texto armazenados no seu dispositivo quando visita um website. No
              Melhores PT Sites de Casinos, utilizamos cookies para melhorar a sua experiência de navegação e analisar
              como o site é utilizado.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#D4AF37]">Tipos de Cookies</h2>
            <div className="space-y-4 text-sm">
              <div className="border-l-2 border-[#D4AF37] pl-4">
                <h4 className="text-white font-semibold mb-1">Cookies Essenciais</h4>
                <p className="text-gray-300">
                  Necessários para o funcionamento básico do site, segurança e preferências essenciais.
                </p>
              </div>

              <div className="border-l-2 border-gray-600 pl-4">
                <h4 className="text-white font-semibold mb-1">Cookies de Analytics</h4>
                <p className="text-gray-300">
                  Ajudam-nos a compreender como os visitantes usam o site através de dados agregados e anónimos.
                </p>
              </div>

              <div className="border-l-2 border-gray-600 pl-4">
                <h4 className="text-white font-semibold mb-1">Cookies de Personalização</h4>
                <p className="text-gray-300">
                  Permitem guardar as suas preferências e personalizar a experiência de navegação.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#D4AF37]">Gestão de Cookies</h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              Pode controlar e eliminar cookies através das definições do seu navegador. Note que desativar cookies pode
              afetar a funcionalidade do site.
            </p>
            <div className="text-sm text-gray-400 space-y-1">
              <p>
                <strong>Chrome:</strong> Definições → Privacidade e segurança → Cookies
              </p>
              <p>
                <strong>Firefox:</strong> Opções → Privacidade e Segurança → Cookies
              </p>
              <p>
                <strong>Safari:</strong> Preferências → Privacidade → Cookies
              </p>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#D4AF37]">Cookies de Terceiros</h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              Utilizamos serviços de terceiros como Google Analytics para análise de tráfego. Estes serviços podem
              colocar os seus próprios cookies no seu dispositivo.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#D4AF37]">Atualizações</h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              Esta política pode ser atualizada periodicamente. Recomendamos que consulte esta página regularmente para
              se manter informado.
            </p>
          </section>

          <div className="mt-8 p-4 border border-red-800 bg-red-950/20">
            <p className="text-red-300 text-sm font-semibold mb-2">Jogo Responsável</p>
            <p className="text-gray-300 text-sm">
              Este é um site informativo de comparação. Não operamos jogos de casino. Jogue sempre com responsabilidade
              e apenas o que pode permitir-se perder.
            </p>
          </div>

          <div className="text-center mt-6 text-xs text-gray-500">
            <p>Conformidade com RGPD e legislação portuguesa aplicável</p>
          </div>
        </div>
      </div>
    </>
  )
}
