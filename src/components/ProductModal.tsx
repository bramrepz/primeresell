"use client";

import { useEffect } from "react";
import Image from "next/image";
import { categoryColors } from "@/lib/category-colors";
import { buildWhatsAppUrl, formatPrice } from "@/lib/whatsapp";
import { Product } from "@/types/product";

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  useEffect(() => {
    if (!product) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [product, onClose]);

  if (!product) return null;

  const whatsAppUrl = buildWhatsAppUrl(product);
  const isUnique = product.status === "uniek";
  const colors = categoryColors[product.category];

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center sm:items-center sm:p-4 animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="absolute inset-0 bg-overlay backdrop-blur-md"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative z-10 flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-t-3xl border border-border bg-surface sm:max-h-[90vh] sm:rounded-3xl animate-slide-up">
        <div className="h-1 w-full bg-gradient-to-r from-accent-purple via-accent-cyan to-accent-coral" />

        <button
          onClick={onClose}
          className="absolute top-5 right-4 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface-elevated text-muted transition-colors hover:border-accent-coral/50 hover:text-accent-coral"
          aria-label="Sluiten"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>

        <div className="overflow-y-auto">
          <div className="grid sm:grid-cols-2">
            <div className="relative aspect-square bg-surface-elevated sm:aspect-auto sm:min-h-[400px]">
              <Image
                src={product.images[0]}
                alt={`${product.brand} ${product.title}`}
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>

            <div className="flex flex-col p-6 sm:p-8">
              <div className="flex flex-wrap gap-2">
                <span
                  className={`inline-flex rounded-full px-3 py-1 text-[10px] font-bold tracking-wide uppercase ${
                    isUnique
                      ? "border border-accent-amber/40 bg-accent-amber/15 text-accent-amber"
                      : "border border-accent-green/40 bg-accent-green/15 text-accent-green"
                  }`}
                >
                  {product.statusLabel}
                </span>
                <span
                  className={`inline-flex rounded-full border px-3 py-1 text-[10px] font-bold uppercase ${colors.badge}`}
                >
                  {product.category === "horloges" ? "⌚ Horloge" : "🧢 Pet"}
                </span>
              </div>

              <p
                className={`mt-4 text-xs font-bold tracking-[0.15em] uppercase ${colors.label}`}
              >
                {product.brand}
              </p>
              <h2
                id="modal-title"
                className="mt-2 text-xl font-bold leading-snug tracking-tight sm:text-2xl"
              >
                {product.title}
              </h2>
              <p className={`mt-4 text-2xl font-bold tracking-wide ${colors.accent}`}>
                {formatPrice(product.price)}
              </p>

              <p className="mt-5 text-sm leading-relaxed text-muted">
                {product.description}
              </p>

              {product.details.length > 0 && (
                <ul className="mt-6 space-y-2.5 border-t border-border pt-6">
                  {product.details.map((detail) => (
                    <li
                      key={detail}
                      className="flex items-start gap-2.5 text-sm text-muted"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-accent-purple to-accent-cyan" />
                      {detail}
                    </li>
                  ))}
                </ul>
              )}

              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-4 text-sm font-bold tracking-wide text-white shadow-lg shadow-[#25D366]/25 transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <WhatsAppIcon />
                Nu Kopen via WhatsApp
              </a>
            </div>
          </div>

          {product.images.length > 1 && (
            <div className="border-t border-border p-4 sm:p-6">
              <p className="mb-3 text-xs font-bold tracking-[0.15em] text-accent-purple uppercase">
                Meer foto&apos;s
              </p>
              <div className="flex gap-3 overflow-x-auto pb-1">
                {product.images.slice(1).map((image, index) => (
                  <div
                    key={image}
                    className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl border border-border transition-colors hover:border-accent-cyan/50 sm:h-28 sm:w-28"
                  >
                    <Image
                      src={image}
                      alt={`${product.title} — foto ${index + 2}`}
                      fill
                      sizes="112px"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.881 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
