import style from "./Button.module.scss";

interface ButtonProps {
    label: string;
}

const Button: React.FC<ButtonProps> = ({label}) => {
    return (
        <button className={style.Container}>{label}</button>
    )
}

export default Button;