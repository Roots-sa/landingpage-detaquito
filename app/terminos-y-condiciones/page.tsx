import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Términos y Condiciones - De Taquito",
  description: "Términos y Condiciones de Uso de la plataforma DeTaquito",
};

export default function TerminosYCondiciones() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <h1 className="mb-4 text-4xl font-extrabold text-[#0b1f1a] sm:text-5xl">
          Términos y Condiciones de Uso – DeTaquito
        </h1>
        <p className="mb-12 text-sm text-gray-600">
          Última actualización: 2025
        </p>

        <div className="prose prose-lg max-w-none space-y-8 text-gray-700">
          <section>
            <h2 className="mb-4 text-2xl font-bold text-[#0b1f1a]">
              1. Aceptación de los Términos
            </h2>
            <p className="leading-relaxed">
              El presente documento establece los Términos y Condiciones de Uso
              (en adelante, los "Términos") aplicables a la utilización de la
              aplicación móvil y/o plataforma web DeTaquito (en adelante, la
              "Plataforma"). Al registrarse, acceder o utilizar DeTaquito, el
              usuario (en adelante, el "Usuario") acepta íntegramente estos
              Términos. Si no está de acuerdo con alguna de sus disposiciones,
              deberá abstenerse de utilizar la Plataforma.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-[#0b1f1a]">
              2. Objeto de la Plataforma
            </h2>
            <p className="leading-relaxed">
              DeTaquito es una plataforma destinada a facilitar la organización,
              administración y participación en eventos deportivos,
              principalmente fútbol, así como actividades relacionadas. La
              Plataforma actúa únicamente como intermediaria tecnológica entre
              organizadores y participantes. DeTaquito no es responsable de la
              organización material ni de la ejecución de los eventos.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-[#0b1f1a]">
              3. Registro y Cuenta de Usuario
            </h2>
            <h3 className="mb-3 text-xl font-semibold text-[#0b1f1a]">
              3.1 Requisitos
            </h3>
            <p className="mb-4 leading-relaxed">
              Para utilizar la Plataforma, el Usuario debe:
            </p>
            <ul className="mb-6 ml-6 list-disc space-y-2">
              <li>Ser mayor de 13 años o contar con autorización de un representante legal.</li>
              <li>Proporcionar información veraz, completa y actual.</li>
              <li>Mantener la confidencialidad de sus credenciales de acceso.</li>
            </ul>
            <h3 className="mb-3 text-xl font-semibold text-[#0b1f1a]">
              3.2 Responsabilidad del Usuario
            </h3>
            <p className="leading-relaxed">
              El Usuario será responsable de toda actividad realizada a través de
              su cuenta. DeTaquito podrá suspender o eliminar cuentas que
              presenten uso indebido, incumplimiento de los Términos o actividad
              sospechosa.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-[#0b1f1a]">
              4. Uso Autorizado de la Plataforma
            </h2>
            <p className="mb-4 leading-relaxed">
              El Usuario se compromete a:
            </p>
            <ul className="mb-4 ml-6 list-disc space-y-2">
              <li>Utilizar la Plataforma únicamente con fines lícitos.</li>
              <li>
                Abstenerse de cargar, difundir o publicar contenido ofensivo,
                inapropiado, difamatorio, discriminatorio, ilegal o que infrinja
                derechos de terceros.
              </li>
              <li>
                No interferir con el funcionamiento de la Plataforma ni intentar
                acceder a sistemas restringidos.
              </li>
            </ul>
            <p className="leading-relaxed">
              El incumplimiento podrá derivar en la suspensión o baja inmediata
              de la cuenta del Usuario.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-[#0b1f1a]">
              5. Organización de Eventos
            </h2>
            <p className="mb-4 leading-relaxed">
              Los eventos publicados en la Plataforma son administrados
              exclusivamente por el Usuario Organizador. Este es responsable de:
            </p>
            <ul className="mb-4 ml-6 list-disc space-y-2">
              <li>
                La exactitud de la información del evento (fecha, ubicación,
                reglas, costos, cupos, etc.).
              </li>
              <li>La comunicación con los participantes.</li>
              <li>Las condiciones de seguridad razonables del evento.</li>
            </ul>
            <p className="leading-relaxed">
              DeTaquito no asumirá responsabilidad alguna por incidentes,
              conflictos, lesiones, daños, pérdidas o cualquier hecho ocurrido
              antes, durante o después del evento.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-[#0b1f1a]">
              6. Pagos, Reservas y Reembolsos
            </h2>
            <p className="mb-4 leading-relaxed">
              En caso de habilitarse pagos dentro de la Plataforma:
            </p>
            <ul className="mb-4 ml-6 list-disc space-y-2">
              <li>
                Las tarifas y condiciones serán establecidas por el Organizador
                del evento.
              </li>
              <li>
                DeTaquito podrá actuar como procesador o intermediario
                tecnológico, sin ser responsable por la administración final de
                los fondos.
              </li>
              <li>
                Los reembolsos, cancelaciones y políticas asociadas serán
                determinadas por el Organizador.
              </li>
            </ul>
            <p className="leading-relaxed">
              El Usuario reconoce que DeTaquito no garantiza reintegros salvo
              que el Organizador así lo disponga.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-[#0b1f1a]">
              7. Cancelaciones y Modificaciones de Eventos
            </h2>
            <p className="leading-relaxed">
              El Organizador es el único responsable de establecer políticas de
              cancelación, reprogramación o devolución de pagos. La Plataforma
              podrá comunicar cambios mediante notificaciones, sin asumir
              responsabilidad por demoras o fallas en dichas comunicaciones.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-[#0b1f1a]">
              8. Contenido Generado por los Usuarios
            </h2>
            <p className="mb-4 leading-relaxed">
              Los Usuarios podrán publicar contenido (texto, imágenes, datos o
              comentarios). Al hacerlo, garantizan que:
            </p>
            <ul className="mb-4 ml-6 list-disc space-y-2">
              <li>
                Son titulares de los derechos o cuentan con autorización para su
                uso.
              </li>
              <li>El contenido no vulnera leyes ni derechos de terceros.</li>
              <li>
                No infringe propiedad intelectual, privacidad o normas vigentes.
              </li>
            </ul>
            <p className="leading-relaxed">
              DeTaquito podrá eliminar contenido que considere inapropiado o que
              viole estos Términos.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-[#0b1f1a]">
              9. Privacidad y Protección de Datos Personales
            </h2>
            <p className="mb-4 leading-relaxed">
              El uso de la Plataforma implica la recopilación y tratamiento de
              datos personales tales como:
            </p>
            <ul className="mb-4 ml-6 list-disc space-y-2">
              <li>Datos de identidad.</li>
              <li>Información de contacto.</li>
              <li>Datos de actividad dentro de la Plataforma.</li>
              <li>
                Datos de ubicación, cuando el Usuario otorgue permiso.
              </li>
            </ul>
            <p className="mb-4 leading-relaxed">Los datos serán utilizados para:</p>
            <ul className="mb-4 ml-6 list-disc space-y-2">
              <li>Gestionar la cuenta del Usuario.</li>
              <li>Mejorar y optimizar el funcionamiento de la Plataforma.</li>
              <li>Gestionar eventos, notificaciones y seguridad.</li>
            </ul>
            <p className="leading-relaxed">
              DeTaquito no compartirá ni comercializará datos personales sin
              consentimiento, salvo obligación legal.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-[#0b1f1a]">
              10. Riesgos de la Actividad Deportiva
            </h2>
            <p className="mb-4 leading-relaxed">
              La participación en actividades deportivas implica riesgos físicos
              inherentes.
            </p>
            <p className="mb-4 leading-relaxed">
              El Usuario reconoce y acepta que:
            </p>
            <ul className="mb-4 ml-6 list-disc space-y-2">
              <li>Participa bajo su exclusiva responsabilidad.</li>
              <li>
                Debe evaluar su aptitud física antes de asistir a cualquier
                evento.
              </li>
            </ul>
            <p className="leading-relaxed">
              DeTaquito no será responsable por accidentes, lesiones, daños
              materiales, robos o pérdidas ocurridas durante los eventos.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-[#0b1f1a]">
              11. Propiedad Intelectual
            </h2>
            <p className="mb-4 leading-relaxed">
              Todos los derechos de propiedad intelectual relacionados con la
              Plataforma, incluyendo software, diseños, logotipos, marcas y
              contenidos propios, pertenecen a DeTaquito.
            </p>
            <p className="leading-relaxed">
              El Usuario no podrá copiar, reproducir, modificar, distribuir ni
              explotar dichos elementos sin autorización expresa.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-[#0b1f1a]">
              12. Limitación de Responsabilidad
            </h2>
            <p className="mb-4 leading-relaxed">
              En la máxima medida permitida por la ley, DeTaquito no garantiza:
            </p>
            <ul className="mb-4 ml-6 list-disc space-y-2">
              <li>Disponibilidad continua de la Plataforma.</li>
              <li>Ausencia de errores técnicos.</li>
              <li>
                Que el contenido publicado por los Usuarios sea veraz o
                confiable.
              </li>
            </ul>
            <p className="leading-relaxed">
              DeTaquito no será responsable por daños directos, indirectos,
              incidentales, consecuentes o punitivos derivados del uso o
              imposibilidad de uso de la Plataforma.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-[#0b1f1a]">
              13. Modificaciones de los Términos
            </h2>
            <p className="leading-relaxed">
              DeTaquito se reserva el derecho de modificar estos Términos en
              cualquier momento. Los cambios serán publicados en la Plataforma.
              La continuidad en el uso implicará la aceptación de las
              modificaciones.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-[#0b1f1a]">
              14. Ley Aplicable y Jurisdicción
            </h2>
            <p className="leading-relaxed">
              Los presentes Términos se regirán por las leyes de la República
              Argentina. Cualquier controversia será sometida a los tribunales
              ordinarios de la Ciudad Autónoma de Buenos Aires.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-[#0b1f1a]">
              15. Contacto
            </h2>
            <p className="leading-relaxed">
              Para consultas, el Usuario puede comunicarse a:
            </p>
            <p className="mt-2">
              <a
                href="mailto:soporte@detaquito.app"
                className="font-semibold text-[#00B37E] hover:underline"
              >
                soporte@detaquito.app
              </a>
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}

