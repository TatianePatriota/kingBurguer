import { BannerHeader } from "./BannerHeader";
import { InformationHeader } from "./InformationHeader";
import { Navigation } from "./Navigation";
import { TextHeader } from "./TextHeader";

export function HeaderComponent(): JSX.Element {
  return (
    <header>
      <Navigation />
      <BannerHeader>
        <TextHeader
          title="King Burguer"
          subTitle="Uma nova experiência!"
          text=" Para quem tem um Apetite de um REI!"
          textLink="Comprar Agora"
        />
      </BannerHeader>
      <InformationHeader />
    </header>
  );
}
