export default function Sobre() {
  return (
    <section className="py-32 lg:py-40 bg-[#1c1208]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <p className="section-label mb-6">Sobre</p>
            <div className="section-divider" />
            <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#f2f1f0] leading-tight mb-8">
              Onde a barbearia
              <br />
              encontra a clínica.
            </h2>
            <p className="text-[#827c78] text-base leading-relaxed mb-6">
              A MYL nasce da fusão entre a arte da barbearia e a precisão clínica. Um espaço
              criado para quem exige o melhor — em cada corte, em cada tratamento, em cada detalhe.
            </p>
            <p className="text-[#827c78] text-base leading-relaxed mb-10">
              No Calhau, em São Luís, reunimos barbeiros de referência, profissionais de saúde
              especializados e procedimentos estéticos de alta performance sob o mesmo ambiente.
            </p>
            <a
              href="#servicos"
              className="inline-flex items-center gap-3 text-[#f2f1f0] text-[0.65rem] font-semibold tracking-[0.2em] uppercase group"
            >
              <span>Explorar serviços</span>
              <span className="w-8 h-px bg-[#f2f1f0]/40 group-hover:w-14 transition-all duration-500" />
            </a>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] bg-[#231509] relative overflow-hidden">
              <img
                src="/roupa-barbeiro.jpg"
                alt="Barbeiro MYL"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#1c1208] to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 w-48 h-48 border border-[#f2f1f0]/[0.06] overflow-hidden">
              <img
                src="/logo-myl.jpg"
                alt="MYL Barber Clinic"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
