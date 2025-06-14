import clsx from "clsx"; // Utility function to conditionally combine class names
import styles from './Logo.module.scss'; // Styles specific to the Logo component wrapper and layout
import utils from './utils.module.scss'; // Shared utility styles, e.g., for backgrounds or common modifiers
import Image from 'next/image'; // Next.js optimized image component for automatic resizing and lazy loading
import Link from 'next/link';  // Next.js Link component for client-side navigation

interface LogoProps {
    hasBackground?: boolean;
}

/**
 * @name Logo
 * @author Moisés Reis
 *
 * @description
 * A logo component that links to the homepage. It optionally applies a background style
 * to the image depending on the `hasBackground` prop.
 *
 * @param hasBackground - Whether to apply background styling to the logo image.
 *
 * @example
 * <Logo hasBackground={true} />
 */
const Logo: React.FC<LogoProps> = ({hasBackground = false}) => {
    return (
        <Link href="/" className={clsx(styles.mod)}>
            <Image
                src="/logo.svg"
                width={128}
                height={128}
                alt="Urbanly"
                className={clsx({
                    [utils.hasBackground]: hasBackground,
                })}
            />
        </Link>
    );
};

export default Logo;
