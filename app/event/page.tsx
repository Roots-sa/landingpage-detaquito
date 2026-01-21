"use client";

import { useState, useEffect, Suspense, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

function EventForm() {
  const searchParams = useSearchParams();
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = useCallback(async (eventCode?: string) => {
    const eventCodeToUse = eventCode || code.trim();

    if (!eventCodeToUse) {
      setError("Por favor, ingresá un código de evento");
      return;
    }

    setLoading(true);
    setError("");

    try {
      // Deep link según la configuración de la app: scheme "detaquito"
      const appLink = `detaquito://event/${eventCodeToUse}`;
      
      // Detectar el sistema operativo
      const userAgent = typeof navigator !== "undefined" ? navigator.userAgent || "" : "";
      const isAndroid = /Android/.test(userAgent);
      const isIOS = /iPhone|iPad|iPod/.test(userAgent);

      // URLs de las tiendas según package/bundleIdentifier
      const androidStoreUrl = "https://play.google.com/store/apps/details?id=com.eventsapp.myapp";
      const iosStoreUrl = "https://apps.apple.com";

      if (isAndroid || isIOS) {
        let opened = false;

        // Intentar abrir con window.location (funciona en iOS y algunos Android)
        try {
          window.location.href = appLink;
          opened = true;
        } catch (e) {
          console.error("Error al abrir deep link:", e);
        }

        // Para Android, también intentar con un iframe oculto (método alternativo)
        if (isAndroid && !opened && typeof document !== "undefined") {
          try {
            const iframe = document.createElement("iframe");
            iframe.style.display = "none";
            iframe.src = appLink;
            document.body.appendChild(iframe);

            // Remover el iframe después de un momento
            setTimeout(() => {
              if (iframe.parentNode) {
                document.body.removeChild(iframe);
              }
            }, 2000);

            opened = true;
          } catch (e) {
            console.error("Error al abrir deep link con iframe:", e);
          }
        }

        // Si después de 1.5 segundos no se abrió la app, redirigir a la tienda
        setTimeout(() => {
          if (isAndroid) {
            window.location.href = androidStoreUrl;
          } else if (isIOS) {
            window.location.href = iosStoreUrl;
          }
        }, 1500);

        // Fallback adicional: si pasan 2 segundos, ir a la tienda
        setTimeout(() => {
          if (document.hidden === false) {
            if (isAndroid) {
              window.location.href = androidStoreUrl;
            } else if (isIOS) {
              window.location.href = iosStoreUrl;
            }
          }
        }, 2000);
      } else {
        // En desktop, mostrar mensaje
        setError("La app solo está disponible en dispositivos móviles. Descargá la app para unirte al evento.");
        setLoading(false);
      }
    } catch (err) {
      setError("Ocurrió un error al procesar el código. Intentá nuevamente.");
      setLoading(false);
    }
  }, [code]);

  // Si hay un código en la URL, lo usamos
  useEffect(() => {
    const urlCode = searchParams.get("code");
    if (urlCode) {
      setCode(urlCode);
      handleSubmit(urlCode);
    }
  }, [searchParams, handleSubmit]);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSubmit();
  };

  return (
    <>
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="mb-4 text-4xl font-extrabold text-[#0b1f1a] sm:text-5xl">
          Ingresar a Evento
        </h1>
        <p className="text-lg text-[#8C8C8C] sm:text-xl">
          Ingresá el código del evento para unirte
        </p>
      </div>

      {/* Form */}
      <div className="bg-[#F5F5F5] rounded-3xl p-8 sm:p-12 shadow-lg">
        <form onSubmit={handleFormSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="code"
              className="block text-lg font-bold text-[#0b1f1a] mb-3"
            >
              Código del Evento
            </label>
            <input
              type="text"
              id="code"
              value={code}
              onChange={(e) => {
                setCode(e.target.value);
                setError("");
              }}
              placeholder="Ingresá el código del evento"
              className="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-xl focus:outline-none focus:border-[#00B37E] focus:ring-2 focus:ring-[#00B37E]/20 transition-all"
              disabled={loading}
              autoComplete="off"
              autoFocus
            />
            {error && (
              <p className="mt-3 text-sm font-medium text-red-600">
                {error}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading || !code.trim()}
            className="w-full bg-[#00B37E] hover:bg-emerald-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-bold py-4 px-8 rounded-xl text-lg shadow-lg transition-colors duration-200"
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Abriendo en la app...
              </span>
            ) : (
              "Ingresar al Evento"
            )}
          </button>
        </form>

        {/* Info Section */}
        <div className="mt-8 pt-8 border-t border-gray-300">
          <p className="text-sm text-[#8C8C8C] text-center mb-4">
            ¿No tenés la app instalada?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://play.google.com/store/apps/details?id=com.eventsapp.myapp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-white hover:bg-gray-50 text-[#0b1f1a] font-bold py-3 px-6 rounded-xl border-2 border-gray-300 transition-colors duration-200"
            >
              <Image
                src="/assets/android.png"
                alt="Android"
                width={24}
                height={24}
                className="h-6 w-6"
              />
              Descargar para Android
            </a>
            <a
              href="https://apps.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-white hover:bg-gray-50 text-[#0b1f1a] font-bold py-3 px-6 rounded-xl border-2 border-gray-300 transition-colors duration-200"
            >
              <Image
                src="/assets/apple.png"
                alt="Apple iOS"
                width={24}
                height={24}
                className="h-6 w-6"
              />
              Próximamente en iOS
            </a>
          </div>
        </div>
      </div>

      {/* Help Section */}
      <div className="mt-8 text-center">
        <p className="text-sm text-[#8C8C8C]">
          ¿Necesitás ayuda?{" "}
          <a
            href="mailto:soporte@detaquito.app"
            className="font-semibold text-[#00B37E] hover:underline"
          >
            Contactanos
          </a>
        </p>
      </div>
    </>
  );
}

export default function EventPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <Suspense
            fallback={
              <div className="text-center py-12">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-[#00B37E]"></div>
                <p className="mt-4 text-[#8C8C8C]">Cargando...</p>
              </div>
            }
          >
            <EventForm />
          </Suspense>
        </div>
      </div>
      <Footer />
    </main>
  );
}
