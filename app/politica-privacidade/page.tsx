import { Header } from "@/components/header"

export default function PoliticaPrivacidadePage() {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-8 text-center text-[#D4AF37]">Política de Privacidade</h1>

        <div className="max-w-4xl mx-auto space-y-6 text-white">
          <div className="text-center mb-6">
            <p className="text-gray-400 text-sm">Última atualização: Janeiro de 2025</p>
          </div>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#D4AF37]">Quem Somos</h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              Melhores PT Sites de Casinos é um serviço independente de comparação e análise de sites de casino
              licenciados em Portugal. Fornecemos informações para ajudar utilizadores a tomar decisões informadas. Não
              operamos jogos de casino nem processamos transações financeiras.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#D4AF37]">Informações Recolhidas</h2>
            <div className="text-sm space-y-2">
              <p className="text-gray-300">Recolhemos automaticamente:</p>
              <ul className="list-disc list-inside text-gray-400 space-y-1 ml-4">
                <li>Endereço IP e localização aproximada</li>
                <li>Tipo de navegador e dispositivo</li>
                <li>Páginas visitadas e tempo de permanência</li>
                <li>Origem do tráfego</li>
                <li>Dados de cookies e preferências</li>
              </ul>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#D4AF37]">Como Utilizamos os Dados</h2>
            <ul className="list-disc list-inside text-gray-300 text-sm space-y-1 ml-4">
              <li>Fornecer e melhorar os serviços de comparação</li>
              <li>Personalizar conteúdo baseado nas preferências</li>
              <li>Analisar uso do site para otimização</li>
              <li>Gerar estatísticas agregadas</li>
              <li>Manter segurança e integridade da plataforma</li>
              <li>Cumprir obrigações legais</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#D4AF37]">Base Legal</h2>
            <div className="text-sm space-y-2 text-gray-300">
              <p>
                <strong>Interesse legítimo:</strong> Análise e melhoria do serviço
              </p>
              <p>
                <strong>Consentimento:</strong> Cookies não essenciais
              </p>
              <p>
                <strong>Execução de serviço:</strong> Funcionalidades de comparação
              </p>
              <p>
                <strong>Obrigação legal:</strong> Cumprimento de requisitos legais
              </p>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#D4AF37]">Partilha de Dados</h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              <strong>Não vendemos os seus dados.</strong> Podemos partilhar informações limitadas com fornecedores de
              serviços técnicos (hosting, analytics), sempre protegidos de acordo com as leis aplicáveis.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#D4AF37]">Os Seus Direitos (RGPD)</h2>
            <div className="grid md:grid-cols-2 gap-3 text-sm text-gray-300">
              <div>
                <p>
                  <strong>Acesso:</strong> Saber que dados temos
                </p>
                <p>
                  <strong>Retificação:</strong> Corrigir dados incorretos
                </p>
                <p>
                  <strong>Apagamento:</strong> Solicitar eliminação
                </p>
                <p>
                  <strong>Limitação:</strong> Restringir processamento
                </p>
              </div>
              <div>
                <p>
                  <strong>Portabilidade:</strong> Receber os seus dados
                </p>
                <p>
                  <strong>Oposição:</strong> Opor-se ao processamento
                </p>
                <p>
                  <strong>Retirar consentimento:</strong> A qualquer momento
                </p>
                <p>
                  <strong>Reclamação:</strong> Junto da CNPD
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#D4AF37]">Segurança</h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              Implementamos medidas técnicas e organizacionais para proteger os seus dados: encriptação SSL/TLS, acesso
              restrito, monitorização de segurança e backups regulares.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#D4AF37]">Retenção de Dados</h2>
            <div className="text-sm text-gray-300 space-y-1">
              <p>Dados de analytics: máximo 26 meses</p>
              <p>Logs de servidor: máximo 12 meses</p>
              <p>Cookies: até eliminação pelo utilizador</p>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#D4AF37]">Alterações</h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              Esta política pode ser atualizada periodicamente. Notificaremos sobre alterações significativas através do
              site. Consulte regularmente esta página.
            </p>
          </section>

          <div className="mt-8 p-4 border border-red-800 bg-red-950/20">
            <p className="text-red-300 text-sm font-semibold mb-2">Jogo Responsável</p>
            <p className="text-gray-300 text-sm">
              Promovemos práticas de jogo responsável. Não recolhemos informações sobre hábitos de jogo individuais. O
              jogo deve ser encarado como entretenimento.
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
