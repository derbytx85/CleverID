"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <section id="nosotros" className="py-32 bg-white text-slate-900 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter mb-8 leading-[0.95]">
              Mentes creativas.<br />
              <span className="text-blue-600">Ejecución precisa.</span>
            </h2>
            <p className="text-xl text-slate-700 font-bold mb-6 leading-relaxed">
              CleverID nació de una frustración: las pequeñas empresas estaban atrapadas con diseños genéricos, mientras que las grandes agencias solo trabajaban con corporaciones masivas.
            </p>
            <p className="text-xl text-slate-600 font-medium mb-12 leading-relaxed">
              Decidimos democratizar el diseño de élite. Nuestro equipo combina veteranos de agencias globales y disruptores tecnológicos para ofrecer calidad de Silicon Valley a empresas audaces, sin importar su tamaño inicial.
            </p>

            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-5xl font-black text-slate-950 mb-2 tracking-tighter">10+</h4>
                <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Años de experiencia</p>
              </div>
              <div>
                <h4 className="text-5xl font-black text-slate-950 mb-2 tracking-tighter">150+</h4>
                <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Proyectos exitosos</p>
              </div>
              <div>
                <h4 className="text-5xl font-black text-slate-950 mb-2 tracking-tighter">15</h4>
                <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Premios de diseño</p>
              </div>
              <div>
                <h4 className="text-5xl font-black text-slate-950 mb-2 tracking-tighter">98%</h4>
                <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Retención de clientes</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" 
                alt="CleverID Team"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent pointer-events-none" />
            </div>
            
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-blue-100 rounded-full blur-[50px] pointer-events-none" />
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-cyan-50 rounded-full blur-[60px] pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
