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
        <StyledOptionsNav>
          {optionsNav.map((i, index) => (
            <ul key={index}>
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
  position: fixed;
`;

export const StyledNav = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledOptionsNav = styled.div`
  display: flex;
  justify-content: space-between;
  ul {
    li {
      font-size: ${({ theme }) => theme.font.size.middle}px;
      line-height: 25px;
      color: ${({ theme }) => theme.colors.brownLight};
    }
  }

  a {
    color: ${({ theme }) => theme.colors.titleBlack};
  }

  ul:first-child {
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
