import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { AccessibilityProvider } from "@/contexts/AccessibilityContext";
import Navbar from "@/components/home/navbar";
import EmergencyBar from "@/components/EmergencyBar";
import AccessibilityMenu from "@/components/AccessibilityMenu";
import FooterSection from "./components/home/footerSection";
import { CartProvider } from "./contexts/CartContext";
const outfit = Outfit({
  variable: "--font-geist-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Lumina - AI-Powered Mental Health Support",
  description: "Accessible mental health support for everyone. Get 24/7 AI assistance, connect with licensed therapists, access resources, and track your wellness journey with Lumina.",
  keywords: ["mental health", "therapy", "AI counseling", "depression support", "anxiety help", "mental wellness", "online therapy", "student mental health", "crisis support"],
  authors: [{ name: "Lumina Mental Health Platform" }],
  creator: "Lumina",
  publisher: "Lumina",
  applicationName: "Lumina",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lumina-mental-health.com",
    title: "Lumina - AI-Powered Mental Health Support",
    description: "Accessible mental health support for everyone. Get 24/7 AI assistance, connect with licensed therapists, and track your wellness journey.",
    siteName: "Lumina",
    images: [{
      url: "/assets/logo.png",
      width: 1200,
      height: 630,
      alt: "Lumina Mental Health Platform"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Lumina - AI-Powered Mental Health Support",
    description: "Accessible mental health support for everyone. 24/7 AI assistance and licensed therapists.",
    images: ["/assets/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#3B82F6" />
        <link rel="icon" href="/assets/logo.png" />
        <link href="https://fonts.googleapis.com/css2?family=OpenDyslexic&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${outfit.variable} antialiased`}
        role="document"
      >
        <AccessibilityProvider>
              <EmergencyBar/>
    <AccessibilityMenu/>
    <Navbar/>
    <div className="mt-24">
      <CartProvider>
          {children}
          </CartProvider>
          </div>
            {/* footer */}
    <FooterSection />
        </AccessibilityProvider>
      </body>
    </html>
  );
}
