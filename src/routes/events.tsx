import { createFileRoute, Link } from "@tanstack/react-router";
import { EnquiryForm } from "@/components/enquiry-form";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { events } from "@/lib/site";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      {
        title: "Celebrations | Fun Valley Resort Noida",
      },
    ],
  }),
  component: EventsPage,
});

function EventsPage() {
  return (
    <main id="main">
      <section className="border-b border-line bg-paper-2">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <Badge>Celebrations</Badge>
          <h1 className="mt-4 max-w-2xl font-display text-4xl font-medium sm:text-5xl">
            Birthdays, pool nights, teams, and wedding functions.
          </h1>
          <p className="mt-4 max-w-xl text-muted">
            Every booking is quoted for your date and guest count. Pick a
            celebration, send the brief, and we run décor, food, and the floor.
          </p>
        </div>
      </section>
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-16">
          {events.map((e, i) => (
            <article
              key={e.slug}
              id={e.slug}
              className="grid items-center gap-8 lg:grid-cols-2"
            >
              <div
                className={
                  i % 2 === 1 ? "overflow-hidden rounded-xl lg:order-2" : "overflow-hidden rounded-xl"
                }
              >
                <img
                  src={e.image}
                  alt=""
                  className="content-img aspect-[4/3] w-full object-cover"
                />
              </div>
              <div>
                <p className="text-[11px] tracking-[0.18em] text-muted uppercase">
                  {e.kicker}
                </p>
                <h2 className="mt-2 font-display text-3xl font-medium">
                  {e.title}
                </h2>
                <p className="mt-4 leading-relaxed text-muted">{e.body}</p>
                <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                  {e.includes.map((inc) => (
                    <li
                      key={inc}
                      className="rounded-md bg-sand px-3 py-2 text-sm text-ink-soft"
                    >
                      {inc}
                    </li>
                  ))}
                </ul>
                <Button asChild className="mt-6">
                  <Link to="/enquire" search={{ event: e.slug }}>
                    Enquire for {e.title.toLowerCase()}
                  </Link>
                </Button>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-20 rounded-xl bg-ink p-6 text-cream sm:p-10">
          <h2 className="font-display text-3xl font-medium">
            Ready with a date?
          </h2>
          <p className="mt-2 max-w-lg text-sm text-cream/70">
            Send it through. We reply on WhatsApp with availability and a quote.
          </p>
          <div className="mt-8 rounded-lg bg-paper p-5 text-ink sm:p-7">
            <EnquiryForm />
          </div>
        </div>
      </div>
    </main>
  );
}
