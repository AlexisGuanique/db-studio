import type { Metadata } from "next";
import { PageImageHero } from "@/components/layout/PageImageHero";
import { site } from "@/lib/site";
import { serviceLevels } from "@/lib/serviceLevels";

export const metadata: Metadata = {
  title: "Book a Strategic Call",
};

export default function BookingPage() {
  return (
    <>
      <PageImageHero
        title="Book a Strategic Call"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Book a Strategic Call" },
        ]}
      />

      <section id="booking-form" className="bg-white py-16">
        <div className="mx-auto max-w-xl px-4 lg:px-8">
          <p className="text-text-secondary">
            Schedule a strategic call with DB Studio Media. Complete the qualification form
            below so our team can prepare for your session.
          </p>

          {site.calendlyUrl ? (
            <div className="mt-8 overflow-hidden rounded-xl border-2 border-burgundy/15">
              <iframe
                src={site.calendlyUrl}
                title="Schedule a strategic call with DB Studio Media"
                className="h-[680px] w-full border-0"
              />
            </div>
          ) : (
            <form className="mt-8 space-y-4" action="#" method="post">
              {[
                { id: "fullName", label: "Full Name", type: "text", required: true },
                { id: "company", label: "Company / Brand", type: "text", required: true },
                { id: "email", label: "Email", type: "email", required: true },
                { id: "phone", label: "Phone", type: "tel", required: false },
                { id: "budget", label: "Estimated monthly budget", type: "text", required: false },
              ].map((field) => (
                <div key={field.id}>
                  <label htmlFor={field.id} className="mb-1 block text-sm font-medium">
                    {field.label}
                  </label>
                  <input
                    id={field.id}
                    name={field.id}
                    type={field.type}
                    required={field.required}
                    className="w-full rounded-[5px] border-2 border-burgundy/20 px-4 py-3 focus:border-burgundy focus:outline-none"
                  />
                </div>
              ))}
              <div>
                <label htmlFor="interest" className="mb-1 block text-sm font-medium">
                  Service level of interest
                </label>
                <select
                  id="interest"
                  name="interest"
                  className="w-full rounded-[5px] border-2 border-burgundy/20 px-4 py-3 focus:border-burgundy focus:outline-none"
                >
                  {serviceLevels.map((level) => (
                    <option key={level.slug} value={level.slug}>
                      Level {level.id}: {level.name} — {level.price}
                      {level.priceSuffix}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="message" className="mb-1 block text-sm font-medium">
                  Project description
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full rounded-[5px] border-2 border-burgundy/20 px-4 py-3 focus:border-burgundy focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-[5px] bg-burgundy px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-[#4a1619]"
              >
                Request Strategic Call
              </button>
            </form>
          )}

          <p className="mt-8 text-center text-sm text-text-secondary">
            Or reach us at{" "}
            <a href={`mailto:${site.email}`} className="text-burgundy hover:underline">
              {site.email}
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
