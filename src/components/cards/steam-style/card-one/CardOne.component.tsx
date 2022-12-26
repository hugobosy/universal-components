import React from "react";
import { Card, CardInfo, CardLayer, Description } from "./CardOne.styles";
import { CardOneTypes } from "./CardOne.types";

export const CardOneComponent: React.FC<CardOneTypes> = ({ children }) => (
  <Card>
    <img
      src="https://s1.gaming-cdn.com/images/products/1893/orig/dirt-4-pc-mac-spiel-steam-cover.jpg?v=1650458746"
      alt="ssdf"
    />

    <CardInfo>
      <CardLayer>{children}</CardLayer>
    </CardInfo>
  </Card>
);
