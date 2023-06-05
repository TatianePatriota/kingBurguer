import styled from "styled-components";
import { Container } from "./Container";
import { InformationItem, InformationType } from "./InformationItem";

export type HeaderType = {
  items: InformationType[];
};

export function InformationsList({ items }: HeaderType) {
  return (
    <StyledInformationHeader>
      {items.map((d, index) => (
        <InformationItem key={index} information={d} />
      ))}
    </StyledInformationHeader>
  );
}

export const StyledInformationHeader = styled(Container)`
  position: relative;
  display: flex;
  border-radius: 10px;
  width: 970px;
  top: -50px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 4px 40px rgba(179, 155, 132, 0.5);
  padding: 15px;

  @media (max-width: 458px) {
    flex-direction: column;
    width: 355px;
    padding: 0 15px;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    width: 600px;
    padding: 0;
    padding-left: 15px;
  }
`;
