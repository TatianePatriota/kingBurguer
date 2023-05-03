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
  information: InformationType;
};

export function InformationItem({ information }: CommonProps): JSX.Element {
  return (
    <Styledinformation>
      <StyledBackgroundIcons>
        <InformationHeaderIcons icon={information.icon} />
      </StyledBackgroundIcons>
      <StyledInformationHeader>
        <h3>{information.title}</h3>
        <p>{information.description}</p>
      </StyledInformationHeader>
    </Styledinformation>
  );
}

const Styledinformation = styled.div`
  display: flex;
  border-left: 1px solid ${({ theme }) => theme.colors.lightGrey};
  padding-left: 50px;

  :first-child {
    border: none;
    padding-left: 0;
  }
`;

const StyledInformationHeader = styled.div`
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

const StyledBackgroundIcons = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  padding: 20px;
  border-radius: 50%;
  text-align: center;
  margin-right: 18px;
`;
