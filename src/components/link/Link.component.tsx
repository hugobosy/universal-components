import React from "react";
import { Link } from "./Link.styles";
import { LinkTypes } from "./Link.types";

export const LinkComponent: React.FC<LinkTypes> = ({
  href,
  text,
  width,
  fontFamily,
  fontColor,
  isUppercase,
  isUnderline,
  hover,
  fontBold,
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
      fontColor={fontColor}
      isUppercase={isUppercase}
      isUnderline={isUnderline}
      hover={hover}
      fontBold={fontBold}
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
