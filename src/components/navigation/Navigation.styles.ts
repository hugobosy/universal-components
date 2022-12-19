import styled, { css } from "styled-components";
import { NavigationTypes } from "./Navigation.types";
import { Positions } from "../../helpers/styles/position";

export const Navigation = styled.ul<Partial<NavigationTypes>>`
  display: flex;
  ${({ position }) => position && Positions[position]}
  ${({ isColumn }) =>
    isColumn &&
    css`
      flex-direction: column;
    `};
  list-style: none;
  ${({ gap }) =>
    gap &&
    css`
      gap: ${gap};
    `};
  ${({ color }) =>
    color &&
    css`
      color: ${color};
    `};
  ${({ hover }) =>
    hover &&
    css`
      &:hover {
        background-color: ${hover.bgColor};
        font-weight: ${hover.fontWeight};
        border-radius: ${hover.radius};
        ${hover.isUnderline &&
        css`
          text-decoration: underline;
        `};
        border: ${hover.border};
        text-shadow: ${hover.textShadow};
      }
    `};
`;
