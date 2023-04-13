import { LargeButton } from "./Button";
import styled from "styled-components";

export function TextHeader(): JSX.Element {
  return (
    <StyledTextHeader>
      <h2>Uma nova experiência!</h2>
      <h1>
        King
        <span>burger</span>
      </h1>
      <p>
        Para quem tem um <span> Apetite de um REI!</span>
      </p>
      <LargeButton>
        <a href="/">Comprar Agora</a>
      </LargeButton>
    </StyledTextHeader>
  );
}

const StyledTextHeader = styled.div`
  color: ${({ theme }) => theme.colors.titleBrown};
  padding-top: 200px;
  padding-left: 350px;

  h2 {
    font-weight: 700;
    font-family: ${({ theme }) => theme.fonts.fontLato};
    font-size: ${({ theme }) => theme.font.size.default}px;
    line-height: 23px;

    margin: 0;
  }

  h1 {
    font-family: ${({ theme }) => theme.fonts.fontLelita};
    font-weight: 400;
    line-height: 85px;
    font-size: ${({ theme }) => theme.font.gutter.big}px;
    text-transform: uppercase;
    margin: 0;

    span {
      color: ${({ theme }) => theme.colors.yellow};
      padding-left: 15px;
    }
  }

  p {
    font-family: ${({ theme }) => theme.fonts.fontLato};
    font-weight: 400;
    font-size: ${({ theme }) => theme.font.size.default}px;
    line-height: 32px;
    margin: 0;

    span {
      font-weight: 900;
      color: ${({ theme }) => theme.colors.titleLightBrown};
      background-color: ${({ theme }) => theme.colors.yellow};
      padding: 2px;
      border-radius: 5px;
    }
  }
`;
