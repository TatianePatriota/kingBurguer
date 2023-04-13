import styled from "styled-components";
import { WhatsApp } from "./CommonIcons";

export function Button({ title }: any): JSX.Element {
  return (
    <StyledButton>
      <WhatsApp />
      <a href="/">{title}</a>
    </StyledButton>
  );
}

export const StyledButton = styled.div`
  background-color: yellow;
  padding: 4px 20px;
  display: flex;
  align-items: center;
  border-radius: 5px;
  margin-left: 13px;

  a {
    padding-left: 9px;
    line-height: 25px;
    font-weight: 700;
  }
`;
