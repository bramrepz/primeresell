import Image from "next/image";
import { categoryColors } from "@/lib/category-colors";
import { formatPrice } from "@/lib/whatsapp";
import { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

export default function ProductCard({ product, onClick }: ProductCardProps) {
  const isUnique = product.status === "uniek";
  const colors = categoryColors[product.category];

  return (
    <button
      onClick={onClick}
      className={`group w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-purple/50 ${colors.glow}`}
    >
      <article className="overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 group-hover:-translate-y-1 group-hover:border-foreground/15">
        <div className="relative aspect-square overflow-hidden bg-surface-elevated">
          <Image
            src={product.images[0]}
            alt={`${product.brand} ${product.title}`}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          <span
            className={`absolute top-3 left-3 rounded-full px-2.5 py-1 text-[10px] font-bold tracking-wide uppercase backdrop-blur-sm ${
              isUnique
                ? "border border-accent-amber/50 bg-accent-amber/20 text-accent-amber"
                : "border border-accent-green/40 bg-accent-green/15 text-accent-green"
            }`}
          >
            {product.statusLabel}
          </span>

          <span
            className={`absolute top-3 right-3 rounded-full border px-2 py-0.5 text-[10px] font-semibold backdrop-blur-sm ${colors.badge}`}
          >
            {product.category === "horloges" ? "⌚" : "🧢"}
          </span>
        </div>

        <div className="p-4">
          <p
            className={`text-[11px] font-bold tracking-[0.12em] uppercase ${colors.label}`}
          >
            {product.brand}
          </p>
          <h3 className="mt-1 line-clamp-2 text-sm font-medium leading-snug text-foreground">
            {product.title}
          </h3>
          <p className={`mt-3 text-base font-bold tracking-wide ${colors.accent}`}>
            {formatPrice(product.price)}
          </p>
        </div>
      </article>
    </button>
  );
}
