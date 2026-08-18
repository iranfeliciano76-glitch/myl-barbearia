"use client"

import { useState } from "react"
import { CATEGORIAS_SERVICOS, WHATSAPP_NUMBER, WHATSAPP_URL } from "@/lib/data"

function whatsappServico(nome: string) {
  const msg = encodeURIComponent(`Olá, vim do site e quero agendar o serviço: ${nome}`)
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`
}

export default function Servicos() {
  const [activeTab, setActiveTab] = useState(0)
  const categoria = CATEGORIAS_SERVICOS[activeTab]

  return (
    <section id="servicos" className="py-32 lg:py-40 bg-[#231509]"
      style={{
        backgroundImage: `repeating-linear-gradient(-55deg, transparent, transparent 4px, rgba(242,241,240,0.015) 4px, rgba(242,241,240,0.015) 5px)`
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-16 lg:mb-20">
          <p className="section-label mb-6">Serviços</p>
          <div className="section-divider" />
          <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#f2f1f0] leading-tight max-w-xl">
            Uma experiência completa.
          </h2>
        </div>

        <div className="flex flex-wrap gap-0 border-b border-[#f2f1f0]/[0.08] mb-16">
          {CATEGORIAS_SERVICOS.map((cat, i) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(i)}
              className={`px-6 py-4 text-[0.65rem] font-semibold tracking-[0.2em] uppercase transition-all duration-300 border-b-2 -mb-px ${
                activeTab === i
                  ? "border-[#f2f1f0] text-[#f2f1f0]"
                  : "border-transparent text-[#827c78] hover:text-[#f2f1f0]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#f2f1f0]/[0.04]">
          {categoria.servicos.map((servico) => (
            <div
              key={servico.nome}
              className="bg-[#231509] p-8 group hover:bg-[#2c1b0c] transition-colors duration-300 relative flex flex-col justify-between gap-6"
            >
              <div>
                {servico.exclusive && (
                  <span className="absolute top-4 right-4 text-[0.5rem] font-bold tracking-[0.25em] uppercase text-[#827c78] border border-[#3a2810] px-2 py-1">
                    Exclusive
                  </span>
                )}
                <h3 className="text-[#f2f1f0] font-semibold text-sm tracking-wide mb-2 group-hover:text-[#827c78] transition-colors pr-16">
                  {servico.nome}
                </h3>
                {servico.descricao && (
                  <p className="text-[#827c78] text-[0.65rem] tracking-[0.1em] uppercase">
                    {servico.descricao}
                  </p>
                )}
                <div className="mt-4 w-6 h-px bg-[#f2f1f0]/20 group-hover:w-10 transition-all duration-300" />
              </div>
              <a
                href={whatsappServico(servico.nome)}
                target="_blank"
                rel="noopener noreferrer"
                className="self-start text-[0.55rem] font-bold tracking-[0.2em] uppercase border border-[#f2f1f0]/[0.12] text-[#827c78] px-4 py-2 rounded-full hover:border-[#f2f1f0]/40 hover:text-[#f2f1f0] transition-all duration-300 opacity-0 group-hover:opacity-100"
              >
                Agendar
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col sm:flex-row items-start sm:items-center gap-6 justify-between">
          <p className="text-[#827c78] text-xs tracking-wide max-w-md">
            Consulte disponibilidade diretamente com nossa equipe. Atendimento personalizado para cada cliente.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center bg-[#f2f1f0] text-[#1c1208] text-[0.65rem] font-bold tracking-[0.18em] uppercase px-8 py-4 rounded-full hover:bg-[#827c78] hover:text-[#f2f1f0] transition-colors duration-300"
          >
            Agendar via WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
