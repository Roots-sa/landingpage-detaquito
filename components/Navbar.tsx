"use client";

const navigationLinks = [
  { label: "Cómo funciona", href: "#features" },
  { label: "Beneficios", href: "#about" },
  { label: "Contacto", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-40 border-b border-white/20 bg-white/30 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <div className="flex items-center gap-3  pr-6">
          <div className="flex items-end gap-2">
            <img
              src="/assets/logo.png"
              alt="De Taquito"
              className="h-10 w-auto object-contain md:h-12"
            />
            <img
              src="/assets/logo-o.png"
              alt="Balón De Taquito"
              className="h-8 w-8 translate-y-0.5 object-contain md:h-9 md:w-9"
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
      </div>
    </header>
  );
}
