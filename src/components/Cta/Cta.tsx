import Image from 'next/image'; // Next.js optimized image component
import ctaStyles from "./Cta.module.scss"; // Root CTA wrapper and layout
import headerStyles from "./CtaHeader.module.scss"; // Specific styles for CTA header if any
import titleStyles from "./CtaTitle.module.scss"; // Styles for CTA title typography
import descriptionStyles from "./CtaDescription.module.scss"; // Styles for CTA description text
import noteStyles from "./CtaNote.module.scss"; // Styles for the bottom note/label
import backgroundStyles from "./CtaBackground.module.scss"; // Styles for background image and overlay
import inputLauncherStyles from "./CtaInputLauncher.module.scss"; // Styles for the input launcher
import Badge from "../Badge/Badge";
import Logo from "../Logo/Logo";

interface CtaProps {
    badge: string;
    title: string;
    description: string;
    note: string;
    background: string;
    placeholder: string;
    icon?: React.ReactNode;
    navigation: React.ReactNode;
}

/**
 * @name Cta
 * @author Moisés Reis
 *
 * @desc Component for rendering the hero section with header, badge, title,
 * input launcher, description, note, and background image. Structured using
 * subcomponents for better readability and reusability.
 *
 * @param badge - Text label for the badge component
 * @param title - Main heading of the section
 * @param description - Supporting descriptive text
 * @param note - Bottom text/note under the description
 * @param background - Background image path or URL
 * @param placeholder - Placeholder text for the input launcher
 * @param icon - Icon component to be displayed inside the input launcher
 * @param navigation - List of buttons to be displayed in the Header
 *
 * @example
 * <Cta
 *     badge="+20 anos de experiência"
 *     title={<h1>Explore as melhores propriedades da região</h1>}
 *     description={<h2>Clientes satisfeitos em mais de 30 cidades</h2>}
 *     note={<span>Explore 700+ casas e apartamentos para venda e aluguel em toda a região</span>}
 *     background="/images/UhpYKnqZwE8.jpg"
 *     placeholder="Matriz, Jacobina, Bahia"
 *     icon={<Search />}
 * />
 */
const Cta: React.FC<CtaProps> & {
    Header: typeof CtaHeader;
    Title: typeof CtaTitle;
    InputLauncher: typeof CtaInputLauncher;
    Description: typeof CtaDescription;
    Note: typeof CtaNote;
    Background: typeof CtaBackground;
} = ({badge, title, description, note, background, placeholder, icon, navigation}) => {
    return (
        <section className={ctaStyles.box}>
            <div className={ctaStyles.box_wrapper}>
                <Cta.Header>
                    {navigation}
                </Cta.Header>
                <div className={ctaStyles.box_wrapper__content}>
                    <Badge variant="blur" label={badge} hasBackground={true}/>
                    <Cta.Title>{title}</Cta.Title>
                    <Cta.InputLauncher placeholder={placeholder} icon={icon}/>
                    <Cta.Description>{description}</Cta.Description>
                    <Cta.Note>{note}</Cta.Note>
                </div>
                <Cta.Background background={background}/>
            </div>
        </section>
    )
}

/**
 * @name CtaHeader
 * @author Moisés Reis
 *
 * @desc Defines the header section of the CTA layout. It includes a logo on the left
 * with a background, and renders any passed children on the right side
 *
 * @param children - React nodes to be displayed on the right side of the header.
 *
 * @example
 * <Cta.Header>
 *  <Button label="Alugue um apê" variant="link" hasBackground={true}/>
 *  <Button label="Compre um imóvel" variant="link" hasBackground={true}/>
 *  <Button label="Anuncie uma venda" variant="link" hasBackground={true}/>
 *  <Button label="Entrar" variant="outline" hasBackground={true} isRounded={true} icon={<User2/>}/>
 * </Cta.Header>
 */
const CtaHeader: React.FC<{ children: React.ReactNode }> = ({children}) => (
    <header className={headerStyles.box}>
        <div className={headerStyles.box_left}>
            <Logo hasBackground={true}/>
        </div>
        <div className={headerStyles.box_right}>
            {children}
        </div>
    </header>
);

/**
 * @name CtaTitle
 * @author Moisés Reis
 *
 * @desc Renders the main title of the Call to Action section.
 *
 * @param children - The title text or elements to be displayed inside the heading.
 *
 * @example
 * <Cta.Title>
 *   Explore Jacobina
 * </Cta.Title>
 */
const CtaTitle: React.FC<{ children: React.ReactNode }> = ({children}) => (
    <h1 className={titleStyles.box}>{children}</h1>
);

/**
 * @name CtaInputLauncher
 * @author Moisés Reis
 *
 * @desc A UI element designed to simulate or launch an input field action within the CTA.
 *
 * @param placeholder - The placeholder text or prompt displayed inside the element.
 * @param icon - (Optional) A React node representing an icon to be shown beside the placeholder.
 *
 * @example
 * <Cta.InputLauncher
 *   placeholder="Procure"
 *   icon={<Search />}
 * />
 */
const CtaInputLauncher: React.FC<{ placeholder: string, icon?: React.ReactNode }> = ({placeholder, icon}) => (
    <button
        type="button"
        className={inputLauncherStyles.box}
        aria-haspopup="dialog"
    >
        {icon && <span className={inputLauncherStyles.box_icon} aria-hidden="true">{icon}</span>}
        <span>{placeholder}</span>
    </button>
);

/**
 * @name CtaDescription
 * @author Moisés Reis
 *
 * @desc Renders a subheading or descriptive text for the CTA section, typically placed
 * below the main title. Used to provide additional context or persuasive messaging.
 *
 * @param children - The content to be displayed inside the description element.
 *
 * @example
 * <Cta.Description>
 *   Comece sua jornada
 * </Cta.Description>
 */
const CtaDescription: React.FC<{ children: React.ReactNode }> = ({children}) => (
    <h2 className={descriptionStyles.box}>{children}</h2>
);

/**
 * @name CtaNote
 * @author Moisés Reis
 *
 * @desc A small text element used to display notes, disclaimers, or auxiliary information
 * beneath the main CTA content.
 *
 * @param children - The content to be rendered inside the note element.
 *
 * @example
 * <Cta.Note>
 *   Terms and conditions apply.
 * </Cta.Note>
 */
const CtaNote: React.FC<{ children: React.ReactNode }> = ({children}) => (
    <div role="note" className={noteStyles.box}>{children}</div>
);

/**
 * @name CtaBackground
 *
 * @author Moisés Reis
 *
 * @desc A background container component used in CTA (Call to Action) sections.
 * It displays a full-width background image with an optional overlay effect.
 *
 * @param background - A string representing the image URL to be used as the background.
 *
 * @example
 * <Cta.Background background="/images/cta-bg.jpg" />
 */
const CtaBackground: React.FC<{ background: string }> = ({background}) => (
    <div className={backgroundStyles.box}>
        <Image src={background} width={2048} height={2048} alt=""/>
        <div className={backgroundStyles.box_overlay}></div>
    </div>
);


Cta.Header = CtaHeader; // Renders the header section of the CTA block
Cta.Title = CtaTitle; // Displays the main title for the CTA
Cta.InputLauncher = CtaInputLauncher; // Provides an input field and launch button
Cta.Description = CtaDescription; // Adds a descriptive text to support the CTA
Cta.Note = CtaNote; // Renders an optional note or disclaimer below the CTA
Cta.Background = CtaBackground; // Wraps the CTA with a background image and overlay

export default Cta;