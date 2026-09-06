// Todo o texto do site fica aqui — edite livremente.
import logo from "@/assets/logo_e10.jpeg.asset.json";
import eliu from "@/assets/Eliu_lemos.jpeg.asset.json";
import milton from "@/assets/milton_junior.jpeg.asset.json";
import julio from "@/assets/julio_weber.jpeg.asset.json";
import guilherme from "@/assets/guilherme_silva.jpeg.asset.json";
import aprovado6 from "@/assets/atleta_aprovado_6.jpeg.asset.json";
import aprovado7 from "@/assets/atleta_aprovado_7.jpeg.asset.json";
import aprovado8 from "@/assets/atleta_aprovado_8.jpeg.asset.json";
import comemoracao from "@/assets/atletas_comemorando_com_professores_no_campeonato.jpeg.asset.json";
import equipeCampeonato from "@/assets/fotos_da_escolinha_em_campeonato.jpeg.asset.json";

export const images = {
  logo: logo.url,
  hero: comemoracao.url,
  equipeCampeonato: equipeCampeonato.url,
};

export const contato = {
  whatsapp: "https://wa.me/5565992021991",
  telefoneLabel: "+55 65 99202-1991",
  instagram: "https://instagram.com/e10footballtga",
  instagramLabel: "@e10footballtga",
  endereco: "MT-480, 2711 - Jardim Morada do Sol, Tangará da Serra - MT, 78304-309",
  horarios: ["Segunda a sexta: 07h às 11h e 14h às 20h", "Sábado: 08h às 12h", "Domingo: fechado"],
  mapaEmbed:
    "https://www.google.com/maps?q=C+T+G+Alliance+Serra&output=embed",
};

export const hero = {
  titulo: "Preparando Jovens Talentos para o Alto Rendimento",
  subtitulo: "Treinamento especializado e metodologia profissional para quem sonha alto no futebol.",
  nota: "4,6/5 no Google",
};

export const sobre = {
  titulo: "Sobre a E10 Football",
  paragrafos: [
    "A E10 Football é uma escolinha de futebol em Tangará da Serra - MT, com equipe 100% formada em Educação Física e comandada por ex-atletas profissionais.",
    "Atendemos turmas de 3 a 15 anos, com mais de 30 atletas já aprovados em clubes. Aqui o esporte é caminho para disciplina, respeito e oportunidades reais.",
  ],
  destaques: [
    { valor: "3 a 15", label: "anos de idade" },
    { valor: "100%", label: "equipe formada em Educação Física" },
    { valor: "+30", label: "atletas aprovados em clubes" },
  ],
};

export const metodologia = [
  {
    icone: "shield",
    titulo: "Caráter e disciplina",
    texto:
      "Formação humana em primeiro lugar: respeito, responsabilidade e comprometimento dentro e fora de campo.",
  },
  {
    icone: "target",
    titulo: "Técnica, tática e físico",
    texto:
      "Treinos com padrão de futebol profissional, adaptados à idade: fundamentos, leitura de jogo e preparação física real.",
  },
  {
    icone: "users",
    titulo: "Acompanhamento individual",
    texto:
      "Turmas por faixa etária e atenção individual, respeitando o tempo de desenvolvimento de cada atleta.",
  },
  {
    icone: "chart",
    titulo: "Avaliação contínua",
    texto:
      "Evolução acompanhada e registrada ao longo do ano, com feedback claro para o atleta e para a família.",
  },
];

export const academia = {
  titulo: "Diferencial: treino na academia",
  intro:
    "A E10 Football também leva os alunos para treinar na academia — sem foco em carga ou musculação pesada. O objetivo é preparar o corpo do atleta com segurança.",
  itens: [
    "Prevenção de lesões",
    "Ganho de agilidade",
    "Coordenação motora",
    "Equilíbrio e propriocepção",
    "Mobilidade articular e flexibilidade",
    "Resistência cardiorrespiratória",
  ],
  rodape:
    "Tudo orientado por profissionais de Educação Física, com exercícios funcionais e lúdicos adequados à idade de cada turma.",
};

export const equipe = [
  {
    nome: "Eliú Lemos Júnior",
    cargo: "Atleta profissional • Referência da escolinha",
    descricao:
      "Rosto da E10 Football e atleta profissional de futebol. Formado em Educação Física, leva para os alunos a rotina e a mentalidade do futebol de alto nível.",
    foto: eliu.url,
  },
  {
    nome: "Milton Júnior",
    cargo: "Ex-atleta profissional • Treinador",
    descricao:
      "Ex-atleta profissional de futebol e formado em Educação Física. Campeão em competições estaduais, hoje dedica a experiência à formação da base.",
    foto: milton.url,
  },
  {
    nome: "Júlio Weber",
    cargo: "Treinador",
    descricao:
      "Formado em Educação Física, atua no dia a dia dos treinos conduzindo turmas e no acompanhamento da evolução dos atletas.",
    foto: julio.url,
  },
  {
    nome: "Guilherme Silva",
    cargo: "Treinador de goleiros",
    descricao:
      "Formado em Educação Física, com passagens pela base do Cuiabá Esporte Clube. Responsável pelo treinamento específico de goleiros.",
    foto: guilherme.url,
  },
];

export const resultados = {
  numeros: [
    { valor: "+30", label: "atletas aprovados em clubes" },
    { valor: "Rede", label: "de contato com empresários e clubes parceiros" },
    { valor: "4,6/5", label: "avaliação no Google" },
  ],
  atletas: [
    { foto: aprovado6.url, legenda: "Arthur — Grêmio Novorizontino" },
    { foto: aprovado8.url, legenda: "Davi Brum — Grêmio Novorizontino" },
    { foto: aprovado7.url, legenda: "Assinatura de contrato — Cuiabá Esporte Clube" },
    { foto: equipeCampeonato.url, legenda: "Equipe E10 em campeonato regional" },
  ],
};

export const planos = [
  {
    id: "campo-3x",
    nome: "Treinamentos Apenas no Campo",
    tabLabel: "Campo 3x",
    subtitulo: "3x por semana",
    info: "Segunda, Quarta e Sexta",
    inclui: [
      "Treinos técnicos e táticos no campo",
      "Metodologia profissional por faixa etária",
      "Acompanhamento individual dos atletas",
      "Avaliação contínua da evolução",
    ],
    opcoes: [
      { nome: "Mensal", preco: "R$ 289,90", periodo: "", destaque: false },
      { nome: "Trimestral", preco: "R$ 249,90", periodo: "/mês", destaque: true },
      { nome: "Semestral", preco: "R$ 229,90", periodo: "/mês", destaque: false },
    ],
  },
  {
    id: "campo-2x",
    nome: "Treinamentos Apenas no Campo",
    tabLabel: "Campo 2x",
    subtitulo: "2x por semana",
    info: "",
    inclui: [
      "Treinos técnicos e táticos no campo",
      "Metodologia profissional por faixa etária",
      "Acompanhamento individual dos atletas",
      "Avaliação contínua da evolução",
    ],
    opcoes: [
      { nome: "Mensal", preco: "R$ 239,90", periodo: "", destaque: false },
      { nome: "Trimestral", preco: "R$ 199,90", periodo: "/mês", destaque: true },
      { nome: "Semestral", preco: "R$ 179,90", periodo: "/mês", destaque: false },
    ],
  },
  {
    id: "completo",
    nome: "Plano Completo",
    tabLabel: "Campo + Academia",
    subtitulo: "Campo + Academia",
    info: "3x campo + 2x academia – academia não altera o valor",
    inclui: [
      "Todos os treinos do plano de campo",
      "2x semana na academia",
      "Preparação física sem carga pesada",
      "Prevenção de lesões e mobilidade",
    ],
    opcoes: [
      { nome: "Mensal", preco: "R$ 389,90", periodo: "", destaque: false },
      { nome: "Trimestral", preco: "R$ 349,90", periodo: "/mês", destaque: true },
      { nome: "Semestral", preco: "R$ 329,90", periodo: "/mês", destaque: false },
    ],
  },
  {
    id: "goleiro",
    nome: "Aulas de Goleiro",
    tabLabel: "Goleiro",
    subtitulo: "3x por semana",
    info: "",
    inclui: [
      "Treino específico para goleiros",
      "Técnica, posicionamento e reflexos",
      "Integração com as turmas da escolinha",
    ],
    opcoes: [
      { nome: "Plano Exclusivo", preco: "R$ 119,90", periodo: "", destaque: true },
      { nome: "Acréscimo E10", preco: "+ R$ 49,90", periodo: "", destaque: false },
    ],
  },
  {
    id: "extras",
    nome: "Extras e Avulsos",
    tabLabel: "Extras",
    subtitulo: "",
    info: "",
    inclui: [],
    opcoes: [
      { nome: "Kit de Uniforme", preco: "R$ 219,90", periodo: "", destaque: false },
      { nome: "Aula Avulsa", preco: "R$ 49,90", periodo: "", destaque: false },
    ],
  },
];

export const depoimentos = [
  {
    texto: "Melhor escolinha da região, meu filho ama estar lá, professores sólidos.",
    nome: "Laser Fast Tangará da Serra-MT / Gerência",
    estrelas: 5,
  },
  {
    texto: "Melhor escolinha de TGA, ótimos professores, super recomendo.",
    nome: "Davi Folador",
    estrelas: 5,
  },
  { texto: "A melhor escolinha de futebol da região.", nome: "Ana Claudia Tanaka", estrelas: 5 },
];

export const turmas = [
  "3 a 5 anos",
  "6 a 8 anos",
  "9 a 11 anos",
  "12 a 13 anos",
  "14 a 15 anos",
];

export const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Metodologia", href: "#metodologia" },
  { label: "Academia", href: "#academia" },
  { label: "Equipe", href: "#equipe" },
  { label: "Resultados", href: "#resultados" },
  { label: "Planos", href: "#planos" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Matrícula", href: "#matricula" },
];
