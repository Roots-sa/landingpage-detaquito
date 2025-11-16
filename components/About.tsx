"use client";

import Image from "next/image";

const features = [
  {
    iconSrc: "/assets/Vector-3.png",
    title: "Pagos integrados",
    description:
      "Chau excusas: cada jugador puede aportar su parte desde la app — pago seguro, split automático y comprobante. Ideal para alquiler de cancha y premios.",
  },
  {
    iconSrc: "/assets/Vector-4.png",
    title: "Gestión completa de eventos",
    description:
      "Creá, editá, cancelá o reprogramá partidos con historial y notificaciones. Todo el control en una pantalla.",
  },
  {
    iconSrc: "/assets/Vector-5.png",
    title: "Notificaciones inteligentes",
    description:
      "Recordatorios automáticos, confirmaciones y avisos si alguien se baja: la app coordina por vos.",
  },
  {
    iconSrc: "/assets/Vector-6.png",
    title: "Amigos y equipos",
    description:
      "Mantené tus grupos de juego: planteles recurrentes, roles, capitanes y convocatorias rápidas.",
  },
  {
    iconSrc: "/assets/Vector-7.png",
    title: "Historial y rendimiento",
    description:
      "Estadísticas personales: goles, asistencias, racha y rankings. Para los que juegan en serio y para los que solo quieren divertirse.",
  },
  {
    iconSrc: "/assets/Vector-8.png",
    title: "Configuración y privacidad",
    description:
      "Control total de perfil, notificaciones y métodos de pago. Vos elegís cómo y cuándo jugar.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative bg-[#F5F5F5] py-24 sm:py-28">
      <div className="relative mx-auto flex max-w-6xl flex-col gap-16 px-4 sm:px-6 lg:flex-row lg:items-center">
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:flex-col lg:justify-center lg:gap-16 lg:pt-48">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="flex h-16 w-16 items-center justify-center sm:h-20 sm:w-20"
            >
              <Image
                src={`/assets/about-${item}.png`}
                alt={`Elemento decorativo ${item}`}
                width={80}
                height={80}
                className="h-full w-full object-contain"
              />
            </div>
          ))}
        </div>

        <div className="flex-1">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-[#0b1f1a] sm:text-5xl">
              Por qué usar De Taquito
            </h2>
            <p className="mt-4 text-lg font-bold text-[#00b37e] sm:text-2xl">
              Más que una agenda.{" "}
              <span className=" text-base font-medium text-[#7c828c] sm:text-2xl">
                Una experiencia completa para organizar y disfrutar del fútbol
                entre amigos y amigas.
              </span>
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(({ iconSrc, title, description }) => (
              <div
                key={title}
                className="flex h-full flex-col rounded-3xl bg-white p-7 shadow-[0_18px_45px_-25px_rgba(12,32,28,0.4)]"
              >
                <div className="flex h-14 w-14 items-center justify-center  text-[#00b37e]">
                  <Image src={iconSrc} alt={title} width={36} height={36} />
                </div>
                <h3 className="mt-6 text-xl font-bold text-[#0b1f1a]">
                  {title}
                </h3>
                <p className="mt-4 text-sm font-medium leading-6 text-[#6f767f]">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
