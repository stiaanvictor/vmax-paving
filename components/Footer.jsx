import { SITE, NAV } from "@/lib/site";
import { Phone, Facebook, MapPin, ArrowRight } from "./Icons";

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-paper">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-md bg-navy-900 text-paper">
                <span className="font-display text-lg font-700 leading-none">V</span>
              </span>
              <span className="font-display text-xl font-700 tracking-tightest text-ink">
                Vmax Paving
              </span>
            </div>
            <p className="mt-4 max-w-sm text-ink-soft text-pretty">
              {SITE.tagline} Quality paving across {SITE.area} for over{" "}
              {SITE.yearsExperience} years.
            </p>
            <a
              href="#quote"
              className="group mt-6 inline-flex items-center gap-2 rounded-lg bg-navy-900 px-6 py-3 text-sm font-600 text-paper transition-colors hover:bg-navy-800"
            >
              Get a free quote
              <ArrowRight
                width={16}
                height={16}
                className="transition-transform duration-200 ease-smooth group-hover:translate-x-1"
              />
            </a>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-xs font-600 uppercase tracking-[0.18em] text-ink-muted">
              Explore
            </h3>
            <ul className="mt-4 space-y-3">
              {NAV.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-ink-soft transition-colors hover:text-navy-900"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="text-xs font-600 uppercase tracking-[0.18em] text-ink-muted">
              Get in touch
            </h3>
            <ul className="mt-4 space-y-3">
              {SITE.phones.map((p) => (
                <li key={p.tel}>
                  <a
                    href={`tel:${p.tel}`}
                    className="flex items-center gap-3 text-ink-soft transition-colors hover:text-navy-900"
                  >
                    <Phone width={18} height={18} className="text-navy-700" />
                    {p.label}
                  </a>
                </li>
              ))}
              <li className="flex items-center gap-3 text-ink-soft">
                <MapPin width={18} height={18} className="text-navy-700" />
                {SITE.area}
              </li>
              <li>
                <a
                  href={SITE.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-ink-soft transition-colors hover:text-navy-900"
                >
                  <Facebook width={18} height={18} className="text-navy-700" />
                  Vmax Paving on Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-ink/10 pt-6 text-sm text-ink-muted sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p>Cape Town & surrounding suburbs · Residential & commercial paving</p>
        </div>
      </div>
    </footer>
  );
}
