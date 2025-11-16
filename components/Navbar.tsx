"use client";

import { useState } from "react";
import Image from "next/image";

const navigationLinks = [
  { label: "Cómo funciona", href: "#features" },
  { label: "Beneficios", href: "#about" },
  { label: "Contacto", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const handleNavigate = () => setIsOpen(false);

  return (
    <header className="absolute inset-x-0 top-0 z-40 border-b border-white/20 bg-white/30 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <div className="flex items-center gap-3  pr-6">
          <div className="flex items-end gap-2">
            <Image
              src="/assets/logo.png"
              alt="De Taquito"
              width={178}
              height={48}
              className="h-12 w-auto object-contain md:h-12"
            />
          </div>
        </div>

        <nav className="hidden items-center gap-9 pl-6 text-sm font-semibold text-white md:flex">
          {navigationLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-emerald-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          aria-label="Abrir menú"
          aria-expanded={isOpen}
          onClick={toggleMenu}
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-white hover:text-emerald-300 focus:outline-none"
        >
          {isOpen ? (
            // Icono "X"
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Icono hamburguesa
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden absolute inset-x-0 top-full z-40 border-t border-white/10 bg-black/80 backdrop-blur">
          <nav className="mx-auto max-w-7xl px-6 py-4">
            <ul className="flex flex-col gap-4 text-white">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={handleNavigate}
                    className="block rounded-md px-2 py-2 text-base font-semibold hover:text-emerald-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
