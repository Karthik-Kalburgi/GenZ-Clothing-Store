import ProductCard from "@/components/ProductCard";
import { Product } from "@/data/products";

type Props = {
  products: Product[];
};

export default function ProductGrid({ products }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}


