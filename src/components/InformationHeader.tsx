import styled from "styled-components";
import { BurguerIcon, DeliveryIcon, FoneIcon } from "./CommonIcons";

export function InformationHeader(): JSX.Element {
  return (
    <StyledInformationHeader>
      <StyledInformations>
        <StyledBackgroundIcons>
          <BurguerIcon />
        </StyledBackgroundIcons>
        <div>
          <h3>Artesanal</h3>
          <p>Nossas receitas são feitas com todo cuidado</p>
        </div>
      </StyledInformations>
      <StyledInformations>
        <StyledBackgroundIcons>
          <FoneIcon />
        </StyledBackgroundIcons>
        <div>
          <h3>Atendimento</h3>
          <p>Totalmente personalizado</p>
        </div>
      </StyledInformations>
      <StyledInformations>
        <StyledInformations>
          <StyledBackgroundIcons>
            <DeliveryIcon />
          </StyledBackgroundIcons>
          <div>
            <h3>DELIVERY Speed</h3>
            <p>Entregamos menos de 45 minutos</p>
          </div>
        </StyledInformations>
      </StyledInformations>
    </StyledInformationHeader>
  );
}

const StyledInformationHeader = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 5px;
  width: 970px;
  font-weight: 400;
  margin: -50px auto;

  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 4px 40px rgba(179, 155, 132, 0.5);

  h3 {
    font-family: ${({ theme }) => theme.fonts.fontLelita};
    line-height: 22px;
    font-size: ${({ theme }) => theme.font.size.default}px;
    color: ${({ theme }) => theme.colors.titleBrown};
    margin-bottom: 0;
  }

  p {
    color: ${({ theme }) => theme.colors.titleLightBrown};
    font-family: ${({ theme }) => theme.fonts.fontLato};
    font-size: ${({ theme }) => theme.font.size.small}px;
    line-height: 19px;
    opacity: 0.6;
    margin-top: 5px;
  }
`;

const StyledInformations = styled.div`
  display: flex;
  align-items: center;
  border-right: 1px solid ${({ theme }) => theme.colors.lightGrey};
  padding-left: 20px;
  padding-right: 15px;

  :last-child {
    border: none;
  }
`;

const StyledBackgroundIcons = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  padding: 15px;
  border-radius: 50%;
  text-align: center;
  margin-right: 18px;
`;
