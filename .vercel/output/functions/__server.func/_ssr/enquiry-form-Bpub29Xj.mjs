import { i as __toESM } from "../_runtime.mjs";
import { l as whatsappUrl, n as events, t as cn } from "./utils-Bh2QpBx4.mjs";
import { n as useForm, r as require_react, t as u } from "../_libs/@hookform/resolvers+[...].mjs";
import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { a as string, i as object, n as literal, o as union, t as email } from "../_libs/zod.mjs";
import { r as Button } from "./router-DSL66L-v.mjs";
import { t as Root } from "../_libs/radix-ui__react-label.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/enquiry-form-Bpub29Xj.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-11 w-full rounded-md bg-cream px-3 text-sm text-ink shadow-[inset_0_0_0_1px_var(--color-line)] transition-[box-shadow] duration-150 placeholder:text-muted focus-visible:outline-none focus-visible:shadow-[inset_0_0_0_2px_var(--color-teal)] disabled:cursor-not-allowed disabled:opacity-50", className),
		ref,
		...props
	});
});
Input.displayName = "Input";
var Label = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
	ref,
	className: cn("text-xs font-medium tracking-wide text-ink-soft", className),
	...props
}));
Label.displayName = Root.displayName;
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-32 w-full rounded-lg bg-cream px-3 py-2.5 text-sm text-ink shadow-[inset_0_0_0_1px_var(--color-line)] transition-[box-shadow] duration-150 placeholder:text-muted focus-visible:outline-none focus-visible:shadow-[inset_0_0_0_2px_var(--color-teal)] disabled:cursor-not-allowed disabled:opacity-50", className),
		ref,
		...props
	});
});
Textarea.displayName = "Textarea";
var schema = object({
	name: string().min(2, "Please add your name"),
	phone: string().min(10, "Enter a 10-digit mobile number").regex(/^[0-9+\-\s]{10,15}$/, "Enter a valid phone number"),
	email: union([email(), literal("")]).optional(),
	event: string().min(1, "Pick a celebration"),
	date: string().min(1, "Pick a date"),
	guests: string().min(1, "How many guests?"),
	message: string().optional()
});
var STORAGE_KEY = "fvr-enquiries";
function saveEnquiry(values) {
	try {
		const prev = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]");
		localStorage.setItem(STORAGE_KEY, JSON.stringify([{
			...values,
			createdAt: (/* @__PURE__ */ new Date()).toISOString()
		}, ...prev].slice(0, 20)));
	} catch {}
}
function EnquiryForm({ defaultEvent, className }) {
	const [ready, setReady] = (0, import_react.useState)(false);
	const form = useForm({
		resolver: u(schema),
		defaultValues: {
			name: "",
			phone: "",
			email: "",
			event: defaultEvent ?? "",
			date: "",
			guests: "",
			message: ""
		}
	});
	(0, import_react.useEffect)(() => {
		setReady(true);
	}, []);
	(0, import_react.useEffect)(() => {
		if (defaultEvent) form.setValue("event", defaultEvent);
	}, [defaultEvent, form]);
	function onSubmit(values) {
		saveEnquiry(values);
		const eventTitle = events.find((e) => e.slug === values.event)?.title ?? values.event;
		const text = [
			`Hello Fun Valley Resort, I'd like to enquire about a booking.`,
			`Name: ${values.name}`,
			`Phone: ${values.phone}`,
			values.email ? `Email: ${values.email}` : null,
			`Event: ${eventTitle}`,
			`Date: ${values.date}`,
			`Guests: ${values.guests}`,
			values.message ? `Notes: ${values.message}` : null
		].filter(Boolean).join("\n");
		toast.success("Opening WhatsApp with your enquiry.");
		window.open(whatsappUrl(text), "_blank", "noopener,noreferrer");
		form.reset({
			name: "",
			phone: "",
			email: "",
			event: defaultEvent ?? "",
			date: "",
			guests: "",
			message: ""
		});
	}
	if (!ready) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("grid gap-4", className),
		"aria-hidden": true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-16 rounded-md bg-sand" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-16 rounded-md bg-sand" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-16 rounded-md bg-sand" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-16 rounded-md bg-sand" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-32 rounded-lg bg-sand" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-12 w-48 rounded-md bg-sand" })
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit: form.handleSubmit(onSubmit),
		className: cn("grid gap-4", className),
		noValidate: true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Your name",
				error: form.formState.errors.name?.message,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					autoComplete: "name",
					...form.register("name")
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Mobile",
					error: form.formState.errors.phone?.message,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						type: "tel",
						inputMode: "tel",
						autoComplete: "tel",
						placeholder: "10-digit number",
						...form.register("phone")
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Email (optional)",
					error: form.formState.errors.email?.message,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						type: "email",
						autoComplete: "email",
						...form.register("email")
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Celebration",
					error: form.formState.errors.event?.message,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						className: "flex h-11 w-full rounded-md bg-cream px-3 text-sm text-ink shadow-[inset_0_0_0_1px_var(--color-line)] focus-visible:outline-none focus-visible:shadow-[inset_0_0_0_2px_var(--color-teal)]",
						...form.register("event"),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "",
								children: "Select an event"
							}),
							events.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: e.slug,
								children: e.title
							}, e.slug)),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "other",
								children: "Something else"
							})
						]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Preferred date",
					error: form.formState.errors.date?.message,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						type: "date",
						...form.register("date")
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Guest count",
				error: form.formState.errors.guests?.message,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					placeholder: "e.g. 40",
					inputMode: "numeric",
					...form.register("guests")
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Anything we should know",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					placeholder: "Décor theme, veg/non-veg, night stay, DJ…",
					...form.register("message")
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "submit",
				size: "lg",
				className: "mt-1 w-full sm:w-auto",
				children: "Send enquiry on WhatsApp"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs leading-relaxed text-muted",
				children: "We reply on WhatsApp. There is no public price list — every booking is quoted for your date, guest count, and menu."
			})
		]
	});
}
function Field({ label, error, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "grid gap-1.5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: label }),
			children,
			error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-xs text-danger",
				children: error
			}) : null
		]
	});
}
//#endregion
export { EnquiryForm as t };
