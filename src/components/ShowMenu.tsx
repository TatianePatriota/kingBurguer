import { LargeButton } from "./Button";
import BuguerMenu from "../assets/images/BuguerMenu.png";
import styled from "styled-components";

export type ShowMenuType = {
  title: string;
  text: string;
  textLink: string;
};

export function ShowMenu({ title, text, textLink }: ShowMenuType): JSX.Element {
  return (
    <StyledMenuImage>
      <StyledMenuText>
        <h1>{title}</h1>
        <p>{text}</p>
        <LargeButton>
          <a href="/">{textLink}</a>
        </LargeButton>
      </StyledMenuText>
    </StyledMenuImage>
  );
}
export const StyledMenuImage = styled.div`
  background: url(${BuguerMenu});
  height: 575px;
  background-size: contain;
  background-repeat: no-repeat;
  font-weight: 400;
  width: 50%;
`;

export const StyledMenuText = styled.div`
  padding: 180px 110px 0 375px;

  h1 {
    color: ${({ theme }) => theme.colors.brownBackground};
    text-transform: uppercase;
    font-size: ${({ theme }) => theme.font.gutter.large}px;
    font-family: ${({ theme }) => theme.fonts.fontLelita};
  }
  span {
    background-color: ${({ theme }) => theme.colors.yellowDark};
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
