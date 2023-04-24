import { StyledPublicationsText } from "./PublicationsInstagram";
import { LocalizationMap } from "./LocalizationMap";

export type LocalizationType = {
  title: string;
  description: string;
};

export function Localization({
  title,
  description,
}: LocalizationType): JSX.Element {
  return (
    <div>
      <StyledPublicationsText>
        <h1>{title}</h1>
        <p>{description}</p>
        <LocalizationMap />
      </StyledPublicationsText>
    </div>
  );
}
