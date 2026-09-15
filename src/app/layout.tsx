import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "The humanEaze — Making Your Path Easier",
    template: "%s | The humanEaze",
  },
  description:
    "The humanEaze is a boutique HR consulting firm that connects people, process, and technology — making your path easier.",
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "The humanEaze",
    title: "The humanEaze — Making Your Path Easier",
    description:
      "Boutique HR consulting that connects people, process, and technology — making your path easier.",
  },
  twitter: {
    card: "summary_large_image",
    title: "The humanEaze — Making Your Path Easier",
    description:
      "Boutique HR consulting that connects people, process, and technology.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${lora.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
