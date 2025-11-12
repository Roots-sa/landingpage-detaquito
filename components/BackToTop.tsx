"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const featuresSection = document.getElementById("features");
      if (!featuresSection) {
        return;
      }

      const { top } = featuresSection.getBoundingClientRect();
      setIsVisible(top < -50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Volver al inicio"
      className={`fixed bottom-6 right-6 z-50 rounded-full bg-[#00b37e] p-3 text-white shadow-lg transition-all duration-300 hover:bg-[#00a170] focus:outline-none focus:ring-2 focus:ring-white/60 focus:ring-offset-2 focus:ring-offset-[#00b37e] ${
        isVisible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-5 opacity-0"
      }`}
    >
      <ArrowUp className="h-6 w-6" />
    </button>
  );
}
