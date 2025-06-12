import clsx from "clsx";
import scss from "./Badge.module.scss"; // Imports scoped styles for the component (modular SCSS)
import utils from "./utils.module.scss";

interface BadgeProps {
    label?: string;
    variant: "primary" | "secondary" | "link" | "outline" | "blur";
    hasBackground: boolean;
    icon?: React.ReactNode;
}

const Badge: React.FC<BadgeProps> = ({label, variant, icon, hasBackground}) => {
    // const variantClass = scss[`container_${variant}`];
    // const backgroundClass = hasBackground ? scss.hasBackground : "";

    return (
        <div className={clsx(scss.container, scss[`container_${variant}`], {
            [utils.hasBackground]: hasBackground
        })}>
            {label && (<span>{label}</span>)}
            {icon}
        </div>
    );
};

export default Badge;
