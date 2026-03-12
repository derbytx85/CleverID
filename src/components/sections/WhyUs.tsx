"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const reasons = [
  "Construir marcas fuertes y memorables.",
  "Crear logos profesionales y atemporales.",
  "Mejorar radicalmente la presencia digital.",
  "Posicionar la empresa como líder en el mercado.",
];

export function WhyUs() {
  return (
    <section className="py-32 bg-midnight text-white relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-electric/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10 flex flex-col lg:flex-row items-center gap-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8 leading-[1.1]">
            El partner estratégico para <span className="text-cyan-electric">pymes ambiciosas</span>.
          </h2>
          <p className="text-xl text-slate-400 font-light mb-12">
            No somos solo una agencia; somos arquitectos de crecimiento. 
            Ayudamos a pequeñas y medianas empresas a competir en las grandes ligas mediante diseño de clase mundial.
          </p>

          <div className="space-y-6">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex items-start gap-4"
              >
                <CheckCircle2 className="w-6 h-6 text-cyan-electric shrink-0 mt-1" />
                <p className="text-lg text-slate-300">{reason}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-12"
          >
            <button className="btn-premium">Transforma tu marca</button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex-1 w-full"
        >
          <div className="relative aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden glass border-white/10 p-2">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-electric/20 to-midnight mix-blend-overlay z-10" />
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000" 
              alt="CleverID Team Strategy"
              className="w-full h-full object-cover rounded-2xl opacity-80"
            />
            
            {/* Floating stats card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-8 -left-8 md:-left-12 glass p-6 rounded-2xl border border-white/10 z-20 backdrop-blur-xl bg-midnight/80 max-w-[250px]"
            >
              <p className="text-4xl font-bold text-cyan-electric mb-2">98%</p>
              <p className="text-sm text-slate-300 font-medium leading-relaxed">
                Aumento en percepción de valor de marca tras el rediseño.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
