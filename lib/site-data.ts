import type { ComponentType } from "react";
import {
  BarChart3,
  Bot,
  BriefcaseBusiness,
  ChartNoAxesCombined,
  CheckCircle2,
  Globe2,
  HeartHandshake,
  MapPinned,
  Megaphone,
  MessageCircle,
  MonitorCog,
  Search,
  Share2,
  ShoppingBag,
} from "lucide-react";

export const whatsappUrl =
  "https://wa.me/5547996748666?text=Ol%C3%A1%2C%20quero%20conhecer%20a%20assessoria%20da%20Gogoup.";

export const documentUrl = "/gogoup_servicos.pdf";

export type IconComponent = ComponentType<{ className?: string; "aria-hidden"?: boolean }>;

export const assessmentCards = [
  "Seu negócio é organizado e automatiza tarefas para atender mais clientes com menos esforço?",
  "Você conhece seu público e aprimora constantemente seus produtos, serviços e atendimento?",
  "Sua empresa possui uma cultura de atendimento bem definida? Sua equipe sabe como agir em diferentes situações?",
  "Os clientes encontram sua empresa na internet com facilidade, informações claras e formas rápidas de contato?",
  "Seus clientes recomendam seu negócio para amigos e familiares?",
];

export const onlinePresenceCards: {
  title: string;
  eyebrow: string;
  icon: IconComponent;
  image: string;
  accent: string;
  text: string;
  bullets: string[];
}[] = [
  {
    title: "Google Business Profile",
    eyebrow: "Google Meu Negócio",
    icon: MapPinned,
    image: "/images/google-business.svg",
    accent: "from-[#4f75ff] to-[#8fd3ff]",
    text: "Ajustes estratégicos para seu negócio aparecer melhor nas buscas locais.",
    bullets: [
      "Perfil profissional",
      "Descrição estratégica do negócio",
      "Escolha correta de categorias",
      "Organização de fotos relevantes",
      "Configuração de serviços ou produtos",
      "Links diretos para WhatsApp",
      "Monitoramento de avaliações",
    ],
  },
  {
    title: "WhatsApp",
    eyebrow: "Atendimento e vendas",
    icon: MessageCircle,
    image: "/images/whatsapp-service.svg",
    accent: "from-[#16b879] to-[#9ee7c0]",
    text: "Transforme o WhatsApp em um canal de atendimento claro, rápido e vendável.",
    bullets: [
      "Link direto para contato",
      "Saudações e respostas rápidas",
      "Mensagens automáticas",
      "Catálogo e etiquetas",
      "Organização de conversas",
      "Roteiros para atendimento",
      "Integrações importantes",
    ],
  },
  {
    title: "Redes Sociais",
    eyebrow: "Instagram, Facebook e outros",
    icon: Share2,
    image: "/images/social-service.svg",
    accent: "from-[#de6bab] to-[#7380ff]",
    text: "Organização visual e estratégica para fortalecer confiança e relacionamento.",
    bullets: [
      "Bio com informações claras",
      "Destaques organizados",
      "Pauta com conteúdo em vendas",
      "Frequência de presença",
      "Posts que convertem em vendas",
      "Comunicação alinhada à marca",
      "Conteúdo comentado",
    ],
  },
  {
    title: "Site Profissional",
    eyebrow: "Credibilidade e conversão",
    icon: Globe2,
    image: "/images/site-service.svg",
    accent: "from-[#72b9e2] to-[#b7dfff]",
    text: "Um site leve, claro e preparado para receber clientes em qualquer dispositivo.",
    bullets: [
      "Domínio próprio",
      "Hospedagem e publicação",
      "Menu e seções estratégicas",
      "Botões de contato",
      "Campanhas e pixels",
      "Formulários e conversões",
      "Atualizações e manutenção",
    ],
  },
  {
    title: "Campanhas de Anúncios",
    eyebrow: "Tráfego pago",
    icon: Megaphone,
    image: "/images/ads-service.svg",
    accent: "from-[#ef7a91] to-[#ffc2cf]",
    text: "Campanhas simples e objetivas para gerar alcance, visitas, leads e vendas.",
    bullets: [
      "Design profissional",
      "Campanha para site, WhatsApp e redes",
      "Escolha de público-alvo",
      "Segmentação regional",
      "E-mail marketing automatizado",
    ],
  },
  {
    title: "Monitoramento",
    eyebrow: "Acompanhamento",
    icon: MonitorCog,
    image: "/images/monitoring-service.svg",
    accent: "from-[#ff8d3d] to-[#ffbdd3]",
    text: "Acompanhamento profissional contínuo para entender resultados e melhorar decisões.",
    bullets: [
      "Avaliações e reputação",
      "Interações no Google Maps",
      "Comentários nas redes",
      "Relatórios de visitas e contatos",
      "Coleta de depoimentos",
      "Resposta a dúvidas e reclamações",
    ],
  },
  {
    title: "SEO Local",
    eyebrow: "Busca orgânica",
    icon: Search,
    image: "/images/seo-service.svg",
    accent: "from-[#50d1db] to-[#afebef]",
    text: "Otimização para motores de busca com foco em presença regional.",
    bullets: [
      "Aumento de cliques e mapas",
      "Inserção de termos úteis",
      "Zero custo por clique",
      "Credibilidade sem depender de anúncios",
      "SEO local ajuda a aparecer quando procuram por clientes próximos",
    ],
  },
];

export const statistics = [
  {
    value: "76%",
    text: "dos consumidores pesquisam online antes de visitar uma loja",
    source: "Estudo: Think with Google",
  },
  {
    value: "2x",
    text: "\"Negócios com presença online têm até 2x mais chances de crescimento\"",
    source: "Fontes: Sebrae e Google",
  },
  {
    value: "88%",
    text: "das pessoas confiam em avaliações online como recomendação pessoal",
    source: "Fontes: BrightLocal, Google Business Profile",
  },
];

export const pillars = [
  {
    number: "02",
    title: "Organização e Automatização.",
    headline: "Sua empresa organizada e preparada para crescer.",
    icon: BriefcaseBusiness,
    color: "bg-[#79aeb8]",
    text: "Criamos processos, organizamos informações e estruturamos a gestão para que o negócio funcione com mais eficiência, menos sobrecarga e maior controle das operações.",
  },
  {
    number: "03",
    title: "Relacionamento e Atendimento",
    headline: "Seja amado e indicado pelos seus clientes.",
    icon: HeartHandshake,
    color: "bg-[#cc6aa2]",
    text: "Criamos processos, organizamos informações e estruturamos a gestão para que o negócio funcione com mais eficiência, menos sobrecarga e maior controle das operações.",
  },
  {
    number: "04",
    title: "Análise de Negócio.",
    headline: "Só quem sabe onde está pode planejar o futuro.",
    icon: BarChart3,
    color: "bg-[#4388bd]",
    text: "Criamos processos, organizamos informações e estruturamos a gestão para que o negócio funcione com mais eficiência, menos sobrecarga e maior controle das operações.",
  },
];

export const salesServices = [
  {
    title: "Atendimento Digital Inteligente via WhatsApp",
    icons: [MessageCircle, Bot],
    color: "#159b7e",
    description:
      "Estrutura completa de atendimento digital focada em organizar e profissionalizar a comunicação com seus clientes.",
    ideal: ["Clínicas", "Consultórios", "Salões", "Serviços em geral"],
    includes: [
      "Fluxo de atendimento no WhatsApp",
      "Chatbot para triagem inicial",
      "Coleta de informações do cliente",
      "Agendamento automático ou semi-automático",
      "Mensagens de confirmação",
      "Organização com etiquetas no WhatsApp Business",
      "Respostas rápidas padronizadas",
    ],
    objective: "Agilidade e organização no atendimento.",
  },
  {
    title: "Vendas por WhatsApp e Marketplaces",
    icons: [MessageCircle, ShoppingBag],
    color: "#f36a43",
    description:
      "Sistema focado em converter cada contato em uma venda concreta, do primeiro clique ao pagamento.",
    ideal: ["Restaurantes", "Confeitarias", "Lojas", "Delivery", "Pequenos e-commerces"],
    includes: [
      "Fluxo de venda no WhatsApp",
      "Apresentação de produtos (catálogo)",
      "Chatbot para escolha de produtos",
      "Perguntas de qualificação",
      "Direcionamento para pagamento ou pedido",
      "Recuperação de clientes que desistiram",
    ],
    objective: "Aumentar conversão e facilitar pedidos.",
  },
  {
    title: "Lojas Online",
    icons: [Search, ChartNoAxesCombined],
    color: "#0068c9",
    description:
      "Estrutura para vender online com presença clara, páginas de conversão e acompanhamento de resultados.",
    ideal: ["Lojas físicas", "Marcas autorais", "Serviços digitais", "Produtos locais"],
    includes: [
      "Página de venda responsiva",
      "Botões de contato e pagamento",
      "Organização de produtos e categorias",
      "Integração com WhatsApp",
      "Análise de presença e conversão",
      "Recomendações de melhoria contínua",
    ],
    objective: "Criar uma operação online clara, confiável e vendável.",
  },
];

export const personalizedBullets = [
  "Análise do cenário atual da sua empresa",
  "Definição de prioridades de comunicação e vendas",
  "Plano de ação com etapas claras e acompanhamento",
];

export const footerLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/", icon: "in" },
  { label: "Portfólio", href: "https://www.behance.net/", icon: "▰" },
];

export const heroChecklist = [
  "Atendimento regional",
  "Credibilidade",
  "Liderar as vendas",
  "Presença no Google",
];

export const brandValues = {
  phone: "+55 (47) 996748666",
  email: "contato@gogoup.com",
};

export const CheckIcon = CheckCircle2;
