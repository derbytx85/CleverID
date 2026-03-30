"use client";

import { ThreeBackground } from "@/components/ui/animations/ThreeBackground";
import { GradientOrbs } from "@/components/ui/animations/GradientOrbs";
import { HeroContent } from "./HeroContent";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-white">
      <ThreeBackground />
      <GradientOrbs />
      
      <HeroContent />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-float"
      >
        <span className="text-xs uppercase tracking-widest text-slate-950 font-black">
          Scroll para descubrir
        </span>
        <div className="w-[2px] h-12 bg-blue-600" />
      </motion.div>
    </section>
  );
}