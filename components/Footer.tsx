import Image from "next/image";
import { Instagram, Youtube } from "lucide-react";

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
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20"
              aria-label="YouTube"
            >
              <Youtube className="h-5 w-5" />
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
