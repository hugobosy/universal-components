import React from "react";
import { Wrapper } from "./Parallax.styles";
import { ParallaxTypes } from "./Parallax.types";

export const ParallaxComponent: React.FC<ParallaxTypes> = ({
  width,
  height,
  children,
  isOverlay,
  image,
}) => {
  return <Wrapper></Wrapper>;
};
