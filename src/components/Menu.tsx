import styled from "styled-components";
import { LargeButton } from "./Button";
import BuguerMenu from "../assets/images/BuguerMenu.png";

export function Menu() {
  return (
    <StyledContainerMenu>
      <StyledMenuText>
        <h1>
          Escolha o seu combo imperial, <span>peça agora!</span>
        </h1>
        <p>
          Temos vários tipos de pratos para a nossa realeza, fique esperto
          porque temos sempre promoção!
        </p>
        <LargeButton>
          <a href="/">Ver Cardápio Completo</a>
        </LargeButton>
      </StyledMenuText>
      <StyledMenuPrices>
        <h2>Cardápio imperial | Burger</h2>
        <div>
          <h3>
            Classic burger
            .........................................................................
            <span>R$49,99</span>
          </h3>
          <p>
            Hamburguer bonino 160g, Molho, Bacon, Queijo prato, peito de peru,
            Tomate, Alface, Servidor do pão de batata
          </p>
        </div>
        <div>
          <h3>
            Special big burger
            ..................................................................
            <span>R$49,99</span>
          </h3>
          <p>
            Hamburguer bonino 160g, Molho, Bacon, Queijo prato, peito de peru,
            Tomate, Alface, Servidor do pão de batata
          </p>
        </div>
        <div>
          <h3>
            special big burger
            ..................................................................
            <span>R$49,99</span>
          </h3>
          <p>
            Hamburguer bonino 160g, Molho, Bacon, Queijo prato, peito de peru,
            Tomate, Alface, Servidor do pão de batata
          </p>
        </div>
        <div>
          <h3>
            Mexican burger
            ......................................................................
            <span>R$49,99</span>
          </h3>
          <p>
            Hamburguer bonino 160g, Molho, Bacon, Queijo prato, peito de peru,
            Tomate, Alface, Servidor do pão de batata
          </p>
        </div>
      </StyledMenuPrices>
    </StyledContainerMenu>
  );
}

const StyledMenuText = styled.div`
  background: url(${BuguerMenu});
  height: 575px;
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  font-weight: 400;
  width: 50%;
  h1 {
    color: ${({ theme }) => theme.colors.brownBackground};
    text-transform: uppercase;
    font-size: ${({ theme }) => theme.font.gutter.large}px;
    font-family: ${({ theme }) => theme.fonts.fontLelita};
  }
  span {
    background-color: ${({ theme }) => theme.colors.yellow};
  }
  p {
    font-size: ${({ theme }) => theme.font.size.small}px;
    font-family: ${({ theme }) => theme.fonts.fontLato};
    color: ${({ theme }) => theme.colors.titleLightBrown};
  }

  a {
    font-weight: 700;
    font-size: ${({ theme }) => theme.font.size.small}px;
  }
`;

const StyledMenuPrices = styled.div`
  background-color: ${({ theme }) => theme.colors.brownBackground};
  color: ${({ theme }) => theme.colors.menuColor};
  position: absolute;
  height: 575px;
  width: 50%;
  right: 0;
  padding-left: 30px;

  h2 {
    color: ${({ theme }) => theme.colors.yellow};
    text-transform: uppercase;
    font-size: ${({ theme }) => theme.font.gutter.default}px;
    font-family: ${({ theme }) => theme.fonts.fontLelita};
    line-height: 35px;
    margin-bottom: 15px;
    padding-top: 70px;
    padding-top: 15px;
  }
  h3 {
    color: ${({ theme }) => theme.colors.menuColor};
    text-transform: uppercase;
    font-size: ${({ theme }) => theme.font.size.default}px;
    font-family: ${({ theme }) => theme.fonts.fontLelita};
    line-height: 22px;
    padding-bottom: 4px;
  }

  p {
    color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.fonts.fontLato};
    line-height: 22px;
    font-weight: 400;
    font-size: ${({ theme }) => theme.font.size.small}px;
  }
`;

const StyledContainerMenu = styled.div`
  position: relative;
`;

// const StyledMenuContent
