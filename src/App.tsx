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
        transition={0.4}
        hover={{
          fontColor: "#CCC",
          bgColor: "#000",
          radius: "3px 2px 3px 3px",
          shadow: "5px 5px 10px rgba(0,0,0,1)",
          padding: "20px 50px",
        }}
      />
    </div>
  );
}

export default App;
