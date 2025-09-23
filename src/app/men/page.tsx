import ProductGrid from "@/components/ProductGrid";
import { menProducts } from "@/data/products";

export const metadata = {
  title: "Men's Clothing | E-Comm",
  description: "Shop men's t-shirts, hoodies, jeans, and more.",
};

export default function MenPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold tracking-tight">Men's Clothing</h1>
      <ProductGrid products={menProducts} />
    </div>
  );
}


