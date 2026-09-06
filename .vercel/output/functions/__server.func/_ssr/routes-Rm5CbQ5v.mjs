import { l as whatsappUrl, n as events, s as site, u as why } from "./utils-Bh2QpBx4.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { l as Clock, n as Waves, p as ArrowRight, r as Utensils, s as MapPin } from "../_libs/lucide-react.mjs";
import { r as Button } from "./router-DSL66L-v.mjs";
import { t as Badge } from "./badge-CTg80INd.mjs";
import { t as EnquiryForm } from "./enquiry-form-Bpub29Xj.mjs";
import { t as GalleryGrid } from "./gallery-grid-Q9ArDche.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Rm5CbQ5v.js
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "LocalBusiness",
		name: site.name,
		telephone: site.phoneTel,
		email: site.email,
		address: {
			"@type": "PostalAddress",
			streetAddress: site.addressLine,
			addressLocality: "Noida",
			postalCode: "201304",
			addressRegion: "Uttar Pradesh",
			addressCountry: "IN"
		},
		url: "https://funvalleyresort.com",
		openingHours: "Mo-Su 00:00-23:55"
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "main",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
				type: "application/ld+json",
				dangerouslySetInnerHTML: { __html: JSON.stringify(jsonLd) }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative isolate min-h-[88vh] overflow-hidden bg-ink",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/editorial/hero-dusk.jpg",
						alt: "Dusk over the pool and lawn at Fun Valley Resort",
						className: "absolute inset-0 h-full w-full object-cover",
						fetchPriority: "high"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-ink/25" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-end px-4 pb-16 sm:px-6 sm:pb-20",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "rise text-[11px] tracking-[0.22em] text-cream/70 uppercase",
								children: ["Sector 135, Noida · Est. ", site.established]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "rise rise-d1 mt-4 max-w-3xl font-display text-4xl font-medium text-cream sm:text-6xl md:text-7xl",
								children: "The pool. The lawn. The whole night."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "rise rise-d2 mt-5 max-w-xl text-base leading-relaxed text-cream/80 sm:text-lg",
								children: "Fun Valley Resort is Noida’s party ground — unlimited food, a wide swimming pool, and a lawn that holds birthdays, corporate days, and wedding functions without squeezing anyone into a banquet hall."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rise rise-d3 mt-8 flex flex-wrap gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									size: "lg",
									variant: "invert",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/enquire",
										children: "Enquire for a date"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									size: "lg",
									variant: "cream",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/gallery",
										children: "See the grounds"
									})
								})]
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-b border-line bg-paper-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto grid max-w-6xl gap-6 px-4 py-8 sm:grid-cols-2 sm:px-6 lg:grid-cols-4",
					children: [
						{
							icon: MapPin,
							label: "Sector 135",
							sub: "Near Baagh Bagicha Farms"
						},
						{
							icon: Waves,
							label: "Pool + lawn",
							sub: "Day parties and night lights"
						},
						{
							icon: Utensils,
							label: "Unlimited food",
							sub: "Menus built per booking"
						},
						{
							icon: Clock,
							label: "Open daily",
							sub: site.hoursShort
						}
					].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { className: "mt-0.5 size-5 text-teal" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-medium text-ink",
							children: item.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted",
							children: item.sub
						})] })]
					}, item.label))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden rounded-xl bg-sand",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/gallery/g12.jpg",
						alt: "The main swimming pool at Fun Valley Resort",
						className: "content-img aspect-[4/3] w-full object-cover"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: "About the grounds" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 font-display text-3xl font-medium sm:text-4xl",
						children: "A complete celebration destination, not a rented hall."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-base leading-relaxed text-muted",
						children: "Fun Valley Resort in Noida offers the ideal setting for unforgettable parties, poolside celebrations, and corporate events. Unlimited fun, delicious food, and hospitality — all in one place, near Baagh Bagicha Farms, Sector 135."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 text-base leading-relaxed text-muted",
						children: [
							"Established in ",
							site.established,
							" with a simple brief: a ground where families, friends, and teams can celebrate without limits. From decoration to food and music, we run the day so you stay in it."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						className: "mt-8",
						variant: "outline",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/events",
							children: ["Browse celebrations ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
						})
					})
				] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-cream",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-4 py-20 sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-end justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: "What we host" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 font-display text-3xl font-medium sm:text-4xl",
							children: "Eight ways to take the lawn."
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/events",
							className: "text-sm text-teal hover:underline",
							children: "All celebrations"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
						children: events.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/enquire",
							search: { event: e.slug },
							className: "group flex h-full flex-col overflow-hidden rounded-xl bg-paper shadow-border",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "aspect-[4/3] overflow-hidden bg-sand",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: e.image,
									alt: "",
									className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-1 flex-col p-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[11px] tracking-[0.16em] text-muted uppercase",
										children: e.kicker
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-1 font-display text-xl font-medium",
										children: e.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 line-clamp-3 text-sm leading-relaxed text-muted",
										children: e.summary
									})
								]
							})]
						}) }, e.slug))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-teal-deep text-cream",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-4 py-20 sm:px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							variant: "invert",
							children: "Why this ground"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 max-w-xl font-display text-3xl font-medium sm:text-4xl",
							children: "Premium facilities. Competitive quotes. No banquet-hall squeeze."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
							className: "mt-12 grid gap-8 sm:grid-cols-2",
							children: why.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-display text-2xl text-cream/40 tabular-nums",
									children: ["0", i + 1]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-xl font-medium",
									children: item.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-relaxed text-cream/70",
									children: item.body
								})] })]
							}, item.title))
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-6xl px-4 py-20 sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-8 flex items-end justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: "From the grounds" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 font-display text-3xl font-medium sm:text-4xl",
						children: "Real photographs. Real pool."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/gallery",
						className: "text-sm text-teal hover:underline",
						children: "Open gallery"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GalleryGrid, { limit: 6 })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-y border-line bg-paper-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: "How a booking works" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 font-display text-3xl font-medium sm:text-4xl",
							children: "Send the date. We quote. You celebrate."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
							className: "mt-8 space-y-6",
							children: [
								{
									t: "Tell us the brief",
									d: "Event type, guest count, date, veg/non-veg, night stay or not."
								},
								{
									t: "We send a quote",
									d: "Food, décor, pool access, and music priced for that day — not a mystery menu."
								},
								{
									t: "Hold the ground",
									d: "Confirm on WhatsApp. We run décor, catering, and the floor on the day."
								}
							].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "flex size-9 shrink-0 items-center justify-center rounded-full bg-ink text-sm text-cream",
									children: i + 1
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-medium",
									children: s.t
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-muted",
									children: s.d
								})] })]
							}, s.t))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
							className: "mt-10 border-l-2 border-teal pl-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-xl leading-snug",
								children: "“Very nice staff. They are friendly and helpful. Every time we needed something, they were there to assist us with a smile.”"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
								className: "mt-3 text-sm text-muted",
								children: "Rohit · guest note, April 2026"
							})]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl bg-paper p-5 shadow-border sm:p-7",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-2xl font-medium",
								children: "Check a date"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted",
								children: "Opens WhatsApp with your details filled in. We typically reply the same day."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EnquiryForm, { className: "mt-6" })
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative isolate overflow-hidden bg-ink",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/editorial/lawn.jpg",
						alt: "",
						className: "absolute inset-0 h-full w-full object-cover opacity-50"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-ink/55" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mx-auto max-w-3xl px-4 py-24 text-center sm:px-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-3xl font-medium text-cream sm:text-5xl",
								children: "Visit Fun Valley for unforgettable celebrations."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-cream/75",
								children: "Unlimited fun, food, and a party atmosphere — pool, lawn, and the night, all in Sector 135."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex flex-wrap justify-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									size: "lg",
									variant: "invert",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/enquire",
										children: "Enquire now"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									size: "lg",
									variant: "cream",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: whatsappUrl(),
										children: site.phone
									})
								})]
							})
						]
					})
				]
			})
		]
	});
}
//#endregion
export { Home as component };
