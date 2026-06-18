// Central place for all editable business content.
// Swap phone numbers, links and copy here.

export const SITE = {
  name: "Vmax Paving",
  tagline: "Groundwork that lasts a lifetime.",
  yearsExperience: 34,
  area: "Cape Town & surrounding suburbs",
  facebook: "https://www.facebook.com/people/Vmax-Paving/61577802037022/",
  phones: [
    { label: "065 163 4660", tel: "+27651634660" },
    { label: "081 270 3645", tel: "+27812703645" },
  ],
  // Primary WhatsApp number in international format (no +, no spaces)
  whatsapp: "27651634660",
};

export const NAV = [
  { label: "Services", href: "#services" },
  { label: "Why Vmax", href: "#why" },
  { label: "Our Work", href: "#work" },
  { label: "Get a Quote", href: "#quote" },
];

export const SERVICES = [
  {
    title: "Driveways",
    desc: "Hard-wearing driveway paving that handles daily traffic and looks sharp for decades.",
    img: "/service-1.jpg",
  },
  {
    title: "Patios & Entertainment Areas",
    desc: "Inviting outdoor living spaces, laid level and finished cleanly to the last edge.",
    img: "/service-2.jpg",
  },
  {
    title: "Walkways & Garden Paths",
    desc: "Neat, safe paths that connect your garden and lift the look of the whole property.",
    img: "/service-3.jpg",
  },
  {
    title: "Pool Surrounds",
    desc: "Slip-considered paving around pools, set true and sealed for a clean finish.",
    img: "/service-4.jpg",
  },
  {
    title: "Commercial & Parking Areas",
    desc: "Durable paving for businesses, complexes and parking bays built to take the load.",
    img: "/service-5.jpg",
  },
  {
    title: "Repairs & Relaying",
    desc: "Lifting, levelling and relaying existing paving that has sunk, shifted or cracked.",
    img: "/service-6.jpg",
  },
];

// ratio = width / height of each photo (used to reserve space and avoid cropping)
export const GALLERY = [
  { img: "/work-1.jpg", label: "Home entrance & pathway", ratio: 1280 / 573 },
  { img: "/work-2.jpg", label: "Lakeside brick walkway", ratio: 960 / 1280 },
  { img: "/work-3.jpg", label: "Driveway paving in progress", ratio: 960 / 1280 },
  { img: "/work-4.jpg", label: "Pool surround", ratio: 1280 / 960 },
  { img: "/work-5.jpg", label: "Clay brick herringbone", ratio: 960 / 1280 },
  { img: "/work-6.jpg", label: "Side passage paving", ratio: 960 / 1280 },
];

export const PROCESS = [
  {
    step: "01",
    title: "Get in touch",
    desc: "Send us your details and what you have in mind. A quick message is all it takes to start.",
  },
  {
    step: "02",
    title: "Free site visit & quote",
    desc: "We come out, measure up, talk through options and give you a clear, no-obligation quote.",
  },
  {
    step: "03",
    title: "We lay your paving",
    desc: "Our team prepares the base properly and lays your paving neatly, on time and tidy.",
  },
  {
    step: "04",
    title: "Enjoy the result",
    desc: "You're left with a clean, level finish and a space built to last for years to come.",
  },
];

export const WHY = [
  {
    title: "34 years on the ground",
    desc: "Over three decades laying paving across Cape Town — experience you can see in every job.",
  },
  {
    title: "Cape Town & all suburbs",
    desc: "Local team covering the whole metro and surrounding suburbs, from the City Bowl outwards.",
  },
  {
    title: "Residential & commercial",
    desc: "Homes, complexes and businesses — we take on projects big and small with the same care.",
  },
  {
    title: "Proper base preparation",
    desc: "We don't cut corners on the groundwork. A solid base is why good paving stays level.",
  },
];

// Builds a pre-filled WhatsApp link from form fields.
export function buildWhatsAppLink({ name, suburb, service, message }) {
  const lines = [
    "Hi Vmax Paving, I'd like a quote.",
    name ? `Name: ${name}` : null,
    suburb ? `Suburb: ${suburb}` : null,
    service ? `Service: ${service}` : null,
    message ? `Details: ${message}` : null,
  ].filter(Boolean);
  const text = encodeURIComponent(lines.join("\n"));
  return `https://wa.me/${SITE.whatsapp}?text=${text}`;
}
