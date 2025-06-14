import type {Metadata} from "next"; // Types for Next.js metadata configuration
import "./globals.scss"; // Global SCSS styles with resets, variables, and base elements
import {Footer} from "@/components/Footer/Footer"; // Global Footer component
import Button from "@/components/Button/Button";
import {Inter, Cardo} from 'next/font/google' // Google Fonts loaded via Next.js (Inter and Cardo)

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
        <Footer
            navigation={
                <>
                    <Footer.Col
                        label="Urbanly"
                        links={
                            <>
                                <Button label="Sobre nós" variant="link" hasNoPadding/>
                                <Button label="Contato" variant="link" hasNoPadding/>
                                <Button label="Carreiras" variant="link" hasNoPadding/>
                                <Button label="Imprensa" variant="link" hasNoPadding/>
                            </>
                        }
                    />
                    <Footer.Col
                        label="Catálogo"
                        links={
                            <>
                                <Button label="Félix Thomas" variant="link" hasNoPadding/>
                                <Button label="Jacobina II" variant="link" hasNoPadding/>
                                <Button label="Jacobina III" variant="link" hasNoPadding/>
                                <Button label="Leader" variant="link" hasNoPadding/>
                                <Button label="Inocoop" variant="link" hasNoPadding/>
                            </>
                        }
                    />
                    <Footer.Col
                        label="Suporte"
                        links={
                            <>
                                <Button label="Central de Ajuda" variant="link" hasNoPadding/>
                                <Button label="FAQ" variant="link" hasNoPadding/>
                                <Button label="Política de Privacidade" variant="link" hasNoPadding/>
                                <Button label="Termos de Uso" variant="link" hasNoPadding/>
                            </>
                        }
                    />
                    <Footer.Col
                        label="Conecte-se"
                        links={
                            <>
                                <Button label="Instagram" variant="link" hasNoPadding/>
                                <Button label="LinkedIn" variant="link" hasNoPadding/>
                                <Button label="YouTube" variant="link" hasNoPadding/>
                                <Button label="Facebook" variant="link" hasNoPadding/>
                                <Button label="Twitter / X" variant="link" hasNoPadding/>
                            </>
                        }
                    />
                </>
            }
        />
        </body>
        </html>
    );
}
