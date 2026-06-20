const items = [
  "Fast Delivery",
  "COD Available",
  "Secure Checkout",
  "Online Payment",
];

export default function TrustBar() {
  return (
    <section className="border-y border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-4 px-4 py-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <div
            key={item}
            className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-center font-semibold text-slate-800"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}