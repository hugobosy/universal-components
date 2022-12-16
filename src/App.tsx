import React from "react";
import { ButtonComponent } from "./components/button/Button.components";
import { ParallaxComponent } from "./components/parallax/Parallax.component";
import "./App.css";
import { LinkComponent } from "./components/link/Link.component";

function App() {
  const exampleHandleFunction = () => {
    console.log("Click");
  };
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
        onClick={exampleHandleFunction}
      />
      <ParallaxComponent
        width="100%"
        height="400px"
        isOverlay={{ bgColor: "#000", opacity: 0.5 }}
        image="https://cdn.pixabay.com/photo/2018/12/13/22/34/nots-3873894__480.jpg"
      >
        <div>
          <h1>Parallax</h1>
        </div>
      </ParallaxComponent>
      <LinkComponent
        href="http://www.google.pl"
        text="Link"
        width="10%"
        fontFamily="Verdana, sans-serif"
        fontColor="#567567"
        isUppercase
        fontBold={700}
        isItalic
        padding="10px 30px"
        transition={0.4}
        border="2px solid blue"
        textAlign="center"
        radius="30px 5px 10px 20px"
      />
    </div>
  );
}

export default App;
