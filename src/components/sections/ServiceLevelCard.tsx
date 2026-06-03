import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { CheckList } from "@/components/ui/CheckList";
import type { ServiceLevel } from "@/lib/serviceLevels";

export function ServiceLevelCard({ level }: { level: ServiceLevel }) {
  const href =
    level.checkoutType === "subscription"
      ? `/checkout/${level.slug}`
      : `/apply/${level.slug}`;

  return (
    <article
      id={level.slug}
      className="service-level-card flex h-full flex-col rounded-2xl border-2 border-burgundy/15 bg-white p-6 shadow-sm md:p-8"
    >
      <p className="text-xs font-semibold uppercase tracking-widest text-burgundy/70">
        Level {level.id}
      </p>
      <h3 className="service-level-card__title mt-2 text-lg font-semibold uppercase text-burgundy md:text-xl">
        {level.name}
      </h3>
      <div className="mt-4">
        <span className="text-3xl font-bold text-burgundy">{level.price}</span>
        <span className="text-text-secondary">{level.priceSuffix}</span>
      </div>
      <p className="mt-3 text-sm text-text-secondary">{level.contract}</p>
      <p className="mt-4 text-sm leading-relaxed text-text-secondary">
        {level.idealFor}
      </p>
      <div className="mt-5 flex-1">
        <CheckList items={level.deliverables} />
      </div>
      {level.addon && (
        <p className="mt-4 text-sm font-medium text-burgundy">{level.addon}</p>
      )}
      {level.note && (
        <p className="mt-3 text-sm italic text-text-secondary">{level.note}</p>
      )}
      {level.requiresFoundation && (
        <p className="mt-3 text-sm font-medium text-burgundy">
          Requires Strategic Brand Foundation (Level 3)
        </p>
      )}
      <div className="mt-6">
        <Button href={href} variant="primary" interactive className="w-full justify-center">
          {level.ctaLabel}
        </Button>
        <p className="service-level-card__disclosure mt-3 text-xs leading-relaxed text-text-secondary/80">
          {level.disclosure}
        </p>
      </div>
    </article>
  );
}

export function ServiceLevelsGrid({
  levels,
  title,
}: {
  levels: readonly ServiceLevel[];
  title?: string;
}) {
  return (
    <div>
      {title && (
        <h2 className="mb-10 text-center text-2xl font-semibold uppercase tracking-wide text-burgundy md:text-3xl">
          {title}
        </h2>
      )}
      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {levels.map((level) => (
          <ServiceLevelCard key={level.slug} level={level} />
        ))}
      </div>
    </div>
  );
}
