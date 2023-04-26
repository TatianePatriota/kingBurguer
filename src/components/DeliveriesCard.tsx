import styled from "styled-components";
import { DeliveriesIconCard } from "./CommonIcons";

export enum DeliveriesIcon {
  WhatsApp = "whatsapp",
  Delivery = "delivery",
  Dessert = "dessert",
  IFood = "ifood",
}

export type DeliveriesCardType = {
  title?: string;
  description?: string;
  icon: DeliveriesIcon;
};

export type CommonProps = {
  deliveries: DeliveriesCardType;
};

export function DeliveriesCard({ deliveries }: CommonProps): JSX.Element {
  return (
    <StyledDeliveryCard>
      <StyledIcons>
        <DeliveriesIconCard icon={deliveries.icon} />
      </StyledIcons>
      <StyledTextCard>
        <h3>{deliveries.title}</h3>
        <p>{deliveries.description}</p>
      </StyledTextCard>
    </StyledDeliveryCard>
  );
}

export const StyledDeliveryCard = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 4px 40px ${({ theme }) => theme.colors.boxShadowColor};
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding: 15px 30px;
  margin-bottom: 8px;
`;

const StyledIcons = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  padding: 15px;
  border-radius: 50%;
  margin-right: 30px;
`;

export const StyledTextCard = styled.div`
  font-weight: 400;
  border-left: 1px solid ${({ theme }) => theme.colors.borderLight};
  padding-left: 24px;

  h3 {
    line-height: 22px;
    font-size: ${({ theme }) => theme.font.size.default}px;
    font-family: ${({ theme }) => theme.fonts.fontLelita};
    color: ${({ theme }) => theme.colors.titleBrown};
    text-transform: uppercase;
  }

  p {
    font-size: ${({ theme }) => theme.font.size.small}px;
    font-family: ${({ theme }) => theme.fonts.fontLato};
    color: ${({ theme }) => theme.colors.titleLightBrown};
    line-height: 19px;
    margin: 0;
  }
`;
