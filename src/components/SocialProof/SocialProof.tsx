import SCSS from "./SocialProof.module.scss";
import style from "@/components/Button/Button.module.scss";
import {House, SlidersHorizontal, UserCheck} from "lucide-react";

interface SocialProofProps {
    title: string;
    buttonLabel?: string;
    gridColumns?: number;
}

const SocialProof: React.FC<SocialProofProps> = ({title, gridColumns = 5}) => {
    const gridClass = SCSS[`container_grid__${gridColumns}`] ?? style.container_grid__3;
    return (
        <section className={SCSS.container}>
            <div className={SCSS.container_header}>
                <h2>{title}</h2>
            </div>
            <div className={gridClass}>
                <div className={SCSS.container_item}>
                    <House/>
                    <h3>As Melhores Oportunidades Imobiliárias em Jacobina</h3>
                    <p>Conectamos você às principais imobiliárias e corretores especializados da região de Jacobina, garantindo acesso a uma seleção exclusiva de imóveis de alto padrão, terrenos valorizados e propriedades com grande potencial de investimento.</p>
                </div>
                <div className={SCSS.container_item}>
                    <SlidersHorizontal/>
                    <h3>Busca Personalizada</h3>
                    <p>Sua busca é feita sob medida. Oferecemos filtros avançados, listas de favoritos, alertas de novas oportunidades e recomendações personalizadas, tudo para facilitar sua jornada na escolha do imóvel ideal.</p>
                </div>
                <div className={SCSS.container_item}>
                    <UserCheck/>
                    <h3>Contato Direto com o Mercado Local</h3>
                    <p>Nosso catálogo é atualizado constantemente, com novas listagens inseridas diariamente. Você tem acesso a preços em tempo real e contato direto com os profissionais responsáveis por cada imóvel.</p>
                </div>
            </div>
        </section>
    );
};

export default SocialProof;
