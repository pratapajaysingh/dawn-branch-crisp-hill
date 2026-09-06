import { l as whatsappUrl, o as packages, s as site } from "./utils-Bh2QpBx4.mjs";
import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as Route$2 } from "./router-DSL66L-v.mjs";
import { t as Badge } from "./badge-CTg80INd.mjs";
import { t as EnquiryForm } from "./enquiry-form-Bpub29Xj.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/enquire-JJgfCxDV.js
var import_jsx_runtime = require_jsx_runtime();
function EnquirePage() {
	const { event } = Route$2.useSearch();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "main",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-b border-line bg-paper-2",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-4 py-16 sm:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: "Enquire" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-4 max-w-2xl font-display text-4xl font-medium sm:text-5xl",
						children: "Tell us the date. We’ll send a quote."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-xl text-muted",
						children: "No public rate card — packages depend on guest count, menu, décor, and whether you want the pool or a night stay. WhatsApp is the fastest way through."
					})
				]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "lg:col-span-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl bg-cream p-5 shadow-border sm:p-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl font-medium",
						children: "Booking enquiry"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EnquiryForm, {
						defaultEvent: event,
						className: "mt-6"
					})]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "lg:col-span-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] tracking-[0.18em] text-muted uppercase",
						children: "Typical sizes"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 grid gap-3",
						children: packages.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "rounded-xl bg-paper p-5 shadow-border",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-baseline justify-between gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-xl font-medium",
										children: p.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs text-muted",
										children: p.guests
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted",
									children: p.note
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-3 space-y-1 text-sm text-ink-soft",
									children: p.points.map((pt) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: pt }, pt))
								})
							]
						}, p.name))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-xs text-muted",
						children: "Figures are guest ranges, not prices. We’ll quote for your brief."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 rounded-xl bg-teal-deep p-5 text-cream",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-xl",
								children: "Prefer to talk?"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: whatsappUrl(),
								className: "mt-2 block text-sm text-cream/80 underline-offset-4 hover:underline",
								children: site.phone
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `mailto:${site.email}`,
								className: "mt-1 block text-sm text-cream/70",
								children: site.email
							})
						]
					})
				]
			})]
		})]
	});
}
//#endregion
export { EnquirePage as component };
