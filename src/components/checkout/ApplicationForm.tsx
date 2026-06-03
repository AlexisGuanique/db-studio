"use client";

import Link from "next/link";
import type { ServiceLevel } from "@/lib/serviceLevels";

export function ApplicationForm({ level }: { level: ServiceLevel }) {
  return (
    <form
      className="mx-auto max-w-xl space-y-4 rounded-2xl border-2 border-burgundy/15 bg-white p-6 md:p-8"
      action="#"
      method="post"
    >
      <p className="text-3xl font-bold text-burgundy">
        {level.price}
        <span className="text-lg font-normal text-text-secondary">{level.priceSuffix}</span>
      </p>
      <p className="text-sm text-text-secondary">{level.contract}</p>

      {[
        { id: "name", label: "Full name", type: "text", required: true },
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
            className="w-full rounded-lg border-2 border-burgundy/20 px-4 py-3 focus:border-burgundy focus:outline-none"
          />
        </div>
      ))}

      <div>
        <label htmlFor="project" className="mb-1 block text-sm font-medium">
          Project description and goals
        </label>
        <textarea
          id="project"
          name="project"
          rows={4}
          required
          className="w-full rounded-lg border-2 border-burgundy/20 px-4 py-3 focus:border-burgundy focus:outline-none"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-[10px] bg-burgundy px-6 py-3.5 text-sm font-semibold uppercase text-white"
      >
        Submit application
      </button>

      <p className="text-center text-xs text-text-secondary">
        After review, our team will contact you within 2–3 business days. Or{" "}
        <Link href="/booking" className="text-burgundy underline">
          book a strategic call
        </Link>
        .
      </p>
    </form>
  );
}
