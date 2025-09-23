"use client";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { formatINR } from "@/utils/currency";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  const { addToCart } = useCart();
  return (
    <div className="group rounded-lg border border-black/10 dark:border-white/10 overflow-hidden bg-white dark:bg-black shadow-sm hover:shadow-md transition-shadow">
      <Link href={`/product/${product.id}`} className="block">
        <div className="relative aspect-[4/3] bg-black/5 dark:bg-white/5">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 300px, (min-width: 640px) 33vw, 100vw"
          />
        </div>
      </Link>
      <div className="p-4 flex flex-col gap-2">
        <Link href={`/product/${product.id}`} className="text-sm font-semibold line-clamp-2 min-h-[2.5rem] hover:underline underline-offset-4">
          {product.title}
        </Link>
        <p className="text-xs text-black/60 dark:text-white/60 line-clamp-2 min-h-[2rem]">
          {product.description}
        </p>
        <div className="flex items-center justify-between mt-2">
          <span className="text-base font-semibold">{formatINR(product.price)}</span>
          <button
            onClick={() => addToCart(product, 1)}
            className="px-3 py-1.5 rounded-md text-sm font-medium bg-black text-white dark:bg-white dark:text-black hover:opacity-90"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}


