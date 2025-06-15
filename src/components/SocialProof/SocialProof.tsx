import clsx from "clsx"; // Utility for conditional class name merging
import styles from "./SocialProof.module.scss"; // Styles for the SocialProof root container
import headerStyles from "./SocialProofHeader.module.scss"; // Styles specific to the header section
import containerStyles from "./SocialProofContainer.module.scss"; // Styles for the container wrapping the items
import itemStyles from "./SocialProofItem.module.scss"; // Styles for individual social proof items

interface SocialProofProps {
    title: string;
    buttonLabel?: string;
    gridColumns?: number;
    children?: React.ReactNode;
}

/**
 * @name SocialProof
 * @author Moisés Reis
 *
 * @desc Compound React component to display social proof sections with a title,
 * a configurable grid layout container, and individual proof items.
 * Provides a flexible and reusable UI pattern for testimonials, stats, or endorsements.
 *
 * @param title - The main title of the social proof section.
 * @param {number} [gridColumns=3] - Number of columns in the grid container.
 * @param children - Nested SocialProof.Item components or other children.
 *
 * @example
 * <SocialProof title="What People Say" gridColumns={4}>
 *   <SocialProof.Item icon={<Icon />} title="User A" description="Great product!" />
 *   <SocialProof.Item icon={<Icon />} title="User B" description="Highly recommend." />
 * </SocialProof>
 */
const SocialProof: React.FC<SocialProofProps> & {
    Header: typeof SocialProofHeader;
    Container: typeof SocialProofContainer;
    Item: typeof SocialProofItem;
} = ({title, children, gridColumns = 3}) => {

    return (
        <section className={styles.box}>
            <SocialProof.Header title={title}/>
            <SocialProof.Container gridColumns={gridColumns}>
                {children}
            </SocialProof.Container>
        </section>
    );
};

/**
 * @name SocialProofHeader
 * @author Moisés Reis
 *
 * @desc Renders the header section with a title for the social proof component.
 *
 * @param title - The title text to display.
 *
 * @example
 * <SocialProof.Header title="Customer Testimonials" />
 */
const SocialProofHeader: React.FC<{ title: string }> = ({title}) => (
    <div className={headerStyles.box}>
        <h2>{title}</h2>
    </div>
);

/**
 * @name SocialProofContainer
 * @author Moisés Reis
 *
 * @desc A flexible container for social proof items, using CSS grid layout.
 * The number of columns is controlled by the `gridColumns` prop and affects
 * the applied CSS class for layout.
 *
 * @param children - Content elements inside the container.
 * @param gridColumns - Number of grid columns (affects CSS class).
 *
 * @example
 * <SocialProof.Container gridColumns={4}>
 *   {children}
 * </SocialProof.Container>
 */
const SocialProofContainer: React.FC<{ children: React.ReactNode, gridColumns: number }> = ({children, gridColumns = 3}) => (
    <div className={clsx(
        containerStyles[`box_grid__${gridColumns}`]
    )}>
        {children}
    </div>
);

/**
 * @name SocialProofItem
 * @author Moisés Reis
 *
 * @desc Represents an individual item inside the social proof container,
 * containing an icon, a title, and a descriptive text.
 *
 * @param icon - Icon or image displayed with the item.
 * @param title - The title or headline of the item.
 * @param description - Supporting text describing the item.
 *
 * @example
 * <SocialProof.Item icon={<UserIcon />} title="John Doe" description="Amazing service!" />
 */
const SocialProofItem: React.FC<{ icon: React.ReactNode, title: string, description: string }> = ({icon, title, description}) => (
    <div className={itemStyles.box}>
        {icon}
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
);

SocialProof.Header = SocialProofHeader; // Attach Header subcomponent to SocialProof
SocialProof.Container = SocialProofContainer; // Attach Container subcomponent to SocialProof
SocialProof.Item = SocialProofItem; // Attach Item subcomponent to SocialProof

export default SocialProof;
