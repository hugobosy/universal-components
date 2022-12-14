import React from "react";
import { Parallax } from "./Parallax.styles";
import { ParallaxTypes } from "./Parallax.types";

export const ParallaxComponent: React.FC<ParallaxTypes> = ({
  width,
  height,
  children,
  isOverlay,
  image,
}) => {
  return (
    <Parallax width={width} height={height} isOverlay={isOverlay} image={image}>
      {children}
    </Parallax>
  );
};
