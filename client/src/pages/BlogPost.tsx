import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link, useParams } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, ChevronLeft } from "lucide-react";
import { blogPosts } from "@/lib/blogData";
import { Streamdown } from "streamdown";

export default function BlogPost() {
  const params = useParams();
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-[#0d1b3e]">
        <Navbar />
        <div className="container pt-32 pb-20 text-center">
          <h1 className="font-serif text-3xl text-white mb-4">Artigo não encontrado</h1>
          <Link href="/blog">
            <button className="text-[#5dade2] hover:text-white flex items-center gap-2 mx-auto">
              <ArrowLeft size={16} />
              Voltar ao blog
            </button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0d1b3e]">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#142850]/30 to-[#0d1b3e]" />

        <div className="container relative z-10">
          <Link href="/blog">
            <button className="flex items-center gap-2 text-[#5dade2] hover:text-white text-sm mb-8 transition-colors">
              <ChevronLeft size={16} />
              Voltar ao blog
            </button>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-[#1a5276]/30 text-[#5dade2] text-[10px] font-mono uppercase">
                {post.category}
              </span>
              <span className="flex items-center gap-1 text-[#8899a6] text-[10px] font-mono">
                <Clock size={10} />
                {post.readTime} de leitura
              </span>
            </div>
            <h1 className="font-serif text-3xl lg:text-5xl font-bold text-white leading-tight mb-4 max-w-4xl">
              {post.title}
            </h1>
            <p className="text-[#8899a6] text-xs font-mono">
              {new Date(post.date).toLocaleDateString("pt-BR", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <motion.article
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="dashboard-card p-8 lg:p-10">
                <div className="prose prose-invert prose-lg max-w-none
                  prose-headings:font-serif prose-headings:text-white
                  prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
                  prose-p:text-[#c8d6e5] prose-p:leading-relaxed
                  prose-strong:text-white
                  prose-a:text-[#5dade2] prose-a:no-underline
                  prose-code:text-[#5dade2] prose-code:bg-[#1a5276]/20 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm
                ">
                  <Streamdown>{post.content}</Streamdown>
                </div>
              </div>

              {/* Tags */}
              <div className="mt-8 pt-6 border-t border-[#1a5276]/20">
                <div className="flex flex-wrap gap-2 mb-8">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-[#1a5276]/20 text-[#5dade2] text-[10px] font-mono uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link href="/blog">
                  <button className="flex items-center gap-2 text-[#5dade2] hover:text-white font-medium transition-colors">
                    <ArrowLeft size={16} />
                    Voltar aos artigos
                  </button>
                </Link>
              </div>
            </motion.article>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
