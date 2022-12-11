import React from "react";
import { ButtonComponent } from "./components/button/Button.components";

function App() {
  return (
    <div className="App">
      <ButtonComponent
        text="This is universal button"
        display="block"
        bgColor="blue"
        fontFamily="Verdana, sans-serif"
        fontColor="#CCC"
        border="none"
        isUppercase
        padding="10px 30px"
        radius="8px 3px 18px 29px"
        shadow="2px 2px 5px 0px rgba(0,0,0,.5)"
      />
    </div>
  );
}

export default App;
