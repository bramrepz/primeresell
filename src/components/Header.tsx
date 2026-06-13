"use client";

import ThemeToggle from "@/components/ThemeToggle";
import { navCategoryStyles } from "@/lib/category-colors";
import { Category } from "@/types/product";

const categories: { id: Category; label: string; emoji?: string }[] = [
  { id: "all", label: "Alles" },
  { id: "horloges", label: "Horloges", emoji: "⌚" },
  { id: "petten", label: "Petten", emoji: "🧢" },
];

interface HeaderProps {
  activeCategory: Category;
  onCategoryChange: (category: Category) => void;
}

export default function Header({
  activeCategory,
  onCategoryChange,
}: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 sm:gap-4 sm:px-6 lg:px-8">
        <div className="flex min-w-0 items-center gap-2 sm:gap-3">
          <a href="#" className="shrink-0">
            <span className="text-sm font-bold tracking-[0.2em] sm:text-base">
              <span className="text-gradient">PRIME</span>{" "}
              <span className="text-foreground">RESELL</span>
            </span>
          </a>
          <span className="hidden items-center gap-1.5 rounded-full border border-accent-green/30 bg-accent-green/10 px-2.5 py-1 text-[10px] font-semibold text-accent-green sm:inline-flex">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-green animate-pulse-glow" />
            Op voorraad in NL
          </span>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <nav className="flex items-center gap-1 sm:gap-2">
            {categories.map((cat) => {
              const styles = navCategoryStyles[cat.id];
              const isActive = activeCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => onCategoryChange(cat.id)}
                  className={`rounded-full px-2.5 py-1.5 text-xs font-semibold transition-all sm:px-4 sm:py-2 sm:text-sm ${
                    isActive
                      ? styles.active
                      : `text-muted ${styles.idle}`
                  }`}
                >
                  {cat.emoji && (
                    <span className="mr-1 hidden sm:inline">{cat.emoji}</span>
                  )}
                  {cat.label}
                </button>
              );
            })}
          </nav>
          <ThemeToggle />
        </div>
      </div>

      <div className="flex justify-center border-t border-border px-4 py-2 sm:hidden">
        <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold text-accent-green">
          <span className="h-1.5 w-1.5 rounded-full bg-accent-green animate-pulse-glow" />
          Op voorraad in NL
        </span>
      </div>
    </header>
  );
}
