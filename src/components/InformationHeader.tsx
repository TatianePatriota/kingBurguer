import styled from "styled-components";
import { InformationHeaderIcons } from "./CommonIcons";

export enum HeaderIcon {
  Burguer = "Burguer",
  Fone = "Fone",
  Delivery = "Delivery",
}

export type InformationType = {
  title?: string;
  description?: string;
  icon: HeaderIcon;
};

export type CommonProps = {
  informations: InformationType;
};

export function InformationHeader({ informations }: CommonProps): JSX.Element {
  return (
    <StyledBackground>
      <InformationHeaderIcons icon={informations.icon} />

      <h3>{informations.title}</h3>
      <p>{informations.description}</p>
    </StyledBackground>
  );
}

const StyledBackground = styled.div`
  margin: 0 auto;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 4px 40px rgba(179, 155, 132, 0.5);
`;

const StyledInformationHeader = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 970px;
  font-weight: 400;

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
  border-right: 1px solid ${({ theme }) => theme.colors.lightGrey};

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
