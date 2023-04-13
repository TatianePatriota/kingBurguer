import { Button } from "./Button";
import { IconHeaderLogoEmpire, IconIFood, Instragram } from "./CommonIcons";
import styled from "styled-components";

export function Navigation() {
  return (
    <StyledNav>
      <StyledLogoEmpireBurguer>
        <IconHeaderLogoEmpire />
        <h2>
          <span>Empire</span>burguer
        </h2>
      </StyledLogoEmpireBurguer>
      <div>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>

          <li>
            <a href="/">Promoções</a>
          </li>
          <li>
            <a href="/">Cardápio</a>
          </li>
          <li>
            <a href="/">Comentários</a>
          </li>
          <li>
            <a href="/">Contatos</a>
          </li>
        </ul>
      </div>
      <StyledIconNav>
        <div>
          <IconIFood />
        </div>
        <div>
          <Instragram />
        </div>
      </StyledIconNav>
      <Button title="Contato" />
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  display: flex;
  background-color: ${({ theme }) => theme.colors.navBackground};
  align-items: center;
  position: fixed;
  justify-content: center;
  width: 100%;
  ul {
    display: flex;
    justify-content: space-around;
    padding-right: 200px;

    li {
      font-size: ${({ theme }) => theme.font.size.middle}px;
    }
  }

  ul li:first-child {
    color: ${({ theme }) => theme.colors.titleBlack};
    font-weight: bold;
  }

  a {
    padding-right: 15px;
    color: ${({ theme }) => theme.colors.titleBlack};
  }
`;

export const StyledLogoEmpireBurguer = styled.div`
  display: flex;
  align-items: baseline;
  padding-right: 65px;

  h2 {
    text-transform: uppercase;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.titleBrown};
    font-family: ${({ theme }) => theme.fonts.fontLato};
    padding-left: 8px;
  }

  span {
    padding-right: 4px;
    font-weight: 900;
    line-height: 32px;
  }
`;

const StyledIconNav = styled.div`
  padding-right: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-right: 1px solid ${({ theme }) => theme.colors.redDark};
`;
