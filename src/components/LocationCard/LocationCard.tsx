import styles from "./LocationCard.module.scss"; // LocationCard component styles
import coverStyles from "./LocationCardCover.module.scss"; // Styles specific to the cover image section of the LocationCard component
import contentStyles from "./LocationCardContent.module.scss"; // Styles specific to the content section of the LocationCard component
import Image from 'next/image'; // Next.js optimized image component

interface LocationCardProps {
    quantity: string;
    location: string;
    cover: string;
}

/**
 * @name LocationCard
 * @author Moisés Reis
 *
 * @description A reusable card component to display a location with an image and the quantity of available properties.
 * It internally uses two subcomponents: `LocationCard.Image` and `LocationCard.Content`.
 *
 * @param quantity - Quantity of items in the location
 * @param location - Name of the location
 * @param cover - Cover of the location (picture)
 *
 * @example
 * <LocationCard
 *   location="São Paulo"
 *   quantity="120"
 *   cover="/images/sp.jpg"
 * />
 */
const LocationCard: React.FC<LocationCardProps> & {
    Cover: typeof LocationCardCover;
    Content: typeof LocationCardContent;
} = ({quantity, location, cover}) => {
    return (
        <div className={styles.box}>
            <LocationCard.Cover cover={cover} location={location}/>
            <LocationCard.Content location={location} quantity={quantity}/>
        </div>
    );
};

/**
 * @name LocationCardCover
 * @description Displays the cover image of a location using the Next.js Image component.
 *
 * @param cover - The image URL for the location cover.
 * @param location - The name of the location, used as the alt text.
 *
 * @example
 * <LocationCard.Cover cover="/images/rio.jpg" location="Rio de Janeiro" />
 */
const LocationCardCover: React.FC<{ cover: string; location: string }> = ({cover, location}: { cover: string; location: string; }) => (
    <div className={coverStyles.box}>
        <Image
            src={cover}
            width={2048}
            height={2048}
            alt={location}
        />
    </div>
);

/**
 * @name LocationCardContent
 * @description Displays the textual information for a location, including its name and the quantity of properties available.
 *
 * @param location - The name of the location to display.
 * @param quantity - The number of available properties in that location.
 *
 * @example
 * <LocationCard.Content location="Curitiba" quantity="85" />
 */
const LocationCardContent: React.FC<{ location: string; quantity: string }> = ({quantity, location}: { location: string; quantity: string; }) => (
    <div className={contentStyles.box}>
        <h4>{location}</h4>
        <h3>{quantity} imóveis</h3>
    </div>
);

LocationCard.Cover = LocationCardCover; // Renders the cover block
LocationCard.Content = LocationCardContent; // Renders the content block

export default LocationCard;
