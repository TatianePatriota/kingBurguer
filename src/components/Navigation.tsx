import { Button } from "./Button";
import { IconIFood, Instragram, WhatsAppIcon } from "./CommonIcons";
import styled from "styled-components";
import { LogoEmpireBuguer } from "./LogoEmpireBurguer";

const optionsNav = ["Home", "Promoções", "Cardápio", "Comentários", "Contatos"];

export function Navigation(): JSX.Element {
  return (
    <StyledNav>
      <LogoEmpireBuguer title="Empire burguer" />
      <StyledOptionsNav>
        {optionsNav.map((i) => (
          <ul>
            <li>
              <a href="/"> {i}</a>
            </li>
          </ul>
        ))}
      </StyledOptionsNav>
      <StyledIconNav>
        <div>
          <IconIFood />
        </div>
        <div>
          <Instragram />
        </div>
      </StyledIconNav>
      <Button>
        <WhatsAppIcon /> Contato
      </Button>
    </StyledNav>
  );
}

export const StyledNav = styled.nav`
  display: flex;
  background-color: ${({ theme }) => theme.colors.navBackground};
  align-items: center;
  position: fixed;
  width: 100%;
  justify-content: center;
`;

export const StyledOptionsNav = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 200px;
  ul {
    display: flex;
    justify-content: space-around;

    li {
      font-size: ${({ theme }) => theme.font.size.middle}px;
      line-height: 25px;
      color: ${({ theme }) => theme.colors.brownLight};
    }
  }

  a {
    padding-right: 15px;
    color: ${({ theme }) => theme.colors.titleBlack};
  }

  /* li:first-child a {
    color: ${({ theme }) => theme.colors.titleBlack};
    font-weight: bold;
  } */
`;

const StyledIconNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-right: 1px solid ${({ theme }) => theme.colors.redDark};
`;
