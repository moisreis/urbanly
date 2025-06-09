import SCSS from "./LocationCard.module.scss";
import Image from 'next/image'

interface LocationCardProps {
    quantity: string;
    location: string;
    cardPicture: string;
}

const LocationCard: React.FC<LocationCardProps> = ({quantity, location, cardPicture}) => {
    console.log('Renderizando: MeuComponente');
    return (
        <div className={SCSS.container}>
            <div className={SCSS.container_left}>
                <Image
                    src={cardPicture}
                    width={2048}
                    height={2048}
                    alt={location}
                />
            </div>
            <div className={SCSS.container_right}>
                <h4>{location}</h4>
                <h3>{quantity} imóveis</h3>
            </div>
        </div>
    )
}

export default LocationCard;