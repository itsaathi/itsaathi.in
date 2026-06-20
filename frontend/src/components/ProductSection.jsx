import ProductCard from "./ProductCard";
import SectionTitle from "./SectionTitle";

export default function ProductSection({ id, title, subtitle, products }) {
  return (
    <section id={id} className="mx-auto max-w-7xl px-4 py-16">
      <SectionTitle title={title} subtitle={subtitle} />
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}