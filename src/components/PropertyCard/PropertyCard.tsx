import SCSS from "./PropertyCard.module.scss";
import Image from 'next/image'

interface PropertyCardProps {
    title: string;
    price: string;
    cardPicture: string;
}

const PropertyCard: React.FC<PropertyCardProps> = ({title, price, cardPicture}) => {
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

export default PropertyCard;