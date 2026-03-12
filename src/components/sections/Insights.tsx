"use client";

import { motion } from "framer-motion";

const articles = [
  {
    category: "Branding",
    title: "El fin del minimalismo aburrido: Cómo Apple y Stripe están reescribiendo las reglas",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800",
    readTime: "5 min read"
  },
  {
    category: "Marketing",
    title: "Por qué tu pequeña empresa necesita pensar como una startup unicornio",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800",
    readTime: "8 min read"
  },
  {
    category: "Diseño Web",
    title: "Más allá del paralaje: El futuro de las experiencias web en 2026",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=800",
    readTime: "10 min read"
  }
];

export function Insights() {
  return (
    <section className="py-32 bg-midnight text-white relative border-t border-white/5">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Insights & <span className="text-cyan-electric">Estrategias</span>.
            </h2>
            <p className="text-xl text-slate-400 font-light">
              Ideas, metodologías y tendencias que están moldeando el futuro del diseño intergaláctico.
            </p>
          </motion.div>
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="btn-outline shrink-0 mb-2"
          >
            Ver Todo Nuestro Contenido
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          {/* Featured Article */}
          <motion.article
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="md:col-span-2 md:grid md:grid-cols-2 md:gap-8 group cursor-pointer"
          >
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-6 md:mb-0">
              <img 
                src={articles[0].image} 
                alt={articles[0].title}
                className="w-full h-full object-cover rounded-3xl transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
            </div>
            
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-4 text-sm font-medium uppercase tracking-widest text-cyan-electric mb-4">
                <span>{articles[0].category}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                <span className="text-slate-400">{articles[0].readTime}</span>
              </div>
              <h3 className="text-3xl md:text-5xl font-bold mb-6 group-hover:text-cyan-electric transition-colors duration-300 leading-tight">
                {articles[0].title}
              </h3>
              <p className="text-lg text-slate-400 font-light leading-relaxed mb-8">
                Un análisis profundo sobre cómo las empresas de billones de dólares utilizan la psicología del color, el movimiento y la tipografía para dominar la psique del consumidor.
              </p>
              <div className="hidden sm:inline-flex items-center gap-2 text-white font-medium group-hover:text-cyan-electric transition-colors duration-300 mt-auto">
                Leer Artículo <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          </motion.article>

          {/* Regular Articles */}
          {articles.slice(1).map((article, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="group cursor-pointer flex flex-col"
            >
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-6">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover rounded-2xl transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              
              <div className="flex flex-col flex-1">
                <div className="flex items-center gap-4 text-xs font-medium uppercase tracking-widest text-cyan-electric mb-3">
                  <span>{article.category}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                  <span className="text-slate-400">{article.readTime}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan-electric transition-colors duration-300 leading-snug">
                  {article.title}
                </h3>
                <div className="mt-auto inline-flex items-center gap-2 text-white font-medium group-hover:text-cyan-electric transition-colors duration-300">
                  Leer corto <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
