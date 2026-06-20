export default function CTASection() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-4 py-16">
      <div className="rounded-[32px] bg-slate-900 px-6 py-12 text-white sm:px-10">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-300">
              Business Inquiry
            </p>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              Need bulk pricing or dealer support?
            </h2>
            <p className="mt-4 max-w-xl text-slate-300">
              Contact our team for quotation, stock confirmation, and reseller-focused product support.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row md:justify-end">
            <a
              href="https://wa.me/919058042897"
              className="rounded-2xl bg-teal-500 px-6 py-3 text-center font-semibold text-white hover:bg-teal-400"
            >
              WhatsApp Now
            </a>
            <a
              href="mailto:Support@itsaathi.com"
              className="rounded-2xl border border-white/20 bg-white/10 px-6 py-3 text-center font-semibold text-white hover:bg-white/20"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}