"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { formatINR } from "@/utils/currency";

export default function CartPage() {
  const { items, updateQuantity, removeFromCart, clearCart, subtotal, count } = useCart();
  const delivery = items.length > 0 ? 199 : 0;
  const grandTotal = subtotal + delivery;

  if (items.length === 0) {
    return (
      <div className="text-center space-y-4">
        <h1 className="text-2xl font-bold">Your cart is empty</h1>
        <p className="text-black/70 dark:text-white/70">Browse products to add items to your cart.</p>
        <div className="flex items-center justify-center gap-3">
          <Link href="/men" className="px-4 py-2 rounded-md bg-black text-white dark:bg-white dark:text-black text-sm font-medium">Shop Men</Link>
          <Link href="/women" className="px-4 py-2 rounded-md bg-black/80 text-white dark:bg-white/80 dark:text-black text-sm font-medium">Shop Women</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-4">
        {items.map(({ product, quantity }) => (
          <div key={product.id} className="flex gap-4 border rounded-lg p-4 border-black/10 dark:border-white/10">
            <div className="relative w-28 h-20 shrink-0 bg-black/5 dark:bg-white/5 rounded-md overflow-hidden">
              <Image src={product.image} alt={product.title} fill className="object-cover" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-medium line-clamp-1">{product.title}</h3>
                  <p className="text-sm text-black/60 dark:text-white/60 line-clamp-2">{product.description}</p>
                </div>
                <button onClick={() => removeFromCart(product.id)} className="text-sm underline underline-offset-4">Remove</button>
              </div>
              <div className="mt-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <button onClick={() => updateQuantity(product.id, quantity - 1)} className="px-2 py-1 rounded border">-</button>
                  <span className="w-8 text-center">{quantity}</span>
                  <button onClick={() => updateQuantity(product.id, quantity + 1)} className="px-2 py-1 rounded border">+</button>
                </div>
                <div className="font-semibold">
                  {formatINR(product.price * quantity)}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <aside className="space-y-4 border rounded-lg p-4 h-fit border-black/10 dark:border-white/10">
        <h2 className="text-lg font-semibold">Order Summary</h2>
        <div className="flex items-center justify-between text-sm">
          <span>Items ({count})</span>
          <span>{formatINR(subtotal)}</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span>Delivery</span>
          <span>{formatINR(delivery)}</span>
        </div>
        <div className="flex items-center justify-between text-base font-semibold">
          <span>Total</span>
          <span>{formatINR(grandTotal)}</span>
        </div>
        <button className="w-full px-4 py-2 rounded-md bg-black text-white dark:bg-white dark:text-black text-sm font-medium">Checkout</button>
        <button onClick={clearCart} className="w-full px-4 py-2 rounded-md bg-black/80 text-white dark:bg-white/80 dark:text-black text-sm font-medium">Clear cart</button>
      </aside>
    </div>
  );
}


