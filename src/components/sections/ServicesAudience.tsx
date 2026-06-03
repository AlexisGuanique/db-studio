import { Reveal } from "@/components/ui/Reveal";

export function ServicesAudience({
  forWho,
  notFor,
}: {
  forWho: readonly string[];
  notFor: readonly string[];
}) {
  return (
    <section className="services-audience bg-white py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6 md:px-8 lg:px-12">
        <Reveal direction="up">
          <h2 className="services-audience__title">Who It Is For / Not For</h2>
        </Reveal>

        <div className="mt-10 grid gap-6 md:mt-12 md:grid-cols-2 md:gap-8">
          <Reveal direction="left" delay={80}>
            <div className="services-audience__panel services-audience__panel--yes h-full">
              <h3 className="services-audience__panel-title">This Is For:</h3>
              <ul className="services-audience__list mt-6">
                {forWho.map((item) => (
                  <li key={item} className="services-audience__list-item">
                    <span
                      className="services-audience__mark services-audience__mark--yes"
                      aria-hidden
                    >
                      <svg viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal direction="right" delay={160}>
            <div className="services-audience__panel services-audience__panel--no h-full">
              <h3 className="services-audience__panel-title">This Is NOT For:</h3>
              <ul className="services-audience__list mt-6">
                {notFor.map((item) => (
                  <li key={item} className="services-audience__list-item">
                    <span
                      className="services-audience__mark services-audience__mark--no"
                      aria-hidden
                    >
                      <svg
                        viewBox="0 0 20 20"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        className="h-3 w-3"
                      >
                        <path d="M6 6l8 8M14 6l-8 8" />
                      </svg>
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
