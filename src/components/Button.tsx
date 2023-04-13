import styled from "styled-components";

export const Button = styled.button`
  background-color: yellow;
  padding: 4px 20px;
  display: flex;
  border-radius: 5px;
  margin-left: 13px;
  line-height: 25px;
  font-weight: 700;
  border: none;
`;

export const LargeButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.red};
  font-size: ${({ theme }) => theme.font.size.default}px;
  line-height: 32px;
  padding: 10px 20px;
  margin-top: 10px;
  margin-left: 0;

  a {
    color: ${({ theme }) => theme.colors.white};
  }
`;
