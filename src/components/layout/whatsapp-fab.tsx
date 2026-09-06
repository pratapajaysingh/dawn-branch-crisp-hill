import { site, whatsappUrl } from "@/lib/site";

export function WhatsAppFab() {
  return (
    <a
      href={whatsappUrl(
        "Hello Fun Valley Resort, I would like to enquire about a booking.",
      )}
      className="fixed right-4 bottom-4 z-40 flex size-14 items-center justify-center rounded-full bg-teal text-cream shadow-border transition-transform duration-150 hover:bg-teal-deep active:scale-[0.96] sm:right-6 sm:bottom-6"
      aria-label={`WhatsApp ${site.name}`}
    >
      <svg viewBox="0 0 24 24" className="size-6 fill-current" aria-hidden>
        <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.19 8.19 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23-1.48 0-2.93-.39-4.19-1.15l-.3-.17-3.12.82.83-3.04-.2-.32a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24m-2.8 4.4c-.14 0-.37.05-.57.27-.2.22-.75.73-.75 1.78s.77 2.06.87 2.2c.11.15 1.5 2.4 3.72 3.27 1.85.72 2.22.58 2.62.54.4-.04 1.29-.53 1.47-1.04.18-.51.18-.95.13-1.04-.05-.1-.2-.15-.42-.27-.21-.11-1.28-.63-1.48-.7-.2-.08-.34-.11-.49.11s-.56.7-.68.84c-.13.15-.25.16-.46.05-.21-.11-.9-.33-1.71-1.05-.63-.56-1.06-1.26-1.18-1.47-.13-.21-.01-.32.09-.43.1-.1.21-.25.32-.37.1-.13.14-.22.21-.36.07-.15.03-.27-.02-.38-.05-.1-.48-1.16-.66-1.59-.17-.41-.35-.36-.49-.36z" />
      </svg>
    </a>
  );
}
