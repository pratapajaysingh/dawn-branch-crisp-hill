import { ChevronLeft, ChevronRight } from "lucide-react";
import { useMemo, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { gallery, type GalleryItem } from "@/lib/site";
import { cn } from "@/lib/utils";

const filters = [
  { id: "all", label: "All" },
  { id: "pool", label: "Pool" },
  { id: "lawn", label: "Lawn" },
  { id: "grounds", label: "Grounds" },
] as const;

export function GalleryGrid({ limit }: { limit?: number }) {
  const [filter, setFilter] = useState<(typeof filters)[number]["id"]>("all");
  const [open, setOpen] = useState<number | null>(null);

  const items = useMemo(() => {
    const list =
      filter === "all" ? gallery : gallery.filter((g) => g.tag === filter);
    return typeof limit === "number" ? list.slice(0, limit) : list;
  }, [filter, limit]);

  const active: GalleryItem | undefined =
    open !== null ? items[open] : undefined;

  return (
    <div>
      <div className="mb-6 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => setFilter(f.id)}
            className={cn(
              "h-10 rounded-full px-4 text-sm transition-colors duration-150",
              filter === f.id
                ? "bg-ink text-cream"
                : "bg-sand text-ink-soft hover:bg-line",
            )}
          >
            {f.label}
          </button>
        ))}
      </div>
      <ul className="grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-3">
        {items.map((item, i) => (
          <li
            key={item.src}
            className={cn(
              i % 5 === 0 ? "md:col-span-2 md:row-span-1" : "",
            )}
          >
            <button
              type="button"
              onClick={() => setOpen(i)}
              className="group relative block aspect-[4/3] w-full overflow-hidden rounded-lg bg-sand"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="content-img h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                loading="lazy"
              />
            </button>
          </li>
        ))}
      </ul>
      <Dialog
        open={open !== null}
        onOpenChange={(v) => {
          if (!v) setOpen(null);
        }}
      >
        <DialogContent hideClose={false} className="bg-ink p-2">
          <DialogTitle className="sr-only">
            {active?.alt ?? "Gallery image"}
          </DialogTitle>
          <DialogDescription className="sr-only">
            Full-size photograph from Fun Valley Resort.
          </DialogDescription>
          {active ? (
            <div className="relative">
              <img
                src={active.src}
                alt={active.alt}
                className="max-h-[80vh] w-full rounded-lg object-contain"
              />
              <p className="px-3 py-3 text-sm text-cream/80">{active.alt}</p>
              <div className="absolute inset-y-0 left-0 flex items-center">
                <button
                  type="button"
                  className="m-2 flex size-11 items-center justify-center rounded-full bg-ink/60 text-cream"
                  aria-label="Previous photo"
                  onClick={() =>
                    setOpen((i) =>
                      i === null
                        ? i
                        : (i + items.length - 1) % items.length,
                    )
                  }
                >
                  <ChevronLeft className="size-5" />
                </button>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center">
                <button
                  type="button"
                  className="m-2 flex size-11 items-center justify-center rounded-full bg-ink/60 text-cream"
                  aria-label="Next photo"
                  onClick={() =>
                    setOpen((i) =>
                      i === null ? i : (i + 1) % items.length,
                    )
                  }
                >
                  <ChevronRight className="size-5" />
                </button>
              </div>
            </div>
          ) : null}
        </DialogContent>
      </Dialog>
    </div>
  );
}
