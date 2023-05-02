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
      <StyledPublicationsText>
        <h1>{title}</h1>
        <p>{description}</p>
        <LocalizationMap />
      </StyledPublicationsText>
    </StyledLocalization>
  );
}

const StyledLocalization = styled.div`
  padding-bottom: 30px;
`;
