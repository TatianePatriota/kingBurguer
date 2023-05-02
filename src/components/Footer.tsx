import styled from "styled-components";
import { LogoEmpireBuguer } from "./LogoEmpireBurguer";
import { IconIFood, Instragram } from "./CommonIcons";
import { Container } from "./Container";

export function Footer(): JSX.Element {
  const footerOptions = ["Home", "Localização", "Cardápio", "Sobre"];
  return (
    <StyledFooter>
      <StyledFooterMenu>
        <LogoEmpireBuguer title="Empire Burguer" />
        <StyledOptionsMenu>
          {footerOptions.map((i, index) => (
            <ul key={index}>
              <li>
                <a href="/">{i}</a>
              </li>
            </ul>
          ))}
        </StyledOptionsMenu>
        <IconIFood />
        <Instragram />
      </StyledFooterMenu>
      <StyledCopyright>
        2022 © EmpireBurger. <span>Todos os direitos reservados.</span>
      </StyledCopyright>
    </StyledFooter>
  );
}

const StyledFooter = styled(Container)``;

const StyledFooterMenu = styled(Container)`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGreySecondary};
  padding-bottom: 27px;
`;

const StyledOptionsMenu = styled.div`
  display: flex;

  ul {
    display: flex;
    justify-content: space-around;

    li {
      font-size: ${({ theme }) => theme.font.size.middle}px;
      line-height: 25px;
      color: ${({ theme }) => theme.colors.brownLight};
    }

    :first-child {
      color: ${({ theme }) => theme.colors.brownSeconday};
      font-weight: 700;
    }
  }

  a {
    padding-right: 15px;
    color: ${({ theme }) => theme.colors.titleBlack};
  }
`;

const StyledCopyright = styled.p`
  text-align: center;
  font-size: ${({ theme }) => theme.font.size.small - 2}px;
  line-height: 19px;
  font-family: ${({ theme }) => theme.fonts.fontInter};
  color: ${({ theme }) => theme.colors.copyColor};
  font-weight: 700;
  padding-top: 10px;

  span {
    font-weight: 400;
    opacity: 0.6;
  }
`;
