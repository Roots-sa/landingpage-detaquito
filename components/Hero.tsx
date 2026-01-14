"use client";

import Navbar from "@/components/Navbar";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/fondo-landing-app.png')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b" />

      <Navbar />

      <div className="relative z-30 mx-auto max-w-3xl px-4 text-center text-white sm:px-6">
        <h1 className="mb-6 text-3xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-6xl ">
          Organizá tus partidos. Sin drama. Sin excusas.
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-lg font-bold text-white/85 sm:text-lg">
          De Taquito te ayuda a crear partidos, reservar canchas, armar equipos,
          cobrar la entrada y llevar las estadísticas — todo en una app pensada
          para jugar más y preocuparte menos.
        </p>

        <div className="flex justify-center">
          <a
            href="https://play.google.com/store/apps/details?id=com.eventsapp.myapp"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg bg-[#00B37E] px-8 py-4 text-base font-semibold text-white shadow-lg transition hover:bg-emerald-400"
          >
            Descarga la app
          </a>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/80 to-transparent" />
    </section>
  );
}
