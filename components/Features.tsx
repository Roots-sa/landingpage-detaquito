"use client";

import { CalendarDays, Users2, ListChecks, Goal } from "lucide-react";
import Image from "next/image";

const steps = [
  {
    icon: CalendarDays,
    title: "Creá tu partido",
    description:
      "Elegí lugar, fecha, hora y el tipo de partido. Todo rápido para que no se enfríe la idea.",
    highlight: "enfríe la idea.",
    highlightClass: "font-semibold text-emerald-600",
  },
  {
    icon: Users2,
    title: "Invitá a tus amigos",
    description:
      "Compartí un link o invitá directo desde la app. Los equipos se arman en segundos y la confirmación llega por notificación.",
    highlight: "link o invitá directo",
    highlightClass:
      "font-semibold text-emerald-600 underline underline-offset-4 decoration-emerald-400",
  },
  {
    icon: ListChecks,
    title: "Jugá y llevá el marcador",
    description:
      "Anotá resultado, sumá goles y guarda el historial de todos tus encuentros y torneos.",
    highlight: "historial de todos tus encuentros",
    highlightClass: "font-semibold text-emerald-600",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="relative overflow-hidden bg-[#F5F5F5] pb-24 pt-28 sm:pb-32 sm:pt-32"
    >
      <div className="absolute inset-x-0 top-[-120px] h-56 origin-top bg-cover bg-center" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/40 via-black/0 to-transparent" />
      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-4 text-center sm:px-6">
        <div className="mb-10 flex items-center justify-center gap-4">
          <Image src="/assets/arco.png" alt="Arco" width={182} height={104} />
        </div>
        <h2 className="flex items-center justify-center text-5xl font-extrabold text-[#0b1f1a] sm:text-5xl md:text-5xl gap-1">
          Como funciona De Taquit
          <Image
            src="/assets/logo-o-verde.png"
            alt="Mate balón De Taquito"
            width={32}
            height={32}
          />
        </h2>
        <p className="mt-14 text-base font-semibold text-[#8C8C8C] sm:text-2xl">
          Organizá tus partidos en tres pasos simples: creá, invitá y jugá.
          Elegí la cancha, compartí el link y listo — sin chats eternos. Armá tu
          equipo ideal, disfrutá partidos rápidos y competí en torneos. Todo
          fácil, rápido y 100% fútbol,
          <span className="text-[#00B37E]">
            {" "}
            ¡donde quieras y cuando quieras!
          </span>
        </p>

        <div className="mt-14 grid w-full gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const [before, after = ""] = step.description.split(step.highlight);
            return (
              <div
                key={step.title}
                className="group flex h-full flex-col rounded-3xl bg-white p-8 text-left shadow-[0_12px_35px_-20px_rgba(13,32,20,0.35)] transition hover:-translate-y-2 hover:shadow-[0_20px_45px_-25px_rgba(13,32,20,0.45)]"
              >
                <div className="flex h-12 w-12 items-center justify-center text-[#00B37E]">
                  <Icon className="h-12 w-12" />
                </div>
                <h3 className="mt-6 text-2xl font-bold text-[#0b1f1a]">
                  <span className="text-[#00B37E]">{index + 1}.</span>{" "}
                  {step.title}
                </h3>
                <p className="mt-4 text-xl font-bold text-[#8C8C8C]">
                  {before}
                  <span className={step.highlightClass}>{step.highlight}</span>
                  {after}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
