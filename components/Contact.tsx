"use client";

import Image from "next/image";
import { useState } from "react";
import { Check } from "lucide-react";
import { z } from "zod";

const betaSchema = z.object({
  fullName: z.string().min(1, "El nombre completo es requerido"),
  email: z.string().email("Ingresá un correo válido"),
  phone: z.string().min(1, "El número de celular es requerido"),
  cityCountry: z.string().min(1, "La ciudad y país son requeridos"),
  acceptTerms: z.boolean().refine((val) => val === true, {
    message: "Debés aceptar los términos para continuar",
  }),
});

const topFeatures = [
  "Reservá canchas y gestioná horarios.",
  "Aboná desde la app o en efectivo. El estado del pago queda registrado.",
  "Notificaciones y confirmaciones automáticas.",
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
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [cityCountry, setCityCountry] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      betaSchema.parse({ fullName, email, phone, cityCountry, acceptTerms });
      setError(null);
    } catch (validationError) {
      if (validationError instanceof z.ZodError) {
        setError(
          validationError.issues[0]?.message ??
            "Por favor completá todos los campos"
        );
      }
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fullName,
          email,
          phone,
          cityCountry,
          message: `Solicitud para la beta de DeTaquito\n\nNombre completo: ${fullName}\nEmail: ${email}\nTeléfono: ${phone}\nCiudad y país: ${cityCountry}`,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFullName("");
        setEmail("");
        setPhone("");
        setCityCountry("");
        setAcceptTerms(false);
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

        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-start">
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-extrabold text-[#0b1f1a] sm:text-4xl">
                Beta Cerrada – DeTaquito
              </h3>
              <p className="mt-3 max-w-xl text-base font-medium text-[#7c828c] sm:text-lg">
                ¡Gracias por tu interés en probar DeTaquito! Dejá tus datos y te
                avisaremos cuando la app esté lista para descargar.
              </p>
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

          <div className="lg:sticky lg:top-8">
            <div className="rounded-[32px] bg-white p-8 shadow-[0_25px_60px_-35px_rgba(7,17,13,0.4)]">
              {isSubmitted ? (
                <div className="text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#00b37e]/10 text-[#00b37e]">
                    <Check className="h-7 w-7" />
                  </div>
                  <h4 className="mt-4 text-2xl font-bold text-[#0b1f1a]">
                    ¡Gran pase! Ahora quedamos nosotros: en breve te
                    contactamos.
                  </h4>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <label className="block text-left text-base font-semibold text-[#0b1f1a]">
                    Nombre completo
                    <input
                      type="text"
                      value={fullName}
                      onChange={(event) => setFullName(event.target.value)}
                      placeholder="Tu nombre completo"
                      className="mt-2 w-full rounded-2xl border border-[#d9dde2] bg-[#f7f8f8] px-4 py-3 text-base text-[#0b1f1a] outline-none transition focus:border-[#00b37e] focus:bg-white"
                    />
                  </label>
                  <label className="block text-left text-base font-semibold text-[#0b1f1a]">
                    Email de contacto
                    <input
                      type="email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      placeholder="tucorreo@gmail.com"
                      className="mt-2 w-full rounded-2xl border border-[#d9dde2] bg-[#f7f8f8] px-4 py-3 text-base text-[#0b1f1a] outline-none transition focus:border-[#00b37e] focus:bg-white"
                    />
                  </label>
                  <label className="block text-left text-base font-semibold text-[#0b1f1a]">
                    Número de celular
                    <input
                      type="tel"
                      value={phone}
                      onChange={(event) => setPhone(event.target.value)}
                      placeholder="+54 9 11 1234-5678"
                      className="mt-2 w-full rounded-2xl border border-[#d9dde2] bg-[#f7f8f8] px-4 py-3 text-base text-[#0b1f1a] outline-none transition focus:border-[#00b37e] focus:bg-white"
                    />
                  </label>
                  <label className="block text-left text-base font-semibold text-[#0b1f1a]">
                    ¿De qué ciudad y país sos?
                    <input
                      type="text"
                      value={cityCountry}
                      onChange={(event) => setCityCountry(event.target.value)}
                      placeholder="Buenos Aires, Argentina"
                      className="mt-2 w-full rounded-2xl border border-[#d9dde2] bg-[#f7f8f8] px-4 py-3 text-base text-[#0b1f1a] outline-none transition focus:border-[#00b37e] focus:bg-white"
                    />
                  </label>
                  {error && (
                    <p className="text-sm font-medium text-red-600">{error}</p>
                  )}
                  <label className="flex items-start gap-3 text-left text-sm font-medium text-[#0b1f1a]">
                    <input
                      type="checkbox"
                      checked={acceptTerms}
                      onChange={(event) => setAcceptTerms(event.target.checked)}
                      className="mt-1 h-4 w-4 rounded border-[#d9dde2] text-[#00b37e] focus:ring-[#00b37e]"
                    />
                    <span>
                      Acepto que mis datos sean utilizados para fines de
                      contacto para la beta.
                    </span>
                  </label>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-full bg-[#00b37e] py-3 text-base font-semibold text-white shadow-lg transition hover:bg-[#00a170] disabled:cursor-not-allowed disabled:bg-[#7f8b86]"
                  >
                    {isSubmitting
                      ? "Enviando..."
                      : "¡Gran pase! Ahora quedamos nosotros: en breve te contactamos."}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
