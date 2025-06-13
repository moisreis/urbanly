import clsx from "clsx";
import styles from "./Badge.module.scss"; // Imports scoped styles for the component (modular SCSS)
import utils from "./utils.module.scss";

interface BadgeProps {
    label?: string;
    variant: "primary" | "secondary" | "tertiary" | "outline" | "blur";
    hasBackground?: boolean;
    icon?: React.ReactNode;
}

const Badge: React.FC<BadgeProps> = ({label, variant, icon, hasBackground = false}) => {

    return (
        <div role="text" aria-label={label} className={
            clsx(
                styles.mod, styles[`mod_${variant}`], {
                    [utils.hasBackground]: hasBackground
                }
            )
        }>
            {icon && (<div className={styles.mod_icon}>{icon}</div>)}
            {label && (<span>{label}</span>)}
        </div>
    );
};

export default Badge;
