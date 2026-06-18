"use client";

import { useState } from "react";
import { SITE, SERVICES, buildWhatsAppLink } from "@/lib/site";
import { WhatsApp, Phone, ArrowRight, Check } from "./Icons";
import Figure from "./Figure";
import Reveal from "./Reveal";

const SERVICE_OPTIONS = SERVICES.map((s) => s.title);

export default function QuoteForm() {
  const [form, setForm] = useState({
    name: "",
    suburb: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const update = (key) => (e) => {
    setForm((f) => ({ ...f, [key]: e.target.value }));
    if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }));
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Please tell us your name.";
    if (!form.suburb.trim()) next.suburb = "Which suburb is the job in?";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      const first = document.querySelector("[aria-invalid='true']");
      if (first) first.focus();
      return;
    }
    const url = buildWhatsAppLink(form);
    setSent(true);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="quote" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-0 sm:px-8">
        <div className="grid grid-cols-1 overflow-hidden border-y border-ink/10 bg-stone-card shadow-soft sm:rounded-[0.7rem] sm:border lg:grid-cols-2">
          {/* Left: invitation + direct contact */}
          <div className="relative flex flex-col justify-between gap-10 bg-navy-900 p-8 text-paper sm:p-12">
            <Figure
              fill
              src="/contact.jpg"
              alt="A finished brick-paved driveway at a Cape Town home"
              imgClassName="opacity-70"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(150deg, rgba(8,20,32,0.92) 0%, rgba(8,20,32,0.78) 45%, rgba(8,20,32,0.6) 100%)",
              }}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-50"
              style={{
                background:
                  "radial-gradient(70% 60% at 100% 0%, rgba(46,134,201,0.25), transparent 60%)",
              }}
            />
            <div className="relative">
              <p className="text-sm font-600 uppercase tracking-[0.18em] text-blue-bright">
                Get a free quote
              </p>
              <h2 className="mt-3 font-display text-[clamp(1.9rem,4vw,2.9rem)] font-700 leading-[1.03] tracking-tightest text-balance">
                Tell us about your paving.
              </h2>
              <p className="mt-4 max-w-md text-[17px] leading-relaxed text-paper/70 text-pretty">
                Fill in a few details and tap send — it opens WhatsApp with your
                message ready to go. We'll come back with a free, no-obligation
                quote.
              </p>
            </div>

            <div className="relative space-y-4">
              {SITE.phones.map((p) => (
                <a
                  key={p.tel}
                  href={`tel:${p.tel}`}
                  className="flex items-center gap-3.5 text-paper/85 transition-colors hover:text-paper"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-paper/10 ring-1 ring-paper/15">
                    <Phone width={19} height={19} />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-wider text-paper/55">
                      Call us
                    </span>
                    <span className="font-display text-lg font-600">
                      {p.label}
                    </span>
                  </span>
                </a>
              ))}
              <p className="flex items-center gap-2 pt-2 text-sm text-paper/60">
                <Check width={16} height={16} className="text-blue-bright" />
                Serving {SITE.area}
              </p>
            </div>
          </div>

          {/* Right: form */}
          <div className="p-8 sm:p-12">
            {sent ? (
              <Reveal className="flex h-full flex-col items-start justify-center">
                <span className="grid h-14 w-14 place-items-center rounded-full bg-blue-accent/12 text-blue-accent ring-1 ring-blue-accent/25">
                  <WhatsApp width={26} height={26} />
                </span>
                <h3 className="mt-5 font-display text-2xl font-700 tracking-tight text-ink">
                  Opening WhatsApp…
                </h3>
                <p className="mt-2 max-w-sm text-ink-soft">
                  Your message is ready in WhatsApp — just press send. Didn't open?
                  Use the button below or give us a call.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={buildWhatsAppLink(form)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-navy-900 px-6 py-3 text-sm font-600 text-paper transition-colors hover:bg-navy-800"
                  >
                    <WhatsApp width={18} height={18} /> Open WhatsApp again
                  </a>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="inline-flex items-center gap-2 rounded-lg border border-ink/15 px-6 py-3 text-sm font-600 text-navy-900 transition-colors hover:bg-stone-card"
                  >
                    Edit details
                  </button>
                </div>
              </Reveal>
            ) : (
              <form onSubmit={onSubmit} noValidate className="flex flex-col gap-5">
                <Field
                  label="Your name"
                  required
                  error={errors.name}
                  htmlFor="name"
                >
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={form.name}
                    onChange={update("name")}
                    aria-invalid={errors.name ? "true" : "false"}
                    aria-describedby={errors.name ? "name-err" : undefined}
                    placeholder="e.g. Thandi Mokoena"
                    className={inputCls(errors.name)}
                  />
                </Field>

                <Field
                  label="Suburb / area"
                  required
                  error={errors.suburb}
                  htmlFor="suburb"
                >
                  <input
                    id="suburb"
                    name="suburb"
                    type="text"
                    autoComplete="address-level2"
                    value={form.suburb}
                    onChange={update("suburb")}
                    aria-invalid={errors.suburb ? "true" : "false"}
                    aria-describedby={errors.suburb ? "suburb-err" : undefined}
                    placeholder="e.g. Durbanville"
                    className={inputCls(errors.suburb)}
                  />
                </Field>

                <Field label="What do you need?" htmlFor="service">
                  <div className="relative">
                    <select
                      id="service"
                      name="service"
                      value={form.service}
                      onChange={update("service")}
                      className={`${inputCls()} appearance-none pr-10`}
                    >
                      <option value="">Select a service (optional)</option>
                      {SERVICE_OPTIONS.map((o) => (
                        <option key={o} value={o}>
                          {o}
                        </option>
                      ))}
                    </select>
                    <svg
                      aria-hidden
                      className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-muted"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <path d="M6 9l6 6 6-6" strokeLinecap="round" />
                    </svg>
                  </div>
                </Field>

                <Field
                  label="A few details"
                  htmlFor="message"
                  hint="Rough size, timing or anything else that helps us quote."
                >
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={update("message")}
                    placeholder="e.g. About 40m² driveway, hoping to start next month."
                    className={`${inputCls()} resize-none`}
                  />
                </Field>

                <button
                  type="submit"
                  className="group mt-1 inline-flex items-center justify-center gap-2.5 rounded-lg bg-navy-900 px-7 py-4 text-base font-600 text-paper shadow-lift transition-transform duration-200 ease-smooth hover:-translate-y-0.5 hover:bg-navy-800"
                >
                  <WhatsApp width={20} height={20} />
                  Send via WhatsApp
                  <ArrowRight
                    width={18}
                    height={18}
                    className="transition-transform duration-200 ease-smooth group-hover:translate-x-1"
                  />
                </button>
                <p className="text-center text-xs text-ink-muted">
                  No spam, no obligation. Opens a ready-to-send WhatsApp message.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function inputCls(error) {
  return `w-full rounded-xl border bg-paper px-4 py-3.5 text-[15px] text-ink placeholder:text-ink-muted/70 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-accent/40 ${
    error ? "border-red-400 focus:ring-red-300/40" : "border-ink/15 focus:border-blue-accent"
  }`;
}

function Field({ label, required, error, hint, htmlFor, children }) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-1.5 block text-sm font-600 text-ink"
      >
        {label}
        {required && <span className="ml-0.5 text-red-500">*</span>}
      </label>
      {children}
      {hint && !error && (
        <p className="mt-1.5 text-xs text-ink-muted">{hint}</p>
      )}
      {error && (
        <p
          id={`${htmlFor}-err`}
          role="alert"
          className="mt-1.5 text-xs font-500 text-red-600"
        >
          {error}
        </p>
      )}
    </div>
  );
}
