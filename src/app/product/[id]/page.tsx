import Image from "next/image";
import { products } from "@/data/products";
import { formatINR } from "@/utils/currency";
import AddToCartButton from "@/components/actions/AddToCartButton";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function ProductDetailPage({ params }: Props) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);
  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="relative aspect-[4/3] bg-black/5 dark:bg-white/5 rounded-lg overflow-hidden">
        <Image src={product.image} alt={product.title} fill className="object-cover" />
      </div>
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">{product.title}</h1>
        <div className="text-lg font-semibold">{formatINR(product.price)}</div>
        <p className="text-black/70 dark:text-white/70">{product.description}</p>
        <AddToCartButton product={product} />
      </div>
    </div>
  );
}


