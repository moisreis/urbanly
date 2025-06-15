import type {Metadata} from "next"; // Types for Next.js metadata configuration
import "./globals.scss"; // Global SCSS styles with resets, variables, and base elements
import {Footer} from "@/components/Footer/Footer";
import Button from "@/components/Button/Button";
import {Inter, Cardo} from 'next/font/google' // Google Fonts loaded via Next.js (Inter and Cardo)

/**
 * @name inter
 * @author Moisés Reis
 *
 * @desc Load and configure the 'Inter' Google Font with Latin subset
 *       for use across the application’s UI text elements.
 *
 * @param subsets - Array of font subsets to include (e.g., 'latin')
 */
const inter = Inter({
    subsets: ['latin'],
})

/**
 * @name cardo
 * @author Moisés Reis
 *
 * @desc Load and configure the 'Cardo' Google Font with Latin subset and weight 400,
 *       intended for headings or stylistic text to complement the main font.
 *
 * @param subsets - Array of font subsets to include (e.g., 'latin')
 * @param weight - Font weight to load (e.g., "400")
 */
const cardo = Cardo({
    subsets: ['latin'],
    weight: "400",
})

/**
 * @name metadata
 * @author Next.js
 *
 * @desc Export Next.js Metadata object for SEO and social sharing purposes.
 *       Includes page title and description strings to appear in HTML metadata.
 *
 * @param title - The title of the web application or page
 * @param description - The description shown in search results or previews
 *
 * @example
 * export const metadata: Metadata = {
 *   title: "Urbanly. Your city within reach",
 *   description: "Your city within reach",
 * };
 */
export const metadata: Metadata = {
    title: "Urbanly. Your city within reach",
    description: "Your city within reach",
};

/**
 * @name RootLayout
 * @author Next.js
 *
 * @desc Define the root layout component wrapping all pages.
 *       It sets the html language, applies global fonts as classes,
 *       renders children, and includes the site footer with navigation.
 *
 * @param children - ReactNode elements representing nested page content
 */
export default function RootLayout({children}: Readonly<{ children: React.ReactNode }>) {
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
