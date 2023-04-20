import styled from "styled-components";
import FristBurguer from "../assets/images/Burguer01.png";
import SecondBurguer from "../assets/images/Burguer02.png";
import ThirdBurguer from "../assets/images/Burguer03.png";
import FourthBurguer from "../assets/images/Burguer04.png";
import FifthBurguer from "../assets/images/Burguer05.png";
import SixthBurguer from "../assets/images/Burguer06.png";
import SeventhBurguer from "../assets/images/Burguer07.png";
import EighthBurguer from "../assets/images/Burguer08.png";

export function PublicationsInstagram(): JSX.Element {
  return (
    <div>
      <StyledPublicationsText>
        <h1>Publicações do Instagram</h1>
        <p>
          Todos os nossos clientes são tratados como rei e rainha, com a nossa
          colunaria artesanal.
        </p>
      </StyledPublicationsText>
      <StyledHamburguersContainer>
        <StyledFristBurguer />
        <StyledSecondBurguer />
        <StyledThirdBurguer />
        <StyledFourthBurguer />
        <StyledFifthBurguer />
        <StyledSixthBurguer />
        <StyledSeventhBurguer />
        <StyledEighthBurguer />
      </StyledHamburguersContainer>
      <StyledText>
        <p>
          • #empireburger • #empireburger • #empireburger • #empireburger •
          #empireburger • #empireburger • #empireburger • #empireburger •
          #empire
        </p>
      </StyledText>
    </div>
  );
}

const StyledPublicationsText = styled.div`
  font-weight: 400;
  text-align: center;
  margin-top: 120px;
  h1 {
    color: ${({ theme }) => theme.colors.titleBrown};
    text-transform: uppercase;
    font-size: ${({ theme }) => theme.font.gutter.default}px;
    line-height: 35px;
    font-family: ${({ theme }) => theme.fonts.fontLelita};
  }

  p {
    color: ${({ theme }) => theme.colors.titleBrown};
    font-family: ${({ theme }) => theme.fonts.fontLato};
    line-height: 22px;
    font-size: ${({ theme }) => theme.font.size.small}px;
    margin-top: 4px;
  }
`;

const StyledHamburguersContainer = styled.div`
  display: flex;
`;

const StyledFristBurguer = styled.div`
  background: url(${FristBurguer});
  width: 270px;
  height: 218px;
  background: contain;
  background-repeat: no-repeat;
`;

const StyledSecondBurguer = styled.div`
  background: url(${SecondBurguer});
  width: 270px;
  height: 218px;
  background-size: contain;
  background-repeat: no-repeat;
`;

const StyledThirdBurguer = styled.div`
  background: url(${ThirdBurguer});
  width: 270px;
  height: 218px;
  background-size: contain;
  background-repeat: no-repeat;
`;

const StyledFourthBurguer = styled.div`
  background: url(${FourthBurguer});
  width: 270px;
  height: 218px;
  background-size: contain;
  background-repeat: no-repeat;
`;

const StyledFifthBurguer = styled.div`
  background: url(${FifthBurguer});
  width: 270px;
  height: 218px;
  background-size: contain;
  background-repeat: no-repeat;
`;

const StyledSixthBurguer = styled.div`
  background: url(${SixthBurguer});
  width: 270px;
  height: 218px;
  background-size: contain;
  background-repeat: no-repeat;
`;

const StyledSeventhBurguer = styled.div`
  background: url(${SeventhBurguer});
  width: 270px;
  height: 218px;
  background-size: contain;
  background-repeat: no-repeat;
`;

const StyledEighthBurguer = styled.div`
  background: url(${EighthBurguer});
  width: 270px;
  height: 218px;
  background-size: contain;
  background-repeat: no-repeat;
`;

const StyledText = styled.div`
  background-color: ${({ theme }) => theme.colors.yellow};
  height: 30px;

  p {
    color: ${({ theme }) => theme.colors.titleBrown};
    text-transform: uppercase;
    text-align: center;
    font-size: ${({ theme }) => theme.font.gutter.small}px;
    font-weight: 400;
    font-family: ${({ theme }) => theme.fonts.fontLelita};
    margin: 0;
  }
`;
