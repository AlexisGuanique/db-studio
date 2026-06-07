import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/collaborations", destination: "/work", permanent: true },
      { source: "/partnership", destination: "/for-partners", permanent: true },
      { source: "/trabajo", destination: "/work", permanent: true },
      { source: "/equipo", destination: "/our-team", permanent: true },
      { source: "/para-aliados", destination: "/for-partners", permanent: true },
      { source: "/politica-de-privacidad", destination: "/privacy-policy", permanent: true },
      { source: "/politica-de-reembolso", destination: "/refund-policy", permanent: true },
      { source: "/refund", destination: "/refund-policy", permanent: true },
      { source: "/cancellation", destination: "/refund-policy", permanent: true },
      { source: "/politica-de-cookies", destination: "/cookie-policy", permanent: true },
      { source: "/terminos-de-servicio", destination: "/terms-of-service", permanent: true },
    ];
  },
};

export default nextConfig;
