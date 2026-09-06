import { n as events } from "./utils-Bh2QpBx4.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { r as Button } from "./router-DSL66L-v.mjs";
import { t as Badge } from "./badge-CTg80INd.mjs";
import { t as EnquiryForm } from "./enquiry-form-Bpub29Xj.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/events-Cmxzt3aU.js
var import_jsx_runtime = require_jsx_runtime();
function EventsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "main",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-b border-line bg-paper-2",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-4 py-16 sm:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: "Celebrations" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-4 max-w-2xl font-display text-4xl font-medium sm:text-5xl",
						children: "Birthdays, pool nights, teams, and wedding functions."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-xl text-muted",
						children: "Every booking is quoted for your date and guest count. Pick a celebration, send the brief, and we run décor, food, and the floor."
					})
				]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 py-16 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-16",
				children: events.map((e, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					id: e.slug,
					className: "grid items-center gap-8 lg:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: i % 2 === 1 ? "overflow-hidden rounded-xl lg:order-2" : "overflow-hidden rounded-xl",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: e.image,
							alt: "",
							className: "content-img aspect-[4/3] w-full object-cover"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] tracking-[0.18em] text-muted uppercase",
							children: e.kicker
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 font-display text-3xl font-medium",
							children: e.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 leading-relaxed text-muted",
							children: e.body
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-6 grid gap-2 sm:grid-cols-2",
							children: e.includes.map((inc) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "rounded-md bg-sand px-3 py-2 text-sm text-ink-soft",
								children: inc
							}, inc))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							className: "mt-6",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/enquire",
								search: { event: e.slug },
								children: ["Enquire for ", e.title.toLowerCase()]
							})
						})
					] })]
				}, e.slug))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-20 rounded-xl bg-ink p-6 text-cream sm:p-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl font-medium",
						children: "Ready with a date?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-lg text-sm text-cream/70",
						children: "Send it through. We reply on WhatsApp with availability and a quote."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 rounded-lg bg-paper p-5 text-ink sm:p-7",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EnquiryForm, {})
					})
				]
			})]
		})]
	});
}
//#endregion
export { EventsPage as component };
