"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "NexPay",
    category: "Branding & FinTech Web",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
  },
  {
    title: "EcoFuture",
    category: "Identidad & E-commerce",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1000",
  },
  {
    title: "Lumina",
    category: "UI/UX & SaaS",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
  },
  {
    title: "Vanguard",
    category: "Rebranding Global",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&q=80&w=1000",
  },
];

export function Portfolio() {
  return (
    <section id="trabajo" className="py-32 bg-white text-slate-900">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Obras <span className="text-blue-600">Maestras</span>.
            </h2>
            <p className="text-xl text-slate-600 font-medium">
              Proyectos galardonados que redefinen estándares y empujan
              los límites de la creatividad y la tecnología.
            </p>
          </motion.div>
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="btn-outline shrink-0 mb-2"
          >
            Ver Todo Nuestro Trabajo
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`group overflow-hidden rounded-3xl relative aspect-square md:aspect-[4/3] ${
                index === 1 || index === 2 ? "md:mt-24" : "mt-0"
              }`}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                style={{ backgroundImage: `url(${project.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
              
              <div className="absolute inset-x-0 bottom-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-blue-400 text-sm font-bold tracking-wide uppercase mb-2 block">
                  {project.category}
                </span>
                <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                
                <span className="inline-flex items-center gap-2 text-white font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 delay-100">
                  Explorar Caso <span className="text-blue-400">→</span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
