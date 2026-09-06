import { i as __toESM } from "../_runtime.mjs";
import { i as gallery, t as cn } from "./utils-Bh2QpBx4.mjs";
import { r as require_react } from "../_libs/@hookform/resolvers+[...].mjs";
import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { d as ChevronLeft, t as X, u as ChevronRight } from "../_libs/lucide-react.mjs";
import { a as DialogOverlay$1, i as DialogDescription$1, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/gallery-grid-Q9ArDche.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Dialog = Dialog$1;
var DialogPortal = DialogPortal$1;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-ink/70", className),
	...props
}));
DialogOverlay.displayName = DialogOverlay$1.displayName;
var DialogContent = import_react.forwardRef(({ className, children, hideClose, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn("fixed top-1/2 left-1/2 z-50 w-[min(100%-1.5rem,72rem)] -translate-x-1/2 -translate-y-1/2 rounded-xl bg-ink p-2 shadow-border", className),
	...props,
	children: [children, !hideClose && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute top-3 right-3 z-10 flex size-11 items-center justify-center rounded-md bg-ink/50 text-cream hover:bg-ink/70",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
DialogContent.displayName = DialogContent$1.displayName;
var DialogTitle = DialogTitle$1;
var DialogDescription = DialogDescription$1;
var filters = [
	{
		id: "all",
		label: "All"
	},
	{
		id: "pool",
		label: "Pool"
	},
	{
		id: "lawn",
		label: "Lawn"
	},
	{
		id: "grounds",
		label: "Grounds"
	}
];
function GalleryGrid({ limit }) {
	const [filter, setFilter] = (0, import_react.useState)("all");
	const [open, setOpen] = (0, import_react.useState)(null);
	const items = (0, import_react.useMemo)(() => {
		const list = filter === "all" ? gallery : gallery.filter((g) => g.tag === filter);
		return typeof limit === "number" ? list.slice(0, limit) : list;
	}, [filter, limit]);
	const active = open !== null ? items[open] : void 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mb-6 flex flex-wrap gap-2",
			children: filters.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => setFilter(f.id),
				className: cn("h-10 rounded-full px-4 text-sm transition-colors duration-150", filter === f.id ? "bg-ink text-cream" : "bg-sand text-ink-soft hover:bg-line"),
				children: f.label
			}, f.id))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-3",
			children: items.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
				className: cn(i % 5 === 0 ? "md:col-span-2 md:row-span-1" : ""),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setOpen(i),
					className: "group relative block aspect-[4/3] w-full overflow-hidden rounded-lg bg-sand",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: item.src,
						alt: item.alt,
						className: "content-img h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]",
						loading: "lazy"
					})
				})
			}, item.src))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
			open: open !== null,
			onOpenChange: (v) => {
				if (!v) setOpen(null);
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
				hideClose: false,
				className: "bg-ink p-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
						className: "sr-only",
						children: active?.alt ?? "Gallery image"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
						className: "sr-only",
						children: "Full-size photograph from Fun Valley Resort."
					}),
					active ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: active.src,
								alt: active.alt,
								className: "max-h-[80vh] w-full rounded-lg object-contain"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "px-3 py-3 text-sm text-cream/80",
								children: active.alt
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute inset-y-0 left-0 flex items-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "m-2 flex size-11 items-center justify-center rounded-full bg-ink/60 text-cream",
									"aria-label": "Previous photo",
									onClick: () => setOpen((i) => i === null ? i : (i + items.length - 1) % items.length),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-5" })
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute inset-y-0 right-0 flex items-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "m-2 flex size-11 items-center justify-center rounded-full bg-ink/60 text-cream",
									"aria-label": "Next photo",
									onClick: () => setOpen((i) => i === null ? i : (i + 1) % items.length),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-5" })
								})
							})
						]
					}) : null
				]
			})
		})
	] });
}
//#endregion
export { GalleryGrid as t };
