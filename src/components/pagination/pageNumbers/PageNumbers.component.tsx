import React from "react";
import { PageNumbersTypes } from "./PageNumbers.types";
import { ListItem, NumbersList } from "./PageNumbers.styles";
import { Link } from "../../link/Link.styles";

export const PageNumbers: React.FC<PageNumbersTypes> = ({
  totalPosts,
  postsPerPage,
  paginate,
  style: {
    textShadow,
    textAlign,
    bgColor,
    color,
    border,
    radius,
    padding,
    fontWeight,
    fontFamily,
    transition,
    isItalic,
    transform,
    hover,
    width,
    position,
    decoration,
    margin,
  },
}) => {
  const pageNumbers = [];

  for (let i = 1; i < Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <NumbersList>
        {pageNumbers.map((number) => (
          <ListItem key={number}>
            <Link
              onClick={() => paginate(number)}
              href="!#"
              transition={transition}
              hover={hover}
              fontFamily={fontFamily}
              fontWeight={fontWeight}
              padding={padding}
              color={color}
              bgColor={bgColor}
              border={border}
              decoration={decoration}
              position={position}
              textShadow={textShadow}
              textAlign={textAlign}
              radius={radius}
              isItalic={isItalic}
              transform={transform}
              width={width}
              margin={margin}
            >
              {number}
            </Link>
          </ListItem>
        ))}
      </NumbersList>
    </nav>
  );
};
