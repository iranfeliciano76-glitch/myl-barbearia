"use client"

import { useEffect, useRef } from "react"
import { WHATSAPP_URL } from "@/lib/data"

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {})
    }
  }, [])

  return (
    <section id="inicio" className="relative w-full min-h-screen flex flex-col justify-end overflow-hidden bg-[#1c1208]">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster="/hero-poster.jpg"
      >
        <source src="/hero-myl.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-t from-[#1c1208]/80 via-transparent to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full pb-16 lg:pb-20 pt-32 lg:pt-0">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-16">

          <div className="max-w-2xl">
            <h1 className="text-[clamp(2rem,5vw,5rem)] font-black leading-[0.95] tracking-tight text-[#f2f1f0] uppercase">
              O LUGAR ONDE
              <br />
              ESTILO VIRA
              <br />
              IDENTIDADE.
            </h1>

            <div className="flex flex-wrap gap-4 mt-10">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-[#f2f1f0] text-[#1c1208] text-sm font-bold px-9 py-4 rounded-full hover:bg-[#827c78] hover:text-[#f2f1f0] transition-colors duration-300"
              >
                Agendar agora
              </a>
              <a
                href="#servicos"
                className="inline-flex items-center border border-[#f2f1f0]/40 text-[#f2f1f0] text-sm font-semibold px-9 py-4 rounded-full hover:border-[#f2f1f0] hover:bg-[#f2f1f0]/10 transition-all duration-300"
              >
                Ver serviços
              </a>
            </div>
          </div>

          <div className="max-w-xs lg:mb-2 flex-shrink-0">
            <p className="text-[#827c78] text-base leading-relaxed">
              Muito além de uma barbearia. Um espaço Barber Clinic para quem exige o melhor em cada detalhe — corte, barba, SPA e terapia capilar.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
