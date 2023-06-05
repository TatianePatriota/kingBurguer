import styled from "styled-components";
import { LogoEmpireBuguer } from "./LogoEmpireBurguer";
import { IconIFood, Instragram } from "./CommonIcons";
import { Container } from "./Container";

export function Footer(): JSX.Element {
  const footerOptions = ["Home", "Localização", "Cardápio", "Sobre"];

  return (
    <Container>
      <StyledFooterMenu>
        <LogoEmpireBuguer iconColor="#F43127" variant="secondary" />
        <StyledOptionsMenu>
          <ul>
            {footerOptions.map((i, index) => (
              <li key={index}>
                <a href="/">{i}</a>
              </li>
            ))}
          </ul>
        </StyledOptionsMenu>
        <StyledIcons>
          <IconIFood color="#F59A1B" />
          <Instragram color="#F59A1B" />
        </StyledIcons>
      </StyledFooterMenu>
      <StyledCopyright>
        2022 © EmpireBurger. <span>Todos os direitos reservados.</span>
      </StyledCopyright>
    </Container>
  );
}

export const StyledFooterMenu = styled(Container)`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGreySecondary};
  padding-bottom: 27px;

  @media (max-width: 428px) {
    flex-direction: column;
    align-items: center;
    padding: 0;
  }
`;

export const StyledOptionsMenu = styled.div`
  ul {
    display: flex;
    justify-content: space-around;

    @media (max-width: 428px) {
      flex-direction: column;
      align-items: center;
      border-top: 1px solid red;
    }

    li {
      line-height: 25px;
      color: ${({ theme }) => theme.colors.brownLight};
      font-size: ${({ theme }) => theme.font.size.middle}px;
    }

    li:first-child {
      color: ${({ theme }) => theme.colors.brownSeconday};
      font-weight: 700;
    }
  }

  a {
    padding-right: 15px;
    color: ${({ theme }) => theme.colors.titleBlack};
  }
`;

export const StyledCopyright = styled.p`
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

export const StyledIcons = styled.div`
  svg:first-child {
    margin-right: 10px;
  }
`;
