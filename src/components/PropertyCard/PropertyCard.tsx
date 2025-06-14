import styles from "./PropertyCard.module.scss"; // Styles specific to the PropertyCard component layout and design
import Image from 'next/image';  // Next.js optimized Image component for automatic image resizing and performance

interface PropertyCardProps {
    title: string;
    price: string;
    cover: string;
}

/**
 * @name PropertyCard
 * @author Moisés Reis
 *
 * @description
 * A card component to display a property listing with its cover image, price, and title.
 * Designed to showcase real estate properties in a clear and professional format.
 *
 * @param title - The title or name of the property
 * @param price - The price of the property, formatted as a string
 * @param cover - The URL or path of the cover image representing the property
 *
 * @example
 * <PropertyCard
 *   title="Apartamento na Vila Feliz"
 *   price="R$350,000"
 *   cover="/images/property1.jpg"
 * />
 */
const PropertyCard: React.FC<PropertyCardProps> = ({ title, price, cover }) => {
    return (
        <div className={styles.box}>
            <Image
                src={cover}
                width={2048}
                height={2048}
                alt={title}
            />
            <h3>{price}</h3>
            <h4>{title}</h4>
        </div>
    );
};

export default PropertyCard;
