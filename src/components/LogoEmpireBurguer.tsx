import { IconHeaderLogoEmpire } from "./CommonIcons";
import styled from "styled-components";

export type NavigationType = {
  variant?: "primary" | "secondary";
  iconColor?: "#1D0605" | "#F43127";
};

export function LogoEmpireBuguer({
  variant,
  iconColor = "#1D0605",
}: NavigationType): JSX.Element {
  return (
    <StyledLogoEmpireBurguer>
      <IconHeaderLogoEmpire color={iconColor} />
      <StyledTitle variant={variant}>
        <span>Empire</span> Burguer
      </StyledTitle>
    </StyledLogoEmpireBurguer>
  );
}

export const StyledTitle = styled.h2<{
  variant?: "primary" | "secondary";
}>`
  color: ${({ variant, theme }) =>
    variant === "secondary"
      ? theme.colors.yellowDark
      : theme.colors.titleBrown};
  text-transform: uppercase;
  font-weight: 400;
  font-family: ${({ theme }) => theme.fonts.fontLato};
  padding-left: 8px;

  span {
    font-weight: 900;
    line-height: 32px;
  }
`;

export const StyledLogoEmpireBurguer = styled.div`
  display: flex;
  align-items: center;
`;
