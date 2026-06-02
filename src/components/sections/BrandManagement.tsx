import {
  brandManagementPhase1,
  brandManagementPhase2,
} from "@/lib/site";
import { Button } from "@/components/ui/Button";
import { CheckList } from "@/components/ui/CheckList";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function BrandManagement() {
  return (
    <section className="bg-cream py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionTitle>Brand Management</SectionTitle>
        <p className="mt-4 max-w-3xl text-lg text-text-secondary">
          Comprehensive strategic accompaniment for brands ready to scale with
          structure.
        </p>
        <div className="mt-4 space-y-2 text-text-secondary">
          <p>This is not social media management.</p>
          <p>This is not isolated content production.</p>
          <p className="font-medium text-text-primary">
            It is structured brand development.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="rounded-lg border-2 border-burgundy/20 bg-white p-8">
            <h3 className="text-xl font-semibold uppercase text-burgundy">
              Phase 1 – Strategic Foundation
            </h3>
            <div className="mt-4">
              <CheckList items={brandManagementPhase1} />
            </div>
          </div>

          <div className="rounded-lg border-2 border-burgundy/20 bg-white p-8">
            <h3 className="text-xl font-semibold uppercase text-burgundy">
              Phase 2 – Strategic Brand Membership
            </h3>
            <p className="mt-4 text-text-secondary">
              Ongoing partnership structured for consistency and growth.
            </p>
            <p className="mt-4 font-medium">Options:</p>
            <div className="mt-2">
              <CheckList items={brandManagementPhase2} />
            </div>
            <p className="mt-4 text-sm italic text-text-secondary">
              Investment shared during consultation.
            </p>
          </div>
        </div>

        <div className="mt-10">
          <Button href="/services">Apply for Brand Management</Button>
        </div>
      </div>
    </section>
  );
}
