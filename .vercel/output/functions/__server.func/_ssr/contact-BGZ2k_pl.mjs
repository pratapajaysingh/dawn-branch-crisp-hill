import { i as __toESM } from "../_runtime.mjs";
import { l as whatsappUrl, r as faqs, s as site, t as cn } from "./utils-Bh2QpBx4.mjs";
import { r as require_react } from "../_libs/@hookform/resolvers+[...].mjs";
import { _ as require_jsx_runtime, a as Trigger2, i as Root2, n as Header, r as Item, t as Content2 } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as Phone, c as Mail, f as ChevronDown, l as Clock, s as MapPin } from "../_libs/lucide-react.mjs";
import { r as Button } from "./router-DSL66L-v.mjs";
import { t as Badge } from "./badge-CTg80INd.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-BGZ2k_pl.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Accordion = Root2;
var AccordionItem = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
	ref,
	className: cn("border-b border-line", className),
	...props
}));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
	className: "flex",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trigger2, {
		ref,
		className: cn("flex flex-1 items-center justify-between gap-4 py-5 text-left font-display text-lg font-medium text-ink transition-colors hover:text-teal [&[data-state=open]>svg]:rotate-180", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-4 shrink-0 text-muted transition-transform duration-250" })]
	})
}));
AccordionTrigger.displayName = Trigger2.displayName;
var AccordionContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	className: "overflow-hidden text-sm leading-relaxed text-muted data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("pb-5 pr-8", className),
		children
	})
}));
AccordionContent.displayName = Content2.displayName;
function ContactPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "main",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-b border-line bg-paper-2",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-4 py-16 sm:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: "Visit" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-4 max-w-2xl font-display text-4xl font-medium sm:text-5xl",
						children: "Near Baagh Bagicha Farms, Sector 135."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-xl text-muted",
						children: "Easy from Delhi, Faridabad, Ghaziabad, and the rest of NCR. Open every day — celebrations run through the night."
					})
				]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "grid gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
							icon: Phone,
							label: "Phone / WhatsApp",
							value: site.phone,
							href: whatsappUrl()
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
							icon: Mail,
							label: "Email",
							value: site.email,
							href: `mailto:${site.email}`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
							icon: MapPin,
							label: "Address",
							value: `${site.addressLine}, ${site.city}`,
							href: site.mapsDirections
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
							icon: Clock,
							label: "Hours",
							value: site.hours
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-wrap gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: whatsappUrl(),
								children: "Chat on WhatsApp"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "outline",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: site.mapsDirections,
								target: "_blank",
								rel: "noreferrer",
								children: "Get directions"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "ghost",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: site.youtube,
								target: "_blank",
								rel: "noreferrer",
								children: "YouTube"
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-14 font-display text-2xl font-medium",
					children: "Frequently asked"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
					type: "single",
					collapsible: true,
					className: "mt-4",
					children: faqs.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
						value: `q-${i}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, { children: f.q }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, { children: f.a })]
					}, f.q))
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative min-h-96 overflow-hidden rounded-xl bg-ink shadow-border",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/editorial/lawn.jpg",
						alt: "Lawn at Fun Valley Resort, Sector 135 Noida",
						className: "absolute inset-0 h-full w-full object-cover opacity-70"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/10" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative flex h-full min-h-96 flex-col justify-end p-6 text-cream",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] tracking-[0.18em] text-cream/70 uppercase",
								children: "Find us"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 font-display text-2xl font-medium",
								children: site.addressLine
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-cream/75",
								children: site.city
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-5 flex flex-wrap gap-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									variant: "invert",
									size: "sm",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: site.mapsDirections,
										target: "_blank",
										rel: "noreferrer",
										children: "Open in Google Maps"
									})
								})
							})
						]
					})
				]
			})]
		})]
	});
}
function Info({ icon: Icon, label, value, href }) {
	const inner = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "flex size-11 shrink-0 items-center justify-center rounded-md bg-sand text-teal",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4" })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "block text-[11px] tracking-[0.16em] text-muted uppercase",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "mt-0.5 block text-ink",
		children: value
	})] })] });
	if (href) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href,
		className: "flex items-start gap-3 rounded-lg p-2 hover:bg-sand/60",
		children: inner
	}) });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
		className: "flex items-start gap-3 p-2",
		children: inner
	});
}
//#endregion
export { ContactPage as component };
