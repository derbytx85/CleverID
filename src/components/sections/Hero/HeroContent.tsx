"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/core/Button";
import { Heading } from "@/components/ui/typography/Heading";
import { Text } from "@/components/ui/typography/Text";
import { Tag } from "@/components/ui/typography/Tag";

export function HeroContent() {
  return (
    <div className="container mx-auto px-6 max-w-7xl relative z-10 flex flex-col items-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        <Tag variant="premium" size="md">
          Diseño & Estrategia Digital
        </Tag>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="my-8"
      >
        <Heading 
          variant="h1" 
          size="hero-main" 
          weight="black"
          align="center"
          className="text-slate-950"
        >
          Ideas Inteligentes. <br />
          <span className="text-blue-600">Marcas Poderosas.</span>
        </Heading>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="mb-12"
      >
        <Text 
          variant="p" 
          size="hero-desc" 
          weight="bold"
          align="center"
          className="text-slate-800 max-w-3xl leading-relaxed"
        >
          Transformamos ideas en marcas digitales que dominan su industria.
          Diseño web de clase mundial para empresas visionarias.
        </Text>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col sm:flex-row gap-6 items-center"
      >
        <Button variant="primary" size="lg" className="w-full sm:w-auto text-lg">
          Iniciar Proyecto
        </Button>
        <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg">
          Ver Nuestro Trabajo
        </Button>
      </motion.div>
    </div>
  );
}