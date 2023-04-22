import { StyledPublicationsText } from "./PublicationsInstagram";
import { LocalizationMap } from "./LocalizationMap";

export function Localization(): JSX.Element {
  return (
    <div>
      <StyledPublicationsText>
        <h1>Onde ficar a nosso castelo</h1>
        <p>Estaremos de portas abertas para a nossa realeza.</p>
      </StyledPublicationsText>
      <div>
        <LocalizationMap />
      </div>
    </div>
  );
}
