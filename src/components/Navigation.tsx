import { Button } from "./Button";
import {
  IconIFood,
  Instragram,
  MenuHamburguer,
  WhatsAppIcon,
} from "./CommonIcons";
import styled from "styled-components";
import { LogoEmpireBuguer } from "./LogoEmpireBurguer";
import { Container } from "./Container";
import { useState } from "react";

export function Navigation(): JSX.Element {
  const optionsNav = [
    "Home",
    "Promoções",
    "Cardápio",
    "Comentários",
    "Contatos",
  ];

  function showMenuHamburguer() {
    const [menuHamburguer, setMenuHmaburguer] = useState();
  }

  return (
    <StyledBackground>
      <StyledNav>
        <LogoEmpireBuguer variant="primary" />
        <StyledNavigationList id="menuHamburguer">
          <StyledNavigationItems>
            <ul>
              {optionsNav.map((i, index) => (
                <li key={index}>
                  <a href="/"> {i}</a>
                </li>
              ))}
            </ul>
          </StyledNavigationItems>
          <StyledIconNav>
            <IconIFood color="#FFFFFF" />
            <Instragram color="#FFFFFF" />
          </StyledIconNav>
          <StyledButton>
            <WhatsAppIcon /> Contato
          </StyledButton>
        </StyledNavigationList>
        <StyledMenuHamburguer>
          <MenuHamburguer />
        </StyledMenuHamburguer>
      </StyledNav>
    </StyledBackground>
  );
}

export const StyledMenuHamburguer = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundGray};
  border-radius: 3px;
  padding: 5px;

  & svg {
    display: none;
  }

  @media (max-width: 1024px) {
    background-color: transparent;
    & svg {
      display: block;
    }
  }
`;

export const StyledBackground = styled.section`
  background-color: ${({ theme }) => theme.colors.navBackground};
  width: 100%;
  height: 64px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const StyledNav = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const StyledIconNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-right: 1px solid ${({ theme }) => theme.colors.redDark};

  a {
    padding-right: 17px;
  }
`;

export const StyledButton = styled(Button)`
  font-size: ${({ theme }) => theme.font.size.small}px;
  color: ${({ theme }) => theme.colors.brownDark};
  align-items: center;

  a {
    padding-right: 15px;
    text-align: center;
  }
`;
export const StyledNavigationList = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const StyledNavigationItems = styled.div`
  ul {
    display: flex;

    li {
      padding-right: 10px;
      font-size: ${({ theme }) => theme.font.size.middle}px;
      line-height: 25px;
      color: ${({ theme }) => theme.colors.brownLight};
    }
  }

  a {
    color: ${({ theme }) => theme.colors.titleBlack};
  }

  li:first-child {
    color: ${({ theme }) => theme.colors.titleBlack};
    font-weight: bold;
  }

  @media (max-width: 768px) {
    display: block;
    background-color: black;
  }
`;
