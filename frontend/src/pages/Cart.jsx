import Layout from "../components/Layout";
import { allProducts } from "../data/products";

export default function Cart() {
  const cartItems = allProducts.slice(0, 2);
  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <Layout>
      <section className="mx-auto max-w-[1280px] px-4 py-14 lg:px-8">
        <h1 className="text-4xl font-black text-slate-900">Cart</h1>
        <p className="mt-3 text-slate-600">
          Review selected products before checkout or inquiry.
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.7fr_1fr]">
          <div className="space-y-5">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:flex-row"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-32 w-full rounded-2xl object-cover sm:w-32"
                />
                <div className="flex-1">
                  <h3 className="text-xl font-black text-slate-900">{item.name}</h3>
                  <p className="mt-2 text-slate-500">{item.category}</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-black text-slate-900">₹ {item.price}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-black text-slate-900">Order Summary</h2>
            <div className="mt-6 flex items-center justify-between text-slate-600">
              <span>Subtotal</span>
              <span>₹ {subtotal}</span>
            </div>
            <button className="mt-6 w-full rounded-2xl bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-sky-600">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
}