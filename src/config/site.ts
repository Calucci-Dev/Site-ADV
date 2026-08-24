export interface PracticeArea {
  id: string;
  iconName: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  keyServices: string[];
}

export interface Attorney {
  id: string;
  name: string;
  role: string;
  oab: string;
  specialty: string;
  bio: string;
  education: string[];
  image: string;
  email: string;
  linkedin: string;
}

export interface Statistic {
  id: string;
  value: string;
  label: string;
  description: string;
  iconName: string;
}

export interface Differential {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface LegalArticle {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  summary: string;
  content: string[];
  author: string;
  authorRole: string;
  image: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export const siteConfig = {
  // Informações Institucionais Principais
  firmName: "Almeida & Rocha",
  firmNameSuffix: "Advocacia",
  tagline: "Clareza em causas complexas",
  subTagline: "Assessoria jurídica estratégica e personalizada para empresas, empresários e famílias na condução de seus desafios mais decisivos.",
  
  // Contato e Localização
  phone: "+55 (62) 99419-1518",
  phoneRaw: "5562994191518",
  whatsapp: "5562994191518",
  whatsappFormatted: "(62) 99419-1518",
  email: "contato@almeidarochalaw.com.br",
  address: "Av. T-63, nº 1296, Edifício Metropolitan, 14º Andar, Setor Bueno, Goiânia - GO, CEP 74230-100",
  addressShort: "Setor Bueno, Goiânia - GO",
  businessHours: "Segunda a Sexta, das 08h30 às 18h30",
  oabRegistration: "OAB/GO nº 4.821 | Sociedade de Advogados",

  // Redes Sociais
  socialLinks: {
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    jusbrasil: "https://jusbrasil.com.br",
  },

  // Navegação do Site
  navLinks: [
    { label: "Início", href: "#inicio" },
    { label: "Áreas de Atuação", href: "#areas-atuacao" },
    { label: "Advogados", href: "#advogados" },
    { label: "Resultados", href: "#estatisticas" },
    { label: "Sobre Nós", href: "#sobre" },
    { label: "Diferenciais", href: "#diferenciais" },
    { label: "Artigos", href: "#conteudo-juridico" },
    { label: "Contato", href: "#contato" },
  ] as NavLink[],

  // Imagens Centrais (Alta Resolução e Temática Jurídica)
  images: {
    // Imagem da Hero (Escritório executivo sofisticado com vista para arranha-céus)
    heroOffice: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=85",
    // Imagem do Sobre Nós (Biblioteca jurídica clássica / Sala de deliberação de sócios)
    aboutMeeting: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=85",
    // Sala de Reunião Executiva
    boardroom: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=85",
    // Fachada / Arquitetura Corporativa
    firmBuilding: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85",
    // Selo de citação do Hero
    heroQuoteText: "Foco no seu negócio. Comprometimento com o seu sucesso.",
  },

  // Áreas de Atuação
  practiceAreas: [
    {
      id: "empresarial-societario",
      iconName: "Building2",
      title: "Direito Empresarial & Societário",
      shortDescription: "Estruturação societária, acordos de sócios, governança corporativa e planejamento de continuidade dos negócios.",
      fullDescription: "Atuamos na estruturação e proteção jurídica de sociedades empresárias de médio e grande porte, elaborando estatutos personalizados, acordos de acionistas, reestruturações societárias e assessorando conselhos de administração com foco na sustentabilidade dos negócios.",
      keyServices: [
        "Elaboração e revisão de Acordos de Sócios e Acionistas",
        "Constituição de Holdings Patrimoniais e Operacionais",
        "Governança Corporativa e Programas de Integridade",
        "Dissoluções parciais de sociedades e resolução de disputas societárias",
        "Due Diligence jurídica para auditorias e investimentos",
      ],
    },
    {
      id: "contratos-estrategicos",
      iconName: "FileText",
      title: "Contratos & Negociações",
      shortDescription: "Elaboração, revisão minuciosa e negociação de contratos complexos nacionais e internacionais.",
      fullDescription: "Garantimos a máxima segurança jurídica para as transações de sua empresa. Redigimos instrumentos contratuais claros, precisos e dotados de mecanismos eficazes de mitigação de riscos e alocação de responsabilidades.",
      keyServices: [
        "Contratos de Fornecimento, Distribuição e Representação Comercial",
        "Contratos Imobiliários Comerciais (Built to Suit, Sale & Leaseback)",
        "Termos de Parceria Estratégica e Joint Ventures",
        "Negociação de cláusulas de confidencialidade (NDA) e não-concorrência",
        "Auditoria de passivos e contingências contratuais",
      ],
    },
    {
      id: "fusoes-aquisicoes",
      iconName: "Scale",
      title: "Fusões & Aquisições (M&A)",
      shortDescription: "Assessoria completa e multidisciplinar em operações de compra, venda, fusão e captação de recursos.",
      fullDescription: "Conduzimos todas as etapas de processos de M&A com rigor técnico e discrição, desde a estruturação preliminar (MoU/LOI) e due diligence detalhada até a negociação dos contratos definitivos (SPA) e fechamento da operação.",
      keyServices: [
        "Assessoria a compradores (Buy-side) e vendedores (Sell-side)",
        "Estruturação de aquisições de participações societárias ou ativos",
        "Coordenação e execução de Due Diligence jurídica multidisciplinar",
        "Redação de Contratos de Compra e Venda de Ações/Quotas (SPA/QPA)",
        "Operações de Private Equity e Venture Capital",
      ],
    },
    {
      id: "contencioso-arbitragem",
      iconName: "Shield",
      title: "Contencioso Estratégico & Arbitragem",
      shortDescription: "Representação de alta performance em disputas cíveis complexas, tribunais superiores e câmaras arbitrais.",
      fullDescription: "Defendemos os interesses de nossos clientes em litígios de alto valor agregado e repercussão econômica. Nossa abordagem combina profundidade técnica, estratégia processual refinada e sustentação oral combativa nos Tribunais de Justiça e Tribunais Superiores (STJ e STF).",
      keyServices: [
        "Ações indenizatórias e disputas contratuais de grande porte",
        "Procedimentos arbitrais perante as principais câmaras do país (CCBC, CAMARB, AMCHAM)",
        "Execuções de títulos extrajudiciais e recuperação de créditos de alta complexidade",
        "Medidas cautelares urgentes e tutela de urgência",
        "Recursos e memoriais estratégicos para o STJ e STF",
      ],
    },
    {
      id: "trabalhista-corporativo",
      iconName: "Briefcase",
      title: "Direito do Trabalho Corporativo",
      shortDescription: "Consultoria preventiva, gestão de passivos trabalhistas e defesa em reclamatórias estratégicas.",
      fullDescription: "Orientamos departamentos de recursos humanos e diretorias executivas na conformidade trabalhista, elaboração de planos de remuneração variável e defesa contundente em reclamações trabalhistas individuais e coletivas.",
      keyServices: [
        "Auditoria preventiva de rotinas e políticas trabalhistas",
        "Estruturação de Planos de Stock Options e Bônus de Retenção",
        "Negociações com sindicatos e acordos coletivos de trabalho",
        "Defesa de executivos e empresas em autos de infração do MTE e MPT",
        "Contencioso trabalhista patronal de alta complexidade",
      ],
    },
    {
      id: "propriedade-intelectual",
      iconName: "Globe",
      title: "Propriedade Intelectual & Marcas",
      shortDescription: "Proteção de ativos intangíveis, registro de marcas e patentes, softwares e contratos de licenciamento.",
      fullDescription: "Blindamos o capital intelectual de sua empresa. Realizamos registros perante o INPI, estruturamos acordos de transferência de tecnologia e atuamos contra concorrência desleal e infração de direitos autorais.",
      keyServices: [
        "Registro e vigilância contínua de marcas e patentes no INPI",
        "Contratos de Licenciamento, Franquia e Cessão de Direitos",
        "Proteção jurídica de softwares, algoritmos e segredos de negócio",
        "Combate à pirataria, contrafação e concorrência desleal",
        "Adequação de empresas e sistemas à LGPD (Privacidade de Dados)",
      ],
    },
  ] as PracticeArea[],

  // Equipe de Advogados
  attorneys: [
    {
      id: "carlos-almeida",
      name: "Dr. Carlos Eduardo Almeida",
      role: "Sócio Fundador",
      oab: "OAB/GO 32.140",
      specialty: "Direito Empresarial, Societário & M&A",
      bio: "Com mais de 22 anos de atuação jurídica, liderou dezenas de operações de fusões e aquisições e reestruturações societárias de alta complexidade no Centro-Oeste e Sudeste do Brasil. Mestre em Direito Comercial pela PUC-SP e especialista em Governança Corporativa pelo IBGC.",
      education: [
        "Bacharel em Direito pela Universidade Federal de Goiás (UFG)",
        "Mestre em Direito Comercial pela PUC-SP",
        "Especialização em Direito dos Negócios pela FGV-Direito SP",
        "Membro Efetivo da Comissão de Direito Societário e Falências",
      ],
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=85",
      email: "carlos.almeida@almeidarochalaw.com.br",
      linkedin: "https://linkedin.com",
    },
    {
      id: "helena-rocha",
      name: "Dra. Helena Rocha",
      role: "Sócia Fundadora",
      oab: "OAB/GO 28.750",
      specialty: "Contencioso Estratégico & Arbitragem",
      bio: "Reconhecida pela precisão técnica e expressiva taxa de êxito em disputas judiciais perante Tribunais de Justiça e Tribunais Superiores (STJ e STF). Doutora em Direito Processual Civil pela USP e árbitra cadastrada em importantes câmaras brasileiras.",
      education: [
        "Bacharel em Direito pela Pontifícia Universidade Católica de Goiás (PUC-GO)",
        "Doutora e Mestre em Processo Civil pela USP",
        "Pós-graduada em Arbitragem Comercial Internacional",
        "Autora de obras jurídicas sobre tutelas provisórias e recursos",
      ],
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=85",
      email: "helena.rocha@almeidarochalaw.com.br",
      linkedin: "https://linkedin.com",
    },
    {
      id: "miguel-bennett",
      name: "Dr. Miguel Bennett",
      role: "Sócio",
      oab: "OAB/GO 41.890",
      specialty: "Direito Tributário & Planejamento Fiscal",
      bio: "Especialista em planejamento tributário corporativo, recuperação de créditos fiscais e defesas administrativas perante o CARF e Receita Federal. Ampla vivência no atendimento a indústrias, agronegócio e empresas do setor financeiro.",
      education: [
        "Bacharel em Direito pela Universidade de Brasília (UnB)",
        "Especialista em Direito Tributário pelo Instituto Brasileiro de Direito Tributário (IBDT)",
        "LL.M. em Direito Tributário Internacional pela Queen Mary University of London",
      ],
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=85",
      email: "miguel.bennett@almeidarochalaw.com.br",
      linkedin: "https://linkedin.com",
    },
    {
      id: "sofia-takahashi",
      name: "Dra. Sofia Takahashi",
      role: "Sócia",
      oab: "OAB/GO 44.520",
      specialty: "Propriedade Intelectual, Contratos & Tecnologia",
      bio: "Focada na proteção de ativos imateriais, segurança de dados corporativos e contratos de inovação. Atua diretamente com startups de alto crescimento, empresas de tecnologia e franquias em expansão nacional.",
      education: [
        "Bacharel em Direito pela Universidade Federal de Minas Gerais (UFMG)",
        "Pós-graduada em Direito da Propriedade Intelectual pela FGV",
        "Certificação Internacional em Privacidade e Proteção de Dados (CIPP/E)",
      ],
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=85",
      email: "sofia.takahashi@almeidarochalaw.com.br",
      linkedin: "https://linkedin.com",
    },
  ] as Attorney[],

  // Estatísticas & Resultados Comprovados
  statistics: [
    {
      id: "casos",
      value: "1.450+",
      label: "Casos Concluídos",
      description: "Processos e demandas estratégicas conduzidas com rigor e êxito.",
      iconName: "Trophy",
    },
    {
      id: "clientes",
      value: "920+",
      label: "Clientes Atendidos",
      description: "Grupos empresariais, companhias familiares e executivos de ponta.",
      iconName: "Users",
    },
    {
      id: "experiencia",
      value: "22+",
      label: "Anos de Experiência",
      description: "Histórico sólido de atuação ininterrupta e reconhecida no mercado.",
      iconName: "Award",
    },
    {
      id: "setores",
      value: "45+",
      label: "Setores Atendidos",
      description: "Agro, Indústria, Saúde, Tecnologia, Varejo e Construção Civil.",
      iconName: "Globe2",
    },
  ] as Statistic[],

  // Diferenciais Competitivos
  differentials: [
    {
      id: "personalizacao",
      title: "Atendimento Direto com Sócios",
      description: "Cada cliente é atendido diretamente por sócios sêniores, garantindo profundidade analítica e agilidade nas decisões.",
      iconName: "UserCheck",
    },
    {
      id: "estrategia",
      title: "Visão Holística & Preventiva",
      description: "Não apenas solucionamos litígios; mapeamos riscos com antecedência para preservar o patrimônio e a reputação da sua empresa.",
      iconName: "Compass",
    },
    {
      id: "tecnologia",
      title: "Tecnologia & Segurança Máxima",
      description: "Sistemas jurídicos de última geração com criptografia de ponta a ponta e total conformidade com as normas da LGPD.",
      iconName: "Lock",
    },
    {
      id: "transparencia",
      title: "Transparência & Comunicação Clara",
      description: "Relatórios executivos periódicos, sem jargões desnecessários, com métricas objetivas de probabilidade e andamento processual.",
      iconName: "FileCheck",
    },
  ] as Differential[],

  // Conteúdo Jurídico / Artigos & Insights
  articles: [
    {
      id: "governanca-2026",
      title: "Governança Corporativa e Gestão de Riscos Contratuais em 2026",
      category: "Direito Societário",
      date: "14 de Fevereiro de 2026",
      readTime: "5 min de leitura",
      summary: "Como estruturar cláusulas de salvaguarda e alocação de responsabilidades em contratos de longo prazo frente às novas dinâmicas regulatórias.",
      content: [
        "A evolução do ambiente de negócios exige que contratos comerciais transcendam a mera formalização de obrigações: eles devem funcionar como instrumentos dinâmicos de mitigação de contingências.",
        "Neste artigo, analisamos as cláusulas indispensáveis para a blindagem de fluxos de caixa, penalidades proporcionais e mecanismos alternativos de resolução de conflitos como a arbitragem escalonada.",
        "Recomenda-se que conselhos e diretorias revisem periodicamente sua matriz de riscos contratuais a cada novo ciclo fiscal."
      ],
      author: "Dr. Carlos Eduardo Almeida",
      authorRole: "Sócio Fundador",
      image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=85",
    },
    {
      id: "planejamento-sucessorio",
      title: "Planejamento Sucessório e Proteção Patrimonial de Empresas Familiares",
      category: "Empresarial & Família",
      date: "28 de Janeiro de 2026",
      readTime: "6 min de leitura",
      summary: "Estruturas societárias eficientes para garantir a perenidade do negócio familiar e mitigar conflitos e custos de inventário.",
      content: [
        "Mais de 75% das empresas familiares brasileiras enfrentam severos abalos patrimoniais durante a transição geracional.",
        "A criação de holdings puras e patrimoniais, associada a protocolos de família bem definidos e doações com reserva de usufruto, permite economia tributária expressiva e segurança para todas as gerações.",
        "Antecipar o debate sucessório é o maior legado de estabilidade que um fundador pode deixar à sua organização."
      ],
      author: "Dra. Helena Rocha",
      authorRole: "Sócia Fundadora",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=85",
    },
    {
      id: "reforma-tributaria-impactos",
      title: "Reforma Tributária: Estratégias Práticas para os Setores de Serviços e Indústria",
      category: "Direito Tributário",
      date: "10 de Janeiro de 2026",
      readTime: "7 min de leitura",
      summary: "Análise detalhada do novo sistema de tributação sobre o consumo (IBS e CBS) e seus reflexos no planejamento tributário corporativo.",
      content: [
        "A transição para o novo modelo tributário exige reavaliação imediata da cadeia de suprimentos e dos contratos vigentes.",
        "Examinamos como o creditamento amplo pode favorecer certas operações industriais, enquanto empresas de serviços precisarão de reestruturação de precificação e planejamento orçamentário prévio.",
        "Nossa equipe tributária tem elaborado diagnósticos de impacto personalizados para que nossos clientes mantenham sua competitividade."
      ],
      author: "Dr. Miguel Bennett",
      authorRole: "Sócio Especialista em Tributário",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=85",
    },
  ] as LegalArticle[],
};
