import {Search, User2} from "lucide-react";
import Cta from "../components/Cta/Cta"; // Call-to-action section with search and background image
import PropertyCard from "@/components/PropertyCard/PropertyCard"; // Displays individual property listings with key details
import LocationCard from "@/components/LocationCard/LocationCard"; // Showcases popular cities or neighborhoods
import Section from "../components/Section/Section"; // Generic container used to structure page content
import SocialProof from "../components/SocialProof/SocialProof";
import Button from "@/components/Button/Button"; // Displays trust-building content

export default function Main() {
    return (
        <main>
            <Cta
                badge="+20 anos de experiência"
                title="Explore as melhores propriedades da região"
                description="Clientes satisfeitos em mais de 30 cidades"
                note="Explore 700+ casas e apartamentos para venda e aluguel em toda a região"
                background="/images/UhpYKnqZwE8.jpg"
                placeholder="Matriz, Jacobina, Bahia"
                icon={<Search/>}
                navigation={
                    <>
                        <Button label="Alugue um apê" variant="link" hasBackground={true}/>
                        <Button label="Compre um imóvel" variant="link" hasBackground={true}/>
                        <Button label="Anuncie uma venda" variant="link" hasBackground={true}/>
                        <Button label="Entrar" variant="outline" hasBackground={true} isRounded={true} icon={<User2/>}/>
                    </>
                }
            />
            <Section title="Casas que vai amar" buttonLabel="Ver mais">
                <PropertyCard title="Apartamento mobiliado na Serrinha" price="R$2.500,00/mês"
                              cardPicture="/images/mx4mSkK9zeo.jpg"/>
                <PropertyCard title="Casa de alto padrão no Leader" price="R$3.500,00/mês"
                              cardPicture="/images/UhpYKnqZwE8.jpg"/>
                <PropertyCard title="Apartamento na Matriz" price="R$1.500,00/mês" cardPicture="/images/01mdxRs.jpg"/>
                <PropertyCard title="Apartamento no Bairro dos Índios" price="R$2.500,00/mês"
                              cardPicture="/images/2d4lAQAlbDA.jpg"/>
                <PropertyCard title="Casa na Estação" price="R$2.500,00/mês" cardPicture="/images/xtDpXi_a-YQ.jpg"/>
            </Section>
            <Section
                title="Destaque semanal"
                hasSubtitle={true}
                gridColumns={2}
                subtitle="Este apartamento mobiliado na Serrinha é uma excelente opção para quem busca conforto e praticidade em uma localização privilegiada."
            >
                <PropertyCard title="Apartamento mobiliado na Serrinha" price="R$2.500,00/mês"
                              cardPicture="/images/mx4mSkK9zeo.jpg"/>
            </Section>
            <SocialProof title="O principal mercado para imóveis de luxo e ativos de alto valor." gridColumns={3}/>
            <Section title="Terrenos à venda" buttonLabel="Ver mais">
                <PropertyCard title="Apartamento mobiliado na Serrinha" price="R$2.500,00/mês"
                              cardPicture="/images/mx4mSkK9zeo.jpg"/>
                <PropertyCard title="Casa de alto padrão no Leader" price="R$3.500,00/mês"
                              cardPicture="/images/UhpYKnqZwE8.jpg"/>
                <PropertyCard title="Apartamento na Matriz" price="R$1.500,00/mês" cardPicture="/images/667510869.jpg"/>
                <PropertyCard title="Apartamento no Bairro dos Índios" price="R$2.500,00/mês"
                              cardPicture="/images/2d4lAQAlbDA.jpg"/>
                <PropertyCard title="Casa na Estação" price="R$2.500,00/mês" cardPicture="/images/xtDpXi_a-YQ.jpg"/>
            </Section>
            <Section title="Novidades" gridColumns={5} buttonLabel="Ver mais" hasSubtitle={true}
                     subtitle="Descubra os imóveis que estão chamando a atenção no mercado. Esta seleção curada apresenta as propriedades mais desejadas disponíveis no momento.">
                <PropertyCard title="Apartamento mobiliado na Serrinha" price="R$2.500,00/mês"
                              cardPicture="/images/mx4mSkK9zeo.jpg"/>
                <PropertyCard title="Casa de alto padrão no Leader" price="R$3.500,00/mês"
                              cardPicture="/images/UhpYKnqZwE8.jpg"/>
                <PropertyCard title="Apartamento na Matriz" price="R$1.500,00/mês"
                              cardPicture="/images/xtDpXi_a-YQ.jpg"/>
                <PropertyCard title="Apartamento no Bairro dos Índios" price="R$2.500,00/mês"
                              cardPicture="/images/2d4lAQAlbDA.jpg"/>
            </Section>
            <Section title="Pesquisas populares" buttonLabel="Ver todas" gridColumns={3}>
                <LocationCard location="Félix Thomaz" quantity="45" cover="/images/mx4mSkK9zeo.jpg"/>
                <LocationCard location="Leader" quantity="453" cover="/images/UhpYKnqZwE8.jpg"/>
                <LocationCard location="Mundo Novo" quantity="298" cover="/images/xtDpXi_a-YQ.jpg"/>
                <LocationCard location="Bairro dos Índios" quantity="12" cover="/images/2d4lAQAlbDA.jpg"/>
                <LocationCard location="Inocoop" quantity="12" cover="/images/2d4lAQAlbDA.jpg"/>
                <LocationCard location="Itaitu" quantity="12" cover="/images/2d4lAQAlbDA.jpg"/>
            </Section>
        </main>
    );
}
