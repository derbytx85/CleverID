"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
  {
    quote: "CleverID no solo diseñó un logo, construyeron un sistema visual completo que elevó nuestra marca al nivel de empresas de Silicon Valley. El impacto en nuestras ventas fue inmediato.",
    author: "Elena Ramírez",
    role: "CEO, NexPay",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200",
  },
  {
    quote: "El nivel de detalle y la calidad de las animaciones superaron todas nuestras expectativas. Su equipo entendió exactamente lo que necesitábamos antes de que nosotros mismos lo supiéramos.",
    author: "Carlos Mendoza",
    role: "Fundador, EcoFuture",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200&h=200",
  },
  {
    quote: "Redefinieron nuestra identidad digital de manera magistral. CleverID es la mezcla perfecta entre estrategia comprobada y diseño visualmente deslumbrante.",
    author: "Sofía Martínez",
    role: "Directora de Marketing, Lumina",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-32 bg-midnight-light text-white overflow-hidden relative">
      <div className="container mx-auto px-6 max-w-7xl relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Quote className="w-16 h-16 text-cyan-electric/50 mx-auto mb-6 opacity-30" />
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Testimonios del <span className="text-cyan-electric">éxito</span>.
          </h2>
        </motion.div>

        <div className="relative w-full max-w-4xl min-h-[400px]">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ 
                opacity: index === currentIndex ? 1 : 0, 
                x: index === currentIndex ? 0 : index < currentIndex ? -50 : 50,
                pointerEvents: index === currentIndex ? "auto" : "none" 
              }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0 flex flex-col items-center text-center justify-center p-8"
            >
              <p className="text-2xl md:text-4xl text-slate-300 font-light italic leading-relaxed mb-12 max-w-3xl">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author}
                  className="w-16 h-16 rounded-full object-cover border-2 border-cyan-electric p-0.5"
                />
                <div className="text-left shadow-2xl">
                  <h4 className="text-xl font-semibold text-white">{testimonial.author}</h4>
                  <p className="text-sm text-cyan-electric">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Indicators */}
        <div className="flex gap-3 relative z-20 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-12 h-1 rounded-full transition-all duration-300 ${
                idx === currentIndex ? "bg-cyan-electric" : "bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
