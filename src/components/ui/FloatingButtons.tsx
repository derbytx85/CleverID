"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export function FloatingButtons() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* WhatsApp Button */}
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform duration-300"
        aria-label="Contactar por WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-8 h-8"
        >
          <path d="M12.01 2.014a10.05 10.05 0 0 0-8.526 15.34L2 22l4.81-1.25a10.04 10.04 0 1 0 5.2-18.736zm-.05 18.06A8.02 8.02 0 0 1 6.53 18.49l-.36-.21-3.04.8.81-2.96-.23-.37a8.04 8.04 0 1 1 8.25 4.32zM16.48 14.5c-.25-.13-1.48-.73-1.7-.81-.23-.08-.4-.13-.56.12-.17.25-.63.81-.78.98-.14.17-.29.2-.54.07a6.83 6.83 0 0 1-2.02-1.25 7.42 7.42 0 0 1-1.39-1.72c-.15-.25-.02-.38.11-.5.11-.11.25-.29.38-.44.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.87.85-.87 2.07s.89 2.4 1.02 2.56c.12.17 1.76 2.69 4.26 3.77 2.5 1.08 2.5.73 2.96.69.46-.04 1.48-.6 1.69-1.19.2-.58.2-.1.14-.15z" />
        </svg>
      </a>

      {/* Back to Top Button */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="w-14 h-14 bg-slate-900 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-cyan-electric hover:scale-110 transition-all duration-300"
          aria-label="Subir al principio"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </div>
  );
}
