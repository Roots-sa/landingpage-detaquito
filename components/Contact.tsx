"use client";

import Image from "next/image";
import { Check } from "lucide-react";

const topFeatures = [
  "Reservá canchas y gestioná horarios.",
  "Aboná desde la app o en efectivo. El estado del pago queda registrado.",
  "Notificaciones y confirmaciones automáticas.",
];

export default function Contact() {
  return (
    <section id="contact" className="relative  bg-[#F5F5F5] py-24 sm:py-32">
      <div className="relative mx-auto flex max-w-6xl flex-col gap-16 px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-center">
          <div className="relative  overflow-hidden rounded-3xl ">
            <Image
              src="/assets/adelanto.svg"
              alt="Vista previa de De Taquito"
              width={640}
              height={640}
              className="h-full w-full object-cover"
              priority
            />
          </div>

          <div className="space-y-6 text-left">
            <h2 className="text-4xl font-extrabold text-[#0b1f1a] sm:text-5xl">
              Un adelanto
            </h2>
            <p className="text-lg font-medium text-[#8C8C8C] sm:text-xl">
              <span className="font-bold text-[#00b37e]">De Taquito</span> está
              por llegar a la cancha. Si querés enterarte del lanzamiento,
              participar de la beta o resolver dudas sobre cómo funcionan los
              pagos integrados,{" "}
              <span className="text-[#00b37e]">
                dejá tu correo y te avisamos antes que nadie.
              </span>
            </p>
            <ul className="space-y-3">
              {topFeatures.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 text-base font-bold text-[#0b1f1a] sm:text-lg"
                >
                  <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#00b37e]/15 text-[#00b37e]">
                    <Check className="h-4 w-4" />
                  </span>
                  <span className="text-[#6e7480]">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid gap-12 mt-32 lg:grid-cols-2 lg:items-start">
          {/* Left Column: Descargá la app */}
          <div className="space-y-6 text-center">
            <div>
              <h3 className="text-3xl font-extrabold text-[#0b1f1a] sm:text-4xl">
                Descargá la app
              </h3>
              <p className="mt-3 text-base font-bold text-[#8C8C8C] sm:text-2xl">
                Organizá partidos, encontrá gente para jugar y sumate a partidos
                cerca tuyo. Todo desde un solo lugar.
              </p>
            </div>
            <div className="flex justify-center">
              <a
                href="https://play.google.com/store/apps/details?id=com.eventsapp.myapp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-lg bg-[#00B37E] px-8 py-4 text-base font-bold text-white shadow-lg transition hover:bg-emerald-400"
              >
                Descarga la app
              </a>
            </div>
            <p className="text-2xl text-center font-bold text-[#8C8C8C]">
              Disponible para Android.
              <br />
              Próximamente en iOS
            </p>
            <div className="flex items-center justify-center gap-4">
              <Image
                src="/assets/android.png"
                alt="Android"
                width={24}
                height={24}
                className="h-6 w-6"
              />
              <Image
                src="/assets/apple.png"
                alt="Apple iOS"
                width={24}
                height={24}
                className="h-6 w-6"
              />
            </div>
          </div>

          {/* Right Column: ¿Sos organizador o manejás canchas? */}
          <div className="space-y-6 text-center">
            <div>
              <h3 className="text-3xl font-extrabold text-[#0b1f1a] sm:text-4xl">
                ¿Sos organizador o manejás canchas?
              </h3>
              <p className="mt-3 text-2xl font-bold text-[#8C8C8C] sm:text-2xl">
                Si organizás partidos o administrás canchas, tenemos
                herramientas pensadas para vos.
              </p>
            </div>
            <ul className="space-y-3 text-left list-none">
              <li className="flex items-start gap-3 text-xl font-bold">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-[#00B37E] flex-shrink-0"></span>
                <span>
                  <span className="text-[#00B37E]">Panel</span>{" "}
                  <span className="text-[#0b1f1a]">de organización</span>
                </span>
              </li>
              <li className="flex items-start gap-3 text-xl font-bold">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-[#00B37E] flex-shrink-0"></span>
                <span>
                  <span className="text-[#00B37E]">Gestión</span>{" "}
                  <span className="text-[#0b1f1a]">de partidos y canchas</span>
                </span>
              </li>
              <li className="flex items-start gap-3 text-xl font-bold">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-[#00B37E] flex-shrink-0"></span>
                <span>
                  <span className="text-[#00B37E]">
                    Reportes y estadísticas
                  </span>{" "}
                  <span className="text-[#0b1f1a]">en tiempo real</span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
