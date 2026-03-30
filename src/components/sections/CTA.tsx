"use client";

import { motion } from "framer-motion";

export function CTA() {
  return (
    <section className="py-24 relative overflow-hidden bg-slate-50">
      {/* Animated gradient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-slate-50 opacity-80" />
      </div>

      <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-slate-900 mb-6 leading-[1.05]"
        >
          Tu marca merece<br />
          <span className="text-blue-600">ser legendaria.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto mb-12 font-medium"
        >
          Únete a las empresas que ya dominan su mercado con una identidad
          visual de clase mundial. El siguiente paso es tuyo.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="btn-premium py-5 px-10 text-lg w-full sm:w-auto">
            Iniciar Proyecto Ahora
          </button>
          <button className="btn-outline py-5 px-10 text-lg w-full sm:w-auto">
            Agendar Consulta Gratis
          </button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 text-sm text-slate-500 font-bold"
        >
          Sin contratos largos · Primera consulta gratuita · Resultados garantizados
        </motion.p>
      </div>
    </section>
  );
}
