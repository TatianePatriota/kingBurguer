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
      <div>
        <h1>Publicações do Instagram</h1>
        <p>
          Todos os nossos clientes são tratados como rei e rainha, com a nossa
          colunaria artesanal.
        </p>
      </div>
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
    </div>
  );
}

const StyledHamburguersContainer = styled.div`
  display: flex;
  width: 100%;
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
