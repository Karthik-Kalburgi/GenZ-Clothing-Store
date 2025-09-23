"use client";

import { useCart } from "@/context/CartContext";
import type { Product } from "@/data/products";

export default function AddToCartButton({ product }: { product: Product }) {
  const { addToCart } = useCart();
  return (
    <button
      onClick={() => addToCart(product, 1)}
      className="px-4 py-2 rounded-md bg-black text-white dark:bg-white dark:text-black text-sm font-medium"
    >
      Add to cart
    </button>
  );
}


