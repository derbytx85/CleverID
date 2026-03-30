"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const Link = ({ href, className, children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
  <a href={href} className={className} {...props}>{children}</a>
);

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-md border-b border-slate-200 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-tighter text-slate-900 z-50">
          Clever<span className="text-blue-600">ID</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {["Servicios", "Trabajo", "Proceso", "Nosotros"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors"
            >
              {item}
            </a>
          ))}
          <button className="btn-premium py-2 px-6 text-sm">
            Iniciar Proyecto
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-slate-900 z-50 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {["Servicios", "Trabajo", "Proceso", "Nosotros"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-bold text-slate-900 hover:text-blue-600 transition-colors"
              >
                {item}
              </Link>
            ))}
            <button className="btn-premium mt-8" onClick={() => setIsOpen(false)}>
              Iniciar Proyecto
            </button>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
