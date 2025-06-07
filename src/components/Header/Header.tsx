import style from './Header.module.scss';

import Logo from "@/components/Logo/Logo";
import Button from "@/components/Button/Button";

const Header = () => {
    return (
        <header className={style.Container}>
            <div className={style.Container_left}>
                <Logo/>
            </div>
            <div className={style.Container_right}>
                <Button label="Alugar"/>
                <Button label="Comprar"/>
                <Button label="Vender"/>
            </div>
        </header>
    );
};

export default Header;
