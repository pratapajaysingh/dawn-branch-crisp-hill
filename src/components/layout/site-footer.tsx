import { Link } from "@tanstack/react-router";
import { events, nav, site, whatsappUrl } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-display text-2xl font-semibold">Fun Valley Resort</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-cream/70">
            A pool, a lawn, and a full night in Sector 135 — birthdays, pool
            parties, corporate days, kitty lunches, and wedding functions.
          </p>
          <a
            href={whatsappUrl()}
            className="mt-5 inline-flex text-sm text-cream underline-offset-4 hover:underline"
          >
            {site.phone}
          </a>
        </div>
        <div>
          <p className="text-[11px] tracking-[0.18em] text-cream/50 uppercase">
            Visit
          </p>
          <ul className="mt-4 space-y-2 text-sm text-cream/80">
            {nav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="hover:text-cream">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[11px] tracking-[0.18em] text-cream/50 uppercase">
            Celebrate
          </p>
          <ul className="mt-4 space-y-2 text-sm text-cream/80">
            {events.slice(0, 6).map((e) => (
              <li key={e.slug}>
                <Link
                  to="/enquire"
                  search={{ event: e.slug }}
                  className="hover:text-cream"
                >
                  {e.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-cream/50 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            {site.addressLine}, {site.city}
          </p>
          <p>{site.hoursShort}</p>
        </div>
      </div>
    </footer>
  );
}
