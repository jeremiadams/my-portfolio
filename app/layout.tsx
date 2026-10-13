import type { Metadata } from "next";
import { Climate_Crisis, Instrument_Sans } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import StickerBadge from "@/components/StickerBadge";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";

const display = Climate_Crisis({
  variable: "--font-display",
  subsets: ["latin"],
});

const sans = Instrument_Sans({
  variable: "--font-sans-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.jeremicoded.com"),
  title: {
    default: "Jeremiah Adamu — Frontend engineer for AI products",
    template: "%s — Jeremiah Adamu",
  },
  description:
    "Frontend-focused engineer who goes full-stack on AI-driven products. 6+ years of React and Next.js; lead engineer on an AI market-research platform serving brands across 6+ African markets.",
  openGraph: {
    title: "Jeremiah Adamu — Frontend engineer for AI products",
    description:
      "Frontend-focused engineer who goes full-stack on AI-driven products.",
    url: "https://www.jeremicoded.com",
    siteName: "jeremi.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} antialiased`}>
      <body>
        <Preloader />
        <Nav />
        <StickerBadge />
        {children}
        <Footer />
      </body>
    </html>
  );
}
