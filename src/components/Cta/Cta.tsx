import styles from "./Cta.module.scss";
import {Search} from 'lucide-react';

import Image from 'next/image'

import Header from "../Header/Header";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Badge from "../Badge/Badge";

const Cta = () => {
    return (
        <div className={styles.containerWrapper}>
        <section className={styles.container}>
            <Header/>
            <div className={styles.container_content}>
                <Badge variant="blur" label="+20 anos de experiência" hasBackground={true} />
                <h1>Explore as melhores propriedades da região</h1>
                <h2>Clientes satisfeitos em mais de 30 cidades</h2>
                <form className={styles.container_content__form}>
                    <Input label="Apartamentos mobiliados, Itaitu" id="search" isLabelVisible={false} size="large"/>
                    <Button hasBackground={true} variant="primary">
                        <Search/>
                    </Button>
                </form>
                <span>Explore 700+ casas e apartamentos para venda e aluguel em toda a região</span>
            </div>
            <div className={styles.container_background}>
                <Image
                    src="/images/mx4mSkK9zeo.jpg"
                    width={2048}
                    height={2048}
                    alt="Urbanly"
                />
                <div className={styles.container_background__overlay}></div>
            </div>
        </section>
        </div>
    )
}

export default Cta;