import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";
import type { servicesTimelineSteps } from "@/lib/services";

type TimelineStep = (typeof servicesTimelineSteps)[number];

function RocketIcon() {
  return (
    <svg
      className="services-timeline__icon"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 2.5c.4 2.1 1.2 4 2.4 5.6L9.8 12.7l-1.4-1.4-2.1 2.1 1.4 1.4-1.4 1.4 2.1 2.1 1.4-1.4 1.4 1.4 4.7-4.7c1.6 1.2 3.5 2 5.6 2.4-2.5.3-4.9 1.2-7 2.7L12 19l-2.5-2.5c-2.1-1.5-4.5-2.4-7-2.7 2.1-.4 4-1.2 5.6-2.4L4.6 7.1 6 5.7 4.6 4.3l2.1-2.1 1.4 1.4 4.7-4.7C8 3.7 10 2.9 12 2.5z" />
    </svg>
  );
}

function LightbulbIcon() {
  return (
    <svg
      className="services-timeline__icon"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M9 21h6v-1H9v1zm3-19a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z" />
    </svg>
  );
}

function TimelineCard({
  item,
  icon,
}: {
  item: TimelineStep;
  icon: ReactNode;
}) {
  return (
    <article className="services-timeline__card">
      <div className="services-timeline__card-icon">{icon}</div>
      <p className="services-timeline__card-price">{item.price}</p>
      {"subtitle" in item && item.subtitle && (
        <p className="services-timeline__card-subtitle">{item.subtitle}</p>
      )}
      <p className="services-timeline__card-desc">{item.description}</p>
      {"includes" in item && item.includes && (
        <ul className="services-timeline__card-list mt-4 space-y-2">
          {item.includes.map((line) => (
            <li key={line} className="flex items-start gap-2 text-sm text-text-secondary">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-burgundy" />
              {line}
            </li>
          ))}
        </ul>
      )}
      {"note" in item && item.note && (
        <p className="services-timeline__card-note mt-5">
          <span className="font-semibold not-italic text-burgundy">Important Note:</span>{" "}
          {item.note}
        </p>
      )}
    </article>
  );
}

export function ServicesTimeline({ steps }: { steps: readonly TimelineStep[] }) {
  const icons = [<RocketIcon key="rocket" />, <LightbulbIcon key="bulb" />];

  return (
    <div className="services-timeline">
      <Reveal direction="up">
        <SectionTitle light className="text-center">
          How It Works
        </SectionTitle>
      </Reveal>

      <div className="services-timeline__track">
        <div className="services-timeline__spine" aria-hidden />

        {steps.map((item, index) => {
          const cardLeft = index % 2 === 0;
          const pointerDir = cardLeft ? "right" : "left";

          return (
            <Reveal
              key={item.step}
              direction={cardLeft ? "left" : "right"}
              delay={index * 100}
              className="services-timeline__row"
            >
              <div
                className={`services-timeline__cell ${
                  cardLeft ? "services-timeline__cell--card" : "services-timeline__cell--label"
                }`}
              >
                {cardLeft ? (
                  <TimelineCard item={item} icon={icons[index]} />
                ) : (
                  <p className="services-timeline__label services-timeline__label--end">
                    Step {item.step} – {item.title}
                  </p>
                )}
              </div>

              <div className="services-timeline__cell services-timeline__cell--axis">
                <div className="services-timeline__node-wrap">
                  <span className="services-timeline__node" />
                  <span
                    className={`services-timeline__pointer services-timeline__pointer--${pointerDir}`}
                    aria-hidden
                  />
                </div>
              </div>

              <div
                className={`services-timeline__cell ${
                  cardLeft ? "services-timeline__cell--label" : "services-timeline__cell--card"
                }`}
              >
                {cardLeft ? (
                  <p className="services-timeline__label services-timeline__label--start">
                    Step {item.step} – {item.title}
                  </p>
                ) : (
                  <TimelineCard item={item} icon={icons[index]} />
                )}
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
