import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

const title = "Business Process Outsourcing | Improx Technologies";
const description =
  "Improx Technologies runs workflow automation, back-office and finance, contact center and IT operations so your business can focus on growth.";
const shareImage =
  "https://images.unsplash.com/photo-1560264280-88b68371db39?auto=format&fit=crop&w=1200&h=630&q=80";

export const metadata: Metadata = {
  title,
  description,
  authors: [{ name: "Improx Technologies" }],
  openGraph: {
    title,
    description,
    type: "website",
    images: [{ url: shareImage, width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title, description, images: [shareImage] },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#354B40",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={manrope.variable}>
      <body>{children}</body>
    </html>
  );
}
