import { BannerHeader } from "./BannerHeader";
import { InformationHeader } from "./InformationHeader";
import { Navigation } from "./Navigation";
import { TextHeader } from "./TextHeader";

export function HeaderComponent(): JSX.Element {
  return (
    <header>
      <Navigation />
      <BannerHeader>
        <TextHeader />
      </BannerHeader>
      <InformationHeader />
    </header>
  );
}
