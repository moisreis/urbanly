import Cta from "../components/Cta/Cta";
import PropertyCard from "@/components/PropertyCard/PropertyCard";
import LocationCard from "@/components/LocationCard/LocationCard";
import Section from "../components/Section/Section";
import SocialProof from "../components/SocialProof/SocialProof";

export default function Main() {
    return (
        <main>
            <Cta badgeLabel="+20 anos de experiência" ctaTitle="Explore as melhores propriedades da região" ctaDescription="Clientes satisfeitos em mais de 30 cidades" ctaBottomText="Explore 700+ casas e apartamentos para venda e aluguel em toda a região" bgImage="/images/UhpYKnqZwE8.jpg" />
            <Section title="Casas que vai amar" buttonLabel="Ver mais">
                <PropertyCard title="Apartamento mobiliado na Serrinha" price="R$2.500,00/mês" cardPicture="/images/mx4mSkK9zeo.jpg" />
                <PropertyCard title="Casa de alto padrão no Leader" price="R$3.500,00/mês" cardPicture="/images/UhpYKnqZwE8.jpg" />
                <PropertyCard title="Apartamento na Matriz" price="R$1.500,00/mês" cardPicture="/images/01mdxRs.jpg" />
                <PropertyCard title="Apartamento no Bairro dos Índios" price="R$2.500,00/mês" cardPicture="/images/2d4lAQAlbDA.jpg" />
                <PropertyCard title="Casa na Estação" price="R$2.500,00/mês" cardPicture="/images/xtDpXi_a-YQ.jpg" />
            </Section>
            <Section
                title="Destaque semanal"
                hasSubtitle={true}
                gridColumns={2}
                subtitle="Este apartamento mobiliado na Serrinha é uma excelente opção para quem busca conforto e praticidade em uma localização privilegiada."
            >
                <PropertyCard title="Apartamento mobiliado na Serrinha" price="R$2.500,00/mês" cardPicture="/images/mx4mSkK9zeo.jpg" />
            </Section>
            <SocialProof title="O principal mercado para imóveis de luxo e ativos de alto valor." gridColumns={3} />
            <Section title="Terrenos à venda" buttonLabel="Ver mais">
                <PropertyCard title="Apartamento mobiliado na Serrinha" price="R$2.500,00/mês" cardPicture="/images/mx4mSkK9zeo.jpg" />
                <PropertyCard title="Casa de alto padrão no Leader" price="R$3.500,00/mês" cardPicture="/images/UhpYKnqZwE8.jpg" />
                <PropertyCard title="Apartamento na Matriz" price="R$1.500,00/mês" cardPicture="/images/667510869.jpg" />
                <PropertyCard title="Apartamento no Bairro dos Índios" price="R$2.500,00/mês" cardPicture="/images/2d4lAQAlbDA.jpg" />
                <PropertyCard title="Casa na Estação" price="R$2.500,00/mês" cardPicture="/images/xtDpXi_a-YQ.jpg" />
            </Section>
            <Section title="Novidades" gridColumns={5} buttonLabel="Ver mais" hasSubtitle={true} subtitle="Descubra os imóveis que estão chamando a atenção no mercado. Esta seleção curada apresenta as propriedades mais desejadas disponíveis no momento.">
                <PropertyCard title="Apartamento mobiliado na Serrinha" price="R$2.500,00/mês" cardPicture="/images/mx4mSkK9zeo.jpg" />
                <PropertyCard title="Casa de alto padrão no Leader" price="R$3.500,00/mês" cardPicture="/images/UhpYKnqZwE8.jpg" />
                <PropertyCard title="Apartamento na Matriz" price="R$1.500,00/mês" cardPicture="/images/xtDpXi_a-YQ.jpg" />
                <PropertyCard title="Apartamento no Bairro dos Índios" price="R$2.500,00/mês" cardPicture="/images/2d4lAQAlbDA.jpg" />
            </Section>
            <Section title="Pesquisas populares" buttonLabel="Ver todas" gridColumns={3}>
                <LocationCard location="Félix Thomaz" quantity="45" cardPicture="/images/mx4mSkK9zeo.jpg" />
                <LocationCard location="Leader" quantity="453" cardPicture="/images/UhpYKnqZwE8.jpg" />
                <LocationCard location="Mundo Novo" quantity="298" cardPicture="/images/xtDpXi_a-YQ.jpg" />
                <LocationCard location="Bairro dos Índios" quantity="12" cardPicture="/images/2d4lAQAlbDA.jpg" />
                <LocationCard location="Inocoop" quantity="12" cardPicture="/images/2d4lAQAlbDA.jpg" />
                <LocationCard location="Itaitu" quantity="12" cardPicture="/images/2d4lAQAlbDA.jpg" />
            </Section>
        </main>
    );
}
