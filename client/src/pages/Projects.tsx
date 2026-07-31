import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Shield, Server, Users, FileText, Monitor, Database, BarChart3, CheckCircle } from "lucide-react";

const projects = [
  {
    title: "PEDTIC 2023 — Plano Estratégico de TI",
    category: "Governança",
    icon: FileText,
    description:
      "Presidência da Comissão do Plano Estratégico de Desenvolvimento de TIC, definindo a estratégia tecnológica para otimizar processos organizacionais e garantir o alinhamento com os objetivos institucionais da Fundação CECIERJ.",
    results: [
      "Estratégia tecnológica alinhada aos objetivos institucionais",
      "Coordenação de múltiplas frentes de TI",
      "Plano de aquisições e investimentos estruturado",
      "Governança de TI baseada em melhores práticas",
    ],
    tags: ["Planejamento", "Estratégia", "TIC", "Governança"],
  },
  {
    title: "Implementação GLPI — ITSM",
    category: "ITSM",
    icon: Monitor,
    description:
      "Implementação do sistema de gestão GLPI, alinhando processos de suporte técnico com as melhores práticas de ITSM (Information Technology Service Management) para aumentar a eficiência operacional.",
    results: [
      "Sistema de gestão de chamados operacional",
      "SLA automatizado por tipo de demanda",
      "Inventário de ativos integrado",
      "Base de conhecimento para auto-atendimento",
    ],
    tags: ["GLPI", "ITSM", "ITIL", "Open Source"],
  },
  {
    title: "Conformidade LGPD — DPO",
    category: "Segurança",
    icon: Shield,
    description:
      "Atuação como Encarregado (DPO) substituto, garantindo a conformidade com a LGPD e suas equivalências com o GDPR europeu. Mapeamento de dados, políticas de privacidade e treinamento de equipes.",
    results: [
      "Mapeamento completo de dados pessoais",
      "Políticas de privacidade implementadas",
      "Treinamento de servidores em LGPD",
      "Preparação para auditoria regulatória",
    ],
    tags: ["LGPD", "GDPR", "DPO", "Compliance"],
  },
  {
    title: "Monitoramento Zabbix",
    category: "Infraestrutura",
    icon: BarChart3,
    description:
      "Implementação de monitoramento proativo de infraestrutura com Zabbix, cobrindo servidores, redes, serviços e aplicações. Dashboards executivos para gestão e alertas inteligentes.",
    results: [
      "Monitoramento 24/7 de toda infraestrutura",
      "Dashboards executivos em tempo real",
      "Redução de tempo de resposta a incidentes",
      "Alertas inteligentes com baixa taxa de falsos positivos",
    ],
    tags: ["Zabbix", "Monitoramento", "Infraestrutura", "DevOps"],
  },
  {
    title: "Gestão de Infraestrutura Cloud",
    category: "Tecnologia",
    icon: Server,
    description:
      "Administração da infraestrutura de TI incluindo servidores, redes e Google Education. Gestão de contratos de serviços terceirizados com foco em custo-eficiência e qualidade de serviço.",
    results: [
      "Infraestrutura de TI otimizada",
      "Google Education integrado",
      "Contratos de serviços gerenciados",
      "Redução de custos operacionais",
    ],
    tags: ["Cloud", "Google", "Infraestrutura", "Contratos"],
  },
  {
    title: "Gestão de Banco de Dados",
    category: "Dados",
    icon: Database,
    description:
      "Administração e otimização de bancos de dados institucionais, garantindo integridade, performance e segurança dos dados. Implementação de políticas de backup e recuperação.",
    results: [
      "Banco de dados otimizado para performance",
      "Políticas de backup automatizadas",
      "Integridade e segurança dos dados",
      "Documentação de estrutura e processos",
    ],
    tags: ["Banco de Dados", "Performance", "Segurança"],
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-[#0d1b3e]">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/manus-storage/projects-pattern_10e2148f.png"
            alt=""
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0d1b3e]/50 to-[#0d1b3e]" />
        </div>

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <span className="text-[#5dade2] text-xs font-mono uppercase tracking-widest mb-4 block flex items-center gap-2">
              <span className="status-dot" />
              Portfólio
            </span>
            <h1 className="font-serif text-4xl lg:text-5xl font-bold text-white mb-4">
              Projetos & Iniciativas
            </h1>
            <p className="text-[#c8d6e5] text-lg leading-relaxed">
              Projetos de governança de TI, infraestrutura, conformidade legal e
              transformação digital liderados ao longo da carreira profissional.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 network-grid">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="dashboard-card p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-md bg-[#1a5276]/30">
                    <project.icon size={16} className="text-[#5dade2]" />
                  </div>
                  <span className="text-[#5dade2] text-[10px] font-mono uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-semibold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-[#8899a6] text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                <div className="mb-5">
                  <h4 className="text-[#5dade2] text-[10px] font-mono uppercase tracking-wider mb-3 flex items-center gap-2">
                    <span className="status-dot" />
                    Resultados
                  </h4>
                  <ul className="space-y-2">
                    {project.results.map((result) => (
                      <li
                        key={result}
                        className="text-[#c8d6e5] text-sm flex items-start gap-2"
                      >
                        <CheckCircle size={12} className="text-[#5dade2] mt-1 shrink-0" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#1a5276]/20 text-[#8899a6]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer */}
      <section className="py-24 bg-[#142850]/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#5dade2] text-xs font-mono uppercase tracking-widest mb-2 block flex items-center gap-2">
              <span className="status-dot" />
              Além do Trabalho
            </span>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-6">
              Trabalho Voluntário
            </h2>
            <div className="dashboard-card max-w-2xl p-8">
              <p className="text-[#c8d6e5] leading-relaxed mb-6">
                Coordenador de programas de treinamento e mentoria, demonstrando
                soft skills em liderança e desenvolvimento interpessoal. Foco no
                desenvolvimento de pessoas e transferência de conhecimento.
              </p>
              <div className="flex items-center gap-3">
                <Users size={20} className="text-[#5dade2]" />
                <span className="text-[#8899a6] text-sm font-mono">
                  Liderança &bull; Mentoria &bull; Desenvolvimento de Pessoas
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
