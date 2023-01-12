import React from "react";
import { ButtonComponent } from "./components/button/Button.components";
import { ParallaxComponent } from "./components/parallax/Parallax.component";
import "./App.css";
import { LinkComponent } from "./components/link/Link.component";
import { SocialsComponent } from "./components/socials/Socials.component";
import useMediaQuery from "./helpers/hooks/media-query";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { NavigationComponent } from "./components/navigation/Navigation.component";
import { AccordionComponent } from "./components/accordion/Accordion.component";

import { CardOneComponent } from "./components/cards/steam-style/card-one/CardOne.component";

import { PaginationComponent } from "./components/pagination/Pagination.component";
import { Button } from "./components/button/Button.style";


function App() {
  const exampleHandleFunction = () => {
    console.log("Click");
  };

  const media = useMediaQuery("(min-width: 768px)");

  return (
    <div className="App">
      <ButtonComponent
        text="This is universal button"
        display="block"
        bgColor="blue"
        fontFamily="Verdana, sans-serif"
        fontColor="#CCC"
        border="none"
        transform="uppercase"
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
      <ButtonComponent
        text="Button"
        onClick={() => {}}
        typeBtn="primary"
        border="none"
      />
      <ButtonComponent
        text="Button"
        onClick={() => {}}
        typeBtn="danger"
        border="none"
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
        transform="uppercase"
        fontWeight={700}
        decoration="overline underline"
        padding="10px 30px"
        transition={0.4}
        border="2px solid blue"
        textAlign="center"
        radius="30px 5px 10px 20px"
        bgColor="#777"
        textShadow="0 0 3px rgba(0,0,0,1)"
        color="#BCC456"
        hover={{
          bgColor: "#CCC",
          border: "1px solid red",
          radius: "2px 5px 8px 30px",
          isUnderline: true,
          fontWeight: 400,
          textShadow: "0 0 20px red",
        }}
      />

      <SocialsComponent
        facebook={{
          icon: <FaFacebookF />,
          href: "http://facebook.com",
        }}
        twitter={{
          icon: <FaTwitter />,
          href: "http://twitter.com",
        }}
        instagram={{
          icon: <FaInstagram />,
          href: "http://instagram.com",
        }}
        linkedin={{
          icon: <FaLinkedinIn />,
          href: "http://linkedin.com",
        }}
        size={media ? 25 : 15}
        hover={{ fill: "gold" }}
        transition={0.4}
      />
      <NavigationComponent
        links={[
          { name: "Strona główna", link: "home.html" },
          { name: "Produkty", link: "products.html" },
          { name: "Kontakt", link: "contact.html" },
        ]}
        transition={0.4}
        gap="20px"
        position="relative"
        positionBlock="static"
        hover={{ isUnderline: true }}
        color="#BCC222"
        fontFamily="Verdana, sans-serif"
      />
      <AccordionComponent
        accordionItems={[
          {
            header: "Title1",
            content: <h1>Witaj</h1>,
          },
          {
            header: "Title2",
            content:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          },
          {
            header: "Title3",
            content:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          },
        ]}
        maxWidth="480px"
        heightContent="180px"
        bgHeader="#473829"
        padding="10px"
        margin="10px 0"
        fontSize={1}
        fontFamily="Verdana, sans-serif"
        fontWeight={700}
        color="green"
      />


      <CardOneComponent img="https://s1.gaming-cdn.com/images/products/1893/orig/dirt-4-pc-mac-spiel-steam-cover.jpg?v=1650458746">
        <div>
          <h1>witaj</h1>
        </div>
      </CardOneComponent>

      <PaginationComponent
        url="https://jsonplaceholder.typicode.com/posts"
        style={{
          border: "1px solid black",
          padding: "10px",
          margin: "5px 10px",
        }}
      />

    </div>
  );
}

export default App;
