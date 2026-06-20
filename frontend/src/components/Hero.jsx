export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-teal-900 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 md:grid-cols-2 md:items-center">
        <div>
          <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm">
            Fast Delivery • COD Available • Secure Checkout
          </span>
          <h2 className="mt-6 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
            Trusted Electrical Products Wholesaler For Every Need
          </h2>
          <p className="mt-5 max-w-xl text-lg text-slate-200">
            Buy IT accessories, cables, CCTV tools, adapters, and computer peripherals with dealer-friendly pricing and quick support.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#featured"
              className="rounded-2xl bg-teal-500 px-6 py-3 font-semibold text-white transition hover:bg-teal-400"
            >
              Explore Products
            </a>
            <a
              href="https://wa.me/919058042897"
              className="rounded-2xl border border-white/20 bg-white/10 px-6 py-3 font-semibold text-white transition hover:bg-white/20"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {[
            "Computer Cables",
            "CCTV Accessories",
            "USB Devices",
            "Repair Tools",
          ].map((item) => (
            <div key={item} className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur">
              <div className="mb-10 h-20 rounded-2xl bg-white/10"></div>
              <h3 className="text-lg font-bold">{item}</h3>
              <p className="mt-2 text-sm text-slate-300">
                Wholesale-ready products with better margins.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}