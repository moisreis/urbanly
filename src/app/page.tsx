import Cta from "../components/Cta/Cta";
import Card from "../components/Card/Card";
import Section from "../components/Section/Section";

export default function Main() {
    return (
        <main>
            <Cta badgeLabel="+20 anos de experiência" ctaTitle="Explore as melhores propriedades da região" ctaDescription="Clientes satisfeitos em mais de 30 cidades" ctaBottomText="Explore 700+ casas e apartamentos para venda e aluguel em toda a região" bgImage="/images/mx4mSkK9zeo.jpg" />
            <Section title="Casas que vai amar" buttonLabel="Ver mais">
                <Card title="Apartamento mobiliado na Serrinha" price="R$2.500,00/mês" cardPicture="/images/mx4mSkK9zeo.jpg" />
                <Card title="Casa de alto padrão no Leader" price="R$3.500,00/mês" cardPicture="/images/2d4lAQAlbDA.jpg" />
                <Card title="Apartamento na Matriz" price="R$1.500,00/mês" cardPicture="/images/tHkJAMcO3QE.jpg" />
                <Card title="Apartamento no Bairro dos Índios" price="R$2.500,00/mês" cardPicture="/images/2d4lAQAlbDA.jpg" />
                <Card title="Casa na Estação" price="R$2.500,00/mês" cardPicture="/images/tHkJAMcO3QE.jpg" />
            </Section>
        </main>
    );
}
