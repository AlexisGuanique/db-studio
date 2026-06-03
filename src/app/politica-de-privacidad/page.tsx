import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/layout/LegalPageLayout";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de Privacidad",
};

export default function PoliticaDePrivacidadPage() {
  return (
    <LegalPageLayout
      title="Política de Privacidad"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Política de Privacidad" },
      ]}
    >
      <p className="text-sm text-text-secondary">Última actualización: junio 2026</p>

      <h2>1. Datos que recopilamos</h2>
      <ul>
        <li>Nombre, email, teléfono y empresa</li>
        <li>Datos de pago (procesados por Stripe y Square — no almacenamos números completos de tarjeta)</li>
        <li>Dirección IP, tipo de navegador y cookies</li>
        <li>Información de formularios de contacto, reserva y aplicación</li>
      </ul>

      <h2>2. Uso de los datos</h2>
      <p>
        Procesamiento de pagos, comunicaciones de servicio, cumplimiento contractual,
        marketing (con consentimiento), mejora del sitio web y analítica.
      </p>

      <h2>3. Retención</h2>
      <ul>
        <li>Datos de cuenta activa: durante la relación comercial + 3 años</li>
        <li>Registros de pago: 7 años (requisitos fiscales)</li>
        <li>Cookies analíticas: hasta 24 meses</li>
        <li>Formularios de contacto: 24 meses</li>
      </ul>

      <h2>4. No vendemos sus datos</h2>
      <p>
        DB Studio Media no vende, alquila ni comercializa datos personales a terceros.
      </p>

      <h2>5. Terceros procesadores</h2>
      <ul>
        <li>Stripe y Square — procesamiento de pagos</li>
        <li>Google Analytics — analítica web</li>
        <li>Meta Ads (Facebook Pixel) — publicidad</li>
        <li>Herramientas de email marketing — comunicaciones</li>
        <li>Calendly/Cal.com — reservas de llamadas</li>
      </ul>

      <h2>6. Cookies</h2>
      <p>
        Utilizamos cookies necesarias, analíticas y de marketing. Consulte nuestra{" "}
        <a href="/politica-de-cookies">Política de Cookies</a>.
      </p>

      <h2>7. Eliminación de datos</h2>
      <p>
        Solicite eliminación escribiendo a{" "}
        <a href={`mailto:${site.privacyEmail}`}>{site.privacyEmail}</a>. Responderemos en
        30 días.
      </p>

      <h2>8. Derechos CCPA (California)</h2>
      <p>
        Residentes de California pueden solicitar acceso, eliminación y opt-out de venta
        (no vendemos datos). Contacto: {site.privacyEmail}.
      </p>

      <h2>9. Derechos GDPR (UE)</h2>
      <p>
        Usuarios en la UE tienen derecho de acceso, rectificación, eliminación, portabilidad
        y oposición. Base legal: ejecución contractual y consentimiento.
      </p>

      <h2>10. Contacto de privacidad</h2>
      <p>
        <a href={`mailto:${site.privacyEmail}`}>{site.privacyEmail}</a>
      </p>
    </LegalPageLayout>
  );
}
