import React from "react";
import { NavigationTypes } from "./Navigation.types";
import { Navigation } from "./Navigation.styles";
import { LinkComponent } from "../link/Link.component";

export const NavigationComponent: React.FC<NavigationTypes> = ({
  position,
  links,
  isColumn,
  gap,
  fontFamily,
  hover,
  transition,
  color,
}) => {
  return (
    <Navigation position={position} isColumn={isColumn} gap={gap}>
      {links.map((item) => (
        <li>
          <LinkComponent
            href={item.link}
            text={item.name}
            fontFamily={fontFamily}
            hover={hover}
            transition={transition}
            color={color}
          />
        </li>
      ))}
    </Navigation>
  );
};
