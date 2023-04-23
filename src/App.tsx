import { HeaderComponent } from "./components/HeaderComponent";
import { Localization } from "./components/Localization";
import { Menu } from "./components/Menu";
import { PersonalizedService } from "./components/PersonalizedService";
import { PublicationsInstagram } from "./components/PublicationsInstagram";
import { SpecialOffers } from "./components/SpecialOffers";

function App(): JSX.Element {
  return (
    <div className="App">
      <HeaderComponent />
      <SpecialOffers />
      <Menu />
      <PersonalizedService />
      <PublicationsInstagram />
      <Localization />
    </div>
  );
}

export default App;
