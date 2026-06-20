import Layout from "../components/Layout";
import { allProducts } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Shop() {
  return (
    <Layout>
      <section className="mx-auto max-w-[1280px] px-4 py-14 lg:px-8">
        <div className="mb-10">
          <h1 className="text-4xl font-black text-slate-900">Shop All Products</h1>
          <p className="mt-3 text-slate-600">
            Browse IT accessories, cables, CCTV tools, adapters, and networking products.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {allProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </Layout>
  );
}