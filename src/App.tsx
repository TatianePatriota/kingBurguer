import { HeaderComponent } from "./components/HeaderComponent";
import { Menu } from "./components/Menu";
import { PersonalizedService } from "./components/PersonalizedService";
import { SpecialOffers } from "./components/SpecialOffers";

function App(): JSX.Element {
  return (
    <div className="App">
      <HeaderComponent />
      <SpecialOffers />
      <Menu />
      <PersonalizedService />
    </div>
  );
}

export default App;
