import { Navbar } from "@/components/ui/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Authority } from "@/components/sections/Authority";
import { Services } from "@/components/sections/Services";
import { Portfolio } from "@/components/sections/Portfolio";
import { Process } from "@/components/sections/Process";
import { WhyUs } from "@/components/sections/WhyUs";
import { Testimonials } from "@/components/sections/Testimonials";
import { Insights } from "@/components/sections/Insights";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/ui/Footer";

export const metadata = {
  title: "CleverID | Agencia Digital Premium",
  description: "Transformamos ideas en marcas digitales que dominan su industria. Agencia de branding y diseño web de clase mundial.",
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-midnight text-white w-full overflow-hidden">
        <Hero />
        <Authority />
        <Services />
        <Portfolio />
        <Process />
        <WhyUs />
        <Testimonials />
        <Insights />
        <About />
        <Contact />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

