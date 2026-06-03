import {
  brandManagementPhase1,
  brandManagementPhase2,
} from "@/lib/site";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { CheckList } from "@/components/ui/CheckList";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function BrandManagement() {
  return (
    <div className="brand-mgmt">
      <div className="mx-auto max-w-7xl px-6 text-center md:px-8 lg:px-12">
        <Reveal direction="up">
          <div className="brand-mgmt__intro mx-auto max-w-3xl">
            <SectionTitle light className="font-bold drop-shadow-sm">
              Brand Management
            </SectionTitle>
            <p className="mt-6 text-lg font-medium leading-relaxed text-white/95 drop-shadow-sm">
              Comprehensive strategic accompaniment for brands ready to scale with
              structure.
            </p>
            <div className="mt-5 space-y-2 font-medium text-white/90 drop-shadow-sm">
              <p>This is not social media management.</p>
              <p>This is not isolated content production.</p>
              <p className="brand-mgmt__highlight font-semibold text-cream">
                It is structured brand development.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-5xl gap-8 md:grid-cols-2 md:gap-10">
          <Reveal direction="left" delay={100}>
            <div className="brand-mgmt-card h-full p-8 text-center md:p-10">
              <h3 className="brand-mgmt-card__title text-xl font-semibold uppercase text-burgundy">
                Phase 1 – Strategic Foundation
              </h3>
              <div className="mt-6 inline-block text-left">
                <CheckList items={brandManagementPhase1} />
              </div>
            </div>
          </Reveal>

          <Reveal direction="right" delay={180}>
            <div className="brand-mgmt-card brand-mgmt-card--featured h-full p-8 text-center md:p-10">
              <h3 className="brand-mgmt-card__title text-xl font-semibold uppercase text-burgundy">
                Phase 2 – Strategic Brand Membership
              </h3>
              <p className="mt-5 leading-relaxed text-text-secondary">
                Ongoing partnership structured for consistency and growth.
              </p>
              <p className="mt-5 font-semibold text-burgundy">Options:</p>
              <div className="mt-3 inline-block text-left">
                <CheckList items={brandManagementPhase2} />
              </div>
              <p className="mt-5 text-sm italic text-text-secondary">
                Investment shared during consultation.
              </p>
              <div className="mt-8 flex justify-center">
                <Button href="/services" variant="outline" interactive>
                  Apply for Brand Management
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
