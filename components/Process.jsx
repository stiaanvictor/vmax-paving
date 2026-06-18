import { PROCESS } from "@/lib/site";
import Figure from "./Figure";
import Reveal from "./Reveal";

export default function Process() {
  return (
    <section className="scroll-mt-20 border-y border-ink/10 bg-stone-card py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="text-sm font-600 uppercase tracking-[0.18em] text-blue-accent">
            How it works
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-[clamp(2rem,4.5vw,3.25rem)] font-700 leading-[1.02] tracking-tightest text-ink text-balance">
            Simple from first message to final block.
          </h2>
        </Reveal>

        <ol className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {PROCESS.map((p, i) => (
            <Reveal key={p.step} delay={i * 0.08} as="li" className="h-full">
              <div className="group relative flex h-full min-h-[300px] flex-col justify-end overflow-hidden rounded-2xl bg-navy-900 p-7 ring-1 ring-ink/10">
                <Figure
                  fill
                  src={`/step-${i + 1}.jpg`}
                  alt={p.title}
                  imgClassName="opacity-80 transition-transform duration-700 ease-smooth group-hover:scale-[1.05]"
                />
                {/* readability overlay */}
                <div
                  aria-hidden
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(8,20,32,0.92) 0%, rgba(8,20,32,0.7) 38%, rgba(8,20,32,0.35) 70%, rgba(8,20,32,0.2) 100%)",
                  }}
                />
                <div className="relative text-paper">
                  <span className="font-display text-4xl font-800 tracking-tight text-paper/35">
                    {p.step}
                  </span>
                  <h3 className="mt-4 font-display text-lg font-700 tracking-tight text-paper">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-paper/75">
                    {p.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
