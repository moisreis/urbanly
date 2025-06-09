import SCSS from "./Section.module.scss";
import Button from "../Button/Button";

interface SectionProps {
    title: string;
    children?: React.ReactNode;
    buttonLabel?: string;
    hasSubtitle?: boolean;
    subtitle?: string;
}

const Section: React.FC<SectionProps> = ({title, children, hasSubtitle = false, subtitle, buttonLabel}) => {
    return (
        <section className={SCSS.container}>
            <div className={SCSS.container_header}>
                {!hasSubtitle && (
                    <>
                        <h2>{title}</h2>
                        {buttonLabel && ( <Button variant="outline" hasBackground={false} label={buttonLabel}/> )}
                    </>
                )}
            </div>

            <div className={SCSS.container_grid}>
                {hasSubtitle && (
                    <div className={SCSS.container_grid__header}>
                        <h3>{title}</h3>
                        {subtitle && <p>{subtitle}</p>}
                        {buttonLabel && (
                            <Button variant="accent" hasBackground={false} label={buttonLabel}/>
                        )}
                    </div>
                )}
                {children}
            </div>
        </section>
    );
};

export default Section;
