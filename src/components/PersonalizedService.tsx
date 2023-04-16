import styled from "styled-components";
import { LargeButton } from "./Button";
import WomanEating from "../assets/images/WomanEating.png";
import { PropsWithChildren } from "react";
export function PersonalizedService(): JSX.Element {
  return (
    <StyledPersonalizedMenu>
      <BackgroundColor>
        <StyledPersonalizedImage></StyledPersonalizedImage>
      </BackgroundColor>
      <div>
        <h1>Atendimento personalizado</h1>
        <p>
          Todos os nossos clientes são tratados como rei e rainha, com a nossa
          colunaria artesanal.
        </p>
        <LargeButton>Cardápio Imperial</LargeButton>
      </div>
    </StyledPersonalizedMenu>
  );
}
const StyledPersonalizedMenu = styled.div``;

const StyledPersonalizedImage = styled.div`
  background: url(${WomanEating});
  width: 200px;
  height: 575px;
  background-size: contain;
  background-repeat: no-repeat;
`;

const StyledTextPersonalizedMenu = styled.div`
  background-color: ${({ theme }) => theme.colors.menuColor};
`;

export function BackgroundColor({ children }: PropsWithChildren): JSX.Element {
  return <StyledBackgroundColor></StyledBackgroundColor>;
}

export const StyledBackgroundColor = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundImageColor};
`;
