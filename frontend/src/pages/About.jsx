import { useEffect, useMemo, useState } from "react";
import Layout from "../components/Layout";
import { ChevronDown, ChevronUp, ArrowRight, Star } from "lucide-react";

export default function About() {
  const slides = useMemo(
    () => [
      "https://picsum.photos/seed/itsaathi-about-1/1600/900",
      "https://picsum.photos/seed/itsaathi-about-2/1600/900",
      "https://picsum.photos/seed/itsaathi-about-3/1600/900",
      "https://picsum.photos/seed/itsaathi-about-4/1600/900",
    ],
    []
  );

  const trustItems = useMemo(
    () => [
      ["Fast Delivery", "Quick and reliable dispatch"],
      ["COD Available", "Flexible payment support"],
      ["Secure Checkout", "Safer online ordering flow"],
      ["Online Payment", "Simple digital payment options"],
      ["Transparent Pricing", "Clear B2B-oriented values"],
      ["Bulk Orders", "Better for repeat commercial buying"],
      ["Dedicated Support", "Focused help for business customers"],
      ["Consistent Supply", "Reliable sourcing for planned purchases"],
    ],
    []
  );

  const stats = useMemo(
    () => [
      { value: 20000, label: "Successful Deliveries" },
      { value: 12000, label: "Trusted B2B Partners" },
      { value: 270000, label: "Pincodes Delivery Network" },
      { value: 300, label: "Dedicated Support Experts" },
    ],
    []
  );

  const bullets = useMemo(
    () => [
      "One-stop B2B-focused product sourcing",
      "Transparent pricing for commercial buyers",
      "Better support for repeat orders",
      "Long-term partnership mindset",
    ],
    []
  );

  const categories = useMemo(
    () => [
      {
        title: "Computer Peripherals",
        desc: "Mice, accessories, and daily-use desktop support products for regular demand.",
      },
      {
        title: "WiFi Connectivity",
        desc: "Dongles, WiFi BT devices, and connection tools built for practical use cases.",
      },
      {
        title: "CCTV Accessories",
        desc: "Video baluns, surveillance-related products, and installer-focused requirements.",
      },
      {
        title: "Cables & Adapters",
        desc: "VGA, HDMI-related items, and utility accessories that support multiple setups.",
      },
    ],
    []
  );

  const features = useMemo(
    () => [
      {
        no: "01",
        title: "Transparent Pricing",
        desc: "Commercial buyers can understand value faster and make clearer purchase decisions.",
      },
      {
        no: "02",
        title: "Consistent Product Focus",
        desc: "Products are positioned around everyday demand instead of random catalog clutter.",
      },
      {
        no: "03",
        title: "Cleaner Navigation",
        desc: "Improved hierarchy guides users from banners to trust, products, and inquiries.",
      },
      {
        no: "04",
        title: "Dynamic Experience",
        desc: "Reveal effects, sliders, counters, and animated sections make the page modern.",
      },
      {
        no: "05",
        title: "Wholesale Ready Messaging",
        desc: "Every section supports B2B confidence, repeat orders, and long-term trust.",
      },
      {
        no: "06",
        title: "Conversion-Oriented Layout",
        desc: "Multiple CTA points help visitors move toward contact and product discovery.",
      },
    ],
    []
  );

  const process = useMemo(
    () => [
      {
        step: "Step 01",
        title: "Browse Categories",
        desc: "Discover relevant product groups through banners, search, and product-led sections.",
      },
      {
        step: "Step 02",
        title: "Compare Fast",
        desc: "Clear product positioning helps buyers identify the right options quickly.",
      },
      {
        step: "Step 03",
        title: "Place Orders",
        desc: "Use straightforward buying actions with COD or online payment flexibility.",
      },
      {
        step: "Step 04",
        title: "Build Repeat Demand",
        desc: "Return for smoother reorders and long-term business sourcing continuity.",
      },
    ],
    []
  );

  const faqs = useMemo(
    () => [
      {
        q: "What kind of buyers is IT Saathi best suited for?",
        a: "IT Saathi is best suited for resellers, CCTV installers, retail tech sellers, office buyers, and businesses that place repeat orders for practical IT accessories and support products.",
      },
      {
        q: "Why does this About page now feel more complete?",
        a: "Because it no longer depends only on short text. It now includes trust elements, banners, category context, process explanation, testimonials, and stronger CTA blocks.",
      },
      {
        q: "Is this design responsive for mobile and desktop?",
        a: "Yes. The layout adapts across desktop, tablet, and mobile through responsive grids, stacked buttons, resized visual blocks, and flexible spacing.",
      },
      {
        q: "What dynamic features are included?",
        a: "Hero slider, reveal animations, counter animation, auto testimonial slider, interactive accordion, trust marquee, floating buttons, hover motion, and a back-to-top button.",
      },
    ],
    []
  );

  const testimonials = useMemo(
    () => [
      {
        quote:
          "A good B2B platform should make repeat buying easy. IT Saathi's messaging now feels clearer, more trustworthy, and better aligned with commercial buyers.",
        author: "Reseller-Focused Brand Direction",
        role: "Ideal for distributors, retailers, and repeat business customers",
      },
      {
        quote:
          "The extra banners, category storytelling, and animated sections make the page feel premium, but still practical for a wholesaler-type website.",
        author: "Store Experience Direction",
        role: "Balanced for visual impact and buying intent",
      },
      {
        quote:
          "This style works because it adds motion, content depth, and conversion sections without breaking the clean e-commerce look of the brand.",
        author: "Modern B2B Design Approach",
        role: "Good fit for IT accessories, CCTV, and peripheral sourcing",
      },
    ],
    []
  );

  const [activeSlide, setActiveSlide] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeFaq, setActiveFaq] = useState(0);
  const [counts, setCounts] = useState([0, 0, 0, 0]);

  useEffect(() => {
    const t = setInterval(() => {
      setActiveSlide((p) => (p + 1) % slides.length);
    }, 4500);
    return () => clearInterval(t);
  }, [slides.length]);

  useEffect(() => {
    const t = setInterval(() => {
      setActiveTestimonial((p) => (p + 1) % testimonials.length);
    }, 4200);
    return () => clearInterval(t);
  }, [testimonials.length]);

  useEffect(() => {
    const target = stats.map((s) => s.value);
    const start = performance.now();
    const duration = 1200;

    const animate = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      setCounts(target.map((n) => Math.floor(n * progress)));
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [stats]);

  return (
    <Layout>
      <div className="bg-white">
        <section className="relative min-h-[760px] overflow-hidden bg-slate-950 text-white">
          <div className="absolute inset-0 z-10 bg-[linear-gradient(90deg,rgba(5,12,24,0.72),rgba(5,12,24,0.15)),linear-gradient(180deg,rgba(13,92,171,0.08),rgba(13,92,171,0.12))]" />

          <div className="absolute inset-0">
            {slides.map((src, i) => (
              <img
                key={src}
                src={src}
                alt={`About slide ${i + 1}`}
                className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${
                  i === activeSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
                }`}
              />
            ))}
          </div>

          <div className="relative z-20 mx-auto max-w-7xl px-4 pb-16 pt-24 lg:px-8">
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div>
                <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-white/90">
                  Trusted B2B IT Accessories Platform
                </span>

                <h1 className="mt-6 max-w-3xl text-4xl font-black leading-tight tracking-tight md:text-6xl">
                  Smarter IT Procurement for Businesses Across India
                </h1>

                <p className="mt-5 max-w-2xl text-lg leading-8 text-white/85">
                  IT Saathi helps resellers, retailers, installers, and commercial buyers source reliable IT accessories, CCTV items, connectivity products, and daily-use peripherals with a smoother online ordering experience.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <a
                    href="/shop"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-sky-600 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-sky-500"
                  >
                    Explore Products
                    <ArrowRight size={18} />
                  </a>
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white/20"
                  >
                    Talk to Our Team
                  </a>
                </div>
              </div>

              <div className="justify-self-start lg:justify-self-end">
                <div className="max-w-md rounded-[24px] border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur-xl">
                  <h3 className="text-2xl font-bold">Why Businesses Prefer IT Saathi</h3>
                  <p className="mt-2 text-sm text-white/80">
                    Built for repeat buying, practical pricing, and dependable support.
                  </p>

                  <div className="mt-5 space-y-3">
                    {[
                      ["Bulk-Friendly Buying", "Procurement designed for repeat and wholesale demand."],
                      ["Quick Fulfillment Focus", "Fast delivery support for time-sensitive business orders."],
                      ["Secure Ordering Experience", "Cleaner store flow with safe payment flexibility."],
                    ].map(([title, desc]) => (
                      <div
                        key={title}
                        className="flex gap-3 rounded-2xl bg-white/10 p-3"
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/15 text-white">
                          ✓
                        </div>
                        <div>
                          <p className="font-semibold">{title}</p>
                          <p className="text-sm text-white/75">{desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveSlide(i)}
                  className={`h-3 rounded-full transition-all ${
                    i === activeSlide ? "w-8 bg-white" : "w-3 bg-white/40"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() =>
                setActiveSlide((p) => (p - 1 + slides.length) % slides.length)
              }
              className="absolute left-4 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 rounded-full bg-white/10 text-2xl text-white backdrop-blur-md transition hover:bg-white/20 lg:grid place-items-center"
            >
              ‹
            </button>
            <button
              onClick={() => setActiveSlide((p) => (p + 1) % slides.length)}
              className="absolute right-4 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 rounded-full bg-white/10 text-2xl text-white backdrop-blur-md transition hover:bg-white/20 lg:grid place-items-center"
            >
              ›
            </button>
          </div>
        </section>

        <section className="overflow-hidden border-y border-slate-200 bg-gradient-to-b from-sky-50 to-white">
          <div className="mx-auto max-w-7xl px-4 py-4 lg:px-8">
            <div className="flex w-max gap-4 animate-[marquee_20s_linear_infinite]">
              {trustItems.concat(trustItems).map(([title, subtitle], i) => (
                <div
                  key={`${title}-${i}`}
                  className="min-w-[240px] rounded-2xl border border-slate-200 bg-white px-5 py-4 text-center shadow-sm"
                >
                  <p className="font-bold text-slate-800">{title}</p>
                  <span className="mt-1 block text-sm text-slate-500">{subtitle}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
          <div className="mb-10">
            <span className="inline-flex rounded-full bg-sky-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-sky-700">
              Who We Are
            </span>
            <h2 className="mt-4 text-3xl font-black uppercase tracking-tight text-slate-900 md:text-5xl">
              More Than a Store, a Long-Term Sourcing Partner
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
              We are building a business-first platform that makes it easier for companies, resellers, and professional buyers to find the right products quickly and place orders with confidence.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
              <p className="mb-4 text-slate-600">
                At IT Saathi, we understand that business procurement is not only about price. It is about availability, consistency, product confidence, and service that supports repeat purchases without friction.
              </p>
              <p className="mb-4 text-slate-600">
                Our team focuses on practical categories like CCTV accessories, connectivity devices, wireless products, tracking tools, computer peripherals, and day-to-day installation essentials that businesses need regularly.
              </p>
              <p className="text-slate-600">
                The goal is simple: help customers buy faster, compare better, and build dependable sourcing habits with a platform that feels easy to use and trustworthy.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {bullets.map((b) => (
                  <div
                    key={b}
                    className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-800"
                  >
                    {b}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm">
              <img
                src="https://picsum.photos/seed/itsaathi-team/1200/900"
                alt="IT Saathi Team"
                className="h-[520px] w-full object-cover transition duration-1000 hover:scale-105"
              />
              <div className="absolute bottom-5 left-5 max-w-[280px] rounded-2xl bg-white/90 p-4 shadow-lg backdrop-blur-md">
                <h4 className="text-lg font-bold text-slate-900">Business-First Experience</h4>
                <p className="mt-1 text-sm text-slate-600">
                  Designed for trust, easier procurement, and smoother growth-focused buying.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-20 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm"
              >
                <div className="text-4xl font-black text-sky-700">
                  {counts[i].toLocaleString()}
                </div>
                <div className="mt-2 text-sm font-bold uppercase tracking-wide text-slate-500">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mb-10">
              <span className="inline-flex rounded-full bg-sky-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-sky-700">
                Featured Creatives
              </span>
              <h2 className="mt-4 text-3xl font-black uppercase tracking-tight text-slate-900 md:text-5xl">
                Promotions, Product Highlights, and Business Offers
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
                These banner creatives make the page feel more active and visually rich while still staying aligned with the store's product-driven identity.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white md:col-span-2">
                <img
                  src="https://picsum.photos/seed/banner-large/1600/900"
                  alt="Featured promotional banner"
                  className="h-[340px] w-full object-cover"
                />
              </div>
              {[
                ["Offer", "https://picsum.photos/seed/banner-offer/900/700"],
                ["Trending", "https://picsum.photos/seed/banner-trending/900/700"],
                ["Wireless", "https://picsum.photos/seed/banner-wireless/900/700"],
                ["CCTV", "https://picsum.photos/seed/banner-cctv/900/700"],
              ].map(([badge, src]) => (
                <div
                  key={badge}
                  className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm"
                >
                  <img src={src} alt={badge} className="h-[260px] w-full object-cover" />
                  <div className="absolute left-4 top-4 rounded-full bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-sky-700">
                    {badge}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
          <div className="mb-10">
            <span className="inline-flex rounded-full bg-sky-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-sky-700">
              Core Categories
            </span>
            <h2 className="mt-4 text-3xl font-black uppercase tracking-tight text-slate-900 md:text-5xl">
              Products That Match Real Business Demand
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
              We focus on product categories that are practical, repeatable, and relevant to resellers, repair stores, CCTV installers, and office-tech buyers.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {categories.map((c) => (
              <div
                key={c.title}
                className="rounded-[24px] border border-slate-200 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-50 text-2xl text-sky-700">
                  ■
                </div>
                <h3 className="text-xl font-bold text-slate-900">{c.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{c.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mb-10">
              <span className="inline-flex rounded-full bg-sky-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-sky-700">
                Why Choose Us
              </span>
              <h2 className="mt-4 text-3xl font-black uppercase tracking-tight text-slate-900 md:text-5xl">
                Built for Better Procurement, Not Just Better Look
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
                The design is more premium now, but the real purpose is still business convenience, product clarity, and faster customer action.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {features.map((f) => (
                <div
                  key={f.no}
                  className="rounded-[24px] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1"
                >
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50 font-black text-sky-700">
                    {f.no}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{f.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
          <div className="mb-10">
            <span className="inline-flex rounded-full bg-sky-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-sky-700">
              How We Work
            </span>
            <h2 className="mt-4 text-3xl font-black uppercase tracking-tight text-slate-900 md:text-5xl">
              Simple, Practical, and Business Friendly
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
              The platform flow is designed to reduce hesitation and support repeat ordering behavior.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {process.map((p) => (
              <div
                key={p.step}
                className="rounded-[24px] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1"
              >
                <div className="mb-3 text-sm font-black uppercase tracking-[0.18em] text-sky-700">
                  {p.step}
                </div>
                <h3 className="text-xl font-bold text-slate-900">{p.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mb-10">
              <span className="inline-flex rounded-full bg-sky-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-sky-700">
                Business Feedback
              </span>
              <h2 className="mt-4 text-3xl font-black uppercase tracking-tight text-slate-900 md:text-5xl">
                What This Platform Should Communicate
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
                This section adds brand depth and trust storytelling so the About page feels more complete.
              </p>
            </div>

            <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm">
              <div
                className="flex transition-transform duration-700 ease-out"
                style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}
              >
                {testimonials.map((t) => (
                  <div key={t.author} className="min-w-full grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                    <div>
                      <p className="text-xl leading-8 text-slate-700">
                        “{t.quote}”
                      </p>
                      <div className="mt-5 font-bold text-slate-900">{t.author}</div>
                      <div className="text-sm text-slate-500">{t.role}</div>
                    </div>

                    <div className="rounded-[24px] bg-gradient-to-br from-sky-700 to-slate-950 p-6 text-white">
                      <div className="mb-4 flex gap-1 text-yellow-300">
                        <Star size={24} fill="currentColor" />
                        <Star size={24} fill="currentColor" />
                        <Star size={24} fill="currentColor" />
                        <Star size={24} fill="currentColor" />
                        <Star size={24} fill="currentColor" />
                      </div>
                      <h3 className="text-2xl font-bold">Better trust and clarity</h3>
                      <p className="mt-3 text-white/80">
                        The new layout supports product confidence, stronger brand identity, and smoother navigation.
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveTestimonial(i)}
                    className={`h-3 rounded-full transition-all ${
                      i === activeTestimonial ? "w-8 bg-sky-700" : "w-3 bg-slate-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
          <div className="mb-10">
            <span className="inline-flex rounded-full bg-sky-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-sky-700">
              FAQ
            </span>
            <h2 className="mt-4 text-3xl font-black uppercase tracking-tight text-slate-900 md:text-5xl">
              Questions Buyers Usually Care About
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
              Adding FAQs improves page depth and answers practical business concerns directly.
            </p>
          </div>

          <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm">
            {faqs.map((f, i) => {
              const open = i === activeFaq;
              return (
                <div key={f.q} className="border-b border-slate-200 last:border-b-0">
                  <button
                    onClick={() => setActiveFaq(open ? -1 : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-bold text-slate-900"
                  >
                    <span>{f.q}</span>
                    {open ? <ChevronUp className="shrink-0 text-sky-700" /> : <ChevronDown className="shrink-0 text-sky-700" />}
                  </button>
                  <div
                    className={`grid transition-all duration-300 ${
                      open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden px-6 pb-5 text-slate-600">
                      {f.a}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="rounded-[32px] bg-gradient-to-r from-sky-700 to-slate-950 px-6 py-14 text-center text-white shadow-2xl">
              <h2 className="text-3xl font-black uppercase md:text-5xl">
                Ready to Source Better with IT Saathi?
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-white/80">
                Build a stronger buying journey with a platform focused on reliability, product clarity, business support, and long-term procurement convenience.
              </p>
              <a
                href="/contact"
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3.5 text-sm font-bold text-slate-900 transition hover:bg-slate-100"
              >
                Start Business Inquiry
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </section>

        <a
          href="https://wa.me/919058042897"
          target="_blank"
          rel="noreferrer"
          className="fixed bottom-24 right-5 z-50 flex h-13 w-13 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition hover:scale-105"
        >
          W
        </a>

        <a
          href="#top"
          className="fixed bottom-5 right-5 z-50 flex h-13 w-13 items-center justify-center rounded-full bg-sky-700 text-white shadow-lg transition hover:scale-105"
        >
          ↑
        </a>
      </div>
    </Layout>
  );
}