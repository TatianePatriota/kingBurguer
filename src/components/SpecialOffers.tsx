import styled from "styled-components";
import Burguer from "../assets/images/Burguer.png";
import IceCream from "../assets/images/IceCream.png";
import Potato from "../assets/images/Potato.png";
import { ClockIcon } from "./CommonIcons";
import { Container } from "./Container";

export function SpecialOffers(): JSX.Element {
  return (
    <Container>
      <StyledTitleOffers>
        <h1>Ofertas especiais</h1>
        <p>
          Aproveite todas as nossas ofertas, fiquem de olhos abertos, porque
          sempre estamos mudando o nosso cardápio.
        </p>
      </StyledTitleOffers>
      <StyledOffersImages>
        <StyledBurguerSpecialOffers>
          <StyledBurguerTitle>
            <h2>Burger imperial+batata</h2>
            <p>250kg</p>
          </StyledBurguerTitle>
          <div>
            <h3>
              Apenas <span>Hoje</span>
            </h3>
          </div>
        </StyledBurguerSpecialOffers>
        <StyledOffersText>
          <StyledIceCreamSpecialOffers>
            <h4>batata</h4>
            <p>150kg</p>
          </StyledIceCreamSpecialOffers>
          <StyledPotatoSpecialOffers>
            <h4>Sorvete</h4>
            <p>50kg</p>
          </StyledPotatoSpecialOffers>
        </StyledOffersText>
      </StyledOffersImages>
      <StyledContainerHours>
        <StyledOpeningHours>
          <div>
            <ClockIcon />
          </div>
          <StyledTextInformations>
            <h2>Horário de funcionamento</h2>
            <p>Segunda-feira a sexta-feira: 17h00 - 23h00</p>
            <p>Sábado a Domingo: 18h30 - 23h00</p>
          </StyledTextInformations>
        </StyledOpeningHours>
        <StyledInstagramContent>
          <p>Não esqueça de marcar a gente no Instagram:</p>
          <a href="/">#empireburger </a>
        </StyledInstagramContent>
      </StyledContainerHours>
    </Container>
  );
}

export const StyledOffersImages = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 428px) {
    flex-direction: column;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledOffersText = styled.div`
  font-weight: 400;
  color: ${({ theme }) => theme.colors.titleBrown};

  h4 {
    font-size: ${({ theme }) => theme.font.size.default}px;
    font-family: ${({ theme }) => theme.fonts.fontLelita};
    text-transform: uppercase;
    line-height: 22px;
    padding-top: 12px;
    padding-left: 20px;
  }

  p {
    font-size: ${({ theme }) => theme.font.size.middle}px;
    font-family: ${({ theme }) => theme.fonts.fontLato};
    line-height: 25px;
    margin: 0;
    padding-left: 20px;
  }
`;

export const StyledBurguerSpecialOffers = styled.div`
  background: url(${Burguer});
  height: 545px;
  width: 770px;
  margin-right: 20px;
  background-size: contain;
  background-repeat: no-repeat;
  font-weight: 400;

  @media (max-width: 428px) {
    height: 200px;
    width: 370px;
  }

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 30px;
  }
`;

export const StyledBurguerTitle = styled.div`
  padding: 12px;
  h2 {
    font-size: ${({ theme }) => theme.font.gutter.small}px;
    color: ${({ theme }) => theme.colors.lightWhite};
    font-family: ${({ theme }) => theme.fonts.fontLelita};
    line-height: 28px;
    text-transform: uppercase;
    margin: 0;
  }

  p {
    font-size: ${({ theme }) => theme.font.size.middle}px;
    font-family: ${({ theme }) => theme.fonts.fontLato};
    line-height: 25px;
    margin: 0;
    color: ${({ theme }) => theme.colors.lightWhiteSeconday};
  }
`;

export const StyledIceCreamSpecialOffers = styled.div`
  background: url(${IceCream});
  height: 200px;
  width: 370px;
  background-size: contain;
  background-repeat: no-repeat;
  margin-bottom: 30px;
`;

export const StyledPotatoSpecialOffers = styled.div`
  background: url(${Potato});
  height: 200px;
  width: 370px;
  background-size: contain;
  background-repeat: no-repeat;
`;

export const StyledTitleOffers = styled.div`
  h1 {
    font-size: ${({ theme }) => theme.font.gutter.large}px;
    font-family: ${({ theme }) => theme.fonts.fontLelita};
    font-weight: 400;
    text-transform: uppercase;
    line-height: 35px;
    color: ${({ theme }) => theme.colors.titleBrown};
    margin-bottom: 0;
  }

  p {
    font-family: ${({ theme }) => theme.fonts.fontLato};
    font-size: ${({ theme }) => theme.font.size.middle}px;
    line-height: 22px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.titleLightBrown};
  }
`;

export const StyledOpeningHours = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.red};
  border-radius: 10px;
  padding: 22px 76px 28px 30px;

  h2 {
    font-size: ${({ theme }) => theme.font.gutter.small}px;
    font-family: ${({ theme }) => theme.fonts.fontLelita};
    color: ${({ theme }) => theme.colors.titleLightBrown};
    font-weight: 400;
    text-transform: uppercase;
  }

  p {
    color: ${({ theme }) => theme.colors.boldWhite};
    font-size: ${({ theme }) => theme.font.size.small}px;
    font-family: ${({ theme }) => theme.fonts.fontLelita};
    line-height: 22px;
    font-weight: 700;
  }

  svg {
    padding-right: 20px;
  }

  @media (max-width: 428px) {
    padding: 10px;
    p {
      font-family: ${({ theme }) => theme.fonts.fontLato};
      margin: 0;
    }
  }
`;

export const StyledTextInformations = styled.div`
  padding-left: 20px;
  border-left: 1px solid ${({ theme }) => theme.colors.redDark};
`;

export const StyledContainerHours = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 64px;

  @media (max-width: 428px) {
    flex-direction: column;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 40px;
  }
`;

export const StyledInstagramContent = styled.div`
  font-weight: 400;
  padding-left: 30px;

  p {
    font-size: ${({ theme }) => theme.font.size.middle}px;
    font-family: ${({ theme }) => theme.fonts.fontLato};
    color: ${({ theme }) => theme.colors.titleLightBrown};
    line-height: 25px;
  }

  a {
    color: ${({ theme }) => theme.colors.red};
    font-family: ${({ theme }) => theme.fonts.fontLelita};
    text-transform: uppercase;
    line-height: 28px;
    font-size: ${({ theme }) => theme.font.gutter.small}px;
  }

  @media (max-width: 428px) {
    a {
      font-size: ${({ theme }) => theme.font.gutter.large}px;
    }
  }
`;
