"use client";

import Image from "next/image";
import { useState } from "react";
import { Check } from "lucide-react";
import { z } from "zod";

const betaSchema = z.object({
  email: z.string().email("Ingresá un correo válido"),
});

const topFeatures = [
  "Reservá canchas y gestioná horarios",
  "Pagos compartidos: dividí la cuenta entre jugadores",
  "Notificaciones y confirmaciones automáticas",
];

const betaBenefits = [
  {
    label: "Acceso a panel",
    trailing: " de organización",
  },
  {
    label: "Beneficios",
    trailing: " para canchas y promotores",
  },
  {
    label: "Reportes y estadísticas",
    trailing: " en tiempo real",
  },
];

export default function Contact() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      betaSchema.parse({ email });
      setError(null);
    } catch (validationError) {
      if (validationError instanceof z.ZodError) {
        setError(validationError.issues[0]?.message ?? "Correo inválido");
      }
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Waitlist",
          email,
          message: "Solicitud para la beta de De Taquito",
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setEmail("");
      }
    } catch (submissionError) {
      console.error("Error sending waitlist request", submissionError);
      setError("Ocurrió un error. Intentalo de nuevo más tarde.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative  bg-[#F5F5F5] py-24 sm:py-32">
      <div className="relative mx-auto flex max-w-6xl flex-col gap-16 px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-center">
          <div className="relative mx-auto max-w-lg overflow-hidden rounded-3xl ">
            <Image
              src="/assets/adelanto.png"
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
            <p className="text-lg font-medium text-[#7c828c] sm:text-xl">
              <span className="font-semibold text-[#00b37e]">De Taquito</span>{" "}
              está por llegar a la cancha. Si querés enterarte del lanzamiento,
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
                  className="flex items-start gap-3 text-base font-semibold text-[#0b1f1a] sm:text-lg"
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

        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-extrabold text-[#0b1f1a] sm:text-4xl">
                Quiero ser parte (beta)
              </h3>
              <p className="mt-3 max-w-xl text-base font-medium text-[#7c828c] sm:text-lg">
                Dejá tu mail y te avisamos justo cuando abramos descargas. Podés
                ser tester y darnos feedback para mejorar la app.
              </p>
            </div>

            <div className="rounded-[32px] bg-white p-8 shadow-[0_25px_60px_-35px_rgba(7,17,13,0.4)]">
              {isSubmitted ? (
                <div className="text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#00b37e]/10 text-[#00b37e]">
                    <Check className="h-7 w-7" />
                  </div>
                  <h4 className="mt-4 text-2xl font-bold text-[#0b1f1a]">
                    ¡Te avisamos pronto!
                  </h4>
                  <p className="mt-2 text-sm font-medium text-[#7c828c]">
                    Guardamos tu correo para compartir novedades de la beta.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <label className="block text-left text-base font-semibold text-[#0b1f1a]">
                    Email
                    <input
                      type="email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      placeholder="tucorreo@gmail.com"
                      className="mt-2 w-full rounded-2xl border border-[#d9dde2] bg-[#f7f8f8] px-4 py-3 text-base text-[#0b1f1a] outline-none transition focus:border-[#00b37e] focus:bg-white"
                    />
                  </label>
                  {error && (
                    <p className="text-sm font-medium text-red-600">{error}</p>
                  )}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-full bg-[#00b37e] py-3 text-base font-semibold text-white shadow-lg transition hover:bg-[#00a170] disabled:cursor-not-allowed disabled:bg-[#7f8b86]"
                  >
                    {isSubmitting ? "Enviando..." : "Avisar cuando salga"}
                  </button>
                </form>
              )}

              <p className="mt-6 text-center text-xs font-medium text-[#9aa0a6]">
                No compartimos tu email. Solo avisos de lanzamiento y beta.
              </p>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-[0_25px_60px_-35px_rgba(7,17,13,0.38)]">
            <h4 className="text-2xl font-bold text-[#0b1f1a]">
              ¿Querés colaborar en la beta?
            </h4>
            <p className="mt-3 text-base font-medium text-[#7c828c]">
              Si sos organizador de partidos o manejás canchas, podemos darte
              acceso anticipado y herramientas admin. Indicalo en el mail y lo
              tenemos en cuenta.
            </p>
            <ul className="mt-6 space-y-3">
              {betaBenefits.map((benefit) => (
                <li
                  key={benefit.label}
                  className="flex items-start gap-3 text-base font-semibold"
                >
                  <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#00b37e]/15 text-[#00b37e]">
                    <Check className="h-4 w-4" />
                  </span>
                  <span className="text-[#6e7480]">
                    <span className="text-[#00b37e]">{benefit.label}</span>
                    {benefit.trailing}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
