import Image from "next/image";
import {
  CookingPot,
  Boxes,
  UtensilsCrossed,
  Lamp,
  SprayCan,
  Home,
} from "lucide-react";
import type { ProductCategory } from "@/data/product-categories";
import { PlaceholderVisual } from "@/components/ui/PlaceholderVisual";

const categoryIcons = {
  "kitchen-essentials": CookingPot,
  "home-organization": Boxes,
  "dining-tableware": UtensilsCrossed,
  "home-accessories": Lamp,
  "household-utility": SprayCan,
  "everyday-living": Home,
} as const;

/** Visual card for one product category. Uses a real image when provided. */
export function CategoryCard({ category }: { category: ProductCategory }) {
  const Icon =
    categoryIcons[category.id as keyof typeof categoryIcons] ?? Home;

  return (
    <article className="group overflow-hidden rounded-card border border-line bg-white transition-all duration-200 hover:border-brand/30 hover:shadow-soft">
      <div className="relative aspect-[4/3] overflow-hidden">
        {category.image ? (
          <Image
            src={category.image}
            alt={category.imageAlt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />
        ) : (
          <PlaceholderVisual icon={Icon} />
        )}
      </div>
      <div className="p-6">
        <h3 className="font-display text-lg font-bold text-ink">
          {category.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          {category.description}
        </p>
      </div>
    </article>
  );
}
