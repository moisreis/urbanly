import style from './Header.module.scss';
import {ArrowUpRight} from "lucide-react";

import Logo from "@/components/Logo/Logo";
import Button from "@/components/Button/Button";

const Header = () => {
    return (
        <header className={style.Container}>
            <div className={style.Container_left}>
                <Logo hasBackground={true} />
            </div>
            <div className={style.Container_right}>
                <Button label="Alugue uma apê" variant="link" hasBackground={true}/>
                <Button label="Compre um imóvel" variant="link" hasBackground={true}/>
                <Button label="Anuncie uma venda" variant="link" hasBackground={true}/>
                <Button label="Entrar" variant="outline" hasBackground={true}>
                    <ArrowUpRight />
                </Button>
            </div>
        </header>
    );
};

export default Header;
