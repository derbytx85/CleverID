"use client";

import { Github, Twitter, Linkedin, Instagram } from "lucide-react";

const Link = ({ href, className, children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
  <a href={href} className={className} {...props}>{children}</a>
);

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-800 text-sm">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-12 mb-16">
          <div className="lg:col-span-2">
            <Link href="/" className="text-2xl font-bold tracking-tighter text-white inline-block mb-6 hover:opacity-80 transition-opacity">
              Clever<span className="text-blue-400">ID</span>
            </Link>
            <p className="font-medium leading-relaxed max-w-xs mb-8">
              Transformando ambiciones de pequeñas empresas en marcas dominantes a nivel global.
              Diseño de clase mundial, accesible.
            </p>
            <div className="flex gap-4">
              {[Twitter, Github, Linkedin, Instagram].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-400/20 hover:text-blue-400 transition-colors"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <h5 className="font-bold text-white mb-6 uppercase tracking-wider text-xs">Agencia</h5>
            <ul className="space-y-4">
              {['Sobre Nosotros', 'Proyectos', 'Filosofía', 'Contacto', 'Carreras'].map((link, i) => (
                <li key={i}>
                  <Link href="#" className="hover:text-blue-400 transition-colors relative group">
                    {link}
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-blue-400 group-hover:w-full transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="lg:col-span-1">
            <h5 className="font-bold text-white mb-6 uppercase tracking-wider text-xs">Servicios</h5>
            <ul className="space-y-4">
              {['Branding', 'Diseño UI/UX', 'Desarrollo Web', 'Marketing Digital', 'Growth'].map((link, i) => (
                <li key={i}>
                  <Link href="#" className="hover:text-blue-400 transition-colors relative group">
                    {link}
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-blue-400 group-hover:w-full transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="lg:col-span-2">
            <h5 className="font-bold text-white mb-6 uppercase tracking-wider text-xs">Newsletter</h5>
            <p className="mb-4 font-medium">Insights exclusivos sobre diseño y crecimiento para fundadores.</p>
            <form className="relative flex" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="tu@correo.com" 
                className="w-full bg-white/5 border border-white/10 rounded-l-full px-6 py-3 text-white focus:outline-none focus:border-blue-400/50 font-medium"
              />
              <button className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-3 rounded-r-full transition-colors shrink-0">
                Suscribir
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold uppercase tracking-tight">
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
