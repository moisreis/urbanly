import type { Metadata } from "next";
import "./globals.scss";

import { Inter, Cardo } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
})

const cardo = Cardo({
  subsets: ['latin'],
  weight: "400",
})

import Footer from "../components/Footer/Footer"

export const metadata: Metadata = {
  title: "Urbanly. Sua cidade ao seu alcance",
  description: "Sua cidade ao seu alcance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.className} ${cardo.className}`}>
    <body>
        {children}
      <Footer />
      </body>
    </html>
  );
}
