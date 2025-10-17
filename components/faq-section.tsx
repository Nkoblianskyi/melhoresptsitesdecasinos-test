"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: "Como escolher um casino online confiável?",
    answer:
      "Verifique a presença de licença, leia avaliações de jogadores, verifique os métodos de pagamento e a velocidade dos levantamentos. Os nossos especialistas já fizeram este trabalho por si - todos os casinos no nosso ranking passaram por uma verificação rigorosa.",
  },
  {
    question: "É seguro jogar em casinos online?",
    answer:
      "Sim, se o casino tiver uma licença de um regulador respeitável. Os casinos licenciados usam encriptação SSL, passam por auditorias regulares e são obrigados a cumprir regras rigorosas de segurança. Recomendamos apenas plataformas verificadas e licenciadas.",
  },
  {
    question: "Quais métodos de pagamento estão disponíveis?",
    answer:
      "A maioria dos casinos aceita cartões bancários (Visa, Mastercard), carteiras eletrónicas (Skrill, Neteller), transferências bancárias e criptomoedas. Alguns casinos também suportam sistemas de pagamento locais como MB Way.",
  },
  {
    question: "Quanto tempo demora o levantamento de ganhos?",
    answer:
      "A velocidade de levantamento depende do método de pagamento e do casino. Carteiras eletrónicas são as mais rápidas (de algumas horas a 24 horas). Cartões bancários - 3-5 dias úteis. Transferências bancárias - 5-7 dias úteis. O primeiro levantamento pode demorar mais devido à verificação.",
  },
  {
    question: "O que são requisitos de apostas de bónus?",
    answer:
      "Os requisitos de apostas (wagering) são o número de vezes que precisa apostar os fundos de bónus antes do levantamento. Por exemplo, wagering x30 significa que um bónus de 100€ precisa ser apostado num valor de 3000€. Quanto menor o wagering, melhor para o jogador.",
  },
  {
    question: "Posso jogar gratuitamente?",
    answer:
      "Sim, a maioria dos casinos oferece modo demo para slots e jogos de mesa. Isto permite testar os jogos sem risco de perder dinheiro. No entanto, para jogar a dinheiro real e receber bónus é necessário registo.",
  },
  {
    question: "Que documentos são necessários para verificação?",
    answer:
      "Normalmente são necessários: documento de identificação (passaporte ou cartão de cidadão), comprovativo de morada (fatura de serviços) e cópia do cartão de pagamento. A verificação é necessária para segurança e conformidade com a legislação.",
  },
  {
    question: "Existem limites de levantamento?",
    answer:
      "Sim, a maioria dos casinos estabelece limites mínimos e máximos de levantamento. O mínimo é geralmente 10-20€, o máximo pode ser de 5000€ a ilimitado para jogadores VIP. Veja informações detalhadas nos termos do casino específico.",
  },
  {
    question: "O que fazer se surgir um problema?",
    answer:
      "Primeiro contacte o suporte do casino através de chat, email ou telefone. Se o problema não for resolvido, pode contactar o regulador que emitiu a licença do casino. Também pode escrever-nos - ajudaremos a resolver.",
  },
  {
    question: "Posso jogar no telemóvel?",
    answer:
      "Sim, todos os casinos modernos estão otimizados para dispositivos móveis. A maioria tem sites responsivos, e alguns também oferecem aplicações móveis para iOS e Android. A funcionalidade da versão móvel geralmente não difere da versão desktop.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 px-4 w-full bg-black">
      <div className="container mx-auto max-w-[1220px]">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif text-white mb-3 border-b border-[#D4AF37] inline-block pb-2">
            Perguntas Frequentes
          </h2>
          <p className="text-white/60 text-sm mt-4">Respostas às perguntas mais populares sobre casinos online</p>
        </div>

        <div className="space-y-3 max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-white/20 bg-zinc-900">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-4 text-left hover:bg-zinc-800 transition-colors"
              >
                <span className="text-white text-sm pr-4">{faq.question}</span>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="w-4 h-4 text-white/60" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-white/60" />
                  )}
                </div>
              </button>
              {openIndex === index && (
                <div className="px-4 pb-4 border-t border-white/10 pt-3">
                  <p className="text-white/60 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
