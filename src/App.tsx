import React from "react";
import { ButtonComponent } from "./components/button/Button.components";
import { ParallaxComponent } from "./components/parallax/Parallax.component";

function App() {
  return (
    <div className="App">
      <ButtonComponent text="Tekst przycisku" />
      <ParallaxComponent />
    </div>
  );
}

export default App;
