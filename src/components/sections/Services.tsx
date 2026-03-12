"use client";

import { motion } from "framer-motion";
import { 
  Paintbrush, 
  Lightbulb, 
  Target, 
  Layers, 
  MonitorSmartphone, 
  TrendingUp 
} from "lucide-react";

const services = [
  {
    title: "Branding",
    description: "Creamos identidades visuales memorables que conectan profundamente con tu audiencia y destacan en el mercado.",
    icon: Paintbrush,
  },
  {
    title: "Diseño de Logos",
    description: "Símbolos únicos y atemporales que capturan la esencia de tu marca con precisión matemática.",
    icon: Lightbulb,
  },
  {
    title: "Estrategia de Marketing",
    description: "Planes basados en datos para posicionar tu marca y alcanzar a los clientes correctos en el momento preciso.",
    icon: Target,
  },
  {
    title: "Identidad Digital",
    description: "Unificación de tu presencia online para una experiencia de marca coherente y profesional.",
    icon: Layers,
  },
  {
    title: "Diseño Web",
    description: "Experiencias digitales inmersivas, rápidas y optimizadas para conversión con tecnología de punta.",
    icon: MonitorSmartphone,
  },
  {
    title: "Growth Marketing",
    description: "Estrategias escalables para acelerar el crecimiento de tu empresa de forma medible y sostenible.",
    icon: TrendingUp,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
};

export function Services() {
  return (
    <section id="servicios" className="py-32 relative bg-midnight text-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-24"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Servicios diseñados para el <span className="text-cyan-electric">futuro</span>.
          </h2>
          <p className="text-xl text-slate-400 font-light leading-relaxed">
            Combinamos estrategia, creatividad y tecnología para resolver
            problemas complejos y construir marcas que trascienden.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              className="glass p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-500 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-electric/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <service.icon className="w-10 h-10 text-cyan-electric mb-6" strokeWidth={1.5} />
              <h3 className="text-2xl font-semibold mb-3 tracking-tight">{service.title}</h3>
              <p className="text-slate-400 font-light leading-relaxed">
                {service.description}
              </p>
              
              {/* Animated underline */}
              <div className="h-[2px] w-0 bg-cyan-electric mt-8 group-hover:w-full transition-all duration-500 ease-out" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
