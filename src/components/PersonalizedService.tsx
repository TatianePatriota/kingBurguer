import styled from "styled-components";
import { LargeButton } from "./Button";
import WomanEating from "../assets/images/WomanEating.png";

export type PersonalizedServiceType = {
  title: string;
  description: string;
  textLink: string;
};

export function PersonalizedService({
  title,
  description,
  textLink,
}: PersonalizedServiceType): JSX.Element {
  return (
    <StyledPersonalizedMenu>
      <StyledBackgroundColor>
        <StyledPersonalizedImage></StyledPersonalizedImage>
      </StyledBackgroundColor>
      <StyledMenuText>
        <h1>{title}</h1>
        <p>{description}</p>
        <LargeButton>
          <a href="/">{textLink}</a>
        </LargeButton>
      </StyledMenuText>
    </StyledPersonalizedMenu>
  );
}
const StyledPersonalizedMenu = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 160px 375px 128px 375px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGreySecondary};
`;

const StyledPersonalizedImage = styled.div`
  background: url(${WomanEating});
  width: 430px;
  height: 455px;
  background-size: contain;
  background-repeat: no-repeat;
`;

export const StyledBackgroundColor = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundImageColor};
  width: 570px;
  height: 308px;
  border-radius: 35px 154px 154px 35px;
  display: flex;
  align-items: flex-end;
`;

const StyledMenuText = styled.div`
  width: 480px;
  h1 {
    color: ${({ theme }) => theme.colors.brownBackground};
    text-transform: uppercase;
    font-size: ${({ theme }) => theme.font.gutter.large}px;
    font-family: ${({ theme }) => theme.fonts.fontLelita};
    line-height: 46px;
  }
  span {
    background-color: ${({ theme }) => theme.colors.yellow};
  }
  p {
    font-size: ${({ theme }) => theme.font.size.default}px;
    font-family: ${({ theme }) => theme.fonts.fontLato};
    color: ${({ theme }) => theme.colors.titleLightBrown};
  }

  a {
    font-weight: 700;
    font-size: ${({ theme }) => theme.font.size.small}px;
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.font.size.default + 2}px;
  }
`;
