import { WHY, SITE } from "@/lib/site";
import Figure from "./Figure";
import Reveal from "./Reveal";
import { Check } from "./Icons";

export default function WhyUs() {
  return (
    <section id="why" className="relative scroll-mt-20 overflow-hidden bg-navy-900 py-20 text-paper sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          background:
            "radial-gradient(80% 50% at 100% 0%, rgba(46,134,201,0.22), transparent 60%)",
        }}
      />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <div>
          <Reveal>
            <p className="text-sm font-600 uppercase tracking-[0.18em] text-blue-bright">
              Why Vmax Paving
            </p>
            <h2 className="mt-3 font-display text-[clamp(2rem,4.5vw,3.25rem)] font-700 leading-[1.02] tracking-tightest text-balance">
              {SITE.yearsExperience} years of getting the groundwork right.
            </h2>
            <p className="mt-5 max-w-md text-[17px] leading-relaxed text-paper/70 text-pretty">
              Good paving isn't only about the blocks on top — it's the base
              underneath. That's where experience shows, and where we don't cut
              corners.
            </p>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-7 sm:grid-cols-2">
            {WHY.map((w, i) => (
              <Reveal key={w.title} delay={(i % 2) * 0.08}>
                <div className="flex gap-3.5">
                  <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-blue-accent/20 text-blue-bright ring-1 ring-blue-bright/30">
                    <Check width={18} height={18} />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-600 tracking-tight text-paper">
                      {w.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-paper/65">
                      {w.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.1} className="lg:pl-6">
          <div className="relative">
            <Figure
              src="/why.jpg"
              alt="Vmax Paving team preparing a base before laying paving"
              className="aspect-[5/6] rounded-[0.7rem] ring-1 ring-paper/15"
            />
            <div className="absolute -right-3 -top-3 rounded-2xl bg-paper px-5 py-4 text-ink shadow-lift sm:-right-5">
              <p className="font-display text-3xl font-800 leading-none text-navy-900">
                34
              </p>
              <p className="mt-1 text-xs font-600 uppercase tracking-wider text-ink-muted">
                Years on site
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
