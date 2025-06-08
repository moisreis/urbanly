import style from "./Input.module.scss";

interface InputProps {
    isLabelVisible?: boolean;
    label: string;
    id: string;
    size?: "normal" | "large";
    children?: React.ReactNode;
}

const Input: React.FC<InputProps> = ({label, id, children, size = "normal", isLabelVisible = true}) => {
    const sizeClass = style[`container_input__${size}`];

    return (
        <div className={style.container}>
            {isLabelVisible && (
                <label htmlFor={id}>{label}</label>
            )}
            <div className={style.container_inner}>
                {children}
                <input
                    className={`${style.container_input} ${sizeClass}`}
                    id={id}
                    placeholder={label}
                    type="text"
                />
            </div>
        </div>
    );
};

export default Input;
