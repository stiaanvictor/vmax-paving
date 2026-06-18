import { SERVICES } from "@/lib/site";
import Figure from "./Figure";
import Reveal from "./Reveal";
import { ArrowRight } from "./Icons";

export default function Services() {
  return (
    <section id="services" className="relative scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <p className="text-sm font-600 uppercase tracking-[0.18em] text-blue-accent">
              What we do
            </p>
            <h2 className="mt-3 max-w-2xl font-display text-[clamp(2rem,4.5vw,3.25rem)] font-700 leading-[1.02] tracking-tightest text-ink text-balance">
              One craft, done thoroughly — paving for every part of your property.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-sm text-ink-soft text-pretty">
              We focus on paving and nothing else. From a single driveway to a full
              commercial surface, the standard stays the same.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 0.08}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-ink/10 bg-stone-card shadow-soft transition-all duration-300 ease-smooth hover:-translate-y-1 hover:shadow-lift">
                <Figure
                  src={s.img}
                  alt={`${s.title} paving by Vmax Paving`}
                  className="aspect-[16/11]"
                  imgClassName="group-hover:scale-[1.06]"
                />
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl font-700 tracking-tight text-ink">
                    {s.title}
                  </h3>
                  <p className="mt-2 flex-1 text-[15px] leading-relaxed text-ink-soft">
                    {s.desc}
                  </p>
                  <a
                    href="#quote"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-600 text-navy-700 transition-colors hover:text-navy-900"
                  >
                    Ask about this
                    <ArrowRight
                      width={16}
                      height={16}
                      className="transition-transform duration-200 ease-smooth group-hover:translate-x-1"
                    />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
