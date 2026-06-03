import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/layout/LegalPageLayout";
import { serviceLevels } from "@/lib/serviceLevels";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Términos de Servicio",
};

export default function TerminosDeServicioPage() {
  return (
    <LegalPageLayout
      title="Términos de Servicio"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Términos de Servicio" },
      ]}
    >
      <p className="text-sm text-text-secondary">Última actualización: junio 2026</p>

      <h2>1. Descripción de los servicios</h2>
      <p>
        {site.legalName} (&quot;DB Studio Media&quot;) ofrece seis niveles de servicio de
        desarrollo de marca y producción audiovisual:
      </p>
      <ul>
        {serviceLevels.map((level) => (
          <li key={level.slug}>
            <strong>Nivel {level.id} — {level.name}:</strong> {level.price}
            {level.priceSuffix}. {level.contract}
          </li>
        ))}
      </ul>

      <h2>2. Términos de pago</h2>
      <p>
        Los pagos se procesan mediante Stripe y/o Square. Las suscripciones (Niveles 1, 2, 4,
        5 y 6) se facturan mensualmente en la fecha acordada. El Nivel 3 requiere 50% al
        firmar y 50% al inicio del proyecto. Los pagos fallidos pueden resultar en
        suspensión del servicio hasta regularizar la cuenta. DB Studio Media enviará
        recordatorios antes de cada ciclo de facturación.
      </p>

      <h2>3. Política de cancelación</h2>
      <p>
        Niveles 1, 2 y 4: aviso escrito con 30 días de anticipación antes de la siguiente
        fecha de facturación. Nivel 3: depósito no reembolsable al firmar; saldo no
        reembolsable tras inicio. Niveles 5 y 6: aviso de 30 días después del período
        mínimo comprometido. Consulte la{" "}
        <a href="/politica-de-reembolso">Política de Reembolso y Cancelación</a> para
        detalles completos.
      </p>

      <h2>4. Propiedad intelectual</h2>
      <p>
        Todo el material en bruto (raw footage) capturado en DB Studio Media es propiedad
        exclusiva de la agencia hasta que se reciba el pago completo. Al recibir el pago
        final, el cliente obtiene derechos exclusivos sobre todos los entregables editados
        y finales acordados en la orden de trabajo. Los archivos en bruto son retenidos por
        DB Studio Media durante 30 días y eliminados permanentemente posteriormente, salvo
        acuerdo escrito en contrario. DB Studio Media se reserva el derecho de utilizar el
        trabajo del proyecto de forma anónima en su portafolio y materiales de marketing, a
        menos que el cliente solicite lo contrario por escrito al momento de la firma del
        acuerdo.
      </p>

      <h2>5. Limitación de responsabilidad</h2>
      <p>
        DB Studio Media presta servicios profesionales de estrategia y producción. No
        garantizamos resultados comerciales específicos, crecimiento de ventas ni
        métricas de audiencia. Nuestra responsabilidad máxima se limita al monto pagado
        por el cliente en los 12 meses anteriores al reclamo.
      </p>

      <h2>6. Resolución de disputas</h2>
      <p>
        Antes de iniciar litigio, las partes acuerdan intentar resolver disputas mediante
        negociación de buena fe por escrito a {site.email} dentro de 30 días. Si no se
        resuelve, se someterá a mediación en el estado de Florida.
      </p>

      <h2>7. Ley aplicable</h2>
      <p>
        Estos términos se rigen por las leyes del Estado de Florida, Estados Unidos, sin
        regardo a conflictos de principios legales.
      </p>

      <h2>8. Modificaciones</h2>
      <p>
        DB Studio Media puede modificar estos términos con aviso de 14 días por email o
        publicación en el sitio web. El uso continuado del servicio constituye aceptación.
      </p>

      <p>
        Contacto: <a href={`mailto:${site.email}`}>{site.email}</a>
      </p>
    </LegalPageLayout>
  );
}
