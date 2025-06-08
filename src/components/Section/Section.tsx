import SCSS from "./Section.module.scss";
import Button from "../Button/Button";

interface SectionProps {
    title: string;
    children?: React.ReactNode;
    buttonLabel?: string;
}

const Section: React.FC<SectionProps> = ({title, children, buttonLabel}) => {
    return (
        <section className={SCSS.container}>
            <div className={SCSS.container_header}>
                <h2>{title}</h2>
                {buttonLabel && (<Button variant="outline" hasBackground={false} label={buttonLabel}></Button>)}
            </div>
            <div className={SCSS.container_grid}>
                {children}
            </div>
        </section>
    )
}

export default Section;