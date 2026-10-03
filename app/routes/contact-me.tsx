import { Form } from "~/components/Form";
import Links from "~/components/Links";

export default function ContactMe() {
  return (
    <section className="relative flex h-full w-full flex-col items-center justify-center px-6 py-20 lg:px-12">
      <div className="w-full max-w-5xl space-y-10 py-8">
        {/* Centered Page Header */}
        <div className="flex items-center gap-3">
          <span className="font-audiowide text-xs text-(--color-brand)">
            Get in Touch
          </span>
        </div>

        <div className="grid grid-cols-1 gap-8 items-start lg:grid-cols-12">
          {/* Card 1: Direct Contact Channels */}
          <div className="rounded-2xl border border-(--border-color) bg-(--bg-surface) p-6 shadow-sm sm:p-8 lg:col-span-5 space-y-6">
            <div>
              <h2 className="font-audiowide text-lg font-medium text-(--text-main)">
                Direct Channels
              </h2>
              <p className="mt-1 text-xs text-(--text-subtle)">
                Reach out directly via your preferred platform.
              </p>
            </div>
            <Links />
          </div>

          {/* Card 2: Contact Form */}
          <div className="rounded-2xl border border-(--border-color) bg-(--bg-surface) p-6 shadow-sm sm:p-8 lg:col-span-7 space-y-6">
            <div>
              <h2 className="font-audiowide text-lg font-medium text-(--text-main)">
                Send a Message
              </h2>
              <p className="mt-1 text-xs text-(--text-subtle)">
                Fill out the fields below and I'll get back to you shortly.
              </p>
            </div>

            <Form />
          </div>
        </div>
      </div>
    </section>
  );
}
