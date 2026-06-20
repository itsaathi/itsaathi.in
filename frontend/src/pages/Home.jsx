import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BadgeCheck,
  Boxes,
  Cable,
  Camera,
  Cpu,
  Headphones,
  ShieldCheck,
  Star,
  Truck,
  Wifi,
} from "lucide-react";
import banner1 from "../assets/banner 1.png";

const trustPoints = [
  "Wholesale-friendly pricing",
  "Fast delivery support",
  "COD availability",
  "Secure checkout",
  "Dedicated business support",
];

const categories = [
  {
    icon: Camera,
    title: "CCTV Accessories",
    desc: "Baluns, connectors, adaptors, surveillance utility products, and installation essentials.",
  },
  {
    icon: Wifi,
    title: "Networking Devices",
    desc: "WiFi adapters, dongles, wireless tools, and connectivity products for daily demand.",
  },
  {
    icon: Cpu,
    title: "Computer Peripherals",
    desc: "Mouse, keyboard, laptop cooling accessories, USB utilities, and office-use items.",
  },
  {
    icon: Cable,
    title: "Cables & Convertors",
    desc: "VGA, HDMI, USB, LAN, and multi-purpose convertors for business and retail usage.",
  },
];

const highlights = [
  {
    title: "Built for B2B buyers",
    desc: "The homepage should clearly explain your offering and make the value proposition obvious for business buyers.",
    icon: Boxes,
  },
  {
    title: "Multiple conversion points",
    desc: "Specific CTAs across the homepage help users move faster than relying on a single general contact page.",
    icon: ArrowRight,
  },
  {
    title: "Trust-focused shopping",
    desc: "Trust badges, security, shipping confidence, and business credibility can improve conversions.",
    icon: ShieldCheck,
  },
];

const stats = [
  { number: "500+", label: "Products listed" },
  { number: "1000+", label: "Business enquiries served" },
  { number: "24/7", label: "Support-ready response" },
  { number: "PAN India", label: "Delivery focus" },
];

const featuredProducts = [
  {
    name: "Video Baluns",
    desc: "Reliable CCTV signal accessories for commercial and installer usage.",
  },
  {
    name: "HDMI / VGA Convertors",
    desc: "Fast-moving daily-use products for offices, resellers, and desktop setups.",
  },
  {
    name: "Cooling Pads & USB Devices",
    desc: "Practical laptop accessories with repeat business demand.",
  },
  {
    name: "WiFi Dongles",
    desc: "Compact connectivity tools suited for desktops and office environments.",
  },
];

const testimonials = [
  {
    name: "Retail IT Buyer",
    text: "Product range practical hai aur layout se quickly samajh aata hai ki kis category me kya mil jayega.",
  },
  {
    name: "CCTV Installer",
    text: "Bulk enquiry aur accessory sourcing ke liye clear trust aur fast-access information kaafi useful hai.",
  },
  {
    name: "Reseller Partner",
    text: "Business-oriented messaging aur repeat-order vibe homepage ko stronger banati hai.",
  },
];

const faqs = [
  {
    q: "Kya website B2B buyers ke liye suitable hai?",
    a: "Haan, homepage copy, CTAs, categories, aur trust sections ko business buyers aur repeat-order intent ke hisaab se position kiya gaya hai.",
  },
  {
    q: "Kaun se products homepage par highlight karne chahiye?",
    a: "Fast-moving categories jaise CCTV accessories, WiFi devices, peripherals, and convertors ko top priority deni chahiye.",
  },
  {
    q: "Homepage par trust kaise improve hota hai?",
    a: "Trust badges, secure checkout messaging, delivery support, testimonials, aur clear contact paths trust build karte hain.",
  },
];

export default function Home() {
  return (
    <Layout>
      <div className="bg-white">
        <section className="border-b border-slate-200 bg-gradient-to-b from-sky-50 to-white">
          <div className="mx-auto grid max-w-[1280px] gap-10 px-4 py-16 lg:grid-cols-2 lg:px-8 lg:py-20">
            <div className="flex flex-col justify-center">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-600">
                IT & CCTV Accessories
              </p>

              <h1 className="mt-4 text-4xl font-black leading-tight text-slate-900 md:text-5xl">
                Trusted IT & CCTV accessories store for every business need
              </h1>

              <p className="mt-5 max-w-2xl text-lg text-slate-600">
                Wholesale-friendly pricing, fast delivery support, COD availability,
                and secure checkout experience for resellers and buyers.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {trustPoints.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-2 rounded-full border border-sky-100 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm"
                  >
                    <BadgeCheck size={16} className="text-sky-600" />
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/shop"
                  className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-sky-600"
                >
                  Shop All
                  <ArrowRight size={18} />
                </Link>

                <Link
                  to="/contact"
                  className="rounded-2xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:border-sky-500 hover:text-sky-600"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-slate-100 shadow-sm">
              <img
                src={banner1}
                alt="IT Saathi banner"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1280px] px-4 py-8 lg:px-8">
          <div className="grid gap-4 rounded-[28px] bg-slate-900 p-6 text-white md:grid-cols-2 xl:grid-cols-4">
            {stats.map((item) => (
              <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="text-3xl font-black text-sky-400">{item.number}</div>
                <div className="mt-2 text-sm uppercase tracking-[0.18em] text-slate-300">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-[1280px] px-4 py-16 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-600">
                Core Categories
              </p>
              <h2 className="mt-3 text-3xl font-black text-slate-900 md:text-4xl">
                Explore products that match real business demand
              </h2>
            </div>

            <Link
              to="/shop"
              className="inline-flex items-center gap-2 text-sm font-semibold text-sky-600 hover:text-sky-700"
            >
              View all categories
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {categories.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-50 text-sky-600">
                    <Icon size={26} />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="bg-slate-50 py-16">
          <div className="mx-auto max-w-[1280px] px-4 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-600">
                Why Choose Us
              </p>
              <h2 className="mt-3 text-3xl font-black text-slate-900 md:text-4xl">
                Built for business buyers, resellers, and repeat ordering needs
              </h2>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-50 text-sky-600">
                      <Icon size={26} />
                    </div>
                    <h3 className="mt-5 text-xl font-bold text-slate-900">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1280px] px-4 py-16 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-600">
                Featured Products
              </p>
              <h2 className="mt-3 text-3xl font-black text-slate-900 md:text-4xl">
                Fast-moving products for wholesale and repeat demand
              </h2>
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {featuredProducts.map((item, index) => (
              <div
                key={item.name}
                className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex h-44 items-center justify-center bg-gradient-to-br from-sky-50 to-slate-100">
                  {index === 0 && <Camera size={54} className="text-sky-600" />}
                  {index === 1 && <Cable size={54} className="text-sky-600" />}
                  {index === 2 && <Headphones size={54} className="text-sky-600" />}
                  {index === 3 && <Wifi size={54} className="text-sky-600" />}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900">{item.name}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.desc}</p>
                  <Link
                    to="/shop"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-sky-600 hover:text-sky-700"
                  >
                    Explore now
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-slate-900 py-16 text-white">
          <div className="mx-auto max-w-[1280px] px-4 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-400">
                  Business Benefits
                </p>
                <h2 className="mt-3 text-3xl font-black md:text-4xl">
                  More confidence for every reseller and business buyer
                </h2>
                <p className="mt-4 max-w-2xl text-slate-300">
                  Strong B2B homepages should make the offer obvious, keep navigation simple,
                  and present clear conversion points from the start.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { icon: Truck, title: "Delivery Support", desc: "PAN-India order assistance and dispatch-focused communication." },
                  { icon: ShieldCheck, title: "Secure Purchase", desc: "Confidence-building messaging for payments and checkout." },
                  { icon: Boxes, title: "Bulk Ready", desc: "Built to serve resellers, offices, installers, and repeat demand." },
                  { icon: Star, title: "Practical Catalog", desc: "Relevant products instead of cluttered, low-intent listings." },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="rounded-[24px] border border-white/10 bg-white/5 p-5"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-400">
                        <Icon size={24} />
                      </div>
                      <h3 className="mt-4 text-lg font-bold">{item.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-slate-300">{item.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1280px] px-4 py-16 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            {testimonials.map((item) => (
              <div
                key={item.name}
                className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex items-center gap-1 text-amber-400">
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-600">“{item.text}”</p>
                <h4 className="mt-5 text-base font-bold text-slate-900">{item.name}</h4>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-slate-50 py-16">
          <div className="mx-auto max-w-[1280px] px-4 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-600">
                FAQ
              </p>
              <h2 className="mt-3 text-3xl font-black text-slate-900 md:text-4xl">
                Common questions before buyers place an enquiry
              </h2>
            </div>

            <div className="mt-10 grid gap-4">
              {faqs.map((item) => (
                <div
                  key={item.q}
                  className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <h3 className="text-lg font-bold text-slate-900">{item.q}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-16 lg:px-8">
          <div className="mx-auto flex max-w-[1280px] flex-col items-start justify-between gap-6 rounded-[32px] bg-gradient-to-r from-slate-900 to-sky-700 px-8 py-10 text-white md:flex-row md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-200">
                Ready to order
              </p>
              <h2 className="mt-3 text-3xl font-black md:text-4xl">
                Start your business enquiry with IT Saathi today
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-sky-100">
                Browse products, compare useful categories, and connect for repeat business, bulk discussion, or product sourcing support.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/shop"
                className="rounded-2xl bg-white px-6 py-3 font-semibold text-slate-900 transition hover:bg-slate-100"
              >
                Explore Products
              </Link>
              <Link
                to="/contact"
                className="rounded-2xl border border-white/30 bg-white/10 px-6 py-3 font-semibold text-white transition hover:bg-white/20"
              >
                Send Enquiry
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}