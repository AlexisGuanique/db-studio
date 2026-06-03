import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/layout/LegalPageLayout";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de Reembolso y Cancelación",
};

export default function PoliticaDeReembolsoPage() {
  return (
    <LegalPageLayout
      title="Política de Reembolso y Cancelación"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Política de Reembolso" },
      ]}
    >
      <p className="text-sm text-text-secondary">Última actualización: junio 2026</p>

      <h2>Membresías de Estudio — Niveles 1 y 2</h2>
      <p>
        Sin reembolso por sesiones ya completadas o en curso. Para cancelar, enviar aviso
        escrito con 30 días de anticipación antes de la siguiente fecha de facturación a{" "}
        {site.billingEmail}. Sin reembolso por el período de facturación ya cobrado en el
        momento de la cancelación. Reagendamiento de sesiones: requiere aviso mínimo de 48
        horas. Las sesiones perdidas sin aviso previo de 48 horas no generan crédito ni
        reembolso.
      </p>

      <h2>Fundamento Estratégico de Marca — Nivel 3 ($2,000)</h2>
      <p>
        El depósito del 50% ($1,000) es no reembolsable en el momento de la firma del
        contrato. El 50% restante ($1,000) es no reembolsable tras el inicio del proyecto.
        Los retrasos causados por DB Studio Media otorgan al cliente un período de gracia de
        14 días adicionales.
      </p>

      <h2>Gestión de Marca — Nivel 4 ($1,000/mes)</h2>
      <p>
        Crédito prorrateado únicamente por la porción no utilizada del mes actual, solo
        cuando la cancelación se realiza conforme a los términos del contrato. Sin reembolso
        por ningún mes de servicio ya completado. Aviso de cancelación: 30 días escritos
        antes de la siguiente fecha de facturación, después del período mínimo comprometido.
      </p>

      <h2>Niveles Integrado y Empresarial — Niveles 5 y 6</h2>
      <p>
        Los términos de cancelación y reembolso están gobernados por el contrato de
        Declaración de Trabajo (SOW) específico firmado con cada cliente.
      </p>

      <p>
        Para solicitudes de reembolso:{" "}
        <a href={`mailto:${site.billingEmail}`}>{site.billingEmail}</a>
      </p>
    </LegalPageLayout>
  );
}
