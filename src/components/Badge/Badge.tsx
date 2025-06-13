import clsx from "clsx"; // Utility for conditional class name merging
import styles from "./Badge.module.scss"; // Scoped styles specific to the component
import utils from "./utils.module.scss"; // Utility styles specific to the component

interface BadgeProps {
    label: string;
    variant: "primary" | "secondary" | "tertiary" | "outline" | "blur";
    hasBackground?: boolean;
    icon?: React.ReactNode;
}

/**
 * @name Badge
 * @author Moisés Reis
 *
 * @desc UI component used to display small labels or tags with optional icons.
 * Supports various visual variants to indicate different statuses or contexts.
 *
 * @param label - The text content displayed inside the badge.
 * @param variant - The visual style variant for the badge.
 * @param hasBackground - If true, applies a background utility style for better contrast.
 * @param icon - An optional icon to display alongside the label.
 *
 * @example <Badge label="+20 anos de experiência" variant="blur" hasBackground icon={<Icon />} />
 */
const Badge: React.FC<BadgeProps> = ({label, variant, icon, hasBackground = false}) => {

    return (
        <div className={
            clsx(
                styles.mod, styles[`mod_${variant}`], {
                    [utils.hasBackground]: hasBackground
                }
            )
        }>
            {icon && (<div className={styles.mod_icon}>{icon}</div>)}
            <span>{label}</span>
        </div>
    );
};

export default Badge;
