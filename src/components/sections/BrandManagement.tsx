import { serviceLevels } from "@/lib/serviceLevels";
import { ServiceLevelCard } from "@/components/sections/ServiceLevelCard";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function BrandManagement() {
  const brandLevels = serviceLevels.filter((l) => l.id === 3 || l.id === 4);

  return (
    <div className="brand-mgmt">
      <div className="mx-auto max-w-7xl px-6 text-center md:px-8 lg:px-12">
        <Reveal direction="up">
          <div className="brand-mgmt__intro mx-auto max-w-3xl">
            <SectionTitle light className="font-bold drop-shadow-sm">
              Structured Service Levels
            </SectionTitle>
            <div className="reveal-stagger mt-6 space-y-2 text-lg font-medium leading-relaxed text-white/95 drop-shadow-sm">
              <p>
                Comprehensive strategic accompaniment for brands ready to scale with structure.
              </p>
              <p>This is not social media management.</p>
              <p>This is not isolated content production.</p>
              <p className="brand-mgmt__highlight font-semibold text-cream">
                It is structured brand development.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-5xl gap-8 md:grid-cols-2 md:gap-10">
          {brandLevels.map((level, index) => (
            <Reveal key={level.slug} direction={index === 0 ? "left" : "right"} delay={100 + index * 80}>
              <ServiceLevelCard level={level} />
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
