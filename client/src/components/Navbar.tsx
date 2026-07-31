import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre" },
  { href: "/projetos", label: "Projetos" },
  { href: "/blog", label: "Blog" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0d1b3e]/95 backdrop-blur-md shadow-lg shadow-[#1a5276]/10 border-b border-[#1a5276]/20"
          : "bg-transparent"
      }`}
    >
      <nav className="container flex items-center justify-between h-16 lg:h-20">
        <Link href="/" className="flex items-center gap-3 group">
          <img
            src="/manus-storage/logo-mvs_30123374.png"
            alt="MVS Anjos"
            className="h-10 w-10 lg:h-12 lg:w-12 transition-transform duration-200 group-hover:scale-105"
          />
          <span className="font-serif text-xl lg:text-2xl font-bold text-white tracking-tight hidden sm:block">
            MVS <span className="text-[#5dade2]">Anjos</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                location === link.href
                  ? "text-[#5dade2] bg-[#1a5276]/30"
                  : "text-[#c8d6e5] hover:text-white hover:bg-[#1a5276]/20"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-[#c8d6e5] hover:text-white p-2"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="md:hidden bg-[#0d1b3e]/98 backdrop-blur-md border-b border-[#1a5276]/20"
          >
            <div className="container py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                    location === link.href
                      ? "text-[#5dade2] bg-[#1a5276]/30"
                      : "text-[#c8d6e5] hover:text-white hover:bg-[#1a5276]/20"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
