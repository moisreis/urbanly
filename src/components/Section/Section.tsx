import SCSS from "./Section.module.scss";
import Button from "../Button/Button";
import style from "@/components/Button/Button.module.scss";

interface SectionProps {
    title: string;
    children?: React.ReactNode;
    buttonLabel?: string;
    hasSubtitle?: boolean;
    subtitle?: string;
    gridColumns?: number;
}

const Section: React.FC<SectionProps> = ({title, children, gridColumns = 5, hasSubtitle = false, subtitle, buttonLabel}) => {
    const gridClass = SCSS[`container_grid__${gridColumns}`] ?? style.container_grid__5;
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

            <div className={gridClass}>
                {hasSubtitle && (
                    <div className={SCSS.container_firstColHeader}>
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
