import { n as clsx } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/utils-Bh2QpBx4.js
var site = {
	name: "Fun Valley Resort",
	shortName: "Fun Valley",
	tagline: "Noida’s pool, lawn, and all-night celebration ground.",
	established: 2025,
	phone: "+91 97118 36300",
	phoneTel: "+919711836300",
	whatsapp: "919711836300",
	email: "shivrajroyal007@gmail.com",
	addressLine: "Near Baagh Bagicha Farms, Sector 135",
	city: "Noida, Uttar Pradesh 201304",
	hours: "Monday – Sunday · 12:00 AM – 11:55 PM",
	hoursShort: "Open daily, celebrations through the night",
	youtube: "https://www.youtube.com/@FUNVALLEYRESORTNOIDA",
	mapsQuery: "Fun Valley Resort Near Baagh Bagicha Farms, Sector 135, Noida",
	mapsEmbed: "https://maps.google.com/maps?q=Fun+Valley+Resort+Near+Baagh+Bagicha+Farms+Sector+135+Noida&z=15&output=embed",
	mapsDirections: "https://www.google.com/maps/dir/?api=1&destination=Fun+Valley+Resort+Near+Baagh+Bagicha+Farms+Sector+135+Noida"
};
function whatsappUrl(text) {
	const base = `https://wa.me/${site.whatsapp}`;
	return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}
var events = [
	{
		slug: "birthday",
		title: "Birthday parties",
		kicker: "Cake, DJ, pool",
		summary: "A full birthday setup in Noida — décor, music, pool access, and unlimited food, managed end to end.",
		body: "Celebrate your special day at Fun Valley Resort with a fun-filled birthday party setup in Noida. We offer customized decorations, DJ music, pool access, unlimited food packages, and complete event management.",
		image: "/editorial/birthday.jpg",
		includes: [
			"Custom décor & cake table",
			"DJ / playlist setup",
			"Pool access on request",
			"Unlimited food packages"
		]
	},
	{
		slug: "pool",
		title: "Pool parties",
		kicker: "Day or night",
		summary: "Music, lights, food, and a wide pool for friends, family, or a private group — with safety and comfort in mind.",
		body: "Enjoy an exciting pool party with music, lights, delicious food, and unlimited fun at Fun Valley Resort. Our spacious pool area is perfect for friends, family, and private group celebrations. Day or night, we provide the perfect party vibe with safety and comfort.",
		image: "/gallery/g12.jpg",
		includes: [
			"Spacious swimming pool",
			"Deck seating & lawn overflow",
			"Lighting for night parties",
			"Food & beverage packages"
		]
	},
	{
		slug: "bachelor",
		title: "Bachelor parties",
		kicker: "Private, loud enough",
		summary: "A private setup for the last single days — pool, music, food, and a ground that stays yours for the night.",
		body: "Make your bachelor party unforgettable with a private party setup, energetic music, pool fun, and delicious food. Fun Valley Resort offers the perfect environment to celebrate your last single days with friends in style and privacy.",
		image: "/editorial/pool-night.jpg",
		includes: [
			"Private group booking",
			"Pool + lawn",
			"DJ / sound",
			"Unlimited food"
		]
	},
	{
		slug: "corporate",
		title: "Corporate outings",
		kicker: "Teams, offsite",
		summary: "Team outings, annual days, and office parties with space to breathe — lawn, food, and a setup that isn’t a hotel ballroom.",
		body: "Plan your corporate gatherings, team outings, annual celebrations, and office parties at Fun Valley Resort. We provide a spacious venue, customized arrangements, food packages, and a relaxing environment for team bonding and celebrations.",
		image: "/editorial/corporate.jpg",
		includes: [
			"Lawn & indoor overflow",
			"Custom seating plans",
			"Food packages",
			"AV on request"
		]
	},
	{
		slug: "kitty",
		title: "Kitty parties",
		kicker: "Lawn & lunch",
		summary: "Elegant seating, music, and a lively but comfortable atmosphere for ladies’ gatherings in Sector 135.",
		body: "Looking for a perfect kitty party location in Noida? We offer elegant seating arrangements, music, delicious food, and a lively atmosphere for ladies’ gatherings and social celebrations.",
		image: "/editorial/kitty.jpg",
		includes: [
			"Shaded seating",
			"Menu tailored to the group",
			"Music at a civilised volume",
			"Photo corners on request"
		]
	},
	{
		slug: "anniversary",
		title: "Anniversaries",
		kicker: "Quiet or grand",
		summary: "Themes, music, catering, and a poolside table if you want the evening to stay small — or a lawn if you don’t.",
		body: "Make your anniversary celebration romantic and memorable at Fun Valley Resort. We provide decoration themes, music, catering, and personalized arrangements to make your special day extraordinary.",
		image: "/editorial/anniversary.jpg",
		includes: [
			"Theme décor",
			"Private table or full lawn",
			"Catering",
			"Lighting"
		]
	},
	{
		slug: "wedding",
		title: "Weddings & functions",
		kicker: "Haldi to reception",
		summary: "Haldi, mehendi, sangeet, and reception parties on the lawn — with décor, catering, and room for the baraat to breathe.",
		body: "Fun Valley Resort hosts wedding functions including Haldi, Mehendi, Sangeet, and reception parties, alongside family get-togethers. From decoration to food and music, we manage the day so the family can stay in it.",
		image: "/editorial/wedding.jpg",
		includes: [
			"Lawn ceremony setups",
			"Haldi / mehendi décor",
			"Sangeet & reception",
			"Catering for large guest lists"
		]
	},
	{
		slug: "stay",
		title: "Night stay",
		kicker: "After the party",
		summary: "Stay on after the music. Night-stay bookings for families and wedding parties who don’t want the drive home at 2 a.m.",
		body: "Night stay is available for families, wedding parties, and groups who want the ground to themselves after the event. Ask when you enquire — rooms and mattress extras are arranged with the booking, not as an afterthought.",
		image: "/editorial/stay.jpg",
		includes: [
			"Overnight stay on request",
			"Breakfast the next morning",
			"Family-friendly rooms",
			"Grounds to yourselves after hours"
		]
	}
];
var packages = [
	{
		name: "Intimate",
		guests: "Up to 30 guests",
		note: "Birthdays, anniversaries, small kitty lunches.",
		points: [
			"Dedicated seating",
			"Food package",
			"Décor starter set"
		]
	},
	{
		name: "Celebration",
		guests: "30 – 80 guests",
		note: "The usual party size. Pool + lawn, DJ, unlimited food.",
		points: [
			"Pool access option",
			"DJ / sound",
			"Full décor & lighting"
		]
	},
	{
		name: "Grand lawn",
		guests: "80 – 200+ guests",
		note: "Corporate days, receptions, mehendi, sangeet.",
		points: [
			"Full lawn",
			"Custom menu",
			"End-to-end event desk"
		]
	}
];
var faqs = [
	{
		q: "Where is Fun Valley Resort located?",
		a: "Fun Valley Resort is located near Baagh Bagicha Farms, Sector 135, Noida, Uttar Pradesh – 201304. It is easily accessible from Delhi, Faridabad, Ghaziabad, and the NCR region."
	},
	{
		q: "What types of events do you host?",
		a: "We host Birthday Parties, Pool Parties, Bachelor Parties, Corporate Events, Kitty Parties, Anniversary Celebrations, Wedding Functions (Haldi, Mehendi), Reception Parties, Family Get-Togethers, and Night Stays."
	},
	{
		q: "Do you provide food and catering services?",
		a: "Yes, we offer unlimited food packages with customizable menu options to suit your event and guest preferences."
	},
	{
		q: "Is pool access included in party bookings?",
		a: "Yes, pool access is available for pool party bookings and can also be included in selected event packages."
	},
	{
		q: "Do you provide decoration and event setup?",
		a: "Yes, we provide customized decoration, lighting, music, seating arrangements, and complete event management services."
	}
];
var gallery = [
	{
		src: "/gallery/g01.jpg",
		alt: "Fun Valley Resort entrance sign with inflatables on the lawn",
		tag: "grounds"
	},
	{
		src: "/gallery/g12.jpg",
		alt: "Main swimming pool with floating rings, beach balls, and the farmhouse beyond",
		tag: "pool"
	},
	{
		src: "/gallery/g03.jpg",
		alt: "Open lawn with blue umbrellas, farmhouse buildings, and guests",
		tag: "lawn"
	},
	{
		src: "/gallery/g02.jpg",
		alt: "Pool deck with colourful balls, flamingo float, and cream farmhouse",
		tag: "pool"
	},
	{
		src: "/gallery/g05.jpg",
		alt: "Wide view of the pool, lawn, and party inflatables",
		tag: "pool"
	},
	{
		src: "/gallery/g09.jpg",
		alt: "Lawn seating with umbrellas and the pool in the distance",
		tag: "lawn"
	},
	{
		src: "/gallery/g04.jpg",
		alt: "Guests in the pool with inflatable rings",
		tag: "pool"
	},
	{
		src: "/gallery/g13.jpg",
		alt: "Pool party setup with flamingo, balls, and farmhouse backdrop",
		tag: "pool"
	},
	{
		src: "/gallery/g14.jpg",
		alt: "Guests on the lawn in front of the farmhouse",
		tag: "lawn"
	},
	{
		src: "/gallery/g10.jpg",
		alt: "Full length of the pool with umbrellas along the far side",
		tag: "pool"
	},
	{
		src: "/gallery/g07.jpg",
		alt: "Flamingo float on the pool",
		tag: "pool"
	},
	{
		src: "/gallery/g11.jpg",
		alt: "Children playing in the swimming pool",
		tag: "pool"
	},
	{
		src: "/gallery/g08.jpg",
		alt: "Swimmer with a yellow inflatable ring",
		tag: "pool"
	},
	{
		src: "/gallery/g06.jpg",
		alt: "Close view of pool inflatables and the farmhouse",
		tag: "grounds"
	}
];
var videos = [
	{
		id: "MAUlpEF3IRU",
		title: "Pool party, swim, DJ and food at Fun Valley"
	},
	{
		id: "BsV-yjaZCz4",
		title: "Birthday celebration on the grounds"
	},
	{
		id: "a_7SsBLa8zs",
		title: "Swimming pool and games"
	},
	{
		id: "fbeJEYXc2VA",
		title: "Food and a day on the lawn"
	}
];
var why = [
	{
		title: "Prime location in Noida",
		body: "Sector 135, near Baagh Bagicha Farms — an easy run from Delhi, Faridabad, Ghaziabad, and the rest of NCR."
	},
	{
		title: "Spacious pool & party lawn",
		body: "A wide swimming pool with a lawn that actually fits a baraat, a team outing, or a loud birthday — not a squeezed banquet hall."
	},
	{
		title: "Unlimited food packages",
		body: "Customisable menus. Unlimited food packages so the host is not counting plates at 10 p.m."
	},
	{
		title: "Custom event setup",
		body: "Décor, lighting, music, seating, and a single desk that runs the day. You bring the people."
	}
];
var nav = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/events",
		label: "Celebrations"
	},
	{
		to: "/gallery",
		label: "Gallery"
	},
	{
		to: "/enquire",
		label: "Enquire"
	},
	{
		to: "/contact",
		label: "Visit"
	}
];
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
//#endregion
export { nav as a, videos as c, gallery as i, whatsappUrl as l, events as n, packages as o, faqs as r, site as s, cn as t, why as u };
