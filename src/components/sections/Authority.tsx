"use client";

import { motion } from "framer-motion";

const logos = [
  "Acme Corp",
  "Globex",
  "Soylent",
  "Initech",
  "Umbrella",
  "Massive Dynamic",
];

export function Authority() {
  return (
    <section className="py-24 bg-midnight border-t border-b border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl text-center mb-12">
        <p className="text-sm font-medium text-slate-500 uppercase tracking-widest">
          Confiado por empresas visionarias
        </p>
      </div>

      <div className="flex w-[200%] overflow-hidden relative">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity }}
          className="flex whitespace-nowrap"
        >
          {/* Double map for seamless loop */}
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex-none w-[200px] md:w-[300px] flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <span className="text-2xl font-bold text-slate-300">{logo}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
