import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { contactIntro } from "@/lib/contact";
import { site } from "@/lib/site";

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className="h-5 w-5">
      <path
        d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MapIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className="h-5 w-5">
      <path
        d="M12 21s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.75" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className="h-5 w-5">
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <path
        d="m3 7 9 6 9-6"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const contactItems = [
  {
    icon: PhoneIcon,
    title: "Phone Numbers",
    content: (
      <a href={`tel:${site.phone.replace(/\D/g, "")}`} className="contact-info__link">
        {site.phone}
      </a>
    ),
  },
  {
    icon: MapIcon,
    title: "Address",
    content: (
      <p className="contact-info__text">Orlando, Florida — United States</p>
    ),
  },
  {
    icon: MailIcon,
    title: "Email",
    content: (
      <a href={`mailto:${site.email}`} className="contact-info__link">
        {site.email}
      </a>
    ),
  },
] as const;

export function ContactIntro() {
  return (
    <section id="contact-intro" className="contact-intro bg-cream py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
        <div className="contact-intro__layout">
          <Reveal direction="left">
            <div className="contact-intro__image section-image section-image--mirror w-full">
              <Image
                src="/images/contact-us.jpg"
                alt="DB Studio team member on a strategy call outdoors"
                width={682}
                height={1024}
                className="section-image__photo contact-intro__photo aspect-[682/1024] w-full"
                sizes="(max-width: 768px) 20rem, 22rem"
                priority
              />
            </div>
          </Reveal>

          <Reveal direction="right" delay={120}>
            <div className="contact-intro__content">
              <h2 className="contact-intro__title">{contactIntro.title}</h2>
              <p className="contact-intro__description">{contactIntro.description}</p>

              <div className="contact-info">
                {contactItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="contact-info__item">
                      <span className="contact-info__icon" aria-hidden>
                        <Icon />
                      </span>
                      <div>
                        <h3 className="contact-info__title">{item.title}</h3>
                        {item.content}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
