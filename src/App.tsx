import { BannerHeader } from "./components/BannerHeader";
import { CarouselComments } from "./components/Carousel";
import { Deliveries } from "./components/Deliveries";
import { deliveriesOptions } from "./components/Deliveries-services";
import { Footer } from "./components/Footer";
import { informations } from "./components/HeaderInformation";
import { Localization } from "./components/Localization";
import { Menu } from "./components/Menu";
import { PersonalizedService } from "./components/PersonalizedService";
import { PublicationsInstagram } from "./components/PublicationsInstagram";
import { SpecialOffers } from "./components/SpecialOffers";
import { TextHeader } from "./components/TextHeader";
import { InformationsList } from "./components/Informations";
import { Navigation } from "./components/Navigation";
import styled from "styled-components";

function App(): JSX.Element {
  return (
    <StyledApp>
      <Navigation />
      <BannerHeader>
        <TextHeader
          title={
            <>
              King <span>Burger</span>
            </>
          }
          text={
            <>
              Para quem tem um <span>Apetite de um REI!</span>
            </>
          }
          subTitle="Uma nova experiência!"
          textLink="Comprar Agora"
        />
      </BannerHeader>
      <InformationsList items={informations} />
      <SpecialOffers />
      <Menu
        title={
          <>
            Escolha o seu combo imperial, <span> peça agora!</span>
          </>
        }
        text="Temos vários tipos de pratos para a nossa realeza, fique esperto
        porque temos sempre promoção!"
        textLink="Ver Cardápio Completo"
      />
      <PersonalizedService
        title={
          <>
            Atendimento
            <span>Personalizado</span>
          </>
        }
        description="Todos os nossos clientes são tratados como rei e rainha, com a nossa
        culinária artesanal."
        textLink="Cardápio Imperial"
      />
      <CarouselComments />
      <PublicationsInstagram
        title="Publicações do Instagram"
        description="Todos os nossos clientes são tratados como rei e rainha, com a nossa
          colunaria artesanal."
        text="• #empireburger • #empireburger • #empireburger • #empireburger •
          #empireburger • #empireburger • #empireburger "
      />
      <Deliveries items={deliveriesOptions} />
      <Localization
        title="Onde ficar a nosso castelo"
        description="Estaremos de portas abertas para a nossa realeza."
      />
      <Footer />
    </StyledApp>
  );
}

export default App;

const StyledApp = styled.div`
  overflow-x: hidden;
`;
