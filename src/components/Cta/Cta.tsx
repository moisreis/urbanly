import styles from "./Cta.module.scss";

import Image from 'next/image'

import Header from "../Header/Header";

const Cta = () => {
    return (
        <section className={styles.container}>
            <Header/>
            <div className={styles.container_content}>
                <h1>Explore as melhores propriedades da região</h1>
                <form>
                    <input type="text" placeholder="Explore"/>
                </form>
                <span>Explore +700 casas e apartamentos para venda e aluguel em toda a região</span>
            </div>
            <div className={styles.container_background}>
                <Image
                    src="/images/2d4lAQAlbDA.jpg"
                    width={2048}
                    height={2048}
                    alt="Urbanly"
                />
                <div className={styles.container_background__overlay}></div>
            </div>
        </section>
    )
}

export default Cta;