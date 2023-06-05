import styled from "styled-components";
import { LargeButton } from "./Button";
import WomanEating from "../assets/images/WomanEating.png";
import { Container } from "./Container";

export type PersonalizedServiceType = {
  title: React.ReactNode;
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
const StyledPersonalizedMenu = styled(Container)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-bottom: 128px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGreySecondary};

  @media (max-width: 428px) {
    flex-direction: column;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const StyledPersonalizedImage = styled.div`
  background: url(${WomanEating});
  width: 430px;
  height: 455px;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const StyledBackgroundColor = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundImageColor};
  width: 570px;
  height: 308px;
  border-radius: 35px 154px 154px 35px;
  display: flex;
  align-items: flex-end;

  @media (max-width: 428px) {
    margin-bottom: 100px;
    width: 380px;
    height: 205px;
  }
  @media (max-width: 768px) {
    margin-bottom: 60px;
  }
`;

const StyledMenuText = styled.div`
  width: 30%;
  h1 {
    color: ${({ theme }) => theme.colors.brownBackground};
    text-transform: uppercase;
    font-size: ${({ theme }) => theme.font.gutter.large}px;
    font-family: ${({ theme }) => theme.fonts.fontLelita};
    line-height: 46px;
  }
  span {
    background-color: ${({ theme }) => theme.colors.yellowDark};
    border-radius: 8px;
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

  @media (max-width: 428px) {
    width: 100%;
    text-align: start;

    h1 {
      font-size: ${({ theme }) => theme.font.gutter.small}px;
    }
  }
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 30px;
  }
`;
