import { SITE } from "../data/site";

export default function PrivacyPage() {
  return (
    <section className="bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 legal">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Política de privacidad
        </h1>

        <div className="space-y-5 text-gray-700 leading-relaxed text-[15px]">
          <p>
            <strong>Responsable del tratamiento:</strong> AgroVolt, proyecto en
            fase de constitución, con domicilio en {SITE.location} y correo de
            contacto{" "}
            <a href={`mailto:${SITE.email}`} className="text-green-700 underline">
              {SITE.email}
            </a>
            .
          </p>

          <h2 className="text-xl font-semibold text-gray-900 pt-3">
            1. Qué datos recogemos
          </h2>
          <p>
            A través del formulario de contacto recogemos tu nombre, correo
            electrónico, teléfono (opcional), cultivo, superficie de la
            explotación y el contenido de tu mensaje. En la
            newsletter solo recogemos tu correo electrónico.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 pt-3">
            2. Para qué los usamos
          </h2>
          <p>
            Únicamente para responder a tu solicitud, preparar el estudio de
            viabilidad que nos pidas y, si te has suscrito, enviarte los
            artículos del blog. No vendemos ni cedemos tus datos a terceros con
            fines comerciales.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 pt-3">
            3. Base legal
          </h2>
          <p>
            Tu consentimiento, al marcar la casilla del formulario, y la
            ejecución de medidas precontractuales a petición tuya (art. 6.1.a y
            6.1.b del RGPD).
          </p>

          <h2 className="text-xl font-semibold text-gray-900 pt-3">
            4. Encargados del tratamiento
          </h2>
          <p>
            Los envíos de correo del formulario se gestionan con EmailJS y la
            newsletter con Formspree, ambos proveedores tecnológicos que tratan
            los datos por cuenta nuestra conforme al RGPD. La medición
            analítica, si la aceptas, se realiza con Google Analytics (Google
            Ireland Ltd.).
          </p>

          <h2 className="text-xl font-semibold text-gray-900 pt-3">
            5. Conservación
          </h2>
          <p>
            Guardamos tus consultas durante el tiempo necesario para atenderlas
            y, como máximo, 12 meses, salvo que solicites su supresión antes.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 pt-3">
            6. Tus derechos
          </h2>
          <p>
            Puedes ejercer los derechos de acceso, rectificación, supresión,
            oposición, limitación y portabilidad escribiendo a{" "}
            <a href={`mailto:${SITE.email}`} className="text-green-700 underline">
              {SITE.email}
            </a>
            . Si consideras que el tratamiento no se ajusta a la normativa,
            puedes reclamar ante la Agencia Española de Protección de Datos.
          </p>
        </div>
      </div>
    </section>
  );
}
