export default function Portfolio() {
  const SLOTS = Array.from({ length: 9 })

  return (
    <section id="portfolio" className="py-32 lg:py-40 bg-[#231509]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-16 lg:mb-20 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div>
            <p className="section-label mb-6">Portfólio</p>
            <div className="section-divider" />
            <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#f2f1f0] leading-tight max-w-xl">
              Nosso trabalho.
            </h2>
          </div>
          <p className="text-[#827c78] text-xs tracking-wide max-w-xs">
            Galeria a ser preenchida com os trabalhos da equipe MYL.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-3">
          {SLOTS.map((_, i) => (
            <div
              key={i}
              className={`bg-[#2c1b0c] relative overflow-hidden ${
                i === 0 ? "col-span-2 lg:col-span-1 row-span-2" : ""
              } ${i === 0 ? "aspect-square lg:aspect-auto" : "aspect-square"}`}
              style={{
                minHeight: i === 0 ? "300px" : undefined,
                backgroundImage: `repeating-linear-gradient(-55deg, transparent, transparent 4px, rgba(242,241,240,0.015) 4px, rgba(242,241,240,0.015) 5px)`
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-[#3a2810] text-[0.55rem] tracking-[0.3em] uppercase">Foto a inserir</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
