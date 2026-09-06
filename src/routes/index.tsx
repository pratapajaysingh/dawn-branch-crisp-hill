import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Clock, MapPin, Utensils, Waves } from "lucide-react";
import { EnquiryForm } from "@/components/enquiry-form";
import { GalleryGrid } from "@/components/gallery-grid";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { events, site, whatsappUrl, why } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Fun Valley Resort Noida | Pool Parties, Weddings & Corporate Events",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.name,
    telephone: site.phoneTel,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.addressLine,
      addressLocality: "Noida",
      postalCode: "201304",
      addressRegion: "Uttar Pradesh",
      addressCountry: "IN",
    },
    url: "https://funvalleyresort.com",
    openingHours: "Mo-Su 00:00-23:55",
  };

  return (
    <main id="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="relative isolate min-h-[88vh] overflow-hidden bg-ink">
        <img
          src="/editorial/hero-dusk.jpg"
          alt="Dusk over the pool and lawn at Fun Valley Resort"
          className="absolute inset-0 h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-ink/25" />
        <div className="relative mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-end px-4 pb-16 sm:px-6 sm:pb-20">
          <p className="rise text-[11px] tracking-[0.22em] text-cream/70 uppercase">
            Sector 135, Noida · Est. {site.established}
          </p>
          <h1 className="rise rise-d1 mt-4 max-w-3xl font-display text-4xl font-medium text-cream sm:text-6xl md:text-7xl">
            The pool. The lawn. The whole night.
          </h1>
          <p className="rise rise-d2 mt-5 max-w-xl text-base leading-relaxed text-cream/80 sm:text-lg">
            Fun Valley Resort is Noida’s party ground — unlimited food, a wide
            swimming pool, and a lawn that holds birthdays, corporate days, and
            wedding functions without squeezing anyone into a banquet hall.
          </p>
          <div className="rise rise-d3 mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" variant="invert">
              <Link to="/enquire">Enquire for a date</Link>
            </Button>
            <Button asChild size="lg" variant="cream">
              <Link to="/gallery">See the grounds</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-paper-2">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-8 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
          {[
            { icon: MapPin, label: "Sector 135", sub: "Near Baagh Bagicha Farms" },
            { icon: Waves, label: "Pool + lawn", sub: "Day parties and night lights" },
            { icon: Utensils, label: "Unlimited food", sub: "Menus built per booking" },
            { icon: Clock, label: "Open daily", sub: site.hoursShort },
          ].map((item) => (
            <div key={item.label} className="flex gap-3">
              <item.icon className="mt-0.5 size-5 text-teal" />
              <div>
                <p className="font-medium text-ink">{item.label}</p>
                <p className="text-sm text-muted">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2">
        <div className="overflow-hidden rounded-xl bg-sand">
          <img
            src="/gallery/g12.jpg"
            alt="The main swimming pool at Fun Valley Resort"
            className="content-img aspect-[4/3] w-full object-cover"
          />
        </div>
        <div>
          <Badge>About the grounds</Badge>
          <h2 className="mt-4 font-display text-3xl font-medium sm:text-4xl">
            A complete celebration destination, not a rented hall.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted">
            Fun Valley Resort in Noida offers the ideal setting for
            unforgettable parties, poolside celebrations, and corporate events.
            Unlimited fun, delicious food, and hospitality — all in one place,
            near Baagh Bagicha Farms, Sector 135.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Established in {site.established} with a simple brief: a ground
            where families, friends, and teams can celebrate without limits.
            From decoration to food and music, we run the day so you stay in it.
          </p>
          <Button asChild className="mt-8" variant="outline">
            <Link to="/events">
              Browse celebrations <ArrowRight />
            </Link>
          </Button>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <Badge>What we host</Badge>
              <h2 className="mt-4 font-display text-3xl font-medium sm:text-4xl">
                Eight ways to take the lawn.
              </h2>
            </div>
            <Link
              to="/events"
              className="text-sm text-teal hover:underline"
            >
              All celebrations
            </Link>
          </div>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {events.map((e) => (
              <li key={e.slug}>
                <Link
                  to="/enquire"
                  search={{ event: e.slug }}
                  className="group flex h-full flex-col overflow-hidden rounded-xl bg-paper shadow-border"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-sand">
                    <img
                      src={e.image}
                      alt=""
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-4">
                    <p className="text-[11px] tracking-[0.16em] text-muted uppercase">
                      {e.kicker}
                    </p>
                    <h3 className="mt-1 font-display text-xl font-medium">
                      {e.title}
                    </h3>
                    <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted">
                      {e.summary}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-teal-deep text-cream">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <Badge variant="invert">Why this ground</Badge>
          <h2 className="mt-4 max-w-xl font-display text-3xl font-medium sm:text-4xl">
            Premium facilities. Competitive quotes. No banquet-hall squeeze.
          </h2>
          <ol className="mt-12 grid gap-8 sm:grid-cols-2">
            {why.map((item, i) => (
              <li key={item.title} className="flex gap-4">
                <span className="font-display text-2xl text-cream/40 tabular-nums">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="font-display text-xl font-medium">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream/70">
                    {item.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <Badge>From the grounds</Badge>
            <h2 className="mt-4 font-display text-3xl font-medium sm:text-4xl">
              Real photographs. Real pool.
            </h2>
          </div>
          <Link to="/gallery" className="text-sm text-teal hover:underline">
            Open gallery
          </Link>
        </div>
        <GalleryGrid limit={6} />
      </section>

      <section className="border-y border-line bg-paper-2">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2">
          <div>
            <Badge>How a booking works</Badge>
            <h2 className="mt-4 font-display text-3xl font-medium sm:text-4xl">
              Send the date. We quote. You celebrate.
            </h2>
            <ol className="mt-8 space-y-6">
              {[
                {
                  t: "Tell us the brief",
                  d: "Event type, guest count, date, veg/non-veg, night stay or not.",
                },
                {
                  t: "We send a quote",
                  d: "Food, décor, pool access, and music priced for that day — not a mystery menu.",
                },
                {
                  t: "Hold the ground",
                  d: "Confirm on WhatsApp. We run décor, catering, and the floor on the day.",
                },
              ].map((s, i) => (
                <li key={s.t} className="flex gap-4">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-ink text-sm text-cream">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-medium">{s.t}</p>
                    <p className="mt-1 text-sm text-muted">{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>
            <blockquote className="mt-10 border-l-2 border-teal pl-4">
              <p className="font-display text-xl leading-snug">
                “Very nice staff. They are friendly and helpful. Every time we
                needed something, they were there to assist us with a smile.”
              </p>
              <footer className="mt-3 text-sm text-muted">
                Rohit · guest note, April 2026
              </footer>
            </blockquote>
          </div>
          <div className="rounded-xl bg-paper p-5 shadow-border sm:p-7">
            <h3 className="font-display text-2xl font-medium">
              Check a date
            </h3>
            <p className="mt-2 text-sm text-muted">
              Opens WhatsApp with your details filled in. We typically reply the
              same day.
            </p>
            <EnquiryForm className="mt-6" />
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-ink">
        <img
          src="/editorial/lawn.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-ink/55" />
        <div className="relative mx-auto max-w-3xl px-4 py-24 text-center sm:px-6">
          <h2 className="font-display text-3xl font-medium text-cream sm:text-5xl">
            Visit Fun Valley for unforgettable celebrations.
          </h2>
          <p className="mt-4 text-cream/75">
            Unlimited fun, food, and a party atmosphere — pool, lawn, and the
            night, all in Sector 135.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" variant="invert">
              <Link to="/enquire">Enquire now</Link>
            </Button>
            <Button asChild size="lg" variant="cream">
              <a href={whatsappUrl()}>{site.phone}</a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
