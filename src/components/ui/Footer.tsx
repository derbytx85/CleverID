"use client";

import Link from "next/link";
import { Github, Twitter, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#01030d] text-slate-400 py-16 border-t border-white/5 text-sm">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-12 mb-16">
          <div className="lg:col-span-2">
            <Link href="/" className="text-2xl font-bold tracking-tighter text-white inline-block mb-6 hover:opacity-80 transition-opacity">
              Clever<span className="text-cyan-electric">ID</span>
            </Link>
            <p className="font-light leading-relaxed max-w-xs mb-8">
              Transformando ambiciones de pequeñas empresas en marcas dominantes a nivel global.
              Diseño de clase mundial, accesible.
            </p>
            <div className="flex gap-4">
              {[Twitter, Github, Linkedin, Instagram].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-cyan-electric/20 hover:text-cyan-electric transition-colors"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <h5 className="font-semibold text-white mb-6 uppercase tracking-wider text-xs">Agencia</h5>
            <ul className="space-y-4">
              {['Sobre Nosotros', 'Proyectos', 'Filosofía', 'Contacto', 'Carreras'].map((link, i) => (
                <li key={i}>
                  <Link href="#" className="hover:text-cyan-electric transition-colors relative group">
                    {link}
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyan-electric group-hover:w-full transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="lg:col-span-1">
            <h5 className="font-semibold text-white mb-6 uppercase tracking-wider text-xs">Servicios</h5>
            <ul className="space-y-4">
              {['Branding', 'Diseño UI/UX', 'Desarrollo Web', 'Marketing Digital', 'Growth'].map((link, i) => (
                <li key={i}>
                  <Link href="#" className="hover:text-cyan-electric transition-colors relative group">
                    {link}
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyan-electric group-hover:w-full transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="lg:col-span-2">
            <h5 className="font-semibold text-white mb-6 uppercase tracking-wider text-xs">Newsletter</h5>
            <p className="mb-4">Insights exclusivos sobre diseño y crecimiento para fundadores.</p>
            <form className="relative flex" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="tu@correo.com" 
                className="w-full bg-white/5 border border-white/10 rounded-l-full px-6 py-3 text-white focus:outline-none focus:border-cyan-electric/50"
              />
              <button className="bg-cyan-electric hover:bg-cyan-400 text-midnight font-semibold px-6 py-3 rounded-r-full transition-colors shrink-0">
                Suscribir
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light">
          <p>© {new Date().getFullYear()} CleverID Agency, una compañía de Clever Tech Global Ideas SpA. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Política de Privacidad</Link>
            <Link href="#" className="hover:text-white transition-colors">Términos de Servicio</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
