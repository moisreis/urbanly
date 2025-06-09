import style from "./Button.module.scss";

interface ButtonProps {
    label?: string;
    variant: "primary" | "secondary" | "link" | "outline" | "blur" | "accent";
    hasBackground: boolean;
    children?: React.ReactNode;
    isRounded?: boolean;
    isFullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
                                           label,
                                           variant,
                                           children,
                                           isRounded = false,
                                           isFullWidth = false,
                                           hasBackground
                                       }) => {
    const variantClass = style[`container_${variant}`];
    const hasBackgroundClass = hasBackground ? style.hasBackground : "";
    const isRoundedClass = isRounded ? style.isRounded : "";
    const isFullWidthClass = isFullWidth ? style.isFullWidth : "";

    return (
        <button
            className={`${style.container} ${variantClass} ${hasBackgroundClass} ${isRoundedClass} ${isFullWidthClass}`}>
            {label && (<span>{label}</span>)}
            {children}
        </button>
    );
};

export default Button;
