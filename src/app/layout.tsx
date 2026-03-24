import type { Metadata } from "next";
import { Lato, Teko } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const lato = Lato({
  weight: ['300', '400', '700', '900'],
  subsets: ["latin"],
  variable: "--font-lato",
});

const teko = Teko({
  weight: ['400', '600', '700'],
  subsets: ["latin"],
  variable: "--font-teko",
});

export const metadata: Metadata = {
  title: {
    default: "Freedom Asphalt | Sealcoating & Asphalt Maintenance in Raleigh, NC",
    template: "%s | Freedom Asphalt",
  },
  description: "Professional asphalt maintenance, sealcoating, crack repair, and striping services in Raleigh, NC and surrounding areas. Your parking lot is the first impression your clients see.",
  keywords: ["asphalt maintenance", "sealcoating", "crack repair", "striping", "parking lot maintenance", "Raleigh NC", "asphalt repair"],
  authors: [{ name: "Freedom Asphalt Maintenance & Repair, LLC" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Freedom Asphalt Maintenance & Repair, LLC",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lato.variable} ${teko.variable} font-sans antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
