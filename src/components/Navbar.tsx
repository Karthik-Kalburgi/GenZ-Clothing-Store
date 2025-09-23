"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { useAuthUI } from "@/context/AuthUIContext";

const navLinkBase =
  "px-4 py-2 rounded-md text-sm font-medium transition-colors hover:bg-black/5 dark:hover:bg-white/10";

export function Navbar() {
  const pathname = usePathname();
  const { count } = useCart();
  const { open } = useAuthUI();

  const linkClass = (href: string) =>
    `${navLinkBase} ${pathname === href ? "bg-black/10 dark:bg-white/20" : ""}`;

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b border-black/10 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          E-Comm
        </Link>
        <nav className="flex items-center gap-1">
          <Link href="/" className={linkClass("/")}>Home</Link>
          <Link href="/men" className={linkClass("/men")}>
            Men
          </Link>
          <Link href="/women" className={linkClass("/women")}>
            Women
          </Link>
          <button onClick={open} className={navLinkBase}>Login</button>
          <Link href="/admin" className={linkClass("/admin")}>
            Admin
          </Link>
          <form action="/api/logout" method="post" onSubmit={(e) => {
            // let the server clear cookies then show login modal
            setTimeout(() => open(), 300);
          }}>
            <button className={navLinkBase} type="submit">Logout</button>
          </form>
          <Link href="/cart" className={linkClass("/cart")}>
            Cart{count > 0 ? ` (${count})` : ""}
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;


