import styles from './Footer.module.scss'; // Styles specific to the Footer layout and component
import colStyles from './FooterCol.module.scss'; // Styles specific to each Footer column

interface FooterProps {
    navigation: React.ReactNode;
}

/**
 * @name Footer
 * @author Moisés Reis
 *
 * @desc Main footer layout component. Accepts any JSX content as `navigation`,
 * usually composed of one or more <Footer.Col /> subcomponents to structure footer content.
 *
 * @param navigation - React nodes to be rendered inside the footer, such as columns or links.
 *
 * @example
 * <Footer
 *     navigation={
 *         <>
 *             <Footer.Col label="Company" links={<a href="/about">About Us</a>} />
 *             <Footer.Col label="Support" links={<a href="/contact">Contact</a>} />
 *         </>
 *     }
 * />
 */
export const Footer: React.FC<FooterProps> & {
    Col: typeof FooterCol;
} = ({navigation}) => {
    return (
        <footer className={styles.lyt}>
            {navigation}
        </footer>
    );
};

/**
 * @name FooterCol
 * @author Moisés Reis
 *
 * @desc A subcomponent of <Footer />, representing a single column section.
 * Useful for organizing footer content into labeled groups such as links, contacts, or info.
 *
 * @param label - Title displayed at the top of the column.
 * @param links - A list of React nodes, typically <a> or <Button> elements.
 *
 * @example
 * <Footer.Col
 *     label="Support"
 *     links={
 *         <>
 *             <Button label="Contact" variant="link" hasNoPadding />
 *             <Button label="Help Center" variant="link" hasNoPadding />
 *         </>
 *     }
 * />
 */
const FooterCol: React.FC<{ label: string, links: React.ReactNode }> = ({label, links}) => (
    <div className={colStyles.lyt}>
        <h4>{label}</h4>
        {links}
    </div>
);

Footer.Col = FooterCol; // Attach FooterCol as a static property of Footer for intuitive namespacing: <Footer.Col />

