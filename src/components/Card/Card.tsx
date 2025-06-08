import SCSS from "./Card.module.scss";
import Image from 'next/image'

interface CardProps {
    title: string;
    price: string;
    cardPicture: string;
}

const Card: React.FC<CardProps> = ({title, price, cardPicture}) => {
    console.log('Renderizando: MeuComponente');
    return (
        <div className={SCSS.container}>
            <Image
                src={cardPicture}
                width={2048}
                height={2048}
                alt={title}
            />
            <h4>{price}</h4>
            <h3>{title}</h3>
        </div>
    )
}

export default Card;