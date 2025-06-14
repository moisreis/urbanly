import clsx from "clsx"; // Utility for conditional class name merging
import styles from "./Button.module.scss"; // Scoped styles specific to the component
import utils from "./utils.module.scss"; // Utility styles specific to the component

interface ButtonProps {
    label: string;
    variant: "primary" | "secondary" | "link" | "outline" | "blur" | "accent";
    hasBackground?: boolean;
    icon?: React.ReactNode;
    isRounded?: boolean;
    isFullWidth?: boolean;
    hasNoPadding?: boolean;
}

/**
 * @name Button
 * @author Moisés Reis
 *
 * @desc A styled button component supporting multiple visual variants,
 * optional icon, and utility modifiers for layout and appearance.
 *
 * @param label - Text to display inside the button.
 * @param variant - One of the predefined visual styles for the button.
 * @param hasBackground - Applies high-contrast background styling.
 * @param icon - An optional icon element to display before the label.
 * @param isRounded - If true, adds a fully-rounded border radius.
 * @param isFullWidth - If true, forces the button to stretch to full width.
 * @param hasNoPadding - If true, forces the button to have no padding to save space (useful for links)
 *
 * @example
 * <Button
 *   label="Name"
 *   variant="link"
 *   hasBackground={true}
 *   isRounded
 *   isFullWidth
 *   icon={<Icon />}
 * />
 */
const Button: React.FC<ButtonProps> = ({label, variant, icon, isRounded = false, isFullWidth = false, hasBackground = false, hasNoPadding = false}) => {

    return (
        <button
            type="button"
            aria-label={label}
            className={
                clsx(
                    styles.mod, styles[`mod_${variant}`], {
                        [utils.hasBackground]: hasBackground,
                        [utils.isRounded]: isRounded,
                        [utils.isFullWidth]: isFullWidth,
                        [utils.hasNoPadding]: hasNoPadding,
                    }
                )
            }>
            {icon && (<div className={styles.mod_icon}>{icon}</div>)}
            <span>{label}</span>
        </button>
    );
};

export default Button;
