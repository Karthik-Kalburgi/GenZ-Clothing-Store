import ProductGrid from "@/components/ProductGrid";
import { womenProducts } from "@/data/products";

export const metadata = {
  title: "Women's Clothing | E-Comm",
  description: "Shop women's dresses, blouses, jeans, and more.",
};

export default function WomenPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold tracking-tight">Women's Clothing</h1>
      <ProductGrid products={womenProducts} />
    </div>
  );
}


