import Image from "next/image";
import { Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#101010] py-16 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-10 px-4 md:flex-row md:items-center md:px-8">
        <div className="flex flex-col items-center gap-4 text-center md:items-start md:text-left">
          <div className="flex items-center gap-2">
            <Image
              src="/assets/logo.png"
              alt="De Taquito"
              width={178}
              height={48}
              className="h-12 w-auto"
            />
          </div>
          <p className="text-base font-semibold text-white sm:text-lg">
            detaquitoapp@gmail.com
          </p>
          <a
            href="/terminos-y-condiciones"
            className="text-sm text-white/70 transition hover:text-white hover:underline"
          >
            Términos y Condiciones
          </a>
        </div>

        <div className="flex flex-col items-center gap-4 text-center md:items-end md:text-right">
          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/detaquitoapp"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://www.tiktok.com/@detaquitoapp"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20"
              aria-label="TikTok"
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
              </svg>
            </a>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-white/80">
              ¡Pruébalo muy pronto!
            </p>
            <a
              href="#features"
              className="mt-3 inline-block rounded-full bg-[#00b37e] px-6 py-2 text-sm font-semibold text-white shadow-lg transition hover:bg-[#00a170]"
            >
              Próximamente
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
