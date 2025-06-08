import style from "./Badge.module.scss";

interface BadgeProps {
    label?: string;
    variant: "primary" | "secondary" | "link" | "outline" | "blur";
    hasBackground: boolean;
    children?: React.ReactNode;
}

const Badge: React.FC<BadgeProps> = ({label, variant, children, hasBackground}) => {
    const variantClass = style[`container_${variant}`];
    const backgroundClass = hasBackground ? style.hasBackground : "";

    return (
        <div className={`${style.container} ${variantClass} ${backgroundClass}`}>
            {label && (<span>{label}</span>)}
            {children}
        </div>
    );
};

export default Badge;
