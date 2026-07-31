import { Link } from "wouter";
import { Linkedin, Mail, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#080e1f] border-t border-[#1a5276]/20">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/manus-storage/logo-mvs_30123374.png"
                alt="MVS Anjos"
                className="h-10 w-10"
              />
              <span className="font-serif text-xl font-bold text-white">
                MVS <span className="text-[#5dade2]">Anjos</span>
              </span>
            </div>
            <p className="text-[#8899a6] text-sm leading-relaxed max-w-xs">
              Administrador Público e Gestor de Tecnologia com 10+ anos de
              experiência em Governança Pública e Transformação Digital.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-white mb-4">
              Navegação
            </h4>
            <nav className="flex flex-col gap-2">
              <Link href="/" className="text-[#8899a6] hover:text-[#5dade2] text-sm transition-colors">Início</Link>
              <Link href="/sobre" className="text-[#8899a6] hover:text-[#5dade2] text-sm transition-colors">Sobre</Link>
              <Link href="/projetos" className="text-[#8899a6] hover:text-[#5dade2] text-sm transition-colors">Projetos</Link>
              <Link href="/blog" className="text-[#8899a6] hover:text-[#5dade2] text-sm transition-colors">Blog</Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-white mb-4">
              Contato
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:mvsanjos@cecierj.edu.br"
                className="flex items-center gap-2 text-[#8899a6] hover:text-[#5dade2] text-sm transition-colors"
              >
                <Mail size={16} />
                mvsanjos@cecierj.edu.br
              </a>
              <a
                href="https://www.linkedin.com/in/marcus-vin%C3%ADcius-soares-anjos-2106ba254/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#8899a6] hover:text-[#5dade2] text-sm transition-colors"
              >
                <Linkedin size={16} />
                LinkedIn
                <ExternalLink size={12} />
              </a>
              <a
                href="tel:+5521986079415"
                className="flex items-center gap-2 text-[#8899a6] hover:text-[#5dade2] text-sm transition-colors"
              >
                <Mail size={16} />
                +55 (21) 98607-9415
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#1a5276]/20 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[#8899a6] text-xs">
            &copy; {new Date().getFullYear()} Marcus Vinicius Soares Anjos. Todos os direitos reservados.
          </p>
          <p className="text-[#8899a6] text-xs font-mono">
            Governança &bull; Tecnologia &bull; Inovação
          </p>
        </div>
      </div>
    </footer>
  );
}
