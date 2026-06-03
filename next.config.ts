import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/collaborations", destination: "/trabajo", permanent: true },
      { source: "/partnership", destination: "/para-aliados", permanent: true },
      { source: "/privacy-policy", destination: "/politica-de-privacidad", permanent: true },
      { source: "/refund-policy", destination: "/politica-de-reembolso", permanent: true },
      { source: "/terms-of-service", destination: "/terminos-de-servicio", permanent: true },
    ];
  },
};

export default nextConfig;
