import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { faqs, site, whatsappUrl } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [{ title: "Visit | Fun Valley Resort Noida" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <main id="main">
      <section className="border-b border-line bg-paper-2">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <Badge>Visit</Badge>
          <h1 className="mt-4 max-w-2xl font-display text-4xl font-medium sm:text-5xl">
            Near Baagh Bagicha Farms, Sector 135.
          </h1>
          <p className="mt-4 max-w-xl text-muted">
            Easy from Delhi, Faridabad, Ghaziabad, and the rest of NCR. Open
            every day — celebrations run through the night.
          </p>
        </div>
      </section>
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
        <div>
          <ul className="grid gap-4">
            <Info
              icon={Phone}
              label="Phone / WhatsApp"
              value={site.phone}
              href={whatsappUrl()}
            />
            <Info
              icon={Mail}
              label="Email"
              value={site.email}
              href={`mailto:${site.email}`}
            />
            <Info
              icon={MapPin}
              label="Address"
              value={`${site.addressLine}, ${site.city}`}
              href={site.mapsDirections}
            />
            <Info icon={Clock} label="Hours" value={site.hours} />
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild>
              <a href={whatsappUrl()}>Chat on WhatsApp</a>
            </Button>
            <Button asChild variant="outline">
              <a href={site.mapsDirections} target="_blank" rel="noreferrer">
                Get directions
              </a>
            </Button>
            <Button asChild variant="ghost">
              <a href={site.youtube} target="_blank" rel="noreferrer">
                YouTube
              </a>
            </Button>
          </div>
          <h2 className="mt-14 font-display text-2xl font-medium">
            Frequently asked
          </h2>
          <Accordion type="single" collapsible className="mt-4">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`q-${i}`}>
                <AccordionTrigger>{f.q}</AccordionTrigger>
                <AccordionContent>{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="relative min-h-96 overflow-hidden rounded-xl bg-ink shadow-border">
          <img
            src="/editorial/lawn.jpg"
            alt="Lawn at Fun Valley Resort, Sector 135 Noida"
            className="absolute inset-0 h-full w-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/10" />
          <div className="relative flex h-full min-h-96 flex-col justify-end p-6 text-cream">
            <p className="text-[11px] tracking-[0.18em] text-cream/70 uppercase">
              Find us
            </p>
            <p className="mt-2 font-display text-2xl font-medium">
              {site.addressLine}
            </p>
            <p className="text-sm text-cream/75">{site.city}</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Button asChild variant="invert" size="sm">
                <a href={site.mapsDirections} target="_blank" rel="noreferrer">
                  Open in Google Maps
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function Info({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Phone;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <>
      <span className="flex size-11 shrink-0 items-center justify-center rounded-md bg-sand text-teal">
        <Icon className="size-4" />
      </span>
      <span>
        <span className="block text-[11px] tracking-[0.16em] text-muted uppercase">
          {label}
        </span>
        <span className="mt-0.5 block text-ink">{value}</span>
      </span>
    </>
  );
  if (href) {
    return (
      <li>
        <a
          href={href}
          className="flex items-start gap-3 rounded-lg p-2 hover:bg-sand/60"
        >
          {inner}
        </a>
      </li>
    );
  }
  return <li className="flex items-start gap-3 p-2">{inner}</li>;
}
