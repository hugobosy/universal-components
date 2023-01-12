import React from "react";
import { Card, CardInfo } from "./CardOne.styles";
import { CardOneTypes } from "./CardOne.types";

export const CardOneComponent: React.FC<CardOneTypes> = ({ img, children }) => (
  <Card>
    <img src={img} alt="ssdf" />
    <CardInfo>{children}</CardInfo>
  </Card>
);
