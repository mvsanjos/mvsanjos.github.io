import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { blogPosts } from "@/lib/blogData";

export default function Blog() {
  return (
    <div className="min-h-screen bg-[#0d1b3e]">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/manus-storage/blog-hero_3540130b.png"
            alt=""
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0d1b3e]/70 to-[#0d1b3e]" />
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
              Blog
            </span>
            <h1 className="font-serif text-4xl lg:text-5xl font-bold text-white mb-4">
              Artigos & Insights
            </h1>
            <p className="text-[#c8d6e5] text-lg leading-relaxed">
              Compartilhando conhecimento sobre governança pública, tecnologia,
              proteção de dados e transformação digital.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-24 network-grid">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-6">
            {blogPosts.map((post, i) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="dashboard-card p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 rounded-full bg-[#1a5276]/30 text-[#5dade2] text-[10px] font-mono uppercase">
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1 text-[#8899a6] text-[10px] font-mono">
                        <Clock size={10} />
                        {post.readTime}
                      </span>
                    </div>
                    <h2 className="font-serif text-xl lg:text-2xl font-semibold text-white mb-3 leading-tight">
                      {post.title}
                    </h2>
                    <p className="text-[#8899a6] text-sm leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-1.5">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#1a5276]/20 text-[#8899a6]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <span className="text-[#5dade2] text-xs flex items-center gap-1 group-hover:gap-2 transition-all">
                        Ler <ArrowRight size={12} />
                      </span>
                    </div>
                    <div className="mt-3 text-[#8899a6] text-[10px] font-mono">
                      {new Date(post.date).toLocaleDateString("pt-BR", {
                        day: "2-digit",
                        month: "long",
                        year: "numeric",
                      })}
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
