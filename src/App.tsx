import { useState } from "react";
import { HeaderComponent } from "./components/HeaderComponent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <HeaderComponent />
    </div>
  );
}

export default App;
