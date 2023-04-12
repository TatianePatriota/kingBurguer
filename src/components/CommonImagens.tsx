import styled from "styled-components";
import Banner from "../assets/images/bannerHeader.png";

export function BannerHeader(): JSX.Element {
  return <StyledBannerHeader></StyledBannerHeader>;
}

export const StyledBannerHeader = styled.div`
  background: url(${Banner});
  height: 545px;
  background-size: contain;
  background-repeat: no-repeat;
`;
