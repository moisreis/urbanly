import style from "./Input.module.scss";
import {MapPin} from 'lucide-react';

interface InputProps {
    isLabelVisible?: boolean;
    label: string;
    id: string;
    size?: "normal" | "large";
}

const Input: React.FC<InputProps> = ({label, id, size = "normal", isLabelVisible = true}) => {
    const sizeClass = style[`container_input__${size}`];

    return (
        <div className={style.container}>
            {isLabelVisible && (
                <label htmlFor={id}>{label}</label>
            )}
            <div className={style.container_inner}>
                <MapPin className={style.container_input__icon} color="red" size={48}/>
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
