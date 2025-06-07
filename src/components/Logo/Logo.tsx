import style from './Logo.module.scss';

import Image from 'next/image'

const Logo = () => {
    return (
        <div className={style.Container}>
            <Image
                src="/logo.svg"
                width={128}
                height={128}
                alt="Urbanly"
            />
        </div>
    )
}

export default Logo;