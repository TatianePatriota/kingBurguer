import styled from "styled-components";
import PhoneBurguer from "../assets/images/phoneBurguer.png";
import { DeliveriesCard, DeliveriesCardType } from "./DeliveriesCard";
import { StyledBackgroundColor } from "./PersonalizedService";
import { MenuOrders } from "./MenuOrders";
import { Container } from "./Container";

export type DeliveriesType = {
  items: DeliveriesCardType[];
};

export function Deliveries({ items }: DeliveriesType): JSX.Element {
  return (
    <Container style={{ paddingTop: 300 }}>
      <StyledDeliveriesOptions>
        <StyledBackgroundColor>
          <StyledPhoneBurguer></StyledPhoneBurguer>
        </StyledBackgroundColor>
        <div>
          {items.map((d, index) => (
            <DeliveriesCard key={index} deliveries={d} />
          ))}
        </div>
      </StyledDeliveriesOptions>
      <div>
        <MenuOrders
          title="Faça o seu pedido agora mesmo!"
          text="Venha saborear a melhor experiência de hamburguenses artesanal do Empires Burger, com temática medieval!"
          textLink="Solicitar Pedido"
        />
      </div>
    </Container>
  );
}

const StyledPhoneBurguer = styled.div`
  background-image: url(${PhoneBurguer});
  width: 370px;
  height: 535px;
`;

const StyledDeliveriesOptions = styled.div`
  justify-content: space-between;
  align-items: flex-end;
  display: flex;

  @media (max-width: 428px) {
    flex-direction: column;
  }
`;
