import styled from "styled-components";
import { ShowMenu } from "./ShowMenu";
import { useEffect, useState } from "react";

const toMoneyString = (raw: number) =>
  Intl.NumberFormat("pt-BR", {
    compactDisplay: "long",
    currency: "BRL",
    style: "currency",
  }).format(raw);

async function fetchMenu() {
  return await fetch("/db.json")
    .then((res) => res.json())
    .then((res) => res.menu)
    .catch(console.error);
}
type MenuOptionsType = {
  title: string;
  price: number;
  description: string;
};

export function Menu() {
  const [menu, setMenu] = useState<MenuOptionsType[] | undefined>();
  useEffect(() => {
    fetchMenu().then(setMenu);
  }, []);

  return (
    <StyledContainerMenu>
      <ShowMenu
        title="Escolha o seu combo imperial, peça agora!"
        text="Temos vários tipos de pratos para a nossa realeza, fique esperto
        porque temos sempre promoção!"
        textLink="Ver Cardápio Completo"
      />
      <StyledMenuPrices>
        <h2>Cardápio imperial | Burger</h2>
        {menu?.map((item, index) => (
          <div key={index}>
            <h3>
              {item.title}
              <span>{toMoneyString(item.price)}</span>
            </h3>
            <p>{item.description}</p>
          </div>
        ))}
      </StyledMenuPrices>
    </StyledContainerMenu>
  );
}

const StyledMenuPrices = styled.div`
  background-color: ${({ theme }) => theme.colors.brownBackground};
  color: ${({ theme }) => theme.colors.menuColor};
  width: 50%;

  h2 {
    color: ${({ theme }) => theme.colors.backgroundYellow};
    text-transform: uppercase;
    font-size: ${({ theme }) => theme.font.gutter.default}px;
    font-family: ${({ theme }) => theme.fonts.fontLelita};
    line-height: 35px;
    margin-bottom: 15px;
  }
  h3 {
    color: ${({ theme }) => theme.colors.menuColor};
    text-transform: uppercase;
    font-size: ${({ theme }) => theme.font.size.default}px;
    font-family: ${({ theme }) => theme.fonts.fontLelita};
    line-height: 22px;
    padding-bottom: 4px;
  }

  p {
    color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.fonts.fontLato};
    line-height: 22px;
    font-weight: 400;
    font-size: ${({ theme }) => theme.font.size.small}px;
    margin: 0;
    margin-bottom: 20px;
  }
`;

const StyledContainerMenu = styled.section`
  display: flex;
  justify-content: space-between;
`;
