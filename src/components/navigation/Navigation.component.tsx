import React from "react";
import { NavigationTypes } from "./Navigation.types";
import { Navigation } from "./Navigation.styles";

export const NavigationComponent: React.FC<NavigationTypes> = ({ links }) => {
  return (
    <Navigation>
      {links.map((item) => (
        <li>
          <a href={item.link}>{item.name}</a>
        </li>
      ))}
    </Navigation>
  );
};
