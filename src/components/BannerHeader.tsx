import styled from "styled-components";
import Banner from "../assets/images/bannerHeader.png";
import { PropsWithChildren } from "react";

export function BannerHeader({ children }: PropsWithChildren): JSX.Element {
  return <StyledBannerHeader>{children}</StyledBannerHeader>;
}

export const StyledBannerHeader = styled.div`
  background: url(${Banner});
  width: 100vw;
  height: 545px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
