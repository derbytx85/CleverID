"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section id="contacto" className="py-32 bg-midnight text-white relative">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
            Comencemos a construir<br />
            <span className="text-cyan-electric">tu imperio digital.</span>
          </h2>
          <p className="text-xl text-slate-400 font-light max-w-2xl mx-auto leading-relaxed">
            Estamos listos para transformar tu visión en una marca que domine su mercado. 
            Déjanos tus datos y te contactaremos en menos de 24 horas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 space-y-12"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contáctanos</h3>
              <ul className="space-y-6">
                <li className="flex items-center gap-4 text-slate-300 hover:text-cyan-electric transition-colors">
                  <span className="w-12 h-12 rounded-full glass flex items-center justify-center shrink-0">
                    <Mail size={20} />
                  </span>
                  <a href="mailto:hello@cleverid.com" className="text-lg">hello@cleverid.com</a>
                </li>
                <li className="flex items-center gap-4 text-slate-300">
                  <span className="w-12 h-12 rounded-full glass flex items-center justify-center shrink-0">
                    <MapPin size={20} />
                  </span>
                  <span className="text-lg">San Francisco, CA<br /><span className="text-sm text-slate-500">Operación Global</span></span>
                </li>
              </ul>
            </div>
            
            <div className="p-8 glass rounded-3xl border-cyan-electric/20 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-electric/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <h4 className="text-xl font-bold mb-4 relative z-10">¿Estás listo para escalar?</h4>
              <p className="text-slate-400 mb-6 relative z-10">Agenda una llamada de descubrimiento de 30 minutos directamente con nuestro equipo fundador.</p>
              <button className="flex items-center gap-2 text-cyan-electric font-semibold group-hover:gap-4 transition-all relative z-10">
                Agendar ahora <ArrowRight size={18} />
              </button>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-3 glass p-10 md:p-14 rounded-3xl"
          >
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-400">Nombre completo</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-midnight/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-cyan-electric/50 focus:ring-1 focus:ring-cyan-electric/50 transition-all"
                    placeholder="Steve Jobs"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium text-slate-400">Empresa</label>
                  <input 
                    type="text" 
                    id="company" 
                    className="w-full bg-midnight/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-cyan-electric/50 focus:ring-1 focus:ring-cyan-electric/50 transition-all"
                    placeholder="Apple Inc."
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-400">Correo electrónico</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-midnight/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-cyan-electric/50 focus:ring-1 focus:ring-cyan-electric/50 transition-all"
                  placeholder="steve@apple.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="project" className="text-sm font-medium text-slate-400">¿Qué buscas lograr?</label>
                <textarea 
                  id="project" 
                  rows={4}
                  className="w-full bg-midnight/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-cyan-electric/50 focus:ring-1 focus:ring-cyan-electric/50 transition-all resize-none"
                  placeholder="Necesito construir una marca que cambie el mundo..."
                />
              </div>

              <button type="submit" className="w-full btn-premium py-5 text-lg cursor-pointer">
                Enviar Solicitud
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
