import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/layout/LegalPageLayout";

export const metadata: Metadata = {
  title: "Política de Cookies",
};

export default function PoliticaDeCookiesPage() {
  return (
    <LegalPageLayout
      title="Política de Cookies"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Política de Cookies" },
      ]}
    >
      <p className="text-sm text-text-secondary">Última actualización: junio 2026</p>

      <h2>1. Qué son las cookies</h2>
      <p>
        Las cookies son pequeños archivos de texto almacenados en su dispositivo cuando
        visita dbstudiomedia.com.
      </p>

      <h2>2. Cookies necesarias</h2>
      <ul>
        <li>Sesión y seguridad — duración: sesión</li>
        <li>Preferencia de consentimiento de cookies — duración: 12 meses</li>
        <li>Stripe / Square — procesamiento de pagos — duración: según proveedor</li>
      </ul>

      <h2>3. Cookies analíticas</h2>
      <ul>
        <li>Google Analytics — duración: hasta 24 meses — requiere consentimiento</li>
      </ul>

      <h2>4. Cookies de marketing</h2>
      <ul>
        <li>Meta Pixel (Facebook) — duración: hasta 90 días — requiere consentimiento</li>
      </ul>

      <h2>5. Cómo gestionar cookies</h2>
      <p>
        Al visitar el sitio por primera vez, puede aceptar todas las cookies o solo las
        esenciales. Puede cambiar su preferencia eliminando las cookies del navegador y
        revisitando el sitio.
      </p>

      <h2>6. Cookies de terceros</h2>
      <p>
        Google Analytics, Meta Pixel, Stripe y Square pueden establecer cookies propias
        según sus políticas de privacidad respectivas.
      </p>
    </LegalPageLayout>
  );
}
