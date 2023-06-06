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
      <StyledButton>
        <a href="">{textLink}</a>
      </StyledButton>
    </StyledMenuOrders>
  );
}

export const StyledButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.menuColor};

  a {
    color: ${({ theme }) => theme.colors.red};
  }

  @media (max-width: 428px) {
    width: 100%;
    a {
      text-align: center;
    }
  }
`;

export const StyledMenuOrders = styled.div`
  background-color: ${({ theme }) => theme.colors.red};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px 20px;
  border-radius: 10px;
  margin-top: 100px;

  @media (max-width: 428px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledPhoneIcon = styled.div`
  padding: 14px 20px;
  background-color: ${({ theme }) => theme.colors.backgroundRedLight};
  border-radius: 50%;
`;

export const StyledMenuOrdersText = styled.div`
  font-weight: 400;
  border-left: 1px solid ${({ theme }) => theme.colors.borderLight};
  padding-left: 15px;

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

  @media (max-width: 428px) {
    border-top: 1px solid ${({ theme }) => theme.colors.borderLight};
    border-left: none;
    margin-top: 10px;

    h2 {
      margin-top: 10px;
      font-size: ${({ theme }) => theme.font.size.default}px;
    }
    p {
      margin-bottom: 20px;
    }
  }
`;
