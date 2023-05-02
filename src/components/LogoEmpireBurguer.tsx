import styled from "styled-components";
import { IconHeaderLogoEmpire } from "./CommonIcons";

export type NavigationType = {
  title: string;
  iconColor?: "#1D0605" | "#F43127";
};

export function LogoEmpireBuguer({
  title,
  iconColor = "#1D0605",
}: NavigationType): JSX.Element {
  return (
    <StyledLogoEmpireBurguer>
      <IconHeaderLogoEmpire color={iconColor} />
      <h2>{title}</h2>
    </StyledLogoEmpireBurguer>
  );
}

export const StyledLogoEmpireBurguer = styled.div`
  display: flex;
  align-items: center;

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
