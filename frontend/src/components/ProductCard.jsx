export default function ProductCard({ product }) {
  return (
    <div className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="overflow-hidden bg-slate-100">
        <img
          src={product.image}
          alt={product.name}
          className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      <div className="p-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-teal-600">{product.sku}</p>
        <h3 className="mt-2 line-clamp-2 min-h-[56px] text-lg font-bold text-slate-900">
          {product.name}
        </h3>

        <div className="mt-4 flex items-end gap-3">
          <span className="text-2xl font-black text-slate-900">₹ {product.price}</span>
          <span className="text-sm text-slate-400 line-through">₹ {product.oldPrice}</span>
        </div>

        <button className="mt-5 w-full rounded-2xl bg-slate-900 px-4 py-3 font-semibold text-white transition hover:bg-teal-600">
          Add to Cart
        </button>
      </div>
    </div>
  );
}