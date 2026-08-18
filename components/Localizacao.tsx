import { MapPin, Phone, Clock, ExternalLink } from "lucide-react"
import { CONTATO, WHATSAPP_URL, INSTAGRAM_URL, INSTAGRAM_HANDLE } from "@/lib/data"

export default function Localizacao() {
  return (
    <section id="localizacao" className="py-32 lg:py-40 bg-[#1c1208]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-16 lg:mb-20">
          <p className="section-label mb-6">Localização</p>
          <div className="section-divider" />
          <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#f2f1f0] leading-tight max-w-xl">
            Venha nos visitar.
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="flex flex-col gap-10">
            <div className="flex gap-5">
              <div className="flex-shrink-0 w-10 h-10 border border-[#f2f1f0]/[0.08] flex items-center justify-center">
                <MapPin size={16} className="text-[#827c78]" />
              </div>
              <div>
                <p className="section-label mb-2">Endereço</p>
                <p className="text-[#f2f1f0] text-sm font-medium leading-relaxed">{CONTATO.endereco}</p>
                <p className="text-[#827c78] text-sm">{CONTATO.bairro}</p>
                <p className="text-[#827c78] text-sm">{CONTATO.cidade}</p>
                <p className="text-[#827c78]/60 text-xs mt-1">{CONTATO.cep}</p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="flex-shrink-0 w-10 h-10 border border-[#f2f1f0]/[0.08] flex items-center justify-center">
                <Phone size={16} className="text-[#827c78]" />
              </div>
              <div>
                <p className="section-label mb-2">Contato</p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#f2f1f0] text-sm font-medium hover:text-[#827c78] transition-colors"
                >
                  {CONTATO.telefone}
                </a>
                <p className="text-[#827c78]/60 text-xs mt-1">WhatsApp disponível</p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="flex-shrink-0 w-10 h-10 border border-[#f2f1f0]/[0.08] flex items-center justify-center">
                <Clock size={16} className="text-[#827c78]" />
              </div>
              <div>
                <p className="section-label mb-3">Horários</p>
                <div className="flex flex-col gap-2">
                  {CONTATO.horarios.map((h) => (
                    <div key={h.dia} className="flex justify-between gap-8">
                      <span className="text-[#827c78] text-sm">{h.dia}</span>
                      <span className="text-[#f2f1f0] text-sm font-medium">{h.horario}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="flex-shrink-0 w-10 h-10 border border-[#f2f1f0]/[0.08] flex items-center justify-center">
                <ExternalLink size={16} className="text-[#827c78]" />
              </div>
              <div>
                <p className="section-label mb-2">Instagram</p>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#f2f1f0] text-sm font-medium hover:text-[#827c78] transition-colors"
                >
                  {INSTAGRAM_HANDLE}
                </a>
              </div>
            </div>
          </div>

          <div className="w-full h-80 lg:h-full min-h-[320px] overflow-hidden relative bg-[#231509]">
            <iframe
              src="https://maps.google.com/maps?q=Avenida+Deputado+Nagib+Haickel,+Calhau,+S%C3%A3o+Lu%C3%ADs+-+MA&output=embed"
              className="w-full h-full grayscale opacity-70 border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização MYL Barber Clinic"
            />
          </div>
        </div>

        <div className="mt-16 pt-16 border-t border-[#f2f1f0]/[0.06]">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 group"
          >
            <span className="text-[#f2f1f0] text-2xl lg:text-3xl font-black uppercase tracking-tight group-hover:text-[#827c78] transition-colors">
              Agende seu horário
            </span>
            <span className="w-10 h-px bg-[#f2f1f0]/40 group-hover:w-20 transition-all duration-500" />
          </a>
        </div>
      </div>
    </section>
  )
}
