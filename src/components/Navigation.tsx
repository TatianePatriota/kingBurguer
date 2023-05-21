import { Button } from "./Button";
import { IconIFood, Instragram, WhatsAppIcon } from "./CommonIcons";
import styled from "styled-components";
import { LogoEmpireBuguer } from "./LogoEmpireBurguer";
import { Container } from "./Container";

const optionsNav = ["Home", "Promoções", "Cardápio", "Comentários", "Contatos"];

export function Navigation(): JSX.Element {
  return (
    <StyledBackground>
      <StyledNav>
        <LogoEmpireBuguer title="Empire burguer" />
        <ul>
          {optionsNav.map((i, index) => (
            <li key={index}>
              <a href="/"> {i}</a>
            </li>
          ))}
        </ul>
        <StyledIconNav>
          <IconIFood color="#FFFFFF" />
          <Instragram color="#FFFFFF" />
        </StyledIconNav>
        <StyledButton>
          <WhatsAppIcon /> Contato
        </StyledButton>
      </StyledNav>
    </StyledBackground>
  );
}

const StyledBackground = styled.section`
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
  ul {
    display: flex;
    margin-bottom: 0;

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
`;

const StyledIconNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-right: 1px solid ${({ theme }) => theme.colors.redDark};

  a {
    padding-right: 17px;
  }
`;

const StyledButton = styled(Button)`
  font-size: ${({ theme }) => theme.font.size.small}px;
  color: ${({ theme }) => theme.colors.brownDark};
  align-items: center;

  a {
    padding-right: 15px;
    text-align: center;
  }
`;
