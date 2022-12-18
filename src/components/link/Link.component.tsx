import React from "react";
import { Link } from "./Link.styles";
import { LinkTypes } from "./Link.types";

export const LinkComponent: React.FC<LinkTypes> = ({
  href,
  text,
  width,
  fontFamily,
  color,
  isUppercase,
  isUnderline,
  hover,
  fontWeight,
  isItalic,
  padding,
  bgColor,
  border,
  transition,
  textAlign,
  radius,
  textShadow,
}) => {
  return (
    <Link
      href={href}
      width={width}
      fontFamily={fontFamily}
      color={color}
      isUppercase={isUppercase}
      isUnderline={isUnderline}
      hover={hover}
      fontWeight={fontWeight}
      isItalic={isItalic}
      padding={padding}
      bgColor={bgColor}
      border={border}
      transition={transition}
      textAlign={textAlign}
      radius={radius}
      textShadow={textShadow}
    >
      {text}
    </Link>
  );
};
