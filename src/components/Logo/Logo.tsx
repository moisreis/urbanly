import style from './Logo.module.scss';

import Image from 'next/image'

interface LogoProps {
    hasBackground: boolean,
}

const Logo: React.FC<LogoProps> = ({ hasBackground }) => {

    const backgroundClass = hasBackground && style.hasBackground || "";
    return (
        <div className={style.Container}>
            <Image
                src="/logo.svg"
                width={128}
                height={128}
                alt="Urbanly"
                className={backgroundClass}
            />
        </div>
    )
}

export default Logo;