import { createFileRoute } from "@tanstack/react-router";
import { EnquiryForm } from "@/components/enquiry-form";
import { Badge } from "@/components/ui/badge";
import { packages, site, whatsappUrl } from "@/lib/site";

type EnquireSearch = {
  event?: string;
};

export const Route = createFileRoute("/enquire")({
  validateSearch: (search: Record<string, unknown>): EnquireSearch => ({
    event: typeof search.event === "string" ? search.event : undefined,
  }),
  head: () => ({
    meta: [{ title: "Enquire | Fun Valley Resort Noida" }],
  }),
  component: EnquirePage,
});

function EnquirePage() {
  const { event } = Route.useSearch();

  return (
    <main id="main">
      <section className="border-b border-line bg-paper-2">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <Badge>Enquire</Badge>
          <h1 className="mt-4 max-w-2xl font-display text-4xl font-medium sm:text-5xl">
            Tell us the date. We’ll send a quote.
          </h1>
          <p className="mt-4 max-w-xl text-muted">
            No public rate card — packages depend on guest count, menu, décor,
            and whether you want the pool or a night stay. WhatsApp is the
            fastest way through.
          </p>
        </div>
      </section>
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <div className="rounded-xl bg-cream p-5 shadow-border sm:p-8">
            <h2 className="font-display text-2xl font-medium">
              Booking enquiry
            </h2>
            <EnquiryForm defaultEvent={event} className="mt-6" />
          </div>
        </div>
        <aside className="lg:col-span-2">
          <p className="text-[11px] tracking-[0.18em] text-muted uppercase">
            Typical sizes
          </p>
          <ul className="mt-4 grid gap-3">
            {packages.map((p) => (
              <li
                key={p.name}
                className="rounded-xl bg-paper p-5 shadow-border"
              >
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-xl font-medium">{p.name}</h3>
                  <span className="text-xs text-muted">{p.guests}</span>
                </div>
                <p className="mt-2 text-sm text-muted">{p.note}</p>
                <ul className="mt-3 space-y-1 text-sm text-ink-soft">
                  {p.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-muted">
            Figures are guest ranges, not prices. We’ll quote for your brief.
          </p>
          <div className="mt-8 rounded-xl bg-teal-deep p-5 text-cream">
            <p className="font-display text-xl">Prefer to talk?</p>
            <a
              href={whatsappUrl()}
              className="mt-2 block text-sm text-cream/80 underline-offset-4 hover:underline"
            >
              {site.phone}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="mt-1 block text-sm text-cream/70"
            >
              {site.email}
            </a>
          </div>
        </aside>
      </div>
    </main>
  );
}
