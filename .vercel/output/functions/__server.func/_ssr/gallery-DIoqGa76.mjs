import { c as videos } from "./utils-Bh2QpBx4.mjs";
import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Badge } from "./badge-CTg80INd.mjs";
import { t as GalleryGrid } from "./gallery-grid-Q9ArDche.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/gallery-DIoqGa76.js
var import_jsx_runtime = require_jsx_runtime();
function GalleryPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "main",
		className: "mx-auto max-w-6xl px-4 py-16 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: "Gallery" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-4 max-w-2xl font-display text-4xl font-medium sm:text-5xl",
				children: "The pool, the lawn, the inflatables, the afternoon light."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-xl text-muted",
				children: "Photographs from the grounds in Sector 135 — not stock villas. Tap any frame to open it."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GalleryGrid, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl font-medium",
						children: "From the grounds, moving"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: "Short films from Fun Valley Resort Noida."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-8 grid gap-4 sm:grid-cols-2",
						children: videos.map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "overflow-hidden rounded-xl bg-sand",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "aspect-video",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
									title: v.title,
									src: `https://www.youtube.com/embed/${v.id}`,
									className: "h-full w-full",
									allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
									allowFullScreen: true,
									loading: "lazy"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "px-4 py-3 text-sm text-ink-soft",
								children: v.title
							})]
						}, v.id))
					})
				]
			})
		]
	});
}
//#endregion
export { GalleryPage as component };
