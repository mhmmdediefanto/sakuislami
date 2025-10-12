import type { Metadata } from "next";
import { Quicksand, Noto_Naskh_Arabic } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NextTopLoader from "nextjs-toploader";

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
});

const noto = Noto_Naskh_Arabic({
  variable: "--font-noto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Saku Islami Digital Indonesia",
  description:
    "Saku Islami Digital Indonesia adalah platform yang membantu Anda untuk mempelajari dan memahami Al Quran dengan cara yang lebih efektif dan efisien.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${quicksand.variable} ${noto.variable} antialiased`}>
        <NextTopLoader color="#10B981"/>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
