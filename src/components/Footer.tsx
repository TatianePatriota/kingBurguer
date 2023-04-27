import styled from "styled-components";
import { LogoEmpireBuguer } from "./LogoEmpireBurguer";
import { IconIFood, Instragram } from "./CommonIcons";

export function Footer(): JSX.Element {
  const footerOptions = ["Home", "Localização", "Cardápio", "Sobre"];
  return (
    <StyledFooter>
      <StyledFooterMenu>
        <div>
          <LogoEmpireBuguer title="Empire Burguer" />
        </div>
        <StyledOptionsMenu>
          {footerOptions.map((i) => (
            <ul>
              <li>
                <a href="/">{i}</a>
              </li>
            </ul>
          ))}
        </StyledOptionsMenu>
        <div>
          <IconIFood />
          <Instragram />
        </div>
      </StyledFooterMenu>
      <StyledCopyright>
        <p>
          2022 © EmpireBurger. <span>Todos os direitos reservados.</span>{" "}
        </p>
      </StyledCopyright>
    </StyledFooter>
  );
}

const StyledFooter = styled.section`
  padding: 30px 375px 0 375px;
`;

const StyledFooterMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGreySecondary};
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
  }

  a {
    padding-right: 15px;
    color: ${({ theme }) => theme.colors.titleBlack};
  }
`;

const StyledCopyright = styled.div`
  text-align: center;
  p {
    font-size: ${({ theme }) => theme.font.size.small - 2}px;
    line-height: 19px;
    font-family: ${({ theme }) => theme.fonts.fontInter};
    color: ${({ theme }) => theme.colors.copyColor};
    font-weight: 700;
  }

  span {
    font-weight: 400;
    opacity: 0.6;
  }
`;
