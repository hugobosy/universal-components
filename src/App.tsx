import React from "react";
import { ButtonComponent } from "./components/button/Button.components";

function App() {
  return (
    <div className="App">
      <ButtonComponent
        text="Tekst przycisku"
        display="block"
        bgColor="blue"
        fontFamily="Verdana, sans-serif"
        fontColor="#CCC"
        border="1px solid red"
        isUppercase
        padding="10px 30px"
        radius="8px 3px 18px 29px"
      />
    </div>
  );
}

export default App;
