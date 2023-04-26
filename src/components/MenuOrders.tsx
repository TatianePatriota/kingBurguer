import { PhoneIcon } from "./CommonIcons";
import { Button } from "./Button";
import styled from "styled-components";

export type MenuOrdersType = {
  title: string;
  text: string;
  textLink: string;
};

export function MenuOrders({
  title,
  text,
  textLink,
}: MenuOrdersType): JSX.Element {
  return (
    <StyledMenuOrders>
      <StyledPhoneIcon>
        <PhoneIcon />
      </StyledPhoneIcon>
      <StyledMenuOrdersText>
        <h2>{title}</h2>
        <p>{text}</p>
      </StyledMenuOrdersText>
      <Button>
        <a href="">{textLink}</a>
      </Button>
    </StyledMenuOrders>
  );
}

const StyledMenuOrders = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.red};
  padding: 10px 20px;
  border-radius: 10px;
`;

const StyledPhoneIcon = styled.div`
  padding: 14px 20px;
  background-color: ${({ theme }) => theme.colors.backgroundRedLight};
  border-radius: 50%;
`;

const StyledMenuOrdersText = styled.div`
  font-weight: 400;
  h2 {
    color: ${({ theme }) => theme.colors.titleLightBrown};
    text-transform: uppercase;
    font-size: ${({ theme }) => theme.font.gutter.small}px;
    font-family: ${({ theme }) => theme.fonts.fontLelita};
    line-height: 28px;
  }

  p {
    color: ${({ theme }) => theme.colors.lightWhite};
    font-size: ${({ theme }) => theme.font.size.small}px;
    font-family: ${({ theme }) => theme.fonts.fontLato};
    margin: 0;
  }
`;
