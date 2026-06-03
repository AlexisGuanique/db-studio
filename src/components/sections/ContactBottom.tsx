import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { contactFormCopy, contactFormFields } from "@/lib/contact";

const fullWidthFields = new Set(["message"]);

export function ContactBottom() {
  return (
    <section className="contact-bottom bg-cream pb-16 md:pb-24">
      <div className="contact-bottom__inner mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
        <Reveal direction="up">
          <div className="contact-cta__panel">
            <h2 className="contact-cta__title">Ready to Build With Structure?</h2>
            <div className="contact-cta__actions">
              <Link href="/booking" className="contact-cta__btn contact-cta__btn--ghost">
                Book a Strategy Call
              </Link>
              <Link
                href="/memberships"
                className="contact-cta__btn contact-cta__btn--solid"
              >
                Apply for Studio Membership
              </Link>
            </div>
          </div>
        </Reveal>

        <Reveal direction="up" delay={100}>
          <div className="contact-form__panel">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
              <div className="contact-form__copy">
                <p className="contact-form__label">{contactFormCopy.label}</p>
                <h2 className="contact-form__title">{contactFormCopy.title}</h2>
                <div className="contact-form__text mt-6 space-y-4">
                  {contactFormCopy.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                  ))}
                </div>
              </div>

              <form className="contact-form__fields" action="#" method="post">
                {contactFormFields.map((field) => (
                  <div
                    key={field.id}
                    className={`contact-form__field${
                      fullWidthFields.has(field.id) ? " contact-form__field--full" : ""
                    }`}
                  >
                    <label htmlFor={field.id} className="sr-only">
                      {field.label}
                    </label>
                    {field.type === "textarea" ? (
                      <textarea
                        id={field.id}
                        name={field.name}
                        rows={5}
                        required={field.required}
                        placeholder={field.label}
                        className="contact-form__input contact-form__textarea"
                      />
                    ) : (
                      <input
                        id={field.id}
                        name={field.name}
                        type={field.type}
                        required={field.required}
                        placeholder={field.label}
                        className="contact-form__input"
                      />
                    )}
                  </div>
                ))}

                <div className="contact-form__field contact-form__field--full">
                  <button type="submit" className="contact-form__submit">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
