export const WHATSAPP_NUMBER = "5598985270000"
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`
export const INSTAGRAM_URL = "https://www.instagram.com/mylbarberclinic_/"
export const INSTAGRAM_HANDLE = "@mylbarberclinic_"

export const CONTATO = {
  telefone: "(98) 98527-0000",
  endereco: "Av. Deputado Nagib Haickel",
  bairro: "Calhau",
  cidade: "São Luís — MA",
  cep: "CEP 65071-380",
  enderecoCompleto: "Av. Deputado Nagib Haickel, Calhau, São Luís - MA, 65071-380",
  horarios: [
    { dia: "Segunda a Sexta", horario: "09h — 20h" },
    { dia: "Sábado", horario: "09h — 19h" },
    { dia: "Domingo", horario: "Fechado" },
  ],
}

export const CATEGORIAS_SERVICOS = [
  {
    id: "barbearia",
    label: "Barbearia",
    servicos: [
      { nome: "Cabelo", descricao: "Exclusive disponível", exclusive: true },
      { nome: "Barba", descricao: "Exclusive disponível", exclusive: true },
      { nome: "Corte e Barba", descricao: "Exclusive disponível", exclusive: true },
      { nome: "Desondulação Capilar", descricao: "Exclusive disponível", exclusive: true },
      { nome: "Tonalização", descricao: null, exclusive: false },
      { nome: "Descoloração", descricao: null, exclusive: false },
      { nome: "Barbaterapia", descricao: "Exclusive disponível", exclusive: true },
      { nome: "Penteado", descricao: null, exclusive: false },
      { nome: "Hidratação Express", descricao: "Lavatório", exclusive: false },
      { nome: "Lavagem Especial Keune", descricao: "Lavatório", exclusive: false },
      { nome: "Tratamento Fortificante Keune", descricao: "Head Spa", exclusive: true },
      { nome: "Tratamento Purificante Keune", descricao: "Head Spa • Caspa", exclusive: true },
      { nome: "Hidratação Keune", descricao: "Head Spa — 30 min", exclusive: true },
      { nome: "Nutrição Keune", descricao: "Head Spa — 30 min", exclusive: true },
      { nome: "Cauterização Keune", descricao: "Head Spa — 30 min", exclusive: true },
      { nome: "Depilação Nariz", descricao: null, exclusive: false },
      { nome: "Depilação Orelha", descricao: null, exclusive: false },
      { nome: "Sobrancelha", descricao: null, exclusive: false },
    ],
  },
  {
    id: "spa",
    label: "SPA",
    servicos: [
      { nome: "Head Spa", descricao: "60 min", exclusive: false },
      { nome: "Spa dos Pés", descricao: "60 min", exclusive: false },
      { nome: "Spa das Mãos", descricao: "60 min", exclusive: false },
      { nome: "Manicure", descricao: null, exclusive: false },
      { nome: "Pedicure", descricao: null, exclusive: false },
      { nome: "Podologia", descricao: "A partir de", exclusive: false },
      { nome: "Drenagem Corporal", descricao: null, exclusive: false },
      { nome: "Drenagem Facial", descricao: null, exclusive: false },
    ],
  },
  {
    id: "massagem",
    label: "Massagem",
    servicos: [
      { nome: "Massagem Pedras Quentes", descricao: null, exclusive: false },
      { nome: "Massagem Relaxante", descricao: null, exclusive: false },
      { nome: "Massagem Ventosaterapia", descricao: null, exclusive: false },
      { nome: "Limpeza de Pele", descricao: null, exclusive: false },
    ],
  },
  {
    id: "terapia",
    label: "Terapia Capilar",
    servicos: [
      { nome: "Consulta Terapeuta Capilar", descricao: "Dra. Gabrielle Lago", exclusive: false },
      { nome: "Microagulhamento Facial", descricao: "Dra. Mychelle Thaina • Dr. Cassio Silveira", exclusive: false },
      { nome: "Bioestimulador de Colágeno", descricao: null, exclusive: false },
      { nome: "Preenchimento com Ácido Hialurônico", descricao: null, exclusive: false },
      { nome: "Toxina Botulínica", descricao: null, exclusive: false },
      { nome: "Ultraformer MPT", descricao: null, exclusive: false },
      { nome: "Laser Pisom", descricao: null, exclusive: false },
      { nome: "Depilação a Laser", descricao: "A partir de", exclusive: false },
    ],
  },
]

export const EQUIPE = [
  {
    nome: "Dra. Gabrielle Lago",
    cargo: "Terapeuta Capilar",
    especialidade: "Terapia Capilar",
    foto: null,
  },
  {
    nome: "Dra. Mychelle Thaina",
    cargo: "Médica Especialista",
    especialidade: "Consulta Terapeuta Capilar",
    foto: null,
  },
  {
    nome: "Dr. Cassio Silveira",
    cargo: "Médico Especialista",
    especialidade: "Consulta Terapeuta Capilar",
    foto: null,
  },
]
