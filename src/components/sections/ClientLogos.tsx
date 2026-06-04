"use client";

import Image from "next/image";
import type { CSSProperties } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { clientLogos } from "@/lib/site";

export function ClientLogos() {
  return (
    <section className="client-logos bg-white py-10 md:py-12">
      <div className="client-logos__inner mx-auto max-w-5xl px-6 text-center">
        <Reveal direction="up">
          <div className="client-logos__grid">
            {clientLogos.map((client, index) => (
              <Reveal key={client.name} direction="up" delay={index * 90}>
                <div
                  className="client-logos__item"
                  style={{ "--logo-index": index } as CSSProperties}
                >
                  <span className="client-logos__shine" aria-hidden="true" />
                  <Image
                    src={client.logo}
                    alt={`${client.name} logo`}
                    width={client.width}
                    height={client.height}
                    className="client-logos__logo"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal direction="up" delay={500}>
          <p className="client-logos__caption mt-8">
            <span className="client-logos__caption-line" aria-hidden="true" />
            Brands that trust DB Studio Media.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
