import { EQUIPE } from "@/lib/data"

const PLACEHOLDER_BARBEIROS = [
  { nome: "Barbeiro", cargo: "Profissional", especialidade: "Barbearia", foto: null },
  { nome: "Barbeiro", cargo: "Profissional", especialidade: "Barbearia", foto: null },
  { nome: "Barbeiro", cargo: "Profissional", especialidade: "Barbearia", foto: null },
]

const TODOS = [...PLACEHOLDER_BARBEIROS, ...EQUIPE]

export default function Equipe() {
  return (
    <section id="equipe" className="py-32 lg:py-40 bg-[#1c1208]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-16 lg:mb-20">
          <p className="section-label mb-6">Equipe</p>
          <div className="section-divider" />
          <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#f2f1f0] leading-tight max-w-xl">
            Profissionais de referência.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {TODOS.map((membro, i) => (
            <div key={i} className="group">
              <div className="aspect-[3/4] bg-[#231509] relative overflow-hidden mb-6"
                style={{
                  backgroundImage: `repeating-linear-gradient(-55deg, transparent, transparent 4px, rgba(242,241,240,0.02) 4px, rgba(242,241,240,0.02) 5px)`
                }}
              >
                <div className="absolute inset-0 flex items-end justify-center pb-8">
                  <p className="text-[#3a2810] text-[0.55rem] tracking-[0.3em] uppercase">Foto a inserir</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#1c1208]/80 via-transparent to-transparent" />
              </div>
              <p className="text-[#827c78] text-[0.55rem] tracking-[0.3em] uppercase mb-1">
                {membro.especialidade}
              </p>
              <h3 className="text-[#f2f1f0] font-bold text-base tracking-wide">{membro.nome}</h3>
              <p className="text-[#827c78] text-xs tracking-wide mt-1">{membro.cargo}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
