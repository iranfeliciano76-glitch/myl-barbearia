import { CONTATO, WHATSAPP_URL, INSTAGRAM_URL, INSTAGRAM_HANDLE } from "@/lib/data"

export default function Footer() {
  return (
    <footer className="bg-[#150e06] border-t border-[#f2f1f0]/[0.05]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-2">
            <div className="mb-6">
              <span className="text-[#f2f1f0] font-black text-3xl tracking-[0.1em] uppercase block leading-none">MYL</span>
              <span className="text-[#827c78] text-[0.55rem] tracking-[0.3em] font-medium uppercase">BARBER | CLINIC</span>
            </div>
            <p className="text-[#827c78] text-sm leading-relaxed max-w-xs">
              Barbearia, SPA e terapia capilar em um único espaço premium no Calhau, São Luís — MA.
            </p>
          </div>

          <div>
            <p className="text-[#827c78] text-[0.6rem] font-semibold tracking-[0.3em] uppercase mb-5">Navegação</p>
            <nav className="flex flex-col gap-3">
              {[
                ["#servicos", "Serviços"],
                ["#equipe", "Equipe"],
                ["#portfolio", "Portfólio"],
                ["#localizacao", "Localização"],
              ].map(([href, label]) => (
                <a key={href} href={href} className="text-[#827c78]/70 text-sm hover:text-[#f2f1f0] transition-colors">
                  {label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-[#827c78] text-[0.6rem] font-semibold tracking-[0.3em] uppercase mb-5">Contato</p>
            <div className="flex flex-col gap-3">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                className="text-[#827c78]/70 text-sm hover:text-[#f2f1f0] transition-colors">
                {CONTATO.telefone}
              </a>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer"
                className="text-[#827c78]/70 text-sm hover:text-[#f2f1f0] transition-colors">
                {INSTAGRAM_HANDLE}
              </a>
              <p className="text-[#827c78]/70 text-sm leading-relaxed">
                {CONTATO.endereco}<br />
                {CONTATO.bairro}, {CONTATO.cidade}
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-[#f2f1f0]/[0.05] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#3a2810] text-xs tracking-wide">
            © {new Date().getFullYear()} MYL Barber Clinic. Todos os direitos reservados.
          </p>
          <p className="text-[#3a2810] text-xs tracking-wide">Calhau — São Luís, MA</p>
        </div>
      </div>
    </footer>
  )
}
