import { createFileRoute } from "@tanstack/react-router";
import { GalleryGrid } from "@/components/gallery-grid";
import { Badge } from "@/components/ui/badge";
import { videos } from "@/lib/site";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [{ title: "Gallery | Fun Valley Resort Noida" }],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <main id="main" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <Badge>Gallery</Badge>
      <h1 className="mt-4 max-w-2xl font-display text-4xl font-medium sm:text-5xl">
        The pool, the lawn, the inflatables, the afternoon light.
      </h1>
      <p className="mt-4 max-w-xl text-muted">
        Photographs from the grounds in Sector 135 — not stock villas. Tap any
        frame to open it.
      </p>
      <div className="mt-10">
        <GalleryGrid />
      </div>
      <section className="mt-20">
        <h2 className="font-display text-3xl font-medium">From the grounds, moving</h2>
        <p className="mt-2 text-sm text-muted">
          Short films from Fun Valley Resort Noida.
        </p>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {videos.map((v) => (
            <li key={v.id} className="overflow-hidden rounded-xl bg-sand">
              <div className="aspect-video">
                <iframe
                  title={v.title}
                  src={`https://www.youtube.com/embed/${v.id}`}
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              <p className="px-4 py-3 text-sm text-ink-soft">{v.title}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
