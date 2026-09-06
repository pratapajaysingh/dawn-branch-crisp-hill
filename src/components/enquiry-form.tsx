import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState, type ReactNode } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { events, type EventSlug, whatsappUrl } from "@/lib/site";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().min(2, "Please add your name"),
  phone: z
    .string()
    .min(10, "Enter a 10-digit mobile number")
    .regex(/^[0-9+\-\s]{10,15}$/, "Enter a valid phone number"),
  email: z.union([z.email(), z.literal("")]).optional(),
  event: z.string().min(1, "Pick a celebration"),
  date: z.string().min(1, "Pick a date"),
  guests: z.string().min(1, "How many guests?"),
  message: z.string().optional(),
});

type Values = z.infer<typeof schema>;

const STORAGE_KEY = "fvr-enquiries";

function saveEnquiry(values: Values) {
  try {
    const prev = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]") as unknown[];
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify([
        { ...values, createdAt: new Date().toISOString() },
        ...prev,
      ].slice(0, 20)),
    );
  } catch {
    /* ignore quota */
  }
}

export function EnquiryForm({
  defaultEvent,
  className,
}: {
  defaultEvent?: EventSlug | string;
  className?: string;
}) {
  const [ready, setReady] = useState(false);
  const form = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      event: defaultEvent ?? "",
      date: "",
      guests: "",
      message: "",
    },
  });

  useEffect(() => {
    setReady(true);
  }, []);

  useEffect(() => {
    if (defaultEvent) form.setValue("event", defaultEvent);
  }, [defaultEvent, form]);

  function onSubmit(values: Values) {
    saveEnquiry(values);
    const eventTitle =
      events.find((e) => e.slug === values.event)?.title ?? values.event;
    const text = [
      `Hello Fun Valley Resort, I'd like to enquire about a booking.`,
      `Name: ${values.name}`,
      `Phone: ${values.phone}`,
      values.email ? `Email: ${values.email}` : null,
      `Event: ${eventTitle}`,
      `Date: ${values.date}`,
      `Guests: ${values.guests}`,
      values.message ? `Notes: ${values.message}` : null,
    ]
      .filter(Boolean)
      .join("\n");
    toast.success("Opening WhatsApp with your enquiry.");
    window.open(whatsappUrl(text), "_blank", "noopener,noreferrer");
    form.reset({
      name: "",
      phone: "",
      email: "",
      event: defaultEvent ?? "",
      date: "",
      guests: "",
      message: "",
    });
  }

  if (!ready) {
    return (
      <div className={cn("grid gap-4", className)} aria-hidden>
        <div className="h-16 rounded-md bg-sand" />
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="h-16 rounded-md bg-sand" />
          <div className="h-16 rounded-md bg-sand" />
        </div>
        <div className="h-16 rounded-md bg-sand" />
        <div className="h-32 rounded-lg bg-sand" />
        <div className="h-12 w-48 rounded-md bg-sand" />
      </div>
    );
  }

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className={cn("grid gap-4", className)}
      noValidate
    >
      <Field label="Your name" error={form.formState.errors.name?.message}>
        <Input autoComplete="name" {...form.register("name")} />
      </Field>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Mobile" error={form.formState.errors.phone?.message}>
          <Input
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="10-digit number"
            {...form.register("phone")}
          />
        </Field>
        <Field
          label="Email (optional)"
          error={form.formState.errors.email?.message}
        >
          <Input
            type="email"
            autoComplete="email"
            {...form.register("email")}
          />
        </Field>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Celebration" error={form.formState.errors.event?.message}>
          <select
            className="flex h-11 w-full rounded-md bg-cream px-3 text-sm text-ink shadow-[inset_0_0_0_1px_var(--color-line)] focus-visible:outline-none focus-visible:shadow-[inset_0_0_0_2px_var(--color-teal)]"
            {...form.register("event")}
          >
            <option value="">Select an event</option>
            {events.map((e) => (
              <option key={e.slug} value={e.slug}>
                {e.title}
              </option>
            ))}
            <option value="other">Something else</option>
          </select>
        </Field>
        <Field label="Preferred date" error={form.formState.errors.date?.message}>
          <Input type="date" {...form.register("date")} />
        </Field>
      </div>
      <Field label="Guest count" error={form.formState.errors.guests?.message}>
        <Input
          placeholder="e.g. 40"
          inputMode="numeric"
          {...form.register("guests")}
        />
      </Field>
      <Field label="Anything we should know">
        <Textarea
          placeholder="Décor theme, veg/non-veg, night stay, DJ…"
          {...form.register("message")}
        />
      </Field>
      <Button type="submit" size="lg" className="mt-1 w-full sm:w-auto">
        Send enquiry on WhatsApp
      </Button>
      <p className="text-xs leading-relaxed text-muted">
        We reply on WhatsApp. There is no public price list — every booking is
        quoted for your date, guest count, and menu.
      </p>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <label className="grid gap-1.5">
      <Label>{label}</Label>
      {children}
      {error ? <span className="text-xs text-danger">{error}</span> : null}
    </label>
  );
}
