import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1180px;
  padding: 0 16px;
  margin: 0 auto;

  @media (max-width: 428px) {
    padding: 0 10px;
  }

  @media (max-width: 768px) {
    padding: 0;
  }
`;
