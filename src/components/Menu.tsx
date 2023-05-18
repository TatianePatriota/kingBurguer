import styled from "styled-components";
import BuguerMenu from "../assets/images/BuguerMenu.png";

import { useEffect, useState } from "react";
import { Container } from "./Container";
import { LargeButton } from "./Button";

const toMoneyString = (raw: number) =>
  Intl.NumberFormat("pt-BR", {
    compactDisplay: "long",
    currency: "BRL",
    style: "currency",
  }).format(raw);

type MenuOptionsType = {
  plate: string;
  price: number;
  ingredients: string;
};

export type ShowMenuType = {
  title: string;
  text: string;
  textLink: string;
};

export function Menu({ title, text, textLink }: ShowMenuType) {
  const [menu, setMenu] = useState<MenuOptionsType[] | undefined>();
  useEffect(() => {
    async function fetchMenu() {
      const resMenu = await fetch(
        "https://api.brchallenges.com/api/empire-burger/menu"
      )
        .then((res) => res.json())
        .then((data) => setMenu(data))
        .catch((e) => console.log(e));
      console.log(resMenu);
    }

    fetchMenu();
  }, []);

  // useEffect(() => {
  //   fetchMenu().then(setMenu);
  // }, []);

  return (
    <StyledMenuContainer>
      <div className="full" style={{ position: "absolute" }}>
        <StyledMenuImage />
        <StyledBackgroundBrown />
      </div>
      <Container>
        <div className="row">
          <div className="col">
            <StyledMenuText>
              <h1>{title}</h1>
              <p>{text}</p>
              <LargeButton>
                <a href="/">{textLink}</a>
              </LargeButton>
            </StyledMenuText>
          </div>
          <StyledMenuPrices className="col">
            <h2>Cardápio imperial | Burger</h2>
            {menu?.map((item, index) => (
              <div key={index}>
                <h3>
                  {item.plate}

                  <span>{toMoneyString(item.price)}</span>
                </h3>
                <p>{item.ingredients}</p>
              </div>
            ))}
          </StyledMenuPrices>
        </div>
      </Container>
    </StyledMenuContainer>
  );
}

const StyledMenuContainer = styled.div`
  margin-bottom: 300px;
  position: relative;
  width: 100%;

  & > .full {
    height: 100%;
    z-index: -1;
    width: 100%;

    display: flex;

    & > div {
      flex: 1;
    }

    @media (max-width: 428px) {
      flex-direction: column;
    }
  }

  & .row {
    display: flex;
    flex-direction: row;

    @media (max-width: 428px) {
      flex-direction: column;
    }
  }
  & .col {
    flex: 1;
  }
`;
export const StyledMenuImage = styled.div`
  background: url(${BuguerMenu});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: right;
  font-weight: 400;
  width: 100%;
  @media (max-width: 428px) {
    height: 100px;
  }
`;

export const StyledMenuText = styled.div`
  margin-top: 180px;

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

  @media (max-width: 428px) {
    h1 {
      font-size: ${({ theme }) => theme.font.gutter.small}px;
    }
  }
`;

const StyledBackgroundBrown = styled.div`
  background-color: ${({ theme }) => theme.colors.brownBackground};
  color: ${({ theme }) => theme.colors.menuColor};
  width: 50%;
  @media (max-width: 428px) {
    width: 100%;
  }
`;

const StyledMenuPrices = styled.div`
  margin-left: 30px;
  margin-top: 70px;
  h2 {
    color: ${({ theme }) => theme.colors.yellowDark};
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
    display: flex;
  }
  & span {
    flex: 1;
    display: flex;
    &::before {
      content: "";
      margin-left: 10px;
      position: relative;
      top: -5px;
      margin-right: 5px;
      display: inline-flex;
      flex: 1;
      border-bottom: 3px dashed ${({ theme }) => theme.colors.menuColor};
    }
  }

  p {
    color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.fonts.fontLato};
    line-height: 22px;
    font-weight: 400;
    font-size: ${({ theme }) => theme.font.size.small}px;
    margin: 0;
    margin-bottom: 32px;
  }
`;
