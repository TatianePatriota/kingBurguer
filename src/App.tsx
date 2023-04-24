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
      <PersonalizedService
        title="Atendimento Personalizado"
        description="Todos os nossos clientes são tratados como rei e rainha, com a nossa
          culinária artesanal."
        textLink="Cardápio Imperial"
      />
      <PublicationsInstagram
        title="Publicações do Instagram"
        description="Todos os nossos clientes são tratados como rei e rainha, com a nossa
          colunaria artesanal."
      />
      <Localization
        title="Onde ficar a nosso castelo"
        description="Estaremos de portas abertas para a nossa realeza."
      />
    </div>
  );
}

export default App;
