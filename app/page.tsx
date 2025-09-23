import Link from "next/link";
import ProductGrid from "@/components/ProductGrid";
import { menProducts, womenProducts } from "@/data/products";

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
          Discover Your Style
        </h1>
        <p className="mt-2 text-black/70 dark:text-white/70">
          Shop curated clothing for men and women.
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <Link href="/men" className="px-4 py-2 rounded-md bg-black text-white dark:bg-white dark:text-black text-sm font-medium">
            Shop Men
          </Link>
          <Link href="/women" className="px-4 py-2 rounded-md bg-black/80 text-white dark:bg-white/80 dark:text-black text-sm font-medium">
            Shop Women
          </Link>
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Trending for Men</h2>
          <Link href="/men" className="text-sm underline underline-offset-4">View all</Link>
        </div>
        <ProductGrid products={menProducts} />
      </section>

      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Trending for Women</h2>
          <Link href="/women" className="text-sm underline underline-offset-4">View all</Link>
        </div>
        <ProductGrid products={womenProducts} />
      </section>
    </div>
  );
}
