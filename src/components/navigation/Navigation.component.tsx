import React from "react";
import { NavigationTypes } from "./Navigation.types";
import { Navigation } from "./Navigation.styles";
import { LinkComponent } from "../link/Link.component";

export const NavigationComponent: React.FC<NavigationTypes> = ({
  position,
  positionBlock,
  links,
  isColumn,
  gap,
  fontFamily,
  hover,
  transition,
  color,
}) => {
  return (
    <Navigation positionBlock={positionBlock} isColumn={isColumn} gap={gap}>
      {links.map((item) => (
        <li key={item.name}>
          <LinkComponent
            href={item.link}
            text={item.name}
            fontFamily={fontFamily}
            hover={hover}
            transition={transition}
            color={color}
            position={position}
          />
        </li>
      ))}
    </Navigation>
  );
};
