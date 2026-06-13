import { ProductCategory } from "@/types/product";

export const categoryColors: Record<
  ProductCategory,
  { accent: string; glow: string; badge: string; label: string }
> = {
  horloges: {
    accent: "text-accent-cyan",
    glow: "group-hover:shadow-[0_0_24px_rgba(34,211,238,0.15)]",
    badge: "border-accent-cyan/40 bg-accent-cyan/10 text-accent-cyan",
    label: "text-accent-cyan",
  },
  petten: {
    accent: "text-accent-coral",
    glow: "group-hover:shadow-[0_0_24px_rgba(251,113,133,0.15)]",
    badge: "border-accent-coral/40 bg-accent-coral/10 text-accent-coral",
    label: "text-accent-coral",
  },
};

export const navCategoryStyles: Record<
  string,
  { active: string; idle: string }
> = {
  all: {
    active: "bg-gradient-accent text-white shadow-lg shadow-accent-purple/25",
    idle: "hover:text-accent-purple",
  },
  horloges: {
    active: "bg-accent-cyan text-white shadow-lg shadow-accent-cyan/25",
    idle: "hover:text-accent-cyan",
  },
  petten: {
    active: "bg-accent-coral text-white shadow-lg shadow-accent-coral/25",
    idle: "hover:text-accent-coral",
  },
};
