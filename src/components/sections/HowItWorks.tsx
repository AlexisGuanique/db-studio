import { howItWorksSteps } from "@/lib/serviceLevels";

export function HowItWorks() {
  return (
    <section className="how-it-works">
      <h2 className="mb-10 text-center text-2xl font-semibold uppercase tracking-wide text-burgundy md:text-3xl">
        How It Works
      </h2>
      <div className="grid gap-8 md:grid-cols-3">
        {howItWorksSteps.map((step) => (
          <div
            key={step.step}
            className="how-it-works__step rounded-2xl border-2 border-burgundy/12 bg-cream p-6 text-center"
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-burgundy text-sm font-bold text-white">
              {step.step}
            </span>
            <h3 className="mt-4 text-lg font-semibold uppercase text-burgundy">
              {step.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-text-secondary">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
