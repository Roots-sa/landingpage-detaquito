"use client";

import { useEffect, useState, useRef } from 'react';
import { useSearchParams } from 'next/navigation';

/**
 * Componente de fallback para deep links de eventos
 * Intenta abrir la app y si no está instalada, redirige a la tienda
 */
export default function EventFallbackPage() {
  const searchParams = useSearchParams();
  const code = searchParams.get('code');
  const [loadingText, setLoadingText] = useState('Abriendo en la app...');
  const openedRef = useRef(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pageHiddenRef = useRef(false);

  useEffect(() => {
    if (!code) {
      setLoadingText('Código no válido');
      setTimeout(() => {
        if (typeof window !== 'undefined') {
          window.location.href = 'https://detaquito.lat';
        }
      }, 2000);
      return;
    }

    // Construir el deep link
    const appLink = `detaquito://event/${code}`;

    // Detectar el sistema operativo
    const userAgent = typeof navigator !== 'undefined' ? navigator.userAgent || '' : '';
    const isAndroid = /Android/.test(userAgent);
    const isIOS = /iPhone|iPad|iPod/.test(userAgent);

    // URLs de las tiendas
    const androidStoreUrl = 'https://play.google.com/store/apps/details?id=com.eventsapp.myapp';
    const iosStoreUrl = 'https://apps.apple.com';

    // Función para redirigir a la tienda
    const redirectToStore = () => {
      if (typeof window === 'undefined') return;
      
      if (isAndroid) {
        window.location.href = androidStoreUrl;
      } else if (isIOS) {
        window.location.href = iosStoreUrl;
      } else {
        // Si no es móvil, redirigir a la web
        window.location.href = `https://detaquito.lat/event/${code}`;
      }
    };

    // Intentar abrir la app
    let opened = false;

    // Intentar abrir con window.location (funciona en iOS y algunos Android)
    if (typeof window !== 'undefined') {
      try {
        window.location.href = appLink;
        opened = true;
        openedRef.current = true;
      } catch (e) {
        console.error('Error al abrir deep link:', e);
      }

      // Para Android, también intentar con un iframe oculto (método alternativo)
      if (isAndroid && !opened) {
        try {
          const iframe = document.createElement('iframe');
          iframe.style.display = 'none';
          iframe.src = appLink;
          document.body.appendChild(iframe);

          // Remover el iframe después de un momento
          setTimeout(() => {
            if (iframe.parentNode) {
              document.body.removeChild(iframe);
            }
          }, 2000);

          opened = true;
          openedRef.current = true;
        } catch (e) {
          console.error('Error al abrir deep link con iframe:', e);
        }
      }

      // Configurar timeout para redirigir a la tienda si no se abre la app
      timeoutRef.current = setTimeout(() => {
        if (!openedRef.current || document.hidden) {
          redirectToStore();
        }
      }, 1500);

      // Si la página se oculta (app se abrió), cancelar el timeout
      const handleVisibilityChange = () => {
        if (document.hidden) {
          if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
          }
          pageHiddenRef.current = true;
        } else if (pageHiddenRef.current) {
          // Si la página volvió a ser visible después de ocultarse, probablemente la app no se abrió
          setTimeout(() => {
            if (!openedRef.current) {
              redirectToStore();
            }
          }, 500);
        }
      };

      document.addEventListener('visibilitychange', handleVisibilityChange);

      // Fallback adicional: si pasan 2 segundos y todavía estamos aquí, ir a la tienda
      setTimeout(() => {
        if (!openedRef.current) {
          redirectToStore();
        }
      }, 2000);

      // Cleanup
      return () => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
        document.removeEventListener('visibilitychange', handleVisibilityChange);
      };
    }
  }, [code]);

  return (
    <div className="min-h-screen flex items-center justify-center p-5 bg-gradient-to-br from-[#008F5A] to-[#007a4d]">
      <div className="max-w-[400px] w-full flex flex-col items-center">
        <h1 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">
          Detaquito
        </h1>
        <p className="text-lg text-white mb-10 opacity-90 text-center">
          Organiza y únete a eventos deportivos
        </p>
        <div className="my-5">
          <svg
            className="animate-spin h-10 w-10 text-white"
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
        </div>
        <p className="text-base text-white mt-2.5 opacity-80 text-center">
          {loadingText}
        </p>
      </div>
    </div>
  );
}
