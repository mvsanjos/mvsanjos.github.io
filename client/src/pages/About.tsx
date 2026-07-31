import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Shield, Server, Users, FileText, GraduationCap, Briefcase, Globe, Award } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

const experience = [
  {
    role: "Diretor da Diretoria de Informática",
    org: "Fundação CECIERJ",
    location: "Rio de Janeiro, Brasil",
    period: "Atual",
    items: [
      "Presidência da Comissão do Plano Estratégico de Desenvolvimento de TIC (PEDTIC 2023)",
      "Participação ativa na aprovação de Instrumentos de Gestão (PPA, PAC)",
      "Encarregado (DPO) substituto — conformidade LGPD/GDPR",
      "Gestão de contratos de serviços terceirizados e infraestrutura de TI",
    ],
  },
  {
    role: "Diretor do Departamento de Suporte Técnico",
    org: "Fundação CECIERJ",
    location: "Rio de Janeiro, Brasil",
    period: "Período Anterior",
    items: [
      "Implementação do sistema GLPI (ITSM)",
      "Desenvolvimento de modelo de negócio para suporte técnico",
      "Treinamento de equipes e alinhamento institucional",
    ],
  },
  {
    role: "Gerente de Service Desk",
    org: "DETRAN-RJ",
    location: "Rio de Janeiro, Brasil",
    period: "Período",
    items: [
      "Coordenação de equipes e monitoramento de SLA",
      "Elaboração de relatórios de desempenho",
      "Implementação de iniciativas de melhoria contínua",
    ],
  },
];

const skills = [
  {
    category: "Administração Pública",
    icon: FileText,
    items: ["Governança Corporativa", "Orçamento Público", "Aquisições Públicas", "Compliance", "PPA, PAC", "Termo de Referência"],
  },
  {
    category: "Gestão e Liderança",
    icon: Users,
    items: ["Gestão de Projetos (TIC)", "Liderança de Equipes", "Gestão de Contratos", "Análise Multicritério", "ITSM (ITIL)"],
  },
  {
    category: "Segurança e Conformidade",
    icon: Shield,
    items: ["LGPD (GDPR)", "DPO", "Gestão de Riscos", "Políticas de Segurança"],
  },
  {
    category: "Tecnologia da Informação",
    icon: Server,
    items: ["Windows Server", "Linux Ubuntu", "Google Education", "Zabbix", "GLPI", "Redes de Telecom"],
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-[#0d1b3e]">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/manus-storage/about-bg_c123764f.png"
            alt=""
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0d1b3e]/70 to-[#0d1b3e]" />
        </div>

        <div className="container relative z-10">
          <motion.div initial="hidden" animate="visible" className="max-w-3xl">
            <motion.div custom={0} variants={fadeUp} className="mb-4">
              <span className="text-[#5dade2] text-xs font-mono uppercase tracking-widest flex items-center gap-2">
                <span className="status-dot" />
                Perfil Profissional
              </span>
            </motion.div>
            <motion.h1
              custom={1}
              variants={fadeUp}
              className="font-serif text-4xl lg:text-5xl font-bold text-white mb-6"
            >
              Marcus Vinicius Soares Anjos
            </motion.h1>
            <motion.p
              custom={2}
              variants={fadeUp}
              className="text-[#c8d6e5] text-lg leading-relaxed max-w-2xl"
            >
              Administrador Público e gestor de tecnologia com sólida experiência
              de 10+ anos em Governança Pública e Gestão Estratégica no setor
              público. Especialista em liderar processos de transformação digital
              e inovação.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 bg-[#142850]/30 border-y border-[#1a5276]/20">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Briefcase, label: "10+ anos", desc: "Experiência Profissional" },
              { icon: Shield, label: "DPO", desc: "Encarregado de Dados" },
              { icon: Globe, label: "BR → PT", desc: "Busca oportunidades em Portugal" },
              { icon: Award, label: "100%", desc: "Foco em Resultados" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="dashboard-card flex items-center gap-4 p-4"
              >
                <div className="p-2.5 rounded-md bg-[#1a5276]/30 shrink-0">
                  <item.icon size={20} className="text-[#5dade2]" />
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{item.label}</div>
                  <div className="text-[#8899a6] text-[10px] font-mono">{item.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-24 network-grid">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <span className="text-[#5dade2] text-xs font-mono uppercase tracking-widest mb-2 block flex items-center gap-2">
              <span className="status-dot" />
              Trajetória
            </span>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white">
              Experiência Profissional
            </h2>
          </motion.div>

          <div className="space-y-8">
            {experience.map((exp, i) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="dashboard-card pl-8 relative"
              >
                <div className="absolute left-[-9px] top-8 w-4 h-4 rounded-full bg-[#5dade2] border-4 border-[#0d1b3e] shadow-[0_0_10px_rgba(93,173,226,0.5)]" />
                <div className="p-6">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="text-white font-serif text-xl font-semibold">{exp.role}</h3>
                    <span className="text-[#5dade2] text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#1a5276]/30">{exp.period}</span>
                  </div>
                  <p className="text-[#5dade2] text-sm mb-4">{exp.org} — {exp.location}</p>
                  <ul className="space-y-2">
                    {exp.items.map((item) => (
                      <li key={item} className="text-[#c8d6e5] text-sm flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#5dade2] mt-2 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-24 bg-[#142850]/30 network-grid">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <span className="text-[#5dade2] text-xs font-mono uppercase tracking-widest mb-2 block flex items-center gap-2">
              <span className="status-dot" />
              Competências
            </span>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white">
              Habilidades e Conhecimentos
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="dashboard-card p-6"
              >
                <div className="p-2.5 rounded-md bg-[#1a5276]/30 inline-flex mb-4">
                  <skill.icon size={20} className="text-[#5dade2]" />
                </div>
                <h3 className="text-white font-semibold mb-4 text-sm">{skill.category}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#1a5276]/20 text-[#8899a6]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-24 network-grid">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <span className="text-[#5dade2] text-xs font-mono uppercase tracking-widest mb-2 block flex items-center gap-2">
              <span className="status-dot" />
              Formação
            </span>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white">
              Formação Acadêmica
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                degree: "Administração Pública",
                institution: "Universidade Federal Fluminense",
                icon: GraduationCap,
              },
              {
                degree: "Especialista em Projetos de Redes de Telecomunicações",
                institution: "Universidade Estácio de Sá",
                icon: GraduationCap,
              },
            ].map((edu, i) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="dashboard-card flex items-start gap-4 p-6"
              >
                <div className="p-3 rounded-md bg-[#1a5276]/30 shrink-0">
                  <edu.icon size={24} className="text-[#5dade2]" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">{edu.degree}</h3>
                  <p className="text-[#8899a6] text-sm font-mono">{edu.institution}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Languages */}
          <div className="mt-12 dashboard-card p-6">
            <h3 className="text-white font-serif text-xl font-semibold mb-6">Idiomas</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[#c8d6e5] text-sm font-mono">Português</span>
                  <span className="text-[#5dade2] text-[10px] font-mono">Nativo</span>
                </div>
                <div className="w-full h-2 rounded-full bg-[#1a5276]/30 overflow-hidden">
                  <div className="h-full rounded-full bg-gradient-to-r from-[#1a5276] to-[#5dade2] w-full" />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[#c8d6e5] text-sm font-mono">Inglês</span>
                  <span className="text-[#5dade2] text-[10px] font-mono">Básico</span>
                </div>
                <div className="w-full h-2 rounded-full bg-[#1a5276]/30 overflow-hidden">
                  <div className="h-full rounded-full bg-gradient-to-r from-[#1a5276] to-[#5dade2] w-[40%]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
