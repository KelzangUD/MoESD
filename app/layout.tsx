import type { Metadata } from "next";
import { Merriweather, Open_Sans } from "next/font/google";
import "./globals.css";
import LoadingProvider from "./loading-provider";
import Banner from "./components/Banner";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "MoESD",
  description: "Revamp MoESD Website",
};

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-merriweather",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600"], // Regular and Semi-Bold
  variable: "--font-open-sans", // Define a CSS variable name
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${merriweather.className} ${openSans.variable}`}
    >
      <body>
        <LoadingProvider>
          <Banner />
          <Navigation />
          {children}
          <Footer />
        </LoadingProvider>
      </body>
    </html>
  );
}
