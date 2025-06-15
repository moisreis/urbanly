import clsx from "clsx"; // Utility for merging class names conditionally
import styles from "./Section.module.scss"; // SCSS styles for the Section component's container
import headerStyles from "./SectionHeader.module.scss";  // SCSS styles specifically for the SectionHeader component
import contentStyles from "./SectionContent.module.scss";  // SCSS styles specifically for the SectionContent component
import Button from "../Button/Button";

interface SectionProps {
    title: string;
    children?: React.ReactNode;
    button?: string;
    hasVerticalLayout?: boolean;
    gridColumns?: number;
    subtitle?: string;
}

/**
 * @name Section
 * @author Moisés Reis
 *
 * @desc Reusable layout component that conditionally renders a header and content block.
 * Supports two visual orientations: horizontal (default) and vertical.
 *
 * @param title - Title of the section
 * @param children - React elements to be rendered inside the section content
 * @param button - Optional CTA button label
 * @param hasVerticalLayout - Whether the layout should switch to vertical orientation
 * @param gridColumns - Number of grid columns for layout responsiveness
 * @param subtitle - Optional subtitle displayed in vertical layout
 *
 * @example
 * <Section title="Novidades" button="Ver todos">
 *   <LocationCard />
 *   <LocationCard />
 * </Section>
 */
const Section: React.FC<SectionProps> & {
    Header: typeof SectionHeader;
    Content: typeof SectionContent;
} = ({title, children, gridColumns = 5, hasVerticalLayout = false, subtitle, button}) => {
    return (
        <section className={styles.box}>
            {!hasVerticalLayout && (
                <Section.Header title={title} button={button}/>
            )}
            <Section.Content title={title} hasVerticalLayout={hasVerticalLayout} gridColumns={gridColumns} subtitle={subtitle} button={button}>
                {children}
            </Section.Content>
        </section>
    );
};

/**
 * @name SectionHeader
 * @author Moisés Reis
 *
 * @desc Renders the header section with the title and optional CTA button.
 * This is used when the layout is horizontal (default).
 *
 * @param title - Title displayed in the header
 * @param button - Optional label for the CTA button
 *
 * @example
 * <SectionHeader title="Novidades" button="Explorar mais" />
 */
const SectionHeader: React.FC<{ title: string, button?: string }> = ({title, button}) => (
    <div className={headerStyles.box}>
        <h2>{title}</h2>
        {button && (<Button variant="outline" hasBackground={false} label={button} isRounded={true}/>)}
    </div>
);

/**
 * @name SectionContent
 * @author Moisés Reis
 *
 * @desc Renders the content area of the section, supporting both grid layout and vertical orientation.
 * If in vertical layout mode, it displays the title, optional subtitle, and CTA before the children.
 *
 * @param gridColumns - Number of columns used for grid layout (default is 5)
 * @param hasVerticalLayout - Whether to render content in vertical layout
 * @param title - Title displayed when in vertical layout
 * @param subtitle - Optional subtitle shown in vertical layout
 * @param button - Optional CTA button label for vertical layout
 * @param children - React nodes rendered within the content section
 *
 * @example
 * <SectionContent gridColumns={4} hasVerticalLayout>
 *   <PropertyCard />
 *   <PropertyCard />
 * </SectionContent>
 */
const SectionContent: React.FC<{ gridColumns?: number, hasVerticalLayout?: boolean, title: string, subtitle?: string, button?: string, children: React.ReactNode }> = ({gridColumns, hasVerticalLayout, title, subtitle, button, children}) => (
    <div className={clsx(
        contentStyles[`box_grid__${gridColumns}`]
    )}>
        {hasVerticalLayout && (
            <div className={contentStyles.box}>
                <h3>{title}</h3>
                {subtitle && <p>{subtitle}</p>}
                {button && (
                    <Button variant="outline" hasBackground={false} label={button} isRounded={true}/>
                )}
            </div>
        )}
        {children}
    </div>
);

Section.Header = SectionHeader; // Attaches the header subcomponent to the Section
Section.Content = SectionContent; // Attaches the content subcomponent to the Section

export default Section;