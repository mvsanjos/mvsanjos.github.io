import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Shield, Server, Users, FileText, ArrowRight, Linkedin, Mail } from "lucide-react";
import { blogPosts } from "@/lib/blogData";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0d1b3e]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/manus-storage/hero-bg_3eb19f3a.png"
            alt=""
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0d1b3e]/40 via-[#0d1b3e]/60 to-[#0d1b3e]" />
        </div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-64 h-64 bg-[#5dade2]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#1a5276]/10 rounded-full blur-3xl" />
        </div>

        <div className="container relative z-10 pt-32 pb-20">
          <motion.div initial="hidden" animate="visible" className="max-w-3xl">
            <motion.div custom={0} variants={fadeUp} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1a5276]/30 border border-[#5dade2]/30 text-[#5dade2] text-xs font-mono uppercase tracking-widest">
                <span className="status-dot" />
                Governança &bull; Tecnologia &bull; Inovação
              </span>
            </motion.div>

            <motion.h1
              custom={1}
              variants={fadeUp}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            >
              Transformando a{" "}
              <span className="text-[#5dade2] glow-text">Governança Pública</span>{" "}
              através da Tecnologia
            </motion.h1>

            <motion.p
              custom={2}
              variants={fadeUp}
              className="text-[#c8d6e5] text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl"
            >
              Administrador Público com 10+ anos liderando projetos estratégicos
              de TI, conformidade LGPD e transformação digital no setor público.
            </motion.p>

            <motion.div custom={3} variants={fadeUp} className="flex flex-wrap gap-4">
              <Link href="/sobre">
                <button className="group px-8 py-3.5 bg-[#1a5276] hover:bg-[#2471a3] text-white font-medium rounded-md transition-all duration-200 active:scale-[0.97] flex items-center gap-2 shadow-lg shadow-[#1a5276]/30">
                  Conheça meu trabalho
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <a
                href="https://www.linkedin.com/in/marcus-vin%C3%ADcius-soares-anjos-2106ba254/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="px-8 py-3.5 border border-[#1a5276] text-[#5dade2] hover:bg-[#1a5276]/20 rounded-md transition-all duration-200 flex items-center gap-2 active:scale-[0.97]">
                  <Linkedin size={18} />
                  LinkedIn
                </button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative z-10 -mt-1">
        <div className="bg-[#142850] border-y border-[#1a5276]/30">
          <div className="container py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "10+", label: "Anos de Experiência" },
                { value: "DPO", label: "Encarregado de Dados" },
                { value: "ITIL", label: "Gestão de Serviços" },
                { value: "LGPD", label: "Conformidade Legal" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="font-serif text-2xl lg:text-3xl font-bold text-[#5dade2] mb-1">
                    {stat.value}
                  </div>
                  <div className="text-[#8899a6] text-xs font-mono uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 relative network-grid">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[#5dade2] text-xs font-mono uppercase tracking-widest mb-4 block">
                <span className="status-dot mr-2" />
                Sobre
              </span>
              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-6">
                Liderança Estratégica em TI e Gestão Pública
              </h2>
              <p className="text-[#c8d6e5] leading-relaxed mb-6">
                Diretor de Informática na Fundação CECIERJ com experiência
                comprovada em governança corporativa, gestão de projetos
                estratégicos de TIC, e conformidade legal incluindo a atuação
                como Encarregado (DPO) substituto.
              </p>
              <p className="text-[#8899a6] leading-relaxed mb-8">
                Especializado em otimizar processos organizacionais através de
                tecnologia, com foco em eficiência, transparência e
                sustentabilidade. Experiência na elaboração do PEDTIC 2023,
                implementação de sistemas ITSM (GLPI), monitoramento de
                infraestrutura (Zabbix) e conformidade com LGPD/GDPR.
              </p>
              <Link href="/sobre">
                <button className="group flex items-center gap-2 text-[#5dade2] hover:text-white font-medium transition-colors">
                  Ver perfil completo
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                {
                  icon: Shield,
                  title: "LGPD / GDPR",
                  desc: "Conformidade e proteção de dados",
                },
                {
                  icon: Server,
                  title: "Infraestrutura",
                  desc: "Servidores, redes e cloud",
                },
                {
                  icon: Users,
                  title: "Liderança",
                  desc: "Equipes multidisciplinares",
                },
                {
                  icon: FileText,
                  title: "Governança",
                  desc: "PPA, PAC, PEDTIC",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="dashboard-card p-6"
                >
                  <item.icon size={20} className="text-[#5dade2] mb-3" />
                  <h3 className="text-white font-semibold text-sm mb-1">{item.title}</h3>
                  <p className="text-[#8899a6] text-xs font-mono">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section className="py-24 bg-[#142850]/30 network-grid">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#5dade2] text-xs font-mono uppercase tracking-widest mb-4 block">
              <span className="status-dot mr-2" />
              Projetos em Destaque
            </span>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-4">
              Iniciativas que Transformam
            </h2>
            <p className="text-[#8899a6] max-w-2xl mx-auto">
              Projetos de governança de TI, infraestrutura e transformação digital
              liderados ao longo da carreira.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "PEDTIC 2023",
                desc: "Presidência da Comissão do Plano Estratégico de Desenvolvimento de TIC, definindo a estratégia tecnológica institucional.",
                tags: ["Planejamento", "Estratégia", "TIC"],
                status: "Concluído",
              },
              {
                title: "Implementação GLPI",
                desc: "Sistema de gestão ITSM alinhado às melhores práticas, aumentando a eficiência operacional do suporte técnico.",
                tags: ["ITSM", "ITIL", "Open Source"],
                status: "Concluído",
              },
              {
                title: "Conformidade LGPD",
                desc: "Atuação como DPO substituto, garantindo conformidade com a legislação de proteção de dados pessoais.",
                tags: ["LGPD", "GDPR", "Compliance"],
                status: "Ativo",
              },
            ].map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="dashboard-card p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[#5dade2] text-[10px] font-mono uppercase tracking-wider">
                    Projeto
                  </span>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                    project.status === "Ativo"
                      ? "bg-[#5dade2]/20 text-[#5dade2]"
                      : "bg-[#1a5276]/30 text-[#8899a6]"
                  }`}>
                    {project.status}
                  </span>
                </div>
                <h3 className="text-white font-serif text-xl font-semibold mb-3">
                  {project.title}
                </h3>
                <p className="text-[#8899a6] text-sm leading-relaxed mb-4">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#1a5276]/30 text-[#5dade2]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/projetos">
              <button className="group inline-flex items-center gap-2 text-[#5dade2] hover:text-white font-medium transition-colors">
                Ver todos os projetos
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="section-divider mx-auto max-w-xs" />

      {/* Blog Preview */}
      <section className="py-24 network-grid">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#5dade2] text-xs font-mono uppercase tracking-widest mb-4 block">
              <span className="status-dot mr-2" />
              Blog
            </span>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-4">
              Artigos & Insights
            </h2>
            <p className="text-[#8899a6] max-w-2xl mx-auto">
              Compartilhando conhecimento sobre governança pública, tecnologia
              e transformação digital.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.slice(0, 2).map((post, i) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="dashboard-card p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 rounded-full bg-[#1a5276]/30 text-[#5dade2] text-[10px] font-mono uppercase">
                        {post.category}
                      </span>
                      <span className="text-[#8899a6] text-[10px] font-mono">
                        {new Date(post.date).toLocaleDateString("pt-BR", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-white mb-3 group-hover:text-[#5dade2] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-[#8899a6] text-sm leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                    <span className="text-[#5dade2] text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                      Ler artigo
                      <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/blog">
              <button className="group inline-flex items-center gap-2 text-[#5dade2] hover:text-white font-medium transition-colors">
                Ver todos os artigos
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a5276]/20 to-[#5dade2]/10" />
        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-4">
              Vamos Conectar?
            </h2>
            <p className="text-[#c8d6e5] max-w-xl mx-auto mb-8">
              Interessado em trocar experiências sobre governança pública,
              transformação digital ou oportunidades de colaboração?
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="mailto:mvsanjos@cecierj.edu.br">
                <button className="px-8 py-3.5 bg-[#1a5276] hover:bg-[#2471a3] text-white font-medium rounded-md transition-all duration-200 active:scale-[0.97] flex items-center gap-2 shadow-lg shadow-[#1a5276]/30">
                  <Mail size={18} />
                  Enviar E-mail
                </button>
              </a>
              <a
                href="https://www.linkedin.com/in/marcus-vin%C3%ADcius-soares-anjos-2106ba254/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="px-8 py-3.5 border border-[#1a5276] text-[#5dade2] hover:bg-[#1a5276]/20 rounded-md transition-all duration-200 flex items-center gap-2 active:scale-[0.97]">
                  <Linkedin size={18} />
                  LinkedIn
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
