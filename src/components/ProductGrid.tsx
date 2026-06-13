import ProductCard from "@/components/ProductCard";
import { Product } from "@/types/product";

interface ProductGridProps {
  products: Product[];
  onProductClick: (product: Product) => void;
}

export default function ProductGrid({
  products,
  onProductClick,
}: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="py-24 text-center">
        <p className="text-4xl">🔍</p>
        <p className="mt-3 text-sm text-muted">
          Geen producten gevonden in deze categorie.
        </p>
      </div>
    );
  }

  return (
    <section id="collectie" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <p className="text-xs font-bold tracking-[0.2em] text-accent-purple uppercase">
            Collectie
          </p>
          <h2 className="mt-1 text-lg font-bold tracking-tight sm:text-xl">
            <span className="text-gradient">{products.length}</span>{" "}
            {products.length === 1 ? "item" : "items"} ready to go
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onClick={() => onProductClick(product)}
          />
        ))}
      </div>
    </section>
  );
}
