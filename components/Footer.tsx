import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#101010] py-16 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-10 px-4 sm:flex-row sm:items-center sm:px-8">
        <div className="flex flex-col items-center gap-4 sm:flex-col sm:items-center sm:gap-6">
          <div className="flex items-center gap-2">
            <Image
              src="/assets/logo.png"
              alt="De Taquito"
              width={120}
              height={48}
              className="h-12 w-auto"
            />
            <Image
              src="/assets/logo-o.png"
              alt="Balón"
              width={36}
              height={36}
              className="h-8 w-8"
            />
          </div>
          <p className="text-base font-semibold text-white sm:text-lg">
            detaquitoapp@gmail.com
          </p>
        </div>

        <div className="flex flex-col items-center  sm:flex-col sm:gap-2">
          <div className="flex items-center gap-2">
            <a
              href="https://www.instagram.com/detaquitoapp"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20"
              aria-label="Instagram"
            >
              <Image
                src="/assets/instagram.png"
                alt="Instagram"
                width={30}
                height={30}
              />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20"
              aria-label="YouTube"
            >
              <Image
                src="/assets/youtube.png"
                alt="YouTube"
                width={20}
                height={20}
              />
            </a>
          </div>
          <div className="text-center items-center justify-center sm:text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-white">
              ¡Pruébalo muy pronto!
            </p>
            <a
              href="#features"
              className="mt-3 inline-block rounded-full bg-[#00B37E] px-6 py-2 text-sm font-semibold text-white shadow-lg transition hover:bg-[#00a170]"
            >
              Próximamente
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
