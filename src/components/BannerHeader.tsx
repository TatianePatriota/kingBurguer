import styled from "styled-components";
import Banner from "../assets/images/bannerHeader.png";
import { PropsWithChildren } from "react";

export function BannerHeader({ children }: PropsWithChildren): JSX.Element {
  return <StyledBannerHeader>{children}</StyledBannerHeader>;
}

export const StyledBannerHeader = styled.div`
  background: url(${Banner});
  height: 545px;
  width: 100%;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;
