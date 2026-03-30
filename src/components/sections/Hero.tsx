import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import * as THREE from "three";

export function Hero() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simple Three.js background effect
    const currentMount = mountRef.current;
    if (!currentMount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    currentMount.appendChild(renderer.domElement);

    const geometry = new THREE.BufferGeometry();
    const vertices = [];
    for (let i = 0; i < 5000; i++) {
      const x = (Math.random() - 0.5) * 2000;
      const y = (Math.random() - 0.5) * 2000;
      const z = (Math.random() - 0.5) * 2000;
      vertices.push(x, y, z);
    }
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

    const material = new THREE.PointsMaterial({ color: 0x2563eb, size: 2, transparent: true, opacity: 0.2 });
    const points = new THREE.Points(geometry, material);
    scene.add(points);

    camera.position.z = 1000;

    let mouseX = 0;
    let mouseY = 0;

    const onDocumentMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX - window.innerWidth / 2);
      mouseY = (event.clientY - window.innerHeight / 2);
    };

    document.addEventListener("mousemove", onDocumentMouseMove);

    const animate = () => {
      requestAnimationFrame(animate);
      points.rotation.x += 0.0005;
      points.rotation.y += 0.001;
      camera.position.x += (mouseX - camera.position.x) * .05;
      camera.position.y += (-mouseY - camera.position.y) * .05;
      camera.lookAt(scene.position);
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("mousemove", onDocumentMouseMove);
      window.removeEventListener("resize", handleResize);
      if (currentMount) currentMount.removeChild(renderer.domElement);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-white">
      <div ref={mountRef} className="absolute inset-0 z-0 opacity-10 pointer-events-none" />
      
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-[150px] mix-blend-multiply animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-100/50 rounded-full blur-[120px] mix-blend-multiply animate-pulse-slow" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-6 max-w-7xl relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="inline-block py-2 px-6 rounded-full border border-blue-200 bg-blue-50 mb-8"
        >
          <span className="text-sm font-extrabold text-blue-800 tracking-wider uppercase">Diseño & Estrategia Digital</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl lg:text-9xl font-black tracking-tighter text-slate-950 mb-8 max-w-5xl leading-[0.95]"
        >
          Ideas Inteligentes. <br />
          <span className="text-blue-600">Marcas Poderosas.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-2xl text-slate-800 max-w-3xl mb-12 font-bold leading-relaxed"
        >
          Transformamos ideas en marcas digitales que dominan su industria.
          Diseño web de clase mundial para empresas visionarias.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-6 items-center"
        >
          <button className="btn-premium w-full sm:w-auto text-lg">
            Iniciar Proyecto
          </button>
          <button className="btn-outline w-full sm:w-auto text-lg">
            Ver Nuestro Trabajo
          </button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-float"
      >
        <span className="text-xs uppercase tracking-widest text-slate-950 font-black">Scroll para descubrir</span>
        <div className="w-[2px] h-12 bg-blue-600" />
      </motion.div>
    </section>
  );
}
