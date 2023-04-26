import styled from "styled-components";
import { IconHeaderLogoEmpire } from "./CommonIcons";

export type NavigationType = {
  title: string;
};

export function LogoEmpireBuguer({ title }: NavigationType): JSX.Element {
  return (
    <StyledLogoEmpireBurguer>
      <IconHeaderLogoEmpire />
      <h2>{title}</h2>
    </StyledLogoEmpireBurguer>
  );
}

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
