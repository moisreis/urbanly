import type { Metadata } from "next";
import "./globals.css";

import Header from "../components/Header/Header"
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
    <html lang="pt-BR">
      <body>
      <Header />
        {children}
      <Footer />
      </body>
    </html>
  );
}
