import React from "react";
import { NavigationTypes } from "./Navigation.types";
import { Navigation } from "./Navigation.styles";
import { LinkComponent } from "../link/Link.component";

export const NavigationComponent: React.FC<NavigationTypes> = ({
  links,
  isColumn,
  gap,
  fontFamily,
  fontColor,
  hover,
  transition,
}) => {
  return (
    <Navigation isColumn={isColumn} gap={gap}>
      {links.map((item) => (
        <li>
          <LinkComponent
            href={item.link}
            text={item.name}
            fontFamily={fontFamily}
            fontColor={fontColor}
            hover={hover}
            transition={transition}
          />
        </li>
      ))}
    </Navigation>
  );
};
