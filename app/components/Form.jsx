import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { FaEnvelope } from "react-icons/fa6";

export function Form() {
  const [state, handleSubmit] = useForm("xljddvye");

  if (state.succeeded) {
    return (
      <div className="rounded-xl border border-(--border-color) bg-(--bg-surface) p-6 text-center space-y-2">
        <p className="font-audiowide text-lg font-medium text-(--color-brand)">
          Thanks for reaching out!
        </p>
        <p className="text-sm text-(--text-muted)">
          We usually respond within 1-2 business days.
        </p>
      </div>
    );
  }

  return (
    <form className="grid gap-y-6" onSubmit={handleSubmit}>
      {/* Name Field */}
      <div className="flex flex-col gap-y-1.5">
        <label
          className="block text-sm font-medium text-(--text-main)"
          htmlFor="name"
        >
          Name
        </label>
        <input
          className="h-10 rounded-md border border-(--border-color) bg-(--bg-card) px-3 text-sm text-(--text-main) outline-none placeholder:text-(--text-muted) focus:border-(--color-brand) focus:ring-1 focus:ring-(--color-brand) transition-colors"
          id="name"
          type="text"
          name="name"
          placeholder="Your name"
        />
        <ValidationError
          prefix="Name"
          field="name"
          errors={state.errors}
          className="text-xs text-red-500"
        />
      </div>

      {/* Email Field */}
      <div className="flex flex-col gap-y-1.5">
        <label
          className="block text-sm font-medium text-(--text-main)"
          htmlFor="email"
        >
          Email
        </label>
        <input
          className="h-10 rounded-md border border-(--border-color) bg-(--bg-card) px-3 text-sm text-(--text-main) outline-none placeholder:text-(--text-muted) focus:border-(--color-brand) focus:ring-1 focus:ring-(--color-brand) transition-colors"
          id="email"
          type="email"
          name="email"
          placeholder="you@example.com"
          required
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
          className="text-xs text-red-500"
        />
      </div>

      {/* Message Field */}
      <div className="flex flex-col gap-y-1.5">
        <label
          className="block text-sm font-medium text-(--text-main)"
          htmlFor="message"
        >
          Message
        </label>
        <textarea
          className="min-h-30 resize-y rounded-md border border-(--border-color) bg-(--bg-card) p-3 text-sm text-(--text-main) outline-none placeholder:text-(--text-muted) focus:border-(--color-brand) focus:ring-1 focus:ring-(--color-brand) transition-colors"
          id="message"
          name="message"
          placeholder="How can we help?"
          required
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
          className="text-xs text-red-500"
        />
      </div>

      {/* Submit Button */}
      <div className="flex flex-row-reverse">
        <button
          className="inline-flex items-center justify-center rounded-lg bg-(--color-brand) px-6 py-3 font-audiowide text-xs font-medium text-white transition-all duration-200 hover:bg-(--color-brand-hover) hover:shadow-md hover:shadow-blue-500/20 active:scale-95 disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
          type="submit"
          disabled={state.submitting}
        >
          {state.submitting ? "Sending..." : "Send Message"}
        </button>
      </div>
    </form>
  );
}
