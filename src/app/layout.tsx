import type { Metadata } from "next"; // Types for Next.js metadata configuration
import "./globals.scss"; // Global SCSS styles with resets, variables, and base elements
import Footer from "../components/Footer/Footer"; // Global Footer component
import { Inter, Cardo } from 'next/font/google' // Google Fonts loaded via Next.js (Inter and Cardo)

/**
 * 🔤 Loads global Google Fonts using Next.js font optimization:
 * - `Inter`: a modern, clean sans-serif used for body text and UI
 * - `Cardo`: a classic serif font, ideal for headings or highlights
 */
const inter = Inter({
    subsets: ['latin'],
})

const cardo = Cardo({
    subsets: ['latin'],
    weight: "400",
})

/**
 * 🧾 Global metadata for the entire application
 * - Title: shown in browser tabs and search results
 * - Description: helps SEO and social sharing
 */
export const metadata: Metadata = {
    title: "Urbanly. Your city within reach",
    description: "Your city within reach",
};

/**
 * 🧩 Root layout of the application
 * - Wraps all pages with HTML structure, fonts, and persistent components
 * - Includes global footer
 */
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
