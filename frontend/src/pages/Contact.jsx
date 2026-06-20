import { useEffect, useMemo, useState } from "react";
import Layout from "../components/Layout";
import {
  ArrowRight,
  ChevronUp,
  ChevronDown,
  Mail,
  MapPin,
  Phone,
  Send,
  User,
} from "lucide-react";

function Field({ label, children, full = false }) {
  return (
    <label className={`grid gap-2 ${full ? "sm:col-span-2" : ""}`}>
      <span className="text-sm font-bold text-slate-900">{label}</span>
      {children}
    </label>
  );
}

export default function Contact() {
  const categories = useMemo(
    () => [
      {
        badge: "01",
        title: "CCTV Accessories",
        desc: "Baluns, surveillance items, connectors, and installer-focused products.",
      },
      {
        badge: "02",
        title: "Computer Peripherals",
        desc: "Mice, daily-use accessories, and office support products.",
      },
      {
        badge: "03",
        title: "WiFi Connectivity",
        desc: "Dongles, wireless devices, and connectivity tools.",
      },
      {
        badge: "04",
        title: "Bulk Business Order",
        desc: "Higher quantity sourcing, commercial orders, and repeat supply discussion.",
      },
    ],
    []
  );

  const faqs = useMemo(
    () => [
      {
        q: "How fast can I expect a reply?",
        a: "Usually business enquiries ka response jaldi diya jata hai, especially when message clear ho aur phone number diya ho.",
      },
      {
        q: "Can I ask for bulk pricing?",
        a: "Haan, quantity, product type, aur requirement mention karke aap bulk discussion start kar sakte ho.",
      },
      {
        q: "Can I use this form for product sourcing support?",
        a: "Bilkul, ye form product guidance, business enquiry, order follow-up, aur support ke liye use kar sakte hai.",
      },
    ],
    []
  );

  const contactItems = useMemo(
    () => [
      {
        icon: Phone,
        title: "Call us",
        value: "+91 9058042897",
        href: "tel:+919058042897",
      },
      {
        icon: Mail,
        title: "Email us",
        value: "Support@itsaathi.com",
        href: "mailto:Support@itsaathi.com",
      },
      {
        icon: MapPin,
        title: "Corporate office",
        value:
          "PLOT NO. 14A GREEN PALACE NAGLA MOHANLAL 80FT ROAD KALINDI VIHAR AGRA U.P 282006",
      },
      {
        icon: User,
        title: "Best for",
        value:
          "Bulk enquiries, product selection support, repeat orders, and business discussion.",
      },
    ],
    []
  );

  const trustCards = useMemo(
    () => [
      {
        title: "Fast scanning",
        desc: "Important contact details aur form ek hi view me visible hain.",
      },
      {
        title: "Better trust",
        desc: "Real office address, phone aur email page ko stronger credibility dete hain.",
      },
      {
        title: "Clear topic flow",
        desc: "Quick tags aur category cards se inquiry type select karna easy hota hai.",
      },
      {
        title: "Higher conversion",
        desc: "Form fields aur validation ab script ke saath correctly aligned hain.",
      },
    ],
    []
  );

  const process = useMemo(
    () => [
      {
        no: "1",
        title: "Choose topic",
        desc: "Relevant category ya quick tag select karo.",
      },
      {
        no: "2",
        title: "Share details",
        desc: "Requirement, quantity, aur support need clearly likho.",
      },
      {
        no: "3",
        title: "Submit enquiry",
        desc: "Form validation ke baad message safely send hoga.",
      },
      {
        no: "4",
        title: "Team connect",
        desc: "Phone, email, ya business discussion ke through aage communication hota hai.",
      },
    ],
    []
  );

  const quickTags = [
    "CCTV Accessories",
    "Computer Peripherals",
    "WiFi Connectivity",
    "Bulk Business Order",
  ];

  const [activeFaq, setActiveFaq] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [charCount, setCharCount] = useState(0);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [sending, setSending] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    category: "",
    quantity: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    setCharCount(form.message.length);
  }, [form.message]);

  const setTopic = (value) => {
    setSelectedCategory(value);
    setForm((prev) => ({
      ...prev,
      category: value,
      subject: value ? `${value} Inquiry` : "",
    }));
  };

  const handleChange = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(false);
    setError(false);

    if (!form.name || !form.email || !form.phone || !form.category || !form.message) {
      setError(true);
      return;
    }

    setSending(true);

    setTimeout(() => {
      setSending(false);
      setSuccess(true);
      setForm({
        name: "",
        email: "",
        phone: "",
        city: "",
        category: "",
        quantity: "",
        subject: "",
        message: "",
      });
      setSelectedCategory("");
      setCharCount(0);

      setTimeout(() => {
        setSuccess(false);
      }, 4000);
    }, 700);
  };

  return (
    <Layout>
      <div
        id="top"
        className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(13,92,143,0.12),transparent_26%),radial-gradient(circle_at_90%_15%,rgba(16,185,129,0.10),transparent_18%),radial-gradient(circle_at_80%_90%,rgba(245,158,11,0.09),transparent_20%),#f4f8fc] text-slate-900"
      >
        <section className="border-b border-slate-200 bg-[#eef0f2]">
          <div className="mx-auto flex w-[min(100%-24px,1240px)] items-center gap-2 py-3 text-sm font-extrabold uppercase text-slate-600">
            <a href="/" className="hover:text-sky-700">
              Home
            </a>
            <span>/</span>
            <span>Contact Us</span>
          </div>
        </section>

        <main className="mx-auto w-[min(100%-24px,1240px)] pb-24 pt-7">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.04fr)_minmax(0,0.96fr)]">
            <div className="grid gap-5">
              <article className="relative overflow-hidden rounded-[30px] border border-white/80 bg-white/85 p-8 shadow-[0_20px_60px_rgba(14,34,61,0.08)] backdrop-blur-md">
                <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-sky-50 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-sky-700">
                  Contact Bulk Support
                </span>

                <h1 className="max-w-[10ch] text-[clamp(2.3rem,5vw,4.6rem)] font-black leading-[1] tracking-tight">
                  Lets connect for IT CCTV requirements.
                </h1>

                <p className="mt-4 max-w-[64ch] text-base leading-7 text-slate-600">
                  Product enquiry ho, bulk order discussion ho, ya business sourcing support chahiye ho, hamari team se direct connect karein. Clean layout aur clear information se customer jaldi action le pata hai.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  {["Bulk Order Assistance", "Product Guidance", "Business Support"].map(
                    (item) => (
                      <span
                        key={item}
                        className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm"
                      >
                        <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                        {item}
                      </span>
                    )
                  )}
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="#inquiryForm"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-700 px-5 py-3.5 text-sm font-black text-white transition hover:bg-sky-600"
                  >
                    Send Inquiry
                    <ArrowRight size={18} />
                  </a>

                  <a
                    href="tel:+919058042897"
                    className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-3.5 text-sm font-black text-sky-700 transition hover:bg-sky-50"
                  >
                    Call Now
                  </a>
                </div>
              </article>

              <article className="rounded-[30px] border border-white/80 bg-white/85 p-6 shadow-[0_20px_60px_rgba(14,34,61,0.08)] backdrop-blur-md">
                <div className="mb-4">
                  <h2 className="text-2xl font-black text-slate-900">Quick contact</h2>
                  <p className="mt-2 max-w-xl text-slate-500">
                    Phone, email, office address aur direct channels ek hi jagah.
                  </p>
                </div>

                <div className="grid gap-3">
                  {contactItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.title}
                        className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-4 transition hover:-translate-y-0.5 hover:shadow-sm"
                      >
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sky-50 text-sky-700">
                          <Icon size={22} />
                        </div>

                        <div>
                          <strong className="block text-base text-slate-900">
                            {item.title}
                          </strong>

                          {item.href ? (
                            <a
                              href={item.href}
                              className="mt-1 block break-words text-sm text-slate-600 hover:text-sky-700"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="mt-1 text-sm text-slate-600">{item.value}</p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </article>

              <article className="rounded-[30px] border border-white/80 bg-white/85 p-6 shadow-[0_20px_60px_rgba(14,34,61,0.08)] backdrop-blur-md">
                <div className="mb-4">
                  <h3 className="text-2xl font-black text-slate-900">
                    Select enquiry type
                  </h3>
                  <p className="mt-2 text-slate-500">
                    Category choose karne se subject aur inquiry flow jaldi fill ho jayega.
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {categories.map((item) => (
                    <button
                      key={item.title}
                      type="button"
                      onClick={() => setTopic(item.title)}
                      className={`rounded-2xl border p-4 text-left transition ${
                        selectedCategory === item.title
                          ? "border-sky-300 bg-sky-50 shadow-sm"
                          : "border-slate-200 bg-white hover:-translate-y-0.5"
                      }`}
                    >
                      <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-sky-50 font-black text-sky-700">
                        {item.badge}
                      </div>
                      <h4 className="text-lg font-bold text-slate-900">{item.title}</h4>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{item.desc}</p>
                    </button>
                  ))}
                </div>
              </article>

              <article className="rounded-[30px] border border-white/80 bg-white/85 p-6 shadow-[0_20px_60px_rgba(14,34,61,0.08)] backdrop-blur-md">
                <div className="mb-4">
                  <h3 className="text-2xl font-black text-slate-900">Office location</h3>
                  <p className="mt-2 text-slate-500">
                    Need visit reference ya location clarity? Yahan se easily check kar sakte ho.
                  </p>
                </div>

                <div className="aspect-[16/10] overflow-hidden rounded-[20px] border border-slate-200 bg-slate-100">
                  <iframe
                    src="https://www.google.com/maps?q=PLOT%20NO.%2014A%20GREEN%20PALACE%20NAGLA%20MOHANLAL%2080FT%20ROAD%20KALINDI%20VIHAR%20AGRA%20282006&output=embed"
                    loading="lazy"
                    title="IT Saathi office map"
                    className="h-full w-full border-0"
                  />
                </div>
              </article>

              <article className="rounded-[30px] border border-white/80 bg-white/85 p-6 shadow-[0_20px_60px_rgba(14,34,61,0.08)] backdrop-blur-md">
                <div className="mb-4">
                  <h3 className="text-2xl font-black text-slate-900">Common questions</h3>
                  <p className="mt-2 text-slate-500">
                    Buyers ko fast clarity dene ke liye quick FAQs.
                  </p>
                </div>

                <div className="grid gap-3">
                  {faqs.map((item, i) => {
                    const open = i === activeFaq;
                    return (
                      <div
                        key={item.q}
                        className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
                      >
                        <button
                          type="button"
                          onClick={() => setActiveFaq(open ? -1 : i)}
                          className="flex w-full items-center justify-between gap-3 px-4 py-4 text-left font-bold text-slate-900"
                        >
                          <span>{item.q}</span>
                          {open ? (
                            <ChevronUp className="text-sky-700" />
                          ) : (
                            <ChevronDown className="text-sky-700" />
                          )}
                        </button>

                        <div
                          className={`grid transition-all duration-300 ${
                            open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                          }`}
                        >
                          <div className="overflow-hidden px-4 pb-4 text-sm leading-7 text-slate-600">
                            {item.a}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </article>
            </div>

            <aside className="grid gap-5">
              <article className="sticky top-6 grid gap-5 rounded-[30px] border border-white/80 bg-white/85 p-6 shadow-[0_20px_60px_rgba(14,34,61,0.08)] backdrop-blur-md">
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-sky-700">
                    Get in touch
                  </span>
                  <h2 className="mt-4 text-3xl font-black text-slate-900">
                    Send your message
                  </h2>
                  <p className="mt-2 text-slate-500">
                    Structured form, clear inputs, aur instant feedback ke saath better working version.
                  </p>
                </div>

                {success && (
                  <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700">
                    Your inquiry has been captured successfully.
                  </div>
                )}

                {error && (
                  <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
                    Please fill all required fields before submitting.
                  </div>
                )}

                <div className="flex flex-wrap gap-2">
                  {quickTags.map((tag) => (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => setTopic(tag)}
                      className={`rounded-full border px-4 py-2 text-sm font-bold transition ${
                        selectedCategory === tag
                          ? "border-sky-200 bg-sky-50 text-sky-700"
                          : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>

                <form
                  id="inquiryForm"
                  onSubmit={handleSubmit}
                  className="grid gap-4"
                  noValidate
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Full Name">
                      <input
                        value={form.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        type="text"
                        placeholder="Enter your full name"
                        required
                        className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
                      />
                    </Field>

                    <Field label="Email">
                      <input
                        value={form.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        type="email"
                        placeholder="Enter your email"
                        required
                        className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
                      />
                    </Field>

                    <Field label="Phone">
                      <input
                        value={form.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        type="tel"
                        placeholder="Enter your phone number"
                        required
                        className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
                      />
                    </Field>

                    <Field label="City">
                      <input
                        value={form.city}
                        onChange={(e) => handleChange("city", e.target.value)}
                        type="text"
                        placeholder="Enter your city"
                        className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
                      />
                    </Field>

                    <Field label="Category">
                      <select
                        value={form.category}
                        onChange={(e) => setTopic(e.target.value)}
                        required
                        className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
                      >
                        <option value="">Select enquiry category</option>
                        {quickTags.map((item) => (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                    </Field>

                    <Field label="Approx Quantity">
                      <input
                        value={form.quantity}
                        onChange={(e) => handleChange("quantity", e.target.value)}
                        type="text"
                        placeholder="Example 50 pcs"
                        className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
                      />
                    </Field>
                  </div>

                  <Field label="Subject" full>
                    <input
                      value={form.subject}
                      onChange={(e) => handleChange("subject", e.target.value)}
                      type="text"
                      placeholder="Write subject"
                      className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
                    />
                  </Field>

                  <Field label="Message" full>
                    <textarea
                      value={form.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      placeholder="Tell us about your requirement, products, quantity, or support issue..."
                      required
                      className="min-h-40 w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
                    />
                    <div className="mt-2 flex items-center justify-between text-xs font-semibold text-slate-500">
                      <span>Required fields: Name, Email, Phone, Category, Message.</span>
                      <span>{charCount} chars</span>
                    </div>
                  </Field>

                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <p className="max-w-sm text-sm text-slate-500">
                      Laravel Blade me use kar rahe ho to form ke andar csrf add kar do.
                    </p>

                    <button
                      type="submit"
                      disabled={sending}
                      className="inline-flex items-center justify-center gap-2 rounded-2xl bg-sky-700 px-6 py-3.5 text-sm font-black text-white transition hover:bg-sky-600 disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {sending ? "Sending..." : "Send Message"}
                      <Send size={16} />
                    </button>
                  </div>
                </form>
              </article>

              <article className="rounded-[30px] border border-white/80 bg-white/85 p-6 shadow-[0_20px_60px_rgba(14,34,61,0.08)] backdrop-blur-md">
                <div className="mb-4">
                  <h3 className="text-2xl font-black text-slate-900">Why this works</h3>
                  <p className="mt-2 text-slate-500">
                    Page scan fast hota hai aur user ko direct next action milta hai.
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {trustCards.map((item, i) => (
                    <div
                      key={item.title}
                      className="rounded-[20px] border border-slate-200 bg-white p-5 transition hover:-translate-y-1"
                    >
                      <div className="mb-3 flex items-center justify-between">
                        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-sky-50 font-black text-sky-700">
                          {String(i + 1).padStart(2, "0")}
                        </div>
                      </div>
                      <strong className="block text-base text-slate-900">{item.title}</strong>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </article>

              <article className="rounded-[30px] border border-white/80 bg-white/85 p-6 shadow-[0_20px_60px_rgba(14,34,61,0.08)] backdrop-blur-md">
                <div className="mb-4">
                  <h3 className="text-2xl font-black text-slate-900">Simple process</h3>
                  <p className="mt-2 text-slate-500">
                    Business enquiry ko short steps me explain kiya gaya hai.
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {process.map((item) => (
                    <div
                      key={item.no}
                      className="rounded-[20px] border border-slate-200 bg-white p-5"
                    >
                      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-sky-700 to-sky-500 font-black text-white">
                        {item.no}
                      </div>
                      <h4 className="text-lg font-bold text-slate-900">{item.title}</h4>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </article>
            </aside>
          </div>
        </main>

        <div className="fixed bottom-4 left-3 right-3 z-50 flex gap-2 rounded-[20px] border border-white/80 bg-white/92 p-2 shadow-[0_20px_60px_rgba(14,34,61,0.08)] backdrop-blur-md md:hidden">
          <a
            href="tel:+918006033345"
            className="flex-1 rounded-2xl bg-sky-700 py-3 text-center text-sm font-black text-white"
          >
            Call Now
          </a>
          <a
            href="mailto:Support@itsaathi.com"
            className="flex-1 rounded-2xl border border-slate-200 bg-white py-3 text-center text-sm font-black text-sky-700"
          >
            Email Us
          </a>
        </div>
      </div>
    </Layout>
  );
}