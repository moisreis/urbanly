import Image from 'next/image'; // Next.js optimized image component
import ctaStyles from "./Cta.module.scss"; // Root CTA wrapper and layout
import headerStyles from "./CtaHeader.module.scss"; // Specific styles for CTA header if any
import titleStyles from "./CtaTitle.module.scss"; // Styles for CTA title typography
import descriptionStyles from "./CtaDescription.module.scss"; // Styles for CTA description text
import noteStyles from "./CtaNote.module.scss"; // Styles for the bottom note/label
import backgroundStyles from "./CtaBackground.module.scss"; // Styles for background image and overlay
import inputLauncherStyles from "./CtaInputLauncher.module.scss"; // add comment here chatgpt
import {Search, User2} from 'lucide-react'; // Lucide icon used for visual input indicator
import Badge from "../Badge/Badge";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";

interface CtaProps {
    badgeLabel: string;
    ctaTitle: string;
    ctaDescription: string;
    ctaNote: string;
    bgImage: string;
}

const Cta: React.FC<CtaProps> & {
    Header: typeof CtaHeader;
    Title: typeof CtaTitle;
    InputLauncher: typeof CtaInputLauncher;
    Description: typeof CtaDescription;
    Note: typeof CtaNote;
    Background: typeof CtaBackground;
} = ({badgeLabel, ctaTitle, ctaDescription, ctaNote, bgImage}) => {
    return (
        <section className={ctaStyles.boxCta}>
            <div className={ctaStyles.boxCta_wrapper}>
                <Cta.Header>
                    <Button label="Alugue um apê" variant="link" hasBackground={true}/>
                    <Button label="Compre um imóvel" variant="link" hasBackground={true}/>
                    <Button label="Anuncie uma venda" variant="link" hasBackground={true}/>
                    <Button label="Entrar" variant="outline" hasBackground={true} isRounded={true} icon={<User2/>}/>
                </Cta.Header>
                <div className={ctaStyles.boxCta_wrapper__content}>
                    <Badge variant="blur" label={badgeLabel} hasBackground={true}/>
                    <Cta.Title>{ctaTitle}</Cta.Title>
                    <Cta.InputLauncher placeholder="sdsd"/>
                    <Cta.Description>{ctaDescription}</Cta.Description>
                    <Cta.Note>{ctaNote}</Cta.Note>
                </div>
                <Cta.Background bgImage={bgImage}/>
            </div>
        </section>
    )
}

const CtaHeader: React.FC<{ children: React.ReactNode }> = ({children}) => (
    <header className={headerStyles.boxCta_header}>
        <div className={headerStyles.boxCta_header_left}>
            <Logo hasBackground={true}/>
        </div>
        <div className={headerStyles.boxCta_header_right}>
            {children}
        </div>
    </header>
);

const CtaTitle: React.FC<{ children: React.ReactNode }> = ({children}) => (
    <h1 className={titleStyles.boxCta_title}>{children}</h1>
);

const CtaInputLauncher: React.FC<{ placeholder: string }> = ({placeholder}) => (
    <div className={inputLauncherStyles.boxCtaInputLauncher}>
        <Search/>
        <span>{placeholder}</span>
    </div>
);

const CtaDescription: React.FC<{ children: React.ReactNode }> = ({children}) => (
    <h2 className={descriptionStyles.boxCta_description}>{children}</h2>
);

const CtaNote: React.FC<{ children: React.ReactNode }> = ({children}) => (
    <span className={noteStyles.boxCta_note}>{children}</span>
);

const CtaBackground: React.FC<{ bgImage: string }> = ({bgImage}) => (
    <div className={backgroundStyles.boxCta_background}>
        <Image src={bgImage} width={2048} height={2048} alt="Urbanly"/>
        <div className={backgroundStyles.boxCta_background_overlay}></div>
    </div>
);

Cta.Header = CtaHeader;
Cta.Title = CtaTitle;
Cta.InputLauncher = CtaInputLauncher;
Cta.Description = CtaDescription;
Cta.Note = CtaNote;
Cta.Background = CtaBackground;

export default Cta;