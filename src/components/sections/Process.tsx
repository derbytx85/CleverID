"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Descubrir",
    description: "Analizamos tu negocio, competencia y audiencia para encontrar tu ventaja única y definir objetivos claros.",
  },
  {
    number: "02",
    title: "Diseñar",
    description: "Creamos conceptos visuales y estratégicos, iterando hasta lograr la representación perfecta de tu identidad.",
  },
  {
    number: "03",
    title: "Construir",
    description: "Desarrollamos los activos, interfaces y sistemas tecnológicos necesarios con altos estándares de calidad.",
  },
  {
    number: "04",
    title: "Lanzar",
    description: "Implementamos tu nueva marca o producto y medimos resultados para optimizar continuamente el impacto.",
  },
];

export function Process() {
  return (
    <section id="proceso" className="py-32 bg-midnight-light text-white relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24 max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-6">
            Ingeniería de <span className="text-cyan-electric">Marcas</span>.
          </h2>
          <p className="text-xl text-slate-400 font-light">
            Un proceso estructurado para resultados predecibles y escalables.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="relative overflow-hidden group p-8 rounded-3xl bg-midnight/50 border border-white/5 hover:border-cyan-electric/50 transition-colors duration-500"
            >
              <div className="text-7xl font-black text-white/5 mb-6 group-hover:text-cyan-electric/10 transition-colors duration-500">
                {step.number}
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-cyan-electric transition-colors">
                {step.title}
              </h3>
              <p className="text-slate-400 font-light leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
