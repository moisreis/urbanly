import style from './Header.module.scss';

import Logo from "@/components/Logo/Logo";
import Button from "@/components/Button/Button";

const Header = () => {
    return (
        <header className={style.Container}>
            <div className={style.Container_left}>
                <Logo hasBackground={true} />
            </div>
            <div className={style.Container_right}>
                <Button label="Alugar" variant="link" hasBackground={true}/>
                <Button label="Comprar" variant="link" hasBackground={true}/>
                <Button label="Vender" variant="link" hasBackground={true}/>
                <Button label="Anunciar" variant="link" hasBackground={true}/>
                <Button label="Entrar" variant="outline" hasBackground={true}/>
            </div>
        </header>
    );
};

export default Header;
