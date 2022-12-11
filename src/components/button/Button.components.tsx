import React from "react";
import { ButtonTypes } from "./Button.types";
import { Button } from "./Button.style";

export const ButtonComponent: React.FC<ButtonTypes> = ({
  text,
  fontFamily,
  fontColor,
  bgColor,
  display,
  isBorder,
  isUppercase,
}) => {
  return (
    <Button
      display={display}
      fontFamily={fontFamily}
      fontColor={fontColor}
      bgColor={bgColor}
      isBorder={isBorder}
      isUppercase={isUppercase}
    >
      {text}
    </Button>
  );
};
