import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";
import { AuthUIProvider } from "@/context/AuthUIContext";
import LoginModal from "@/components/auth/LoginModal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
	title: {
		default: "GenZ Clothing Store",
		template: "%s | GenZ Clothing"
	},
	description: "Trendy apparel for Gen Z. Shop the latest fits for men and women.",
	applicationName: "GenZ Clothing",
	authors: [{ name: "GenZ Team" }],
	keywords: [
		"genz",
		"clothing",
		"fashion",
		"streetwear",
		"ecommerce",
		"shop"
	],
	metadataBase: new URL("https://example.com"),
	openGraph: {
		title: "GenZ Clothing Store",
		description:
			"Trendy apparel for Gen Z. Shop the latest fits for men and women.",
		type: "website",
		url: "/",
		images: [
			{
				url: "/og-image.png",
				width: 1200,
				height: 630,
				alt: "GenZ Clothing"
			}
		]
	},
	twitter: {
		card: "summary_large_image",
		title: "GenZ Clothing Store",
		description:
			"Trendy apparel for Gen Z. Shop the latest fits for men and women.",
		images: ["/og-image.png"]
	},
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon.ico",
		apple: "/apple-touch-icon.png"
	},
	themeColor: "#111827",
	viewport: {
		width: "device-width",
		initialScale: 1,
		maximumScale: 1,
		userScalable: false
	}
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AuthUIProvider>
          <CartProvider>
            <Navbar />
            <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
              {children}
            </main>
            <Footer />
            <LoginModal />
          </CartProvider>
        </AuthUIProvider>
      </body>
    </html>
  );
}
