import { LargeButton } from "./Button";
import styled from "styled-components";
import { Container } from "./Container";

export type TextHeaderType = {
  title: string;
  text: string;
  subTitle: string;
  textLink: string;
};

export function TextHeader({
  title,
  text,
  subTitle,
  textLink,
}: TextHeaderType): JSX.Element {
  return (
    <StyledTextHeader>
      <h2>{subTitle}</h2>
      <h1>{title}</h1>
      <p>{text}</p>
      <LargeButton>
        <a href="/">{textLink}</a>
      </LargeButton>
    </StyledTextHeader>
  );
}

const StyledTextHeader = styled(Container)`
  color: ${({ theme }) => theme.colors.titleBrown};
  padding-top: 170px;

  h2 {
    font-weight: 700;
    font-family: ${({ theme }) => theme.fonts.fontLato};
    font-size: ${({ theme }) => theme.font.size.default}px;
    line-height: 23px;
  }

  h1 {
    font-family: ${({ theme }) => theme.fonts.fontLelita};
    font-weight: 400;
    line-height: 85px;
    font-size: ${({ theme }) => theme.font.gutter.big}px;
    text-transform: uppercase;

    span {
      color: ${({ theme }) => theme.colors.yellowDark};
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
      background-color: ${({ theme }) => theme.colors.yellowDark};
      padding: 2px;
      border-radius: 5px;
    }
  }
`;
