import styles from "./Cta.module.scss";
import {Search} from 'lucide-react';

import Image from 'next/image'

import Header from "../Header/Header";
import Badge from "../Badge/Badge";

interface CtaProps {
    badgeLabel: string;
    ctaTitle: string;
    ctaDescription: string;
    ctaBottomText: string;
    bgImage: string;
}

const Cta:React.FC<CtaProps> = ({badgeLabel, ctaTitle, ctaDescription, ctaBottomText, bgImage}) => {
    return (
        <section className={styles.container}>
            <div className={styles.container_wrapper}>
                <Header/>
                <div className={styles.container_wrapper__content}>
                    <Badge variant="blur" label={badgeLabel} hasBackground={true} />
                    <h1>{ctaTitle}</h1>
                    <div className={styles.container_wrapper__fakeInput}>
                        <Search/>
                        <span>Félix Thomaz, Jacobina, Bahia</span>
                    </div>
                    <h2>{ctaDescription}</h2>
                    <span>{ctaBottomText}</span>
                </div>
                <div className={styles.container_wrapper__background}>
                    <Image
                        src={bgImage}
                        width={2048}
                        height={2048}
                        alt="Urbanly"
                    />
                    <div className={styles.container_wrapper__background__overlay}></div>
                </div>
            </div>
        </section>
    )
}

export default Cta;