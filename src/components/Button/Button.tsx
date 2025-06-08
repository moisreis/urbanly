import style from "./Button.module.scss";

interface ButtonProps {
    label: string;
    variant: "primary" | "secondary" | "link" | "outline";
    hasBackground: boolean;
}

const Button: React.FC<ButtonProps> = ({ label, variant, hasBackground }) => {
    const variantClass = style[`container_${variant}`];
    const backgroundClass = hasBackground ? style.hasBackground : "";

    return (
        <button className={`${style.container} ${variantClass} ${backgroundClass}`}>
            {label}
        </button>
    );
};

export default Button;
