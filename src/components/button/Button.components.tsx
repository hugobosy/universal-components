import React from "react";
import { ButtonTypes } from "./Button.types";
import { Button } from "./Button.style";

export const ButtonComponent: React.FC<ButtonTypes> = ({
  text,
  fontFamily,
  fontColor,
  bgColor,
  display,
  border,
  transform,
  padding,
  radius,
  shadow,
  transition,
  hover,
  onClick,
  typeBtn,
  outline,
}) => {
  return (
    <Button
      display={display}
      fontFamily={fontFamily}
      fontColor={fontColor}
      bgColor={bgColor}
      border={border}
      transform={transform}
      padding={padding}
      radius={radius}
      shadow={shadow}
      transition={transition}
      hover={hover}
      onClick={onClick}
      typeBtn={typeBtn}
      outline={outline}
    >
      {text}
    </Button>
  );
};
