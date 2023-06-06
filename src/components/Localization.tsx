import { StyledPublicationsText } from "./PublicationsInstagram";
import { LocalizationMap } from "./LocalizationMap";
import styled from "styled-components";

export type LocalizationType = {
  title: string;
  description: string;
};

export function Localization({
  title,
  description,
}: LocalizationType): JSX.Element {
  return (
    <StyledLocalization>
      <StyledPublications>
        <h1>{title}</h1>
        <p>{description}</p>
        <LocalizationMap />
      </StyledPublications>
    </StyledLocalization>
  );
}

export const StyledLocalization = styled.div`
  padding-bottom: 30px;
`;

export const StyledPublications = styled(StyledPublicationsText)`
  @media (max-width: 428px) {
    h1 {
      font-size: ${({ theme }) => theme.font.gutter.small}px;
    }
  }
`;
