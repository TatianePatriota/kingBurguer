import { BannerHeader } from "./BannerHeader";
import { InformationHeader, InformationType } from "./InformationHeader";
import { Navigation } from "./Navigation";
import { TextHeader } from "./TextHeader";

export type HeaderType = {
  items: InformationType[];
};

export function HeaderComponent({ items }: HeaderType): JSX.Element {
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
      <div>
        {items.map((d) => (
          <InformationHeader informations={d} />
        ))}
      </div>
    </header>
  );
}
