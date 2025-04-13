import type { Metadata } from "next";
import { Inter, Poppins, Montserrat } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins"
});
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat"
});

export const metadata: Metadata = {
  title: "Electrolysis Hair Removal Dubai - Permanent Solutions",
  description: "Electrolysis Hair Removal Dubai - Our Dubai clinic utilizes the latest electrolysis technology to provide safe and effective treatments for all skin tones and hair types. Achieve lasting results you can trust.",
  verification: {
    google: "Y37SsRDGPX-eDE6kBjW5eG1dL3WL3r962lcLw9VIhLo"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="Y37SsRDGPX-eDE6kBjW5eG1dL3WL3r962lcLw9VIhLo" />
      </head>
      <body className={`${inter.variable} ${poppins.variable} ${montserrat.variable} font-sans`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
